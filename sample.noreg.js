const gherkin = require('node-gherkin-runner');
const request = require('supertest');
const assert = require('assert')

const app = request(require('./sample'));

gherkin.api.featureSteps(/Hello Everywhere/)
    .given(/I am in (.*)/, function (country) {
      this.country = country;
    })
    .given(/My name is (.*)/, function (name) {
      this.name = name;
    })
    .when('I ask for a hello sentence', function(){
      this.api = app.get(`/hi/${this.country}`)
        .query({name: this.name});
    })
    .then(/I should say (.*)/, function(hello){
      return this.api
        .expect(200)
        .expect({say: hello})
        .then();
    })
    .after(() => {});
