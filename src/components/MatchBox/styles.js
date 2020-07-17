import styled from 'styled-components/native';

export const Container = styled.View`
    height: 100px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom-width: 1px;
    border-bottom-color: rgba(0, 0, 0, 1);
    border-top-width: 1px;
    border-top-color: rgba(0, 0, 0, 1);
    padding: 10px;
    border-radius: 0.5px;
    margin-bottom: 5px;
    background: ${props => (props.win ? '#48D1CC' : '#F08080' )}
`;

export const KDA = styled.Text`
    font-size: 30px;
    margin-bottom: 10px;
`;

export const Title = styled.Text`
    font-size: 30px;
    color: #fff;
`;

export const Status = styled.View`
    flex: 2;
    justify-content: space-around;
    align-items: center;
`