cc.Class({
    extends: cc.Component,

    properties: {

        tetrisModel1: {
            default: null,
            type: cc.Prefab
        },
        tetrisModel2: {
            default: null,
            type: cc.Prefab
        },
        tetrisModel3: {
            default: null,
            type: cc.Prefab
        },
        tetrisModel4: {
            default: null,
            type: cc.Prefab
        },
        rotation:{
            default: [],
            type: [cc.Integer]
        }
    },

    // use this for initialization
    onLoad: function () {

    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {et

    // },
});
