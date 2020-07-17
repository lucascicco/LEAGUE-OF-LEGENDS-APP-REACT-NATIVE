import React from 'react';
import { ActivityIndicator, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';

import { Container, Text } from './styles';

export default function ButtonTouch({ children, loading, ...rest }) {
  return (
    <TouchableHighlight {...rest}>
        <Container>
            {loading ? (
               <ActivityIndicator size="small" color="#fff" />
             ) : (
               <Text>{children}</Text>
             )}
        </Container>  
    </TouchableHighlight>
  );
}

ButtonTouch.propTypes = {
  children: PropTypes.string.isRequired,
  loading: PropTypes.bool,
};

ButtonTouch.defaultProps = {
  loading: false,
};