import React, {Fragment} from 'react';
import { ActivityIndicator, View, Text , LayoutAnimation, Animated , StyleSheet} from 'react-native';
import { connect } from 'react-redux';
import { MaterialIcons } from '@expo/vector-icons';
import Background from '~/components/Background';
import { withNavigationFocus } from 'react-navigation';
import {  MatchListAdd } from '~/store/modules/lol/actions';
import PropTypes from 'prop-types';

import api from '~/services/api';
import Tier from '~/components/Tier';
import Match from '~/components/Match';

import {Alert} from 'react-native';
import {Container} from './styles';


class Dashboard extends React.Component{
    state = {
        ranked: [],
        refresh: false,
        loading: true,
        error: '',
        loading2: false,
        animation: new Animated.Value(300)
    }


    static navigationOptions = {
        tabBarLabel: 'Meu Perfil',
        tabBarIcon: ({ tintColor }) =>  (
            <MaterialIcons name="account-circle" size={20} color={tintColor} />
        )  
    }

    TierOpacity =  new Animated.Value(0)

    startAnimation = () => {
        Animated.timing(this.state.animation, {
            toValue: 0,
            duration : 2500,
            useNativeDriver: true   
          }).start()
    }

    HandleGrabRanked = async () => {
        try{    
            const responseTier = await api.get('searchingLeagueTierRoute', {
                params: {
                    nickname: this.props.profile.nickname
                }
            })

            this.setState({ ranked: responseTier.data })
            console.log('Sendo chamada')
        }catch(e){
            Alert.alert(
                'Erro no sistema',
                'Por favor, aguarde um instante.'
            )
            this.setState({error: 'Erro 1'})
        }
    }

    handleOnRefresh = async () =>{
        this.setState({ refresh: true })
        await this.HandleMatchList()
    }

    sleep = (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
      }


    HandleMatchList = async () => {
        try{   
            this.setState({ loading2: true })

            const responseMatches = await api.get('MatchListRankedGames', {
                params: {
                    nickname: this.props.profile.nickname,
                }
            })  
            
            const matches = responseMatches.data
            
            const linking = async (matches) => {
              let results=[]

                for(let item of matches){
                    const details = await api.get(`/MatchDetailRoute?gameId=${item.gameId}&accountId=${this.props.profile.account_id}`)
                    results.push(details.data)
                }

                return results
            }

            linking(matches).then(results => {
               this.props.MatchListAdd(results)
               this.setState({ refresh: false })
               this.setState({ loading2: false })
               this.startAnimation()
            })  
            
        }catch(e){
            this.setState({error: 'Erro 1'})

            Alert.alert(
                'Erro no sistema X',
                'Por favor, aguarde um instante.'
            )

            this.setState({ refresh: false })
        }
    }   

    async componentDidMount(){
        console.log(this.props.profile)
        await this.HandleGrabRanked()
        this.setState({ loading: false })

        Animated.timing(this.TierOpacity, {
            toValue: 1,
            duration: 2000,
            delay: 500,
            useNativeDriver: true,
        }).start()

        if(this.state.ranked.tier !== 'UNRANKED'){
                await this.HandleMatchList()
        }
    }

    async componentDidUpdate(prevProps) {
        if (prevProps.isFocused !== this.props.isFocused) {
            
            await this.HandleGrabRanked()
            
            this.setState({ loading: false })
        }
    }



    render(){    
       const transformStyle = {
            transform : [{ 
              translateY : this.state.animation,
            }]
          }
       
        return(
            <Background>
                <Container>
                    {this.state.loading ? (
                        <View style={styles.viewLayout}>
                            <Text style={styles.TextLoading}>Aguarde invocador, estamos buscando seus dados.</Text>
                            <ActivityIndicator size="large" color="#fff" />
                        </View>
                    ) : (
                        <Fragment>
                            <Animated.View style={{ 
                                opacity: this.TierOpacity,
                                flex: 1
                            }}>
                                <Tier RankedStatus={this.state.ranked}/>
                            </Animated.View>
                            

                            {this.state.ranked.tier === 'UNRANKED' ? (
                                <View style={styles.viewLayout}>
                                    <Text style={styles.TextLoading}>Jogador não possui histórico para partidas ranqueadas</Text>
                                </View>
                            ) : (
                                <Fragment>
                                    {this.state.loading2 ? (
                                        <View style={styles.viewLayout}>
                                            <Text style={styles.TextLoading}>Carregando histórico...</Text>
                                            <ActivityIndicator size="large" color="#fff" />
                                        </View>
                                        ) : (
                                        <View style={{flex: 1}}>
                                            {this.props.matchlist && (
                                                <Animated.View style={transformStyle}>
                                                    <Match Matches={this.props.matchlist} refreshing={this.state.refresh} onRefresh={this.handleOnRefresh} />
                                                </Animated.View>
                                            )}          
                                        </View>
                                    )}
                                </Fragment>  
                            )}
                        </Fragment>
                    )}
                </Container>
            </Background>
        )
    } 
}  

const styles = StyleSheet.create({
    viewLayout: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center'
    },
    TextLoading: {
        color: '#fff', 
        fontSize: 25, 
        marginBottom: 15, 
        textAlign: 'center'
    },
    MatchLayout: {  
        position: 'absolute',
        borderColor: 'red',
        borderWidth: 10
    }
})

const mapStateToProps = (state) => {
    return {
      matchlist: state.lol.Matchlist,
      profile: state.user.profile
    };
  };

  
const mapDispatchToProps = (dispatch) => ({
    MatchListAdd: (matches) => dispatch(MatchListAdd(matches))
  });
  
  

export default connect(mapStateToProps, mapDispatchToProps)(withNavigationFocus(Dashboard));
  
