import React, { Component } from 'react';
import { Container, Header, Content, Item, Input, Icon , Button,Text,center, Body } from 'native-base';
import {View} from 'react-native';
import Expo from "expo";
import { StatusBar, TouchableOpacity,Image } from "react-native";
import Api from '../../server/Api';

export default class LogoTitle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
         picUri:this.props.picUri
        };
    }
    render() {
        return (
          <Image
            source={{uri:this.state.picUri}}
            style={{ width: 44, height: 44, borderRadius: 25, borderWidth: 1 }}
          />
        );
      }
  }