import angular from 'angular';
import config from './config';
import configureStates from './config.states';

export default function(ngModule, options){
  angular.merge(config, options);

  configureStates(ngModule, options);
};
