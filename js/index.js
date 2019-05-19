(function() {
  angular.module('angularMaterialTableApp', ['ngMdTables', 'ngMaterial']).controller('MainCtrl', function($scope, $timeout) {
    $timeout((function() {
      $scope.loaded = true;
    }), 1500);
    $scope.data = [

     {
       'name': 'list-reset',
       'description': 'list-style: none; padding: 0;'
     },
     {
       'name': 'appearance-none',
       'description': 'appearance: none;'
     },
     {
       'name': 'bg-fixed',
       'description': 'background-attachment: fixed;'
     },
     {
       'name': 'bg-local',
       'description': 'background-attachment: local;'
     },
     {
       'name': 'bg-scroll',
       'description': 'background-attachment: scroll;'
     },
     {
       'name': 'bg-transparent',
       'description': 'background-color: transparent;'
     },
     {
       'name': 'bg-black',
       'description': 'background-color: #22292f;'
     },
     {
       'name': 'bg-grey-darkest',
       'description': 'background-color: #3d4852;'
     },
     {
       'name': 'bg-grey-darker',
       'description': 'background-color: #606f7b;'
     },
     {
       'name': 'bg-grey-dark',
       'description': 'background-color: #8795a1;'
     },
     {
       'name': 'bg-grey',
       'description': 'background-color: #b8c2cc;'
     },
     {
       'name': 'bg-grey-light',
       'description': 'background-color: #dae1e7;'
     },
     {
       'name': 'bg-grey-lighter',
       'description': 'background-color: #f1f5f8;'
     },
     {
       'name': 'bg-grey-lightest',
       'description': 'background-color: #f8fafc;'
     },
     {
       'name': 'bg-white',
       'description': 'background-color: #fff;'
     },
     {
       'name': 'bg-red-darkest',
       'description': 'background-color: #3b0d0c;'
     },
     {
       'name': 'bg-red-darker',
       'description': 'background-color: #621b18;'
     },
     {
       'name': 'bg-red-dark',
       'description': 'background-color: #cc1f1a;'
     },
     {
       'name': 'bg-red',
       'description': 'background-color: #e3342f;'
     },
     {
       'name': 'bg-red-light',
       'description': 'background-color: #ef5753;'
     },
     {
       'name': 'bg-red-lighter',
       'description': 'background-color: #f9acaa;'
     },
     {
       'name': 'bg-red-lightest',
       'description': 'background-color: #fcebea;'
     },
     {
       'name': 'bg-orange-darkest',
       'description': 'background-color: #462a16;'
     },
     {
       'name': 'bg-orange-darker',
       'description': 'background-color: #613b1f;'
     },
     {
       'name': 'bg-orange-dark',
       'description': 'background-color: #de751f;'
     },
     {
       'name': 'bg-orange',
       'description': 'background-color: #f6993f;'
     },
     {
       'name': 'bg-orange-light',
       'description': 'background-color: #faad63;'
     },
     {
       'name': 'bg-orange-lighter',
       'description': 'background-color: #fcd9b6;'
     },
     {
       'name': 'bg-orange-lightest',
       'description': 'background-color: #fff5eb;'
     },
     {
       'name': 'bg-yellow-darkest',
       'description': 'background-color: #453411;'
     },
     {
       'name': 'bg-yellow-darker',
       'description': 'background-color: #684f1d;'
     },
     {
       'name': 'bg-yellow-dark',
       'description': 'background-color: #f2d024;'
     },
     {
       'name': 'bg-yellow',
       'description': 'background-color: #ffed4a;'
     },
     {
       'name': 'bg-yellow-light',
       'description': 'background-color: #fff382;'
     },
     {
       'name': 'bg-yellow-lighter',
       'description': 'background-color: #fff9c2;'
     },
     {
       'name': 'bg-yellow-lightest',
       'description': 'background-color: #fcfbeb;'
     },
     {
       'name': 'bg-green-darkest',
       'description': 'background-color: #0f2f21;'
     },
     {
       'name': 'bg-green-darker',
       'description': 'background-color: #1a4731;'
     },
     {
       'name': 'bg-green-dark',
       'description': 'background-color: #1f9d55;'
     },
     {
       'name': 'bg-green',
       'description': 'background-color: #38c172;'
     },
     {
       'name': 'bg-green-light',
       'description': 'background-color: #51d88a;'
     },
     {
       'name': 'bg-green-lighter',
       'description': 'background-color: #a2f5bf;'
     },
     {
       'name': 'bg-green-lightest',
       'description': 'background-color: #e3fcec;'
     },
     {
       'name': 'bg-teal-darkest',
       'description': 'background-color: #0d3331;'
     },
     {
       'name': 'bg-teal-darker',
       'description': 'background-color: #20504f;'
     },
     {
       'name': 'bg-teal-dark',
       'description': 'background-color: #38a89d;'
     },
     {
       'name': 'bg-teal',
       'description': 'background-color: #4dc0b5;'
     },
     {
       'name': 'bg-teal-light',
       'description': 'background-color: #64d5ca;'
     },
     {
       'name': 'bg-teal-lighter',
       'description': 'background-color: #a0f0ed;'
     },
     {
       'name': 'bg-teal-lightest',
       'description': 'background-color: #e8fffe;'
     },
     {
       'name': 'bg-blue-darkest',
       'description': 'background-color: #12283a;'
     },
     {
       'name': 'bg-blue-darker',
       'description': 'background-color: #1c3d5a;'
     },
     {
       'name': 'bg-blue-dark',
       'description': 'background-color: #2779bd;'
     },
     {
       'name': 'bg-blue',
       'description': 'background-color: #3490dc;'
     },
     {
       'name': 'bg-blue-light',
       'description': 'background-color: #6cb2eb;'
     },
     {
       'name': 'bg-blue-lighter',
       'description': 'background-color: #bcdefa;'
     },
     {
       'name': 'bg-blue-lightest',
       'description': 'background-color: #eff8ff;'
     },
     {
       'name': 'bg-indigo-darkest',
       'description': 'background-color: #191e38;'
     },
     {
       'name': 'bg-indigo-darker',
       'description': 'background-color: #2f365f;'
     },
     {
       'name': 'bg-indigo-dark',
       'description': 'background-color: #5661b3;'
     },
     {
       'name': 'bg-indigo',
       'description': 'background-color: #6574cd;'
     },
     {
       'name': 'bg-indigo-light',
       'description': 'background-color: #7886d7;'
     },
     {
       'name': 'bg-indigo-lighter',
       'description': 'background-color: #b2b7ff;'
     },
     {
       'name': 'bg-indigo-lightest',
       'description': 'background-color: #e6e8ff;'
     },
     {
       'name': 'bg-purple-darkest',
       'description': 'background-color: #21183c;'
     },
     {
       'name': 'bg-purple-darker',
       'description': 'background-color: #382b5f;'
     },
     {
       'name': 'bg-purple-dark',
       'description': 'background-color: #794acf;'
     },
     {
       'name': 'bg-purple',
       'description': 'background-color: #9561e2;'
     },
     {
       'name': 'bg-purple-light',
       'description': 'background-color: #a779e9;'
     },
     {
       'name': 'bg-purple-lighter',
       'description': 'background-color: #d6bbfc;'
     },
     {
       'name': 'bg-purple-lightest',
       'description': 'background-color: #f3ebff;'
     },
     {
       'name': 'bg-pink-darkest',
       'description': 'background-color: #451225;'
     },
     {
       'name': 'bg-pink-darker',
       'description': 'background-color: #6f213f;'
     },
     {
       'name': 'bg-pink-dark',
       'description': 'background-color: #eb5286;'
     },
     {
       'name': 'bg-pink',
       'description': 'background-color: #f66d9b;'
     },
     {
       'name': 'bg-pink-light',
       'description': 'background-color: #fa7ea8;'
     },
     {
       'name': 'bg-pink-lighter',
       'description': 'background-color: #ffbbca;'
     },
     {
       'name': 'bg-pink-lightest',
       'description': 'background-color: #ffebef;'
     },
     {
       'name': 'hover:bg-transparent',
       'description': ':hover { background-color: transparent; }'
     },
     {
       'name': 'hover:bg-black',
       'description': ':hover { background-color: #22292f; }'
     },
     {
       'name': 'hover:bg-grey-darkest',
       'description': ':hover { background-color: #3d4852; }'
     },
     {
       'name': 'hover:bg-grey-darker',
       'description': ':hover { background-color: #606f7b; }'
     },
     {
       'name': 'hover:bg-grey-dark',
       'description': ':hover { background-color: #8795a1; }'
     },
     {
       'name': 'hover:bg-grey',
       'description': ':hover { background-color: #b8c2cc; }'
     },
     {
       'name': 'hover:bg-grey-light',
       'description': ':hover { background-color: #dae1e7; }'
     },
     {
       'name': 'hover:bg-grey-lighter',
       'description': ':hover { background-color: #f1f5f8; }'
     },
     {
       'name': 'hover:bg-grey-lightest',
       'description': ':hover { background-color: #f8fafc; }'
     },
     {
       'name': 'hover:bg-white',
       'description': ':hover { background-color: #fff; }'
     },
     {
       'name': 'hover:bg-red-darkest',
       'description': ':hover { background-color: #3b0d0c; }'
     },
     {
       'name': 'hover:bg-red-darker',
       'description': ':hover { background-color: #621b18; }'
     },
     {
       'name': 'hover:bg-red-dark',
       'description': ':hover { background-color: #cc1f1a; }'
     },
     {
       'name': 'hover:bg-red',
       'description': ':hover { background-color: #e3342f; }'
     },
     {
       'name': 'hover:bg-red-light',
       'description': ':hover { background-color: #ef5753; }'
     },
     {
       'name': 'hover:bg-red-lighter',
       'description': ':hover { background-color: #f9acaa; }'
     },
     {
       'name': 'hover:bg-red-lightest',
       'description': ':hover { background-color: #fcebea; }'
     },
     {
       'name': 'hover:bg-orange-darkest',
       'description': ':hover { background-color: #462a16; }'
     },
     {
       'name': 'hover:bg-orange-darker',
       'description': ':hover { background-color: #613b1f; }'
     },
     {
       'name': 'hover:bg-orange-dark',
       'description': ':hover { background-color: #de751f; }'
     },
     {
       'name': 'hover:bg-orange',
       'description': ':hover { background-color: #f6993f; }'
     },
     {
       'name': 'hover:bg-orange-light',
       'description': ':hover { background-color: #faad63; }'
     },
     {
       'name': 'hover:bg-orange-lighter',
       'description': ':hover { background-color: #fcd9b6; }'
     },
     {
       'name': 'hover:bg-orange-lightest',
       'description': ':hover { background-color: #fff5eb; }'
     },
     {
       'name': 'hover:bg-yellow-darkest',
       'description': ':hover { background-color: #453411; }'
     },
     {
       'name': 'hover:bg-yellow-darker',
       'description': ':hover { background-color: #684f1d; }'
     },
     {
       'name': 'hover:bg-yellow-dark',
       'description': ':hover { background-color: #f2d024; }'
     },
     {
       'name': 'hover:bg-yellow',
       'description': ':hover { background-color: #ffed4a; }'
     },
     {
       'name': 'hover:bg-yellow-light',
       'description': ':hover { background-color: #fff382; }'
     },
     {
       'name': 'hover:bg-yellow-lighter',
       'description': ':hover { background-color: #fff9c2; }'
     },
     {
       'name': 'hover:bg-yellow-lightest',
       'description': ':hover { background-color: #fcfbeb; }'
     },
     {
       'name': 'hover:bg-green-darkest',
       'description': ':hover { background-color: #0f2f21; }'
     },
     {
       'name': 'hover:bg-green-darker',
       'description': ':hover { background-color: #1a4731; }'
     },
     {
       'name': 'hover:bg-green-dark',
       'description': ':hover { background-color: #1f9d55; }'
     },
     {
       'name': 'hover:bg-green',
       'description': ':hover { background-color: #38c172; }'
     },
     {
       'name': 'hover:bg-green-light',
       'description': ':hover { background-color: #51d88a; }'
     },
     {
       'name': 'hover:bg-green-lighter',
       'description': ':hover { background-color: #a2f5bf; }'
     },
     {
       'name': 'hover:bg-green-lightest',
       'description': ':hover { background-color: #e3fcec; }'
     },
     {
       'name': 'hover:bg-teal-darkest',
       'description': ':hover { background-color: #0d3331; }'
     },
     {
       'name': 'hover:bg-teal-darker',
       'description': ':hover { background-color: #20504f; }'
     },
     {
       'name': 'hover:bg-teal-dark',
       'description': ':hover { background-color: #38a89d; }'
     },
     {
       'name': 'hover:bg-teal',
       'description': ':hover { background-color: #4dc0b5; }'
     },
     {
       'name': 'hover:bg-teal-light',
       'description': ':hover { background-color: #64d5ca; }'
     },
     {
       'name': 'hover:bg-teal-lighter',
       'description': ':hover { background-color: #a0f0ed; }'
     },
     {
       'name': 'hover:bg-teal-lightest',
       'description': ':hover { background-color: #e8fffe; }'
     },
     {
       'name': 'hover:bg-blue-darkest',
       'description': ':hover { background-color: #12283a; }'
     },
     {
       'name': 'hover:bg-blue-darker',
       'description': ':hover { background-color: #1c3d5a; }'
     },
     {
       'name': 'hover:bg-blue-dark',
       'description': ':hover { background-color: #2779bd; }'
     },
     {
       'name': 'hover:bg-blue',
       'description': ':hover { background-color: #3490dc; }'
     },
     {
       'name': 'hover:bg-blue-light',
       'description': ':hover { background-color: #6cb2eb; }'
     },
     {
       'name': 'hover:bg-blue-lighter',
       'description': ':hover { background-color: #bcdefa; }'
     },
     {
       'name': 'hover:bg-blue-lightest',
       'description': ':hover { background-color: #eff8ff; }'
     },
     {
       'name': 'hover:bg-indigo-darkest',
       'description': ':hover { background-color: #191e38; }'
     },
     {
       'name': 'hover:bg-indigo-darker',
       'description': ':hover { background-color: #2f365f; }'
     },
     {
       'name': 'hover:bg-indigo-dark',
       'description': ':hover { background-color: #5661b3; }'
     },
     {
       'name': 'hover:bg-indigo',
       'description': ':hover { background-color: #6574cd; }'
     },
     {
       'name': 'hover:bg-indigo-light',
       'description': ':hover { background-color: #7886d7; }'
     },
     {
       'name': 'hover:bg-indigo-lighter',
       'description': ':hover { background-color: #b2b7ff; }'
     },
     {
       'name': 'hover:bg-indigo-lightest',
       'description': ':hover { background-color: #e6e8ff; }'
     },
     {
       'name': 'hover:bg-purple-darkest',
       'description': ':hover { background-color: #21183c; }'
     },
     {
       'name': 'hover:bg-purple-darker',
       'description': ':hover { background-color: #382b5f; }'
     },
     {
       'name': 'hover:bg-purple-dark',
       'description': ':hover { background-color: #794acf; }'
     },
     {
       'name': 'hover:bg-purple',
       'description': ':hover { background-color: #9561e2; }'
     },
     {
       'name': 'hover:bg-purple-light',
       'description': ':hover { background-color: #a779e9; }'
     },
     {
       'name': 'hover:bg-purple-lighter',
       'description': ':hover { background-color: #d6bbfc; }'
     },
     {
       'name': 'hover:bg-purple-lightest',
       'description': ':hover { background-color: #f3ebff; }'
     },
     {
       'name': 'hover:bg-pink-darkest',
       'description': ':hover { background-color: #451225; }'
     },
     {
       'name': 'hover:bg-pink-darker',
       'description': ':hover { background-color: #6f213f; }'
     },
     {
       'name': 'hover:bg-pink-dark',
       'description': ':hover { background-color: #eb5286; }'
     },
     {
       'name': 'hover:bg-pink',
       'description': ':hover { background-color: #f66d9b; }'
     },
     {
       'name': 'hover:bg-pink-light',
       'description': ':hover { background-color: #fa7ea8; }'
     },
     {
       'name': 'hover:bg-pink-lighter',
       'description': ':hover { background-color: #ffbbca; }'
     },
     {
       'name': 'hover:bg-pink-lightest',
       'description': ':hover { background-color: #ffebef; }'
     },
     {
       'name': 'focus:bg-transparent',
       'description': ':focus { background-color: transparent; }'
     },
     {
       'name': 'focus:bg-black',
       'description': ':focus { background-color: #22292f; }'
     },
     {
       'name': 'focus:bg-grey-darkest',
       'description': ':focus { background-color: #3d4852; }'
     },
     {
       'name': 'focus:bg-grey-darker',
       'description': ':focus { background-color: #606f7b; }'
     },
     {
       'name': 'focus:bg-grey-dark',
       'description': ':focus { background-color: #8795a1; }'
     },
     {
       'name': 'focus:bg-grey',
       'description': ':focus { background-color: #b8c2cc; }'
     },
     {
       'name': 'focus:bg-grey-light',
       'description': ':focus { background-color: #dae1e7; }'
     },
     {
       'name': 'focus:bg-grey-lighter',
       'description': ':focus { background-color: #f1f5f8; }'
     },
     {
       'name': 'focus:bg-grey-lightest',
       'description': ':focus { background-color: #f8fafc; }'
     },
     {
       'name': 'focus:bg-white',
       'description': ':focus { background-color: #fff; }'
     },
     {
       'name': 'focus:bg-red-darkest',
       'description': ':focus { background-color: #3b0d0c; }'
     },
     {
       'name': 'focus:bg-red-darker',
       'description': ':focus { background-color: #621b18; }'
     },
     {
       'name': 'focus:bg-red-dark',
       'description': ':focus { background-color: #cc1f1a; }'
     },
     {
       'name': 'focus:bg-red',
       'description': ':focus { background-color: #e3342f; }'
     },
     {
       'name': 'focus:bg-red-light',
       'description': ':focus { background-color: #ef5753; }'
     },
     {
       'name': 'focus:bg-red-lighter',
       'description': ':focus { background-color: #f9acaa; }'
     },
     {
       'name': 'focus:bg-red-lightest',
       'description': ':focus { background-color: #fcebea; }'
     },
     {
       'name': 'focus:bg-orange-darkest',
       'description': ':focus { background-color: #462a16; }'
     },
     {
       'name': 'focus:bg-orange-darker',
       'description': ':focus { background-color: #613b1f; }'
     },
     {
       'name': 'focus:bg-orange-dark',
       'description': ':focus { background-color: #de751f; }'
     },
     {
       'name': 'focus:bg-orange',
       'description': ':focus { background-color: #f6993f; }'
     },
     {
       'name': 'focus:bg-orange-light',
       'description': ':focus { background-color: #faad63; }'
     },
     {
       'name': 'focus:bg-orange-lighter',
       'description': ':focus { background-color: #fcd9b6; }'
     },
     {
       'name': 'focus:bg-orange-lightest',
       'description': ':focus { background-color: #fff5eb; }'
     },
     {
       'name': 'focus:bg-yellow-darkest',
       'description': ':focus { background-color: #453411; }'
     },
     {
       'name': 'focus:bg-yellow-darker',
       'description': ':focus { background-color: #684f1d; }'
     },
     {
       'name': 'focus:bg-yellow-dark',
       'description': ':focus { background-color: #f2d024; }'
     },
     {
       'name': 'focus:bg-yellow',
       'description': ':focus { background-color: #ffed4a; }'
     },
     {
       'name': 'focus:bg-yellow-light',
       'description': ':focus { background-color: #fff382; }'
     },
     {
       'name': 'focus:bg-yellow-lighter',
       'description': ':focus { background-color: #fff9c2; }'
     },
     {
       'name': 'focus:bg-yellow-lightest',
       'description': ':focus { background-color: #fcfbeb; }'
     },
     {
       'name': 'focus:bg-green-darkest',
       'description': ':focus { background-color: #0f2f21; }'
     },
     {
       'name': 'focus:bg-green-darker',
       'description': ':focus { background-color: #1a4731; }'
     },
     {
       'name': 'focus:bg-green-dark',
       'description': ':focus { background-color: #1f9d55; }'
     },
     {
       'name': 'focus:bg-green',
       'description': ':focus { background-color: #38c172; }'
     },
     {
       'name': 'focus:bg-green-light',
       'description': ':focus { background-color: #51d88a; }'
     },
     {
       'name': 'focus:bg-green-lighter',
       'description': ':focus { background-color: #a2f5bf; }'
     },
     {
       'name': 'focus:bg-green-lightest',
       'description': ':focus { background-color: #e3fcec; }'
     },
     {
       'name': 'focus:bg-teal-darkest',
       'description': ':focus { background-color: #0d3331; }'
     },
     {
       'name': 'focus:bg-teal-darker',
       'description': ':focus { background-color: #20504f; }'
     },
     {
       'name': 'focus:bg-teal-dark',
       'description': ':focus { background-color: #38a89d; }'
     },
     {
       'name': 'focus:bg-teal',
       'description': ':focus { background-color: #4dc0b5; }'
     },
     {
       'name': 'focus:bg-teal-light',
       'description': ':focus { background-color: #64d5ca; }'
     },
     {
       'name': 'focus:bg-teal-lighter',
       'description': ':focus { background-color: #a0f0ed; }'
     },
     {
       'name': 'focus:bg-teal-lightest',
       'description': ':focus { background-color: #e8fffe; }'
     },
     {
       'name': 'focus:bg-blue-darkest',
       'description': ':focus { background-color: #12283a; }'
     },
     {
       'name': 'focus:bg-blue-darker',
       'description': ':focus { background-color: #1c3d5a; }'
     },
     {
       'name': 'focus:bg-blue-dark',
       'description': ':focus { background-color: #2779bd; }'
     },
     {
       'name': 'focus:bg-blue',
       'description': ':focus { background-color: #3490dc; }'
     },
     {
       'name': 'focus:bg-blue-light',
       'description': ':focus { background-color: #6cb2eb; }'
     },
     {
       'name': 'focus:bg-blue-lighter',
       'description': ':focus { background-color: #bcdefa; }'
     },
     {
       'name': 'focus:bg-blue-lightest',
       'description': ':focus { background-color: #eff8ff; }'
     },
     {
       'name': 'focus:bg-indigo-darkest',
       'description': ':focus { background-color: #191e38; }'
     },
     {
       'name': 'focus:bg-indigo-darker',
       'description': ':focus { background-color: #2f365f; }'
     },
     {
       'name': 'focus:bg-indigo-dark',
       'description': ':focus { background-color: #5661b3; }'
     },
     {
       'name': 'focus:bg-indigo',
       'description': ':focus { background-color: #6574cd; }'
     },
     {
       'name': 'focus:bg-indigo-light',
       'description': ':focus { background-color: #7886d7; }'
     },
     {
       'name': 'focus:bg-indigo-lighter',
       'description': ':focus { background-color: #b2b7ff; }'
     },
     {
       'name': 'focus:bg-indigo-lightest',
       'description': ':focus { background-color: #e6e8ff; }'
     },
     {
       'name': 'focus:bg-purple-darkest',
       'description': ':focus { background-color: #21183c; }'
     },
     {
       'name': 'focus:bg-purple-darker',
       'description': ':focus { background-color: #382b5f; }'
     },
     {
       'name': 'focus:bg-purple-dark',
       'description': ':focus { background-color: #794acf; }'
     },
     {
       'name': 'focus:bg-purple',
       'description': ':focus { background-color: #9561e2; }'
     },
     {
       'name': 'focus:bg-purple-light',
       'description': ':focus { background-color: #a779e9; }'
     },
     {
       'name': 'focus:bg-purple-lighter',
       'description': ':focus { background-color: #d6bbfc; }'
     },
     {
       'name': 'focus:bg-purple-lightest',
       'description': ':focus { background-color: #f3ebff; }'
     },
     {
       'name': 'focus:bg-pink-darkest',
       'description': ':focus { background-color: #451225; }'
     },
     {
       'name': 'focus:bg-pink-darker',
       'description': ':focus { background-color: #6f213f; }'
     },
     {
       'name': 'focus:bg-pink-dark',
       'description': ':focus { background-color: #eb5286; }'
     },
     {
       'name': 'focus:bg-pink',
       'description': ':focus { background-color: #f66d9b; }'
     },
     {
       'name': 'focus:bg-pink-light',
       'description': ':focus { background-color: #fa7ea8; }'
     },
     {
       'name': 'focus:bg-pink-lighter',
       'description': ':focus { background-color: #ffbbca; }'
     },
     {
       'name': 'focus:bg-pink-lightest',
       'description': ':focus { background-color: #ffebef; }'
     },
     {
       'name': 'bg-bottom',
       'description': 'background-position: bottom;'
     },
     {
       'name': 'bg-center',
       'description': 'background-position: center;'
     },
     {
       'name': 'bg-left',
       'description': 'background-position: left;'
     },
     {
       'name': 'bg-left-bottom',
       'description': 'background-position: left bottom;'
     },
     {
       'name': 'bg-left-top',
       'description': 'background-position: left top;'
     },
     {
       'name': 'bg-right',
       'description': 'background-position: right;'
     },
     {
       'name': 'bg-right-bottom',
       'description': 'background-position: right bottom;'
     },
     {
       'name': 'bg-right-top',
       'description': 'background-position: right top;'
     },
     {
       'name': 'bg-top',
       'description': 'background-position: top;'
     },
     {
       'name': 'bg-repeat',
       'description': 'background-repeat: repeat;'
     },
     {
       'name': 'bg-no-repeat',
       'description': 'background-repeat: no-repeat;'
     },
     {
       'name': 'bg-repeat-x',
       'description': 'background-repeat: repeat-x;'
     },
     {
       'name': 'bg-repeat-y',
       'description': 'background-repeat: repeat-y;'
     },
     {
       'name': 'bg-auto',
       'description': 'background-size: auto;'
     },
     {
       'name': 'bg-cover',
       'description': 'background-size: cover;'
     },
     {
       'name': 'bg-contain',
       'description': 'background-size: contain;'
     },
     {
       'name': 'border-collapse',
       'description': 'border-collapse: collapse;'
     },
     {
       'name': 'border-separate',
       'description': 'border-collapse: separate;'
     },
     {
       'name': 'border-transparent',
       'description': 'border-color: transparent;'
     },
     {
       'name': 'border-black',
       'description': 'border-color: #22292f;'
     },
     {
       'name': 'border-grey-darkest',
       'description': 'border-color: #3d4852;'
     },
     {
       'name': 'border-grey-darker',
       'description': 'border-color: #606f7b;'
     },
     {
       'name': 'border-grey-dark',
       'description': 'border-color: #8795a1;'
     },
     {
       'name': 'border-grey',
       'description': 'border-color: #b8c2cc;'
     },
     {
       'name': 'border-grey-light',
       'description': 'border-color: #dae1e7;'
     },
     {
       'name': 'border-grey-lighter',
       'description': 'border-color: #f1f5f8;'
     },
     {
       'name': 'border-grey-lightest',
       'description': 'border-color: #f8fafc;'
     },
     {
       'name': 'border-white',
       'description': 'border-color: #fff;'
     },
     {
       'name': 'border-red-darkest',
       'description': 'border-color: #3b0d0c;'
     },
     {
       'name': 'border-red-darker',
       'description': 'border-color: #621b18;'
     },
     {
       'name': 'border-red-dark',
       'description': 'border-color: #cc1f1a;'
     },
     {
       'name': 'border-red',
       'description': 'border-color: #e3342f;'
     },
     {
       'name': 'border-red-light',
       'description': 'border-color: #ef5753;'
     },
     {
       'name': 'border-red-lighter',
       'description': 'border-color: #f9acaa;'
     },
     {
       'name': 'border-red-lightest',
       'description': 'border-color: #fcebea;'
     },
     {
       'name': 'border-orange-darkest',
       'description': 'border-color: #462a16;'
     },
     {
       'name': 'border-orange-darker',
       'description': 'border-color: #613b1f;'
     },
     {
       'name': 'border-orange-dark',
       'description': 'border-color: #de751f;'
     },
     {
       'name': 'border-orange',
       'description': 'border-color: #f6993f;'
     },
     {
       'name': 'border-orange-light',
       'description': 'border-color: #faad63;'
     },
     {
       'name': 'border-orange-lighter',
       'description': 'border-color: #fcd9b6;'
     },
     {
       'name': 'border-orange-lightest',
       'description': 'border-color: #fff5eb;'
     },
     {
       'name': 'border-yellow-darkest',
       'description': 'border-color: #453411;'
     },
     {
       'name': 'border-yellow-darker',
       'description': 'border-color: #684f1d;'
     },
     {
       'name': 'border-yellow-dark',
       'description': 'border-color: #f2d024;'
     },
     {
       'name': 'border-yellow',
       'description': 'border-color: #ffed4a;'
     },
     {
       'name': 'border-yellow-light',
       'description': 'border-color: #fff382;'
     },
     {
       'name': 'border-yellow-lighter',
       'description': 'border-color: #fff9c2;'
     },
     {
       'name': 'border-yellow-lightest',
       'description': 'border-color: #fcfbeb;'
     },
     {
       'name': 'border-green-darkest',
       'description': 'border-color: #0f2f21;'
     },
     {
       'name': 'border-green-darker',
       'description': 'border-color: #1a4731;'
     },
     {
       'name': 'border-green-dark',
       'description': 'border-color: #1f9d55;'
     },
     {
       'name': 'border-green',
       'description': 'border-color: #38c172;'
     },
     {
       'name': 'border-green-light',
       'description': 'border-color: #51d88a;'
     },
     {
       'name': 'border-green-lighter',
       'description': 'border-color: #a2f5bf;'
     },
     {
       'name': 'border-green-lightest',
       'description': 'border-color: #e3fcec;'
     },
     {
       'name': 'border-teal-darkest',
       'description': 'border-color: #0d3331;'
     },
     {
       'name': 'border-teal-darker',
       'description': 'border-color: #20504f;'
     },
     {
       'name': 'border-teal-dark',
       'description': 'border-color: #38a89d;'
     },
     {
       'name': 'border-teal',
       'description': 'border-color: #4dc0b5;'
     },
     {
       'name': 'border-teal-light',
       'description': 'border-color: #64d5ca;'
     },
     {
       'name': 'border-teal-lighter',
       'description': 'border-color: #a0f0ed;'
     },
     {
       'name': 'border-teal-lightest',
       'description': 'border-color: #e8fffe;'
     },
     {
       'name': 'border-blue-darkest',
       'description': 'border-color: #12283a;'
     },
     {
       'name': 'border-blue-darker',
       'description': 'border-color: #1c3d5a;'
     },
     {
       'name': 'border-blue-dark',
       'description': 'border-color: #2779bd;'
     },
     {
       'name': 'border-blue',
       'description': 'border-color: #3490dc;'
     },
     {
       'name': 'border-blue-light',
       'description': 'border-color: #6cb2eb;'
     },
     {
       'name': 'border-blue-lighter',
       'description': 'border-color: #bcdefa;'
     },
     {
       'name': 'border-blue-lightest',
       'description': 'border-color: #eff8ff;'
     },
     {
       'name': 'border-indigo-darkest',
       'description': 'border-color: #191e38;'
     },
     {
       'name': 'border-indigo-darker',
       'description': 'border-color: #2f365f;'
     },
     {
       'name': 'border-indigo-dark',
       'description': 'border-color: #5661b3;'
     },
     {
       'name': 'border-indigo',
       'description': 'border-color: #6574cd;'
     },
     {
       'name': 'border-indigo-light',
       'description': 'border-color: #7886d7;'
     },
     {
       'name': 'border-indigo-lighter',
       'description': 'border-color: #b2b7ff;'
     },
     {
       'name': 'border-indigo-lightest',
       'description': 'border-color: #e6e8ff;'
     },
     {
       'name': 'border-purple-darkest',
       'description': 'border-color: #21183c;'
     },
     {
       'name': 'border-purple-darker',
       'description': 'border-color: #382b5f;'
     },
     {
       'name': 'border-purple-dark',
       'description': 'border-color: #794acf;'
     },
     {
       'name': 'border-purple',
       'description': 'border-color: #9561e2;'
     },
     {
       'name': 'border-purple-light',
       'description': 'border-color: #a779e9;'
     },
     {
       'name': 'border-purple-lighter',
       'description': 'border-color: #d6bbfc;'
     },
     {
       'name': 'border-purple-lightest',
       'description': 'border-color: #f3ebff;'
     },
     {
       'name': 'border-pink-darkest',
       'description': 'border-color: #451225;'
     },
     {
       'name': 'border-pink-darker',
       'description': 'border-color: #6f213f;'
     },
     {
       'name': 'border-pink-dark',
       'description': 'border-color: #eb5286;'
     },
     {
       'name': 'border-pink',
       'description': 'border-color: #f66d9b;'
     },
     {
       'name': 'border-pink-light',
       'description': 'border-color: #fa7ea8;'
     },
     {
       'name': 'border-pink-lighter',
       'description': 'border-color: #ffbbca;'
     },
     {
       'name': 'border-pink-lightest',
       'description': 'border-color: #ffebef;'
     },
     {
       'name': 'hover:border-transparent',
       'description': ':hover { border-color: transparent; }'
     },
     {
       'name': 'hover:border-black',
       'description': ':hover { border-color: #22292f; }'
     },
     {
       'name': 'hover:border-grey-darkest',
       'description': ':hover { border-color: #3d4852; }'
     },
     {
       'name': 'hover:border-grey-darker',
       'description': ':hover { border-color: #606f7b; }'
     },
     {
       'name': 'hover:border-grey-dark',
       'description': ':hover { border-color: #8795a1; }'
     },
     {
       'name': 'hover:border-grey',
       'description': ':hover { border-color: #b8c2cc; }'
     },
     {
       'name': 'hover:border-grey-light',
       'description': ':hover { border-color: #dae1e7; }'
     },
     {
       'name': 'hover:border-grey-lighter',
       'description': ':hover { border-color: #f1f5f8; }'
     },
     {
       'name': 'hover:border-grey-lightest',
       'description': ':hover { border-color: #f8fafc; }'
     },
     {
       'name': 'hover:border-white',
       'description': ':hover { border-color: #fff; }'
     },
     {
       'name': 'hover:border-red-darkest',
       'description': ':hover { border-color: #3b0d0c; }'
     },
     {
       'name': 'hover:border-red-darker',
       'description': ':hover { border-color: #621b18; }'
     },
     {
       'name': 'hover:border-red-dark',
       'description': ':hover { border-color: #cc1f1a; }'
     },
     {
       'name': 'hover:border-red',
       'description': ':hover { border-color: #e3342f; }'
     },
     {
       'name': 'hover:border-red-light',
       'description': ':hover { border-color: #ef5753; }'
     },
     {
       'name': 'hover:border-red-lighter',
       'description': ':hover { border-color: #f9acaa; }'
     },
     {
       'name': 'hover:border-red-lightest',
       'description': ':hover { border-color: #fcebea; }'
     },
     {
       'name': 'hover:border-orange-darkest',
       'description': ':hover { border-color: #462a16; }'
     },
     {
       'name': 'hover:border-orange-darker',
       'description': ':hover { border-color: #613b1f; }'
     },
     {
       'name': 'hover:border-orange-dark',
       'description': ':hover { border-color: #de751f; }'
     },
     {
       'name': 'hover:border-orange',
       'description': ':hover { border-color: #f6993f; }'
     },
     {
       'name': 'hover:border-orange-light',
       'description': ':hover { border-color: #faad63; }'
     },
     {
       'name': 'hover:border-orange-lighter',
       'description': ':hover { border-color: #fcd9b6; }'
     },
     {
       'name': 'hover:border-orange-lightest',
       'description': ':hover { border-color: #fff5eb; }'
     },
     {
       'name': 'hover:border-yellow-darkest',
       'description': ':hover { border-color: #453411; }'
     },
     {
       'name': 'hover:border-yellow-darker',
       'description': ':hover { border-color: #684f1d; }'
     },
     {
       'name': 'hover:border-yellow-dark',
       'description': ':hover { border-color: #f2d024; }'
     },
     {
       'name': 'hover:border-yellow',
       'description': ':hover { border-color: #ffed4a; }'
     },
     {
       'name': 'hover:border-yellow-light',
       'description': ':hover { border-color: #fff382; }'
     },
     {
       'name': 'hover:border-yellow-lighter',
       'description': ':hover { border-color: #fff9c2; }'
     },
     {
       'name': 'hover:border-yellow-lightest',
       'description': ':hover { border-color: #fcfbeb; }'
     },
     {
       'name': 'hover:border-green-darkest',
       'description': ':hover { border-color: #0f2f21; }'
     },
     {
       'name': 'hover:border-green-darker',
       'description': ':hover { border-color: #1a4731; }'
     },
     {
       'name': 'hover:border-green-dark',
       'description': ':hover { border-color: #1f9d55; }'
     },
     {
       'name': 'hover:border-green',
       'description': ':hover { border-color: #38c172; }'
     },
     {
       'name': 'hover:border-green-light',
       'description': ':hover { border-color: #51d88a; }'
     },
     {
       'name': 'hover:border-green-lighter',
       'description': ':hover { border-color: #a2f5bf; }'
     },
     {
       'name': 'hover:border-green-lightest',
       'description': ':hover { border-color: #e3fcec; }'
     },
     {
       'name': 'hover:border-teal-darkest',
       'description': ':hover { border-color: #0d3331; }'
     },
     {
       'name': 'hover:border-teal-darker',
       'description': ':hover { border-color: #20504f; }'
     },
     {
       'name': 'hover:border-teal-dark',
       'description': ':hover { border-color: #38a89d; }'
     },
     {
       'name': 'hover:border-teal',
       'description': ':hover { border-color: #4dc0b5; }'
     },
     {
       'name': 'hover:border-teal-light',
       'description': ':hover { border-color: #64d5ca; }'
     },
     {
       'name': 'hover:border-teal-lighter',
       'description': ':hover { border-color: #a0f0ed; }'
     },
     {
       'name': 'hover:border-teal-lightest',
       'description': ':hover { border-color: #e8fffe; }'
     },
     {
       'name': 'hover:border-blue-darkest',
       'description': ':hover { border-color: #12283a; }'
     },
     {
       'name': 'hover:border-blue-darker',
       'description': ':hover { border-color: #1c3d5a; }'
     },
     {
       'name': 'hover:border-blue-dark',
       'description': ':hover { border-color: #2779bd; }'
     },
     {
       'name': 'hover:border-blue',
       'description': ':hover { border-color: #3490dc; }'
     },
     {
       'name': 'hover:border-blue-light',
       'description': ':hover { border-color: #6cb2eb; }'
     },
     {
       'name': 'hover:border-blue-lighter',
       'description': ':hover { border-color: #bcdefa; }'
     },
     {
       'name': 'hover:border-blue-lightest',
       'description': ':hover { border-color: #eff8ff; }'
     },
     {
       'name': 'hover:border-indigo-darkest',
       'description': ':hover { border-color: #191e38; }'
     },
     {
       'name': 'hover:border-indigo-darker',
       'description': ':hover { border-color: #2f365f; }'
     },
     {
       'name': 'hover:border-indigo-dark',
       'description': ':hover { border-color: #5661b3; }'
     },
     {
       'name': 'hover:border-indigo',
       'description': ':hover { border-color: #6574cd; }'
     },
     {
       'name': 'hover:border-indigo-light',
       'description': ':hover { border-color: #7886d7; }'
     },
     {
       'name': 'hover:border-indigo-lighter',
       'description': ':hover { border-color: #b2b7ff; }'
     },
     {
       'name': 'hover:border-indigo-lightest',
       'description': ':hover { border-color: #e6e8ff; }'
     },
     {
       'name': 'hover:border-purple-darkest',
       'description': ':hover { border-color: #21183c; }'
     },
     {
       'name': 'hover:border-purple-darker',
       'description': ':hover { border-color: #382b5f; }'
     },
     {
       'name': 'hover:border-purple-dark',
       'description': ':hover { border-color: #794acf; }'
     },
     {
       'name': 'hover:border-purple',
       'description': ':hover { border-color: #9561e2; }'
     },
     {
       'name': 'hover:border-purple-light',
       'description': ':hover { border-color: #a779e9; }'
     },
     {
       'name': 'hover:border-purple-lighter',
       'description': ':hover { border-color: #d6bbfc; }'
     },
     {
       'name': 'hover:border-purple-lightest',
       'description': ':hover { border-color: #f3ebff; }'
     },
     {
       'name': 'hover:border-pink-darkest',
       'description': ':hover { border-color: #451225; }'
     },
     {
       'name': 'hover:border-pink-darker',
       'description': ':hover { border-color: #6f213f; }'
     },
     {
       'name': 'hover:border-pink-dark',
       'description': ':hover { border-color: #eb5286; }'
     },
     {
       'name': 'hover:border-pink',
       'description': ':hover { border-color: #f66d9b; }'
     },
     {
       'name': 'hover:border-pink-light',
       'description': ':hover { border-color: #fa7ea8; }'
     },
     {
       'name': 'hover:border-pink-lighter',
       'description': ':hover { border-color: #ffbbca; }'
     },
     {
       'name': 'hover:border-pink-lightest',
       'description': ':hover { border-color: #ffebef; }'
     },
     {
       'name': 'focus:border-transparent',
       'description': ':focus { border-color: transparent; }'
     },
     {
       'name': 'focus:border-black',
       'description': ':focus { border-color: #22292f; }'
     },
     {
       'name': 'focus:border-grey-darkest',
       'description': ':focus { border-color: #3d4852; }'
     },
     {
       'name': 'focus:border-grey-darker',
       'description': ':focus { border-color: #606f7b; }'
     },
     {
       'name': 'focus:border-grey-dark',
       'description': ':focus { border-color: #8795a1; }'
     },
     {
       'name': 'focus:border-grey',
       'description': ':focus { border-color: #b8c2cc; }'
     },
     {
       'name': 'focus:border-grey-light',
       'description': ':focus { border-color: #dae1e7; }'
     },
     {
       'name': 'focus:border-grey-lighter',
       'description': ':focus { border-color: #f1f5f8; }'
     },
     {
       'name': 'focus:border-grey-lightest',
       'description': ':focus { border-color: #f8fafc; }'
     },
     {
       'name': 'focus:border-white',
       'description': ':focus { border-color: #fff; }'
     },
     {
       'name': 'focus:border-red-darkest',
       'description': ':focus { border-color: #3b0d0c; }'
     },
     {
       'name': 'focus:border-red-darker',
       'description': ':focus { border-color: #621b18; }'
     },
     {
       'name': 'focus:border-red-dark',
       'description': ':focus { border-color: #cc1f1a; }'
     },
     {
       'name': 'focus:border-red',
       'description': ':focus { border-color: #e3342f; }'
     },
     {
       'name': 'focus:border-red-light',
       'description': ':focus { border-color: #ef5753; }'
     },
     {
       'name': 'focus:border-red-lighter',
       'description': ':focus { border-color: #f9acaa; }'
     },
     {
       'name': 'focus:border-red-lightest',
       'description': ':focus { border-color: #fcebea; }'
     },
     {
       'name': 'focus:border-orange-darkest',
       'description': ':focus { border-color: #462a16; }'
     },
     {
       'name': 'focus:border-orange-darker',
       'description': ':focus { border-color: #613b1f; }'
     },
     {
       'name': 'focus:border-orange-dark',
       'description': ':focus { border-color: #de751f; }'
     },
     {
       'name': 'focus:border-orange',
       'description': ':focus { border-color: #f6993f; }'
     },
     {
       'name': 'focus:border-orange-light',
       'description': ':focus { border-color: #faad63; }'
     },
     {
       'name': 'focus:border-orange-lighter',
       'description': ':focus { border-color: #fcd9b6; }'
     },
     {
       'name': 'focus:border-orange-lightest',
       'description': ':focus { border-color: #fff5eb; }'
     },
     {
       'name': 'focus:border-yellow-darkest',
       'description': ':focus { border-color: #453411; }'
     },
     {
       'name': 'focus:border-yellow-darker',
       'description': ':focus { border-color: #684f1d; }'
     },
     {
       'name': 'focus:border-yellow-dark',
       'description': ':focus { border-color: #f2d024; }'
     },
     {
       'name': 'focus:border-yellow',
       'description': ':focus { border-color: #ffed4a; }'
     },
     {
       'name': 'focus:border-yellow-light',
       'description': ':focus { border-color: #fff382; }'
     },
     {
       'name': 'focus:border-yellow-lighter',
       'description': ':focus { border-color: #fff9c2; }'
     },
     {
       'name': 'focus:border-yellow-lightest',
       'description': ':focus { border-color: #fcfbeb; }'
     },
     {
       'name': 'focus:border-green-darkest',
       'description': ':focus { border-color: #0f2f21; }'
     },
     {
       'name': 'focus:border-green-darker',
       'description': ':focus { border-color: #1a4731; }'
     },
     {
       'name': 'focus:border-green-dark',
       'description': ':focus { border-color: #1f9d55; }'
     },
     {
       'name': 'focus:border-green',
       'description': ':focus { border-color: #38c172; }'
     },
     {
       'name': 'focus:border-green-light',
       'description': ':focus { border-color: #51d88a; }'
     },
     {
       'name': 'focus:border-green-lighter',
       'description': ':focus { border-color: #a2f5bf; }'
     },
     {
       'name': 'focus:border-green-lightest',
       'description': ':focus { border-color: #e3fcec; }'
     },
     {
       'name': 'focus:border-teal-darkest',
       'description': ':focus { border-color: #0d3331; }'
     },
     {
       'name': 'focus:border-teal-darker',
       'description': ':focus { border-color: #20504f; }'
     },
     {
       'name': 'focus:border-teal-dark',
       'description': ':focus { border-color: #38a89d; }'
     },
     {
       'name': 'focus:border-teal',
       'description': ':focus { border-color: #4dc0b5; }'
     },
     {
       'name': 'focus:border-teal-light',
       'description': ':focus { border-color: #64d5ca; }'
     },
     {
       'name': 'focus:border-teal-lighter',
       'description': ':focus { border-color: #a0f0ed; }'
     },
     {
       'name': 'focus:border-teal-lightest',
       'description': ':focus { border-color: #e8fffe; }'
     },
     {
       'name': 'focus:border-blue-darkest',
       'description': ':focus { border-color: #12283a; }'
     },
     {
       'name': 'focus:border-blue-darker',
       'description': ':focus { border-color: #1c3d5a; }'
     },
     {
       'name': 'focus:border-blue-dark',
       'description': ':focus { border-color: #2779bd; }'
     },
     {
       'name': 'focus:border-blue',
       'description': ':focus { border-color: #3490dc; }'
     },
     {
       'name': 'focus:border-blue-light',
       'description': ':focus { border-color: #6cb2eb; }'
     },
     {
       'name': 'focus:border-blue-lighter',
       'description': ':focus { border-color: #bcdefa; }'
     },
     {
       'name': 'focus:border-blue-lightest',
       'description': ':focus { border-color: #eff8ff; }'
     },
     {
       'name': 'focus:border-indigo-darkest',
       'description': ':focus { border-color: #191e38; }'
     },
     {
       'name': 'focus:border-indigo-darker',
       'description': ':focus { border-color: #2f365f; }'
     },
     {
       'name': 'focus:border-indigo-dark',
       'description': ':focus { border-color: #5661b3; }'
     },
     {
       'name': 'focus:border-indigo',
       'description': ':focus { border-color: #6574cd; }'
     },
     {
       'name': 'focus:border-indigo-light',
       'description': ':focus { border-color: #7886d7; }'
     },
     {
       'name': 'focus:border-indigo-lighter',
       'description': ':focus { border-color: #b2b7ff; }'
     },
     {
       'name': 'focus:border-indigo-lightest',
       'description': ':focus { border-color: #e6e8ff; }'
     },
     {
       'name': 'focus:border-purple-darkest',
       'description': ':focus { border-color: #21183c; }'
     },
     {
       'name': 'focus:border-purple-darker',
       'description': ':focus { border-color: #382b5f; }'
     },
     {
       'name': 'focus:border-purple-dark',
       'description': ':focus { border-color: #794acf; }'
     },
     {
       'name': 'focus:border-purple',
       'description': ':focus { border-color: #9561e2; }'
     },
     {
       'name': 'focus:border-purple-light',
       'description': ':focus { border-color: #a779e9; }'
     },
     {
       'name': 'focus:border-purple-lighter',
       'description': ':focus { border-color: #d6bbfc; }'
     },
     {
       'name': 'focus:border-purple-lightest',
       'description': ':focus { border-color: #f3ebff; }'
     },
     {
       'name': 'focus:border-pink-darkest',
       'description': ':focus { border-color: #451225; }'
     },
     {
       'name': 'focus:border-pink-darker',
       'description': ':focus { border-color: #6f213f; }'
     },
     {
       'name': 'focus:border-pink-dark',
       'description': ':focus { border-color: #eb5286; }'
     },
     {
       'name': 'focus:border-pink',
       'description': ':focus { border-color: #f66d9b; }'
     },
     {
       'name': 'focus:border-pink-light',
       'description': ':focus { border-color: #fa7ea8; }'
     },
     {
       'name': 'focus:border-pink-lighter',
       'description': ':focus { border-color: #ffbbca; }'
     },
     {
       'name': 'focus:border-pink-lightest',
       'description': ':focus { border-color: #ffebef; }'
     },
     {
       'name': 'rounded-none',
       'description': 'border-radius: 0;'
     },
     {
       'name': 'rounded-sm',
       'description': 'border-radius: .125rem;'
     },
     {
       'name': 'rounded',
       'description': 'border-radius: .25rem;'
     },
     {
       'name': 'rounded-lg',
       'description': 'border-radius: .5rem;'
     },
     {
       'name': 'rounded-full',
       'description': 'border-radius: 9999px;'
     },
     {
       'name': 'rounded-t-none',
       'description': 'border-top-left-radius: 0; border-top-right-radius: 0;'
     },
     {
       'name': 'rounded-r-none',
       'description': 'border-top-right-radius: 0; border-bottom-right-radius: 0;'
     },
     {
       'name': 'rounded-b-none',
       'description': 'border-bottom-right-radius: 0; border-bottom-left-radius: 0;'
     },
     {
       'name': 'rounded-l-none',
       'description': 'border-top-left-radius: 0; border-bottom-left-radius: 0;'
     },
     {
       'name': 'rounded-t-sm',
       'description': 'border-top-left-radius: .125rem; border-top-right-radius: .125rem;'
     },
     {
       'name': 'rounded-r-sm',
       'description': 'border-top-right-radius: .125rem; border-bottom-right-radius: .125rem;'
     },
     {
       'name': 'rounded-b-sm',
       'description': 'border-bottom-right-radius: .125rem; border-bottom-left-radius: .125rem;'
     },
     {
       'name': 'rounded-l-sm',
       'description': 'border-top-left-radius: .125rem; border-bottom-left-radius: .125rem;'
     },
     {
       'name': 'rounded-t',
       'description': 'border-top-left-radius: .25rem; border-top-right-radius: .25rem;'
     },
     {
       'name': 'rounded-r',
       'description': 'border-top-right-radius: .25rem; border-bottom-right-radius: .25rem;'
     },
     {
       'name': 'rounded-b',
       'description': 'border-bottom-right-radius: .25rem; border-bottom-left-radius: .25rem;'
     },
     {
       'name': 'rounded-l',
       'description': 'border-top-left-radius: .25rem; border-bottom-left-radius: .25rem;'
     },
     {
       'name': 'rounded-t-lg',
       'description': 'border-top-left-radius: .5rem; border-top-right-radius: .5rem;'
     },
     {
       'name': 'rounded-r-lg',
       'description': 'border-top-right-radius: .5rem; border-bottom-right-radius: .5rem;'
     },
     {
       'name': 'rounded-b-lg',
       'description': 'border-bottom-right-radius: .5rem; border-bottom-left-radius: .5rem;'
     },
     {
       'name': 'rounded-l-lg',
       'description': 'border-top-left-radius: .5rem; border-bottom-left-radius: .5rem;'
     },
     {
       'name': 'rounded-t-full',
       'description': 'border-top-left-radius: 9999px; border-top-right-radius: 9999px;'
     },
     {
       'name': 'rounded-r-full',
       'description': 'border-top-right-radius: 9999px; border-bottom-right-radius: 9999px;'
     },
     {
       'name': 'rounded-b-full',
       'description': 'border-bottom-right-radius: 9999px; border-bottom-left-radius: 9999px;'
     },
     {
       'name': 'rounded-l-full',
       'description': 'border-top-left-radius: 9999px; border-bottom-left-radius: 9999px;'
     },
     {
       'name': 'rounded-tl-none',
       'description': 'border-top-left-radius: 0;'
     },
     {
       'name': 'rounded-tr-none',
       'description': 'border-top-right-radius: 0;'
     },
     {
       'name': 'rounded-br-none',
       'description': 'border-bottom-right-radius: 0;'
     },
     {
       'name': 'rounded-bl-none',
       'description': 'border-bottom-left-radius: 0;'
     },
     {
       'name': 'rounded-tl-sm',
       'description': 'border-top-left-radius: .125rem;'
     },
     {
       'name': 'rounded-tr-sm',
       'description': 'border-top-right-radius: .125rem;'
     },
     {
       'name': 'rounded-br-sm',
       'description': 'border-bottom-right-radius: .125rem;'
     },
     {
       'name': 'rounded-bl-sm',
       'description': 'border-bottom-left-radius: .125rem;'
     },
     {
       'name': 'rounded-tl',
       'description': 'border-top-left-radius: .25rem;'
     },
     {
       'name': 'rounded-tr',
       'description': 'border-top-right-radius: .25rem;'
     },
     {
       'name': 'rounded-br',
       'description': 'border-bottom-right-radius: .25rem;'
     },
     {
       'name': 'rounded-bl',
       'description': 'border-bottom-left-radius: .25rem;'
     },
     {
       'name': 'rounded-tl-lg',
       'description': 'border-top-left-radius: .5rem;'
     },
     {
       'name': 'rounded-tr-lg',
       'description': 'border-top-right-radius: .5rem;'
     },
     {
       'name': 'rounded-br-lg',
       'description': 'border-bottom-right-radius: .5rem;'
     },
     {
       'name': 'rounded-bl-lg',
       'description': 'border-bottom-left-radius: .5rem;'
     },
     {
       'name': 'rounded-tl-full',
       'description': 'border-top-left-radius: 9999px;'
     },
     {
       'name': 'rounded-tr-full',
       'description': 'border-top-right-radius: 9999px;'
     },
     {
       'name': 'rounded-br-full',
       'description': 'border-bottom-right-radius: 9999px;'
     },
     {
       'name': 'rounded-bl-full',
       'description': 'border-bottom-left-radius: 9999px;'
     },
     {
       'name': 'border-solid',
       'description': 'border-style: solid;'
     },
     {
       'name': 'border-dashed',
       'description': 'border-style: dashed;'
     },
     {
       'name': 'border-dotted',
       'description': 'border-style: dotted;'
     },
     {
       'name': 'border-none',
       'description': 'border-style: none;'
     },
     {
       'name': 'border-0',
       'description': 'border-width: 0;'
     },
     {
       'name': 'border-2',
       'description': 'border-width: 2px;'
     },
     {
       'name': 'border-4',
       'description': 'border-width: 4px;'
     },
     {
       'name': 'border-8',
       'description': 'border-width: 8px;'
     },
     {
       'name': 'border',
       'description': 'border-width: 1px;'
     },
     {
       'name': 'border-t-0',
       'description': 'border-top-width: 0;'
     },
     {
       'name': 'border-r-0',
       'description': 'border-right-width: 0;'
     },
     {
       'name': 'border-b-0',
       'description': 'border-bottom-width: 0;'
     },
     {
       'name': 'border-l-0',
       'description': 'border-left-width: 0;'
     },
     {
       'name': 'border-t-2',
       'description': 'border-top-width: 2px;'
     },
     {
       'name': 'border-r-2',
       'description': 'border-right-width: 2px;'
     },
     {
       'name': 'border-b-2',
       'description': 'border-bottom-width: 2px;'
     },
     {
       'name': 'border-l-2',
       'description': 'border-left-width: 2px;'
     },
     {
       'name': 'border-t-4',
       'description': 'border-top-width: 4px;'
     },
     {
       'name': 'border-r-4',
       'description': 'border-right-width: 4px;'
     },
     {
       'name': 'border-b-4',
       'description': 'border-bottom-width: 4px;'
     },
     {
       'name': 'border-l-4',
       'description': 'border-left-width: 4px;'
     },
     {
       'name': 'border-t-8',
       'description': 'border-top-width: 8px;'
     },
     {
       'name': 'border-r-8',
       'description': 'border-right-width: 8px;'
     },
     {
       'name': 'border-b-8',
       'description': 'border-bottom-width: 8px;'
     },
     {
       'name': 'border-l-8',
       'description': 'border-left-width: 8px;'
     },
     {
       'name': 'border-t',
       'description': 'border-top-width: 1px;'
     },
     {
       'name': 'border-r',
       'description': 'border-right-width: 1px;'
     },
     {
       'name': 'border-b',
       'description': 'border-bottom-width: 1px;'
     },
     {
       'name': 'border-l',
       'description': 'border-left-width: 1px;'
     },
     {
       'name': 'cursor-auto',
       'description': 'cursor: auto;'
     },
     {
       'name': 'cursor-default',
       'description': 'cursor: default;'
     },
     {
       'name': 'cursor-pointer',
       'description': 'cursor: pointer;'
     },
     {
       'name': 'cursor-wait',
       'description': 'cursor: wait;'
     },
     {
       'name': 'cursor-move',
       'description': 'cursor: move;'
     },
     {
       'name': 'cursor-not-allowed',
       'description': 'cursor: not-allowed;'
     },
     {
       'name': 'block',
       'description': 'display: block;'
     },
     {
       'name': 'inline-block',
       'description': 'display: inline-block;'
     },
     {
       'name': 'inline',
       'description': 'display: inline;'
     },
     {
       'name': 'table',
       'description': 'display: table;'
     },
     {
       'name': 'table-row',
       'description': 'display: table-row;'
     },
     {
       'name': 'table-cell',
       'description': 'display: table-cell;'
     },
     {
       'name': 'hidden',
       'description': 'display: none;'
     },
     {
       'name': 'flex',
       'description': 'display: flex;'
     },
     {
       'name': 'inline-flex',
       'description': 'display: inline-flex;'
     },
     {
       'name': 'flex-row',
       'description': 'flex-direction: row;'
     },
     {
       'name': 'flex-row-reverse',
       'description': 'flex-direction: row-reverse;'
     },
     {
       'name': 'flex-col',
       'description': 'flex-direction: column;'
     },
     {
       'name': 'flex-col-reverse',
       'description': 'flex-direction: column-reverse;'
     },
     {
       'name': 'flex-wrap',
       'description': 'flex-wrap: wrap;'
     },
     {
       'name': 'flex-wrap-reverse',
       'description': 'flex-wrap: wrap-reverse;'
     },
     {
       'name': 'flex-no-wrap',
       'description': 'flex-wrap: nowrap;'
     },
     {
       'name': 'items-start',
       'description': 'align-items: flex-start;'
     },
     {
       'name': 'items-end',
       'description': 'align-items: flex-end;'
     },
     {
       'name': 'items-center',
       'description': 'align-items: center;'
     },
     {
       'name': 'items-baseline',
       'description': 'align-items: baseline;'
     },
     {
       'name': 'items-stretch',
       'description': 'align-items: stretch;'
     },
     {
       'name': 'self-auto',
       'description': 'align-self: auto;'
     },
     {
       'name': 'self-start',
       'description': 'align-self: flex-start;'
     },
     {
       'name': 'self-end',
       'description': 'align-self: flex-end;'
     },
     {
       'name': 'self-center',
       'description': 'align-self: center;'
     },
     {
       'name': 'self-stretch',
       'description': 'align-self: stretch;'
     },
     {
       'name': 'justify-start',
       'description': 'justify-content: flex-start;'
     },
     {
       'name': 'justify-end',
       'description': 'justify-content: flex-end;'
     },
     {
       'name': 'justify-center',
       'description': 'justify-content: center;'
     },
     {
       'name': 'justify-between',
       'description': 'justify-content: space-between;'
     },
     {
       'name': 'justify-around',
       'description': 'justify-content: space-around;'
     },
     {
       'name': 'content-center',
       'description': 'align-content: center;'
     },
     {
       'name': 'content-start',
       'description': 'align-content: flex-start;'
     },
     {
       'name': 'content-end',
       'description': 'align-content: flex-end;'
     },
     {
       'name': 'content-between',
       'description': 'align-content: space-between;'
     },
     {
       'name': 'content-around',
       'description': 'align-content: space-around;'
     },
     {
       'name': 'flex-1',
       'description': 'flex: 1 1 0%;'
     },
     {
       'name': 'flex-auto',
       'description': 'flex: 1 1 auto;'
     },
     {
       'name': 'flex-initial',
       'description': 'flex: 0 1 auto;'
     },
     {
       'name': 'flex-none',
       'description': 'flex: none;'
     },
     {
       'name': 'flex-grow',
       'description': 'flex-grow: 1;'
     },
     {
       'name': 'flex-shrink',
       'description': 'flex-shrink: 1;'
     },
     {
       'name': 'flex-no-grow',
       'description': 'flex-grow: 0;'
     },
     {
       'name': 'flex-no-shrink',
       'description': 'flex-shrink: 0;'
     },
     {
       'name': 'float-right',
       'description': 'float: right;'
     },
     {
       'name': 'float-left',
       'description': 'float: left;'
     },
     {
       'name': 'float-none',
       'description': 'float: none;'
     },
     {
       'name': 'clearfix',
       'description': ':after { content: \'\'; display: table; clear: both; }'
     },
     {
       'name': 'font-sans',
       'description': 'font-family: system-ui, BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;'
     },
     {
       'name': 'font-serif',
       'description': 'font-family: Constantia, Lucida Bright, Lucidabright, Lucida Serif, Lucida, DejaVu Serif, Bitstream Vera Serif, Liberation Serif, Georgia, serif;'
     },
     {
       'name': 'font-mono',
       'description': 'font-family: Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace;'
     },
     {
       'name': 'font-hairline',
       'description': 'font-weight: 100;'
     },
     {
       'name': 'font-thin',
       'description': 'font-weight: 200;'
     },
     {
       'name': 'font-light',
       'description': 'font-weight: 300;'
     },
     {
       'name': 'font-normal',
       'description': 'font-weight: 400;'
     },
     {
       'name': 'font-medium',
       'description': 'font-weight: 500;'
     },
     {
       'name': 'font-semibold',
       'description': 'font-weight: 600;'
     },
     {
       'name': 'font-bold',
       'description': 'font-weight: 700;'
     },
     {
       'name': 'font-extrabold',
       'description': 'font-weight: 800;'
     },
     {
       'name': 'font-black',
       'description': 'font-weight: 900;'
     },
     {
       'name': 'hover:font-hairline',
       'description': ':hover { font-weight: 100; }'
     },
     {
       'name': 'hover:font-thin',
       'description': ':hover { font-weight: 200; }'
     },
     {
       'name': 'hover:font-light',
       'description': ':hover { font-weight: 300; }'
     },
     {
       'name': 'hover:font-normal',
       'description': ':hover { font-weight: 400; }'
     },
     {
       'name': 'hover:font-medium',
       'description': ':hover { font-weight: 500; }'
     },
     {
       'name': 'hover:font-semibold',
       'description': ':hover { font-weight: 600; }'
     },
     {
       'name': 'hover:font-bold',
       'description': ':hover { font-weight: 700; }'
     },
     {
       'name': 'hover:font-extrabold',
       'description': ':hover { font-weight: 800; }'
     },
     {
       'name': 'hover:font-black',
       'description': ':hover { font-weight: 900; }'
     },
     {
       'name': 'focus:font-hairline',
       'description': ':focus { font-weight: 100; }'
     },
     {
       'name': 'focus:font-thin',
       'description': ':focus { font-weight: 200; }'
     },
     {
       'name': 'focus:font-light',
       'description': ':focus { font-weight: 300; }'
     },
     {
       'name': 'focus:font-normal',
       'description': ':focus { font-weight: 400; }'
     },
     {
       'name': 'focus:font-medium',
       'description': ':focus { font-weight: 500; }'
     },
     {
       'name': 'focus:font-semibold',
       'description': ':focus { font-weight: 600; }'
     },
     {
       'name': 'focus:font-bold',
       'description': ':focus { font-weight: 700; }'
     },
     {
       'name': 'focus:font-extrabold',
       'description': ':focus { font-weight: 800; }'
     },
     {
       'name': 'focus:font-black',
       'description': ':focus { font-weight: 900; }'
     },
     {
       'name': 'h-1',
       'description': 'height: .25rem;'
     },
     {
       'name': 'h-2',
       'description': 'height: .5rem;'
     },
     {
       'name': 'h-3',
       'description': 'height: .75rem;'
     },
     {
       'name': 'h-4',
       'description': 'height: 1rem;'
     },
     {
       'name': 'h-5',
       'description': 'height: 1.25rem;'
     },
     {
       'name': 'h-6',
       'description': 'height: 1.5rem;'
     },
     {
       'name': 'h-8',
       'description': 'height: 2rem;'
     },
     {
       'name': 'h-10',
       'description': 'height: 2.5rem;'
     },
     {
       'name': 'h-12',
       'description': 'height: 3rem;'
     },
     {
       'name': 'h-16',
       'description': 'height: 4rem;'
     },
     {
       'name': 'h-24',
       'description': 'height: 6rem;'
     },
     {
       'name': 'h-32',
       'description': 'height: 8rem;'
     },
     {
       'name': 'h-48',
       'description': 'height: 12rem;'
     },
     {
       'name': 'h-64',
       'description': 'height: 16rem;'
     },
     {
       'name': 'h-auto',
       'description': 'height: auto;'
     },
     {
       'name': 'h-px',
       'description': 'height: 1px;'
     },
     {
       'name': 'h-full',
       'description': 'height: 100%;'
     },
     {
       'name': 'h-screen',
       'description': 'height: 100vh;'
     },
     {
       'name': 'leading-none',
       'description': 'line-height: 1;'
     },
     {
       'name': 'leading-tight',
       'description': 'line-height: 1.25;'
     },
     {
       'name': 'leading-normal',
       'description': 'line-height: 1.5;'
     },
     {
       'name': 'leading-loose',
       'description': 'line-height: 2;'
     },
     {
       'name': 'm-0',
       'description': 'margin: 0;'
     },
     {
       'name': 'm-1',
       'description': 'margin: .25rem;'
     },
     {
       'name': 'm-2',
       'description': 'margin: .5rem;'
     },
     {
       'name': 'm-3',
       'description': 'margin: .75rem;'
     },
     {
       'name': 'm-4',
       'description': 'margin: 1rem;'
     },
     {
       'name': 'm-5',
       'description': 'margin: 1.25rem;'
     },
     {
       'name': 'm-6',
       'description': 'margin: 1.5rem;'
     },
     {
       'name': 'm-8',
       'description': 'margin: 2rem;'
     },
     {
       'name': 'm-10',
       'description': 'margin: 2.5rem;'
     },
     {
       'name': 'm-12',
       'description': 'margin: 3rem;'
     },
     {
       'name': 'm-16',
       'description': 'margin: 4rem;'
     },
     {
       'name': 'm-20',
       'description': 'margin: 5rem;'
     },
     {
       'name': 'm-24',
       'description': 'margin: 6rem;'
     },
     {
       'name': 'm-32',
       'description': 'margin: 8rem;'
     },
     {
       'name': 'm-auto',
       'description': 'margin: auto;'
     },
     {
       'name': 'm-px',
       'description': 'margin: 1px;'
     },
     {
       'name': 'my-0',
       'description': 'margin-top: 0; margin-bottom: 0;'
     },
     {
       'name': 'mx-0',
       'description': 'margin-left: 0; margin-right: 0;'
     },
     {
       'name': 'my-1',
       'description': 'margin-top: .25rem; margin-bottom: .25rem;'
     },
     {
       'name': 'mx-1',
       'description': 'margin-left: .25rem; margin-right: .25rem;'
     },
     {
       'name': 'my-2',
       'description': 'margin-top: .5rem; margin-bottom: .5rem;'
     },
     {
       'name': 'mx-2',
       'description': 'margin-left: .5rem; margin-right: .5rem;'
     },
     {
       'name': 'my-3',
       'description': 'margin-top: .75rem; margin-bottom: .75rem;'
     },
     {
       'name': 'mx-3',
       'description': 'margin-left: .75rem; margin-right: .75rem;'
     },
     {
       'name': 'my-4',
       'description': 'margin-top: 1rem; margin-bottom: 1rem;'
     },
     {
       'name': 'mx-4',
       'description': 'margin-left: 1rem; margin-right: 1rem;'
     },
     {
       'name': 'my-5',
       'description': 'margin-top: 1.25rem; margin-bottom: 1.25rem;'
     },
     {
       'name': 'mx-5',
       'description': 'margin-left: 1.25rem; margin-right: 1.25rem;'
     },
     {
       'name': 'my-6',
       'description': 'margin-top: 1.5rem; margin-bottom: 1.5rem;'
     },
     {
       'name': 'mx-6',
       'description': 'margin-left: 1.5rem; margin-right: 1.5rem;'
     },
     {
       'name': 'my-8',
       'description': 'margin-top: 2rem; margin-bottom: 2rem;'
     },
     {
       'name': 'mx-8',
       'description': 'margin-left: 2rem; margin-right: 2rem;'
     },
     {
       'name': 'my-10',
       'description': 'margin-top: 2.5rem; margin-bottom: 2.5rem;'
     },
     {
       'name': 'mx-10',
       'description': 'margin-left: 2.5rem; margin-right: 2.5rem;'
     },
     {
       'name': 'my-12',
       'description': 'margin-top: 3rem; margin-bottom: 3rem;'
     },
     {
       'name': 'mx-12',
       'description': 'margin-left: 3rem; margin-right: 3rem;'
     },
     {
       'name': 'my-16',
       'description': 'margin-top: 4rem; margin-bottom: 4rem;'
     },
     {
       'name': 'mx-16',
       'description': 'margin-left: 4rem; margin-right: 4rem;'
     },
     {
       'name': 'my-20',
       'description': 'margin-top: 5rem; margin-bottom: 5rem;'
     },
     {
       'name': 'mx-20',
       'description': 'margin-left: 5rem; margin-right: 5rem;'
     },
     {
       'name': 'my-24',
       'description': 'margin-top: 6rem; margin-bottom: 6rem;'
     },
     {
       'name': 'mx-24',
       'description': 'margin-left: 6rem; margin-right: 6rem;'
     },
     {
       'name': 'my-32',
       'description': 'margin-top: 8rem; margin-bottom: 8rem;'
     },
     {
       'name': 'mx-32',
       'description': 'margin-left: 8rem; margin-right: 8rem;'
     },
     {
       'name': 'my-auto',
       'description': 'margin-top: auto; margin-bottom: auto;'
     },
     {
       'name': 'mx-auto',
       'description': 'margin-left: auto; margin-right: auto;'
     },
     {
       'name': 'my-px',
       'description': 'margin-top: 1px; margin-bottom: 1px;'
     },
     {
       'name': 'mx-px',
       'description': 'margin-left: 1px; margin-right: 1px;'
     },
     {
       'name': 'mt-0',
       'description': 'margin-top: 0;'
     },
     {
       'name': 'mr-0',
       'description': 'margin-right: 0;'
     },
     {
       'name': 'mb-0',
       'description': 'margin-bottom: 0;'
     },
     {
       'name': 'ml-0',
       'description': 'margin-left: 0;'
     },
     {
       'name': 'mt-1',
       'description': 'margin-top: .25rem;'
     },
     {
       'name': 'mr-1',
       'description': 'margin-right: .25rem;'
     },
     {
       'name': 'mb-1',
       'description': 'margin-bottom: .25rem;'
     },
     {
       'name': 'ml-1',
       'description': 'margin-left: .25rem;'
     },
     {
       'name': 'mt-2',
       'description': 'margin-top: .5rem;'
     },
     {
       'name': 'mr-2',
       'description': 'margin-right: .5rem;'
     },
     {
       'name': 'mb-2',
       'description': 'margin-bottom: .5rem;'
     },
     {
       'name': 'ml-2',
       'description': 'margin-left: .5rem;'
     },
     {
       'name': 'mt-3',
       'description': 'margin-top: .75rem;'
     },
     {
       'name': 'mr-3',
       'description': 'margin-right: .75rem;'
     },
     {
       'name': 'mb-3',
       'description': 'margin-bottom: .75rem;'
     },
     {
       'name': 'ml-3',
       'description': 'margin-left: .75rem;'
     },
     {
       'name': 'mt-4',
       'description': 'margin-top: 1rem;'
     },
     {
       'name': 'mr-4',
       'description': 'margin-right: 1rem;'
     },
     {
       'name': 'mb-4',
       'description': 'margin-bottom: 1rem;'
     },
     {
       'name': 'ml-4',
       'description': 'margin-left: 1rem;'
     },
     {
       'name': 'mt-5',
       'description': 'margin-top: 1.25rem;'
     },
     {
       'name': 'mr-5',
       'description': 'margin-right: 1.25rem;'
     },
     {
       'name': 'mb-5',
       'description': 'margin-bottom: 1.25rem;'
     },
     {
       'name': 'ml-5',
       'description': 'margin-left: 1.25rem;'
     },
     {
       'name': 'mt-6',
       'description': 'margin-top: 1.5rem;'
     },
     {
       'name': 'mr-6',
       'description': 'margin-right: 1.5rem;'
     },
     {
       'name': 'mb-6',
       'description': 'margin-bottom: 1.5rem;'
     },
     {
       'name': 'ml-6',
       'description': 'margin-left: 1.5rem;'
     },
     {
       'name': 'mt-8',
       'description': 'margin-top: 2rem;'
     },
     {
       'name': 'mr-8',
       'description': 'margin-right: 2rem;'
     },
     {
       'name': 'mb-8',
       'description': 'margin-bottom: 2rem;'
     },
     {
       'name': 'ml-8',
       'description': 'margin-left: 2rem;'
     },
     {
       'name': 'mt-10',
       'description': 'margin-top: 2.5rem;'
     },
     {
       'name': 'mr-10',
       'description': 'margin-right: 2.5rem;'
     },
     {
       'name': 'mb-10',
       'description': 'margin-bottom: 2.5rem;'
     },
     {
       'name': 'ml-10',
       'description': 'margin-left: 2.5rem;'
     },
     {
       'name': 'mt-12',
       'description': 'margin-top: 3rem;'
     },
     {
       'name': 'mr-12',
       'description': 'margin-right: 3rem;'
     },
     {
       'name': 'mb-12',
       'description': 'margin-bottom: 3rem;'
     },
     {
       'name': 'ml-12',
       'description': 'margin-left: 3rem;'
     },
     {
       'name': 'mt-16',
       'description': 'margin-top: 4rem;'
     },
     {
       'name': 'mr-16',
       'description': 'margin-right: 4rem;'
     },
     {
       'name': 'mb-16',
       'description': 'margin-bottom: 4rem;'
     },
     {
       'name': 'ml-16',
       'description': 'margin-left: 4rem;'
     },
     {
       'name': 'mt-20',
       'description': 'margin-top: 5rem;'
     },
     {
       'name': 'mr-20',
       'description': 'margin-right: 5rem;'
     },
     {
       'name': 'mb-20',
       'description': 'margin-bottom: 5rem;'
     },
     {
       'name': 'ml-20',
       'description': 'margin-left: 5rem;'
     },
     {
       'name': 'mt-24',
       'description': 'margin-top: 6rem;'
     },
     {
       'name': 'mr-24',
       'description': 'margin-right: 6rem;'
     },
     {
       'name': 'mb-24',
       'description': 'margin-bottom: 6rem;'
     },
     {
       'name': 'ml-24',
       'description': 'margin-left: 6rem;'
     },
     {
       'name': 'mt-32',
       'description': 'margin-top: 8rem;'
     },
     {
       'name': 'mr-32',
       'description': 'margin-right: 8rem;'
     },
     {
       'name': 'mb-32',
       'description': 'margin-bottom: 8rem;'
     },
     {
       'name': 'ml-32',
       'description': 'margin-left: 8rem;'
     },
     {
       'name': 'mt-auto',
       'description': 'margin-top: auto;'
     },
     {
       'name': 'mr-auto',
       'description': 'margin-right: auto;'
     },
     {
       'name': 'mb-auto',
       'description': 'margin-bottom: auto;'
     },
     {
       'name': 'ml-auto',
       'description': 'margin-left: auto;'
     },
     {
       'name': 'mt-px',
       'description': 'margin-top: 1px;'
     },
     {
       'name': 'mr-px',
       'description': 'margin-right: 1px;'
     },
     {
       'name': 'mb-px',
       'description': 'margin-bottom: 1px;'
     },
     {
       'name': 'ml-px',
       'description': 'margin-left: 1px;'
     },
     {
       'name': 'max-h-full',
       'description': 'max-height: 100%;'
     },
     {
       'name': 'max-h-screen',
       'description': 'max-height: 100vh;'
     },
     {
       'name': 'max-w-xs',
       'description': 'max-width: 20rem;'
     },
     {
       'name': 'max-w-sm',
       'description': 'max-width: 30rem;'
     },
     {
       'name': 'max-w-md',
       'description': 'max-width: 40rem;'
     },
     {
       'name': 'max-w-lg',
       'description': 'max-width: 50rem;'
     },
     {
       'name': 'max-w-xl',
       'description': 'max-width: 60rem;'
     },
     {
       'name': 'max-w-2xl',
       'description': 'max-width: 70rem;'
     },
     {
       'name': 'max-w-3xl',
       'description': 'max-width: 80rem;'
     },
     {
       'name': 'max-w-4xl',
       'description': 'max-width: 90rem;'
     },
     {
       'name': 'max-w-5xl',
       'description': 'max-width: 100rem;'
     },
     {
       'name': 'max-w-full',
       'description': 'max-width: 100%;'
     },
     {
       'name': 'min-h-0',
       'description': 'min-height: 0;'
     },
     {
       'name': 'min-h-full',
       'description': 'min-height: 100%;'
     },
     {
       'name': 'min-h-screen',
       'description': 'min-height: 100vh;'
     },
     {
       'name': 'min-w-0',
       'description': 'min-width: 0;'
     },
     {
       'name': 'min-w-full',
       'description': 'min-width: 100%;'
     },
     {
       'name': '-m-0',
       'description': 'margin: 0;'
     },
     {
       'name': '-m-1',
       'description': 'margin: -0.25rem;'
     },
     {
       'name': '-m-2',
       'description': 'margin: -0.5rem;'
     },
     {
       'name': '-m-3',
       'description': 'margin: -0.75rem;'
     },
     {
       'name': '-m-4',
       'description': 'margin: -1rem;'
     },
     {
       'name': '-m-5',
       'description': 'margin: -1.25rem;'
     },
     {
       'name': '-m-6',
       'description': 'margin: -1.5rem;'
     },
     {
       'name': '-m-8',
       'description': 'margin: -2rem;'
     },
     {
       'name': '-m-10',
       'description': 'margin: -2.5rem;'
     },
     {
       'name': '-m-12',
       'description': 'margin: -3rem;'
     },
     {
       'name': '-m-16',
       'description': 'margin: -4rem;'
     },
     {
       'name': '-m-20',
       'description': 'margin: -5rem;'
     },
     {
       'name': '-m-24',
       'description': 'margin: -6rem;'
     },
     {
       'name': '-m-32',
       'description': 'margin: -8rem;'
     },
     {
       'name': '-m-px',
       'description': 'margin: -1px;'
     },
     {
       'name': '-my-0',
       'description': 'margin-top: 0; margin-bottom: 0;'
     },
     {
       'name': '-mx-0',
       'description': 'margin-left: 0; margin-right: 0;'
     },
     {
       'name': '-my-1',
       'description': 'margin-top: -0.25rem; margin-bottom: -0.25rem;'
     },
     {
       'name': '-mx-1',
       'description': 'margin-left: -0.25rem; margin-right: -0.25rem;'
     },
     {
       'name': '-my-2',
       'description': 'margin-top: -0.5rem; margin-bottom: -0.5rem;'
     },
     {
       'name': '-mx-2',
       'description': 'margin-left: -0.5rem; margin-right: -0.5rem;'
     },
     {
       'name': '-my-3',
       'description': 'margin-top: -0.75rem; margin-bottom: -0.75rem;'
     },
     {
       'name': '-mx-3',
       'description': 'margin-left: -0.75rem; margin-right: -0.75rem;'
     },
     {
       'name': '-my-4',
       'description': 'margin-top: -1rem; margin-bottom: -1rem;'
     },
     {
       'name': '-mx-4',
       'description': 'margin-left: -1rem; margin-right: -1rem;'
     },
     {
       'name': '-my-5',
       'description': 'margin-top: -1.25rem; margin-bottom: -1.25rem;'
     },
     {
       'name': '-mx-5',
       'description': 'margin-left: -1.25rem; margin-right: -1.25rem;'
     },
     {
       'name': '-my-6',
       'description': 'margin-top: -1.5rem; margin-bottom: -1.5rem;'
     },
     {
       'name': '-mx-6',
       'description': 'margin-left: -1.5rem; margin-right: -1.5rem;'
     },
     {
       'name': '-my-8',
       'description': 'margin-top: -2rem; margin-bottom: -2rem;'
     },
     {
       'name': '-mx-8',
       'description': 'margin-left: -2rem; margin-right: -2rem;'
     },
     {
       'name': '-my-10',
       'description': 'margin-top: -2.5rem; margin-bottom: -2.5rem;'
     },
     {
       'name': '-mx-10',
       'description': 'margin-left: -2.5rem; margin-right: -2.5rem;'
     },
     {
       'name': '-my-12',
       'description': 'margin-top: -3rem; margin-bottom: -3rem;'
     },
     {
       'name': '-mx-12',
       'description': 'margin-left: -3rem; margin-right: -3rem;'
     },
     {
       'name': '-my-16',
       'description': 'margin-top: -4rem; margin-bottom: -4rem;'
     },
     {
       'name': '-mx-16',
       'description': 'margin-left: -4rem; margin-right: -4rem;'
     },
     {
       'name': '-my-20',
       'description': 'margin-top: -5rem; margin-bottom: -5rem;'
     },
     {
       'name': '-mx-20',
       'description': 'margin-left: -5rem; margin-right: -5rem;'
     },
     {
       'name': '-my-24',
       'description': 'margin-top: -6rem; margin-bottom: -6rem;'
     },
     {
       'name': '-mx-24',
       'description': 'margin-left: -6rem; margin-right: -6rem;'
     },
     {
       'name': '-my-32',
       'description': 'margin-top: -8rem; margin-bottom: -8rem;'
     },
     {
       'name': '-mx-32',
       'description': 'margin-left: -8rem; margin-right: -8rem;'
     },
     {
       'name': '-my-px',
       'description': 'margin-top: -1px; margin-bottom: -1px;'
     },
     {
       'name': '-mx-px',
       'description': 'margin-left: -1px; margin-right: -1px;'
     },
     {
       'name': '-mt-0',
       'description': 'margin-top: 0;'
     },
     {
       'name': '-mr-0',
       'description': 'margin-right: 0;'
     },
     {
       'name': '-mb-0',
       'description': 'margin-bottom: 0;'
     },
     {
       'name': '-ml-0',
       'description': 'margin-left: 0;'
     },
     {
       'name': '-mt-1',
       'description': 'margin-top: -0.25rem;'
     },
     {
       'name': '-mr-1',
       'description': 'margin-right: -0.25rem;'
     },
     {
       'name': '-mb-1',
       'description': 'margin-bottom: -0.25rem;'
     },
     {
       'name': '-ml-1',
       'description': 'margin-left: -0.25rem;'
     },
     {
       'name': '-mt-2',
       'description': 'margin-top: -0.5rem;'
     },
     {
       'name': '-mr-2',
       'description': 'margin-right: -0.5rem;'
     },
     {
       'name': '-mb-2',
       'description': 'margin-bottom: -0.5rem;'
     },
     {
       'name': '-ml-2',
       'description': 'margin-left: -0.5rem;'
     },
     {
       'name': '-mt-3',
       'description': 'margin-top: -0.75rem;'
     },
     {
       'name': '-mr-3',
       'description': 'margin-right: -0.75rem;'
     },
     {
       'name': '-mb-3',
       'description': 'margin-bottom: -0.75rem;'
     },
     {
       'name': '-ml-3',
       'description': 'margin-left: -0.75rem;'
     },
     {
       'name': '-mt-4',
       'description': 'margin-top: -1rem;'
     },
     {
       'name': '-mr-4',
       'description': 'margin-right: -1rem;'
     },
     {
       'name': '-mb-4',
       'description': 'margin-bottom: -1rem;'
     },
     {
       'name': '-ml-4',
       'description': 'margin-left: -1rem;'
     },
     {
       'name': '-mt-5',
       'description': 'margin-top: -1.25rem;'
     },
     {
       'name': '-mr-5',
       'description': 'margin-right: -1.25rem;'
     },
     {
       'name': '-mb-5',
       'description': 'margin-bottom: -1.25rem;'
     },
     {
       'name': '-ml-5',
       'description': 'margin-left: -1.25rem;'
     },
     {
       'name': '-mt-6',
       'description': 'margin-top: -1.5rem;'
     },
     {
       'name': '-mr-6',
       'description': 'margin-right: -1.5rem;'
     },
     {
       'name': '-mb-6',
       'description': 'margin-bottom: -1.5rem;'
     },
     {
       'name': '-ml-6',
       'description': 'margin-left: -1.5rem;'
     },
     {
       'name': '-mt-8',
       'description': 'margin-top: -2rem;'
     },
     {
       'name': '-mr-8',
       'description': 'margin-right: -2rem;'
     },
     {
       'name': '-mb-8',
       'description': 'margin-bottom: -2rem;'
     },
     {
       'name': '-ml-8',
       'description': 'margin-left: -2rem;'
     },
     {
       'name': '-mt-10',
       'description': 'margin-top: -2.5rem;'
     },
     {
       'name': '-mr-10',
       'description': 'margin-right: -2.5rem;'
     },
     {
       'name': '-mb-10',
       'description': 'margin-bottom: -2.5rem;'
     },
     {
       'name': '-ml-10',
       'description': 'margin-left: -2.5rem;'
     },
     {
       'name': '-mt-12',
       'description': 'margin-top: -3rem;'
     },
     {
       'name': '-mr-12',
       'description': 'margin-right: -3rem;'
     },
     {
       'name': '-mb-12',
       'description': 'margin-bottom: -3rem;'
     },
     {
       'name': '-ml-12',
       'description': 'margin-left: -3rem;'
     },
     {
       'name': '-mt-16',
       'description': 'margin-top: -4rem;'
     },
     {
       'name': '-mr-16',
       'description': 'margin-right: -4rem;'
     },
     {
       'name': '-mb-16',
       'description': 'margin-bottom: -4rem;'
     },
     {
       'name': '-ml-16',
       'description': 'margin-left: -4rem;'
     },
     {
       'name': '-mt-20',
       'description': 'margin-top: -5rem;'
     },
     {
       'name': '-mr-20',
       'description': 'margin-right: -5rem;'
     },
     {
       'name': '-mb-20',
       'description': 'margin-bottom: -5rem;'
     },
     {
       'name': '-ml-20',
       'description': 'margin-left: -5rem;'
     },
     {
       'name': '-mt-24',
       'description': 'margin-top: -6rem;'
     },
     {
       'name': '-mr-24',
       'description': 'margin-right: -6rem;'
     },
     {
       'name': '-mb-24',
       'description': 'margin-bottom: -6rem;'
     },
     {
       'name': '-ml-24',
       'description': 'margin-left: -6rem;'
     },
     {
       'name': '-mt-32',
       'description': 'margin-top: -8rem;'
     },
     {
       'name': '-mr-32',
       'description': 'margin-right: -8rem;'
     },
     {
       'name': '-mb-32',
       'description': 'margin-bottom: -8rem;'
     },
     {
       'name': '-ml-32',
       'description': 'margin-left: -8rem;'
     },
     {
       'name': '-mt-px',
       'description': 'margin-top: -1px;'
     },
     {
       'name': '-mr-px',
       'description': 'margin-right: -1px;'
     },
     {
       'name': '-mb-px',
       'description': 'margin-bottom: -1px;'
     },
     {
       'name': '-ml-px',
       'description': 'margin-left: -1px;'
     },
     {
       'name': 'object-contain',
       'description': 'object-fit: contain;'
     },
     {
       'name': 'object-cover',
       'description': 'object-fit: cover;'
     },
     {
       'name': 'object-fill',
       'description': 'object-fit: fill;'
     },
     {
       'name': 'object-none',
       'description': 'object-fit: none;'
     },
     {
       'name': 'object-scale-down',
       'description': 'object-fit: scale-down;'
     },
     {
       'name': 'object-bottom',
       'description': 'object-position: bottom;'
     },
     {
       'name': 'object-center',
       'description': 'object-position: center;'
     },
     {
       'name': 'object-left',
       'description': 'object-position: left;'
     },
     {
       'name': 'object-left-bottom',
       'description': 'object-position: left bottom;'
     },
     {
       'name': 'object-left-top',
       'description': 'object-position: left top;'
     },
     {
       'name': 'object-right',
       'description': 'object-position: right;'
     },
     {
       'name': 'object-right-bottom',
       'description': 'object-position: right bottom;'
     },
     {
       'name': 'object-right-top',
       'description': 'object-position: right top;'
     },
     {
       'name': 'object-top',
       'description': 'object-position: top;'
     },
     {
       'name': 'opacity-0',
       'description': 'opacity: 0;'
     },
     {
       'name': 'opacity-25',
       'description': 'opacity: .25;'
     },
     {
       'name': 'opacity-50',
       'description': 'opacity: .5;'
     },
     {
       'name': 'opacity-75',
       'description': 'opacity: .75;'
     },
     {
       'name': 'opacity-100',
       'description': 'opacity: 1;'
     },
     {
       'name': 'outline-none',
       'description': 'outline: 0;'
     },
     {
       'name': 'focus:outline-none',
       'description': ':focus { outline: 0; }'
     },
     {
       'name': 'overflow-auto',
       'description': 'overflow: auto;'
     },
     {
       'name': 'overflow-hidden',
       'description': 'overflow: hidden;'
     },
     {
       'name': 'overflow-visible',
       'description': 'overflow: visible;'
     },
     {
       'name': 'overflow-scroll',
       'description': 'overflow: scroll;'
     },
     {
       'name': 'overflow-x-auto',
       'description': 'overflow-x: auto;'
     },
     {
       'name': 'overflow-y-auto',
       'description': 'overflow-y: auto;'
     },
     {
       'name': 'overflow-x-hidden',
       'description': 'overflow-x: hidden;'
     },
     {
       'name': 'overflow-y-hidden',
       'description': 'overflow-y: hidden;'
     },
     {
       'name': 'overflow-x-visible',
       'description': 'overflow-x: visible;'
     },
     {
       'name': 'overflow-y-visible',
       'description': 'overflow-y: visible;'
     },
     {
       'name': 'overflow-x-scroll',
       'description': 'overflow-x: scroll;'
     },
     {
       'name': 'overflow-y-scroll',
       'description': 'overflow-y: scroll;'
     },
     {
       'name': 'scrolling-touch',
       'description': '-webkit-overflow-scrolling: touch;'
     },
     {
       'name': 'scrolling-auto',
       'description': '-webkit-overflow-scrolling: auto;'
     },
     {
       'name': 'p-0',
       'description': 'padding: 0;'
     },
     {
       'name': 'p-1',
       'description': 'padding: .25rem;'
     },
     {
       'name': 'p-2',
       'description': 'padding: .5rem;'
     },
     {
       'name': 'p-3',
       'description': 'padding: .75rem;'
     },
     {
       'name': 'p-4',
       'description': 'padding: 1rem;'
     },
     {
       'name': 'p-5',
       'description': 'padding: 1.25rem;'
     },
     {
       'name': 'p-6',
       'description': 'padding: 1.5rem;'
     },
     {
       'name': 'p-8',
       'description': 'padding: 2rem;'
     },
     {
       'name': 'p-10',
       'description': 'padding: 2.5rem;'
     },
     {
       'name': 'p-12',
       'description': 'padding: 3rem;'
     },
     {
       'name': 'p-16',
       'description': 'padding: 4rem;'
     },
     {
       'name': 'p-20',
       'description': 'padding: 5rem;'
     },
     {
       'name': 'p-24',
       'description': 'padding: 6rem;'
     },
     {
       'name': 'p-32',
       'description': 'padding: 8rem;'
     },
     {
       'name': 'p-px',
       'description': 'padding: 1px;'
     },
     {
       'name': 'py-0',
       'description': 'padding-top: 0; padding-bottom: 0;'
     },
     {
       'name': 'px-0',
       'description': 'padding-left: 0; padding-right: 0;'
     },
     {
       'name': 'py-1',
       'description': 'padding-top: .25rem; padding-bottom: .25rem;'
     },
     {
       'name': 'px-1',
       'description': 'padding-left: .25rem; padding-right: .25rem;'
     },
     {
       'name': 'py-2',
       'description': 'padding-top: .5rem; padding-bottom: .5rem;'
     },
     {
       'name': 'px-2',
       'description': 'padding-left: .5rem; padding-right: .5rem;'
     },
     {
       'name': 'py-3',
       'description': 'padding-top: .75rem; padding-bottom: .75rem;'
     },
     {
       'name': 'px-3',
       'description': 'padding-left: .75rem; padding-right: .75rem;'
     },
     {
       'name': 'py-4',
       'description': 'padding-top: 1rem; padding-bottom: 1rem;'
     },
     {
       'name': 'px-4',
       'description': 'padding-left: 1rem; padding-right: 1rem;'
     },
     {
       'name': 'py-5',
       'description': 'padding-top: 1.25rem; padding-bottom: 1.25rem;'
     },
     {
       'name': 'px-5',
       'description': 'padding-left: 1.25rem; padding-right: 1.25rem;'
     },
     {
       'name': 'py-6',
       'description': 'padding-top: 1.5rem; padding-bottom: 1.5rem;'
     },
     {
       'name': 'px-6',
       'description': 'padding-left: 1.5rem; padding-right: 1.5rem;'
     },
     {
       'name': 'py-8',
       'description': 'padding-top: 2rem; padding-bottom: 2rem;'
     },
     {
       'name': 'px-8',
       'description': 'padding-left: 2rem; padding-right: 2rem;'
     },
     {
       'name': 'py-10',
       'description': 'padding-top: 2.5rem; padding-bottom: 2.5rem;'
     },
     {
       'name': 'px-10',
       'description': 'padding-left: 2.5rem; padding-right: 2.5rem;'
     },
     {
       'name': 'py-12',
       'description': 'padding-top: 3rem; padding-bottom: 3rem;'
     },
     {
       'name': 'px-12',
       'description': 'padding-left: 3rem; padding-right: 3rem;'
     },
     {
       'name': 'py-16',
       'description': 'padding-top: 4rem; padding-bottom: 4rem;'
     },
     {
       'name': 'px-16',
       'description': 'padding-left: 4rem; padding-right: 4rem;'
     },
     {
       'name': 'py-20',
       'description': 'padding-top: 5rem; padding-bottom: 5rem;'
     },
     {
       'name': 'px-20',
       'description': 'padding-left: 5rem; padding-right: 5rem;'
     },
     {
       'name': 'py-24',
       'description': 'padding-top: 6rem; padding-bottom: 6rem;'
     },
     {
       'name': 'px-24',
       'description': 'padding-left: 6rem; padding-right: 6rem;'
     },
     {
       'name': 'py-32',
       'description': 'padding-top: 8rem; padding-bottom: 8rem;'
     },
     {
       'name': 'px-32',
       'description': 'padding-left: 8rem; padding-right: 8rem;'
     },
     {
       'name': 'py-px',
       'description': 'padding-top: 1px; padding-bottom: 1px;'
     },
     {
       'name': 'px-px',
       'description': 'padding-left: 1px; padding-right: 1px;'
     },
     {
       'name': 'pt-0',
       'description': 'padding-top: 0;'
     },
     {
       'name': 'pr-0',
       'description': 'padding-right: 0;'
     },
     {
       'name': 'pb-0',
       'description': 'padding-bottom: 0;'
     },
     {
       'name': 'pl-0',
       'description': 'padding-left: 0;'
     },
     {
       'name': 'pt-1',
       'description': 'padding-top: .25rem;'
     },
     {
       'name': 'pr-1',
       'description': 'padding-right: .25rem;'
     },
     {
       'name': 'pb-1',
       'description': 'padding-bottom: .25rem;'
     },
     {
       'name': 'pl-1',
       'description': 'padding-left: .25rem;'
     },
     {
       'name': 'pt-2',
       'description': 'padding-top: .5rem;'
     },
     {
       'name': 'pr-2',
       'description': 'padding-right: .5rem;'
     },
     {
       'name': 'pb-2',
       'description': 'padding-bottom: .5rem;'
     },
     {
       'name': 'pl-2',
       'description': 'padding-left: .5rem;'
     },
     {
       'name': 'pt-3',
       'description': 'padding-top: .75rem;'
     },
     {
       'name': 'pr-3',
       'description': 'padding-right: .75rem;'
     },
     {
       'name': 'pb-3',
       'description': 'padding-bottom: .75rem;'
     },
     {
       'name': 'pl-3',
       'description': 'padding-left: .75rem;'
     },
     {
       'name': 'pt-4',
       'description': 'padding-top: 1rem;'
     },
     {
       'name': 'pr-4',
       'description': 'padding-right: 1rem;'
     },
     {
       'name': 'pb-4',
       'description': 'padding-bottom: 1rem;'
     },
     {
       'name': 'pl-4',
       'description': 'padding-left: 1rem;'
     },
     {
       'name': 'pt-5',
       'description': 'padding-top: 1.25rem;'
     },
     {
       'name': 'pr-5',
       'description': 'padding-right: 1.25rem;'
     },
     {
       'name': 'pb-5',
       'description': 'padding-bottom: 1.25rem;'
     },
     {
       'name': 'pl-5',
       'description': 'padding-left: 1.25rem;'
     },
     {
       'name': 'pt-6',
       'description': 'padding-top: 1.5rem;'
     },
     {
       'name': 'pr-6',
       'description': 'padding-right: 1.5rem;'
     },
     {
       'name': 'pb-6',
       'description': 'padding-bottom: 1.5rem;'
     },
     {
       'name': 'pl-6',
       'description': 'padding-left: 1.5rem;'
     },
     {
       'name': 'pt-8',
       'description': 'padding-top: 2rem;'
     },
     {
       'name': 'pr-8',
       'description': 'padding-right: 2rem;'
     },
     {
       'name': 'pb-8',
       'description': 'padding-bottom: 2rem;'
     },
     {
       'name': 'pl-8',
       'description': 'padding-left: 2rem;'
     },
     {
       'name': 'pt-10',
       'description': 'padding-top: 2.5rem;'
     },
     {
       'name': 'pr-10',
       'description': 'padding-right: 2.5rem;'
     },
     {
       'name': 'pb-10',
       'description': 'padding-bottom: 2.5rem;'
     },
     {
       'name': 'pl-10',
       'description': 'padding-left: 2.5rem;'
     },
     {
       'name': 'pt-12',
       'description': 'padding-top: 3rem;'
     },
     {
       'name': 'pr-12',
       'description': 'padding-right: 3rem;'
     },
     {
       'name': 'pb-12',
       'description': 'padding-bottom: 3rem;'
     },
     {
       'name': 'pl-12',
       'description': 'padding-left: 3rem;'
     },
     {
       'name': 'pt-16',
       'description': 'padding-top: 4rem;'
     },
     {
       'name': 'pr-16',
       'description': 'padding-right: 4rem;'
     },
     {
       'name': 'pb-16',
       'description': 'padding-bottom: 4rem;'
     },
     {
       'name': 'pl-16',
       'description': 'padding-left: 4rem;'
     },
     {
       'name': 'pt-20',
       'description': 'padding-top: 5rem;'
     },
     {
       'name': 'pr-20',
       'description': 'padding-right: 5rem;'
     },
     {
       'name': 'pb-20',
       'description': 'padding-bottom: 5rem;'
     },
     {
       'name': 'pl-20',
       'description': 'padding-left: 5rem;'
     },
     {
       'name': 'pt-24',
       'description': 'padding-top: 6rem;'
     },
     {
       'name': 'pr-24',
       'description': 'padding-right: 6rem;'
     },
     {
       'name': 'pb-24',
       'description': 'padding-bottom: 6rem;'
     },
     {
       'name': 'pl-24',
       'description': 'padding-left: 6rem;'
     },
     {
       'name': 'pt-32',
       'description': 'padding-top: 8rem;'
     },
     {
       'name': 'pr-32',
       'description': 'padding-right: 8rem;'
     },
     {
       'name': 'pb-32',
       'description': 'padding-bottom: 8rem;'
     },
     {
       'name': 'pl-32',
       'description': 'padding-left: 8rem;'
     },
     {
       'name': 'pt-px',
       'description': 'padding-top: 1px;'
     },
     {
       'name': 'pr-px',
       'description': 'padding-right: 1px;'
     },
     {
       'name': 'pb-px',
       'description': 'padding-bottom: 1px;'
     },
     {
       'name': 'pl-px',
       'description': 'padding-left: 1px;'
     },
     {
       'name': 'pointer-events-none',
       'description': 'pointer-events: none;'
     },
     {
       'name': 'pointer-events-auto',
       'description': 'pointer-events: auto;'
     },
     {
       'name': 'static',
       'description': 'position: static;'
     },
     {
       'name': 'fixed',
       'description': 'position: fixed;'
     },
     {
       'name': 'absolute',
       'description': 'position: absolute;'
     },
     {
       'name': 'relative',
       'description': 'position: relative;'
     },
     {
       'name': 'sticky',
       'description': 'position: sticky;'
     },
     {
       'name': 'pin-none',
       'description': 'top: auto; right: auto; bottom: auto; left: auto;'
     },
     {
       'name': 'pin',
       'description': 'top: 0; right: 0; bottom: 0; left: 0;'
     },
     {
       'name': 'pin-y',
       'description': 'top: 0; bottom: 0;'
     },
     {
       'name': 'pin-x',
       'description': 'right: 0; left: 0;'
     },
     {
       'name': 'pin-t',
       'description': 'top: 0;'
     },
     {
       'name': 'pin-r',
       'description': 'right: 0;'
     },
     {
       'name': 'pin-b',
       'description': 'bottom: 0;'
     },
     {
       'name': 'pin-l',
       'description': 'left: 0;'
     },
     {
       'name': 'resize-none',
       'description': 'resize: none;'
     },
     {
       'name': 'resize-y',
       'description': 'resize: vertical;'
     },
     {
       'name': 'resize-x',
       'description': 'resize: horizontal;'
     },
     {
       'name': 'resize',
       'description': 'resize: both;'
     },
     {
       'name': 'shadow',
       'description': 'box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .1);'
     },
     {
       'name': 'shadow-md',
       'description': 'box-shadow: 0 4px 8px 0 rgba(0, 0, 0, .12), 0 2px 4px 0 rgba(0, 0, 0, .08);'
     },
     {
       'name': 'shadow-lg',
       'description': 'box-shadow: 0 15px 30px 0 rgba(0, 0, 0, .11), 0 5px 15px 0 rgba(0, 0, 0, .08);'
     },
     {
       'name': 'shadow-inner',
       'description': 'box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, .06);'
     },
     {
       'name': 'shadow-outline',
       'description': 'box-shadow: 0 0 0 3px rgba(52, 144, 220, .5);'
     },
     {
       'name': 'shadow-none',
       'description': 'box-shadow: none;'
     },
     {
       'name': 'hover:shadow',
       'description': ':hover { box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .1); }'
     },
     {
       'name': 'hover:shadow-md',
       'description': ':hover { box-shadow: 0 4px 8px 0 rgba(0, 0, 0, .12), 0 2px 4px 0 rgba(0, 0, 0, .08); }'
     },
     {
       'name': 'hover:shadow-lg',
       'description': ':hover { box-shadow: 0 15px 30px 0 rgba(0, 0, 0, .11), 0 5px 15px 0 rgba(0, 0, 0, .08); }'
     },
     {
       'name': 'hover:shadow-inner',
       'description': ':hover { box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, .06); }'
     },
     {
       'name': 'hover:shadow-outline',
       'description': ':hover { box-shadow: 0 0 0 3px rgba(52, 144, 220, .5); }'
     },
     {
       'name': 'hover:shadow-none',
       'description': ':hover { box-shadow: none; }'
     },
     {
       'name': 'focus:shadow',
       'description': ':focus { box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .1); }'
     },
     {
       'name': 'focus:shadow-md',
       'description': ':focus { box-shadow: 0 4px 8px 0 rgba(0, 0, 0, .12), 0 2px 4px 0 rgba(0, 0, 0, .08); }'
     },
     {
       'name': 'focus:shadow-lg',
       'description': ':focus { box-shadow: 0 15px 30px 0 rgba(0, 0, 0, .11), 0 5px 15px 0 rgba(0, 0, 0, .08); }'
     },
     {
       'name': 'focus:shadow-inner',
       'description': ':focus { box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, .06); }'
     },
     {
       'name': 'focus:shadow-outline',
       'description': ':focus { box-shadow: 0 0 0 3px rgba(52, 144, 220, .5); }'
     },
     {
       'name': 'focus:shadow-none',
       'description': ':focus { box-shadow: none; }'
     },
     {
       'name': 'fill-current',
       'description': 'fill: currentColor;'
     },
     {
       'name': 'stroke-current',
       'description': 'stroke: currentColor;'
     },
     {
       'name': 'table-auto',
       'description': 'table-layout: auto;'
     },
     {
       'name': 'table-fixed',
       'description': 'table-layout: fixed;'
     },
     {
       'name': 'text-left',
       'description': 'text-align: left;'
     },
     {
       'name': 'text-center',
       'description': 'text-align: center;'
     },
     {
       'name': 'text-right',
       'description': 'text-align: right;'
     },
     {
       'name': 'text-justify',
       'description': 'text-align: justify;'
     },
     {
       'name': 'text-transparent',
       'description': 'color: transparent;'
     },
     {
       'name': 'text-black',
       'description': 'color: #22292f;'
     },
     {
       'name': 'text-grey-darkest',
       'description': 'color: #3d4852;'
     },
     {
       'name': 'text-grey-darker',
       'description': 'color: #606f7b;'
     },
     {
       'name': 'text-grey-dark',
       'description': 'color: #8795a1;'
     },
     {
       'name': 'text-grey',
       'description': 'color: #b8c2cc;'
     },
     {
       'name': 'text-grey-light',
       'description': 'color: #dae1e7;'
     },
     {
       'name': 'text-grey-lighter',
       'description': 'color: #f1f5f8;'
     },
     {
       'name': 'text-grey-lightest',
       'description': 'color: #f8fafc;'
     },
     {
       'name': 'text-white',
       'description': 'color: #fff;'
     },
     {
       'name': 'text-red-darkest',
       'description': 'color: #3b0d0c;'
     },
     {
       'name': 'text-red-darker',
       'description': 'color: #621b18;'
     },
     {
       'name': 'text-red-dark',
       'description': 'color: #cc1f1a;'
     },
     {
       'name': 'text-red',
       'description': 'color: #e3342f;'
     },
     {
       'name': 'text-red-light',
       'description': 'color: #ef5753;'
     },
     {
       'name': 'text-red-lighter',
       'description': 'color: #f9acaa;'
     },
     {
       'name': 'text-red-lightest',
       'description': 'color: #fcebea;'
     },
     {
       'name': 'text-orange-darkest',
       'description': 'color: #462a16;'
     },
     {
       'name': 'text-orange-darker',
       'description': 'color: #613b1f;'
     },
     {
       'name': 'text-orange-dark',
       'description': 'color: #de751f;'
     },
     {
       'name': 'text-orange',
       'description': 'color: #f6993f;'
     },
     {
       'name': 'text-orange-light',
       'description': 'color: #faad63;'
     },
     {
       'name': 'text-orange-lighter',
       'description': 'color: #fcd9b6;'
     },
     {
       'name': 'text-orange-lightest',
       'description': 'color: #fff5eb;'
     },
     {
       'name': 'text-yellow-darkest',
       'description': 'color: #453411;'
     },
     {
       'name': 'text-yellow-darker',
       'description': 'color: #684f1d;'
     },
     {
       'name': 'text-yellow-dark',
       'description': 'color: #f2d024;'
     },
     {
       'name': 'text-yellow',
       'description': 'color: #ffed4a;'
     },
     {
       'name': 'text-yellow-light',
       'description': 'color: #fff382;'
     },
     {
       'name': 'text-yellow-lighter',
       'description': 'color: #fff9c2;'
     },
     {
       'name': 'text-yellow-lightest',
       'description': 'color: #fcfbeb;'
     },
     {
       'name': 'text-green-darkest',
       'description': 'color: #0f2f21;'
     },
     {
       'name': 'text-green-darker',
       'description': 'color: #1a4731;'
     },
     {
       'name': 'text-green-dark',
       'description': 'color: #1f9d55;'
     },
     {
       'name': 'text-green',
       'description': 'color: #38c172;'
     },
     {
       'name': 'text-green-light',
       'description': 'color: #51d88a;'
     },
     {
       'name': 'text-green-lighter',
       'description': 'color: #a2f5bf;'
     },
     {
       'name': 'text-green-lightest',
       'description': 'color: #e3fcec;'
     },
     {
       'name': 'text-teal-darkest',
       'description': 'color: #0d3331;'
     },
     {
       'name': 'text-teal-darker',
       'description': 'color: #20504f;'
     },
     {
       'name': 'text-teal-dark',
       'description': 'color: #38a89d;'
     },
     {
       'name': 'text-teal',
       'description': 'color: #4dc0b5;'
     },
     {
       'name': 'text-teal-light',
       'description': 'color: #64d5ca;'
     },
     {
       'name': 'text-teal-lighter',
       'description': 'color: #a0f0ed;'
     },
     {
       'name': 'text-teal-lightest',
       'description': 'color: #e8fffe;'
     },
     {
       'name': 'text-blue-darkest',
       'description': 'color: #12283a;'
     },
     {
       'name': 'text-blue-darker',
       'description': 'color: #1c3d5a;'
     },
     {
       'name': 'text-blue-dark',
       'description': 'color: #2779bd;'
     },
     {
       'name': 'text-blue',
       'description': 'color: #3490dc;'
     },
     {
       'name': 'text-blue-light',
       'description': 'color: #6cb2eb;'
     },
     {
       'name': 'text-blue-lighter',
       'description': 'color: #bcdefa;'
     },
     {
       'name': 'text-blue-lightest',
       'description': 'color: #eff8ff;'
     },
     {
       'name': 'text-indigo-darkest',
       'description': 'color: #191e38;'
     },
     {
       'name': 'text-indigo-darker',
       'description': 'color: #2f365f;'
     },
     {
       'name': 'text-indigo-dark',
       'description': 'color: #5661b3;'
     },
     {
       'name': 'text-indigo',
       'description': 'color: #6574cd;'
     },
     {
       'name': 'text-indigo-light',
       'description': 'color: #7886d7;'
     },
     {
       'name': 'text-indigo-lighter',
       'description': 'color: #b2b7ff;'
     },
     {
       'name': 'text-indigo-lightest',
       'description': 'color: #e6e8ff;'
     },
     {
       'name': 'text-purple-darkest',
       'description': 'color: #21183c;'
     },
     {
       'name': 'text-purple-darker',
       'description': 'color: #382b5f;'
     },
     {
       'name': 'text-purple-dark',
       'description': 'color: #794acf;'
     },
     {
       'name': 'text-purple',
       'description': 'color: #9561e2;'
     },
     {
       'name': 'text-purple-light',
       'description': 'color: #a779e9;'
     },
     {
       'name': 'text-purple-lighter',
       'description': 'color: #d6bbfc;'
     },
     {
       'name': 'text-purple-lightest',
       'description': 'color: #f3ebff;'
     },
     {
       'name': 'text-pink-darkest',
       'description': 'color: #451225;'
     },
     {
       'name': 'text-pink-darker',
       'description': 'color: #6f213f;'
     },
     {
       'name': 'text-pink-dark',
       'description': 'color: #eb5286;'
     },
     {
       'name': 'text-pink',
       'description': 'color: #f66d9b;'
     },
     {
       'name': 'text-pink-light',
       'description': 'color: #fa7ea8;'
     },
     {
       'name': 'text-pink-lighter',
       'description': 'color: #ffbbca;'
     },
     {
       'name': 'text-pink-lightest',
       'description': 'color: #ffebef;'
     },
     {
       'name': 'hover:text-transparent',
       'description': ':hover { color: transparent; }'
     },
     {
       'name': 'hover:text-black',
       'description': ':hover { color: #22292f; }'
     },
     {
       'name': 'hover:text-grey-darkest',
       'description': ':hover { color: #3d4852; }'
     },
     {
       'name': 'hover:text-grey-darker',
       'description': ':hover { color: #606f7b; }'
     },
     {
       'name': 'hover:text-grey-dark',
       'description': ':hover { color: #8795a1; }'
     },
     {
       'name': 'hover:text-grey',
       'description': ':hover { color: #b8c2cc; }'
     },
     {
       'name': 'hover:text-grey-light',
       'description': ':hover { color: #dae1e7; }'
     },
     {
       'name': 'hover:text-grey-lighter',
       'description': ':hover { color: #f1f5f8; }'
     },
     {
       'name': 'hover:text-grey-lightest',
       'description': ':hover { color: #f8fafc; }'
     },
     {
       'name': 'hover:text-white',
       'description': ':hover { color: #fff; }'
     },
     {
       'name': 'hover:text-red-darkest',
       'description': ':hover { color: #3b0d0c; }'
     },
     {
       'name': 'hover:text-red-darker',
       'description': ':hover { color: #621b18; }'
     },
     {
       'name': 'hover:text-red-dark',
       'description': ':hover { color: #cc1f1a; }'
     },
     {
       'name': 'hover:text-red',
       'description': ':hover { color: #e3342f; }'
     },
     {
       'name': 'hover:text-red-light',
       'description': ':hover { color: #ef5753; }'
     },
     {
       'name': 'hover:text-red-lighter',
       'description': ':hover { color: #f9acaa; }'
     },
     {
       'name': 'hover:text-red-lightest',
       'description': ':hover { color: #fcebea; }'
     },
     {
       'name': 'hover:text-orange-darkest',
       'description': ':hover { color: #462a16; }'
     },
     {
       'name': 'hover:text-orange-darker',
       'description': ':hover { color: #613b1f; }'
     },
     {
       'name': 'hover:text-orange-dark',
       'description': ':hover { color: #de751f; }'
     },
     {
       'name': 'hover:text-orange',
       'description': ':hover { color: #f6993f; }'
     },
     {
       'name': 'hover:text-orange-light',
       'description': ':hover { color: #faad63; }'
     },
     {
       'name': 'hover:text-orange-lighter',
       'description': ':hover { color: #fcd9b6; }'
     },
     {
       'name': 'hover:text-orange-lightest',
       'description': ':hover { color: #fff5eb; }'
     },
     {
       'name': 'hover:text-yellow-darkest',
       'description': ':hover { color: #453411; }'
     },
     {
       'name': 'hover:text-yellow-darker',
       'description': ':hover { color: #684f1d; }'
     },
     {
       'name': 'hover:text-yellow-dark',
       'description': ':hover { color: #f2d024; }'
     },
     {
       'name': 'hover:text-yellow',
       'description': ':hover { color: #ffed4a; }'
     },
     {
       'name': 'hover:text-yellow-light',
       'description': ':hover { color: #fff382; }'
     },
     {
       'name': 'hover:text-yellow-lighter',
       'description': ':hover { color: #fff9c2; }'
     },
     {
       'name': 'hover:text-yellow-lightest',
       'description': ':hover { color: #fcfbeb; }'
     },
     {
       'name': 'hover:text-green-darkest',
       'description': ':hover { color: #0f2f21; }'
     },
     {
       'name': 'hover:text-green-darker',
       'description': ':hover { color: #1a4731; }'
     },
     {
       'name': 'hover:text-green-dark',
       'description': ':hover { color: #1f9d55; }'
     },
     {
       'name': 'hover:text-green',
       'description': ':hover { color: #38c172; }'
     },
     {
       'name': 'hover:text-green-light',
       'description': ':hover { color: #51d88a; }'
     },
     {
       'name': 'hover:text-green-lighter',
       'description': ':hover { color: #a2f5bf; }'
     },
     {
       'name': 'hover:text-green-lightest',
       'description': ':hover { color: #e3fcec; }'
     },
     {
       'name': 'hover:text-teal-darkest',
       'description': ':hover { color: #0d3331; }'
     },
     {
       'name': 'hover:text-teal-darker',
       'description': ':hover { color: #20504f; }'
     },
     {
       'name': 'hover:text-teal-dark',
       'description': ':hover { color: #38a89d; }'
     },
     {
       'name': 'hover:text-teal',
       'description': ':hover { color: #4dc0b5; }'
     },
     {
       'name': 'hover:text-teal-light',
       'description': ':hover { color: #64d5ca; }'
     },
     {
       'name': 'hover:text-teal-lighter',
       'description': ':hover { color: #a0f0ed; }'
     },
     {
       'name': 'hover:text-teal-lightest',
       'description': ':hover { color: #e8fffe; }'
     },
     {
       'name': 'hover:text-blue-darkest',
       'description': ':hover { color: #12283a; }'
     },
     {
       'name': 'hover:text-blue-darker',
       'description': ':hover { color: #1c3d5a; }'
     },
     {
       'name': 'hover:text-blue-dark',
       'description': ':hover { color: #2779bd; }'
     },
     {
       'name': 'hover:text-blue',
       'description': ':hover { color: #3490dc; }'
     },
     {
       'name': 'hover:text-blue-light',
       'description': ':hover { color: #6cb2eb; }'
     },
     {
       'name': 'hover:text-blue-lighter',
       'description': ':hover { color: #bcdefa; }'
     },
     {
       'name': 'hover:text-blue-lightest',
       'description': ':hover { color: #eff8ff; }'
     },
     {
       'name': 'hover:text-indigo-darkest',
       'description': ':hover { color: #191e38; }'
     },
     {
       'name': 'hover:text-indigo-darker',
       'description': ':hover { color: #2f365f; }'
     },
     {
       'name': 'hover:text-indigo-dark',
       'description': ':hover { color: #5661b3; }'
     },
     {
       'name': 'hover:text-indigo',
       'description': ':hover { color: #6574cd; }'
     },
     {
       'name': 'hover:text-indigo-light',
       'description': ':hover { color: #7886d7; }'
     },
     {
       'name': 'hover:text-indigo-lighter',
       'description': ':hover { color: #b2b7ff; }'
     },
     {
       'name': 'hover:text-indigo-lightest',
       'description': ':hover { color: #e6e8ff; }'
     },
     {
       'name': 'hover:text-purple-darkest',
       'description': ':hover { color: #21183c; }'
     },
     {
       'name': 'hover:text-purple-darker',
       'description': ':hover { color: #382b5f; }'
     },
     {
       'name': 'hover:text-purple-dark',
       'description': ':hover { color: #794acf; }'
     },
     {
       'name': 'hover:text-purple',
       'description': ':hover { color: #9561e2; }'
     },
     {
       'name': 'hover:text-purple-light',
       'description': ':hover { color: #a779e9; }'
     },
     {
       'name': 'hover:text-purple-lighter',
       'description': ':hover { color: #d6bbfc; }'
     },
     {
       'name': 'hover:text-purple-lightest',
       'description': ':hover { color: #f3ebff; }'
     },
     {
       'name': 'hover:text-pink-darkest',
       'description': ':hover { color: #451225; }'
     },
     {
       'name': 'hover:text-pink-darker',
       'description': ':hover { color: #6f213f; }'
     },
     {
       'name': 'hover:text-pink-dark',
       'description': ':hover { color: #eb5286; }'
     },
     {
       'name': 'hover:text-pink',
       'description': ':hover { color: #f66d9b; }'
     },
     {
       'name': 'hover:text-pink-light',
       'description': ':hover { color: #fa7ea8; }'
     },
     {
       'name': 'hover:text-pink-lighter',
       'description': ':hover { color: #ffbbca; }'
     },
     {
       'name': 'hover:text-pink-lightest',
       'description': ':hover { color: #ffebef; }'
     },
     {
       'name': 'focus:text-transparent',
       'description': ':focus { color: transparent; }'
     },
     {
       'name': 'focus:text-black',
       'description': ':focus { color: #22292f; }'
     },
     {
       'name': 'focus:text-grey-darkest',
       'description': ':focus { color: #3d4852; }'
     },
     {
       'name': 'focus:text-grey-darker',
       'description': ':focus { color: #606f7b; }'
     },
     {
       'name': 'focus:text-grey-dark',
       'description': ':focus { color: #8795a1; }'
     },
     {
       'name': 'focus:text-grey',
       'description': ':focus { color: #b8c2cc; }'
     },
     {
       'name': 'focus:text-grey-light',
       'description': ':focus { color: #dae1e7; }'
     },
     {
       'name': 'focus:text-grey-lighter',
       'description': ':focus { color: #f1f5f8; }'
     },
     {
       'name': 'focus:text-grey-lightest',
       'description': ':focus { color: #f8fafc; }'
     },
     {
       'name': 'focus:text-white',
       'description': ':focus { color: #fff; }'
     },
     {
       'name': 'focus:text-red-darkest',
       'description': ':focus { color: #3b0d0c; }'
     },
     {
       'name': 'focus:text-red-darker',
       'description': ':focus { color: #621b18; }'
     },
     {
       'name': 'focus:text-red-dark',
       'description': ':focus { color: #cc1f1a; }'
     },
     {
       'name': 'focus:text-red',
       'description': ':focus { color: #e3342f; }'
     },
     {
       'name': 'focus:text-red-light',
       'description': ':focus { color: #ef5753; }'
     },
     {
       'name': 'focus:text-red-lighter',
       'description': ':focus { color: #f9acaa; }'
     },
     {
       'name': 'focus:text-red-lightest',
       'description': ':focus { color: #fcebea; }'
     },
     {
       'name': 'focus:text-orange-darkest',
       'description': ':focus { color: #462a16; }'
     },
     {
       'name': 'focus:text-orange-darker',
       'description': ':focus { color: #613b1f; }'
     },
     {
       'name': 'focus:text-orange-dark',
       'description': ':focus { color: #de751f; }'
     },
     {
       'name': 'focus:text-orange',
       'description': ':focus { color: #f6993f; }'
     },
     {
       'name': 'focus:text-orange-light',
       'description': ':focus { color: #faad63; }'
     },
     {
       'name': 'focus:text-orange-lighter',
       'description': ':focus { color: #fcd9b6; }'
     },
     {
       'name': 'focus:text-orange-lightest',
       'description': ':focus { color: #fff5eb; }'
     },
     {
       'name': 'focus:text-yellow-darkest',
       'description': ':focus { color: #453411; }'
     },
     {
       'name': 'focus:text-yellow-darker',
       'description': ':focus { color: #684f1d; }'
     },
     {
       'name': 'focus:text-yellow-dark',
       'description': ':focus { color: #f2d024; }'
     },
     {
       'name': 'focus:text-yellow',
       'description': ':focus { color: #ffed4a; }'
     },
     {
       'name': 'focus:text-yellow-light',
       'description': ':focus { color: #fff382; }'
     },
     {
       'name': 'focus:text-yellow-lighter',
       'description': ':focus { color: #fff9c2; }'
     },
     {
       'name': 'focus:text-yellow-lightest',
       'description': ':focus { color: #fcfbeb; }'
     },
     {
       'name': 'focus:text-green-darkest',
       'description': ':focus { color: #0f2f21; }'
     },
     {
       'name': 'focus:text-green-darker',
       'description': ':focus { color: #1a4731; }'
     },
     {
       'name': 'focus:text-green-dark',
       'description': ':focus { color: #1f9d55; }'
     },
     {
       'name': 'focus:text-green',
       'description': ':focus { color: #38c172; }'
     },
     {
       'name': 'focus:text-green-light',
       'description': ':focus { color: #51d88a; }'
     },
     {
       'name': 'focus:text-green-lighter',
       'description': ':focus { color: #a2f5bf; }'
     },
     {
       'name': 'focus:text-green-lightest',
       'description': ':focus { color: #e3fcec; }'
     },
     {
       'name': 'focus:text-teal-darkest',
       'description': ':focus { color: #0d3331; }'
     },
     {
       'name': 'focus:text-teal-darker',
       'description': ':focus { color: #20504f; }'
     },
     {
       'name': 'focus:text-teal-dark',
       'description': ':focus { color: #38a89d; }'
     },
     {
       'name': 'focus:text-teal',
       'description': ':focus { color: #4dc0b5; }'
     },
     {
       'name': 'focus:text-teal-light',
       'description': ':focus { color: #64d5ca; }'
     },
     {
       'name': 'focus:text-teal-lighter',
       'description': ':focus { color: #a0f0ed; }'
     },
     {
       'name': 'focus:text-teal-lightest',
       'description': ':focus { color: #e8fffe; }'
     },
     {
       'name': 'focus:text-blue-darkest',
       'description': ':focus { color: #12283a; }'
     },
     {
       'name': 'focus:text-blue-darker',
       'description': ':focus { color: #1c3d5a; }'
     },
     {
       'name': 'focus:text-blue-dark',
       'description': ':focus { color: #2779bd; }'
     },
     {
       'name': 'focus:text-blue',
       'description': ':focus { color: #3490dc; }'
     },
     {
       'name': 'focus:text-blue-light',
       'description': ':focus { color: #6cb2eb; }'
     },
     {
       'name': 'focus:text-blue-lighter',
       'description': ':focus { color: #bcdefa; }'
     },
     {
       'name': 'focus:text-blue-lightest',
       'description': ':focus { color: #eff8ff; }'
     },
     {
       'name': 'focus:text-indigo-darkest',
       'description': ':focus { color: #191e38; }'
     },
     {
       'name': 'focus:text-indigo-darker',
       'description': ':focus { color: #2f365f; }'
     },
     {
       'name': 'focus:text-indigo-dark',
       'description': ':focus { color: #5661b3; }'
     },
     {
       'name': 'focus:text-indigo',
       'description': ':focus { color: #6574cd; }'
     },
     {
       'name': 'focus:text-indigo-light',
       'description': ':focus { color: #7886d7; }'
     },
     {
       'name': 'focus:text-indigo-lighter',
       'description': ':focus { color: #b2b7ff; }'
     },
     {
       'name': 'focus:text-indigo-lightest',
       'description': ':focus { color: #e6e8ff; }'
     },
     {
       'name': 'focus:text-purple-darkest',
       'description': ':focus { color: #21183c; }'
     },
     {
       'name': 'focus:text-purple-darker',
       'description': ':focus { color: #382b5f; }'
     },
     {
       'name': 'focus:text-purple-dark',
       'description': ':focus { color: #794acf; }'
     },
     {
       'name': 'focus:text-purple',
       'description': ':focus { color: #9561e2; }'
     },
     {
       'name': 'focus:text-purple-light',
       'description': ':focus { color: #a779e9; }'
     },
     {
       'name': 'focus:text-purple-lighter',
       'description': ':focus { color: #d6bbfc; }'
     },
     {
       'name': 'focus:text-purple-lightest',
       'description': ':focus { color: #f3ebff; }'
     },
     {
       'name': 'focus:text-pink-darkest',
       'description': ':focus { color: #451225; }'
     },
     {
       'name': 'focus:text-pink-darker',
       'description': ':focus { color: #6f213f; }'
     },
     {
       'name': 'focus:text-pink-dark',
       'description': ':focus { color: #eb5286; }'
     },
     {
       'name': 'focus:text-pink',
       'description': ':focus { color: #f66d9b; }'
     },
     {
       'name': 'focus:text-pink-light',
       'description': ':focus { color: #fa7ea8; }'
     },
     {
       'name': 'focus:text-pink-lighter',
       'description': ':focus { color: #ffbbca; }'
     },
     {
       'name': 'focus:text-pink-lightest',
       'description': ':focus { color: #ffebef; }'
     },
     {
       'name': 'text-xs',
       'description': 'font-size: .75rem;'
     },
     {
       'name': 'text-sm',
       'description': 'font-size: .875rem;'
     },
     {
       'name': 'text-base',
       'description': 'font-size: 1rem;'
     },
     {
       'name': 'text-lg',
       'description': 'font-size: 1.125rem;'
     },
     {
       'name': 'text-xl',
       'description': 'font-size: 1.25rem;'
     },
     {
       'name': 'text-2xl',
       'description': 'font-size: 1.5rem;'
     },
     {
       'name': 'text-3xl',
       'description': 'font-size: 1.875rem;'
     },
     {
       'name': 'text-4xl',
       'description': 'font-size: 2.25rem;'
     },
     {
       'name': 'text-5xl',
       'description': 'font-size: 3rem;'
     },
     {
       'name': 'italic',
       'description': 'font-style: italic;'
     },
     {
       'name': 'roman',
       'description': 'font-style: normal;'
     },
     {
       'name': 'uppercase',
       'description': 'text-transform: uppercase;'
     },
     {
       'name': 'lowercase',
       'description': 'text-transform: lowercase;'
     },
     {
       'name': 'capitalize',
       'description': 'text-transform: capitalize;'
     },
     {
       'name': 'normal-case',
       'description': 'text-transform: none;'
     },
     {
       'name': 'underline',
       'description': 'text-decoration: underline;'
     },
     {
       'name': 'line-through',
       'description': 'text-decoration: line-through;'
     },
     {
       'name': 'no-underline',
       'description': 'text-decoration: none;'
     },
     {
       'name': 'antialiased',
       'description': '-webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;'
     },
     {
       'name': 'subpixel-antialiased',
       'description': '-webkit-font-smoothing: auto; -moz-osx-font-smoothing: auto;'
     },
     {
       'name': 'hover:italic',
       'description': ':hover { font-style: italic; }'
     },
     {
       'name': 'hover:roman',
       'description': ':hover { font-style: normal; }'
     },
     {
       'name': 'hover:uppercase',
       'description': ':hover { text-transform: uppercase; }'
     },
     {
       'name': 'hover:lowercase',
       'description': ':hover { text-transform: lowercase; }'
     },
     {
       'name': 'hover:capitalize',
       'description': ':hover { text-transform: capitalize; }'
     },
     {
       'name': 'hover:normal-case',
       'description': ':hover { text-transform: none; }'
     },
     {
       'name': 'hover:underline',
       'description': ':hover { text-decoration: underline; }'
     },
     {
       'name': 'hover:line-through',
       'description': ':hover { text-decoration: line-through; }'
     },
     {
       'name': 'hover:no-underline',
       'description': ':hover { text-decoration: none; }'
     },
     {
       'name': 'hover:antialiased',
       'description': ':hover { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }'
     },
     {
       'name': 'hover:subpixel-antialiased',
       'description': ':hover { -webkit-font-smoothing: auto; -moz-osx-font-smoothing: auto; }'
     },
     {
       'name': 'focus:italic',
       'description': ':focus { font-style: italic; }'
     },
     {
       'name': 'focus:roman',
       'description': ':focus { font-style: normal; }'
     },
     {
       'name': 'focus:uppercase',
       'description': ':focus { text-transform: uppercase; }'
     },
     {
       'name': 'focus:lowercase',
       'description': ':focus { text-transform: lowercase; }'
     },
     {
       'name': 'focus:capitalize',
       'description': ':focus { text-transform: capitalize; }'
     },
     {
       'name': 'focus:normal-case',
       'description': ':focus { text-transform: none; }'
     },
     {
       'name': 'focus:underline',
       'description': ':focus { text-decoration: underline; }'
     },
     {
       'name': 'focus:line-through',
       'description': ':focus { text-decoration: line-through; }'
     },
     {
       'name': 'focus:no-underline',
       'description': ':focus { text-decoration: none; }'
     },
     {
       'name': 'focus:antialiased',
       'description': ':focus { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }'
     },
     {
       'name': 'focus:subpixel-antialiased',
       'description': ':focus { -webkit-font-smoothing: auto; -moz-osx-font-smoothing: auto; }'
     },
     {
       'name': 'tracking-tight',
       'description': 'letter-spacing: -0.05em;'
     },
     {
       'name': 'tracking-normal',
       'description': 'letter-spacing: 0;'
     },
     {
       'name': 'tracking-wide',
       'description': 'letter-spacing: .05em;'
     },
     {
       'name': 'select-none',
       'description': 'user-select: none;'
     },
     {
       'name': 'select-text',
       'description': 'user-select: text;'
     },
     {
       'name': 'align-baseline',
       'description': 'vertical-align: baseline;'
     },
     {
       'name': 'align-top',
       'description': 'vertical-align: top;'
     },
     {
       'name': 'align-middle',
       'description': 'vertical-align: middle;'
     },
     {
       'name': 'align-bottom',
       'description': 'vertical-align: bottom;'
     },
     {
       'name': 'align-text-top',
       'description': 'vertical-align: text-top;'
     },
     {
       'name': 'align-text-bottom',
       'description': 'vertical-align: text-bottom;'
     },
     {
       'name': 'visible',
       'description': 'visibility: visible;'
     },
     {
       'name': 'invisible',
       'description': 'visibility: hidden;'
     },
     {
       'name': 'whitespace-normal',
       'description': 'white-space: normal;'
     },
     {
       'name': 'whitespace-no-wrap',
       'description': 'white-space: nowrap;'
     },
     {
       'name': 'whitespace-pre',
       'description': 'white-space: pre;'
     },
     {
       'name': 'whitespace-pre-line',
       'description': 'white-space: pre-line;'
     },
     {
       'name': 'whitespace-pre-wrap',
       'description': 'white-space: pre-wrap;'
     },
     {
       'name': 'break-words',
       'description': 'word-wrap: break-word;'
     },
     {
       'name': 'break-normal',
       'description': 'word-wrap: normal;'
     },
     {
       'name': 'truncate',
       'description': 'overflow: hidden; text-overflow: ellipsis; white-space: nowrap;'
     },
     {
       'name': 'w-1',
       'description': 'width: .25rem;'
     },
     {
       'name': 'w-2',
       'description': 'width: .5rem;'
     },
     {
       'name': 'w-3',
       'description': 'width: .75rem;'
     },
     {
       'name': 'w-4',
       'description': 'width: 1rem;'
     },
     {
       'name': 'w-5',
       'description': 'width: 1.25rem;'
     },
     {
       'name': 'w-6',
       'description': 'width: 1.5rem;'
     },
     {
       'name': 'w-8',
       'description': 'width: 2rem;'
     },
     {
       'name': 'w-10',
       'description': 'width: 2.5rem;'
     },
     {
       'name': 'w-12',
       'description': 'width: 3rem;'
     },
     {
       'name': 'w-16',
       'description': 'width: 4rem;'
     },
     {
       'name': 'w-24',
       'description': 'width: 6rem;'
     },
     {
       'name': 'w-32',
       'description': 'width: 8rem;'
     },
     {
       'name': 'w-48',
       'description': 'width: 12rem;'
     },
     {
       'name': 'w-64',
       'description': 'width: 16rem;'
     },
     {
       'name': 'w-auto',
       'description': 'width: auto;'
     },
     {
       'name': 'w-px',
       'description': 'width: 1px;'
     },
     {
       'name': 'w-1/2',
       'description': 'width: 50%;'
     },
     {
       'name': 'w-1/3',
       'description': 'width: 33.33333%;'
     },
     {
       'name': 'w-2/3',
       'description': 'width: 66.66667%;'
     },
     {
       'name': 'w-1/4',
       'description': 'width: 25%;'
     },
     {
       'name': 'w-3/4',
       'description': 'width: 75%;'
     },
     {
       'name': 'w-1/5',
       'description': 'width: 20%;'
     },
     {
       'name': 'w-2/5',
       'description': 'width: 40%;'
     },
     {
       'name': 'w-3/5',
       'description': 'width: 60%;'
     },
     {
       'name': 'w-4/5',
       'description': 'width: 80%;'
     },
     {
       'name': 'w-1/6',
       'description': 'width: 16.66667%;'
     },
     {
       'name': 'w-5/6',
       'description': 'width: 83.33333%;'
     },
     {
       'name': 'w-full',
       'description': 'width: 100%;'
     },
     {
       'name': 'w-screen',
       'description': 'width: 100vw;'
     },
     {
       'name': 'z-0',
       'description': 'z-index: 0;'
     },
     {
       'name': 'z-10',
       'description': 'z-index: 10;'
     },
     {
       'name': 'z-20',
       'description': 'z-index: 20;'
     },
     {
       'name': 'z-30',
       'description': 'z-index: 30;'
     },
     {
       'name': 'z-40',
       'description': 'z-index: 40;'
     },
     {
       'name': 'z-50',
       'description': 'z-index: 50;'
     },
     {
       'name': 'z-auto',
       'description': 'z-index: auto;'
     },
     {
       'name': 'sm:list-reset',
       'description': 'list-style: none; padding: 0;'
     },
     {
       'name': 'sm:appearance-none',
       'description': 'appearance: none;'
     },
     {
       'name': 'sm:bg-fixed',
       'description': 'background-attachment: fixed;'
     },
     {
       'name': 'sm:bg-local',
       'description': 'background-attachment: local;'
     },
     {
       'name': 'sm:bg-scroll',
       'description': 'background-attachment: scroll;'
     },
     {
       'name': 'sm:bg-transparent',
       'description': 'background-color: transparent;'
     },
     {
       'name': 'sm:bg-black',
       'description': 'background-color: #22292f;'
     },
     {
       'name': 'sm:bg-grey-darkest',
       'description': 'background-color: #3d4852;'
     },
     {
       'name': 'sm:bg-grey-darker',
       'description': 'background-color: #606f7b;'
     },
     {
       'name': 'sm:bg-grey-dark',
       'description': 'background-color: #8795a1;'
     },
     {
       'name': 'sm:bg-grey',
       'description': 'background-color: #b8c2cc;'
     },
     {
       'name': 'sm:bg-grey-light',
       'description': 'background-color: #dae1e7;'
     },
     {
       'name': 'sm:bg-grey-lighter',
       'description': 'background-color: #f1f5f8;'
     },
     {
       'name': 'sm:bg-grey-lightest',
       'description': 'background-color: #f8fafc;'
     },
     {
       'name': 'sm:bg-white',
       'description': 'background-color: #fff;'
     },
     {
       'name': 'sm:bg-red-darkest',
       'description': 'background-color: #3b0d0c;'
     },
     {
       'name': 'sm:bg-red-darker',
       'description': 'background-color: #621b18;'
     },
     {
       'name': 'sm:bg-red-dark',
       'description': 'background-color: #cc1f1a;'
     },
     {
       'name': 'sm:bg-red',
       'description': 'background-color: #e3342f;'
     },
     {
       'name': 'sm:bg-red-light',
       'description': 'background-color: #ef5753;'
     },
     {
       'name': 'sm:bg-red-lighter',
       'description': 'background-color: #f9acaa;'
     },
     {
       'name': 'sm:bg-red-lightest',
       'description': 'background-color: #fcebea;'
     },
     {
       'name': 'sm:bg-orange-darkest',
       'description': 'background-color: #462a16;'
     },
     {
       'name': 'sm:bg-orange-darker',
       'description': 'background-color: #613b1f;'
     },
     {
       'name': 'sm:bg-orange-dark',
       'description': 'background-color: #de751f;'
     },
     {
       'name': 'sm:bg-orange',
       'description': 'background-color: #f6993f;'
     },
     {
       'name': 'sm:bg-orange-light',
       'description': 'background-color: #faad63;'
     },
     {
       'name': 'sm:bg-orange-lighter',
       'description': 'background-color: #fcd9b6;'
     },
     {
       'name': 'sm:bg-orange-lightest',
       'description': 'background-color: #fff5eb;'
     },
     {
       'name': 'sm:bg-yellow-darkest',
       'description': 'background-color: #453411;'
     },
     {
       'name': 'sm:bg-yellow-darker',
       'description': 'background-color: #684f1d;'
     },
     {
       'name': 'sm:bg-yellow-dark',
       'description': 'background-color: #f2d024;'
     },
     {
       'name': 'sm:bg-yellow',
       'description': 'background-color: #ffed4a;'
     },
     {
       'name': 'sm:bg-yellow-light',
       'description': 'background-color: #fff382;'
     },
     {
       'name': 'sm:bg-yellow-lighter',
       'description': 'background-color: #fff9c2;'
     },
     {
       'name': 'sm:bg-yellow-lightest',
       'description': 'background-color: #fcfbeb;'
     },
     {
       'name': 'sm:bg-green-darkest',
       'description': 'background-color: #0f2f21;'
     },
     {
       'name': 'sm:bg-green-darker',
       'description': 'background-color: #1a4731;'
     },
     {
       'name': 'sm:bg-green-dark',
       'description': 'background-color: #1f9d55;'
     },
     {
       'name': 'sm:bg-green',
       'description': 'background-color: #38c172;'
     },
     {
       'name': 'sm:bg-green-light',
       'description': 'background-color: #51d88a;'
     },
     {
       'name': 'sm:bg-green-lighter',
       'description': 'background-color: #a2f5bf;'
     },
     {
       'name': 'sm:bg-green-lightest',
       'description': 'background-color: #e3fcec;'
     },
     {
       'name': 'sm:bg-teal-darkest',
       'description': 'background-color: #0d3331;'
     },
     {
       'name': 'sm:bg-teal-darker',
       'description': 'background-color: #20504f;'
     },
     {
       'name': 'sm:bg-teal-dark',
       'description': 'background-color: #38a89d;'
     },
     {
       'name': 'sm:bg-teal',
       'description': 'background-color: #4dc0b5;'
     },
     {
       'name': 'sm:bg-teal-light',
       'description': 'background-color: #64d5ca;'
     },
     {
       'name': 'sm:bg-teal-lighter',
       'description': 'background-color: #a0f0ed;'
     },
     {
       'name': 'sm:bg-teal-lightest',
       'description': 'background-color: #e8fffe;'
     },
     {
       'name': 'sm:bg-blue-darkest',
       'description': 'background-color: #12283a;'
     },
     {
       'name': 'sm:bg-blue-darker',
       'description': 'background-color: #1c3d5a;'
     },
     {
       'name': 'sm:bg-blue-dark',
       'description': 'background-color: #2779bd;'
     },
     {
       'name': 'sm:bg-blue',
       'description': 'background-color: #3490dc;'
     },
     {
       'name': 'sm:bg-blue-light',
       'description': 'background-color: #6cb2eb;'
     },
     {
       'name': 'sm:bg-blue-lighter',
       'description': 'background-color: #bcdefa;'
     },
     {
       'name': 'sm:bg-blue-lightest',
       'description': 'background-color: #eff8ff;'
     },
     {
       'name': 'sm:bg-indigo-darkest',
       'description': 'background-color: #191e38;'
     },
     {
       'name': 'sm:bg-indigo-darker',
       'description': 'background-color: #2f365f;'
     },
     {
       'name': 'sm:bg-indigo-dark',
       'description': 'background-color: #5661b3;'
     },
     {
       'name': 'sm:bg-indigo',
       'description': 'background-color: #6574cd;'
     },
     {
       'name': 'sm:bg-indigo-light',
       'description': 'background-color: #7886d7;'
     },
     {
       'name': 'sm:bg-indigo-lighter',
       'description': 'background-color: #b2b7ff;'
     },
     {
       'name': 'sm:bg-indigo-lightest',
       'description': 'background-color: #e6e8ff;'
     },
     {
       'name': 'sm:bg-purple-darkest',
       'description': 'background-color: #21183c;'
     },
     {
       'name': 'sm:bg-purple-darker',
       'description': 'background-color: #382b5f;'
     },
     {
       'name': 'sm:bg-purple-dark',
       'description': 'background-color: #794acf;'
     },
     {
       'name': 'sm:bg-purple',
       'description': 'background-color: #9561e2;'
     },
     {
       'name': 'sm:bg-purple-light',
       'description': 'background-color: #a779e9;'
     },
     {
       'name': 'sm:bg-purple-lighter',
       'description': 'background-color: #d6bbfc;'
     },
     {
       'name': 'sm:bg-purple-lightest',
       'description': 'background-color: #f3ebff;'
     },
     {
       'name': 'sm:bg-pink-darkest',
       'description': 'background-color: #451225;'
     },
     {
       'name': 'sm:bg-pink-darker',
       'description': 'background-color: #6f213f;'
     },
     {
       'name': 'sm:bg-pink-dark',
       'description': 'background-color: #eb5286;'
     },
     {
       'name': 'sm:bg-pink',
       'description': 'background-color: #f66d9b;'
     },
     {
       'name': 'sm:bg-pink-light',
       'description': 'background-color: #fa7ea8;'
     },
     {
       'name': 'sm:bg-pink-lighter',
       'description': 'background-color: #ffbbca;'
     },
     {
       'name': 'sm:bg-pink-lightest',
       'description': 'background-color: #ffebef;'
     },
     {
       'name': 'sm:hover:bg-transparent',
       'description': ':hover { background-color: transparent; }'
     },
     {
       'name': 'sm:hover:bg-black',
       'description': ':hover { background-color: #22292f; }'
     },
     {
       'name': 'sm:hover:bg-grey-darkest',
       'description': ':hover { background-color: #3d4852; }'
     },
     {
       'name': 'sm:hover:bg-grey-darker',
       'description': ':hover { background-color: #606f7b; }'
     },
     {
       'name': 'sm:hover:bg-grey-dark',
       'description': ':hover { background-color: #8795a1; }'
     },
     {
       'name': 'sm:hover:bg-grey',
       'description': ':hover { background-color: #b8c2cc; }'
     },
     {
       'name': 'sm:hover:bg-grey-light',
       'description': ':hover { background-color: #dae1e7; }'
     },
     {
       'name': 'sm:hover:bg-grey-lighter',
       'description': ':hover { background-color: #f1f5f8; }'
     },
     {
       'name': 'sm:hover:bg-grey-lightest',
       'description': ':hover { background-color: #f8fafc; }'
     },
     {
       'name': 'sm:hover:bg-white',
       'description': ':hover { background-color: #fff; }'
     },
     {
       'name': 'sm:hover:bg-red-darkest',
       'description': ':hover { background-color: #3b0d0c; }'
     },
     {
       'name': 'sm:hover:bg-red-darker',
       'description': ':hover { background-color: #621b18; }'
     },
     {
       'name': 'sm:hover:bg-red-dark',
       'description': ':hover { background-color: #cc1f1a; }'
     },
     {
       'name': 'sm:hover:bg-red',
       'description': ':hover { background-color: #e3342f; }'
     },
     {
       'name': 'sm:hover:bg-red-light',
       'description': ':hover { background-color: #ef5753; }'
     },
     {
       'name': 'sm:hover:bg-red-lighter',
       'description': ':hover { background-color: #f9acaa; }'
     },
     {
       'name': 'sm:hover:bg-red-lightest',
       'description': ':hover { background-color: #fcebea; }'
     },
     {
       'name': 'sm:hover:bg-orange-darkest',
       'description': ':hover { background-color: #462a16; }'
     },
     {
       'name': 'sm:hover:bg-orange-darker',
       'description': ':hover { background-color: #613b1f; }'
     },
     {
       'name': 'sm:hover:bg-orange-dark',
       'description': ':hover { background-color: #de751f; }'
     },
     {
       'name': 'sm:hover:bg-orange',
       'description': ':hover { background-color: #f6993f; }'
     },
     {
       'name': 'sm:hover:bg-orange-light',
       'description': ':hover { background-color: #faad63; }'
     },
     {
       'name': 'sm:hover:bg-orange-lighter',
       'description': ':hover { background-color: #fcd9b6; }'
     },
     {
       'name': 'sm:hover:bg-orange-lightest',
       'description': ':hover { background-color: #fff5eb; }'
     },
     {
       'name': 'sm:hover:bg-yellow-darkest',
       'description': ':hover { background-color: #453411; }'
     },
     {
       'name': 'sm:hover:bg-yellow-darker',
       'description': ':hover { background-color: #684f1d; }'
     },
     {
       'name': 'sm:hover:bg-yellow-dark',
       'description': ':hover { background-color: #f2d024; }'
     },
     {
       'name': 'sm:hover:bg-yellow',
       'description': ':hover { background-color: #ffed4a; }'
     },
     {
       'name': 'sm:hover:bg-yellow-light',
       'description': ':hover { background-color: #fff382; }'
     },
     {
       'name': 'sm:hover:bg-yellow-lighter',
       'description': ':hover { background-color: #fff9c2; }'
     },
     {
       'name': 'sm:hover:bg-yellow-lightest',
       'description': ':hover { background-color: #fcfbeb; }'
     },
     {
       'name': 'sm:hover:bg-green-darkest',
       'description': ':hover { background-color: #0f2f21; }'
     },
     {
       'name': 'sm:hover:bg-green-darker',
       'description': ':hover { background-color: #1a4731; }'
     },
     {
       'name': 'sm:hover:bg-green-dark',
       'description': ':hover { background-color: #1f9d55; }'
     },
     {
       'name': 'sm:hover:bg-green',
       'description': ':hover { background-color: #38c172; }'
     },
     {
       'name': 'sm:hover:bg-green-light',
       'description': ':hover { background-color: #51d88a; }'
     },
     {
       'name': 'sm:hover:bg-green-lighter',
       'description': ':hover { background-color: #a2f5bf; }'
     },
     {
       'name': 'sm:hover:bg-green-lightest',
       'description': ':hover { background-color: #e3fcec; }'
     },
     {
       'name': 'sm:hover:bg-teal-darkest',
       'description': ':hover { background-color: #0d3331; }'
     },
     {
       'name': 'sm:hover:bg-teal-darker',
       'description': ':hover { background-color: #20504f; }'
     },
     {
       'name': 'sm:hover:bg-teal-dark',
       'description': ':hover { background-color: #38a89d; }'
     },
     {
       'name': 'sm:hover:bg-teal',
       'description': ':hover { background-color: #4dc0b5; }'
     },
     {
       'name': 'sm:hover:bg-teal-light',
       'description': ':hover { background-color: #64d5ca; }'
     },
     {
       'name': 'sm:hover:bg-teal-lighter',
       'description': ':hover { background-color: #a0f0ed; }'
     },
     {
       'name': 'sm:hover:bg-teal-lightest',
       'description': ':hover { background-color: #e8fffe; }'
     },
     {
       'name': 'sm:hover:bg-blue-darkest',
       'description': ':hover { background-color: #12283a; }'
     },
     {
       'name': 'sm:hover:bg-blue-darker',
       'description': ':hover { background-color: #1c3d5a; }'
     },
     {
       'name': 'sm:hover:bg-blue-dark',
       'description': ':hover { background-color: #2779bd; }'
     },
     {
       'name': 'sm:hover:bg-blue',
       'description': ':hover { background-color: #3490dc; }'
     },
     {
       'name': 'sm:hover:bg-blue-light',
       'description': ':hover { background-color: #6cb2eb; }'
     },
     {
       'name': 'sm:hover:bg-blue-lighter',
       'description': ':hover { background-color: #bcdefa; }'
     },
     {
       'name': 'sm:hover:bg-blue-lightest',
       'description': ':hover { background-color: #eff8ff; }'
     },
     {
       'name': 'sm:hover:bg-indigo-darkest',
       'description': ':hover { background-color: #191e38; }'
     },
     {
       'name': 'sm:hover:bg-indigo-darker',
       'description': ':hover { background-color: #2f365f; }'
     },
     {
       'name': 'sm:hover:bg-indigo-dark',
       'description': ':hover { background-color: #5661b3; }'
     },
     {
       'name': 'sm:hover:bg-indigo',
       'description': ':hover { background-color: #6574cd; }'
     },
     {
       'name': 'sm:hover:bg-indigo-light',
       'description': ':hover { background-color: #7886d7; }'
     },
     {
       'name': 'sm:hover:bg-indigo-lighter',
       'description': ':hover { background-color: #b2b7ff; }'
     },
     {
       'name': 'sm:hover:bg-indigo-lightest',
       'description': ':hover { background-color: #e6e8ff; }'
     },
     {
       'name': 'sm:hover:bg-purple-darkest',
       'description': ':hover { background-color: #21183c; }'
     },
     {
       'name': 'sm:hover:bg-purple-darker',
       'description': ':hover { background-color: #382b5f; }'
     },
     {
       'name': 'sm:hover:bg-purple-dark',
       'description': ':hover { background-color: #794acf; }'
     },
     {
       'name': 'sm:hover:bg-purple',
       'description': ':hover { background-color: #9561e2; }'
     },
     {
       'name': 'sm:hover:bg-purple-light',
       'description': ':hover { background-color: #a779e9; }'
     },
     {
       'name': 'sm:hover:bg-purple-lighter',
       'description': ':hover { background-color: #d6bbfc; }'
     },
     {
       'name': 'sm:hover:bg-purple-lightest',
       'description': ':hover { background-color: #f3ebff; }'
     },
     {
       'name': 'sm:hover:bg-pink-darkest',
       'description': ':hover { background-color: #451225; }'
     },
     {
       'name': 'sm:hover:bg-pink-darker',
       'description': ':hover { background-color: #6f213f; }'
     },
     {
       'name': 'sm:hover:bg-pink-dark',
       'description': ':hover { background-color: #eb5286; }'
     },
     {
       'name': 'sm:hover:bg-pink',
       'description': ':hover { background-color: #f66d9b; }'
     },
     {
       'name': 'sm:hover:bg-pink-light',
       'description': ':hover { background-color: #fa7ea8; }'
     },
     {
       'name': 'sm:hover:bg-pink-lighter',
       'description': ':hover { background-color: #ffbbca; }'
     },
     {
       'name': 'sm:hover:bg-pink-lightest',
       'description': ':hover { background-color: #ffebef; }'
     },
     {
       'name': 'sm:focus:bg-transparent',
       'description': ':focus { background-color: transparent; }'
     },
     {
       'name': 'sm:focus:bg-black',
       'description': ':focus { background-color: #22292f; }'
     },
     {
       'name': 'sm:focus:bg-grey-darkest',
       'description': ':focus { background-color: #3d4852; }'
     },
     {
       'name': 'sm:focus:bg-grey-darker',
       'description': ':focus { background-color: #606f7b; }'
     },
     {
       'name': 'sm:focus:bg-grey-dark',
       'description': ':focus { background-color: #8795a1; }'
     },
     {
       'name': 'sm:focus:bg-grey',
       'description': ':focus { background-color: #b8c2cc; }'
     },
     {
       'name': 'sm:focus:bg-grey-light',
       'description': ':focus { background-color: #dae1e7; }'
     },
     {
       'name': 'sm:focus:bg-grey-lighter',
       'description': ':focus { background-color: #f1f5f8; }'
     },
     {
       'name': 'sm:focus:bg-grey-lightest',
       'description': ':focus { background-color: #f8fafc; }'
     },
     {
       'name': 'sm:focus:bg-white',
       'description': ':focus { background-color: #fff; }'
     },
     {
       'name': 'sm:focus:bg-red-darkest',
       'description': ':focus { background-color: #3b0d0c; }'
     },
     {
       'name': 'sm:focus:bg-red-darker',
       'description': ':focus { background-color: #621b18; }'
     },
     {
       'name': 'sm:focus:bg-red-dark',
       'description': ':focus { background-color: #cc1f1a; }'
     },
     {
       'name': 'sm:focus:bg-red',
       'description': ':focus { background-color: #e3342f; }'
     },
     {
       'name': 'sm:focus:bg-red-light',
       'description': ':focus { background-color: #ef5753; }'
     },
     {
       'name': 'sm:focus:bg-red-lighter',
       'description': ':focus { background-color: #f9acaa; }'
     },
     {
       'name': 'sm:focus:bg-red-lightest',
       'description': ':focus { background-color: #fcebea; }'
     },
     {
       'name': 'sm:focus:bg-orange-darkest',
       'description': ':focus { background-color: #462a16; }'
     },
     {
       'name': 'sm:focus:bg-orange-darker',
       'description': ':focus { background-color: #613b1f; }'
     },
     {
       'name': 'sm:focus:bg-orange-dark',
       'description': ':focus { background-color: #de751f; }'
     },
     {
       'name': 'sm:focus:bg-orange',
       'description': ':focus { background-color: #f6993f; }'
     },
     {
       'name': 'sm:focus:bg-orange-light',
       'description': ':focus { background-color: #faad63; }'
     },
     {
       'name': 'sm:focus:bg-orange-lighter',
       'description': ':focus { background-color: #fcd9b6; }'
     },
     {
       'name': 'sm:focus:bg-orange-lightest',
       'description': ':focus { background-color: #fff5eb; }'
     },
     {
       'name': 'sm:focus:bg-yellow-darkest',
       'description': ':focus { background-color: #453411; }'
     },
     {
       'name': 'sm:focus:bg-yellow-darker',
       'description': ':focus { background-color: #684f1d; }'
     },
     {
       'name': 'sm:focus:bg-yellow-dark',
       'description': ':focus { background-color: #f2d024; }'
     },
     {
       'name': 'sm:focus:bg-yellow',
       'description': ':focus { background-color: #ffed4a; }'
     },
     {
       'name': 'sm:focus:bg-yellow-light',
       'description': ':focus { background-color: #fff382; }'
     },
     {
       'name': 'sm:focus:bg-yellow-lighter',
       'description': ':focus { background-color: #fff9c2; }'
     },
     {
       'name': 'sm:focus:bg-yellow-lightest',
       'description': ':focus { background-color: #fcfbeb; }'
     },
     {
       'name': 'sm:focus:bg-green-darkest',
       'description': ':focus { background-color: #0f2f21; }'
     },
     {
       'name': 'sm:focus:bg-green-darker',
       'description': ':focus { background-color: #1a4731; }'
     },
     {
       'name': 'sm:focus:bg-green-dark',
       'description': ':focus { background-color: #1f9d55; }'
     },
     {
       'name': 'sm:focus:bg-green',
       'description': ':focus { background-color: #38c172; }'
     },
     {
       'name': 'sm:focus:bg-green-light',
       'description': ':focus { background-color: #51d88a; }'
     },
     {
       'name': 'sm:focus:bg-green-lighter',
       'description': ':focus { background-color: #a2f5bf; }'
     },
     {
       'name': 'sm:focus:bg-green-lightest',
       'description': ':focus { background-color: #e3fcec; }'
     },
     {
       'name': 'sm:focus:bg-teal-darkest',
       'description': ':focus { background-color: #0d3331; }'
     },
     {
       'name': 'sm:focus:bg-teal-darker',
       'description': ':focus { background-color: #20504f; }'
     },
     {
       'name': 'sm:focus:bg-teal-dark',
       'description': ':focus { background-color: #38a89d; }'
     },
     {
       'name': 'sm:focus:bg-teal',
       'description': ':focus { background-color: #4dc0b5; }'
     },
     {
       'name': 'sm:focus:bg-teal-light',
       'description': ':focus { background-color: #64d5ca; }'
     },
     {
       'name': 'sm:focus:bg-teal-lighter',
       'description': ':focus { background-color: #a0f0ed; }'
     },
     {
       'name': 'sm:focus:bg-teal-lightest',
       'description': ':focus { background-color: #e8fffe; }'
     },
     {
       'name': 'sm:focus:bg-blue-darkest',
       'description': ':focus { background-color: #12283a; }'
     },
     {
       'name': 'sm:focus:bg-blue-darker',
       'description': ':focus { background-color: #1c3d5a; }'
     },
     {
       'name': 'sm:focus:bg-blue-dark',
       'description': ':focus { background-color: #2779bd; }'
     },
     {
       'name': 'sm:focus:bg-blue',
       'description': ':focus { background-color: #3490dc; }'
     },
     {
       'name': 'sm:focus:bg-blue-light',
       'description': ':focus { background-color: #6cb2eb; }'
     },
     {
       'name': 'sm:focus:bg-blue-lighter',
       'description': ':focus { background-color: #bcdefa; }'
     },
     {
       'name': 'sm:focus:bg-blue-lightest',
       'description': ':focus { background-color: #eff8ff; }'
     },
     {
       'name': 'sm:focus:bg-indigo-darkest',
       'description': ':focus { background-color: #191e38; }'
     },
     {
       'name': 'sm:focus:bg-indigo-darker',
       'description': ':focus { background-color: #2f365f; }'
     },
     {
       'name': 'sm:focus:bg-indigo-dark',
       'description': ':focus { background-color: #5661b3; }'
     },
     {
       'name': 'sm:focus:bg-indigo',
       'description': ':focus { background-color: #6574cd; }'
     },
     {
       'name': 'sm:focus:bg-indigo-light',
       'description': ':focus { background-color: #7886d7; }'
     },
     {
       'name': 'sm:focus:bg-indigo-lighter',
       'description': ':focus { background-color: #b2b7ff; }'
     },
     {
       'name': 'sm:focus:bg-indigo-lightest',
       'description': ':focus { background-color: #e6e8ff; }'
     },
     {
       'name': 'sm:focus:bg-purple-darkest',
       'description': ':focus { background-color: #21183c; }'
     },
     {
       'name': 'sm:focus:bg-purple-darker',
       'description': ':focus { background-color: #382b5f; }'
     },
     {
       'name': 'sm:focus:bg-purple-dark',
       'description': ':focus { background-color: #794acf; }'
     },
     {
       'name': 'sm:focus:bg-purple',
       'description': ':focus { background-color: #9561e2; }'
     },
     {
       'name': 'sm:focus:bg-purple-light',
       'description': ':focus { background-color: #a779e9; }'
     },
     {
       'name': 'sm:focus:bg-purple-lighter',
       'description': ':focus { background-color: #d6bbfc; }'
     },
     {
       'name': 'sm:focus:bg-purple-lightest',
       'description': ':focus { background-color: #f3ebff; }'
     },
     {
       'name': 'sm:focus:bg-pink-darkest',
       'description': ':focus { background-color: #451225; }'
     },
     {
       'name': 'sm:focus:bg-pink-darker',
       'description': ':focus { background-color: #6f213f; }'
     },
     {
       'name': 'sm:focus:bg-pink-dark',
       'description': ':focus { background-color: #eb5286; }'
     },
     {
       'name': 'sm:focus:bg-pink',
       'description': ':focus { background-color: #f66d9b; }'
     },
     {
       'name': 'sm:focus:bg-pink-light',
       'description': ':focus { background-color: #fa7ea8; }'
     },
     {
       'name': 'sm:focus:bg-pink-lighter',
       'description': ':focus { background-color: #ffbbca; }'
     },
     {
       'name': 'sm:focus:bg-pink-lightest',
       'description': ':focus { background-color: #ffebef; }'
     },
     {
       'name': 'sm:bg-bottom',
       'description': 'background-position: bottom;'
     },
     {
       'name': 'sm:bg-center',
       'description': 'background-position: center;'
     },
     {
       'name': 'sm:bg-left',
       'description': 'background-position: left;'
     },
     {
       'name': 'sm:bg-left-bottom',
       'description': 'background-position: left bottom;'
     },
     {
       'name': 'sm:bg-left-top',
       'description': 'background-position: left top;'
     },
     {
       'name': 'sm:bg-right',
       'description': 'background-position: right;'
     },
     {
       'name': 'sm:bg-right-bottom',
       'description': 'background-position: right bottom;'
     },
     {
       'name': 'sm:bg-right-top',
       'description': 'background-position: right top;'
     },
     {
       'name': 'sm:bg-top',
       'description': 'background-position: top;'
     },
     {
       'name': 'sm:bg-repeat',
       'description': 'background-repeat: repeat;'
     },
     {
       'name': 'sm:bg-no-repeat',
       'description': 'background-repeat: no-repeat;'
     },
     {
       'name': 'sm:bg-repeat-x',
       'description': 'background-repeat: repeat-x;'
     },
     {
       'name': 'sm:bg-repeat-y',
       'description': 'background-repeat: repeat-y;'
     },
     {
       'name': 'sm:bg-auto',
       'description': 'background-size: auto;'
     },
     {
       'name': 'sm:bg-cover',
       'description': 'background-size: cover;'
     },
     {
       'name': 'sm:bg-contain',
       'description': 'background-size: contain;'
     },
     {
       'name': 'sm:border-transparent',
       'description': 'border-color: transparent;'
     },
     {
       'name': 'sm:border-black',
       'description': 'border-color: #22292f;'
     },
     {
       'name': 'sm:border-grey-darkest',
       'description': 'border-color: #3d4852;'
     },
     {
       'name': 'sm:border-grey-darker',
       'description': 'border-color: #606f7b;'
     },
     {
       'name': 'sm:border-grey-dark',
       'description': 'border-color: #8795a1;'
     },
     {
       'name': 'sm:border-grey',
       'description': 'border-color: #b8c2cc;'
     },
     {
       'name': 'sm:border-grey-light',
       'description': 'border-color: #dae1e7;'
     },
     {
       'name': 'sm:border-grey-lighter',
       'description': 'border-color: #f1f5f8;'
     },
     {
       'name': 'sm:border-grey-lightest',
       'description': 'border-color: #f8fafc;'
     },
     {
       'name': 'sm:border-white',
       'description': 'border-color: #fff;'
     },
     {
       'name': 'sm:border-red-darkest',
       'description': 'border-color: #3b0d0c;'
     },
     {
       'name': 'sm:border-red-darker',
       'description': 'border-color: #621b18;'
     },
     {
       'name': 'sm:border-red-dark',
       'description': 'border-color: #cc1f1a;'
     },
     {
       'name': 'sm:border-red',
       'description': 'border-color: #e3342f;'
     },
     {
       'name': 'sm:border-red-light',
       'description': 'border-color: #ef5753;'
     },
     {
       'name': 'sm:border-red-lighter',
       'description': 'border-color: #f9acaa;'
     },
     {
       'name': 'sm:border-red-lightest',
       'description': 'border-color: #fcebea;'
     },
     {
       'name': 'sm:border-orange-darkest',
       'description': 'border-color: #462a16;'
     },
     {
       'name': 'sm:border-orange-darker',
       'description': 'border-color: #613b1f;'
     },
     {
       'name': 'sm:border-orange-dark',
       'description': 'border-color: #de751f;'
     },
     {
       'name': 'sm:border-orange',
       'description': 'border-color: #f6993f;'
     },
     {
       'name': 'sm:border-orange-light',
       'description': 'border-color: #faad63;'
     },
     {
       'name': 'sm:border-orange-lighter',
       'description': 'border-color: #fcd9b6;'
     },
     {
       'name': 'sm:border-orange-lightest',
       'description': 'border-color: #fff5eb;'
     },
     {
       'name': 'sm:border-yellow-darkest',
       'description': 'border-color: #453411;'
     },
     {
       'name': 'sm:border-yellow-darker',
       'description': 'border-color: #684f1d;'
     },
     {
       'name': 'sm:border-yellow-dark',
       'description': 'border-color: #f2d024;'
     },
     {
       'name': 'sm:border-yellow',
       'description': 'border-color: #ffed4a;'
     },
     {
       'name': 'sm:border-yellow-light',
       'description': 'border-color: #fff382;'
     },
     {
       'name': 'sm:border-yellow-lighter',
       'description': 'border-color: #fff9c2;'
     },
     {
       'name': 'sm:border-yellow-lightest',
       'description': 'border-color: #fcfbeb;'
     },
     {
       'name': 'sm:border-green-darkest',
       'description': 'border-color: #0f2f21;'
     },
     {
       'name': 'sm:border-green-darker',
       'description': 'border-color: #1a4731;'
     },
     {
       'name': 'sm:border-green-dark',
       'description': 'border-color: #1f9d55;'
     },
     {
       'name': 'sm:border-green',
       'description': 'border-color: #38c172;'
     },
     {
       'name': 'sm:border-green-light',
       'description': 'border-color: #51d88a;'
     },
     {
       'name': 'sm:border-green-lighter',
       'description': 'border-color: #a2f5bf;'
     },
     {
       'name': 'sm:border-green-lightest',
       'description': 'border-color: #e3fcec;'
     },
     {
       'name': 'sm:border-teal-darkest',
       'description': 'border-color: #0d3331;'
     },
     {
       'name': 'sm:border-teal-darker',
       'description': 'border-color: #20504f;'
     },
     {
       'name': 'sm:border-teal-dark',
       'description': 'border-color: #38a89d;'
     },
     {
       'name': 'sm:border-teal',
       'description': 'border-color: #4dc0b5;'
     },
     {
       'name': 'sm:border-teal-light',
       'description': 'border-color: #64d5ca;'
     },
     {
       'name': 'sm:border-teal-lighter',
       'description': 'border-color: #a0f0ed;'
     },
     {
       'name': 'sm:border-teal-lightest',
       'description': 'border-color: #e8fffe;'
     },
     {
       'name': 'sm:border-blue-darkest',
       'description': 'border-color: #12283a;'
     },
     {
       'name': 'sm:border-blue-darker',
       'description': 'border-color: #1c3d5a;'
     },
     {
       'name': 'sm:border-blue-dark',
       'description': 'border-color: #2779bd;'
     },
     {
       'name': 'sm:border-blue',
       'description': 'border-color: #3490dc;'
     },
     {
       'name': 'sm:border-blue-light',
       'description': 'border-color: #6cb2eb;'
     },
     {
       'name': 'sm:border-blue-lighter',
       'description': 'border-color: #bcdefa;'
     },
     {
       'name': 'sm:border-blue-lightest',
       'description': 'border-color: #eff8ff;'
     },
     {
       'name': 'sm:border-indigo-darkest',
       'description': 'border-color: #191e38;'
     },
     {
       'name': 'sm:border-indigo-darker',
       'description': 'border-color: #2f365f;'
     },
     {
       'name': 'sm:border-indigo-dark',
       'description': 'border-color: #5661b3;'
     },
     {
       'name': 'sm:border-indigo',
       'description': 'border-color: #6574cd;'
     },
     {
       'name': 'sm:border-indigo-light',
       'description': 'border-color: #7886d7;'
     },
     {
       'name': 'sm:border-indigo-lighter',
       'description': 'border-color: #b2b7ff;'
     },
     {
       'name': 'sm:border-indigo-lightest',
       'description': 'border-color: #e6e8ff;'
     },
     {
       'name': 'sm:border-purple-darkest',
       'description': 'border-color: #21183c;'
     },
     {
       'name': 'sm:border-purple-darker',
       'description': 'border-color: #382b5f;'
     },
     {
       'name': 'sm:border-purple-dark',
       'description': 'border-color: #794acf;'
     },
     {
       'name': 'sm:border-purple',
       'description': 'border-color: #9561e2;'
     },
     {
       'name': 'sm:border-purple-light',
       'description': 'border-color: #a779e9;'
     },
     {
       'name': 'sm:border-purple-lighter',
       'description': 'border-color: #d6bbfc;'
     },
     {
       'name': 'sm:border-purple-lightest',
       'description': 'border-color: #f3ebff;'
     },
     {
       'name': 'sm:border-pink-darkest',
       'description': 'border-color: #451225;'
     },
     {
       'name': 'sm:border-pink-darker',
       'description': 'border-color: #6f213f;'
     },
     {
       'name': 'sm:border-pink-dark',
       'description': 'border-color: #eb5286;'
     },
     {
       'name': 'sm:border-pink',
       'description': 'border-color: #f66d9b;'
     },
     {
       'name': 'sm:border-pink-light',
       'description': 'border-color: #fa7ea8;'
     },
     {
       'name': 'sm:border-pink-lighter',
       'description': 'border-color: #ffbbca;'
     },
     {
       'name': 'sm:border-pink-lightest',
       'description': 'border-color: #ffebef;'
     },
     {
       'name': 'sm:hover:border-transparent',
       'description': ':hover { border-color: transparent; }'
     },
     {
       'name': 'sm:hover:border-black',
       'description': ':hover { border-color: #22292f; }'
     },
     {
       'name': 'sm:hover:border-grey-darkest',
       'description': ':hover { border-color: #3d4852; }'
     },
     {
       'name': 'sm:hover:border-grey-darker',
       'description': ':hover { border-color: #606f7b; }'
     },
     {
       'name': 'sm:hover:border-grey-dark',
       'description': ':hover { border-color: #8795a1; }'
     },
     {
       'name': 'sm:hover:border-grey',
       'description': ':hover { border-color: #b8c2cc; }'
     },
     {
       'name': 'sm:hover:border-grey-light',
       'description': ':hover { border-color: #dae1e7; }'
     },
     {
       'name': 'sm:hover:border-grey-lighter',
       'description': ':hover { border-color: #f1f5f8; }'
     },
     {
       'name': 'sm:hover:border-grey-lightest',
       'description': ':hover { border-color: #f8fafc; }'
     },
     {
       'name': 'sm:hover:border-white',
       'description': ':hover { border-color: #fff; }'
     },
     {
       'name': 'sm:hover:border-red-darkest',
       'description': ':hover { border-color: #3b0d0c; }'
     },
     {
       'name': 'sm:hover:border-red-darker',
       'description': ':hover { border-color: #621b18; }'
     },
     {
       'name': 'sm:hover:border-red-dark',
       'description': ':hover { border-color: #cc1f1a; }'
     },
     {
       'name': 'sm:hover:border-red',
       'description': ':hover { border-color: #e3342f; }'
     },
     {
       'name': 'sm:hover:border-red-light',
       'description': ':hover { border-color: #ef5753; }'
     },
     {
       'name': 'sm:hover:border-red-lighter',
       'description': ':hover { border-color: #f9acaa; }'
     },
     {
       'name': 'sm:hover:border-red-lightest',
       'description': ':hover { border-color: #fcebea; }'
     },
     {
       'name': 'sm:hover:border-orange-darkest',
       'description': ':hover { border-color: #462a16; }'
     },
     {
       'name': 'sm:hover:border-orange-darker',
       'description': ':hover { border-color: #613b1f; }'
     },
     {
       'name': 'sm:hover:border-orange-dark',
       'description': ':hover { border-color: #de751f; }'
     },
     {
       'name': 'sm:hover:border-orange',
       'description': ':hover { border-color: #f6993f; }'
     },
     {
       'name': 'sm:hover:border-orange-light',
       'description': ':hover { border-color: #faad63; }'
     },
     {
       'name': 'sm:hover:border-orange-lighter',
       'description': ':hover { border-color: #fcd9b6; }'
     },
     {
       'name': 'sm:hover:border-orange-lightest',
       'description': ':hover { border-color: #fff5eb; }'
     },
     {
       'name': 'sm:hover:border-yellow-darkest',
       'description': ':hover { border-color: #453411; }'
     },
     {
       'name': 'sm:hover:border-yellow-darker',
       'description': ':hover { border-color: #684f1d; }'
     },
     {
       'name': 'sm:hover:border-yellow-dark',
       'description': ':hover { border-color: #f2d024; }'
     },
     {
       'name': 'sm:hover:border-yellow',
       'description': ':hover { border-color: #ffed4a; }'
     },
     {
       'name': 'sm:hover:border-yellow-light',
       'description': ':hover { border-color: #fff382; }'
     },
     {
       'name': 'sm:hover:border-yellow-lighter',
       'description': ':hover { border-color: #fff9c2; }'
     },
     {
       'name': 'sm:hover:border-yellow-lightest',
       'description': ':hover { border-color: #fcfbeb; }'
     },
     {
       'name': 'sm:hover:border-green-darkest',
       'description': ':hover { border-color: #0f2f21; }'
     },
     {
       'name': 'sm:hover:border-green-darker',
       'description': ':hover { border-color: #1a4731; }'
     },
     {
       'name': 'sm:hover:border-green-dark',
       'description': ':hover { border-color: #1f9d55; }'
     },
     {
       'name': 'sm:hover:border-green',
       'description': ':hover { border-color: #38c172; }'
     },
     {
       'name': 'sm:hover:border-green-light',
       'description': ':hover { border-color: #51d88a; }'
     },
     {
       'name': 'sm:hover:border-green-lighter',
       'description': ':hover { border-color: #a2f5bf; }'
     },
     {
       'name': 'sm:hover:border-green-lightest',
       'description': ':hover { border-color: #e3fcec; }'
     },
     {
       'name': 'sm:hover:border-teal-darkest',
       'description': ':hover { border-color: #0d3331; }'
     },
     {
       'name': 'sm:hover:border-teal-darker',
       'description': ':hover { border-color: #20504f; }'
     },
     {
       'name': 'sm:hover:border-teal-dark',
       'description': ':hover { border-color: #38a89d; }'
     },
     {
       'name': 'sm:hover:border-teal',
       'description': ':hover { border-color: #4dc0b5; }'
     },
     {
       'name': 'sm:hover:border-teal-light',
       'description': ':hover { border-color: #64d5ca; }'
     },
     {
       'name': 'sm:hover:border-teal-lighter',
       'description': ':hover { border-color: #a0f0ed; }'
     },
     {
       'name': 'sm:hover:border-teal-lightest',
       'description': ':hover { border-color: #e8fffe; }'
     },
     {
       'name': 'sm:hover:border-blue-darkest',
       'description': ':hover { border-color: #12283a; }'
     },
     {
       'name': 'sm:hover:border-blue-darker',
       'description': ':hover { border-color: #1c3d5a; }'
     },
     {
       'name': 'sm:hover:border-blue-dark',
       'description': ':hover { border-color: #2779bd; }'
     },
     {
       'name': 'sm:hover:border-blue',
       'description': ':hover { border-color: #3490dc; }'
     },
     {
       'name': 'sm:hover:border-blue-light',
       'description': ':hover { border-color: #6cb2eb; }'
     },
     {
       'name': 'sm:hover:border-blue-lighter',
       'description': ':hover { border-color: #bcdefa; }'
     },
     {
       'name': 'sm:hover:border-blue-lightest',
       'description': ':hover { border-color: #eff8ff; }'
     },
     {
       'name': 'sm:hover:border-indigo-darkest',
       'description': ':hover { border-color: #191e38; }'
     },
     {
       'name': 'sm:hover:border-indigo-darker',
       'description': ':hover { border-color: #2f365f; }'
     },
     {
       'name': 'sm:hover:border-indigo-dark',
       'description': ':hover { border-color: #5661b3; }'
     },
     {
       'name': 'sm:hover:border-indigo',
       'description': ':hover { border-color: #6574cd; }'
     },
     {
       'name': 'sm:hover:border-indigo-light',
       'description': ':hover { border-color: #7886d7; }'
     },
     {
       'name': 'sm:hover:border-indigo-lighter',
       'description': ':hover { border-color: #b2b7ff; }'
     },
     {
       'name': 'sm:hover:border-indigo-lightest',
       'description': ':hover { border-color: #e6e8ff; }'
     },
     {
       'name': 'sm:hover:border-purple-darkest',
       'description': ':hover { border-color: #21183c; }'
     },
     {
       'name': 'sm:hover:border-purple-darker',
       'description': ':hover { border-color: #382b5f; }'
     },
     {
       'name': 'sm:hover:border-purple-dark',
       'description': ':hover { border-color: #794acf; }'
     },
     {
       'name': 'sm:hover:border-purple',
       'description': ':hover { border-color: #9561e2; }'
     },
     {
       'name': 'sm:hover:border-purple-light',
       'description': ':hover { border-color: #a779e9; }'
     },
     {
       'name': 'sm:hover:border-purple-lighter',
       'description': ':hover { border-color: #d6bbfc; }'
     },
     {
       'name': 'sm:hover:border-purple-lightest',
       'description': ':hover { border-color: #f3ebff; }'
     },
     {
       'name': 'sm:hover:border-pink-darkest',
       'description': ':hover { border-color: #451225; }'
     },
     {
       'name': 'sm:hover:border-pink-darker',
       'description': ':hover { border-color: #6f213f; }'
     },
     {
       'name': 'sm:hover:border-pink-dark',
       'description': ':hover { border-color: #eb5286; }'
     },
     {
       'name': 'sm:hover:border-pink',
       'description': ':hover { border-color: #f66d9b; }'
     },
     {
       'name': 'sm:hover:border-pink-light',
       'description': ':hover { border-color: #fa7ea8; }'
     },
     {
       'name': 'sm:hover:border-pink-lighter',
       'description': ':hover { border-color: #ffbbca; }'
     },
     {
       'name': 'sm:hover:border-pink-lightest',
       'description': ':hover { border-color: #ffebef; }'
     },
     {
       'name': 'sm:focus:border-transparent',
       'description': ':focus { border-color: transparent; }'
     },
     {
       'name': 'sm:focus:border-black',
       'description': ':focus { border-color: #22292f; }'
     },
     {
       'name': 'sm:focus:border-grey-darkest',
       'description': ':focus { border-color: #3d4852; }'
     },
     {
       'name': 'sm:focus:border-grey-darker',
       'description': ':focus { border-color: #606f7b; }'
     },
     {
       'name': 'sm:focus:border-grey-dark',
       'description': ':focus { border-color: #8795a1; }'
     },
     {
       'name': 'sm:focus:border-grey',
       'description': ':focus { border-color: #b8c2cc; }'
     },
     {
       'name': 'sm:focus:border-grey-light',
       'description': ':focus { border-color: #dae1e7; }'
     },
     {
       'name': 'sm:focus:border-grey-lighter',
       'description': ':focus { border-color: #f1f5f8; }'
     },
     {
       'name': 'sm:focus:border-grey-lightest',
       'description': ':focus { border-color: #f8fafc; }'
     },
     {
       'name': 'sm:focus:border-white',
       'description': ':focus { border-color: #fff; }'
     },
     {
       'name': 'sm:focus:border-red-darkest',
       'description': ':focus { border-color: #3b0d0c; }'
     },
     {
       'name': 'sm:focus:border-red-darker',
       'description': ':focus { border-color: #621b18; }'
     },
     {
       'name': 'sm:focus:border-red-dark',
       'description': ':focus { border-color: #cc1f1a; }'
     },
     {
       'name': 'sm:focus:border-red',
       'description': ':focus { border-color: #e3342f; }'
     },
     {
       'name': 'sm:focus:border-red-light',
       'description': ':focus { border-color: #ef5753; }'
     },
     {
       'name': 'sm:focus:border-red-lighter',
       'description': ':focus { border-color: #f9acaa; }'
     },
     {
       'name': 'sm:focus:border-red-lightest',
       'description': ':focus { border-color: #fcebea; }'
     },
     {
       'name': 'sm:focus:border-orange-darkest',
       'description': ':focus { border-color: #462a16; }'
     },
     {
       'name': 'sm:focus:border-orange-darker',
       'description': ':focus { border-color: #613b1f; }'
     },
     {
       'name': 'sm:focus:border-orange-dark',
       'description': ':focus { border-color: #de751f; }'
     },
     {
       'name': 'sm:focus:border-orange',
       'description': ':focus { border-color: #f6993f; }'
     },
     {
       'name': 'sm:focus:border-orange-light',
       'description': ':focus { border-color: #faad63; }'
     },
     {
       'name': 'sm:focus:border-orange-lighter',
       'description': ':focus { border-color: #fcd9b6; }'
     },
     {
       'name': 'sm:focus:border-orange-lightest',
       'description': ':focus { border-color: #fff5eb; }'
     },
     {
       'name': 'sm:focus:border-yellow-darkest',
       'description': ':focus { border-color: #453411; }'
     },
     {
       'name': 'sm:focus:border-yellow-darker',
       'description': ':focus { border-color: #684f1d; }'
     },
     {
       'name': 'sm:focus:border-yellow-dark',
       'description': ':focus { border-color: #f2d024; }'
     },
     {
       'name': 'sm:focus:border-yellow',
       'description': ':focus { border-color: #ffed4a; }'
     },
     {
       'name': 'sm:focus:border-yellow-light',
       'description': ':focus { border-color: #fff382; }'
     },
     {
       'name': 'sm:focus:border-yellow-lighter',
       'description': ':focus { border-color: #fff9c2; }'
     },
     {
       'name': 'sm:focus:border-yellow-lightest',
       'description': ':focus { border-color: #fcfbeb; }'
     },
     {
       'name': 'sm:focus:border-green-darkest',
       'description': ':focus { border-color: #0f2f21; }'
     },
     {
       'name': 'sm:focus:border-green-darker',
       'description': ':focus { border-color: #1a4731; }'
     },
     {
       'name': 'sm:focus:border-green-dark',
       'description': ':focus { border-color: #1f9d55; }'
     },
     {
       'name': 'sm:focus:border-green',
       'description': ':focus { border-color: #38c172; }'
     },
     {
       'name': 'sm:focus:border-green-light',
       'description': ':focus { border-color: #51d88a; }'
     },
     {
       'name': 'sm:focus:border-green-lighter',
       'description': ':focus { border-color: #a2f5bf; }'
     },
     {
       'name': 'sm:focus:border-green-lightest',
       'description': ':focus { border-color: #e3fcec; }'
     },
     {
       'name': 'sm:focus:border-teal-darkest',
       'description': ':focus { border-color: #0d3331; }'
     },
     {
       'name': 'sm:focus:border-teal-darker',
       'description': ':focus { border-color: #20504f; }'
     },
     {
       'name': 'sm:focus:border-teal-dark',
       'description': ':focus { border-color: #38a89d; }'
     },
     {
       'name': 'sm:focus:border-teal',
       'description': ':focus { border-color: #4dc0b5; }'
     },
     {
       'name': 'sm:focus:border-teal-light',
       'description': ':focus { border-color: #64d5ca; }'
     },
     {
       'name': 'sm:focus:border-teal-lighter',
       'description': ':focus { border-color: #a0f0ed; }'
     },
     {
       'name': 'sm:focus:border-teal-lightest',
       'description': ':focus { border-color: #e8fffe; }'
     },
     {
       'name': 'sm:focus:border-blue-darkest',
       'description': ':focus { border-color: #12283a; }'
     },
     {
       'name': 'sm:focus:border-blue-darker',
       'description': ':focus { border-color: #1c3d5a; }'
     },
     {
       'name': 'sm:focus:border-blue-dark',
       'description': ':focus { border-color: #2779bd; }'
     },
     {
       'name': 'sm:focus:border-blue',
       'description': ':focus { border-color: #3490dc; }'
     },
     {
       'name': 'sm:focus:border-blue-light',
       'description': ':focus { border-color: #6cb2eb; }'
     },
     {
       'name': 'sm:focus:border-blue-lighter',
       'description': ':focus { border-color: #bcdefa; }'
     },
     {
       'name': 'sm:focus:border-blue-lightest',
       'description': ':focus { border-color: #eff8ff; }'
     },
     {
       'name': 'sm:focus:border-indigo-darkest',
       'description': ':focus { border-color: #191e38; }'
     },
     {
       'name': 'sm:focus:border-indigo-darker',
       'description': ':focus { border-color: #2f365f; }'
     },
     {
       'name': 'sm:focus:border-indigo-dark',
       'description': ':focus { border-color: #5661b3; }'
     },
     {
       'name': 'sm:focus:border-indigo',
       'description': ':focus { border-color: #6574cd; }'
     },
     {
       'name': 'sm:focus:border-indigo-light',
       'description': ':focus { border-color: #7886d7; }'
     },
     {
       'name': 'sm:focus:border-indigo-lighter',
       'description': ':focus { border-color: #b2b7ff; }'
     },
     {
       'name': 'sm:focus:border-indigo-lightest',
       'description': ':focus { border-color: #e6e8ff; }'
     },
     {
       'name': 'sm:focus:border-purple-darkest',
       'description': ':focus { border-color: #21183c; }'
     },
     {
       'name': 'sm:focus:border-purple-darker',
       'description': ':focus { border-color: #382b5f; }'
     },
     {
       'name': 'sm:focus:border-purple-dark',
       'description': ':focus { border-color: #794acf; }'
     },
     {
       'name': 'sm:focus:border-purple',
       'description': ':focus { border-color: #9561e2; }'
     },
     {
       'name': 'sm:focus:border-purple-light',
       'description': ':focus { border-color: #a779e9; }'
     },
     {
       'name': 'sm:focus:border-purple-lighter',
       'description': ':focus { border-color: #d6bbfc; }'
     },
     {
       'name': 'sm:focus:border-purple-lightest',
       'description': ':focus { border-color: #f3ebff; }'
     },
     {
       'name': 'sm:focus:border-pink-darkest',
       'description': ':focus { border-color: #451225; }'
     },
     {
       'name': 'sm:focus:border-pink-darker',
       'description': ':focus { border-color: #6f213f; }'
     },
     {
       'name': 'sm:focus:border-pink-dark',
       'description': ':focus { border-color: #eb5286; }'
     },
     {
       'name': 'sm:focus:border-pink',
       'description': ':focus { border-color: #f66d9b; }'
     },
     {
       'name': 'sm:focus:border-pink-light',
       'description': ':focus { border-color: #fa7ea8; }'
     },
     {
       'name': 'sm:focus:border-pink-lighter',
       'description': ':focus { border-color: #ffbbca; }'
     },
     {
       'name': 'sm:focus:border-pink-lightest',
       'description': ':focus { border-color: #ffebef; }'
     },
     {
       'name': 'sm:rounded-none',
       'description': 'border-radius: 0;'
     },
     {
       'name': 'sm:rounded-sm',
       'description': 'border-radius: .125rem;'
     },
     {
       'name': 'sm:rounded',
       'description': 'border-radius: .25rem;'
     },
     {
       'name': 'sm:rounded-lg',
       'description': 'border-radius: .5rem;'
     },
     {
       'name': 'sm:rounded-full',
       'description': 'border-radius: 9999px;'
     },
     {
       'name': 'sm:rounded-t-none',
       'description': 'border-top-left-radius: 0; border-top-right-radius: 0;'
     },
     {
       'name': 'sm:rounded-r-none',
       'description': 'border-top-right-radius: 0; border-bottom-right-radius: 0;'
     },
     {
       'name': 'sm:rounded-b-none',
       'description': 'border-bottom-right-radius: 0; border-bottom-left-radius: 0;'
     },
     {
       'name': 'sm:rounded-l-none',
       'description': 'border-top-left-radius: 0; border-bottom-left-radius: 0;'
     },
     {
       'name': 'sm:rounded-t-sm',
       'description': 'border-top-left-radius: .125rem; border-top-right-radius: .125rem;'
     },
     {
       'name': 'sm:rounded-r-sm',
       'description': 'border-top-right-radius: .125rem; border-bottom-right-radius: .125rem;'
     },
     {
       'name': 'sm:rounded-b-sm',
       'description': 'border-bottom-right-radius: .125rem; border-bottom-left-radius: .125rem;'
     },
     {
       'name': 'sm:rounded-l-sm',
       'description': 'border-top-left-radius: .125rem; border-bottom-left-radius: .125rem;'
     },
     {
       'name': 'sm:rounded-t',
       'description': 'border-top-left-radius: .25rem; border-top-right-radius: .25rem;'
     },
     {
       'name': 'sm:rounded-r',
       'description': 'border-top-right-radius: .25rem; border-bottom-right-radius: .25rem;'
     },
     {
       'name': 'sm:rounded-b',
       'description': 'border-bottom-right-radius: .25rem; border-bottom-left-radius: .25rem;'
     },
     {
       'name': 'sm:rounded-l',
       'description': 'border-top-left-radius: .25rem; border-bottom-left-radius: .25rem;'
     },
     {
       'name': 'sm:rounded-t-lg',
       'description': 'border-top-left-radius: .5rem; border-top-right-radius: .5rem;'
     },
     {
       'name': 'sm:rounded-r-lg',
       'description': 'border-top-right-radius: .5rem; border-bottom-right-radius: .5rem;'
     },
     {
       'name': 'sm:rounded-b-lg',
       'description': 'border-bottom-right-radius: .5rem; border-bottom-left-radius: .5rem;'
     },
     {
       'name': 'sm:rounded-l-lg',
       'description': 'border-top-left-radius: .5rem; border-bottom-left-radius: .5rem;'
     },
     {
       'name': 'sm:rounded-t-full',
       'description': 'border-top-left-radius: 9999px; border-top-right-radius: 9999px;'
     },
     {
       'name': 'sm:rounded-r-full',
       'description': 'border-top-right-radius: 9999px; border-bottom-right-radius: 9999px;'
     },
     {
       'name': 'sm:rounded-b-full',
       'description': 'border-bottom-right-radius: 9999px; border-bottom-left-radius: 9999px;'
     },
     {
       'name': 'sm:rounded-l-full',
       'description': 'border-top-left-radius: 9999px; border-bottom-left-radius: 9999px;'
     },
     {
       'name': 'sm:rounded-tl-none',
       'description': 'border-top-left-radius: 0;'
     },
     {
       'name': 'sm:rounded-tr-none',
       'description': 'border-top-right-radius: 0;'
     },
     {
       'name': 'sm:rounded-br-none',
       'description': 'border-bottom-right-radius: 0;'
     },
     {
       'name': 'sm:rounded-bl-none',
       'description': 'border-bottom-left-radius: 0;'
     },
     {
       'name': 'sm:rounded-tl-sm',
       'description': 'border-top-left-radius: .125rem;'
     },
     {
       'name': 'sm:rounded-tr-sm',
       'description': 'border-top-right-radius: .125rem;'
     },
     {
       'name': 'sm:rounded-br-sm',
       'description': 'border-bottom-right-radius: .125rem;'
     },
     {
       'name': 'sm:rounded-bl-sm',
       'description': 'border-bottom-left-radius: .125rem;'
     },
     {
       'name': 'sm:rounded-tl',
       'description': 'border-top-left-radius: .25rem;'
     },
     {
       'name': 'sm:rounded-tr',
       'description': 'border-top-right-radius: .25rem;'
     },
     {
       'name': 'sm:rounded-br',
       'description': 'border-bottom-right-radius: .25rem;'
     },
     {
       'name': 'sm:rounded-bl',
       'description': 'border-bottom-left-radius: .25rem;'
     },
     {
       'name': 'sm:rounded-tl-lg',
       'description': 'border-top-left-radius: .5rem;'
     },
     {
       'name': 'sm:rounded-tr-lg',
       'description': 'border-top-right-radius: .5rem;'
     },
     {
       'name': 'sm:rounded-br-lg',
       'description': 'border-bottom-right-radius: .5rem;'
     },
     {
       'name': 'sm:rounded-bl-lg',
       'description': 'border-bottom-left-radius: .5rem;'
     },
     {
       'name': 'sm:rounded-tl-full',
       'description': 'border-top-left-radius: 9999px;'
     },
     {
       'name': 'sm:rounded-tr-full',
       'description': 'border-top-right-radius: 9999px;'
     },
     {
       'name': 'sm:rounded-br-full',
       'description': 'border-bottom-right-radius: 9999px;'
     },
     {
       'name': 'sm:rounded-bl-full',
       'description': 'border-bottom-left-radius: 9999px;'
     },
     {
       'name': 'sm:border-solid',
       'description': 'border-style: solid;'
     },
     {
       'name': 'sm:border-dashed',
       'description': 'border-style: dashed;'
     },
     {
       'name': 'sm:border-dotted',
       'description': 'border-style: dotted;'
     },
     {
       'name': 'sm:border-none',
       'description': 'border-style: none;'
     },
     {
       'name': 'sm:border-0',
       'description': 'border-width: 0;'
     },
     {
       'name': 'sm:border-2',
       'description': 'border-width: 2px;'
     },
     {
       'name': 'sm:border-4',
       'description': 'border-width: 4px;'
     },
     {
       'name': 'sm:border-8',
       'description': 'border-width: 8px;'
     },
     {
       'name': 'sm:border',
       'description': 'border-width: 1px;'
     },
     {
       'name': 'sm:border-t-0',
       'description': 'border-top-width: 0;'
     },
     {
       'name': 'sm:border-r-0',
       'description': 'border-right-width: 0;'
     },
     {
       'name': 'sm:border-b-0',
       'description': 'border-bottom-width: 0;'
     },
     {
       'name': 'sm:border-l-0',
       'description': 'border-left-width: 0;'
     },
     {
       'name': 'sm:border-t-2',
       'description': 'border-top-width: 2px;'
     },
     {
       'name': 'sm:border-r-2',
       'description': 'border-right-width: 2px;'
     },
     {
       'name': 'sm:border-b-2',
       'description': 'border-bottom-width: 2px;'
     },
     {
       'name': 'sm:border-l-2',
       'description': 'border-left-width: 2px;'
     },
     {
       'name': 'sm:border-t-4',
       'description': 'border-top-width: 4px;'
     },
     {
       'name': 'sm:border-r-4',
       'description': 'border-right-width: 4px;'
     },
     {
       'name': 'sm:border-b-4',
       'description': 'border-bottom-width: 4px;'
     },
     {
       'name': 'sm:border-l-4',
       'description': 'border-left-width: 4px;'
     },
     {
       'name': 'sm:border-t-8',
       'description': 'border-top-width: 8px;'
     },
     {
       'name': 'sm:border-r-8',
       'description': 'border-right-width: 8px;'
     },
     {
       'name': 'sm:border-b-8',
       'description': 'border-bottom-width: 8px;'
     },
     {
       'name': 'sm:border-l-8',
       'description': 'border-left-width: 8px;'
     },
     {
       'name': 'sm:border-t',
       'description': 'border-top-width: 1px;'
     },
     {
       'name': 'sm:border-r',
       'description': 'border-right-width: 1px;'
     },
     {
       'name': 'sm:border-b',
       'description': 'border-bottom-width: 1px;'
     },
     {
       'name': 'sm:border-l',
       'description': 'border-left-width: 1px;'
     },
     {
       'name': 'sm:cursor-auto',
       'description': 'cursor: auto;'
     },
     {
       'name': 'sm:cursor-default',
       'description': 'cursor: default;'
     },
     {
       'name': 'sm:cursor-pointer',
       'description': 'cursor: pointer;'
     },
     {
       'name': 'sm:cursor-wait',
       'description': 'cursor: wait;'
     },
     {
       'name': 'sm:cursor-move',
       'description': 'cursor: move;'
     },
     {
       'name': 'sm:cursor-not-allowed',
       'description': 'cursor: not-allowed;'
     },
     {
       'name': 'sm:block',
       'description': 'display: block;'
     },
     {
       'name': 'sm:inline-block',
       'description': 'display: inline-block;'
     },
     {
       'name': 'sm:inline',
       'description': 'display: inline;'
     },
     {
       'name': 'sm:table',
       'description': 'display: table;'
     },
     {
       'name': 'sm:table-row',
       'description': 'display: table-row;'
     },
     {
       'name': 'sm:table-cell',
       'description': 'display: table-cell;'
     },
     {
       'name': 'sm:hidden',
       'description': 'display: none;'
     },
     {
       'name': 'sm:flex',
       'description': 'display: flex;'
     },
     {
       'name': 'sm:inline-flex',
       'description': 'display: inline-flex;'
     },
     {
       'name': 'sm:flex-row',
       'description': 'flex-direction: row;'
     },
     {
       'name': 'sm:flex-row-reverse',
       'description': 'flex-direction: row-reverse;'
     },
     {
       'name': 'sm:flex-col',
       'description': 'flex-direction: column;'
     },
     {
       'name': 'sm:flex-col-reverse',
       'description': 'flex-direction: column-reverse;'
     },
     {
       'name': 'sm:flex-wrap',
       'description': 'flex-wrap: wrap;'
     },
     {
       'name': 'sm:flex-wrap-reverse',
       'description': 'flex-wrap: wrap-reverse;'
     },
     {
       'name': 'sm:flex-no-wrap',
       'description': 'flex-wrap: nowrap;'
     },
     {
       'name': 'sm:items-start',
       'description': 'align-items: flex-start;'
     },
     {
       'name': 'sm:items-end',
       'description': 'align-items: flex-end;'
     },
     {
       'name': 'sm:items-center',
       'description': 'align-items: center;'
     },
     {
       'name': 'sm:items-baseline',
       'description': 'align-items: baseline;'
     },
     {
       'name': 'sm:items-stretch',
       'description': 'align-items: stretch;'
     },
     {
       'name': 'sm:self-auto',
       'description': 'align-self: auto;'
     },
     {
       'name': 'sm:self-start',
       'description': 'align-self: flex-start;'
     },
     {
       'name': 'sm:self-end',
       'description': 'align-self: flex-end;'
     },
     {
       'name': 'sm:self-center',
       'description': 'align-self: center;'
     },
     {
       'name': 'sm:self-stretch',
       'description': 'align-self: stretch;'
     },
     {
       'name': 'sm:justify-start',
       'description': 'justify-content: flex-start;'
     },
     {
       'name': 'sm:justify-end',
       'description': 'justify-content: flex-end;'
     },
     {
       'name': 'sm:justify-center',
       'description': 'justify-content: center;'
     },
     {
       'name': 'sm:justify-between',
       'description': 'justify-content: space-between;'
     },
     {
       'name': 'sm:justify-around',
       'description': 'justify-content: space-around;'
     },
     {
       'name': 'sm:content-center',
       'description': 'align-content: center;'
     },
     {
       'name': 'sm:content-start',
       'description': 'align-content: flex-start;'
     },
     {
       'name': 'sm:content-end',
       'description': 'align-content: flex-end;'
     },
     {
       'name': 'sm:content-between',
       'description': 'align-content: space-between;'
     },
     {
       'name': 'sm:content-around',
       'description': 'align-content: space-around;'
     },
     {
       'name': 'sm:flex-1',
       'description': 'flex: 1 1 0%;'
     },
     {
       'name': 'sm:flex-auto',
       'description': 'flex: 1 1 auto;'
     },
     {
       'name': 'sm:flex-initial',
       'description': 'flex: 0 1 auto;'
     },
     {
       'name': 'sm:flex-none',
       'description': 'flex: none;'
     },
     {
       'name': 'sm:flex-grow',
       'description': 'flex-grow: 1;'
     },
     {
       'name': 'sm:flex-shrink',
       'description': 'flex-shrink: 1;'
     },
     {
       'name': 'sm:flex-no-grow',
       'description': 'flex-grow: 0;'
     },
     {
       'name': 'sm:flex-no-shrink',
       'description': 'flex-shrink: 0;'
     },
     {
       'name': 'sm:float-right',
       'description': 'float: right;'
     },
     {
       'name': 'sm:float-left',
       'description': 'float: left;'
     },
     {
       'name': 'sm:float-none',
       'description': 'float: none;'
     },
     {
       'name': 'sm:clearfix',
       'description': ':after { content: \'\'; display: table; clear: both; }'
     },
     {
       'name': 'sm:font-sans',
       'description': 'font-family: system-ui, BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;'
     },
     {
       'name': 'sm:font-serif',
       'description': 'font-family: Constantia, Lucida Bright, Lucidabright, Lucida Serif, Lucida, DejaVu Serif, Bitstream Vera Serif, Liberation Serif, Georgia, serif;'
     },
     {
       'name': 'sm:font-mono',
       'description': 'font-family: Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace;'
     },
     {
       'name': 'sm:font-hairline',
       'description': 'font-weight: 100;'
     },
     {
       'name': 'sm:font-thin',
       'description': 'font-weight: 200;'
     },
     {
       'name': 'sm:font-light',
       'description': 'font-weight: 300;'
     },
     {
       'name': 'sm:font-normal',
       'description': 'font-weight: 400;'
     },
     {
       'name': 'sm:font-medium',
       'description': 'font-weight: 500;'
     },
     {
       'name': 'sm:font-semibold',
       'description': 'font-weight: 600;'
     },
     {
       'name': 'sm:font-bold',
       'description': 'font-weight: 700;'
     },
     {
       'name': 'sm:font-extrabold',
       'description': 'font-weight: 800;'
     },
     {
       'name': 'sm:font-black',
       'description': 'font-weight: 900;'
     },
     {
       'name': 'sm:hover:font-hairline',
       'description': ':hover { font-weight: 100; }'
     },
     {
       'name': 'sm:hover:font-thin',
       'description': ':hover { font-weight: 200; }'
     },
     {
       'name': 'sm:hover:font-light',
       'description': ':hover { font-weight: 300; }'
     },
     {
       'name': 'sm:hover:font-normal',
       'description': ':hover { font-weight: 400; }'
     },
     {
       'name': 'sm:hover:font-medium',
       'description': ':hover { font-weight: 500; }'
     },
     {
       'name': 'sm:hover:font-semibold',
       'description': ':hover { font-weight: 600; }'
     },
     {
       'name': 'sm:hover:font-bold',
       'description': ':hover { font-weight: 700; }'
     },
     {
       'name': 'sm:hover:font-extrabold',
       'description': ':hover { font-weight: 800; }'
     },
     {
       'name': 'sm:hover:font-black',
       'description': ':hover { font-weight: 900; }'
     },
     {
       'name': 'sm:focus:font-hairline',
       'description': ':focus { font-weight: 100; }'
     },
     {
       'name': 'sm:focus:font-thin',
       'description': ':focus { font-weight: 200; }'
     },
     {
       'name': 'sm:focus:font-light',
       'description': ':focus { font-weight: 300; }'
     },
     {
       'name': 'sm:focus:font-normal',
       'description': ':focus { font-weight: 400; }'
     },
     {
       'name': 'sm:focus:font-medium',
       'description': ':focus { font-weight: 500; }'
     },
     {
       'name': 'sm:focus:font-semibold',
       'description': ':focus { font-weight: 600; }'
     },
     {
       'name': 'sm:focus:font-bold',
       'description': ':focus { font-weight: 700; }'
     },
     {
       'name': 'sm:focus:font-extrabold',
       'description': ':focus { font-weight: 800; }'
     },
     {
       'name': 'sm:focus:font-black',
       'description': ':focus { font-weight: 900; }'
     },
     {
       'name': 'sm:h-1',
       'description': 'height: .25rem;'
     },
     {
       'name': 'sm:h-2',
       'description': 'height: .5rem;'
     },
     {
       'name': 'sm:h-3',
       'description': 'height: .75rem;'
     },
     {
       'name': 'sm:h-4',
       'description': 'height: 1rem;'
     },
     {
       'name': 'sm:h-5',
       'description': 'height: 1.25rem;'
     },
     {
       'name': 'sm:h-6',
       'description': 'height: 1.5rem;'
     },
     {
       'name': 'sm:h-8',
       'description': 'height: 2rem;'
     },
     {
       'name': 'sm:h-10',
       'description': 'height: 2.5rem;'
     },
     {
       'name': 'sm:h-12',
       'description': 'height: 3rem;'
     },
     {
       'name': 'sm:h-16',
       'description': 'height: 4rem;'
     },
     {
       'name': 'sm:h-24',
       'description': 'height: 6rem;'
     },
     {
       'name': 'sm:h-32',
       'description': 'height: 8rem;'
     },
     {
       'name': 'sm:h-48',
       'description': 'height: 12rem;'
     },
     {
       'name': 'sm:h-64',
       'description': 'height: 16rem;'
     },
     {
       'name': 'sm:h-auto',
       'description': 'height: auto;'
     },
     {
       'name': 'sm:h-px',
       'description': 'height: 1px;'
     },
     {
       'name': 'sm:h-full',
       'description': 'height: 100%;'
     },
     {
       'name': 'sm:h-screen',
       'description': 'height: 100vh;'
     },
     {
       'name': 'sm:leading-none',
       'description': 'line-height: 1;'
     },
     {
       'name': 'sm:leading-tight',
       'description': 'line-height: 1.25;'
     },
     {
       'name': 'sm:leading-normal',
       'description': 'line-height: 1.5;'
     },
     {
       'name': 'sm:leading-loose',
       'description': 'line-height: 2;'
     },
     {
       'name': 'sm:m-0',
       'description': 'margin: 0;'
     },
     {
       'name': 'sm:m-1',
       'description': 'margin: .25rem;'
     },
     {
       'name': 'sm:m-2',
       'description': 'margin: .5rem;'
     },
     {
       'name': 'sm:m-3',
       'description': 'margin: .75rem;'
     },
     {
       'name': 'sm:m-4',
       'description': 'margin: 1rem;'
     },
     {
       'name': 'sm:m-5',
       'description': 'margin: 1.25rem;'
     },
     {
       'name': 'sm:m-6',
       'description': 'margin: 1.5rem;'
     },
     {
       'name': 'sm:m-8',
       'description': 'margin: 2rem;'
     },
     {
       'name': 'sm:m-10',
       'description': 'margin: 2.5rem;'
     },
     {
       'name': 'sm:m-12',
       'description': 'margin: 3rem;'
     },
     {
       'name': 'sm:m-16',
       'description': 'margin: 4rem;'
     },
     {
       'name': 'sm:m-20',
       'description': 'margin: 5rem;'
     },
     {
       'name': 'sm:m-24',
       'description': 'margin: 6rem;'
     },
     {
       'name': 'sm:m-32',
       'description': 'margin: 8rem;'
     },
     {
       'name': 'sm:m-auto',
       'description': 'margin: auto;'
     },
     {
       'name': 'sm:m-px',
       'description': 'margin: 1px;'
     },
     {
       'name': 'sm:my-0',
       'description': 'margin-top: 0; margin-bottom: 0;'
     },
     {
       'name': 'sm:mx-0',
       'description': 'margin-left: 0; margin-right: 0;'
     },
     {
       'name': 'sm:my-1',
       'description': 'margin-top: .25rem; margin-bottom: .25rem;'
     },
     {
       'name': 'sm:mx-1',
       'description': 'margin-left: .25rem; margin-right: .25rem;'
     },
     {
       'name': 'sm:my-2',
       'description': 'margin-top: .5rem; margin-bottom: .5rem;'
     },
     {
       'name': 'sm:mx-2',
       'description': 'margin-left: .5rem; margin-right: .5rem;'
     },
     {
       'name': 'sm:my-3',
       'description': 'margin-top: .75rem; margin-bottom: .75rem;'
     },
     {
       'name': 'sm:mx-3',
       'description': 'margin-left: .75rem; margin-right: .75rem;'
     },
     {
       'name': 'sm:my-4',
       'description': 'margin-top: 1rem; margin-bottom: 1rem;'
     },
     {
       'name': 'sm:mx-4',
       'description': 'margin-left: 1rem; margin-right: 1rem;'
     },
     {
       'name': 'sm:my-5',
       'description': 'margin-top: 1.25rem; margin-bottom: 1.25rem;'
     },
     {
       'name': 'sm:mx-5',
       'description': 'margin-left: 1.25rem; margin-right: 1.25rem;'
     },
     {
       'name': 'sm:my-6',
       'description': 'margin-top: 1.5rem; margin-bottom: 1.5rem;'
     },
     {
       'name': 'sm:mx-6',
       'description': 'margin-left: 1.5rem; margin-right: 1.5rem;'
     },
     {
       'name': 'sm:my-8',
       'description': 'margin-top: 2rem; margin-bottom: 2rem;'
     },
     {
       'name': 'sm:mx-8',
       'description': 'margin-left: 2rem; margin-right: 2rem;'
     },
     {
       'name': 'sm:my-10',
       'description': 'margin-top: 2.5rem; margin-bottom: 2.5rem;'
     },
     {
       'name': 'sm:mx-10',
       'description': 'margin-left: 2.5rem; margin-right: 2.5rem;'
     },
     {
       'name': 'sm:my-12',
       'description': 'margin-top: 3rem; margin-bottom: 3rem;'
     },
     {
       'name': 'sm:mx-12',
       'description': 'margin-left: 3rem; margin-right: 3rem;'
     },
     {
       'name': 'sm:my-16',
       'description': 'margin-top: 4rem; margin-bottom: 4rem;'
     },
     {
       'name': 'sm:mx-16',
       'description': 'margin-left: 4rem; margin-right: 4rem;'
     },
     {
       'name': 'sm:my-20',
       'description': 'margin-top: 5rem; margin-bottom: 5rem;'
     },
     {
       'name': 'sm:mx-20',
       'description': 'margin-left: 5rem; margin-right: 5rem;'
     },
     {
       'name': 'sm:my-24',
       'description': 'margin-top: 6rem; margin-bottom: 6rem;'
     },
     {
       'name': 'sm:mx-24',
       'description': 'margin-left: 6rem; margin-right: 6rem;'
     },
     {
       'name': 'sm:my-32',
       'description': 'margin-top: 8rem; margin-bottom: 8rem;'
     },
     {
       'name': 'sm:mx-32',
       'description': 'margin-left: 8rem; margin-right: 8rem;'
     },
     {
       'name': 'sm:my-auto',
       'description': 'margin-top: auto; margin-bottom: auto;'
     },
     {
       'name': 'sm:mx-auto',
       'description': 'margin-left: auto; margin-right: auto;'
     },
     {
       'name': 'sm:my-px',
       'description': 'margin-top: 1px; margin-bottom: 1px;'
     },
     {
       'name': 'sm:mx-px',
       'description': 'margin-left: 1px; margin-right: 1px;'
     },
     {
       'name': 'sm:mt-0',
       'description': 'margin-top: 0;'
     },
     {
       'name': 'sm:mr-0',
       'description': 'margin-right: 0;'
     },
     {
       'name': 'sm:mb-0',
       'description': 'margin-bottom: 0;'
     },
     {
       'name': 'sm:ml-0',
       'description': 'margin-left: 0;'
     },
     {
       'name': 'sm:mt-1',
       'description': 'margin-top: .25rem;'
     },
     {
       'name': 'sm:mr-1',
       'description': 'margin-right: .25rem;'
     },
     {
       'name': 'sm:mb-1',
       'description': 'margin-bottom: .25rem;'
     },
     {
       'name': 'sm:ml-1',
       'description': 'margin-left: .25rem;'
     },
     {
       'name': 'sm:mt-2',
       'description': 'margin-top: .5rem;'
     },
     {
       'name': 'sm:mr-2',
       'description': 'margin-right: .5rem;'
     },
     {
       'name': 'sm:mb-2',
       'description': 'margin-bottom: .5rem;'
     },
     {
       'name': 'sm:ml-2',
       'description': 'margin-left: .5rem;'
     },
     {
       'name': 'sm:mt-3',
       'description': 'margin-top: .75rem;'
     },
     {
       'name': 'sm:mr-3',
       'description': 'margin-right: .75rem;'
     },
     {
       'name': 'sm:mb-3',
       'description': 'margin-bottom: .75rem;'
     },
     {
       'name': 'sm:ml-3',
       'description': 'margin-left: .75rem;'
     },
     {
       'name': 'sm:mt-4',
       'description': 'margin-top: 1rem;'
     },
     {
       'name': 'sm:mr-4',
       'description': 'margin-right: 1rem;'
     },
     {
       'name': 'sm:mb-4',
       'description': 'margin-bottom: 1rem;'
     },
     {
       'name': 'sm:ml-4',
       'description': 'margin-left: 1rem;'
     },
     {
       'name': 'sm:mt-5',
       'description': 'margin-top: 1.25rem;'
     },
     {
       'name': 'sm:mr-5',
       'description': 'margin-right: 1.25rem;'
     },
     {
       'name': 'sm:mb-5',
       'description': 'margin-bottom: 1.25rem;'
     },
     {
       'name': 'sm:ml-5',
       'description': 'margin-left: 1.25rem;'
     },
     {
       'name': 'sm:mt-6',
       'description': 'margin-top: 1.5rem;'
     },
     {
       'name': 'sm:mr-6',
       'description': 'margin-right: 1.5rem;'
     },
     {
       'name': 'sm:mb-6',
       'description': 'margin-bottom: 1.5rem;'
     },
     {
       'name': 'sm:ml-6',
       'description': 'margin-left: 1.5rem;'
     },
     {
       'name': 'sm:mt-8',
       'description': 'margin-top: 2rem;'
     },
     {
       'name': 'sm:mr-8',
       'description': 'margin-right: 2rem;'
     },
     {
       'name': 'sm:mb-8',
       'description': 'margin-bottom: 2rem;'
     },
     {
       'name': 'sm:ml-8',
       'description': 'margin-left: 2rem;'
     },
     {
       'name': 'sm:mt-10',
       'description': 'margin-top: 2.5rem;'
     },
     {
       'name': 'sm:mr-10',
       'description': 'margin-right: 2.5rem;'
     },
     {
       'name': 'sm:mb-10',
       'description': 'margin-bottom: 2.5rem;'
     },
     {
       'name': 'sm:ml-10',
       'description': 'margin-left: 2.5rem;'
     },
     {
       'name': 'sm:mt-12',
       'description': 'margin-top: 3rem;'
     },
     {
       'name': 'sm:mr-12',
       'description': 'margin-right: 3rem;'
     },
     {
       'name': 'sm:mb-12',
       'description': 'margin-bottom: 3rem;'
     },
     {
       'name': 'sm:ml-12',
       'description': 'margin-left: 3rem;'
     },
     {
       'name': 'sm:mt-16',
       'description': 'margin-top: 4rem;'
     },
     {
       'name': 'sm:mr-16',
       'description': 'margin-right: 4rem;'
     },
     {
       'name': 'sm:mb-16',
       'description': 'margin-bottom: 4rem;'
     },
     {
       'name': 'sm:ml-16',
       'description': 'margin-left: 4rem;'
     },
     {
       'name': 'sm:mt-20',
       'description': 'margin-top: 5rem;'
     },
     {
       'name': 'sm:mr-20',
       'description': 'margin-right: 5rem;'
     },
     {
       'name': 'sm:mb-20',
       'description': 'margin-bottom: 5rem;'
     },
     {
       'name': 'sm:ml-20',
       'description': 'margin-left: 5rem;'
     },
     {
       'name': 'sm:mt-24',
       'description': 'margin-top: 6rem;'
     },
     {
       'name': 'sm:mr-24',
       'description': 'margin-right: 6rem;'
     },
     {
       'name': 'sm:mb-24',
       'description': 'margin-bottom: 6rem;'
     },
     {
       'name': 'sm:ml-24',
       'description': 'margin-left: 6rem;'
     },
     {
       'name': 'sm:mt-32',
       'description': 'margin-top: 8rem;'
     },
     {
       'name': 'sm:mr-32',
       'description': 'margin-right: 8rem;'
     },
     {
       'name': 'sm:mb-32',
       'description': 'margin-bottom: 8rem;'
     },
     {
       'name': 'sm:ml-32',
       'description': 'margin-left: 8rem;'
     },
     {
       'name': 'sm:mt-auto',
       'description': 'margin-top: auto;'
     },
     {
       'name': 'sm:mr-auto',
       'description': 'margin-right: auto;'
     },
     {
       'name': 'sm:mb-auto',
       'description': 'margin-bottom: auto;'
     },
     {
       'name': 'sm:ml-auto',
       'description': 'margin-left: auto;'
     },
     {
       'name': 'sm:mt-px',
       'description': 'margin-top: 1px;'
     },
     {
       'name': 'sm:mr-px',
       'description': 'margin-right: 1px;'
     },
     {
       'name': 'sm:mb-px',
       'description': 'margin-bottom: 1px;'
     },
     {
       'name': 'sm:ml-px',
       'description': 'margin-left: 1px;'
     },
     {
       'name': 'sm:max-h-full',
       'description': 'max-height: 100%;'
     },
     {
       'name': 'sm:max-h-screen',
       'description': 'max-height: 100vh;'
     },
     {
       'name': 'sm:max-w-xs',
       'description': 'max-width: 20rem;'
     },
     {
       'name': 'sm:max-w-sm',
       'description': 'max-width: 30rem;'
     },
     {
       'name': 'sm:max-w-md',
       'description': 'max-width: 40rem;'
     },
     {
       'name': 'sm:max-w-lg',
       'description': 'max-width: 50rem;'
     },
     {
       'name': 'sm:max-w-xl',
       'description': 'max-width: 60rem;'
     },
     {
       'name': 'sm:max-w-2xl',
       'description': 'max-width: 70rem;'
     },
     {
       'name': 'sm:max-w-3xl',
       'description': 'max-width: 80rem;'
     },
     {
       'name': 'sm:max-w-4xl',
       'description': 'max-width: 90rem;'
     },
     {
       'name': 'sm:max-w-5xl',
       'description': 'max-width: 100rem;'
     },
     {
       'name': 'sm:max-w-full',
       'description': 'max-width: 100%;'
     },
     {
       'name': 'sm:min-h-0',
       'description': 'min-height: 0;'
     },
     {
       'name': 'sm:min-h-full',
       'description': 'min-height: 100%;'
     },
     {
       'name': 'sm:min-h-screen',
       'description': 'min-height: 100vh;'
     },
     {
       'name': 'sm:min-w-0',
       'description': 'min-width: 0;'
     },
     {
       'name': 'sm:min-w-full',
       'description': 'min-width: 100%;'
     },
     {
       'name': 'sm:-m-0',
       'description': 'margin: 0;'
     },
     {
       'name': 'sm:-m-1',
       'description': 'margin: -0.25rem;'
     },
     {
       'name': 'sm:-m-2',
       'description': 'margin: -0.5rem;'
     },
     {
       'name': 'sm:-m-3',
       'description': 'margin: -0.75rem;'
     },
     {
       'name': 'sm:-m-4',
       'description': 'margin: -1rem;'
     },
     {
       'name': 'sm:-m-5',
       'description': 'margin: -1.25rem;'
     },
     {
       'name': 'sm:-m-6',
       'description': 'margin: -1.5rem;'
     },
     {
       'name': 'sm:-m-8',
       'description': 'margin: -2rem;'
     },
     {
       'name': 'sm:-m-10',
       'description': 'margin: -2.5rem;'
     },
     {
       'name': 'sm:-m-12',
       'description': 'margin: -3rem;'
     },
     {
       'name': 'sm:-m-16',
       'description': 'margin: -4rem;'
     },
     {
       'name': 'sm:-m-20',
       'description': 'margin: -5rem;'
     },
     {
       'name': 'sm:-m-24',
       'description': 'margin: -6rem;'
     },
     {
       'name': 'sm:-m-32',
       'description': 'margin: -8rem;'
     },
     {
       'name': 'sm:-m-px',
       'description': 'margin: -1px;'
     },
     {
       'name': 'sm:-my-0',
       'description': 'margin-top: 0; margin-bottom: 0;'
     },
     {
       'name': 'sm:-mx-0',
       'description': 'margin-left: 0; margin-right: 0;'
     },
     {
       'name': 'sm:-my-1',
       'description': 'margin-top: -0.25rem; margin-bottom: -0.25rem;'
     },
     {
       'name': 'sm:-mx-1',
       'description': 'margin-left: -0.25rem; margin-right: -0.25rem;'
     },
     {
       'name': 'sm:-my-2',
       'description': 'margin-top: -0.5rem; margin-bottom: -0.5rem;'
     },
     {
       'name': 'sm:-mx-2',
       'description': 'margin-left: -0.5rem; margin-right: -0.5rem;'
     },
     {
       'name': 'sm:-my-3',
       'description': 'margin-top: -0.75rem; margin-bottom: -0.75rem;'
     },
     {
       'name': 'sm:-mx-3',
       'description': 'margin-left: -0.75rem; margin-right: -0.75rem;'
     },
     {
       'name': 'sm:-my-4',
       'description': 'margin-top: -1rem; margin-bottom: -1rem;'
     },
     {
       'name': 'sm:-mx-4',
       'description': 'margin-left: -1rem; margin-right: -1rem;'
     },
     {
       'name': 'sm:-my-5',
       'description': 'margin-top: -1.25rem; margin-bottom: -1.25rem;'
     },
     {
       'name': 'sm:-mx-5',
       'description': 'margin-left: -1.25rem; margin-right: -1.25rem;'
     },
     {
       'name': 'sm:-my-6',
       'description': 'margin-top: -1.5rem; margin-bottom: -1.5rem;'
     },
     {
       'name': 'sm:-mx-6',
       'description': 'margin-left: -1.5rem; margin-right: -1.5rem;'
     },
     {
       'name': 'sm:-my-8',
       'description': 'margin-top: -2rem; margin-bottom: -2rem;'
     },
     {
       'name': 'sm:-mx-8',
       'description': 'margin-left: -2rem; margin-right: -2rem;'
     },
     {
       'name': 'sm:-my-10',
       'description': 'margin-top: -2.5rem; margin-bottom: -2.5rem;'
     },
     {
       'name': 'sm:-mx-10',
       'description': 'margin-left: -2.5rem; margin-right: -2.5rem;'
     },
     {
       'name': 'sm:-my-12',
       'description': 'margin-top: -3rem; margin-bottom: -3rem;'
     },
     {
       'name': 'sm:-mx-12',
       'description': 'margin-left: -3rem; margin-right: -3rem;'
     },
     {
       'name': 'sm:-my-16',
       'description': 'margin-top: -4rem; margin-bottom: -4rem;'
     },
     {
       'name': 'sm:-mx-16',
       'description': 'margin-left: -4rem; margin-right: -4rem;'
     },
     {
       'name': 'sm:-my-20',
       'description': 'margin-top: -5rem; margin-bottom: -5rem;'
     },
     {
       'name': 'sm:-mx-20',
       'description': 'margin-left: -5rem; margin-right: -5rem;'
     },
     {
       'name': 'sm:-my-24',
       'description': 'margin-top: -6rem; margin-bottom: -6rem;'
     },
     {
       'name': 'sm:-mx-24',
       'description': 'margin-left: -6rem; margin-right: -6rem;'
     },
     {
       'name': 'sm:-my-32',
       'description': 'margin-top: -8rem; margin-bottom: -8rem;'
     },
     {
       'name': 'sm:-mx-32',
       'description': 'margin-left: -8rem; margin-right: -8rem;'
     },
     {
       'name': 'sm:-my-px',
       'description': 'margin-top: -1px; margin-bottom: -1px;'
     },
     {
       'name': 'sm:-mx-px',
       'description': 'margin-left: -1px; margin-right: -1px;'
     },
     {
       'name': 'sm:-mt-0',
       'description': 'margin-top: 0;'
     },
     {
       'name': 'sm:-mr-0',
       'description': 'margin-right: 0;'
     },
     {
       'name': 'sm:-mb-0',
       'description': 'margin-bottom: 0;'
     },
     {
       'name': 'sm:-ml-0',
       'description': 'margin-left: 0;'
     },
     {
       'name': 'sm:-mt-1',
       'description': 'margin-top: -0.25rem;'
     },
     {
       'name': 'sm:-mr-1',
       'description': 'margin-right: -0.25rem;'
     },
     {
       'name': 'sm:-mb-1',
       'description': 'margin-bottom: -0.25rem;'
     },
     {
       'name': 'sm:-ml-1',
       'description': 'margin-left: -0.25rem;'
     },
     {
       'name': 'sm:-mt-2',
       'description': 'margin-top: -0.5rem;'
     },
     {
       'name': 'sm:-mr-2',
       'description': 'margin-right: -0.5rem;'
     },
     {
       'name': 'sm:-mb-2',
       'description': 'margin-bottom: -0.5rem;'
     },
     {
       'name': 'sm:-ml-2',
       'description': 'margin-left: -0.5rem;'
     },
     {
       'name': 'sm:-mt-3',
       'description': 'margin-top: -0.75rem;'
     },
     {
       'name': 'sm:-mr-3',
       'description': 'margin-right: -0.75rem;'
     },
     {
       'name': 'sm:-mb-3',
       'description': 'margin-bottom: -0.75rem;'
     },
     {
       'name': 'sm:-ml-3',
       'description': 'margin-left: -0.75rem;'
     },
     {
       'name': 'sm:-mt-4',
       'description': 'margin-top: -1rem;'
     },
     {
       'name': 'sm:-mr-4',
       'description': 'margin-right: -1rem;'
     },
     {
       'name': 'sm:-mb-4',
       'description': 'margin-bottom: -1rem;'
     },
     {
       'name': 'sm:-ml-4',
       'description': 'margin-left: -1rem;'
     },
     {
       'name': 'sm:-mt-5',
       'description': 'margin-top: -1.25rem;'
     },
     {
       'name': 'sm:-mr-5',
       'description': 'margin-right: -1.25rem;'
     },
     {
       'name': 'sm:-mb-5',
       'description': 'margin-bottom: -1.25rem;'
     },
     {
       'name': 'sm:-ml-5',
       'description': 'margin-left: -1.25rem;'
     },
     {
       'name': 'sm:-mt-6',
       'description': 'margin-top: -1.5rem;'
     },
     {
       'name': 'sm:-mr-6',
       'description': 'margin-right: -1.5rem;'
     },
     {
       'name': 'sm:-mb-6',
       'description': 'margin-bottom: -1.5rem;'
     },
     {
       'name': 'sm:-ml-6',
       'description': 'margin-left: -1.5rem;'
     },
     {
       'name': 'sm:-mt-8',
       'description': 'margin-top: -2rem;'
     },
     {
       'name': 'sm:-mr-8',
       'description': 'margin-right: -2rem;'
     },
     {
       'name': 'sm:-mb-8',
       'description': 'margin-bottom: -2rem;'
     },
     {
       'name': 'sm:-ml-8',
       'description': 'margin-left: -2rem;'
     },
     {
       'name': 'sm:-mt-10',
       'description': 'margin-top: -2.5rem;'
     },
     {
       'name': 'sm:-mr-10',
       'description': 'margin-right: -2.5rem;'
     },
     {
       'name': 'sm:-mb-10',
       'description': 'margin-bottom: -2.5rem;'
     },
     {
       'name': 'sm:-ml-10',
       'description': 'margin-left: -2.5rem;'
     },
     {
       'name': 'sm:-mt-12',
       'description': 'margin-top: -3rem;'
     },
     {
       'name': 'sm:-mr-12',
       'description': 'margin-right: -3rem;'
     },
     {
       'name': 'sm:-mb-12',
       'description': 'margin-bottom: -3rem;'
     },
     {
       'name': 'sm:-ml-12',
       'description': 'margin-left: -3rem;'
     },
     {
       'name': 'sm:-mt-16',
       'description': 'margin-top: -4rem;'
     },
     {
       'name': 'sm:-mr-16',
       'description': 'margin-right: -4rem;'
     },
     {
       'name': 'sm:-mb-16',
       'description': 'margin-bottom: -4rem;'
     },
     {
       'name': 'sm:-ml-16',
       'description': 'margin-left: -4rem;'
     },
     {
       'name': 'sm:-mt-20',
       'description': 'margin-top: -5rem;'
     },
     {
       'name': 'sm:-mr-20',
       'description': 'margin-right: -5rem;'
     },
     {
       'name': 'sm:-mb-20',
       'description': 'margin-bottom: -5rem;'
     },
     {
       'name': 'sm:-ml-20',
       'description': 'margin-left: -5rem;'
     },
     {
       'name': 'sm:-mt-24',
       'description': 'margin-top: -6rem;'
     },
     {
       'name': 'sm:-mr-24',
       'description': 'margin-right: -6rem;'
     },
     {
       'name': 'sm:-mb-24',
       'description': 'margin-bottom: -6rem;'
     },
     {
       'name': 'sm:-ml-24',
       'description': 'margin-left: -6rem;'
     },
     {
       'name': 'sm:-mt-32',
       'description': 'margin-top: -8rem;'
     },
     {
       'name': 'sm:-mr-32',
       'description': 'margin-right: -8rem;'
     },
     {
       'name': 'sm:-mb-32',
       'description': 'margin-bottom: -8rem;'
     },
     {
       'name': 'sm:-ml-32',
       'description': 'margin-left: -8rem;'
     },
     {
       'name': 'sm:-mt-px',
       'description': 'margin-top: -1px;'
     },
     {
       'name': 'sm:-mr-px',
       'description': 'margin-right: -1px;'
     },
     {
       'name': 'sm:-mb-px',
       'description': 'margin-bottom: -1px;'
     },
     {
       'name': 'sm:-ml-px',
       'description': 'margin-left: -1px;'
     },
     {
       'name': 'sm:opacity-0',
       'description': 'opacity: 0;'
     },
     {
       'name': 'sm:opacity-25',
       'description': 'opacity: .25;'
     },
     {
       'name': 'sm:opacity-50',
       'description': 'opacity: .5;'
     },
     {
       'name': 'sm:opacity-75',
       'description': 'opacity: .75;'
     },
     {
       'name': 'sm:opacity-100',
       'description': 'opacity: 1;'
     },
     {
       'name': 'sm:overflow-auto',
       'description': 'overflow: auto;'
     },
     {
       'name': 'sm:overflow-hidden',
       'description': 'overflow: hidden;'
     },
     {
       'name': 'sm:overflow-visible',
       'description': 'overflow: visible;'
     },
     {
       'name': 'sm:overflow-scroll',
       'description': 'overflow: scroll;'
     },
     {
       'name': 'sm:overflow-x-auto',
       'description': 'overflow-x: auto;'
     },
     {
       'name': 'sm:overflow-y-auto',
       'description': 'overflow-y: auto;'
     },
     {
       'name': 'sm:overflow-x-hidden',
       'description': 'overflow-x: hidden;'
     },
     {
       'name': 'sm:overflow-y-hidden',
       'description': 'overflow-y: hidden;'
     },
     {
       'name': 'sm:overflow-x-visible',
       'description': 'overflow-x: visible;'
     },
     {
       'name': 'sm:overflow-y-visible',
       'description': 'overflow-y: visible;'
     },
     {
       'name': 'sm:overflow-x-scroll',
       'description': 'overflow-x: scroll;'
     },
     {
       'name': 'sm:overflow-y-scroll',
       'description': 'overflow-y: scroll;'
     },
     {
       'name': 'sm:scrolling-touch',
       'description': '-webkit-overflow-scrolling: touch;'
     },
     {
       'name': 'sm:scrolling-auto',
       'description': '-webkit-overflow-scrolling: auto;'
     },
     {
       'name': 'sm:p-0',
       'description': 'padding: 0;'
     },
     {
       'name': 'sm:p-1',
       'description': 'padding: .25rem;'
     },
     {
       'name': 'sm:p-2',
       'description': 'padding: .5rem;'
     },
     {
       'name': 'sm:p-3',
       'description': 'padding: .75rem;'
     },
     {
       'name': 'sm:p-4',
       'description': 'padding: 1rem;'
     },
     {
       'name': 'sm:p-5',
       'description': 'padding: 1.25rem;'
     },
     {
       'name': 'sm:p-6',
       'description': 'padding: 1.5rem;'
     },
     {
       'name': 'sm:p-8',
       'description': 'padding: 2rem;'
     },
     {
       'name': 'sm:p-10',
       'description': 'padding: 2.5rem;'
     },
     {
       'name': 'sm:p-12',
       'description': 'padding: 3rem;'
     },
     {
       'name': 'sm:p-16',
       'description': 'padding: 4rem;'
     },
     {
       'name': 'sm:p-20',
       'description': 'padding: 5rem;'
     },
     {
       'name': 'sm:p-24',
       'description': 'padding: 6rem;'
     },
     {
       'name': 'sm:p-32',
       'description': 'padding: 8rem;'
     },
     {
       'name': 'sm:p-px',
       'description': 'padding: 1px;'
     },
     {
       'name': 'sm:py-0',
       'description': 'padding-top: 0; padding-bottom: 0;'
     },
     {
       'name': 'sm:px-0',
       'description': 'padding-left: 0; padding-right: 0;'
     },
     {
       'name': 'sm:py-1',
       'description': 'padding-top: .25rem; padding-bottom: .25rem;'
     },
     {
       'name': 'sm:px-1',
       'description': 'padding-left: .25rem; padding-right: .25rem;'
     },
     {
       'name': 'sm:py-2',
       'description': 'padding-top: .5rem; padding-bottom: .5rem;'
     },
     {
       'name': 'sm:px-2',
       'description': 'padding-left: .5rem; padding-right: .5rem;'
     },
     {
       'name': 'sm:py-3',
       'description': 'padding-top: .75rem; padding-bottom: .75rem;'
     },
     {
       'name': 'sm:px-3',
       'description': 'padding-left: .75rem; padding-right: .75rem;'
     },
     {
       'name': 'sm:py-4',
       'description': 'padding-top: 1rem; padding-bottom: 1rem;'
     },
     {
       'name': 'sm:px-4',
       'description': 'padding-left: 1rem; padding-right: 1rem;'
     },
     {
       'name': 'sm:py-5',
       'description': 'padding-top: 1.25rem; padding-bottom: 1.25rem;'
     },
     {
       'name': 'sm:px-5',
       'description': 'padding-left: 1.25rem; padding-right: 1.25rem;'
     },
     {
       'name': 'sm:py-6',
       'description': 'padding-top: 1.5rem; padding-bottom: 1.5rem;'
     },
     {
       'name': 'sm:px-6',
       'description': 'padding-left: 1.5rem; padding-right: 1.5rem;'
     },
     {
       'name': 'sm:py-8',
       'description': 'padding-top: 2rem; padding-bottom: 2rem;'
     },
     {
       'name': 'sm:px-8',
       'description': 'padding-left: 2rem; padding-right: 2rem;'
     },
     {
       'name': 'sm:py-10',
       'description': 'padding-top: 2.5rem; padding-bottom: 2.5rem;'
     },
     {
       'name': 'sm:px-10',
       'description': 'padding-left: 2.5rem; padding-right: 2.5rem;'
     },
     {
       'name': 'sm:py-12',
       'description': 'padding-top: 3rem; padding-bottom: 3rem;'
     },
     {
       'name': 'sm:px-12',
       'description': 'padding-left: 3rem; padding-right: 3rem;'
     },
     {
       'name': 'sm:py-16',
       'description': 'padding-top: 4rem; padding-bottom: 4rem;'
     },
     {
       'name': 'sm:px-16',
       'description': 'padding-left: 4rem; padding-right: 4rem;'
     },
     {
       'name': 'sm:py-20',
       'description': 'padding-top: 5rem; padding-bottom: 5rem;'
     },
     {
       'name': 'sm:px-20',
       'description': 'padding-left: 5rem; padding-right: 5rem;'
     },
     {
       'name': 'sm:py-24',
       'description': 'padding-top: 6rem; padding-bottom: 6rem;'
     },
     {
       'name': 'sm:px-24',
       'description': 'padding-left: 6rem; padding-right: 6rem;'
     },
     {
       'name': 'sm:py-32',
       'description': 'padding-top: 8rem; padding-bottom: 8rem;'
     },
     {
       'name': 'sm:px-32',
       'description': 'padding-left: 8rem; padding-right: 8rem;'
     },
     {
       'name': 'sm:py-px',
       'description': 'padding-top: 1px; padding-bottom: 1px;'
     },
     {
       'name': 'sm:px-px',
       'description': 'padding-left: 1px; padding-right: 1px;'
     },
     {
       'name': 'sm:pt-0',
       'description': 'padding-top: 0;'
     },
     {
       'name': 'sm:pr-0',
       'description': 'padding-right: 0;'
     },
     {
       'name': 'sm:pb-0',
       'description': 'padding-bottom: 0;'
     },
     {
       'name': 'sm:pl-0',
       'description': 'padding-left: 0;'
     },
     {
       'name': 'sm:pt-1',
       'description': 'padding-top: .25rem;'
     },
     {
       'name': 'sm:pr-1',
       'description': 'padding-right: .25rem;'
     },
     {
       'name': 'sm:pb-1',
       'description': 'padding-bottom: .25rem;'
     },
     {
       'name': 'sm:pl-1',
       'description': 'padding-left: .25rem;'
     },
     {
       'name': 'sm:pt-2',
       'description': 'padding-top: .5rem;'
     },
     {
       'name': 'sm:pr-2',
       'description': 'padding-right: .5rem;'
     },
     {
       'name': 'sm:pb-2',
       'description': 'padding-bottom: .5rem;'
     },
     {
       'name': 'sm:pl-2',
       'description': 'padding-left: .5rem;'
     },
     {
       'name': 'sm:pt-3',
       'description': 'padding-top: .75rem;'
     },
     {
       'name': 'sm:pr-3',
       'description': 'padding-right: .75rem;'
     },
     {
       'name': 'sm:pb-3',
       'description': 'padding-bottom: .75rem;'
     },
     {
       'name': 'sm:pl-3',
       'description': 'padding-left: .75rem;'
     },
     {
       'name': 'sm:pt-4',
       'description': 'padding-top: 1rem;'
     },
     {
       'name': 'sm:pr-4',
       'description': 'padding-right: 1rem;'
     },
     {
       'name': 'sm:pb-4',
       'description': 'padding-bottom: 1rem;'
     },
     {
       'name': 'sm:pl-4',
       'description': 'padding-left: 1rem;'
     },
     {
       'name': 'sm:pt-5',
       'description': 'padding-top: 1.25rem;'
     },
     {
       'name': 'sm:pr-5',
       'description': 'padding-right: 1.25rem;'
     },
     {
       'name': 'sm:pb-5',
       'description': 'padding-bottom: 1.25rem;'
     },
     {
       'name': 'sm:pl-5',
       'description': 'padding-left: 1.25rem;'
     },
     {
       'name': 'sm:pt-6',
       'description': 'padding-top: 1.5rem;'
     },
     {
       'name': 'sm:pr-6',
       'description': 'padding-right: 1.5rem;'
     },
     {
       'name': 'sm:pb-6',
       'description': 'padding-bottom: 1.5rem;'
     },
     {
       'name': 'sm:pl-6',
       'description': 'padding-left: 1.5rem;'
     },
     {
       'name': 'sm:pt-8',
       'description': 'padding-top: 2rem;'
     },
     {
       'name': 'sm:pr-8',
       'description': 'padding-right: 2rem;'
     },
     {
       'name': 'sm:pb-8',
       'description': 'padding-bottom: 2rem;'
     },
     {
       'name': 'sm:pl-8',
       'description': 'padding-left: 2rem;'
     },
     {
       'name': 'sm:pt-10',
       'description': 'padding-top: 2.5rem;'
     },
     {
       'name': 'sm:pr-10',
       'description': 'padding-right: 2.5rem;'
     },
     {
       'name': 'sm:pb-10',
       'description': 'padding-bottom: 2.5rem;'
     },
     {
       'name': 'sm:pl-10',
       'description': 'padding-left: 2.5rem;'
     },
     {
       'name': 'sm:pt-12',
       'description': 'padding-top: 3rem;'
     },
     {
       'name': 'sm:pr-12',
       'description': 'padding-right: 3rem;'
     },
     {
       'name': 'sm:pb-12',
       'description': 'padding-bottom: 3rem;'
     },
     {
       'name': 'sm:pl-12',
       'description': 'padding-left: 3rem;'
     },
     {
       'name': 'sm:pt-16',
       'description': 'padding-top: 4rem;'
     },
     {
       'name': 'sm:pr-16',
       'description': 'padding-right: 4rem;'
     },
     {
       'name': 'sm:pb-16',
       'description': 'padding-bottom: 4rem;'
     },
     {
       'name': 'sm:pl-16',
       'description': 'padding-left: 4rem;'
     },
     {
       'name': 'sm:pt-20',
       'description': 'padding-top: 5rem;'
     },
     {
       'name': 'sm:pr-20',
       'description': 'padding-right: 5rem;'
     },
     {
       'name': 'sm:pb-20',
       'description': 'padding-bottom: 5rem;'
     },
     {
       'name': 'sm:pl-20',
       'description': 'padding-left: 5rem;'
     },
     {
       'name': 'sm:pt-24',
       'description': 'padding-top: 6rem;'
     },
     {
       'name': 'sm:pr-24',
       'description': 'padding-right: 6rem;'
     },
     {
       'name': 'sm:pb-24',
       'description': 'padding-bottom: 6rem;'
     },
     {
       'name': 'sm:pl-24',
       'description': 'padding-left: 6rem;'
     },
     {
       'name': 'sm:pt-32',
       'description': 'padding-top: 8rem;'
     },
     {
       'name': 'sm:pr-32',
       'description': 'padding-right: 8rem;'
     },
     {
       'name': 'sm:pb-32',
       'description': 'padding-bottom: 8rem;'
     },
     {
       'name': 'sm:pl-32',
       'description': 'padding-left: 8rem;'
     },
     {
       'name': 'sm:pt-px',
       'description': 'padding-top: 1px;'
     },
     {
       'name': 'sm:pr-px',
       'description': 'padding-right: 1px;'
     },
     {
       'name': 'sm:pb-px',
       'description': 'padding-bottom: 1px;'
     },
     {
       'name': 'sm:pl-px',
       'description': 'padding-left: 1px;'
     },
     {
       'name': 'sm:pointer-events-none',
       'description': 'pointer-events: none;'
     },
     {
       'name': 'sm:pointer-events-auto',
       'description': 'pointer-events: auto;'
     },
     {
       'name': 'sm:static',
       'description': 'position: static;'
     },
     {
       'name': 'sm:fixed',
       'description': 'position: fixed;'
     },
     {
       'name': 'sm:absolute',
       'description': 'position: absolute;'
     },
     {
       'name': 'sm:relative',
       'description': 'position: relative;'
     },
     {
       'name': 'sm:sticky',
       'description': 'position: sticky;'
     },
     {
       'name': 'sm:pin-none',
       'description': 'top: auto; right: auto; bottom: auto; left: auto;'
     },
     {
       'name': 'sm:pin',
       'description': 'top: 0; right: 0; bottom: 0; left: 0;'
     },
     {
       'name': 'sm:pin-y',
       'description': 'top: 0; bottom: 0;'
     },
     {
       'name': 'sm:pin-x',
       'description': 'right: 0; left: 0;'
     },
     {
       'name': 'sm:pin-t',
       'description': 'top: 0;'
     },
     {
       'name': 'sm:pin-r',
       'description': 'right: 0;'
     },
     {
       'name': 'sm:pin-b',
       'description': 'bottom: 0;'
     },
     {
       'name': 'sm:pin-l',
       'description': 'left: 0;'
     },
     {
       'name': 'sm:resize-none',
       'description': 'resize: none;'
     },
     {
       'name': 'sm:resize-y',
       'description': 'resize: vertical;'
     },
     {
       'name': 'sm:resize-x',
       'description': 'resize: horizontal;'
     },
     {
       'name': 'sm:resize',
       'description': 'resize: both;'
     },
     {
       'name': 'sm:shadow',
       'description': 'box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .1);'
     },
     {
       'name': 'sm:shadow-md',
       'description': 'box-shadow: 0 4px 8px 0 rgba(0, 0, 0, .12), 0 2px 4px 0 rgba(0, 0, 0, .08);'
     },
     {
       'name': 'sm:shadow-lg',
       'description': 'box-shadow: 0 15px 30px 0 rgba(0, 0, 0, .11), 0 5px 15px 0 rgba(0, 0, 0, .08);'
     },
     {
       'name': 'sm:shadow-inner',
       'description': 'box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, .06);'
     },
     {
       'name': 'sm:shadow-outline',
       'description': 'box-shadow: 0 0 0 3px rgba(52, 144, 220, .5);'
     },
     {
       'name': 'sm:shadow-none',
       'description': 'box-shadow: none;'
     },
     {
       'name': 'sm:hover:shadow',
       'description': ':hover { box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .1); }'
     },
     {
       'name': 'sm:hover:shadow-md',
       'description': ':hover { box-shadow: 0 4px 8px 0 rgba(0, 0, 0, .12), 0 2px 4px 0 rgba(0, 0, 0, .08); }'
     },
     {
       'name': 'sm:hover:shadow-lg',
       'description': ':hover { box-shadow: 0 15px 30px 0 rgba(0, 0, 0, .11), 0 5px 15px 0 rgba(0, 0, 0, .08); }'
     },
     {
       'name': 'sm:hover:shadow-inner',
       'description': ':hover { box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, .06); }'
     },
     {
       'name': 'sm:hover:shadow-outline',
       'description': ':hover { box-shadow: 0 0 0 3px rgba(52, 144, 220, .5); }'
     },
     {
       'name': 'sm:hover:shadow-none',
       'description': ':hover { box-shadow: none; }'
     },
     {
       'name': 'sm:focus:shadow',
       'description': ':focus { box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .1); }'
     },
     {
       'name': 'sm:focus:shadow-md',
       'description': ':focus { box-shadow: 0 4px 8px 0 rgba(0, 0, 0, .12), 0 2px 4px 0 rgba(0, 0, 0, .08); }'
     },
     {
       'name': 'sm:focus:shadow-lg',
       'description': ':focus { box-shadow: 0 15px 30px 0 rgba(0, 0, 0, .11), 0 5px 15px 0 rgba(0, 0, 0, .08); }'
     },
     {
       'name': 'sm:focus:shadow-inner',
       'description': ':focus { box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, .06); }'
     },
     {
       'name': 'sm:focus:shadow-outline',
       'description': ':focus { box-shadow: 0 0 0 3px rgba(52, 144, 220, .5); }'
     },
     {
       'name': 'sm:focus:shadow-none',
       'description': ':focus { box-shadow: none; }'
     },
     {
       'name': 'sm:table-auto',
       'description': 'table-layout: auto;'
     },
     {
       'name': 'sm:table-fixed',
       'description': 'table-layout: fixed;'
     },
     {
       'name': 'sm:text-left',
       'description': 'text-align: left;'
     },
     {
       'name': 'sm:text-center',
       'description': 'text-align: center;'
     },
     {
       'name': 'sm:text-right',
       'description': 'text-align: right;'
     },
     {
       'name': 'sm:text-justify',
       'description': 'text-align: justify;'
     },
     {
       'name': 'sm:text-transparent',
       'description': 'color: transparent;'
     },
     {
       'name': 'sm:text-black',
       'description': 'color: #22292f;'
     },
     {
       'name': 'sm:text-grey-darkest',
       'description': 'color: #3d4852;'
     },
     {
       'name': 'sm:text-grey-darker',
       'description': 'color: #606f7b;'
     },
     {
       'name': 'sm:text-grey-dark',
       'description': 'color: #8795a1;'
     },
     {
       'name': 'sm:text-grey',
       'description': 'color: #b8c2cc;'
     },
     {
       'name': 'sm:text-grey-light',
       'description': 'color: #dae1e7;'
     },
     {
       'name': 'sm:text-grey-lighter',
       'description': 'color: #f1f5f8;'
     },
     {
       'name': 'sm:text-grey-lightest',
       'description': 'color: #f8fafc;'
     },
     {
       'name': 'sm:text-white',
       'description': 'color: #fff;'
     },
     {
       'name': 'sm:text-red-darkest',
       'description': 'color: #3b0d0c;'
     },
     {
       'name': 'sm:text-red-darker',
       'description': 'color: #621b18;'
     },
     {
       'name': 'sm:text-red-dark',
       'description': 'color: #cc1f1a;'
     },
     {
       'name': 'sm:text-red',
       'description': 'color: #e3342f;'
     },
     {
       'name': 'sm:text-red-light',
       'description': 'color: #ef5753;'
     },
     {
       'name': 'sm:text-red-lighter',
       'description': 'color: #f9acaa;'
     },
     {
       'name': 'sm:text-red-lightest',
       'description': 'color: #fcebea;'
     },
     {
       'name': 'sm:text-orange-darkest',
       'description': 'color: #462a16;'
     },
     {
       'name': 'sm:text-orange-darker',
       'description': 'color: #613b1f;'
     },
     {
       'name': 'sm:text-orange-dark',
       'description': 'color: #de751f;'
     },
     {
       'name': 'sm:text-orange',
       'description': 'color: #f6993f;'
     },
     {
       'name': 'sm:text-orange-light',
       'description': 'color: #faad63;'
     },
     {
       'name': 'sm:text-orange-lighter',
       'description': 'color: #fcd9b6;'
     },
     {
       'name': 'sm:text-orange-lightest',
       'description': 'color: #fff5eb;'
     },
     {
       'name': 'sm:text-yellow-darkest',
       'description': 'color: #453411;'
     },
     {
       'name': 'sm:text-yellow-darker',
       'description': 'color: #684f1d;'
     },
     {
       'name': 'sm:text-yellow-dark',
       'description': 'color: #f2d024;'
     },
     {
       'name': 'sm:text-yellow',
       'description': 'color: #ffed4a;'
     },
     {
       'name': 'sm:text-yellow-light',
       'description': 'color: #fff382;'
     },
     {
       'name': 'sm:text-yellow-lighter',
       'description': 'color: #fff9c2;'
     },
     {
       'name': 'sm:text-yellow-lightest',
       'description': 'color: #fcfbeb;'
     },
     {
       'name': 'sm:text-green-darkest',
       'description': 'color: #0f2f21;'
     },
     {
       'name': 'sm:text-green-darker',
       'description': 'color: #1a4731;'
     },
     {
       'name': 'sm:text-green-dark',
       'description': 'color: #1f9d55;'
     },
     {
       'name': 'sm:text-green',
       'description': 'color: #38c172;'
     },
     {
       'name': 'sm:text-green-light',
       'description': 'color: #51d88a;'
     },
     {
       'name': 'sm:text-green-lighter',
       'description': 'color: #a2f5bf;'
     },
     {
       'name': 'sm:text-green-lightest',
       'description': 'color: #e3fcec;'
     },
     {
       'name': 'sm:text-teal-darkest',
       'description': 'color: #0d3331;'
     },
     {
       'name': 'sm:text-teal-darker',
       'description': 'color: #20504f;'
     },
     {
       'name': 'sm:text-teal-dark',
       'description': 'color: #38a89d;'
     },
     {
       'name': 'sm:text-teal',
       'description': 'color: #4dc0b5;'
     },
     {
       'name': 'sm:text-teal-light',
       'description': 'color: #64d5ca;'
     },
     {
       'name': 'sm:text-teal-lighter',
       'description': 'color: #a0f0ed;'
     },
     {
       'name': 'sm:text-teal-lightest',
       'description': 'color: #e8fffe;'
     },
     {
       'name': 'sm:text-blue-darkest',
       'description': 'color: #12283a;'
     },
     {
       'name': 'sm:text-blue-darker',
       'description': 'color: #1c3d5a;'
     },
     {
       'name': 'sm:text-blue-dark',
       'description': 'color: #2779bd;'
     },
     {
       'name': 'sm:text-blue',
       'description': 'color: #3490dc;'
     },
     {
       'name': 'sm:text-blue-light',
       'description': 'color: #6cb2eb;'
     },
     {
       'name': 'sm:text-blue-lighter',
       'description': 'color: #bcdefa;'
     },
     {
       'name': 'sm:text-blue-lightest',
       'description': 'color: #eff8ff;'
     },
     {
       'name': 'sm:text-indigo-darkest',
       'description': 'color: #191e38;'
     },
     {
       'name': 'sm:text-indigo-darker',
       'description': 'color: #2f365f;'
     },
     {
       'name': 'sm:text-indigo-dark',
       'description': 'color: #5661b3;'
     },
     {
       'name': 'sm:text-indigo',
       'description': 'color: #6574cd;'
     },
     {
       'name': 'sm:text-indigo-light',
       'description': 'color: #7886d7;'
     },
     {
       'name': 'sm:text-indigo-lighter',
       'description': 'color: #b2b7ff;'
     },
     {
       'name': 'sm:text-indigo-lightest',
       'description': 'color: #e6e8ff;'
     },
     {
       'name': 'sm:text-purple-darkest',
       'description': 'color: #21183c;'
     },
     {
       'name': 'sm:text-purple-darker',
       'description': 'color: #382b5f;'
     },
     {
       'name': 'sm:text-purple-dark',
       'description': 'color: #794acf;'
     },
     {
       'name': 'sm:text-purple',
       'description': 'color: #9561e2;'
     },
     {
       'name': 'sm:text-purple-light',
       'description': 'color: #a779e9;'
     },
     {
       'name': 'sm:text-purple-lighter',
       'description': 'color: #d6bbfc;'
     },
     {
       'name': 'sm:text-purple-lightest',
       'description': 'color: #f3ebff;'
     },
     {
       'name': 'sm:text-pink-darkest',
       'description': 'color: #451225;'
     },
     {
       'name': 'sm:text-pink-darker',
       'description': 'color: #6f213f;'
     },
     {
       'name': 'sm:text-pink-dark',
       'description': 'color: #eb5286;'
     },
     {
       'name': 'sm:text-pink',
       'description': 'color: #f66d9b;'
     },
     {
       'name': 'sm:text-pink-light',
       'description': 'color: #fa7ea8;'
     },
     {
       'name': 'sm:text-pink-lighter',
       'description': 'color: #ffbbca;'
     },
     {
       'name': 'sm:text-pink-lightest',
       'description': 'color: #ffebef;'
     },
     {
       'name': 'sm:hover:text-transparent',
       'description': ':hover { color: transparent; }'
     },
     {
       'name': 'sm:hover:text-black',
       'description': ':hover { color: #22292f; }'
     },
     {
       'name': 'sm:hover:text-grey-darkest',
       'description': ':hover { color: #3d4852; }'
     },
     {
       'name': 'sm:hover:text-grey-darker',
       'description': ':hover { color: #606f7b; }'
     },
     {
       'name': 'sm:hover:text-grey-dark',
       'description': ':hover { color: #8795a1; }'
     },
     {
       'name': 'sm:hover:text-grey',
       'description': ':hover { color: #b8c2cc; }'
     },
     {
       'name': 'sm:hover:text-grey-light',
       'description': ':hover { color: #dae1e7; }'
     },
     {
       'name': 'sm:hover:text-grey-lighter',
       'description': ':hover { color: #f1f5f8; }'
     },
     {
       'name': 'sm:hover:text-grey-lightest',
       'description': ':hover { color: #f8fafc; }'
     },
     {
       'name': 'sm:hover:text-white',
       'description': ':hover { color: #fff; }'
     },
     {
       'name': 'sm:hover:text-red-darkest',
       'description': ':hover { color: #3b0d0c; }'
     },
     {
       'name': 'sm:hover:text-red-darker',
       'description': ':hover { color: #621b18; }'
     },
     {
       'name': 'sm:hover:text-red-dark',
       'description': ':hover { color: #cc1f1a; }'
     },
     {
       'name': 'sm:hover:text-red',
       'description': ':hover { color: #e3342f; }'
     },
     {
       'name': 'sm:hover:text-red-light',
       'description': ':hover { color: #ef5753; }'
     },
     {
       'name': 'sm:hover:text-red-lighter',
       'description': ':hover { color: #f9acaa; }'
     },
     {
       'name': 'sm:hover:text-red-lightest',
       'description': ':hover { color: #fcebea; }'
     },
     {
       'name': 'sm:hover:text-orange-darkest',
       'description': ':hover { color: #462a16; }'
     },
     {
       'name': 'sm:hover:text-orange-darker',
       'description': ':hover { color: #613b1f; }'
     },
     {
       'name': 'sm:hover:text-orange-dark',
       'description': ':hover { color: #de751f; }'
     },
     {
       'name': 'sm:hover:text-orange',
       'description': ':hover { color: #f6993f; }'
     },
     {
       'name': 'sm:hover:text-orange-light',
       'description': ':hover { color: #faad63; }'
     },
     {
       'name': 'sm:hover:text-orange-lighter',
       'description': ':hover { color: #fcd9b6; }'
     },
     {
       'name': 'sm:hover:text-orange-lightest',
       'description': ':hover { color: #fff5eb; }'
     },
     {
       'name': 'sm:hover:text-yellow-darkest',
       'description': ':hover { color: #453411; }'
     },
     {
       'name': 'sm:hover:text-yellow-darker',
       'description': ':hover { color: #684f1d; }'
     },
     {
       'name': 'sm:hover:text-yellow-dark',
       'description': ':hover { color: #f2d024; }'
     },
     {
       'name': 'sm:hover:text-yellow',
       'description': ':hover { color: #ffed4a; }'
     },
     {
       'name': 'sm:hover:text-yellow-light',
       'description': ':hover { color: #fff382; }'
     },
     {
       'name': 'sm:hover:text-yellow-lighter',
       'description': ':hover { color: #fff9c2; }'
     },
     {
       'name': 'sm:hover:text-yellow-lightest',
       'description': ':hover { color: #fcfbeb; }'
     },
     {
       'name': 'sm:hover:text-green-darkest',
       'description': ':hover { color: #0f2f21; }'
     },
     {
       'name': 'sm:hover:text-green-darker',
       'description': ':hover { color: #1a4731; }'
     },
     {
       'name': 'sm:hover:text-green-dark',
       'description': ':hover { color: #1f9d55; }'
     },
     {
       'name': 'sm:hover:text-green',
       'description': ':hover { color: #38c172; }'
     },
     {
       'name': 'sm:hover:text-green-light',
       'description': ':hover { color: #51d88a; }'
     },
     {
       'name': 'sm:hover:text-green-lighter',
       'description': ':hover { color: #a2f5bf; }'
     },
     {
       'name': 'sm:hover:text-green-lightest',
       'description': ':hover { color: #e3fcec; }'
     },
     {
       'name': 'sm:hover:text-teal-darkest',
       'description': ':hover { color: #0d3331; }'
     },
     {
       'name': 'sm:hover:text-teal-darker',
       'description': ':hover { color: #20504f; }'
     },
     {
       'name': 'sm:hover:text-teal-dark',
       'description': ':hover { color: #38a89d; }'
     },
     {
       'name': 'sm:hover:text-teal',
       'description': ':hover { color: #4dc0b5; }'
     },
     {
       'name': 'sm:hover:text-teal-light',
       'description': ':hover { color: #64d5ca; }'
     },
     {
       'name': 'sm:hover:text-teal-lighter',
       'description': ':hover { color: #a0f0ed; }'
     },
     {
       'name': 'sm:hover:text-teal-lightest',
       'description': ':hover { color: #e8fffe; }'
     },
     {
       'name': 'sm:hover:text-blue-darkest',
       'description': ':hover { color: #12283a; }'
     },
     {
       'name': 'sm:hover:text-blue-darker',
       'description': ':hover { color: #1c3d5a; }'
     },
     {
       'name': 'sm:hover:text-blue-dark',
       'description': ':hover { color: #2779bd; }'
     },
     {
       'name': 'sm:hover:text-blue',
       'description': ':hover { color: #3490dc; }'
     },
     {
       'name': 'sm:hover:text-blue-light',
       'description': ':hover { color: #6cb2eb; }'
     },
     {
       'name': 'sm:hover:text-blue-lighter',
       'description': ':hover { color: #bcdefa; }'
     },
     {
       'name': 'sm:hover:text-blue-lightest',
       'description': ':hover { color: #eff8ff; }'
     },
     {
       'name': 'sm:hover:text-indigo-darkest',
       'description': ':hover { color: #191e38; }'
     },
     {
       'name': 'sm:hover:text-indigo-darker',
       'description': ':hover { color: #2f365f; }'
     },
     {
       'name': 'sm:hover:text-indigo-dark',
       'description': ':hover { color: #5661b3; }'
     },
     {
       'name': 'sm:hover:text-indigo',
       'description': ':hover { color: #6574cd; }'
     },
     {
       'name': 'sm:hover:text-indigo-light',
       'description': ':hover { color: #7886d7; }'
     },
     {
       'name': 'sm:hover:text-indigo-lighter',
       'description': ':hover { color: #b2b7ff; }'
     },
     {
       'name': 'sm:hover:text-indigo-lightest',
       'description': ':hover { color: #e6e8ff; }'
     },
     {
       'name': 'sm:hover:text-purple-darkest',
       'description': ':hover { color: #21183c; }'
     },
     {
       'name': 'sm:hover:text-purple-darker',
       'description': ':hover { color: #382b5f; }'
     },
     {
       'name': 'sm:hover:text-purple-dark',
       'description': ':hover { color: #794acf; }'
     },
     {
       'name': 'sm:hover:text-purple',
       'description': ':hover { color: #9561e2; }'
     },
     {
       'name': 'sm:hover:text-purple-light',
       'description': ':hover { color: #a779e9; }'
     },
     {
       'name': 'sm:hover:text-purple-lighter',
       'description': ':hover { color: #d6bbfc; }'
     },
     {
       'name': 'sm:hover:text-purple-lightest',
       'description': ':hover { color: #f3ebff; }'
     },
     {
       'name': 'sm:hover:text-pink-darkest',
       'description': ':hover { color: #451225; }'
     },
     {
       'name': 'sm:hover:text-pink-darker',
       'description': ':hover { color: #6f213f; }'
     },
     {
       'name': 'sm:hover:text-pink-dark',
       'description': ':hover { color: #eb5286; }'
     },
     {
       'name': 'sm:hover:text-pink',
       'description': ':hover { color: #f66d9b; }'
     },
     {
       'name': 'sm:hover:text-pink-light',
       'description': ':hover { color: #fa7ea8; }'
     },
     {
       'name': 'sm:hover:text-pink-lighter',
       'description': ':hover { color: #ffbbca; }'
     },
     {
       'name': 'sm:hover:text-pink-lightest',
       'description': ':hover { color: #ffebef; }'
     },
     {
       'name': 'sm:focus:text-transparent',
       'description': ':focus { color: transparent; }'
     },
     {
       'name': 'sm:focus:text-black',
       'description': ':focus { color: #22292f; }'
     },
     {
       'name': 'sm:focus:text-grey-darkest',
       'description': ':focus { color: #3d4852; }'
     },
     {
       'name': 'sm:focus:text-grey-darker',
       'description': ':focus { color: #606f7b; }'
     },
     {
       'name': 'sm:focus:text-grey-dark',
       'description': ':focus { color: #8795a1; }'
     },
     {
       'name': 'sm:focus:text-grey',
       'description': ':focus { color: #b8c2cc; }'
     },
     {
       'name': 'sm:focus:text-grey-light',
       'description': ':focus { color: #dae1e7; }'
     },
     {
       'name': 'sm:focus:text-grey-lighter',
       'description': ':focus { color: #f1f5f8; }'
     },
     {
       'name': 'sm:focus:text-grey-lightest',
       'description': ':focus { color: #f8fafc; }'
     },
     {
       'name': 'sm:focus:text-white',
       'description': ':focus { color: #fff; }'
     },
     {
       'name': 'sm:focus:text-red-darkest',
       'description': ':focus { color: #3b0d0c; }'
     },
     {
       'name': 'sm:focus:text-red-darker',
       'description': ':focus { color: #621b18; }'
     },
     {
       'name': 'sm:focus:text-red-dark',
       'description': ':focus { color: #cc1f1a; }'
     },
     {
       'name': 'sm:focus:text-red',
       'description': ':focus { color: #e3342f; }'
     },
     {
       'name': 'sm:focus:text-red-light',
       'description': ':focus { color: #ef5753; }'
     },
     {
       'name': 'sm:focus:text-red-lighter',
       'description': ':focus { color: #f9acaa; }'
     },
     {
       'name': 'sm:focus:text-red-lightest',
       'description': ':focus { color: #fcebea; }'
     },
     {
       'name': 'sm:focus:text-orange-darkest',
       'description': ':focus { color: #462a16; }'
     },
     {
       'name': 'sm:focus:text-orange-darker',
       'description': ':focus { color: #613b1f; }'
     },
     {
       'name': 'sm:focus:text-orange-dark',
       'description': ':focus { color: #de751f; }'
     },
     {
       'name': 'sm:focus:text-orange',
       'description': ':focus { color: #f6993f; }'
     },
     {
       'name': 'sm:focus:text-orange-light',
       'description': ':focus { color: #faad63; }'
     },
     {
       'name': 'sm:focus:text-orange-lighter',
       'description': ':focus { color: #fcd9b6; }'
     },
     {
       'name': 'sm:focus:text-orange-lightest',
       'description': ':focus { color: #fff5eb; }'
     },
     {
       'name': 'sm:focus:text-yellow-darkest',
       'description': ':focus { color: #453411; }'
     },
     {
       'name': 'sm:focus:text-yellow-darker',
       'description': ':focus { color: #684f1d; }'
     },
     {
       'name': 'sm:focus:text-yellow-dark',
       'description': ':focus { color: #f2d024; }'
     },
     {
       'name': 'sm:focus:text-yellow',
       'description': ':focus { color: #ffed4a; }'
     },
     {
       'name': 'sm:focus:text-yellow-light',
       'description': ':focus { color: #fff382; }'
     },
     {
       'name': 'sm:focus:text-yellow-lighter',
       'description': ':focus { color: #fff9c2; }'
     },
     {
       'name': 'sm:focus:text-yellow-lightest',
       'description': ':focus { color: #fcfbeb; }'
     },
     {
       'name': 'sm:focus:text-green-darkest',
       'description': ':focus { color: #0f2f21; }'
     },
     {
       'name': 'sm:focus:text-green-darker',
       'description': ':focus { color: #1a4731; }'
     },
     {
       'name': 'sm:focus:text-green-dark',
       'description': ':focus { color: #1f9d55; }'
     },
     {
       'name': 'sm:focus:text-green',
       'description': ':focus { color: #38c172; }'
     },
     {
       'name': 'sm:focus:text-green-light',
       'description': ':focus { color: #51d88a; }'
     },
     {
       'name': 'sm:focus:text-green-lighter',
       'description': ':focus { color: #a2f5bf; }'
     },
     {
       'name': 'sm:focus:text-green-lightest',
       'description': ':focus { color: #e3fcec; }'
     },
     {
       'name': 'sm:focus:text-teal-darkest',
       'description': ':focus { color: #0d3331; }'
     },
     {
       'name': 'sm:focus:text-teal-darker',
       'description': ':focus { color: #20504f; }'
     },
     {
       'name': 'sm:focus:text-teal-dark',
       'description': ':focus { color: #38a89d; }'
     },
     {
       'name': 'sm:focus:text-teal',
       'description': ':focus { color: #4dc0b5; }'
     },
     {
       'name': 'sm:focus:text-teal-light',
       'description': ':focus { color: #64d5ca; }'
     },
     {
       'name': 'sm:focus:text-teal-lighter',
       'description': ':focus { color: #a0f0ed; }'
     },
     {
       'name': 'sm:focus:text-teal-lightest',
       'description': ':focus { color: #e8fffe; }'
     },
     {
       'name': 'sm:focus:text-blue-darkest',
       'description': ':focus { color: #12283a; }'
     },
     {
       'name': 'sm:focus:text-blue-darker',
       'description': ':focus { color: #1c3d5a; }'
     },
     {
       'name': 'sm:focus:text-blue-dark',
       'description': ':focus { color: #2779bd; }'
     },
     {
       'name': 'sm:focus:text-blue',
       'description': ':focus { color: #3490dc; }'
     },
     {
       'name': 'sm:focus:text-blue-light',
       'description': ':focus { color: #6cb2eb; }'
     },
     {
       'name': 'sm:focus:text-blue-lighter',
       'description': ':focus { color: #bcdefa; }'
     },
     {
       'name': 'sm:focus:text-blue-lightest',
       'description': ':focus { color: #eff8ff; }'
     },
     {
       'name': 'sm:focus:text-indigo-darkest',
       'description': ':focus { color: #191e38; }'
     },
     {
       'name': 'sm:focus:text-indigo-darker',
       'description': ':focus { color: #2f365f; }'
     },
     {
       'name': 'sm:focus:text-indigo-dark',
       'description': ':focus { color: #5661b3; }'
     },
     {
       'name': 'sm:focus:text-indigo',
       'description': ':focus { color: #6574cd; }'
     },
     {
       'name': 'sm:focus:text-indigo-light',
       'description': ':focus { color: #7886d7; }'
     },
     {
       'name': 'sm:focus:text-indigo-lighter',
       'description': ':focus { color: #b2b7ff; }'
     },
     {
       'name': 'sm:focus:text-indigo-lightest',
       'description': ':focus { color: #e6e8ff; }'
     },
     {
       'name': 'sm:focus:text-purple-darkest',
       'description': ':focus { color: #21183c; }'
     },
     {
       'name': 'sm:focus:text-purple-darker',
       'description': ':focus { color: #382b5f; }'
     },
     {
       'name': 'sm:focus:text-purple-dark',
       'description': ':focus { color: #794acf; }'
     },
     {
       'name': 'sm:focus:text-purple',
       'description': ':focus { color: #9561e2; }'
     },
     {
       'name': 'sm:focus:text-purple-light',
       'description': ':focus { color: #a779e9; }'
     },
     {
       'name': 'sm:focus:text-purple-lighter',
       'description': ':focus { color: #d6bbfc; }'
     },
     {
       'name': 'sm:focus:text-purple-lightest',
       'description': ':focus { color: #f3ebff; }'
     },
     {
       'name': 'sm:focus:text-pink-darkest',
       'description': ':focus { color: #451225; }'
     },
     {
       'name': 'sm:focus:text-pink-darker',
       'description': ':focus { color: #6f213f; }'
     },
     {
       'name': 'sm:focus:text-pink-dark',
       'description': ':focus { color: #eb5286; }'
     },
     {
       'name': 'sm:focus:text-pink',
       'description': ':focus { color: #f66d9b; }'
     },
     {
       'name': 'sm:focus:text-pink-light',
       'description': ':focus { color: #fa7ea8; }'
     },
     {
       'name': 'sm:focus:text-pink-lighter',
       'description': ':focus { color: #ffbbca; }'
     },
     {
       'name': 'sm:focus:text-pink-lightest',
       'description': ':focus { color: #ffebef; }'
     },
     {
       'name': 'sm:text-xs',
       'description': 'font-size: .75rem;'
     },
     {
       'name': 'sm:text-sm',
       'description': 'font-size: .875rem;'
     },
     {
       'name': 'sm:text-base',
       'description': 'font-size: 1rem;'
     },
     {
       'name': 'sm:text-lg',
       'description': 'font-size: 1.125rem;'
     },
     {
       'name': 'sm:text-xl',
       'description': 'font-size: 1.25rem;'
     },
     {
       'name': 'sm:text-2xl',
       'description': 'font-size: 1.5rem;'
     },
     {
       'name': 'sm:text-3xl',
       'description': 'font-size: 1.875rem;'
     },
     {
       'name': 'sm:text-4xl',
       'description': 'font-size: 2.25rem;'
     },
     {
       'name': 'sm:text-5xl',
       'description': 'font-size: 3rem;'
     },
     {
       'name': 'sm:italic',
       'description': 'font-style: italic;'
     },
     {
       'name': 'sm:roman',
       'description': 'font-style: normal;'
     },
     {
       'name': 'sm:uppercase',
       'description': 'text-transform: uppercase;'
     },
     {
       'name': 'sm:lowercase',
       'description': 'text-transform: lowercase;'
     },
     {
       'name': 'sm:capitalize',
       'description': 'text-transform: capitalize;'
     },
     {
       'name': 'sm:normal-case',
       'description': 'text-transform: none;'
     },
     {
       'name': 'sm:underline',
       'description': 'text-decoration: underline;'
     },
     {
       'name': 'sm:line-through',
       'description': 'text-decoration: line-through;'
     },
     {
       'name': 'sm:no-underline',
       'description': 'text-decoration: none;'
     },
     {
       'name': 'sm:antialiased',
       'description': '-webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;'
     },
     {
       'name': 'sm:subpixel-antialiased',
       'description': '-webkit-font-smoothing: auto; -moz-osx-font-smoothing: auto;'
     },
     {
       'name': 'sm:hover:italic',
       'description': ':hover { font-style: italic; }'
     },
     {
       'name': 'sm:hover:roman',
       'description': ':hover { font-style: normal; }'
     },
     {
       'name': 'sm:hover:uppercase',
       'description': ':hover { text-transform: uppercase; }'
     },
     {
       'name': 'sm:hover:lowercase',
       'description': ':hover { text-transform: lowercase; }'
     },
     {
       'name': 'sm:hover:capitalize',
       'description': ':hover { text-transform: capitalize; }'
     },
     {
       'name': 'sm:hover:normal-case',
       'description': ':hover { text-transform: none; }'
     },
     {
       'name': 'sm:hover:underline',
       'description': ':hover { text-decoration: underline; }'
     },
     {
       'name': 'sm:hover:line-through',
       'description': ':hover { text-decoration: line-through; }'
     },
     {
       'name': 'sm:hover:no-underline',
       'description': ':hover { text-decoration: none; }'
     },
     {
       'name': 'sm:hover:antialiased',
       'description': ':hover { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }'
     },
     {
       'name': 'sm:hover:subpixel-antialiased',
       'description': ':hover { -webkit-font-smoothing: auto; -moz-osx-font-smoothing: auto; }'
     },
     {
       'name': 'sm:focus:italic',
       'description': ':focus { font-style: italic; }'
     },
     {
       'name': 'sm:focus:roman',
       'description': ':focus { font-style: normal; }'
     },
     {
       'name': 'sm:focus:uppercase',
       'description': ':focus { text-transform: uppercase; }'
     },
     {
       'name': 'sm:focus:lowercase',
       'description': ':focus { text-transform: lowercase; }'
     },
     {
       'name': 'sm:focus:capitalize',
       'description': ':focus { text-transform: capitalize; }'
     },
     {
       'name': 'sm:focus:normal-case',
       'description': ':focus { text-transform: none; }'
     },
     {
       'name': 'sm:focus:underline',
       'description': ':focus { text-decoration: underline; }'
     },
     {
       'name': 'sm:focus:line-through',
       'description': ':focus { text-decoration: line-through; }'
     },
     {
       'name': 'sm:focus:no-underline',
       'description': ':focus { text-decoration: none; }'
     },
     {
       'name': 'sm:focus:antialiased',
       'description': ':focus { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }'
     },
     {
       'name': 'sm:focus:subpixel-antialiased',
       'description': ':focus { -webkit-font-smoothing: auto; -moz-osx-font-smoothing: auto; }'
     },
     {
       'name': 'sm:tracking-tight',
       'description': 'letter-spacing: -0.05em;'
     },
     {
       'name': 'sm:tracking-normal',
       'description': 'letter-spacing: 0;'
     },
     {
       'name': 'sm:tracking-wide',
       'description': 'letter-spacing: .05em;'
     },
     {
       'name': 'sm:select-none',
       'description': 'user-select: none;'
     },
     {
       'name': 'sm:select-text',
       'description': 'user-select: text;'
     },
     {
       'name': 'sm:align-baseline',
       'description': 'vertical-align: baseline;'
     },
     {
       'name': 'sm:align-top',
       'description': 'vertical-align: top;'
     },
     {
       'name': 'sm:align-middle',
       'description': 'vertical-align: middle;'
     },
     {
       'name': 'sm:align-bottom',
       'description': 'vertical-align: bottom;'
     },
     {
       'name': 'sm:align-text-top',
       'description': 'vertical-align: text-top;'
     },
     {
       'name': 'sm:align-text-bottom',
       'description': 'vertical-align: text-bottom;'
     },
     {
       'name': 'sm:visible',
       'description': 'visibility: visible;'
     },
     {
       'name': 'sm:invisible',
       'description': 'visibility: hidden;'
     },
     {
       'name': 'sm:whitespace-normal',
       'description': 'white-space: normal;'
     },
     {
       'name': 'sm:whitespace-no-wrap',
       'description': 'white-space: nowrap;'
     },
     {
       'name': 'sm:whitespace-pre',
       'description': 'white-space: pre;'
     },
     {
       'name': 'sm:whitespace-pre-line',
       'description': 'white-space: pre-line;'
     },
     {
       'name': 'sm:whitespace-pre-wrap',
       'description': 'white-space: pre-wrap;'
     },
     {
       'name': 'sm:break-words',
       'description': 'word-wrap: break-word;'
     },
     {
       'name': 'sm:break-normal',
       'description': 'word-wrap: normal;'
     },
     {
       'name': 'sm:truncate',
       'description': 'overflow: hidden; text-overflow: ellipsis; white-space: nowrap;'
     },
     {
       'name': 'sm:w-1',
       'description': 'width: .25rem;'
     },
     {
       'name': 'sm:w-2',
       'description': 'width: .5rem;'
     },
     {
       'name': 'sm:w-3',
       'description': 'width: .75rem;'
     },
     {
       'name': 'sm:w-4',
       'description': 'width: 1rem;'
     },
     {
       'name': 'sm:w-5',
       'description': 'width: 1.25rem;'
     },
     {
       'name': 'sm:w-6',
       'description': 'width: 1.5rem;'
     },
     {
       'name': 'sm:w-8',
       'description': 'width: 2rem;'
     },
     {
       'name': 'sm:w-10',
       'description': 'width: 2.5rem;'
     },
     {
       'name': 'sm:w-12',
       'description': 'width: 3rem;'
     },
     {
       'name': 'sm:w-16',
       'description': 'width: 4rem;'
     },
     {
       'name': 'sm:w-24',
       'description': 'width: 6rem;'
     },
     {
       'name': 'sm:w-32',
       'description': 'width: 8rem;'
     },
     {
       'name': 'sm:w-48',
       'description': 'width: 12rem;'
     },
     {
       'name': 'sm:w-64',
       'description': 'width: 16rem;'
     },
     {
       'name': 'sm:w-auto',
       'description': 'width: auto;'
     },
     {
       'name': 'sm:w-px',
       'description': 'width: 1px;'
     },
     {
       'name': 'sm:w-1/2',
       'description': 'width: 50%;'
     },
     {
       'name': 'sm:w-1/3',
       'description': 'width: 33.33333%;'
     },
     {
       'name': 'sm:w-2/3',
       'description': 'width: 66.66667%;'
     },
     {
       'name': 'sm:w-1/4',
       'description': 'width: 25%;'
     },
     {
       'name': 'sm:w-3/4',
       'description': 'width: 75%;'
     },
     {
       'name': 'sm:w-1/5',
       'description': 'width: 20%;'
     },
     {
       'name': 'sm:w-2/5',
       'description': 'width: 40%;'
     },
     {
       'name': 'sm:w-3/5',
       'description': 'width: 60%;'
     },
     {
       'name': 'sm:w-4/5',
       'description': 'width: 80%;'
     },
     {
       'name': 'sm:w-1/6',
       'description': 'width: 16.66667%;'
     },
     {
       'name': 'sm:w-5/6',
       'description': 'width: 83.33333%;'
     },
     {
       'name': 'sm:w-full',
       'description': 'width: 100%;'
     },
     {
       'name': 'sm:w-screen',
       'description': 'width: 100vw;'
     },
     {
       'name': 'sm:z-0',
       'description': 'z-index: 0;'
     },
     {
       'name': 'sm:z-10',
       'description': 'z-index: 10;'
     },
     {
       'name': 'sm:z-20',
       'description': 'z-index: 20;'
     },
     {
       'name': 'sm:z-30',
       'description': 'z-index: 30;'
     },
     {
       'name': 'sm:z-40',
       'description': 'z-index: 40;'
     },
     {
       'name': 'sm:z-50',
       'description': 'z-index: 50;'
     },
     {
       'name': 'sm:z-auto',
       'description': 'z-index: auto;'
     },
     {
       'name': 'md:list-reset',
       'description': 'list-style: none; padding: 0;'
     },
     {
       'name': 'md:appearance-none',
       'description': 'appearance: none;'
     },
     {
       'name': 'md:bg-fixed',
       'description': 'background-attachment: fixed;'
     },
     {
       'name': 'md:bg-local',
       'description': 'background-attachment: local;'
     },
     {
       'name': 'md:bg-scroll',
       'description': 'background-attachment: scroll;'
     },
     {
       'name': 'md:bg-transparent',
       'description': 'background-color: transparent;'
     },
     {
       'name': 'md:bg-black',
       'description': 'background-color: #22292f;'
     },
     {
       'name': 'md:bg-grey-darkest',
       'description': 'background-color: #3d4852;'
     },
     {
       'name': 'md:bg-grey-darker',
       'description': 'background-color: #606f7b;'
     },
     {
       'name': 'md:bg-grey-dark',
       'description': 'background-color: #8795a1;'
     },
     {
       'name': 'md:bg-grey',
       'description': 'background-color: #b8c2cc;'
     },
     {
       'name': 'md:bg-grey-light',
       'description': 'background-color: #dae1e7;'
     },
     {
       'name': 'md:bg-grey-lighter',
       'description': 'background-color: #f1f5f8;'
     },
     {
       'name': 'md:bg-grey-lightest',
       'description': 'background-color: #f8fafc;'
     },
     {
       'name': 'md:bg-white',
       'description': 'background-color: #fff;'
     },
     {
       'name': 'md:bg-red-darkest',
       'description': 'background-color: #3b0d0c;'
     },
     {
       'name': 'md:bg-red-darker',
       'description': 'background-color: #621b18;'
     },
     {
       'name': 'md:bg-red-dark',
       'description': 'background-color: #cc1f1a;'
     },
     {
       'name': 'md:bg-red',
       'description': 'background-color: #e3342f;'
     },
     {
       'name': 'md:bg-red-light',
       'description': 'background-color: #ef5753;'
     },
     {
       'name': 'md:bg-red-lighter',
       'description': 'background-color: #f9acaa;'
     },
     {
       'name': 'md:bg-red-lightest',
       'description': 'background-color: #fcebea;'
     },
     {
       'name': 'md:bg-orange-darkest',
       'description': 'background-color: #462a16;'
     },
     {
       'name': 'md:bg-orange-darker',
       'description': 'background-color: #613b1f;'
     },
     {
       'name': 'md:bg-orange-dark',
       'description': 'background-color: #de751f;'
     },
     {
       'name': 'md:bg-orange',
       'description': 'background-color: #f6993f;'
     },
     {
       'name': 'md:bg-orange-light',
       'description': 'background-color: #faad63;'
     },
     {
       'name': 'md:bg-orange-lighter',
       'description': 'background-color: #fcd9b6;'
     },
     {
       'name': 'md:bg-orange-lightest',
       'description': 'background-color: #fff5eb;'
     },
     {
       'name': 'md:bg-yellow-darkest',
       'description': 'background-color: #453411;'
     },
     {
       'name': 'md:bg-yellow-darker',
       'description': 'background-color: #684f1d;'
     },
     {
       'name': 'md:bg-yellow-dark',
       'description': 'background-color: #f2d024;'
     },
     {
       'name': 'md:bg-yellow',
       'description': 'background-color: #ffed4a;'
     },
     {
       'name': 'md:bg-yellow-light',
       'description': 'background-color: #fff382;'
     },
     {
       'name': 'md:bg-yellow-lighter',
       'description': 'background-color: #fff9c2;'
     },
     {
       'name': 'md:bg-yellow-lightest',
       'description': 'background-color: #fcfbeb;'
     },
     {
       'name': 'md:bg-green-darkest',
       'description': 'background-color: #0f2f21;'
     },
     {
       'name': 'md:bg-green-darker',
       'description': 'background-color: #1a4731;'
     },
     {
       'name': 'md:bg-green-dark',
       'description': 'background-color: #1f9d55;'
     },
     {
       'name': 'md:bg-green',
       'description': 'background-color: #38c172;'
     },
     {
       'name': 'md:bg-green-light',
       'description': 'background-color: #51d88a;'
     },
     {
       'name': 'md:bg-green-lighter',
       'description': 'background-color: #a2f5bf;'
     },
     {
       'name': 'md:bg-green-lightest',
       'description': 'background-color: #e3fcec;'
     },
     {
       'name': 'md:bg-teal-darkest',
       'description': 'background-color: #0d3331;'
     },
     {
       'name': 'md:bg-teal-darker',
       'description': 'background-color: #20504f;'
     },
     {
       'name': 'md:bg-teal-dark',
       'description': 'background-color: #38a89d;'
     },
     {
       'name': 'md:bg-teal',
       'description': 'background-color: #4dc0b5;'
     },
     {
       'name': 'md:bg-teal-light',
       'description': 'background-color: #64d5ca;'
     },
     {
       'name': 'md:bg-teal-lighter',
       'description': 'background-color: #a0f0ed;'
     },
     {
       'name': 'md:bg-teal-lightest',
       'description': 'background-color: #e8fffe;'
     },
     {
       'name': 'md:bg-blue-darkest',
       'description': 'background-color: #12283a;'
     },
     {
       'name': 'md:bg-blue-darker',
       'description': 'background-color: #1c3d5a;'
     },
     {
       'name': 'md:bg-blue-dark',
       'description': 'background-color: #2779bd;'
     },
     {
       'name': 'md:bg-blue',
       'description': 'background-color: #3490dc;'
     },
     {
       'name': 'md:bg-blue-light',
       'description': 'background-color: #6cb2eb;'
     },
     {
       'name': 'md:bg-blue-lighter',
       'description': 'background-color: #bcdefa;'
     },
     {
       'name': 'md:bg-blue-lightest',
       'description': 'background-color: #eff8ff;'
     },
     {
       'name': 'md:bg-indigo-darkest',
       'description': 'background-color: #191e38;'
     },
     {
       'name': 'md:bg-indigo-darker',
       'description': 'background-color: #2f365f;'
     },
     {
       'name': 'md:bg-indigo-dark',
       'description': 'background-color: #5661b3;'
     },
     {
       'name': 'md:bg-indigo',
       'description': 'background-color: #6574cd;'
     },
     {
       'name': 'md:bg-indigo-light',
       'description': 'background-color: #7886d7;'
     },
     {
       'name': 'md:bg-indigo-lighter',
       'description': 'background-color: #b2b7ff;'
     },
     {
       'name': 'md:bg-indigo-lightest',
       'description': 'background-color: #e6e8ff;'
     },
     {
       'name': 'md:bg-purple-darkest',
       'description': 'background-color: #21183c;'
     },
     {
       'name': 'md:bg-purple-darker',
       'description': 'background-color: #382b5f;'
     },
     {
       'name': 'md:bg-purple-dark',
       'description': 'background-color: #794acf;'
     },
     {
       'name': 'md:bg-purple',
       'description': 'background-color: #9561e2;'
     },
     {
       'name': 'md:bg-purple-light',
       'description': 'background-color: #a779e9;'
     },
     {
       'name': 'md:bg-purple-lighter',
       'description': 'background-color: #d6bbfc;'
     },
     {
       'name': 'md:bg-purple-lightest',
       'description': 'background-color: #f3ebff;'
     },
     {
       'name': 'md:bg-pink-darkest',
       'description': 'background-color: #451225;'
     },
     {
       'name': 'md:bg-pink-darker',
       'description': 'background-color: #6f213f;'
     },
     {
       'name': 'md:bg-pink-dark',
       'description': 'background-color: #eb5286;'
     },
     {
       'name': 'md:bg-pink',
       'description': 'background-color: #f66d9b;'
     },
     {
       'name': 'md:bg-pink-light',
       'description': 'background-color: #fa7ea8;'
     },
     {
       'name': 'md:bg-pink-lighter',
       'description': 'background-color: #ffbbca;'
     },
     {
       'name': 'md:bg-pink-lightest',
       'description': 'background-color: #ffebef;'
     },
     {
       'name': 'md:hover:bg-transparent',
       'description': ':hover { background-color: transparent; }'
     },
     {
       'name': 'md:hover:bg-black',
       'description': ':hover { background-color: #22292f; }'
     },
     {
       'name': 'md:hover:bg-grey-darkest',
       'description': ':hover { background-color: #3d4852; }'
     },
     {
       'name': 'md:hover:bg-grey-darker',
       'description': ':hover { background-color: #606f7b; }'
     },
     {
       'name': 'md:hover:bg-grey-dark',
       'description': ':hover { background-color: #8795a1; }'
     },
     {
       'name': 'md:hover:bg-grey',
       'description': ':hover { background-color: #b8c2cc; }'
     },
     {
       'name': 'md:hover:bg-grey-light',
       'description': ':hover { background-color: #dae1e7; }'
     },
     {
       'name': 'md:hover:bg-grey-lighter',
       'description': ':hover { background-color: #f1f5f8; }'
     },
     {
       'name': 'md:hover:bg-grey-lightest',
       'description': ':hover { background-color: #f8fafc; }'
     },
     {
       'name': 'md:hover:bg-white',
       'description': ':hover { background-color: #fff; }'
     },
     {
       'name': 'md:hover:bg-red-darkest',
       'description': ':hover { background-color: #3b0d0c; }'
     },
     {
       'name': 'md:hover:bg-red-darker',
       'description': ':hover { background-color: #621b18; }'
     },
     {
       'name': 'md:hover:bg-red-dark',
       'description': ':hover { background-color: #cc1f1a; }'
     },
     {
       'name': 'md:hover:bg-red',
       'description': ':hover { background-color: #e3342f; }'
     },
     {
       'name': 'md:hover:bg-red-light',
       'description': ':hover { background-color: #ef5753; }'
     },
     {
       'name': 'md:hover:bg-red-lighter',
       'description': ':hover { background-color: #f9acaa; }'
     },
     {
       'name': 'md:hover:bg-red-lightest',
       'description': ':hover { background-color: #fcebea; }'
     },
     {
       'name': 'md:hover:bg-orange-darkest',
       'description': ':hover { background-color: #462a16; }'
     },
     {
       'name': 'md:hover:bg-orange-darker',
       'description': ':hover { background-color: #613b1f; }'
     },
     {
       'name': 'md:hover:bg-orange-dark',
       'description': ':hover { background-color: #de751f; }'
     },
     {
       'name': 'md:hover:bg-orange',
       'description': ':hover { background-color: #f6993f; }'
     },
     {
       'name': 'md:hover:bg-orange-light',
       'description': ':hover { background-color: #faad63; }'
     },
     {
       'name': 'md:hover:bg-orange-lighter',
       'description': ':hover { background-color: #fcd9b6; }'
     },
     {
       'name': 'md:hover:bg-orange-lightest',
       'description': ':hover { background-color: #fff5eb; }'
     },
     {
       'name': 'md:hover:bg-yellow-darkest',
       'description': ':hover { background-color: #453411; }'
     },
     {
       'name': 'md:hover:bg-yellow-darker',
       'description': ':hover { background-color: #684f1d; }'
     },
     {
       'name': 'md:hover:bg-yellow-dark',
       'description': ':hover { background-color: #f2d024; }'
     },
     {
       'name': 'md:hover:bg-yellow',
       'description': ':hover { background-color: #ffed4a; }'
     },
     {
       'name': 'md:hover:bg-yellow-light',
       'description': ':hover { background-color: #fff382; }'
     },
     {
       'name': 'md:hover:bg-yellow-lighter',
       'description': ':hover { background-color: #fff9c2; }'
     },
     {
       'name': 'md:hover:bg-yellow-lightest',
       'description': ':hover { background-color: #fcfbeb; }'
     },
     {
       'name': 'md:hover:bg-green-darkest',
       'description': ':hover { background-color: #0f2f21; }'
     },
     {
       'name': 'md:hover:bg-green-darker',
       'description': ':hover { background-color: #1a4731; }'
     },
     {
       'name': 'md:hover:bg-green-dark',
       'description': ':hover { background-color: #1f9d55; }'
     },
     {
       'name': 'md:hover:bg-green',
       'description': ':hover { background-color: #38c172; }'
     },
     {
       'name': 'md:hover:bg-green-light',
       'description': ':hover { background-color: #51d88a; }'
     },
     {
       'name': 'md:hover:bg-green-lighter',
       'description': ':hover { background-color: #a2f5bf; }'
     },
     {
       'name': 'md:hover:bg-green-lightest',
       'description': ':hover { background-color: #e3fcec; }'
     },
     {
       'name': 'md:hover:bg-teal-darkest',
       'description': ':hover { background-color: #0d3331; }'
     },
     {
       'name': 'md:hover:bg-teal-darker',
       'description': ':hover { background-color: #20504f; }'
     },
     {
       'name': 'md:hover:bg-teal-dark',
       'description': ':hover { background-color: #38a89d; }'
     },
     {
       'name': 'md:hover:bg-teal',
       'description': ':hover { background-color: #4dc0b5; }'
     },
     {
       'name': 'md:hover:bg-teal-light',
       'description': ':hover { background-color: #64d5ca; }'
     },
     {
       'name': 'md:hover:bg-teal-lighter',
       'description': ':hover { background-color: #a0f0ed; }'
     },
     {
       'name': 'md:hover:bg-teal-lightest',
       'description': ':hover { background-color: #e8fffe; }'
     },
     {
       'name': 'md:hover:bg-blue-darkest',
       'description': ':hover { background-color: #12283a; }'
     },
     {
       'name': 'md:hover:bg-blue-darker',
       'description': ':hover { background-color: #1c3d5a; }'
     },
     {
       'name': 'md:hover:bg-blue-dark',
       'description': ':hover { background-color: #2779bd; }'
     },
     {
       'name': 'md:hover:bg-blue',
       'description': ':hover { background-color: #3490dc; }'
     },
     {
       'name': 'md:hover:bg-blue-light',
       'description': ':hover { background-color: #6cb2eb; }'
     },
     {
       'name': 'md:hover:bg-blue-lighter',
       'description': ':hover { background-color: #bcdefa; }'
     },
     {
       'name': 'md:hover:bg-blue-lightest',
       'description': ':hover { background-color: #eff8ff; }'
     },
     {
       'name': 'md:hover:bg-indigo-darkest',
       'description': ':hover { background-color: #191e38; }'
     },
     {
       'name': 'md:hover:bg-indigo-darker',
       'description': ':hover { background-color: #2f365f; }'
     },
     {
       'name': 'md:hover:bg-indigo-dark',
       'description': ':hover { background-color: #5661b3; }'
     },
     {
       'name': 'md:hover:bg-indigo',
       'description': ':hover { background-color: #6574cd; }'
     },
     {
       'name': 'md:hover:bg-indigo-light',
       'description': ':hover { background-color: #7886d7; }'
     },
     {
       'name': 'md:hover:bg-indigo-lighter',
       'description': ':hover { background-color: #b2b7ff; }'
     },
     {
       'name': 'md:hover:bg-indigo-lightest',
       'description': ':hover { background-color: #e6e8ff; }'
     },
     {
       'name': 'md:hover:bg-purple-darkest',
       'description': ':hover { background-color: #21183c; }'
     },
     {
       'name': 'md:hover:bg-purple-darker',
       'description': ':hover { background-color: #382b5f; }'
     },
     {
       'name': 'md:hover:bg-purple-dark',
       'description': ':hover { background-color: #794acf; }'
     },
     {
       'name': 'md:hover:bg-purple',
       'description': ':hover { background-color: #9561e2; }'
     },
     {
       'name': 'md:hover:bg-purple-light',
       'description': ':hover { background-color: #a779e9; }'
     },
     {
       'name': 'md:hover:bg-purple-lighter',
       'description': ':hover { background-color: #d6bbfc; }'
     },
     {
       'name': 'md:hover:bg-purple-lightest',
       'description': ':hover { background-color: #f3ebff; }'
     },
     {
       'name': 'md:hover:bg-pink-darkest',
       'description': ':hover { background-color: #451225; }'
     },
     {
       'name': 'md:hover:bg-pink-darker',
       'description': ':hover { background-color: #6f213f; }'
     },
     {
       'name': 'md:hover:bg-pink-dark',
       'description': ':hover { background-color: #eb5286; }'
     },
     {
       'name': 'md:hover:bg-pink',
       'description': ':hover { background-color: #f66d9b; }'
     },
     {
       'name': 'md:hover:bg-pink-light',
       'description': ':hover { background-color: #fa7ea8; }'
     },
     {
       'name': 'md:hover:bg-pink-lighter',
       'description': ':hover { background-color: #ffbbca; }'
     },
     {
       'name': 'md:hover:bg-pink-lightest',
       'description': ':hover { background-color: #ffebef; }'
     },
     {
       'name': 'md:focus:bg-transparent',
       'description': ':focus { background-color: transparent; }'
     },
     {
       'name': 'md:focus:bg-black',
       'description': ':focus { background-color: #22292f; }'
     },
     {
       'name': 'md:focus:bg-grey-darkest',
       'description': ':focus { background-color: #3d4852; }'
     },
     {
       'name': 'md:focus:bg-grey-darker',
       'description': ':focus { background-color: #606f7b; }'
     },
     {
       'name': 'md:focus:bg-grey-dark',
       'description': ':focus { background-color: #8795a1; }'
     },
     {
       'name': 'md:focus:bg-grey',
       'description': ':focus { background-color: #b8c2cc; }'
     },
     {
       'name': 'md:focus:bg-grey-light',
       'description': ':focus { background-color: #dae1e7; }'
     },
     {
       'name': 'md:focus:bg-grey-lighter',
       'description': ':focus { background-color: #f1f5f8; }'
     },
     {
       'name': 'md:focus:bg-grey-lightest',
       'description': ':focus { background-color: #f8fafc; }'
     },
     {
       'name': 'md:focus:bg-white',
       'description': ':focus { background-color: #fff; }'
     },
     {
       'name': 'md:focus:bg-red-darkest',
       'description': ':focus { background-color: #3b0d0c; }'
     },
     {
       'name': 'md:focus:bg-red-darker',
       'description': ':focus { background-color: #621b18; }'
     },
     {
       'name': 'md:focus:bg-red-dark',
       'description': ':focus { background-color: #cc1f1a; }'
     },
     {
       'name': 'md:focus:bg-red',
       'description': ':focus { background-color: #e3342f; }'
     },
     {
       'name': 'md:focus:bg-red-light',
       'description': ':focus { background-color: #ef5753; }'
     },
     {
       'name': 'md:focus:bg-red-lighter',
       'description': ':focus { background-color: #f9acaa; }'
     },
     {
       'name': 'md:focus:bg-red-lightest',
       'description': ':focus { background-color: #fcebea; }'
     },
     {
       'name': 'md:focus:bg-orange-darkest',
       'description': ':focus { background-color: #462a16; }'
     },
     {
       'name': 'md:focus:bg-orange-darker',
       'description': ':focus { background-color: #613b1f; }'
     },
     {
       'name': 'md:focus:bg-orange-dark',
       'description': ':focus { background-color: #de751f; }'
     },
     {
       'name': 'md:focus:bg-orange',
       'description': ':focus { background-color: #f6993f; }'
     },
     {
       'name': 'md:focus:bg-orange-light',
       'description': ':focus { background-color: #faad63; }'
     },
     {
       'name': 'md:focus:bg-orange-lighter',
       'description': ':focus { background-color: #fcd9b6; }'
     },
     {
       'name': 'md:focus:bg-orange-lightest',
       'description': ':focus { background-color: #fff5eb; }'
     },
     {
       'name': 'md:focus:bg-yellow-darkest',
       'description': ':focus { background-color: #453411; }'
     },
     {
       'name': 'md:focus:bg-yellow-darker',
       'description': ':focus { background-color: #684f1d; }'
     },
     {
       'name': 'md:focus:bg-yellow-dark',
       'description': ':focus { background-color: #f2d024; }'
     },
     {
       'name': 'md:focus:bg-yellow',
       'description': ':focus { background-color: #ffed4a; }'
     },
     {
       'name': 'md:focus:bg-yellow-light',
       'description': ':focus { background-color: #fff382; }'
     },
     {
       'name': 'md:focus:bg-yellow-lighter',
       'description': ':focus { background-color: #fff9c2; }'
     },
     {
       'name': 'md:focus:bg-yellow-lightest',
       'description': ':focus { background-color: #fcfbeb; }'
     },
     {
       'name': 'md:focus:bg-green-darkest',
       'description': ':focus { background-color: #0f2f21; }'
     },
     {
       'name': 'md:focus:bg-green-darker',
       'description': ':focus { background-color: #1a4731; }'
     },
     {
       'name': 'md:focus:bg-green-dark',
       'description': ':focus { background-color: #1f9d55; }'
     },
     {
       'name': 'md:focus:bg-green',
       'description': ':focus { background-color: #38c172; }'
     },
     {
       'name': 'md:focus:bg-green-light',
       'description': ':focus { background-color: #51d88a; }'
     },
     {
       'name': 'md:focus:bg-green-lighter',
       'description': ':focus { background-color: #a2f5bf; }'
     },
     {
       'name': 'md:focus:bg-green-lightest',
       'description': ':focus { background-color: #e3fcec; }'
     },
     {
       'name': 'md:focus:bg-teal-darkest',
       'description': ':focus { background-color: #0d3331; }'
     },
     {
       'name': 'md:focus:bg-teal-darker',
       'description': ':focus { background-color: #20504f; }'
     },
     {
       'name': 'md:focus:bg-teal-dark',
       'description': ':focus { background-color: #38a89d; }'
     },
     {
       'name': 'md:focus:bg-teal',
       'description': ':focus { background-color: #4dc0b5; }'
     },
     {
       'name': 'md:focus:bg-teal-light',
       'description': ':focus { background-color: #64d5ca; }'
     },
     {
       'name': 'md:focus:bg-teal-lighter',
       'description': ':focus { background-color: #a0f0ed; }'
     },
     {
       'name': 'md:focus:bg-teal-lightest',
       'description': ':focus { background-color: #e8fffe; }'
     },
     {
       'name': 'md:focus:bg-blue-darkest',
       'description': ':focus { background-color: #12283a; }'
     },
     {
       'name': 'md:focus:bg-blue-darker',
       'description': ':focus { background-color: #1c3d5a; }'
     },
     {
       'name': 'md:focus:bg-blue-dark',
       'description': ':focus { background-color: #2779bd; }'
     },
     {
       'name': 'md:focus:bg-blue',
       'description': ':focus { background-color: #3490dc; }'
     },
     {
       'name': 'md:focus:bg-blue-light',
       'description': ':focus { background-color: #6cb2eb; }'
     },
     {
       'name': 'md:focus:bg-blue-lighter',
       'description': ':focus { background-color: #bcdefa; }'
     },
     {
       'name': 'md:focus:bg-blue-lightest',
       'description': ':focus { background-color: #eff8ff; }'
     },
     {
       'name': 'md:focus:bg-indigo-darkest',
       'description': ':focus { background-color: #191e38; }'
     },
     {
       'name': 'md:focus:bg-indigo-darker',
       'description': ':focus { background-color: #2f365f; }'
     },
     {
       'name': 'md:focus:bg-indigo-dark',
       'description': ':focus { background-color: #5661b3; }'
     },
     {
       'name': 'md:focus:bg-indigo',
       'description': ':focus { background-color: #6574cd; }'
     },
     {
       'name': 'md:focus:bg-indigo-light',
       'description': ':focus { background-color: #7886d7; }'
     },
     {
       'name': 'md:focus:bg-indigo-lighter',
       'description': ':focus { background-color: #b2b7ff; }'
     },
     {
       'name': 'md:focus:bg-indigo-lightest',
       'description': ':focus { background-color: #e6e8ff; }'
     },
     {
       'name': 'md:focus:bg-purple-darkest',
       'description': ':focus { background-color: #21183c; }'
     },
     {
       'name': 'md:focus:bg-purple-darker',
       'description': ':focus { background-color: #382b5f; }'
     },
     {
       'name': 'md:focus:bg-purple-dark',
       'description': ':focus { background-color: #794acf; }'
     },
     {
       'name': 'md:focus:bg-purple',
       'description': ':focus { background-color: #9561e2; }'
     },
     {
       'name': 'md:focus:bg-purple-light',
       'description': ':focus { background-color: #a779e9; }'
     },
     {
       'name': 'md:focus:bg-purple-lighter',
       'description': ':focus { background-color: #d6bbfc; }'
     },
     {
       'name': 'md:focus:bg-purple-lightest',
       'description': ':focus { background-color: #f3ebff; }'
     },
     {
       'name': 'md:focus:bg-pink-darkest',
       'description': ':focus { background-color: #451225; }'
     },
     {
       'name': 'md:focus:bg-pink-darker',
       'description': ':focus { background-color: #6f213f; }'
     },
     {
       'name': 'md:focus:bg-pink-dark',
       'description': ':focus { background-color: #eb5286; }'
     },
     {
       'name': 'md:focus:bg-pink',
       'description': ':focus { background-color: #f66d9b; }'
     },
     {
       'name': 'md:focus:bg-pink-light',
       'description': ':focus { background-color: #fa7ea8; }'
     },
     {
       'name': 'md:focus:bg-pink-lighter',
       'description': ':focus { background-color: #ffbbca; }'
     },
     {
       'name': 'md:focus:bg-pink-lightest',
       'description': ':focus { background-color: #ffebef; }'
     },
     {
       'name': 'md:bg-bottom',
       'description': 'background-position: bottom;'
     },
     {
       'name': 'md:bg-center',
       'description': 'background-position: center;'
     },
     {
       'name': 'md:bg-left',
       'description': 'background-position: left;'
     },
     {
       'name': 'md:bg-left-bottom',
       'description': 'background-position: left bottom;'
     },
     {
       'name': 'md:bg-left-top',
       'description': 'background-position: left top;'
     },
     {
       'name': 'md:bg-right',
       'description': 'background-position: right;'
     },
     {
       'name': 'md:bg-right-bottom',
       'description': 'background-position: right bottom;'
     },
     {
       'name': 'md:bg-right-top',
       'description': 'background-position: right top;'
     },
     {
       'name': 'md:bg-top',
       'description': 'background-position: top;'
     },
     {
       'name': 'md:bg-repeat',
       'description': 'background-repeat: repeat;'
     },
     {
       'name': 'md:bg-no-repeat',
       'description': 'background-repeat: no-repeat;'
     },
     {
       'name': 'md:bg-repeat-x',
       'description': 'background-repeat: repeat-x;'
     },
     {
       'name': 'md:bg-repeat-y',
       'description': 'background-repeat: repeat-y;'
     },
     {
       'name': 'md:bg-auto',
       'description': 'background-size: auto;'
     },
     {
       'name': 'md:bg-cover',
       'description': 'background-size: cover;'
     },
     {
       'name': 'md:bg-contain',
       'description': 'background-size: contain;'
     },
     {
       'name': 'md:border-transparent',
       'description': 'border-color: transparent;'
     },
     {
       'name': 'md:border-black',
       'description': 'border-color: #22292f;'
     },
     {
       'name': 'md:border-grey-darkest',
       'description': 'border-color: #3d4852;'
     },
     {
       'name': 'md:border-grey-darker',
       'description': 'border-color: #606f7b;'
     },
     {
       'name': 'md:border-grey-dark',
       'description': 'border-color: #8795a1;'
     },
     {
       'name': 'md:border-grey',
       'description': 'border-color: #b8c2cc;'
     },
     {
       'name': 'md:border-grey-light',
       'description': 'border-color: #dae1e7;'
     },
     {
       'name': 'md:border-grey-lighter',
       'description': 'border-color: #f1f5f8;'
     },
     {
       'name': 'md:border-grey-lightest',
       'description': 'border-color: #f8fafc;'
     },
     {
       'name': 'md:border-white',
       'description': 'border-color: #fff;'
     },
     {
       'name': 'md:border-red-darkest',
       'description': 'border-color: #3b0d0c;'
     },
     {
       'name': 'md:border-red-darker',
       'description': 'border-color: #621b18;'
     },
     {
       'name': 'md:border-red-dark',
       'description': 'border-color: #cc1f1a;'
     },
     {
       'name': 'md:border-red',
       'description': 'border-color: #e3342f;'
     },
     {
       'name': 'md:border-red-light',
       'description': 'border-color: #ef5753;'
     },
     {
       'name': 'md:border-red-lighter',
       'description': 'border-color: #f9acaa;'
     },
     {
       'name': 'md:border-red-lightest',
       'description': 'border-color: #fcebea;'
     },
     {
       'name': 'md:border-orange-darkest',
       'description': 'border-color: #462a16;'
     },
     {
       'name': 'md:border-orange-darker',
       'description': 'border-color: #613b1f;'
     },
     {
       'name': 'md:border-orange-dark',
       'description': 'border-color: #de751f;'
     },
     {
       'name': 'md:border-orange',
       'description': 'border-color: #f6993f;'
     },
     {
       'name': 'md:border-orange-light',
       'description': 'border-color: #faad63;'
     },
     {
       'name': 'md:border-orange-lighter',
       'description': 'border-color: #fcd9b6;'
     },
     {
       'name': 'md:border-orange-lightest',
       'description': 'border-color: #fff5eb;'
     },
     {
       'name': 'md:border-yellow-darkest',
       'description': 'border-color: #453411;'
     },
     {
       'name': 'md:border-yellow-darker',
       'description': 'border-color: #684f1d;'
     },
     {
       'name': 'md:border-yellow-dark',
       'description': 'border-color: #f2d024;'
     },
     {
       'name': 'md:border-yellow',
       'description': 'border-color: #ffed4a;'
     },
     {
       'name': 'md:border-yellow-light',
       'description': 'border-color: #fff382;'
     },
     {
       'name': 'md:border-yellow-lighter',
       'description': 'border-color: #fff9c2;'
     },
     {
       'name': 'md:border-yellow-lightest',
       'description': 'border-color: #fcfbeb;'
     },
     {
       'name': 'md:border-green-darkest',
       'description': 'border-color: #0f2f21;'
     },
     {
       'name': 'md:border-green-darker',
       'description': 'border-color: #1a4731;'
     },
     {
       'name': 'md:border-green-dark',
       'description': 'border-color: #1f9d55;'
     },
     {
       'name': 'md:border-green',
       'description': 'border-color: #38c172;'
     },
     {
       'name': 'md:border-green-light',
       'description': 'border-color: #51d88a;'
     },
     {
       'name': 'md:border-green-lighter',
       'description': 'border-color: #a2f5bf;'
     },
     {
       'name': 'md:border-green-lightest',
       'description': 'border-color: #e3fcec;'
     },
     {
       'name': 'md:border-teal-darkest',
       'description': 'border-color: #0d3331;'
     },
     {
       'name': 'md:border-teal-darker',
       'description': 'border-color: #20504f;'
     },
     {
       'name': 'md:border-teal-dark',
       'description': 'border-color: #38a89d;'
     },
     {
       'name': 'md:border-teal',
       'description': 'border-color: #4dc0b5;'
     },
     {
       'name': 'md:border-teal-light',
       'description': 'border-color: #64d5ca;'
     },
     {
       'name': 'md:border-teal-lighter',
       'description': 'border-color: #a0f0ed;'
     },
     {
       'name': 'md:border-teal-lightest',
       'description': 'border-color: #e8fffe;'
     },
     {
       'name': 'md:border-blue-darkest',
       'description': 'border-color: #12283a;'
     },
     {
       'name': 'md:border-blue-darker',
       'description': 'border-color: #1c3d5a;'
     },
     {
       'name': 'md:border-blue-dark',
       'description': 'border-color: #2779bd;'
     },
     {
       'name': 'md:border-blue',
       'description': 'border-color: #3490dc;'
     },
     {
       'name': 'md:border-blue-light',
       'description': 'border-color: #6cb2eb;'
     },
     {
       'name': 'md:border-blue-lighter',
       'description': 'border-color: #bcdefa;'
     },
     {
       'name': 'md:border-blue-lightest',
       'description': 'border-color: #eff8ff;'
     },
     {
       'name': 'md:border-indigo-darkest',
       'description': 'border-color: #191e38;'
     },
     {
       'name': 'md:border-indigo-darker',
       'description': 'border-color: #2f365f;'
     },
     {
       'name': 'md:border-indigo-dark',
       'description': 'border-color: #5661b3;'
     },
     {
       'name': 'md:border-indigo',
       'description': 'border-color: #6574cd;'
     },
     {
       'name': 'md:border-indigo-light',
       'description': 'border-color: #7886d7;'
     },
     {
       'name': 'md:border-indigo-lighter',
       'description': 'border-color: #b2b7ff;'
     },
     {
       'name': 'md:border-indigo-lightest',
       'description': 'border-color: #e6e8ff;'
     },
     {
       'name': 'md:border-purple-darkest',
       'description': 'border-color: #21183c;'
     },
     {
       'name': 'md:border-purple-darker',
       'description': 'border-color: #382b5f;'
     },
     {
       'name': 'md:border-purple-dark',
       'description': 'border-color: #794acf;'
     },
     {
       'name': 'md:border-purple',
       'description': 'border-color: #9561e2;'
     },
     {
       'name': 'md:border-purple-light',
       'description': 'border-color: #a779e9;'
     },
     {
       'name': 'md:border-purple-lighter',
       'description': 'border-color: #d6bbfc;'
     },
     {
       'name': 'md:border-purple-lightest',
       'description': 'border-color: #f3ebff;'
     },
     {
       'name': 'md:border-pink-darkest',
       'description': 'border-color: #451225;'
     },
     {
       'name': 'md:border-pink-darker',
       'description': 'border-color: #6f213f;'
     },
     {
       'name': 'md:border-pink-dark',
       'description': 'border-color: #eb5286;'
     },
     {
       'name': 'md:border-pink',
       'description': 'border-color: #f66d9b;'
     },
     {
       'name': 'md:border-pink-light',
       'description': 'border-color: #fa7ea8;'
     },
     {
       'name': 'md:border-pink-lighter',
       'description': 'border-color: #ffbbca;'
     },
     {
       'name': 'md:border-pink-lightest',
       'description': 'border-color: #ffebef;'
     },
     {
       'name': 'md:hover:border-transparent',
       'description': ':hover { border-color: transparent; }'
     },
     {
       'name': 'md:hover:border-black',
       'description': ':hover { border-color: #22292f; }'
     },
     {
       'name': 'md:hover:border-grey-darkest',
       'description': ':hover { border-color: #3d4852; }'
     },
     {
       'name': 'md:hover:border-grey-darker',
       'description': ':hover { border-color: #606f7b; }'
     },
     {
       'name': 'md:hover:border-grey-dark',
       'description': ':hover { border-color: #8795a1; }'
     },
     {
       'name': 'md:hover:border-grey',
       'description': ':hover { border-color: #b8c2cc; }'
     },
     {
       'name': 'md:hover:border-grey-light',
       'description': ':hover { border-color: #dae1e7; }'
     },
     {
       'name': 'md:hover:border-grey-lighter',
       'description': ':hover { border-color: #f1f5f8; }'
     },
     {
       'name': 'md:hover:border-grey-lightest',
       'description': ':hover { border-color: #f8fafc; }'
     },
     {
       'name': 'md:hover:border-white',
       'description': ':hover { border-color: #fff; }'
     },
     {
       'name': 'md:hover:border-red-darkest',
       'description': ':hover { border-color: #3b0d0c; }'
     },
     {
       'name': 'md:hover:border-red-darker',
       'description': ':hover { border-color: #621b18; }'
     },
     {
       'name': 'md:hover:border-red-dark',
       'description': ':hover { border-color: #cc1f1a; }'
     },
     {
       'name': 'md:hover:border-red',
       'description': ':hover { border-color: #e3342f; }'
     },
     {
       'name': 'md:hover:border-red-light',
       'description': ':hover { border-color: #ef5753; }'
     },
     {
       'name': 'md:hover:border-red-lighter',
       'description': ':hover { border-color: #f9acaa; }'
     },
     {
       'name': 'md:hover:border-red-lightest',
       'description': ':hover { border-color: #fcebea; }'
     },
     {
       'name': 'md:hover:border-orange-darkest',
       'description': ':hover { border-color: #462a16; }'
     },
     {
       'name': 'md:hover:border-orange-darker',
       'description': ':hover { border-color: #613b1f; }'
     },
     {
       'name': 'md:hover:border-orange-dark',
       'description': ':hover { border-color: #de751f; }'
     },
     {
       'name': 'md:hover:border-orange',
       'description': ':hover { border-color: #f6993f; }'
     },
     {
       'name': 'md:hover:border-orange-light',
       'description': ':hover { border-color: #faad63; }'
     },
     {
       'name': 'md:hover:border-orange-lighter',
       'description': ':hover { border-color: #fcd9b6; }'
     },
     {
       'name': 'md:hover:border-orange-lightest',
       'description': ':hover { border-color: #fff5eb; }'
     },
     {
       'name': 'md:hover:border-yellow-darkest',
       'description': ':hover { border-color: #453411; }'
     },
     {
       'name': 'md:hover:border-yellow-darker',
       'description': ':hover { border-color: #684f1d; }'
     },
     {
       'name': 'md:hover:border-yellow-dark',
       'description': ':hover { border-color: #f2d024; }'
     },
     {
       'name': 'md:hover:border-yellow',
       'description': ':hover { border-color: #ffed4a; }'
     },
     {
       'name': 'md:hover:border-yellow-light',
       'description': ':hover { border-color: #fff382; }'
     },
     {
       'name': 'md:hover:border-yellow-lighter',
       'description': ':hover { border-color: #fff9c2; }'
     },
     {
       'name': 'md:hover:border-yellow-lightest',
       'description': ':hover { border-color: #fcfbeb; }'
     },
     {
       'name': 'md:hover:border-green-darkest',
       'description': ':hover { border-color: #0f2f21; }'
     },
     {
       'name': 'md:hover:border-green-darker',
       'description': ':hover { border-color: #1a4731; }'
     },
     {
       'name': 'md:hover:border-green-dark',
       'description': ':hover { border-color: #1f9d55; }'
     },
     {
       'name': 'md:hover:border-green',
       'description': ':hover { border-color: #38c172; }'
     },
     {
       'name': 'md:hover:border-green-light',
       'description': ':hover { border-color: #51d88a; }'
     },
     {
       'name': 'md:hover:border-green-lighter',
       'description': ':hover { border-color: #a2f5bf; }'
     },
     {
       'name': 'md:hover:border-green-lightest',
       'description': ':hover { border-color: #e3fcec; }'
     },
     {
       'name': 'md:hover:border-teal-darkest',
       'description': ':hover { border-color: #0d3331; }'
     },
     {
       'name': 'md:hover:border-teal-darker',
       'description': ':hover { border-color: #20504f; }'
     },
     {
       'name': 'md:hover:border-teal-dark',
       'description': ':hover { border-color: #38a89d; }'
     },
     {
       'name': 'md:hover:border-teal',
       'description': ':hover { border-color: #4dc0b5; }'
     },
     {
       'name': 'md:hover:border-teal-light',
       'description': ':hover { border-color: #64d5ca; }'
     },
     {
       'name': 'md:hover:border-teal-lighter',
       'description': ':hover { border-color: #a0f0ed; }'
     },
     {
       'name': 'md:hover:border-teal-lightest',
       'description': ':hover { border-color: #e8fffe; }'
     },
     {
       'name': 'md:hover:border-blue-darkest',
       'description': ':hover { border-color: #12283a; }'
     },
     {
       'name': 'md:hover:border-blue-darker',
       'description': ':hover { border-color: #1c3d5a; }'
     },
     {
       'name': 'md:hover:border-blue-dark',
       'description': ':hover { border-color: #2779bd; }'
     },
     {
       'name': 'md:hover:border-blue',
       'description': ':hover { border-color: #3490dc; }'
     },
     {
       'name': 'md:hover:border-blue-light',
       'description': ':hover { border-color: #6cb2eb; }'
     },
     {
       'name': 'md:hover:border-blue-lighter',
       'description': ':hover { border-color: #bcdefa; }'
     },
     {
       'name': 'md:hover:border-blue-lightest',
       'description': ':hover { border-color: #eff8ff; }'
     },
     {
       'name': 'md:hover:border-indigo-darkest',
       'description': ':hover { border-color: #191e38; }'
     },
     {
       'name': 'md:hover:border-indigo-darker',
       'description': ':hover { border-color: #2f365f; }'
     },
     {
       'name': 'md:hover:border-indigo-dark',
       'description': ':hover { border-color: #5661b3; }'
     },
     {
       'name': 'md:hover:border-indigo',
       'description': ':hover { border-color: #6574cd; }'
     },
     {
       'name': 'md:hover:border-indigo-light',
       'description': ':hover { border-color: #7886d7; }'
     },
     {
       'name': 'md:hover:border-indigo-lighter',
       'description': ':hover { border-color: #b2b7ff; }'
     },
     {
       'name': 'md:hover:border-indigo-lightest',
       'description': ':hover { border-color: #e6e8ff; }'
     },
     {
       'name': 'md:hover:border-purple-darkest',
       'description': ':hover { border-color: #21183c; }'
     },
     {
       'name': 'md:hover:border-purple-darker',
       'description': ':hover { border-color: #382b5f; }'
     },
     {
       'name': 'md:hover:border-purple-dark',
       'description': ':hover { border-color: #794acf; }'
     },
     {
       'name': 'md:hover:border-purple',
       'description': ':hover { border-color: #9561e2; }'
     },
     {
       'name': 'md:hover:border-purple-light',
       'description': ':hover { border-color: #a779e9; }'
     },
     {
       'name': 'md:hover:border-purple-lighter',
       'description': ':hover { border-color: #d6bbfc; }'
     },
     {
       'name': 'md:hover:border-purple-lightest',
       'description': ':hover { border-color: #f3ebff; }'
     },
     {
       'name': 'md:hover:border-pink-darkest',
       'description': ':hover { border-color: #451225; }'
     },
     {
       'name': 'md:hover:border-pink-darker',
       'description': ':hover { border-color: #6f213f; }'
     },
     {
       'name': 'md:hover:border-pink-dark',
       'description': ':hover { border-color: #eb5286; }'
     },
     {
       'name': 'md:hover:border-pink',
       'description': ':hover { border-color: #f66d9b; }'
     },
     {
       'name': 'md:hover:border-pink-light',
       'description': ':hover { border-color: #fa7ea8; }'
     },
     {
       'name': 'md:hover:border-pink-lighter',
       'description': ':hover { border-color: #ffbbca; }'
     },
     {
       'name': 'md:hover:border-pink-lightest',
       'description': ':hover { border-color: #ffebef; }'
     },
     {
       'name': 'md:focus:border-transparent',
       'description': ':focus { border-color: transparent; }'
     },
     {
       'name': 'md:focus:border-black',
       'description': ':focus { border-color: #22292f; }'
     },
     {
       'name': 'md:focus:border-grey-darkest',
       'description': ':focus { border-color: #3d4852; }'
     },
     {
       'name': 'md:focus:border-grey-darker',
       'description': ':focus { border-color: #606f7b; }'
     },
     {
       'name': 'md:focus:border-grey-dark',
       'description': ':focus { border-color: #8795a1; }'
     },
     {
       'name': 'md:focus:border-grey',
       'description': ':focus { border-color: #b8c2cc; }'
     },
     {
       'name': 'md:focus:border-grey-light',
       'description': ':focus { border-color: #dae1e7; }'
     },
     {
       'name': 'md:focus:border-grey-lighter',
       'description': ':focus { border-color: #f1f5f8; }'
     },
     {
       'name': 'md:focus:border-grey-lightest',
       'description': ':focus { border-color: #f8fafc; }'
     },
     {
       'name': 'md:focus:border-white',
       'description': ':focus { border-color: #fff; }'
     },
     {
       'name': 'md:focus:border-red-darkest',
       'description': ':focus { border-color: #3b0d0c; }'
     },
     {
       'name': 'md:focus:border-red-darker',
       'description': ':focus { border-color: #621b18; }'
     },
     {
       'name': 'md:focus:border-red-dark',
       'description': ':focus { border-color: #cc1f1a; }'
     },
     {
       'name': 'md:focus:border-red',
       'description': ':focus { border-color: #e3342f; }'
     },
     {
       'name': 'md:focus:border-red-light',
       'description': ':focus { border-color: #ef5753; }'
     },
     {
       'name': 'md:focus:border-red-lighter',
       'description': ':focus { border-color: #f9acaa; }'
     },
     {
       'name': 'md:focus:border-red-lightest',
       'description': ':focus { border-color: #fcebea; }'
     },
     {
       'name': 'md:focus:border-orange-darkest',
       'description': ':focus { border-color: #462a16; }'
     },
     {
       'name': 'md:focus:border-orange-darker',
       'description': ':focus { border-color: #613b1f; }'
     },
     {
       'name': 'md:focus:border-orange-dark',
       'description': ':focus { border-color: #de751f; }'
     },
     {
       'name': 'md:focus:border-orange',
       'description': ':focus { border-color: #f6993f; }'
     },
     {
       'name': 'md:focus:border-orange-light',
       'description': ':focus { border-color: #faad63; }'
     },
     {
       'name': 'md:focus:border-orange-lighter',
       'description': ':focus { border-color: #fcd9b6; }'
     },
     {
       'name': 'md:focus:border-orange-lightest',
       'description': ':focus { border-color: #fff5eb; }'
     },
     {
       'name': 'md:focus:border-yellow-darkest',
       'description': ':focus { border-color: #453411; }'
     },
     {
       'name': 'md:focus:border-yellow-darker',
       'description': ':focus { border-color: #684f1d; }'
     },
     {
       'name': 'md:focus:border-yellow-dark',
       'description': ':focus { border-color: #f2d024; }'
     },
     {
       'name': 'md:focus:border-yellow',
       'description': ':focus { border-color: #ffed4a; }'
     },
     {
       'name': 'md:focus:border-yellow-light',
       'description': ':focus { border-color: #fff382; }'
     },
     {
       'name': 'md:focus:border-yellow-lighter',
       'description': ':focus { border-color: #fff9c2; }'
     },
     {
       'name': 'md:focus:border-yellow-lightest',
       'description': ':focus { border-color: #fcfbeb; }'
     },
     {
       'name': 'md:focus:border-green-darkest',
       'description': ':focus { border-color: #0f2f21; }'
     },
     {
       'name': 'md:focus:border-green-darker',
       'description': ':focus { border-color: #1a4731; }'
     },
     {
       'name': 'md:focus:border-green-dark',
       'description': ':focus { border-color: #1f9d55; }'
     },
     {
       'name': 'md:focus:border-green',
       'description': ':focus { border-color: #38c172; }'
     },
     {
       'name': 'md:focus:border-green-light',
       'description': ':focus { border-color: #51d88a; }'
     },
     {
       'name': 'md:focus:border-green-lighter',
       'description': ':focus { border-color: #a2f5bf; }'
     },
     {
       'name': 'md:focus:border-green-lightest',
       'description': ':focus { border-color: #e3fcec; }'
     },
     {
       'name': 'md:focus:border-teal-darkest',
       'description': ':focus { border-color: #0d3331; }'
     },
     {
       'name': 'md:focus:border-teal-darker',
       'description': ':focus { border-color: #20504f; }'
     },
     {
       'name': 'md:focus:border-teal-dark',
       'description': ':focus { border-color: #38a89d; }'
     },
     {
       'name': 'md:focus:border-teal',
       'description': ':focus { border-color: #4dc0b5; }'
     },
     {
       'name': 'md:focus:border-teal-light',
       'description': ':focus { border-color: #64d5ca; }'
     },
     {
       'name': 'md:focus:border-teal-lighter',
       'description': ':focus { border-color: #a0f0ed; }'
     },
     {
       'name': 'md:focus:border-teal-lightest',
       'description': ':focus { border-color: #e8fffe; }'
     },
     {
       'name': 'md:focus:border-blue-darkest',
       'description': ':focus { border-color: #12283a; }'
     },
     {
       'name': 'md:focus:border-blue-darker',
       'description': ':focus { border-color: #1c3d5a; }'
     },
     {
       'name': 'md:focus:border-blue-dark',
       'description': ':focus { border-color: #2779bd; }'
     },
     {
       'name': 'md:focus:border-blue',
       'description': ':focus { border-color: #3490dc; }'
     },
     {
       'name': 'md:focus:border-blue-light',
       'description': ':focus { border-color: #6cb2eb; }'
     },
     {
       'name': 'md:focus:border-blue-lighter',
       'description': ':focus { border-color: #bcdefa; }'
     },
     {
       'name': 'md:focus:border-blue-lightest',
       'description': ':focus { border-color: #eff8ff; }'
     },
     {
       'name': 'md:focus:border-indigo-darkest',
       'description': ':focus { border-color: #191e38; }'
     },
     {
       'name': 'md:focus:border-indigo-darker',
       'description': ':focus { border-color: #2f365f; }'
     },
     {
       'name': 'md:focus:border-indigo-dark',
       'description': ':focus { border-color: #5661b3; }'
     },
     {
       'name': 'md:focus:border-indigo',
       'description': ':focus { border-color: #6574cd; }'
     },
     {
       'name': 'md:focus:border-indigo-light',
       'description': ':focus { border-color: #7886d7; }'
     },
     {
       'name': 'md:focus:border-indigo-lighter',
       'description': ':focus { border-color: #b2b7ff; }'
     },
     {
       'name': 'md:focus:border-indigo-lightest',
       'description': ':focus { border-color: #e6e8ff; }'
     },
     {
       'name': 'md:focus:border-purple-darkest',
       'description': ':focus { border-color: #21183c; }'
     },
     {
       'name': 'md:focus:border-purple-darker',
       'description': ':focus { border-color: #382b5f; }'
     },
     {
       'name': 'md:focus:border-purple-dark',
       'description': ':focus { border-color: #794acf; }'
     },
     {
       'name': 'md:focus:border-purple',
       'description': ':focus { border-color: #9561e2; }'
     },
     {
       'name': 'md:focus:border-purple-light',
       'description': ':focus { border-color: #a779e9; }'
     },
     {
       'name': 'md:focus:border-purple-lighter',
       'description': ':focus { border-color: #d6bbfc; }'
     },
     {
       'name': 'md:focus:border-purple-lightest',
       'description': ':focus { border-color: #f3ebff; }'
     },
     {
       'name': 'md:focus:border-pink-darkest',
       'description': ':focus { border-color: #451225; }'
     },
     {
       'name': 'md:focus:border-pink-darker',
       'description': ':focus { border-color: #6f213f; }'
     },
     {
       'name': 'md:focus:border-pink-dark',
       'description': ':focus { border-color: #eb5286; }'
     },
     {
       'name': 'md:focus:border-pink',
       'description': ':focus { border-color: #f66d9b; }'
     },
     {
       'name': 'md:focus:border-pink-light',
       'description': ':focus { border-color: #fa7ea8; }'
     },
     {
       'name': 'md:focus:border-pink-lighter',
       'description': ':focus { border-color: #ffbbca; }'
     },
     {
       'name': 'md:focus:border-pink-lightest',
       'description': ':focus { border-color: #ffebef; }'
     },
     {
       'name': 'md:rounded-none',
       'description': 'border-radius: 0;'
     },
     {
       'name': 'md:rounded-sm',
       'description': 'border-radius: .125rem;'
     },
     {
       'name': 'md:rounded',
       'description': 'border-radius: .25rem;'
     },
     {
       'name': 'md:rounded-lg',
       'description': 'border-radius: .5rem;'
     },
     {
       'name': 'md:rounded-full',
       'description': 'border-radius: 9999px;'
     },
     {
       'name': 'md:rounded-t-none',
       'description': 'border-top-left-radius: 0; border-top-right-radius: 0;'
     },
     {
       'name': 'md:rounded-r-none',
       'description': 'border-top-right-radius: 0; border-bottom-right-radius: 0;'
     },
     {
       'name': 'md:rounded-b-none',
       'description': 'border-bottom-right-radius: 0; border-bottom-left-radius: 0;'
     },
     {
       'name': 'md:rounded-l-none',
       'description': 'border-top-left-radius: 0; border-bottom-left-radius: 0;'
     },
     {
       'name': 'md:rounded-t-sm',
       'description': 'border-top-left-radius: .125rem; border-top-right-radius: .125rem;'
     },
     {
       'name': 'md:rounded-r-sm',
       'description': 'border-top-right-radius: .125rem; border-bottom-right-radius: .125rem;'
     },
     {
       'name': 'md:rounded-b-sm',
       'description': 'border-bottom-right-radius: .125rem; border-bottom-left-radius: .125rem;'
     },
     {
       'name': 'md:rounded-l-sm',
       'description': 'border-top-left-radius: .125rem; border-bottom-left-radius: .125rem;'
     },
     {
       'name': 'md:rounded-t',
       'description': 'border-top-left-radius: .25rem; border-top-right-radius: .25rem;'
     },
     {
       'name': 'md:rounded-r',
       'description': 'border-top-right-radius: .25rem; border-bottom-right-radius: .25rem;'
     },
     {
       'name': 'md:rounded-b',
       'description': 'border-bottom-right-radius: .25rem; border-bottom-left-radius: .25rem;'
     },
     {
       'name': 'md:rounded-l',
       'description': 'border-top-left-radius: .25rem; border-bottom-left-radius: .25rem;'
     },
     {
       'name': 'md:rounded-t-lg',
       'description': 'border-top-left-radius: .5rem; border-top-right-radius: .5rem;'
     },
     {
       'name': 'md:rounded-r-lg',
       'description': 'border-top-right-radius: .5rem; border-bottom-right-radius: .5rem;'
     },
     {
       'name': 'md:rounded-b-lg',
       'description': 'border-bottom-right-radius: .5rem; border-bottom-left-radius: .5rem;'
     },
     {
       'name': 'md:rounded-l-lg',
       'description': 'border-top-left-radius: .5rem; border-bottom-left-radius: .5rem;'
     },
     {
       'name': 'md:rounded-t-full',
       'description': 'border-top-left-radius: 9999px; border-top-right-radius: 9999px;'
     },
     {
       'name': 'md:rounded-r-full',
       'description': 'border-top-right-radius: 9999px; border-bottom-right-radius: 9999px;'
     },
     {
       'name': 'md:rounded-b-full',
       'description': 'border-bottom-right-radius: 9999px; border-bottom-left-radius: 9999px;'
     },
     {
       'name': 'md:rounded-l-full',
       'description': 'border-top-left-radius: 9999px; border-bottom-left-radius: 9999px;'
     },
     {
       'name': 'md:rounded-tl-none',
       'description': 'border-top-left-radius: 0;'
     },
     {
       'name': 'md:rounded-tr-none',
       'description': 'border-top-right-radius: 0;'
     },
     {
       'name': 'md:rounded-br-none',
       'description': 'border-bottom-right-radius: 0;'
     },
     {
       'name': 'md:rounded-bl-none',
       'description': 'border-bottom-left-radius: 0;'
     },
     {
       'name': 'md:rounded-tl-sm',
       'description': 'border-top-left-radius: .125rem;'
     },
     {
       'name': 'md:rounded-tr-sm',
       'description': 'border-top-right-radius: .125rem;'
     },
     {
       'name': 'md:rounded-br-sm',
       'description': 'border-bottom-right-radius: .125rem;'
     },
     {
       'name': 'md:rounded-bl-sm',
       'description': 'border-bottom-left-radius: .125rem;'
     },
     {
       'name': 'md:rounded-tl',
       'description': 'border-top-left-radius: .25rem;'
     },
     {
       'name': 'md:rounded-tr',
       'description': 'border-top-right-radius: .25rem;'
     },
     {
       'name': 'md:rounded-br',
       'description': 'border-bottom-right-radius: .25rem;'
     },
     {
       'name': 'md:rounded-bl',
       'description': 'border-bottom-left-radius: .25rem;'
     },
     {
       'name': 'md:rounded-tl-lg',
       'description': 'border-top-left-radius: .5rem;'
     },
     {
       'name': 'md:rounded-tr-lg',
       'description': 'border-top-right-radius: .5rem;'
     },
     {
       'name': 'md:rounded-br-lg',
       'description': 'border-bottom-right-radius: .5rem;'
     },
     {
       'name': 'md:rounded-bl-lg',
       'description': 'border-bottom-left-radius: .5rem;'
     },
     {
       'name': 'md:rounded-tl-full',
       'description': 'border-top-left-radius: 9999px;'
     },
     {
       'name': 'md:rounded-tr-full',
       'description': 'border-top-right-radius: 9999px;'
     },
     {
       'name': 'md:rounded-br-full',
       'description': 'border-bottom-right-radius: 9999px;'
     },
     {
       'name': 'md:rounded-bl-full',
       'description': 'border-bottom-left-radius: 9999px;'
     },
     {
       'name': 'md:border-solid',
       'description': 'border-style: solid;'
     },
     {
       'name': 'md:border-dashed',
       'description': 'border-style: dashed;'
     },
     {
       'name': 'md:border-dotted',
       'description': 'border-style: dotted;'
     },
     {
       'name': 'md:border-none',
       'description': 'border-style: none;'
     },
     {
       'name': 'md:border-0',
       'description': 'border-width: 0;'
     },
     {
       'name': 'md:border-2',
       'description': 'border-width: 2px;'
     },
     {
       'name': 'md:border-4',
       'description': 'border-width: 4px;'
     },
     {
       'name': 'md:border-8',
       'description': 'border-width: 8px;'
     },
     {
       'name': 'md:border',
       'description': 'border-width: 1px;'
     },
     {
       'name': 'md:border-t-0',
       'description': 'border-top-width: 0;'
     },
     {
       'name': 'md:border-r-0',
       'description': 'border-right-width: 0;'
     },
     {
       'name': 'md:border-b-0',
       'description': 'border-bottom-width: 0;'
     },
     {
       'name': 'md:border-l-0',
       'description': 'border-left-width: 0;'
     },
     {
       'name': 'md:border-t-2',
       'description': 'border-top-width: 2px;'
     },
     {
       'name': 'md:border-r-2',
       'description': 'border-right-width: 2px;'
     },
     {
       'name': 'md:border-b-2',
       'description': 'border-bottom-width: 2px;'
     },
     {
       'name': 'md:border-l-2',
       'description': 'border-left-width: 2px;'
     },
     {
       'name': 'md:border-t-4',
       'description': 'border-top-width: 4px;'
     },
     {
       'name': 'md:border-r-4',
       'description': 'border-right-width: 4px;'
     },
     {
       'name': 'md:border-b-4',
       'description': 'border-bottom-width: 4px;'
     },
     {
       'name': 'md:border-l-4',
       'description': 'border-left-width: 4px;'
     },
     {
       'name': 'md:border-t-8',
       'description': 'border-top-width: 8px;'
     },
     {
       'name': 'md:border-r-8',
       'description': 'border-right-width: 8px;'
     },
     {
       'name': 'md:border-b-8',
       'description': 'border-bottom-width: 8px;'
     },
     {
       'name': 'md:border-l-8',
       'description': 'border-left-width: 8px;'
     },
     {
       'name': 'md:border-t',
       'description': 'border-top-width: 1px;'
     },
     {
       'name': 'md:border-r',
       'description': 'border-right-width: 1px;'
     },
     {
       'name': 'md:border-b',
       'description': 'border-bottom-width: 1px;'
     },
     {
       'name': 'md:border-l',
       'description': 'border-left-width: 1px;'
     },
     {
       'name': 'md:cursor-auto',
       'description': 'cursor: auto;'
     },
     {
       'name': 'md:cursor-default',
       'description': 'cursor: default;'
     },
     {
       'name': 'md:cursor-pointer',
       'description': 'cursor: pointer;'
     },
     {
       'name': 'md:cursor-wait',
       'description': 'cursor: wait;'
     },
     {
       'name': 'md:cursor-move',
       'description': 'cursor: move;'
     },
     {
       'name': 'md:cursor-not-allowed',
       'description': 'cursor: not-allowed;'
     },
     {
       'name': 'md:block',
       'description': 'display: block;'
     },
     {
       'name': 'md:inline-block',
       'description': 'display: inline-block;'
     },
     {
       'name': 'md:inline',
       'description': 'display: inline;'
     },
     {
       'name': 'md:table',
       'description': 'display: table;'
     },
     {
       'name': 'md:table-row',
       'description': 'display: table-row;'
     },
     {
       'name': 'md:table-cell',
       'description': 'display: table-cell;'
     },
     {
       'name': 'md:hidden',
       'description': 'display: none;'
     },
     {
       'name': 'md:flex',
       'description': 'display: flex;'
     },
     {
       'name': 'md:inline-flex',
       'description': 'display: inline-flex;'
     },
     {
       'name': 'md:flex-row',
       'description': 'flex-direction: row;'
     },
     {
       'name': 'md:flex-row-reverse',
       'description': 'flex-direction: row-reverse;'
     },
     {
       'name': 'md:flex-col',
       'description': 'flex-direction: column;'
     },
     {
       'name': 'md:flex-col-reverse',
       'description': 'flex-direction: column-reverse;'
     },
     {
       'name': 'md:flex-wrap',
       'description': 'flex-wrap: wrap;'
     },
     {
       'name': 'md:flex-wrap-reverse',
       'description': 'flex-wrap: wrap-reverse;'
     },
     {
       'name': 'md:flex-no-wrap',
       'description': 'flex-wrap: nowrap;'
     },
     {
       'name': 'md:items-start',
       'description': 'align-items: flex-start;'
     },
     {
       'name': 'md:items-end',
       'description': 'align-items: flex-end;'
     },
     {
       'name': 'md:items-center',
       'description': 'align-items: center;'
     },
     {
       'name': 'md:items-baseline',
       'description': 'align-items: baseline;'
     },
     {
       'name': 'md:items-stretch',
       'description': 'align-items: stretch;'
     },
     {
       'name': 'md:self-auto',
       'description': 'align-self: auto;'
     },
     {
       'name': 'md:self-start',
       'description': 'align-self: flex-start;'
     },
     {
       'name': 'md:self-end',
       'description': 'align-self: flex-end;'
     },
     {
       'name': 'md:self-center',
       'description': 'align-self: center;'
     },
     {
       'name': 'md:self-stretch',
       'description': 'align-self: stretch;'
     },
     {
       'name': 'md:justify-start',
       'description': 'justify-content: flex-start;'
     },
     {
       'name': 'md:justify-end',
       'description': 'justify-content: flex-end;'
     },
     {
       'name': 'md:justify-center',
       'description': 'justify-content: center;'
     },
     {
       'name': 'md:justify-between',
       'description': 'justify-content: space-between;'
     },
     {
       'name': 'md:justify-around',
       'description': 'justify-content: space-around;'
     },
     {
       'name': 'md:content-center',
       'description': 'align-content: center;'
     },
     {
       'name': 'md:content-start',
       'description': 'align-content: flex-start;'
     },
     {
       'name': 'md:content-end',
       'description': 'align-content: flex-end;'
     },
     {
       'name': 'md:content-between',
       'description': 'align-content: space-between;'
     },
     {
       'name': 'md:content-around',
       'description': 'align-content: space-around;'
     },
     {
       'name': 'md:flex-1',
       'description': 'flex: 1 1 0%;'
     },
     {
       'name': 'md:flex-auto',
       'description': 'flex: 1 1 auto;'
     },
     {
       'name': 'md:flex-initial',
       'description': 'flex: 0 1 auto;'
     },
     {
       'name': 'md:flex-none',
       'description': 'flex: none;'
     },
     {
       'name': 'md:flex-grow',
       'description': 'flex-grow: 1;'
     },
     {
       'name': 'md:flex-shrink',
       'description': 'flex-shrink: 1;'
     },
     {
       'name': 'md:flex-no-grow',
       'description': 'flex-grow: 0;'
     },
     {
       'name': 'md:flex-no-shrink',
       'description': 'flex-shrink: 0;'
     },
     {
       'name': 'md:float-right',
       'description': 'float: right;'
     },
     {
       'name': 'md:float-left',
       'description': 'float: left;'
     },
     {
       'name': 'md:float-none',
       'description': 'float: none;'
     },
     {
       'name': 'md:clearfix',
       'description': ':after { content: \'\'; display: table; clear: both; }'
     },
     {
       'name': 'md:font-sans',
       'description': 'font-family: system-ui, BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;'
     },
     {
       'name': 'md:font-serif',
       'description': 'font-family: Constantia, Lucida Bright, Lucidabright, Lucida Serif, Lucida, DejaVu Serif, Bitstream Vera Serif, Liberation Serif, Georgia, serif;'
     },
     {
       'name': 'md:font-mono',
       'description': 'font-family: Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace;'
     },
     {
       'name': 'md:font-hairline',
       'description': 'font-weight: 100;'
     },
     {
       'name': 'md:font-thin',
       'description': 'font-weight: 200;'
     },
     {
       'name': 'md:font-light',
       'description': 'font-weight: 300;'
     },
     {
       'name': 'md:font-normal',
       'description': 'font-weight: 400;'
     },
     {
       'name': 'md:font-medium',
       'description': 'font-weight: 500;'
     },
     {
       'name': 'md:font-semibold',
       'description': 'font-weight: 600;'
     },
     {
       'name': 'md:font-bold',
       'description': 'font-weight: 700;'
     },
     {
       'name': 'md:font-extrabold',
       'description': 'font-weight: 800;'
     },
     {
       'name': 'md:font-black',
       'description': 'font-weight: 900;'
     },
     {
       'name': 'md:hover:font-hairline',
       'description': ':hover { font-weight: 100; }'
     },
     {
       'name': 'md:hover:font-thin',
       'description': ':hover { font-weight: 200; }'
     },
     {
       'name': 'md:hover:font-light',
       'description': ':hover { font-weight: 300; }'
     },
     {
       'name': 'md:hover:font-normal',
       'description': ':hover { font-weight: 400; }'
     },
     {
       'name': 'md:hover:font-medium',
       'description': ':hover { font-weight: 500; }'
     },
     {
       'name': 'md:hover:font-semibold',
       'description': ':hover { font-weight: 600; }'
     },
     {
       'name': 'md:hover:font-bold',
       'description': ':hover { font-weight: 700; }'
     },
     {
       'name': 'md:hover:font-extrabold',
       'description': ':hover { font-weight: 800; }'
     },
     {
       'name': 'md:hover:font-black',
       'description': ':hover { font-weight: 900; }'
     },
     {
       'name': 'md:focus:font-hairline',
       'description': ':focus { font-weight: 100; }'
     },
     {
       'name': 'md:focus:font-thin',
       'description': ':focus { font-weight: 200; }'
     },
     {
       'name': 'md:focus:font-light',
       'description': ':focus { font-weight: 300; }'
     },
     {
       'name': 'md:focus:font-normal',
       'description': ':focus { font-weight: 400; }'
     },
     {
       'name': 'md:focus:font-medium',
       'description': ':focus { font-weight: 500; }'
     },
     {
       'name': 'md:focus:font-semibold',
       'description': ':focus { font-weight: 600; }'
     },
     {
       'name': 'md:focus:font-bold',
       'description': ':focus { font-weight: 700; }'
     },
     {
       'name': 'md:focus:font-extrabold',
       'description': ':focus { font-weight: 800; }'
     },
     {
       'name': 'md:focus:font-black',
       'description': ':focus { font-weight: 900; }'
     },
     {
       'name': 'md:h-1',
       'description': 'height: .25rem;'
     },
     {
       'name': 'md:h-2',
       'description': 'height: .5rem;'
     },
     {
       'name': 'md:h-3',
       'description': 'height: .75rem;'
     },
     {
       'name': 'md:h-4',
       'description': 'height: 1rem;'
     },
     {
       'name': 'md:h-5',
       'description': 'height: 1.25rem;'
     },
     {
       'name': 'md:h-6',
       'description': 'height: 1.5rem;'
     },
     {
       'name': 'md:h-8',
       'description': 'height: 2rem;'
     },
     {
       'name': 'md:h-10',
       'description': 'height: 2.5rem;'
     },
     {
       'name': 'md:h-12',
       'description': 'height: 3rem;'
     },
     {
       'name': 'md:h-16',
       'description': 'height: 4rem;'
     },
     {
       'name': 'md:h-24',
       'description': 'height: 6rem;'
     },
     {
       'name': 'md:h-32',
       'description': 'height: 8rem;'
     },
     {
       'name': 'md:h-48',
       'description': 'height: 12rem;'
     },
     {
       'name': 'md:h-64',
       'description': 'height: 16rem;'
     },
     {
       'name': 'md:h-auto',
       'description': 'height: auto;'
     },
     {
       'name': 'md:h-px',
       'description': 'height: 1px;'
     },
     {
       'name': 'md:h-full',
       'description': 'height: 100%;'
     },
     {
       'name': 'md:h-screen',
       'description': 'height: 100vh;'
     },
     {
       'name': 'md:leading-none',
       'description': 'line-height: 1;'
     },
     {
       'name': 'md:leading-tight',
       'description': 'line-height: 1.25;'
     },
     {
       'name': 'md:leading-normal',
       'description': 'line-height: 1.5;'
     },
     {
       'name': 'md:leading-loose',
       'description': 'line-height: 2;'
     },
     {
       'name': 'md:m-0',
       'description': 'margin: 0;'
     },
     {
       'name': 'md:m-1',
       'description': 'margin: .25rem;'
     },
     {
       'name': 'md:m-2',
       'description': 'margin: .5rem;'
     },
     {
       'name': 'md:m-3',
       'description': 'margin: .75rem;'
     },
     {
       'name': 'md:m-4',
       'description': 'margin: 1rem;'
     },
     {
       'name': 'md:m-5',
       'description': 'margin: 1.25rem;'
     },
     {
       'name': 'md:m-6',
       'description': 'margin: 1.5rem;'
     },
     {
       'name': 'md:m-8',
       'description': 'margin: 2rem;'
     },
     {
       'name': 'md:m-10',
       'description': 'margin: 2.5rem;'
     },
     {
       'name': 'md:m-12',
       'description': 'margin: 3rem;'
     },
     {
       'name': 'md:m-16',
       'description': 'margin: 4rem;'
     },
     {
       'name': 'md:m-20',
       'description': 'margin: 5rem;'
     },
     {
       'name': 'md:m-24',
       'description': 'margin: 6rem;'
     },
     {
       'name': 'md:m-32',
       'description': 'margin: 8rem;'
     },
     {
       'name': 'md:m-auto',
       'description': 'margin: auto;'
     },
     {
       'name': 'md:m-px',
       'description': 'margin: 1px;'
     },
     {
       'name': 'md:my-0',
       'description': 'margin-top: 0; margin-bottom: 0;'
     },
     {
       'name': 'md:mx-0',
       'description': 'margin-left: 0; margin-right: 0;'
     },
     {
       'name': 'md:my-1',
       'description': 'margin-top: .25rem; margin-bottom: .25rem;'
     },
     {
       'name': 'md:mx-1',
       'description': 'margin-left: .25rem; margin-right: .25rem;'
     },
     {
       'name': 'md:my-2',
       'description': 'margin-top: .5rem; margin-bottom: .5rem;'
     },
     {
       'name': 'md:mx-2',
       'description': 'margin-left: .5rem; margin-right: .5rem;'
     },
     {
       'name': 'md:my-3',
       'description': 'margin-top: .75rem; margin-bottom: .75rem;'
     },
     {
       'name': 'md:mx-3',
       'description': 'margin-left: .75rem; margin-right: .75rem;'
     },
     {
       'name': 'md:my-4',
       'description': 'margin-top: 1rem; margin-bottom: 1rem;'
     },
     {
       'name': 'md:mx-4',
       'description': 'margin-left: 1rem; margin-right: 1rem;'
     },
     {
       'name': 'md:my-5',
       'description': 'margin-top: 1.25rem; margin-bottom: 1.25rem;'
     },
     {
       'name': 'md:mx-5',
       'description': 'margin-left: 1.25rem; margin-right: 1.25rem;'
     },
     {
       'name': 'md:my-6',
       'description': 'margin-top: 1.5rem; margin-bottom: 1.5rem;'
     },
     {
       'name': 'md:mx-6',
       'description': 'margin-left: 1.5rem; margin-right: 1.5rem;'
     },
     {
       'name': 'md:my-8',
       'description': 'margin-top: 2rem; margin-bottom: 2rem;'
     },
     {
       'name': 'md:mx-8',
       'description': 'margin-left: 2rem; margin-right: 2rem;'
     },
     {
       'name': 'md:my-10',
       'description': 'margin-top: 2.5rem; margin-bottom: 2.5rem;'
     },
     {
       'name': 'md:mx-10',
       'description': 'margin-left: 2.5rem; margin-right: 2.5rem;'
     },
     {
       'name': 'md:my-12',
       'description': 'margin-top: 3rem; margin-bottom: 3rem;'
     },
     {
       'name': 'md:mx-12',
       'description': 'margin-left: 3rem; margin-right: 3rem;'
     },
     {
       'name': 'md:my-16',
       'description': 'margin-top: 4rem; margin-bottom: 4rem;'
     },
     {
       'name': 'md:mx-16',
       'description': 'margin-left: 4rem; margin-right: 4rem;'
     },
     {
       'name': 'md:my-20',
       'description': 'margin-top: 5rem; margin-bottom: 5rem;'
     },
     {
       'name': 'md:mx-20',
       'description': 'margin-left: 5rem; margin-right: 5rem;'
     },
     {
       'name': 'md:my-24',
       'description': 'margin-top: 6rem; margin-bottom: 6rem;'
     },
     {
       'name': 'md:mx-24',
       'description': 'margin-left: 6rem; margin-right: 6rem;'
     },
     {
       'name': 'md:my-32',
       'description': 'margin-top: 8rem; margin-bottom: 8rem;'
     },
     {
       'name': 'md:mx-32',
       'description': 'margin-left: 8rem; margin-right: 8rem;'
     },
     {
       'name': 'md:my-auto',
       'description': 'margin-top: auto; margin-bottom: auto;'
     },
     {
       'name': 'md:mx-auto',
       'description': 'margin-left: auto; margin-right: auto;'
     },
     {
       'name': 'md:my-px',
       'description': 'margin-top: 1px; margin-bottom: 1px;'
     },
     {
       'name': 'md:mx-px',
       'description': 'margin-left: 1px; margin-right: 1px;'
     },
     {
       'name': 'md:mt-0',
       'description': 'margin-top: 0;'
     },
     {
       'name': 'md:mr-0',
       'description': 'margin-right: 0;'
     },
     {
       'name': 'md:mb-0',
       'description': 'margin-bottom: 0;'
     },
     {
       'name': 'md:ml-0',
       'description': 'margin-left: 0;'
     },
     {
       'name': 'md:mt-1',
       'description': 'margin-top: .25rem;'
     },
     {
       'name': 'md:mr-1',
       'description': 'margin-right: .25rem;'
     },
     {
       'name': 'md:mb-1',
       'description': 'margin-bottom: .25rem;'
     },
     {
       'name': 'md:ml-1',
       'description': 'margin-left: .25rem;'
     },
     {
       'name': 'md:mt-2',
       'description': 'margin-top: .5rem;'
     },
     {
       'name': 'md:mr-2',
       'description': 'margin-right: .5rem;'
     },
     {
       'name': 'md:mb-2',
       'description': 'margin-bottom: .5rem;'
     },
     {
       'name': 'md:ml-2',
       'description': 'margin-left: .5rem;'
     },
     {
       'name': 'md:mt-3',
       'description': 'margin-top: .75rem;'
     },
     {
       'name': 'md:mr-3',
       'description': 'margin-right: .75rem;'
     },
     {
       'name': 'md:mb-3',
       'description': 'margin-bottom: .75rem;'
     },
     {
       'name': 'md:ml-3',
       'description': 'margin-left: .75rem;'
     },
     {
       'name': 'md:mt-4',
       'description': 'margin-top: 1rem;'
     },
     {
       'name': 'md:mr-4',
       'description': 'margin-right: 1rem;'
     },
     {
       'name': 'md:mb-4',
       'description': 'margin-bottom: 1rem;'
     },
     {
       'name': 'md:ml-4',
       'description': 'margin-left: 1rem;'
     },
     {
       'name': 'md:mt-5',
       'description': 'margin-top: 1.25rem;'
     },
     {
       'name': 'md:mr-5',
       'description': 'margin-right: 1.25rem;'
     },
     {
       'name': 'md:mb-5',
       'description': 'margin-bottom: 1.25rem;'
     },
     {
       'name': 'md:ml-5',
       'description': 'margin-left: 1.25rem;'
     },
     {
       'name': 'md:mt-6',
       'description': 'margin-top: 1.5rem;'
     },
     {
       'name': 'md:mr-6',
       'description': 'margin-right: 1.5rem;'
     },
     {
       'name': 'md:mb-6',
       'description': 'margin-bottom: 1.5rem;'
     },
     {
       'name': 'md:ml-6',
       'description': 'margin-left: 1.5rem;'
     },
     {
       'name': 'md:mt-8',
       'description': 'margin-top: 2rem;'
     },
     {
       'name': 'md:mr-8',
       'description': 'margin-right: 2rem;'
     },
     {
       'name': 'md:mb-8',
       'description': 'margin-bottom: 2rem;'
     },
     {
       'name': 'md:ml-8',
       'description': 'margin-left: 2rem;'
     },
     {
       'name': 'md:mt-10',
       'description': 'margin-top: 2.5rem;'
     },
     {
       'name': 'md:mr-10',
       'description': 'margin-right: 2.5rem;'
     },
     {
       'name': 'md:mb-10',
       'description': 'margin-bottom: 2.5rem;'
     },
     {
       'name': 'md:ml-10',
       'description': 'margin-left: 2.5rem;'
     },
     {
       'name': 'md:mt-12',
       'description': 'margin-top: 3rem;'
     },
     {
       'name': 'md:mr-12',
       'description': 'margin-right: 3rem;'
     },
     {
       'name': 'md:mb-12',
       'description': 'margin-bottom: 3rem;'
     },
     {
       'name': 'md:ml-12',
       'description': 'margin-left: 3rem;'
     },
     {
       'name': 'md:mt-16',
       'description': 'margin-top: 4rem;'
     },
     {
       'name': 'md:mr-16',
       'description': 'margin-right: 4rem;'
     },
     {
       'name': 'md:mb-16',
       'description': 'margin-bottom: 4rem;'
     },
     {
       'name': 'md:ml-16',
       'description': 'margin-left: 4rem;'
     },
     {
       'name': 'md:mt-20',
       'description': 'margin-top: 5rem;'
     },
     {
       'name': 'md:mr-20',
       'description': 'margin-right: 5rem;'
     },
     {
       'name': 'md:mb-20',
       'description': 'margin-bottom: 5rem;'
     },
     {
       'name': 'md:ml-20',
       'description': 'margin-left: 5rem;'
     },
     {
       'name': 'md:mt-24',
       'description': 'margin-top: 6rem;'
     },
     {
       'name': 'md:mr-24',
       'description': 'margin-right: 6rem;'
     },
     {
       'name': 'md:mb-24',
       'description': 'margin-bottom: 6rem;'
     },
     {
       'name': 'md:ml-24',
       'description': 'margin-left: 6rem;'
     },
     {
       'name': 'md:mt-32',
       'description': 'margin-top: 8rem;'
     },
     {
       'name': 'md:mr-32',
       'description': 'margin-right: 8rem;'
     },
     {
       'name': 'md:mb-32',
       'description': 'margin-bottom: 8rem;'
     },
     {
       'name': 'md:ml-32',
       'description': 'margin-left: 8rem;'
     },
     {
       'name': 'md:mt-auto',
       'description': 'margin-top: auto;'
     },
     {
       'name': 'md:mr-auto',
       'description': 'margin-right: auto;'
     },
     {
       'name': 'md:mb-auto',
       'description': 'margin-bottom: auto;'
     },
     {
       'name': 'md:ml-auto',
       'description': 'margin-left: auto;'
     },
     {
       'name': 'md:mt-px',
       'description': 'margin-top: 1px;'
     },
     {
       'name': 'md:mr-px',
       'description': 'margin-right: 1px;'
     },
     {
       'name': 'md:mb-px',
       'description': 'margin-bottom: 1px;'
     },
     {
       'name': 'md:ml-px',
       'description': 'margin-left: 1px;'
     },
     {
       'name': 'md:max-h-full',
       'description': 'max-height: 100%;'
     },
     {
       'name': 'md:max-h-screen',
       'description': 'max-height: 100vh;'
     },
     {
       'name': 'md:max-w-xs',
       'description': 'max-width: 20rem;'
     },
     {
       'name': 'md:max-w-sm',
       'description': 'max-width: 30rem;'
     },
     {
       'name': 'md:max-w-md',
       'description': 'max-width: 40rem;'
     },
     {
       'name': 'md:max-w-lg',
       'description': 'max-width: 50rem;'
     },
     {
       'name': 'md:max-w-xl',
       'description': 'max-width: 60rem;'
     },
     {
       'name': 'md:max-w-2xl',
       'description': 'max-width: 70rem;'
     },
     {
       'name': 'md:max-w-3xl',
       'description': 'max-width: 80rem;'
     },
     {
       'name': 'md:max-w-4xl',
       'description': 'max-width: 90rem;'
     },
     {
       'name': 'md:max-w-5xl',
       'description': 'max-width: 100rem;'
     },
     {
       'name': 'md:max-w-full',
       'description': 'max-width: 100%;'
     },
     {
       'name': 'md:min-h-0',
       'description': 'min-height: 0;'
     },
     {
       'name': 'md:min-h-full',
       'description': 'min-height: 100%;'
     },
     {
       'name': 'md:min-h-screen',
       'description': 'min-height: 100vh;'
     },
     {
       'name': 'md:min-w-0',
       'description': 'min-width: 0;'
     },
     {
       'name': 'md:min-w-full',
       'description': 'min-width: 100%;'
     },
     {
       'name': 'md:-m-0',
       'description': 'margin: 0;'
     },
     {
       'name': 'md:-m-1',
       'description': 'margin: -0.25rem;'
     },
     {
       'name': 'md:-m-2',
       'description': 'margin: -0.5rem;'
     },
     {
       'name': 'md:-m-3',
       'description': 'margin: -0.75rem;'
     },
     {
       'name': 'md:-m-4',
       'description': 'margin: -1rem;'
     },
     {
       'name': 'md:-m-5',
       'description': 'margin: -1.25rem;'
     },
     {
       'name': 'md:-m-6',
       'description': 'margin: -1.5rem;'
     },
     {
       'name': 'md:-m-8',
       'description': 'margin: -2rem;'
     },
     {
       'name': 'md:-m-10',
       'description': 'margin: -2.5rem;'
     },
     {
       'name': 'md:-m-12',
       'description': 'margin: -3rem;'
     },
     {
       'name': 'md:-m-16',
       'description': 'margin: -4rem;'
     },
     {
       'name': 'md:-m-20',
       'description': 'margin: -5rem;'
     },
     {
       'name': 'md:-m-24',
       'description': 'margin: -6rem;'
     },
     {
       'name': 'md:-m-32',
       'description': 'margin: -8rem;'
     },
     {
       'name': 'md:-m-px',
       'description': 'margin: -1px;'
     },
     {
       'name': 'md:-my-0',
       'description': 'margin-top: 0; margin-bottom: 0;'
     },
     {
       'name': 'md:-mx-0',
       'description': 'margin-left: 0; margin-right: 0;'
     },
     {
       'name': 'md:-my-1',
       'description': 'margin-top: -0.25rem; margin-bottom: -0.25rem;'
     },
     {
       'name': 'md:-mx-1',
       'description': 'margin-left: -0.25rem; margin-right: -0.25rem;'
     },
     {
       'name': 'md:-my-2',
       'description': 'margin-top: -0.5rem; margin-bottom: -0.5rem;'
     },
     {
       'name': 'md:-mx-2',
       'description': 'margin-left: -0.5rem; margin-right: -0.5rem;'
     },
     {
       'name': 'md:-my-3',
       'description': 'margin-top: -0.75rem; margin-bottom: -0.75rem;'
     },
     {
       'name': 'md:-mx-3',
       'description': 'margin-left: -0.75rem; margin-right: -0.75rem;'
     },
     {
       'name': 'md:-my-4',
       'description': 'margin-top: -1rem; margin-bottom: -1rem;'
     },
     {
       'name': 'md:-mx-4',
       'description': 'margin-left: -1rem; margin-right: -1rem;'
     },
     {
       'name': 'md:-my-5',
       'description': 'margin-top: -1.25rem; margin-bottom: -1.25rem;'
     },
     {
       'name': 'md:-mx-5',
       'description': 'margin-left: -1.25rem; margin-right: -1.25rem;'
     },
     {
       'name': 'md:-my-6',
       'description': 'margin-top: -1.5rem; margin-bottom: -1.5rem;'
     },
     {
       'name': 'md:-mx-6',
       'description': 'margin-left: -1.5rem; margin-right: -1.5rem;'
     },
     {
       'name': 'md:-my-8',
       'description': 'margin-top: -2rem; margin-bottom: -2rem;'
     },
     {
       'name': 'md:-mx-8',
       'description': 'margin-left: -2rem; margin-right: -2rem;'
     },
     {
       'name': 'md:-my-10',
       'description': 'margin-top: -2.5rem; margin-bottom: -2.5rem;'
     },
     {
       'name': 'md:-mx-10',
       'description': 'margin-left: -2.5rem; margin-right: -2.5rem;'
     },
     {
       'name': 'md:-my-12',
       'description': 'margin-top: -3rem; margin-bottom: -3rem;'
     },
     {
       'name': 'md:-mx-12',
       'description': 'margin-left: -3rem; margin-right: -3rem;'
     },
     {
       'name': 'md:-my-16',
       'description': 'margin-top: -4rem; margin-bottom: -4rem;'
     },
     {
       'name': 'md:-mx-16',
       'description': 'margin-left: -4rem; margin-right: -4rem;'
     },
     {
       'name': 'md:-my-20',
       'description': 'margin-top: -5rem; margin-bottom: -5rem;'
     },
     {
       'name': 'md:-mx-20',
       'description': 'margin-left: -5rem; margin-right: -5rem;'
     },
     {
       'name': 'md:-my-24',
       'description': 'margin-top: -6rem; margin-bottom: -6rem;'
     },
     {
       'name': 'md:-mx-24',
       'description': 'margin-left: -6rem; margin-right: -6rem;'
     },
     {
       'name': 'md:-my-32',
       'description': 'margin-top: -8rem; margin-bottom: -8rem;'
     },
     {
       'name': 'md:-mx-32',
       'description': 'margin-left: -8rem; margin-right: -8rem;'
     },
     {
       'name': 'md:-my-px',
       'description': 'margin-top: -1px; margin-bottom: -1px;'
     },
     {
       'name': 'md:-mx-px',
       'description': 'margin-left: -1px; margin-right: -1px;'
     },
     {
       'name': 'md:-mt-0',
       'description': 'margin-top: 0;'
     },
     {
       'name': 'md:-mr-0',
       'description': 'margin-right: 0;'
     },
     {
       'name': 'md:-mb-0',
       'description': 'margin-bottom: 0;'
     },
     {
       'name': 'md:-ml-0',
       'description': 'margin-left: 0;'
     },
     {
       'name': 'md:-mt-1',
       'description': 'margin-top: -0.25rem;'
     },
     {
       'name': 'md:-mr-1',
       'description': 'margin-right: -0.25rem;'
     },
     {
       'name': 'md:-mb-1',
       'description': 'margin-bottom: -0.25rem;'
     },
     {
       'name': 'md:-ml-1',
       'description': 'margin-left: -0.25rem;'
     },
     {
       'name': 'md:-mt-2',
       'description': 'margin-top: -0.5rem;'
     },
     {
       'name': 'md:-mr-2',
       'description': 'margin-right: -0.5rem;'
     },
     {
       'name': 'md:-mb-2',
       'description': 'margin-bottom: -0.5rem;'
     },
     {
       'name': 'md:-ml-2',
       'description': 'margin-left: -0.5rem;'
     },
     {
       'name': 'md:-mt-3',
       'description': 'margin-top: -0.75rem;'
     },
     {
       'name': 'md:-mr-3',
       'description': 'margin-right: -0.75rem;'
     },
     {
       'name': 'md:-mb-3',
       'description': 'margin-bottom: -0.75rem;'
     },
     {
       'name': 'md:-ml-3',
       'description': 'margin-left: -0.75rem;'
     },
     {
       'name': 'md:-mt-4',
       'description': 'margin-top: -1rem;'
     },
     {
       'name': 'md:-mr-4',
       'description': 'margin-right: -1rem;'
     },
     {
       'name': 'md:-mb-4',
       'description': 'margin-bottom: -1rem;'
     },
     {
       'name': 'md:-ml-4',
       'description': 'margin-left: -1rem;'
     },
     {
       'name': 'md:-mt-5',
       'description': 'margin-top: -1.25rem;'
     },
     {
       'name': 'md:-mr-5',
       'description': 'margin-right: -1.25rem;'
     },
     {
       'name': 'md:-mb-5',
       'description': 'margin-bottom: -1.25rem;'
     },
     {
       'name': 'md:-ml-5',
       'description': 'margin-left: -1.25rem;'
     },
     {
       'name': 'md:-mt-6',
       'description': 'margin-top: -1.5rem;'
     },
     {
       'name': 'md:-mr-6',
       'description': 'margin-right: -1.5rem;'
     },
     {
       'name': 'md:-mb-6',
       'description': 'margin-bottom: -1.5rem;'
     },
     {
       'name': 'md:-ml-6',
       'description': 'margin-left: -1.5rem;'
     },
     {
       'name': 'md:-mt-8',
       'description': 'margin-top: -2rem;'
     },
     {
       'name': 'md:-mr-8',
       'description': 'margin-right: -2rem;'
     },
     {
       'name': 'md:-mb-8',
       'description': 'margin-bottom: -2rem;'
     },
     {
       'name': 'md:-ml-8',
       'description': 'margin-left: -2rem;'
     },
     {
       'name': 'md:-mt-10',
       'description': 'margin-top: -2.5rem;'
     },
     {
       'name': 'md:-mr-10',
       'description': 'margin-right: -2.5rem;'
     },
     {
       'name': 'md:-mb-10',
       'description': 'margin-bottom: -2.5rem;'
     },
     {
       'name': 'md:-ml-10',
       'description': 'margin-left: -2.5rem;'
     },
     {
       'name': 'md:-mt-12',
       'description': 'margin-top: -3rem;'
     },
     {
       'name': 'md:-mr-12',
       'description': 'margin-right: -3rem;'
     },
     {
       'name': 'md:-mb-12',
       'description': 'margin-bottom: -3rem;'
     },
     {
       'name': 'md:-ml-12',
       'description': 'margin-left: -3rem;'
     },
     {
       'name': 'md:-mt-16',
       'description': 'margin-top: -4rem;'
     },
     {
       'name': 'md:-mr-16',
       'description': 'margin-right: -4rem;'
     },
     {
       'name': 'md:-mb-16',
       'description': 'margin-bottom: -4rem;'
     },
     {
       'name': 'md:-ml-16',
       'description': 'margin-left: -4rem;'
     },
     {
       'name': 'md:-mt-20',
       'description': 'margin-top: -5rem;'
     },
     {
       'name': 'md:-mr-20',
       'description': 'margin-right: -5rem;'
     },
     {
       'name': 'md:-mb-20',
       'description': 'margin-bottom: -5rem;'
     },
     {
       'name': 'md:-ml-20',
       'description': 'margin-left: -5rem;'
     },
     {
       'name': 'md:-mt-24',
       'description': 'margin-top: -6rem;'
     },
     {
       'name': 'md:-mr-24',
       'description': 'margin-right: -6rem;'
     },
     {
       'name': 'md:-mb-24',
       'description': 'margin-bottom: -6rem;'
     },
     {
       'name': 'md:-ml-24',
       'description': 'margin-left: -6rem;'
     },
     {
       'name': 'md:-mt-32',
       'description': 'margin-top: -8rem;'
     },
     {
       'name': 'md:-mr-32',
       'description': 'margin-right: -8rem;'
     },
     {
       'name': 'md:-mb-32',
       'description': 'margin-bottom: -8rem;'
     },
     {
       'name': 'md:-ml-32',
       'description': 'margin-left: -8rem;'
     },
     {
       'name': 'md:-mt-px',
       'description': 'margin-top: -1px;'
     },
     {
       'name': 'md:-mr-px',
       'description': 'margin-right: -1px;'
     },
     {
       'name': 'md:-mb-px',
       'description': 'margin-bottom: -1px;'
     },
     {
       'name': 'md:-ml-px',
       'description': 'margin-left: -1px;'
     },
     {
       'name': 'md:opacity-0',
       'description': 'opacity: 0;'
     },
     {
       'name': 'md:opacity-25',
       'description': 'opacity: .25;'
     },
     {
       'name': 'md:opacity-50',
       'description': 'opacity: .5;'
     },
     {
       'name': 'md:opacity-75',
       'description': 'opacity: .75;'
     },
     {
       'name': 'md:opacity-100',
       'description': 'opacity: 1;'
     },
     {
       'name': 'md:overflow-auto',
       'description': 'overflow: auto;'
     },
     {
       'name': 'md:overflow-hidden',
       'description': 'overflow: hidden;'
     },
     {
       'name': 'md:overflow-visible',
       'description': 'overflow: visible;'
     },
     {
       'name': 'md:overflow-scroll',
       'description': 'overflow: scroll;'
     },
     {
       'name': 'md:overflow-x-auto',
       'description': 'overflow-x: auto;'
     },
     {
       'name': 'md:overflow-y-auto',
       'description': 'overflow-y: auto;'
     },
     {
       'name': 'md:overflow-x-hidden',
       'description': 'overflow-x: hidden;'
     },
     {
       'name': 'md:overflow-y-hidden',
       'description': 'overflow-y: hidden;'
     },
     {
       'name': 'md:overflow-x-visible',
       'description': 'overflow-x: visible;'
     },
     {
       'name': 'md:overflow-y-visible',
       'description': 'overflow-y: visible;'
     },
     {
       'name': 'md:overflow-x-scroll',
       'description': 'overflow-x: scroll;'
     },
     {
       'name': 'md:overflow-y-scroll',
       'description': 'overflow-y: scroll;'
     },
     {
       'name': 'md:scrolling-touch',
       'description': '-webkit-overflow-scrolling: touch;'
     },
     {
       'name': 'md:scrolling-auto',
       'description': '-webkit-overflow-scrolling: auto;'
     },
     {
       'name': 'md:p-0',
       'description': 'padding: 0;'
     },
     {
       'name': 'md:p-1',
       'description': 'padding: .25rem;'
     },
     {
       'name': 'md:p-2',
       'description': 'padding: .5rem;'
     },
     {
       'name': 'md:p-3',
       'description': 'padding: .75rem;'
     },
     {
       'name': 'md:p-4',
       'description': 'padding: 1rem;'
     },
     {
       'name': 'md:p-5',
       'description': 'padding: 1.25rem;'
     },
     {
       'name': 'md:p-6',
       'description': 'padding: 1.5rem;'
     },
     {
       'name': 'md:p-8',
       'description': 'padding: 2rem;'
     },
     {
       'name': 'md:p-10',
       'description': 'padding: 2.5rem;'
     },
     {
       'name': 'md:p-12',
       'description': 'padding: 3rem;'
     },
     {
       'name': 'md:p-16',
       'description': 'padding: 4rem;'
     },
     {
       'name': 'md:p-20',
       'description': 'padding: 5rem;'
     },
     {
       'name': 'md:p-24',
       'description': 'padding: 6rem;'
     },
     {
       'name': 'md:p-32',
       'description': 'padding: 8rem;'
     },
     {
       'name': 'md:p-px',
       'description': 'padding: 1px;'
     },
     {
       'name': 'md:py-0',
       'description': 'padding-top: 0; padding-bottom: 0;'
     },
     {
       'name': 'md:px-0',
       'description': 'padding-left: 0; padding-right: 0;'
     },
     {
       'name': 'md:py-1',
       'description': 'padding-top: .25rem; padding-bottom: .25rem;'
     },
     {
       'name': 'md:px-1',
       'description': 'padding-left: .25rem; padding-right: .25rem;'
     },
     {
       'name': 'md:py-2',
       'description': 'padding-top: .5rem; padding-bottom: .5rem;'
     },
     {
       'name': 'md:px-2',
       'description': 'padding-left: .5rem; padding-right: .5rem;'
     },
     {
       'name': 'md:py-3',
       'description': 'padding-top: .75rem; padding-bottom: .75rem;'
     },
     {
       'name': 'md:px-3',
       'description': 'padding-left: .75rem; padding-right: .75rem;'
     },
     {
       'name': 'md:py-4',
       'description': 'padding-top: 1rem; padding-bottom: 1rem;'
     },
     {
       'name': 'md:px-4',
       'description': 'padding-left: 1rem; padding-right: 1rem;'
     },
     {
       'name': 'md:py-5',
       'description': 'padding-top: 1.25rem; padding-bottom: 1.25rem;'
     },
     {
       'name': 'md:px-5',
       'description': 'padding-left: 1.25rem; padding-right: 1.25rem;'
     },
     {
       'name': 'md:py-6',
       'description': 'padding-top: 1.5rem; padding-bottom: 1.5rem;'
     },
     {
       'name': 'md:px-6',
       'description': 'padding-left: 1.5rem; padding-right: 1.5rem;'
     },
     {
       'name': 'md:py-8',
       'description': 'padding-top: 2rem; padding-bottom: 2rem;'
     },
     {
       'name': 'md:px-8',
       'description': 'padding-left: 2rem; padding-right: 2rem;'
     },
     {
       'name': 'md:py-10',
       'description': 'padding-top: 2.5rem; padding-bottom: 2.5rem;'
     },
     {
       'name': 'md:px-10',
       'description': 'padding-left: 2.5rem; padding-right: 2.5rem;'
     },
     {
       'name': 'md:py-12',
       'description': 'padding-top: 3rem; padding-bottom: 3rem;'
     },
     {
       'name': 'md:px-12',
       'description': 'padding-left: 3rem; padding-right: 3rem;'
     },
     {
       'name': 'md:py-16',
       'description': 'padding-top: 4rem; padding-bottom: 4rem;'
     },
     {
       'name': 'md:px-16',
       'description': 'padding-left: 4rem; padding-right: 4rem;'
     },
     {
       'name': 'md:py-20',
       'description': 'padding-top: 5rem; padding-bottom: 5rem;'
     },
     {
       'name': 'md:px-20',
       'description': 'padding-left: 5rem; padding-right: 5rem;'
     },
     {
       'name': 'md:py-24',
       'description': 'padding-top: 6rem; padding-bottom: 6rem;'
     },
     {
       'name': 'md:px-24',
       'description': 'padding-left: 6rem; padding-right: 6rem;'
     },
     {
       'name': 'md:py-32',
       'description': 'padding-top: 8rem; padding-bottom: 8rem;'
     },
     {
       'name': 'md:px-32',
       'description': 'padding-left: 8rem; padding-right: 8rem;'
     },
     {
       'name': 'md:py-px',
       'description': 'padding-top: 1px; padding-bottom: 1px;'
     },
     {
       'name': 'md:px-px',
       'description': 'padding-left: 1px; padding-right: 1px;'
     },
     {
       'name': 'md:pt-0',
       'description': 'padding-top: 0;'
     },
     {
       'name': 'md:pr-0',
       'description': 'padding-right: 0;'
     },
     {
       'name': 'md:pb-0',
       'description': 'padding-bottom: 0;'
     },
     {
       'name': 'md:pl-0',
       'description': 'padding-left: 0;'
     },
     {
       'name': 'md:pt-1',
       'description': 'padding-top: .25rem;'
     },
     {
       'name': 'md:pr-1',
       'description': 'padding-right: .25rem;'
     },
     {
       'name': 'md:pb-1',
       'description': 'padding-bottom: .25rem;'
     },
     {
       'name': 'md:pl-1',
       'description': 'padding-left: .25rem;'
     },
     {
       'name': 'md:pt-2',
       'description': 'padding-top: .5rem;'
     },
     {
       'name': 'md:pr-2',
       'description': 'padding-right: .5rem;'
     },
     {
       'name': 'md:pb-2',
       'description': 'padding-bottom: .5rem;'
     },
     {
       'name': 'md:pl-2',
       'description': 'padding-left: .5rem;'
     },
     {
       'name': 'md:pt-3',
       'description': 'padding-top: .75rem;'
     },
     {
       'name': 'md:pr-3',
       'description': 'padding-right: .75rem;'
     },
     {
       'name': 'md:pb-3',
       'description': 'padding-bottom: .75rem;'
     },
     {
       'name': 'md:pl-3',
       'description': 'padding-left: .75rem;'
     },
     {
       'name': 'md:pt-4',
       'description': 'padding-top: 1rem;'
     },
     {
       'name': 'md:pr-4',
       'description': 'padding-right: 1rem;'
     },
     {
       'name': 'md:pb-4',
       'description': 'padding-bottom: 1rem;'
     },
     {
       'name': 'md:pl-4',
       'description': 'padding-left: 1rem;'
     },
     {
       'name': 'md:pt-5',
       'description': 'padding-top: 1.25rem;'
     },
     {
       'name': 'md:pr-5',
       'description': 'padding-right: 1.25rem;'
     },
     {
       'name': 'md:pb-5',
       'description': 'padding-bottom: 1.25rem;'
     },
     {
       'name': 'md:pl-5',
       'description': 'padding-left: 1.25rem;'
     },
     {
       'name': 'md:pt-6',
       'description': 'padding-top: 1.5rem;'
     },
     {
       'name': 'md:pr-6',
       'description': 'padding-right: 1.5rem;'
     },
     {
       'name': 'md:pb-6',
       'description': 'padding-bottom: 1.5rem;'
     },
     {
       'name': 'md:pl-6',
       'description': 'padding-left: 1.5rem;'
     },
     {
       'name': 'md:pt-8',
       'description': 'padding-top: 2rem;'
     },
     {
       'name': 'md:pr-8',
       'description': 'padding-right: 2rem;'
     },
     {
       'name': 'md:pb-8',
       'description': 'padding-bottom: 2rem;'
     },
     {
       'name': 'md:pl-8',
       'description': 'padding-left: 2rem;'
     },
     {
       'name': 'md:pt-10',
       'description': 'padding-top: 2.5rem;'
     },
     {
       'name': 'md:pr-10',
       'description': 'padding-right: 2.5rem;'
     },
     {
       'name': 'md:pb-10',
       'description': 'padding-bottom: 2.5rem;'
     },
     {
       'name': 'md:pl-10',
       'description': 'padding-left: 2.5rem;'
     },
     {
       'name': 'md:pt-12',
       'description': 'padding-top: 3rem;'
     },
     {
       'name': 'md:pr-12',
       'description': 'padding-right: 3rem;'
     },
     {
       'name': 'md:pb-12',
       'description': 'padding-bottom: 3rem;'
     },
     {
       'name': 'md:pl-12',
       'description': 'padding-left: 3rem;'
     },
     {
       'name': 'md:pt-16',
       'description': 'padding-top: 4rem;'
     },
     {
       'name': 'md:pr-16',
       'description': 'padding-right: 4rem;'
     },
     {
       'name': 'md:pb-16',
       'description': 'padding-bottom: 4rem;'
     },
     {
       'name': 'md:pl-16',
       'description': 'padding-left: 4rem;'
     },
     {
       'name': 'md:pt-20',
       'description': 'padding-top: 5rem;'
     },
     {
       'name': 'md:pr-20',
       'description': 'padding-right: 5rem;'
     },
     {
       'name': 'md:pb-20',
       'description': 'padding-bottom: 5rem;'
     },
     {
       'name': 'md:pl-20',
       'description': 'padding-left: 5rem;'
     },
     {
       'name': 'md:pt-24',
       'description': 'padding-top: 6rem;'
     },
     {
       'name': 'md:pr-24',
       'description': 'padding-right: 6rem;'
     },
     {
       'name': 'md:pb-24',
       'description': 'padding-bottom: 6rem;'
     },
     {
       'name': 'md:pl-24',
       'description': 'padding-left: 6rem;'
     },
     {
       'name': 'md:pt-32',
       'description': 'padding-top: 8rem;'
     },
     {
       'name': 'md:pr-32',
       'description': 'padding-right: 8rem;'
     },
     {
       'name': 'md:pb-32',
       'description': 'padding-bottom: 8rem;'
     },
     {
       'name': 'md:pl-32',
       'description': 'padding-left: 8rem;'
     },
     {
       'name': 'md:pt-px',
       'description': 'padding-top: 1px;'
     },
     {
       'name': 'md:pr-px',
       'description': 'padding-right: 1px;'
     },
     {
       'name': 'md:pb-px',
       'description': 'padding-bottom: 1px;'
     },
     {
       'name': 'md:pl-px',
       'description': 'padding-left: 1px;'
     },
     {
       'name': 'md:pointer-events-none',
       'description': 'pointer-events: none;'
     },
     {
       'name': 'md:pointer-events-auto',
       'description': 'pointer-events: auto;'
     },
     {
       'name': 'md:static',
       'description': 'position: static;'
     },
     {
       'name': 'md:fixed',
       'description': 'position: fixed;'
     },
     {
       'name': 'md:absolute',
       'description': 'position: absolute;'
     },
     {
       'name': 'md:relative',
       'description': 'position: relative;'
     },
     {
       'name': 'md:sticky',
       'description': 'position: sticky;'
     },
     {
       'name': 'md:pin-none',
       'description': 'top: auto; right: auto; bottom: auto; left: auto;'
     },
     {
       'name': 'md:pin',
       'description': 'top: 0; right: 0; bottom: 0; left: 0;'
     },
     {
       'name': 'md:pin-y',
       'description': 'top: 0; bottom: 0;'
     },
     {
       'name': 'md:pin-x',
       'description': 'right: 0; left: 0;'
     },
     {
       'name': 'md:pin-t',
       'description': 'top: 0;'
     },
     {
       'name': 'md:pin-r',
       'description': 'right: 0;'
     },
     {
       'name': 'md:pin-b',
       'description': 'bottom: 0;'
     },
     {
       'name': 'md:pin-l',
       'description': 'left: 0;'
     },
     {
       'name': 'md:resize-none',
       'description': 'resize: none;'
     },
     {
       'name': 'md:resize-y',
       'description': 'resize: vertical;'
     },
     {
       'name': 'md:resize-x',
       'description': 'resize: horizontal;'
     },
     {
       'name': 'md:resize',
       'description': 'resize: both;'
     },
     {
       'name': 'md:shadow',
       'description': 'box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .1);'
     },
     {
       'name': 'md:shadow-md',
       'description': 'box-shadow: 0 4px 8px 0 rgba(0, 0, 0, .12), 0 2px 4px 0 rgba(0, 0, 0, .08);'
     },
     {
       'name': 'md:shadow-lg',
       'description': 'box-shadow: 0 15px 30px 0 rgba(0, 0, 0, .11), 0 5px 15px 0 rgba(0, 0, 0, .08);'
     },
     {
       'name': 'md:shadow-inner',
       'description': 'box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, .06);'
     },
     {
       'name': 'md:shadow-outline',
       'description': 'box-shadow: 0 0 0 3px rgba(52, 144, 220, .5);'
     },
     {
       'name': 'md:shadow-none',
       'description': 'box-shadow: none;'
     },
     {
       'name': 'md:hover:shadow',
       'description': ':hover { box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .1); }'
     },
     {
       'name': 'md:hover:shadow-md',
       'description': ':hover { box-shadow: 0 4px 8px 0 rgba(0, 0, 0, .12), 0 2px 4px 0 rgba(0, 0, 0, .08); }'
     },
     {
       'name': 'md:hover:shadow-lg',
       'description': ':hover { box-shadow: 0 15px 30px 0 rgba(0, 0, 0, .11), 0 5px 15px 0 rgba(0, 0, 0, .08); }'
     },
     {
       'name': 'md:hover:shadow-inner',
       'description': ':hover { box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, .06); }'
     },
     {
       'name': 'md:hover:shadow-outline',
       'description': ':hover { box-shadow: 0 0 0 3px rgba(52, 144, 220, .5); }'
     },
     {
       'name': 'md:hover:shadow-none',
       'description': ':hover { box-shadow: none; }'
     },
     {
       'name': 'md:focus:shadow',
       'description': ':focus { box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .1); }'
     },
     {
       'name': 'md:focus:shadow-md',
       'description': ':focus { box-shadow: 0 4px 8px 0 rgba(0, 0, 0, .12), 0 2px 4px 0 rgba(0, 0, 0, .08); }'
     },
     {
       'name': 'md:focus:shadow-lg',
       'description': ':focus { box-shadow: 0 15px 30px 0 rgba(0, 0, 0, .11), 0 5px 15px 0 rgba(0, 0, 0, .08); }'
     },
     {
       'name': 'md:focus:shadow-inner',
       'description': ':focus { box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, .06); }'
     },
     {
       'name': 'md:focus:shadow-outline',
       'description': ':focus { box-shadow: 0 0 0 3px rgba(52, 144, 220, .5); }'
     },
     {
       'name': 'md:focus:shadow-none',
       'description': ':focus { box-shadow: none; }'
     },
     {
       'name': 'md:table-auto',
       'description': 'table-layout: auto;'
     },
     {
       'name': 'md:table-fixed',
       'description': 'table-layout: fixed;'
     },
     {
       'name': 'md:text-left',
       'description': 'text-align: left;'
     },
     {
       'name': 'md:text-center',
       'description': 'text-align: center;'
     },
     {
       'name': 'md:text-right',
       'description': 'text-align: right;'
     },
     {
       'name': 'md:text-justify',
       'description': 'text-align: justify;'
     },
     {
       'name': 'md:text-transparent',
       'description': 'color: transparent;'
     },
     {
       'name': 'md:text-black',
       'description': 'color: #22292f;'
     },
     {
       'name': 'md:text-grey-darkest',
       'description': 'color: #3d4852;'
     },
     {
       'name': 'md:text-grey-darker',
       'description': 'color: #606f7b;'
     },
     {
       'name': 'md:text-grey-dark',
       'description': 'color: #8795a1;'
     },
     {
       'name': 'md:text-grey',
       'description': 'color: #b8c2cc;'
     },
     {
       'name': 'md:text-grey-light',
       'description': 'color: #dae1e7;'
     },
     {
       'name': 'md:text-grey-lighter',
       'description': 'color: #f1f5f8;'
     },
     {
       'name': 'md:text-grey-lightest',
       'description': 'color: #f8fafc;'
     },
     {
       'name': 'md:text-white',
       'description': 'color: #fff;'
     },
     {
       'name': 'md:text-red-darkest',
       'description': 'color: #3b0d0c;'
     },
     {
       'name': 'md:text-red-darker',
       'description': 'color: #621b18;'
     },
     {
       'name': 'md:text-red-dark',
       'description': 'color: #cc1f1a;'
     },
     {
       'name': 'md:text-red',
       'description': 'color: #e3342f;'
     },
     {
       'name': 'md:text-red-light',
       'description': 'color: #ef5753;'
     },
     {
       'name': 'md:text-red-lighter',
       'description': 'color: #f9acaa;'
     },
     {
       'name': 'md:text-red-lightest',
       'description': 'color: #fcebea;'
     },
     {
       'name': 'md:text-orange-darkest',
       'description': 'color: #462a16;'
     },
     {
       'name': 'md:text-orange-darker',
       'description': 'color: #613b1f;'
     },
     {
       'name': 'md:text-orange-dark',
       'description': 'color: #de751f;'
     },
     {
       'name': 'md:text-orange',
       'description': 'color: #f6993f;'
     },
     {
       'name': 'md:text-orange-light',
       'description': 'color: #faad63;'
     },
     {
       'name': 'md:text-orange-lighter',
       'description': 'color: #fcd9b6;'
     },
     {
       'name': 'md:text-orange-lightest',
       'description': 'color: #fff5eb;'
     },
     {
       'name': 'md:text-yellow-darkest',
       'description': 'color: #453411;'
     },
     {
       'name': 'md:text-yellow-darker',
       'description': 'color: #684f1d;'
     },
     {
       'name': 'md:text-yellow-dark',
       'description': 'color: #f2d024;'
     },
     {
       'name': 'md:text-yellow',
       'description': 'color: #ffed4a;'
     },
     {
       'name': 'md:text-yellow-light',
       'description': 'color: #fff382;'
     },
     {
       'name': 'md:text-yellow-lighter',
       'description': 'color: #fff9c2;'
     },
     {
       'name': 'md:text-yellow-lightest',
       'description': 'color: #fcfbeb;'
     },
     {
       'name': 'md:text-green-darkest',
       'description': 'color: #0f2f21;'
     },
     {
       'name': 'md:text-green-darker',
       'description': 'color: #1a4731;'
     },
     {
       'name': 'md:text-green-dark',
       'description': 'color: #1f9d55;'
     },
     {
       'name': 'md:text-green',
       'description': 'color: #38c172;'
     },
     {
       'name': 'md:text-green-light',
       'description': 'color: #51d88a;'
     },
     {
       'name': 'md:text-green-lighter',
       'description': 'color: #a2f5bf;'
     },
     {
       'name': 'md:text-green-lightest',
       'description': 'color: #e3fcec;'
     },
     {
       'name': 'md:text-teal-darkest',
       'description': 'color: #0d3331;'
     },
     {
       'name': 'md:text-teal-darker',
       'description': 'color: #20504f;'
     },
     {
       'name': 'md:text-teal-dark',
       'description': 'color: #38a89d;'
     },
     {
       'name': 'md:text-teal',
       'description': 'color: #4dc0b5;'
     },
     {
       'name': 'md:text-teal-light',
       'description': 'color: #64d5ca;'
     },
     {
       'name': 'md:text-teal-lighter',
       'description': 'color: #a0f0ed;'
     },
     {
       'name': 'md:text-teal-lightest',
       'description': 'color: #e8fffe;'
     },
     {
       'name': 'md:text-blue-darkest',
       'description': 'color: #12283a;'
     },
     {
       'name': 'md:text-blue-darker',
       'description': 'color: #1c3d5a;'
     },
     {
       'name': 'md:text-blue-dark',
       'description': 'color: #2779bd;'
     },
     {
       'name': 'md:text-blue',
       'description': 'color: #3490dc;'
     },
     {
       'name': 'md:text-blue-light',
       'description': 'color: #6cb2eb;'
     },
     {
       'name': 'md:text-blue-lighter',
       'description': 'color: #bcdefa;'
     },
     {
       'name': 'md:text-blue-lightest',
       'description': 'color: #eff8ff;'
     },
     {
       'name': 'md:text-indigo-darkest',
       'description': 'color: #191e38;'
     },
     {
       'name': 'md:text-indigo-darker',
       'description': 'color: #2f365f;'
     },
     {
       'name': 'md:text-indigo-dark',
       'description': 'color: #5661b3;'
     },
     {
       'name': 'md:text-indigo',
       'description': 'color: #6574cd;'
     },
     {
       'name': 'md:text-indigo-light',
       'description': 'color: #7886d7;'
     },
     {
       'name': 'md:text-indigo-lighter',
       'description': 'color: #b2b7ff;'
     },
     {
       'name': 'md:text-indigo-lightest',
       'description': 'color: #e6e8ff;'
     },
     {
       'name': 'md:text-purple-darkest',
       'description': 'color: #21183c;'
     },
     {
       'name': 'md:text-purple-darker',
       'description': 'color: #382b5f;'
     },
     {
       'name': 'md:text-purple-dark',
       'description': 'color: #794acf;'
     },
     {
       'name': 'md:text-purple',
       'description': 'color: #9561e2;'
     },
     {
       'name': 'md:text-purple-light',
       'description': 'color: #a779e9;'
     },
     {
       'name': 'md:text-purple-lighter',
       'description': 'color: #d6bbfc;'
     },
     {
       'name': 'md:text-purple-lightest',
       'description': 'color: #f3ebff;'
     },
     {
       'name': 'md:text-pink-darkest',
       'description': 'color: #451225;'
     },
     {
       'name': 'md:text-pink-darker',
       'description': 'color: #6f213f;'
     },
     {
       'name': 'md:text-pink-dark',
       'description': 'color: #eb5286;'
     },
     {
       'name': 'md:text-pink',
       'description': 'color: #f66d9b;'
     },
     {
       'name': 'md:text-pink-light',
       'description': 'color: #fa7ea8;'
     },
     {
       'name': 'md:text-pink-lighter',
       'description': 'color: #ffbbca;'
     },
     {
       'name': 'md:text-pink-lightest',
       'description': 'color: #ffebef;'
     },
     {
       'name': 'md:hover:text-transparent',
       'description': ':hover { color: transparent; }'
     },
     {
       'name': 'md:hover:text-black',
       'description': ':hover { color: #22292f; }'
     },
     {
       'name': 'md:hover:text-grey-darkest',
       'description': ':hover { color: #3d4852; }'
     },
     {
       'name': 'md:hover:text-grey-darker',
       'description': ':hover { color: #606f7b; }'
     },
     {
       'name': 'md:hover:text-grey-dark',
       'description': ':hover { color: #8795a1; }'
     },
     {
       'name': 'md:hover:text-grey',
       'description': ':hover { color: #b8c2cc; }'
     },
     {
       'name': 'md:hover:text-grey-light',
       'description': ':hover { color: #dae1e7; }'
     },
     {
       'name': 'md:hover:text-grey-lighter',
       'description': ':hover { color: #f1f5f8; }'
     },
     {
       'name': 'md:hover:text-grey-lightest',
       'description': ':hover { color: #f8fafc; }'
     },
     {
       'name': 'md:hover:text-white',
       'description': ':hover { color: #fff; }'
     },
     {
       'name': 'md:hover:text-red-darkest',
       'description': ':hover { color: #3b0d0c; }'
     },
     {
       'name': 'md:hover:text-red-darker',
       'description': ':hover { color: #621b18; }'
     },
     {
       'name': 'md:hover:text-red-dark',
       'description': ':hover { color: #cc1f1a; }'
     },
     {
       'name': 'md:hover:text-red',
       'description': ':hover { color: #e3342f; }'
     },
     {
       'name': 'md:hover:text-red-light',
       'description': ':hover { color: #ef5753; }'
     },
     {
       'name': 'md:hover:text-red-lighter',
       'description': ':hover { color: #f9acaa; }'
     },
     {
       'name': 'md:hover:text-red-lightest',
       'description': ':hover { color: #fcebea; }'
     },
     {
       'name': 'md:hover:text-orange-darkest',
       'description': ':hover { color: #462a16; }'
     },
     {
       'name': 'md:hover:text-orange-darker',
       'description': ':hover { color: #613b1f; }'
     },
     {
       'name': 'md:hover:text-orange-dark',
       'description': ':hover { color: #de751f; }'
     },
     {
       'name': 'md:hover:text-orange',
       'description': ':hover { color: #f6993f; }'
     },
     {
       'name': 'md:hover:text-orange-light',
       'description': ':hover { color: #faad63; }'
     },
     {
       'name': 'md:hover:text-orange-lighter',
       'description': ':hover { color: #fcd9b6; }'
     },
     {
       'name': 'md:hover:text-orange-lightest',
       'description': ':hover { color: #fff5eb; }'
     },
     {
       'name': 'md:hover:text-yellow-darkest',
       'description': ':hover { color: #453411; }'
     },
     {
       'name': 'md:hover:text-yellow-darker',
       'description': ':hover { color: #684f1d; }'
     },
     {
       'name': 'md:hover:text-yellow-dark',
       'description': ':hover { color: #f2d024; }'
     },
     {
       'name': 'md:hover:text-yellow',
       'description': ':hover { color: #ffed4a; }'
     },
     {
       'name': 'md:hover:text-yellow-light',
       'description': ':hover { color: #fff382; }'
     },
     {
       'name': 'md:hover:text-yellow-lighter',
       'description': ':hover { color: #fff9c2; }'
     },
     {
       'name': 'md:hover:text-yellow-lightest',
       'description': ':hover { color: #fcfbeb; }'
     },
     {
       'name': 'md:hover:text-green-darkest',
       'description': ':hover { color: #0f2f21; }'
     },
     {
       'name': 'md:hover:text-green-darker',
       'description': ':hover { color: #1a4731; }'
     },
     {
       'name': 'md:hover:text-green-dark',
       'description': ':hover { color: #1f9d55; }'
     },
     {
       'name': 'md:hover:text-green',
       'description': ':hover { color: #38c172; }'
     },
     {
       'name': 'md:hover:text-green-light',
       'description': ':hover { color: #51d88a; }'
     },
     {
       'name': 'md:hover:text-green-lighter',
       'description': ':hover { color: #a2f5bf; }'
     },
     {
       'name': 'md:hover:text-green-lightest',
       'description': ':hover { color: #e3fcec; }'
     },
     {
       'name': 'md:hover:text-teal-darkest',
       'description': ':hover { color: #0d3331; }'
     },
     {
       'name': 'md:hover:text-teal-darker',
       'description': ':hover { color: #20504f; }'
     },
     {
       'name': 'md:hover:text-teal-dark',
       'description': ':hover { color: #38a89d; }'
     },
     {
       'name': 'md:hover:text-teal',
       'description': ':hover { color: #4dc0b5; }'
     },
     {
       'name': 'md:hover:text-teal-light',
       'description': ':hover { color: #64d5ca; }'
     },
     {
       'name': 'md:hover:text-teal-lighter',
       'description': ':hover { color: #a0f0ed; }'
     },
     {
       'name': 'md:hover:text-teal-lightest',
       'description': ':hover { color: #e8fffe; }'
     },
     {
       'name': 'md:hover:text-blue-darkest',
       'description': ':hover { color: #12283a; }'
     },
     {
       'name': 'md:hover:text-blue-darker',
       'description': ':hover { color: #1c3d5a; }'
     },
     {
       'name': 'md:hover:text-blue-dark',
       'description': ':hover { color: #2779bd; }'
     },
     {
       'name': 'md:hover:text-blue',
       'description': ':hover { color: #3490dc; }'
     },
     {
       'name': 'md:hover:text-blue-light',
       'description': ':hover { color: #6cb2eb; }'
     },
     {
       'name': 'md:hover:text-blue-lighter',
       'description': ':hover { color: #bcdefa; }'
     },
     {
       'name': 'md:hover:text-blue-lightest',
       'description': ':hover { color: #eff8ff; }'
     },
     {
       'name': 'md:hover:text-indigo-darkest',
       'description': ':hover { color: #191e38; }'
     },
     {
       'name': 'md:hover:text-indigo-darker',
       'description': ':hover { color: #2f365f; }'
     },
     {
       'name': 'md:hover:text-indigo-dark',
       'description': ':hover { color: #5661b3; }'
     },
     {
       'name': 'md:hover:text-indigo',
       'description': ':hover { color: #6574cd; }'
     },
     {
       'name': 'md:hover:text-indigo-light',
       'description': ':hover { color: #7886d7; }'
     },
     {
       'name': 'md:hover:text-indigo-lighter',
       'description': ':hover { color: #b2b7ff; }'
     },
     {
       'name': 'md:hover:text-indigo-lightest',
       'description': ':hover { color: #e6e8ff; }'
     },
     {
       'name': 'md:hover:text-purple-darkest',
       'description': ':hover { color: #21183c; }'
     },
     {
       'name': 'md:hover:text-purple-darker',
       'description': ':hover { color: #382b5f; }'
     },
     {
       'name': 'md:hover:text-purple-dark',
       'description': ':hover { color: #794acf; }'
     },
     {
       'name': 'md:hover:text-purple',
       'description': ':hover { color: #9561e2; }'
     },
     {
       'name': 'md:hover:text-purple-light',
       'description': ':hover { color: #a779e9; }'
     },
     {
       'name': 'md:hover:text-purple-lighter',
       'description': ':hover { color: #d6bbfc; }'
     },
     {
       'name': 'md:hover:text-purple-lightest',
       'description': ':hover { color: #f3ebff; }'
     },
     {
       'name': 'md:hover:text-pink-darkest',
       'description': ':hover { color: #451225; }'
     },
     {
       'name': 'md:hover:text-pink-darker',
       'description': ':hover { color: #6f213f; }'
     },
     {
       'name': 'md:hover:text-pink-dark',
       'description': ':hover { color: #eb5286; }'
     },
     {
       'name': 'md:hover:text-pink',
       'description': ':hover { color: #f66d9b; }'
     },
     {
       'name': 'md:hover:text-pink-light',
       'description': ':hover { color: #fa7ea8; }'
     },
     {
       'name': 'md:hover:text-pink-lighter',
       'description': ':hover { color: #ffbbca; }'
     },
     {
       'name': 'md:hover:text-pink-lightest',
       'description': ':hover { color: #ffebef; }'
     },
     {
       'name': 'md:focus:text-transparent',
       'description': ':focus { color: transparent; }'
     },
     {
       'name': 'md:focus:text-black',
       'description': ':focus { color: #22292f; }'
     },
     {
       'name': 'md:focus:text-grey-darkest',
       'description': ':focus { color: #3d4852; }'
     },
     {
       'name': 'md:focus:text-grey-darker',
       'description': ':focus { color: #606f7b; }'
     },
     {
       'name': 'md:focus:text-grey-dark',
       'description': ':focus { color: #8795a1; }'
     },
     {
       'name': 'md:focus:text-grey',
       'description': ':focus { color: #b8c2cc; }'
     },
     {
       'name': 'md:focus:text-grey-light',
       'description': ':focus { color: #dae1e7; }'
     },
     {
       'name': 'md:focus:text-grey-lighter',
       'description': ':focus { color: #f1f5f8; }'
     },
     {
       'name': 'md:focus:text-grey-lightest',
       'description': ':focus { color: #f8fafc; }'
     },
     {
       'name': 'md:focus:text-white',
       'description': ':focus { color: #fff; }'
     },
     {
       'name': 'md:focus:text-red-darkest',
       'description': ':focus { color: #3b0d0c; }'
     },
     {
       'name': 'md:focus:text-red-darker',
       'description': ':focus { color: #621b18; }'
     },
     {
       'name': 'md:focus:text-red-dark',
       'description': ':focus { color: #cc1f1a; }'
     },
     {
       'name': 'md:focus:text-red',
       'description': ':focus { color: #e3342f; }'
     },
     {
       'name': 'md:focus:text-red-light',
       'description': ':focus { color: #ef5753; }'
     },
     {
       'name': 'md:focus:text-red-lighter',
       'description': ':focus { color: #f9acaa; }'
     },
     {
       'name': 'md:focus:text-red-lightest',
       'description': ':focus { color: #fcebea; }'
     },
     {
       'name': 'md:focus:text-orange-darkest',
       'description': ':focus { color: #462a16; }'
     },
     {
       'name': 'md:focus:text-orange-darker',
       'description': ':focus { color: #613b1f; }'
     },
     {
       'name': 'md:focus:text-orange-dark',
       'description': ':focus { color: #de751f; }'
     },
     {
       'name': 'md:focus:text-orange',
       'description': ':focus { color: #f6993f; }'
     },
     {
       'name': 'md:focus:text-orange-light',
       'description': ':focus { color: #faad63; }'
     },
     {
       'name': 'md:focus:text-orange-lighter',
       'description': ':focus { color: #fcd9b6; }'
     },
     {
       'name': 'md:focus:text-orange-lightest',
       'description': ':focus { color: #fff5eb; }'
     },
     {
       'name': 'md:focus:text-yellow-darkest',
       'description': ':focus { color: #453411; }'
     },
     {
       'name': 'md:focus:text-yellow-darker',
       'description': ':focus { color: #684f1d; }'
     },
     {
       'name': 'md:focus:text-yellow-dark',
       'description': ':focus { color: #f2d024; }'
     },
     {
       'name': 'md:focus:text-yellow',
       'description': ':focus { color: #ffed4a; }'
     },
     {
       'name': 'md:focus:text-yellow-light',
       'description': ':focus { color: #fff382; }'
     },
     {
       'name': 'md:focus:text-yellow-lighter',
       'description': ':focus { color: #fff9c2; }'
     },
     {
       'name': 'md:focus:text-yellow-lightest',
       'description': ':focus { color: #fcfbeb; }'
     },
     {
       'name': 'md:focus:text-green-darkest',
       'description': ':focus { color: #0f2f21; }'
     },
     {
       'name': 'md:focus:text-green-darker',
       'description': ':focus { color: #1a4731; }'
     },
     {
       'name': 'md:focus:text-green-dark',
       'description': ':focus { color: #1f9d55; }'
     },
     {
       'name': 'md:focus:text-green',
       'description': ':focus { color: #38c172; }'
     },
     {
       'name': 'md:focus:text-green-light',
       'description': ':focus { color: #51d88a; }'
     },
     {
       'name': 'md:focus:text-green-lighter',
       'description': ':focus { color: #a2f5bf; }'
     },
     {
       'name': 'md:focus:text-green-lightest',
       'description': ':focus { color: #e3fcec; }'
     },
     {
       'name': 'md:focus:text-teal-darkest',
       'description': ':focus { color: #0d3331; }'
     },
     {
       'name': 'md:focus:text-teal-darker',
       'description': ':focus { color: #20504f; }'
     },
     {
       'name': 'md:focus:text-teal-dark',
       'description': ':focus { color: #38a89d; }'
     },
     {
       'name': 'md:focus:text-teal',
       'description': ':focus { color: #4dc0b5; }'
     },
     {
       'name': 'md:focus:text-teal-light',
       'description': ':focus { color: #64d5ca; }'
     },
     {
       'name': 'md:focus:text-teal-lighter',
       'description': ':focus { color: #a0f0ed; }'
     },
     {
       'name': 'md:focus:text-teal-lightest',
       'description': ':focus { color: #e8fffe; }'
     },
     {
       'name': 'md:focus:text-blue-darkest',
       'description': ':focus { color: #12283a; }'
     },
     {
       'name': 'md:focus:text-blue-darker',
       'description': ':focus { color: #1c3d5a; }'
     },
     {
       'name': 'md:focus:text-blue-dark',
       'description': ':focus { color: #2779bd; }'
     },
     {
       'name': 'md:focus:text-blue',
       'description': ':focus { color: #3490dc; }'
     },
     {
       'name': 'md:focus:text-blue-light',
       'description': ':focus { color: #6cb2eb; }'
     },
     {
       'name': 'md:focus:text-blue-lighter',
       'description': ':focus { color: #bcdefa; }'
     },
     {
       'name': 'md:focus:text-blue-lightest',
       'description': ':focus { color: #eff8ff; }'
     },
     {
       'name': 'md:focus:text-indigo-darkest',
       'description': ':focus { color: #191e38; }'
     },
     {
       'name': 'md:focus:text-indigo-darker',
       'description': ':focus { color: #2f365f; }'
     },
     {
       'name': 'md:focus:text-indigo-dark',
       'description': ':focus { color: #5661b3; }'
     },
     {
       'name': 'md:focus:text-indigo',
       'description': ':focus { color: #6574cd; }'
     },
     {
       'name': 'md:focus:text-indigo-light',
       'description': ':focus { color: #7886d7; }'
     },
     {
       'name': 'md:focus:text-indigo-lighter',
       'description': ':focus { color: #b2b7ff; }'
     },
     {
       'name': 'md:focus:text-indigo-lightest',
       'description': ':focus { color: #e6e8ff; }'
     },
     {
       'name': 'md:focus:text-purple-darkest',
       'description': ':focus { color: #21183c; }'
     },
     {
       'name': 'md:focus:text-purple-darker',
       'description': ':focus { color: #382b5f; }'
     },
     {
       'name': 'md:focus:text-purple-dark',
       'description': ':focus { color: #794acf; }'
     },
     {
       'name': 'md:focus:text-purple',
       'description': ':focus { color: #9561e2; }'
     },
     {
       'name': 'md:focus:text-purple-light',
       'description': ':focus { color: #a779e9; }'
     },
     {
       'name': 'md:focus:text-purple-lighter',
       'description': ':focus { color: #d6bbfc; }'
     },
     {
       'name': 'md:focus:text-purple-lightest',
       'description': ':focus { color: #f3ebff; }'
     },
     {
       'name': 'md:focus:text-pink-darkest',
       'description': ':focus { color: #451225; }'
     },
     {
       'name': 'md:focus:text-pink-darker',
       'description': ':focus { color: #6f213f; }'
     },
     {
       'name': 'md:focus:text-pink-dark',
       'description': ':focus { color: #eb5286; }'
     },
     {
       'name': 'md:focus:text-pink',
       'description': ':focus { color: #f66d9b; }'
     },
     {
       'name': 'md:focus:text-pink-light',
       'description': ':focus { color: #fa7ea8; }'
     },
     {
       'name': 'md:focus:text-pink-lighter',
       'description': ':focus { color: #ffbbca; }'
     },
     {
       'name': 'md:focus:text-pink-lightest',
       'description': ':focus { color: #ffebef; }'
     },
     {
       'name': 'md:text-xs',
       'description': 'font-size: .75rem;'
     },
     {
       'name': 'md:text-sm',
       'description': 'font-size: .875rem;'
     },
     {
       'name': 'md:text-base',
       'description': 'font-size: 1rem;'
     },
     {
       'name': 'md:text-lg',
       'description': 'font-size: 1.125rem;'
     },
     {
       'name': 'md:text-xl',
       'description': 'font-size: 1.25rem;'
     },
     {
       'name': 'md:text-2xl',
       'description': 'font-size: 1.5rem;'
     },
     {
       'name': 'md:text-3xl',
       'description': 'font-size: 1.875rem;'
     },
     {
       'name': 'md:text-4xl',
       'description': 'font-size: 2.25rem;'
     },
     {
       'name': 'md:text-5xl',
       'description': 'font-size: 3rem;'
     },
     {
       'name': 'md:italic',
       'description': 'font-style: italic;'
     },
     {
       'name': 'md:roman',
       'description': 'font-style: normal;'
     },
     {
       'name': 'md:uppercase',
       'description': 'text-transform: uppercase;'
     },
     {
       'name': 'md:lowercase',
       'description': 'text-transform: lowercase;'
     },
     {
       'name': 'md:capitalize',
       'description': 'text-transform: capitalize;'
     },
     {
       'name': 'md:normal-case',
       'description': 'text-transform: none;'
     },
     {
       'name': 'md:underline',
       'description': 'text-decoration: underline;'
     },
     {
       'name': 'md:line-through',
       'description': 'text-decoration: line-through;'
     },
     {
       'name': 'md:no-underline',
       'description': 'text-decoration: none;'
     },
     {
       'name': 'md:antialiased',
       'description': '-webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;'
     },
     {
       'name': 'md:subpixel-antialiased',
       'description': '-webkit-font-smoothing: auto; -moz-osx-font-smoothing: auto;'
     },
     {
       'name': 'md:hover:italic',
       'description': ':hover { font-style: italic; }'
     },
     {
       'name': 'md:hover:roman',
       'description': ':hover { font-style: normal; }'
     },
     {
       'name': 'md:hover:uppercase',
       'description': ':hover { text-transform: uppercase; }'
     },
     {
       'name': 'md:hover:lowercase',
       'description': ':hover { text-transform: lowercase; }'
     },
     {
       'name': 'md:hover:capitalize',
       'description': ':hover { text-transform: capitalize; }'
     },
     {
       'name': 'md:hover:normal-case',
       'description': ':hover { text-transform: none; }'
     },
     {
       'name': 'md:hover:underline',
       'description': ':hover { text-decoration: underline; }'
     },
     {
       'name': 'md:hover:line-through',
       'description': ':hover { text-decoration: line-through; }'
     },
     {
       'name': 'md:hover:no-underline',
       'description': ':hover { text-decoration: none; }'
     },
     {
       'name': 'md:hover:antialiased',
       'description': ':hover { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }'
     },
     {
       'name': 'md:hover:subpixel-antialiased',
       'description': ':hover { -webkit-font-smoothing: auto; -moz-osx-font-smoothing: auto; }'
     },
     {
       'name': 'md:focus:italic',
       'description': ':focus { font-style: italic; }'
     },
     {
       'name': 'md:focus:roman',
       'description': ':focus { font-style: normal; }'
     },
     {
       'name': 'md:focus:uppercase',
       'description': ':focus { text-transform: uppercase; }'
     },
     {
       'name': 'md:focus:lowercase',
       'description': ':focus { text-transform: lowercase; }'
     },
     {
       'name': 'md:focus:capitalize',
       'description': ':focus { text-transform: capitalize; }'
     },
     {
       'name': 'md:focus:normal-case',
       'description': ':focus { text-transform: none; }'
     },
     {
       'name': 'md:focus:underline',
       'description': ':focus { text-decoration: underline; }'
     },
     {
       'name': 'md:focus:line-through',
       'description': ':focus { text-decoration: line-through; }'
     },
     {
       'name': 'md:focus:no-underline',
       'description': ':focus { text-decoration: none; }'
     },
     {
       'name': 'md:focus:antialiased',
       'description': ':focus { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }'
     },
     {
       'name': 'md:focus:subpixel-antialiased',
       'description': ':focus { -webkit-font-smoothing: auto; -moz-osx-font-smoothing: auto; }'
     },
     {
       'name': 'md:tracking-tight',
       'description': 'letter-spacing: -0.05em;'
     },
     {
       'name': 'md:tracking-normal',
       'description': 'letter-spacing: 0;'
     },
     {
       'name': 'md:tracking-wide',
       'description': 'letter-spacing: .05em;'
     },
     {
       'name': 'md:select-none',
       'description': 'user-select: none;'
     },
     {
       'name': 'md:select-text',
       'description': 'user-select: text;'
     },
     {
       'name': 'md:align-baseline',
       'description': 'vertical-align: baseline;'
     },
     {
       'name': 'md:align-top',
       'description': 'vertical-align: top;'
     },
     {
       'name': 'md:align-middle',
       'description': 'vertical-align: middle;'
     },
     {
       'name': 'md:align-bottom',
       'description': 'vertical-align: bottom;'
     },
     {
       'name': 'md:align-text-top',
       'description': 'vertical-align: text-top;'
     },
     {
       'name': 'md:align-text-bottom',
       'description': 'vertical-align: text-bottom;'
     },
     {
       'name': 'md:visible',
       'description': 'visibility: visible;'
     },
     {
       'name': 'md:invisible',
       'description': 'visibility: hidden;'
     },
     {
       'name': 'md:whitespace-normal',
       'description': 'white-space: normal;'
     },
     {
       'name': 'md:whitespace-no-wrap',
       'description': 'white-space: nowrap;'
     },
     {
       'name': 'md:whitespace-pre',
       'description': 'white-space: pre;'
     },
     {
       'name': 'md:whitespace-pre-line',
       'description': 'white-space: pre-line;'
     },
     {
       'name': 'md:whitespace-pre-wrap',
       'description': 'white-space: pre-wrap;'
     },
     {
       'name': 'md:break-words',
       'description': 'word-wrap: break-word;'
     },
     {
       'name': 'md:break-normal',
       'description': 'word-wrap: normal;'
     },
     {
       'name': 'md:truncate',
       'description': 'overflow: hidden; text-overflow: ellipsis; white-space: nowrap;'
     },
     {
       'name': 'md:w-1',
       'description': 'width: .25rem;'
     },
     {
       'name': 'md:w-2',
       'description': 'width: .5rem;'
     },
     {
       'name': 'md:w-3',
       'description': 'width: .75rem;'
     },
     {
       'name': 'md:w-4',
       'description': 'width: 1rem;'
     },
     {
       'name': 'md:w-5',
       'description': 'width: 1.25rem;'
     },
     {
       'name': 'md:w-6',
       'description': 'width: 1.5rem;'
     },
     {
       'name': 'md:w-8',
       'description': 'width: 2rem;'
     },
     {
       'name': 'md:w-10',
       'description': 'width: 2.5rem;'
     },
     {
       'name': 'md:w-12',
       'description': 'width: 3rem;'
     },
     {
       'name': 'md:w-16',
       'description': 'width: 4rem;'
     },
     {
       'name': 'md:w-24',
       'description': 'width: 6rem;'
     },
     {
       'name': 'md:w-32',
       'description': 'width: 8rem;'
     },
     {
       'name': 'md:w-48',
       'description': 'width: 12rem;'
     },
     {
       'name': 'md:w-64',
       'description': 'width: 16rem;'
     },
     {
       'name': 'md:w-auto',
       'description': 'width: auto;'
     },
     {
       'name': 'md:w-px',
       'description': 'width: 1px;'
     },
     {
       'name': 'md:w-1/2',
       'description': 'width: 50%;'
     },
     {
       'name': 'md:w-1/3',
       'description': 'width: 33.33333%;'
     },
     {
       'name': 'md:w-2/3',
       'description': 'width: 66.66667%;'
     },
     {
       'name': 'md:w-1/4',
       'description': 'width: 25%;'
     },
     {
       'name': 'md:w-3/4',
       'description': 'width: 75%;'
     },
     {
       'name': 'md:w-1/5',
       'description': 'width: 20%;'
     },
     {
       'name': 'md:w-2/5',
       'description': 'width: 40%;'
     },
     {
       'name': 'md:w-3/5',
       'description': 'width: 60%;'
     },
     {
       'name': 'md:w-4/5',
       'description': 'width: 80%;'
     },
     {
       'name': 'md:w-1/6',
       'description': 'width: 16.66667%;'
     },
     {
       'name': 'md:w-5/6',
       'description': 'width: 83.33333%;'
     },
     {
       'name': 'md:w-full',
       'description': 'width: 100%;'
     },
     {
       'name': 'md:w-screen',
       'description': 'width: 100vw;'
     },
     {
       'name': 'md:z-0',
       'description': 'z-index: 0;'
     },
     {
       'name': 'md:z-10',
       'description': 'z-index: 10;'
     },
     {
       'name': 'md:z-20',
       'description': 'z-index: 20;'
     },
     {
       'name': 'md:z-30',
       'description': 'z-index: 30;'
     },
     {
       'name': 'md:z-40',
       'description': 'z-index: 40;'
     },
     {
       'name': 'md:z-50',
       'description': 'z-index: 50;'
     },
     {
       'name': 'md:z-auto',
       'description': 'z-index: auto;'
     },
     {
       'name': 'lg:list-reset',
       'description': 'list-style: none; padding: 0;'
     },
     {
       'name': 'lg:appearance-none',
       'description': 'appearance: none;'
     },
     {
       'name': 'lg:bg-fixed',
       'description': 'background-attachment: fixed;'
     },
     {
       'name': 'lg:bg-local',
       'description': 'background-attachment: local;'
     },
     {
       'name': 'lg:bg-scroll',
       'description': 'background-attachment: scroll;'
     },
     {
       'name': 'lg:bg-transparent',
       'description': 'background-color: transparent;'
     },
     {
       'name': 'lg:bg-black',
       'description': 'background-color: #22292f;'
     },
     {
       'name': 'lg:bg-grey-darkest',
       'description': 'background-color: #3d4852;'
     },
     {
       'name': 'lg:bg-grey-darker',
       'description': 'background-color: #606f7b;'
     },
     {
       'name': 'lg:bg-grey-dark',
       'description': 'background-color: #8795a1;'
     },
     {
       'name': 'lg:bg-grey',
       'description': 'background-color: #b8c2cc;'
     },
     {
       'name': 'lg:bg-grey-light',
       'description': 'background-color: #dae1e7;'
     },
     {
       'name': 'lg:bg-grey-lighter',
       'description': 'background-color: #f1f5f8;'
     },
     {
       'name': 'lg:bg-grey-lightest',
       'description': 'background-color: #f8fafc;'
     },
     {
       'name': 'lg:bg-white',
       'description': 'background-color: #fff;'
     },
     {
       'name': 'lg:bg-red-darkest',
       'description': 'background-color: #3b0d0c;'
     },
     {
       'name': 'lg:bg-red-darker',
       'description': 'background-color: #621b18;'
     },
     {
       'name': 'lg:bg-red-dark',
       'description': 'background-color: #cc1f1a;'
     },
     {
       'name': 'lg:bg-red',
       'description': 'background-color: #e3342f;'
     },
     {
       'name': 'lg:bg-red-light',
       'description': 'background-color: #ef5753;'
     },
     {
       'name': 'lg:bg-red-lighter',
       'description': 'background-color: #f9acaa;'
     },
     {
       'name': 'lg:bg-red-lightest',
       'description': 'background-color: #fcebea;'
     },
     {
       'name': 'lg:bg-orange-darkest',
       'description': 'background-color: #462a16;'
     },
     {
       'name': 'lg:bg-orange-darker',
       'description': 'background-color: #613b1f;'
     },
     {
       'name': 'lg:bg-orange-dark',
       'description': 'background-color: #de751f;'
     },
     {
       'name': 'lg:bg-orange',
       'description': 'background-color: #f6993f;'
     },
     {
       'name': 'lg:bg-orange-light',
       'description': 'background-color: #faad63;'
     },
     {
       'name': 'lg:bg-orange-lighter',
       'description': 'background-color: #fcd9b6;'
     },
     {
       'name': 'lg:bg-orange-lightest',
       'description': 'background-color: #fff5eb;'
     },
     {
       'name': 'lg:bg-yellow-darkest',
       'description': 'background-color: #453411;'
     },
     {
       'name': 'lg:bg-yellow-darker',
       'description': 'background-color: #684f1d;'
     },
     {
       'name': 'lg:bg-yellow-dark',
       'description': 'background-color: #f2d024;'
     },
     {
       'name': 'lg:bg-yellow',
       'description': 'background-color: #ffed4a;'
     },
     {
       'name': 'lg:bg-yellow-light',
       'description': 'background-color: #fff382;'
     },
     {
       'name': 'lg:bg-yellow-lighter',
       'description': 'background-color: #fff9c2;'
     },
     {
       'name': 'lg:bg-yellow-lightest',
       'description': 'background-color: #fcfbeb;'
     },
     {
       'name': 'lg:bg-green-darkest',
       'description': 'background-color: #0f2f21;'
     },
     {
       'name': 'lg:bg-green-darker',
       'description': 'background-color: #1a4731;'
     },
     {
       'name': 'lg:bg-green-dark',
       'description': 'background-color: #1f9d55;'
     },
     {
       'name': 'lg:bg-green',
       'description': 'background-color: #38c172;'
     },
     {
       'name': 'lg:bg-green-light',
       'description': 'background-color: #51d88a;'
     },
     {
       'name': 'lg:bg-green-lighter',
       'description': 'background-color: #a2f5bf;'
     },
     {
       'name': 'lg:bg-green-lightest',
       'description': 'background-color: #e3fcec;'
     },
     {
       'name': 'lg:bg-teal-darkest',
       'description': 'background-color: #0d3331;'
     },
     {
       'name': 'lg:bg-teal-darker',
       'description': 'background-color: #20504f;'
     },
     {
       'name': 'lg:bg-teal-dark',
       'description': 'background-color: #38a89d;'
     },
     {
       'name': 'lg:bg-teal',
       'description': 'background-color: #4dc0b5;'
     },
     {
       'name': 'lg:bg-teal-light',
       'description': 'background-color: #64d5ca;'
     },
     {
       'name': 'lg:bg-teal-lighter',
       'description': 'background-color: #a0f0ed;'
     },
     {
       'name': 'lg:bg-teal-lightest',
       'description': 'background-color: #e8fffe;'
     },
     {
       'name': 'lg:bg-blue-darkest',
       'description': 'background-color: #12283a;'
     },
     {
       'name': 'lg:bg-blue-darker',
       'description': 'background-color: #1c3d5a;'
     },
     {
       'name': 'lg:bg-blue-dark',
       'description': 'background-color: #2779bd;'
     },
     {
       'name': 'lg:bg-blue',
       'description': 'background-color: #3490dc;'
     },
     {
       'name': 'lg:bg-blue-light',
       'description': 'background-color: #6cb2eb;'
     },
     {
       'name': 'lg:bg-blue-lighter',
       'description': 'background-color: #bcdefa;'
     },
     {
       'name': 'lg:bg-blue-lightest',
       'description': 'background-color: #eff8ff;'
     },
     {
       'name': 'lg:bg-indigo-darkest',
       'description': 'background-color: #191e38;'
     },
     {
       'name': 'lg:bg-indigo-darker',
       'description': 'background-color: #2f365f;'
     },
     {
       'name': 'lg:bg-indigo-dark',
       'description': 'background-color: #5661b3;'
     },
     {
       'name': 'lg:bg-indigo',
       'description': 'background-color: #6574cd;'
     },
     {
       'name': 'lg:bg-indigo-light',
       'description': 'background-color: #7886d7;'
     },
     {
       'name': 'lg:bg-indigo-lighter',
       'description': 'background-color: #b2b7ff;'
     },
     {
       'name': 'lg:bg-indigo-lightest',
       'description': 'background-color: #e6e8ff;'
     },
     {
       'name': 'lg:bg-purple-darkest',
       'description': 'background-color: #21183c;'
     },
     {
       'name': 'lg:bg-purple-darker',
       'description': 'background-color: #382b5f;'
     },
     {
       'name': 'lg:bg-purple-dark',
       'description': 'background-color: #794acf;'
     },
     {
       'name': 'lg:bg-purple',
       'description': 'background-color: #9561e2;'
     },
     {
       'name': 'lg:bg-purple-light',
       'description': 'background-color: #a779e9;'
     },
     {
       'name': 'lg:bg-purple-lighter',
       'description': 'background-color: #d6bbfc;'
     },
     {
       'name': 'lg:bg-purple-lightest',
       'description': 'background-color: #f3ebff;'
     },
     {
       'name': 'lg:bg-pink-darkest',
       'description': 'background-color: #451225;'
     },
     {
       'name': 'lg:bg-pink-darker',
       'description': 'background-color: #6f213f;'
     },
     {
       'name': 'lg:bg-pink-dark',
       'description': 'background-color: #eb5286;'
     },
     {
       'name': 'lg:bg-pink',
       'description': 'background-color: #f66d9b;'
     },
     {
       'name': 'lg:bg-pink-light',
       'description': 'background-color: #fa7ea8;'
     },
     {
       'name': 'lg:bg-pink-lighter',
       'description': 'background-color: #ffbbca;'
     },
     {
       'name': 'lg:bg-pink-lightest',
       'description': 'background-color: #ffebef;'
     },
     {
       'name': 'lg:hover:bg-transparent',
       'description': ':hover { background-color: transparent; }'
     },
     {
       'name': 'lg:hover:bg-black',
       'description': ':hover { background-color: #22292f; }'
     },
     {
       'name': 'lg:hover:bg-grey-darkest',
       'description': ':hover { background-color: #3d4852; }'
     },
     {
       'name': 'lg:hover:bg-grey-darker',
       'description': ':hover { background-color: #606f7b; }'
     },
     {
       'name': 'lg:hover:bg-grey-dark',
       'description': ':hover { background-color: #8795a1; }'
     },
     {
       'name': 'lg:hover:bg-grey',
       'description': ':hover { background-color: #b8c2cc; }'
     },
     {
       'name': 'lg:hover:bg-grey-light',
       'description': ':hover { background-color: #dae1e7; }'
     },
     {
       'name': 'lg:hover:bg-grey-lighter',
       'description': ':hover { background-color: #f1f5f8; }'
     },
     {
       'name': 'lg:hover:bg-grey-lightest',
       'description': ':hover { background-color: #f8fafc; }'
     },
     {
       'name': 'lg:hover:bg-white',
       'description': ':hover { background-color: #fff; }'
     },
     {
       'name': 'lg:hover:bg-red-darkest',
       'description': ':hover { background-color: #3b0d0c; }'
     },
     {
       'name': 'lg:hover:bg-red-darker',
       'description': ':hover { background-color: #621b18; }'
     },
     {
       'name': 'lg:hover:bg-red-dark',
       'description': ':hover { background-color: #cc1f1a; }'
     },
     {
       'name': 'lg:hover:bg-red',
       'description': ':hover { background-color: #e3342f; }'
     },
     {
       'name': 'lg:hover:bg-red-light',
       'description': ':hover { background-color: #ef5753; }'
     },
     {
       'name': 'lg:hover:bg-red-lighter',
       'description': ':hover { background-color: #f9acaa; }'
     },
     {
       'name': 'lg:hover:bg-red-lightest',
       'description': ':hover { background-color: #fcebea; }'
     },
     {
       'name': 'lg:hover:bg-orange-darkest',
       'description': ':hover { background-color: #462a16; }'
     },
     {
       'name': 'lg:hover:bg-orange-darker',
       'description': ':hover { background-color: #613b1f; }'
     },
     {
       'name': 'lg:hover:bg-orange-dark',
       'description': ':hover { background-color: #de751f; }'
     },
     {
       'name': 'lg:hover:bg-orange',
       'description': ':hover { background-color: #f6993f; }'
     },
     {
       'name': 'lg:hover:bg-orange-light',
       'description': ':hover { background-color: #faad63; }'
     },
     {
       'name': 'lg:hover:bg-orange-lighter',
       'description': ':hover { background-color: #fcd9b6; }'
     },
     {
       'name': 'lg:hover:bg-orange-lightest',
       'description': ':hover { background-color: #fff5eb; }'
     },
     {
       'name': 'lg:hover:bg-yellow-darkest',
       'description': ':hover { background-color: #453411; }'
     },
     {
       'name': 'lg:hover:bg-yellow-darker',
       'description': ':hover { background-color: #684f1d; }'
     },
     {
       'name': 'lg:hover:bg-yellow-dark',
       'description': ':hover { background-color: #f2d024; }'
     },
     {
       'name': 'lg:hover:bg-yellow',
       'description': ':hover { background-color: #ffed4a; }'
     },
     {
       'name': 'lg:hover:bg-yellow-light',
       'description': ':hover { background-color: #fff382; }'
     },
     {
       'name': 'lg:hover:bg-yellow-lighter',
       'description': ':hover { background-color: #fff9c2; }'
     },
     {
       'name': 'lg:hover:bg-yellow-lightest',
       'description': ':hover { background-color: #fcfbeb; }'
     },
     {
       'name': 'lg:hover:bg-green-darkest',
       'description': ':hover { background-color: #0f2f21; }'
     },
     {
       'name': 'lg:hover:bg-green-darker',
       'description': ':hover { background-color: #1a4731; }'
     },
     {
       'name': 'lg:hover:bg-green-dark',
       'description': ':hover { background-color: #1f9d55; }'
     },
     {
       'name': 'lg:hover:bg-green',
       'description': ':hover { background-color: #38c172; }'
     },
     {
       'name': 'lg:hover:bg-green-light',
       'description': ':hover { background-color: #51d88a; }'
     },
     {
       'name': 'lg:hover:bg-green-lighter',
       'description': ':hover { background-color: #a2f5bf; }'
     },
     {
       'name': 'lg:hover:bg-green-lightest',
       'description': ':hover { background-color: #e3fcec; }'
     },
     {
       'name': 'lg:hover:bg-teal-darkest',
       'description': ':hover { background-color: #0d3331; }'
     },
     {
       'name': 'lg:hover:bg-teal-darker',
       'description': ':hover { background-color: #20504f; }'
     },
     {
       'name': 'lg:hover:bg-teal-dark',
       'description': ':hover { background-color: #38a89d; }'
     },
     {
       'name': 'lg:hover:bg-teal',
       'description': ':hover { background-color: #4dc0b5; }'
     },
     {
       'name': 'lg:hover:bg-teal-light',
       'description': ':hover { background-color: #64d5ca; }'
     },
     {
       'name': 'lg:hover:bg-teal-lighter',
       'description': ':hover { background-color: #a0f0ed; }'
     },
     {
       'name': 'lg:hover:bg-teal-lightest',
       'description': ':hover { background-color: #e8fffe; }'
     },
     {
       'name': 'lg:hover:bg-blue-darkest',
       'description': ':hover { background-color: #12283a; }'
     },
     {
       'name': 'lg:hover:bg-blue-darker',
       'description': ':hover { background-color: #1c3d5a; }'
     },
     {
       'name': 'lg:hover:bg-blue-dark',
       'description': ':hover { background-color: #2779bd; }'
     },
     {
       'name': 'lg:hover:bg-blue',
       'description': ':hover { background-color: #3490dc; }'
     },
     {
       'name': 'lg:hover:bg-blue-light',
       'description': ':hover { background-color: #6cb2eb; }'
     },
     {
       'name': 'lg:hover:bg-blue-lighter',
       'description': ':hover { background-color: #bcdefa; }'
     },
     {
       'name': 'lg:hover:bg-blue-lightest',
       'description': ':hover { background-color: #eff8ff; }'
     },
     {
       'name': 'lg:hover:bg-indigo-darkest',
       'description': ':hover { background-color: #191e38; }'
     },
     {
       'name': 'lg:hover:bg-indigo-darker',
       'description': ':hover { background-color: #2f365f; }'
     },
     {
       'name': 'lg:hover:bg-indigo-dark',
       'description': ':hover { background-color: #5661b3; }'
     },
     {
       'name': 'lg:hover:bg-indigo',
       'description': ':hover { background-color: #6574cd; }'
     },
     {
       'name': 'lg:hover:bg-indigo-light',
       'description': ':hover { background-color: #7886d7; }'
     },
     {
       'name': 'lg:hover:bg-indigo-lighter',
       'description': ':hover { background-color: #b2b7ff; }'
     },
     {
       'name': 'lg:hover:bg-indigo-lightest',
       'description': ':hover { background-color: #e6e8ff; }'
     },
     {
       'name': 'lg:hover:bg-purple-darkest',
       'description': ':hover { background-color: #21183c; }'
     },
     {
       'name': 'lg:hover:bg-purple-darker',
       'description': ':hover { background-color: #382b5f; }'
     },
     {
       'name': 'lg:hover:bg-purple-dark',
       'description': ':hover { background-color: #794acf; }'
     },
     {
       'name': 'lg:hover:bg-purple',
       'description': ':hover { background-color: #9561e2; }'
     },
     {
       'name': 'lg:hover:bg-purple-light',
       'description': ':hover { background-color: #a779e9; }'
     },
     {
       'name': 'lg:hover:bg-purple-lighter',
       'description': ':hover { background-color: #d6bbfc; }'
     },
     {
       'name': 'lg:hover:bg-purple-lightest',
       'description': ':hover { background-color: #f3ebff; }'
     },
     {
       'name': 'lg:hover:bg-pink-darkest',
       'description': ':hover { background-color: #451225; }'
     },
     {
       'name': 'lg:hover:bg-pink-darker',
       'description': ':hover { background-color: #6f213f; }'
     },
     {
       'name': 'lg:hover:bg-pink-dark',
       'description': ':hover { background-color: #eb5286; }'
     },
     {
       'name': 'lg:hover:bg-pink',
       'description': ':hover { background-color: #f66d9b; }'
     },
     {
       'name': 'lg:hover:bg-pink-light',
       'description': ':hover { background-color: #fa7ea8; }'
     },
     {
       'name': 'lg:hover:bg-pink-lighter',
       'description': ':hover { background-color: #ffbbca; }'
     },
     {
       'name': 'lg:hover:bg-pink-lightest',
       'description': ':hover { background-color: #ffebef; }'
     },
     {
       'name': 'lg:focus:bg-transparent',
       'description': ':focus { background-color: transparent; }'
     },
     {
       'name': 'lg:focus:bg-black',
       'description': ':focus { background-color: #22292f; }'
     },
     {
       'name': 'lg:focus:bg-grey-darkest',
       'description': ':focus { background-color: #3d4852; }'
     },
     {
       'name': 'lg:focus:bg-grey-darker',
       'description': ':focus { background-color: #606f7b; }'
     },
     {
       'name': 'lg:focus:bg-grey-dark',
       'description': ':focus { background-color: #8795a1; }'
     },
     {
       'name': 'lg:focus:bg-grey',
       'description': ':focus { background-color: #b8c2cc; }'
     },
     {
       'name': 'lg:focus:bg-grey-light',
       'description': ':focus { background-color: #dae1e7; }'
     },
     {
       'name': 'lg:focus:bg-grey-lighter',
       'description': ':focus { background-color: #f1f5f8; }'
     },
     {
       'name': 'lg:focus:bg-grey-lightest',
       'description': ':focus { background-color: #f8fafc; }'
     },
     {
       'name': 'lg:focus:bg-white',
       'description': ':focus { background-color: #fff; }'
     },
     {
       'name': 'lg:focus:bg-red-darkest',
       'description': ':focus { background-color: #3b0d0c; }'
     },
     {
       'name': 'lg:focus:bg-red-darker',
       'description': ':focus { background-color: #621b18; }'
     },
     {
       'name': 'lg:focus:bg-red-dark',
       'description': ':focus { background-color: #cc1f1a; }'
     },
     {
       'name': 'lg:focus:bg-red',
       'description': ':focus { background-color: #e3342f; }'
     },
     {
       'name': 'lg:focus:bg-red-light',
       'description': ':focus { background-color: #ef5753; }'
     },
     {
       'name': 'lg:focus:bg-red-lighter',
       'description': ':focus { background-color: #f9acaa; }'
     },
     {
       'name': 'lg:focus:bg-red-lightest',
       'description': ':focus { background-color: #fcebea; }'
     },
     {
       'name': 'lg:focus:bg-orange-darkest',
       'description': ':focus { background-color: #462a16; }'
     },
     {
       'name': 'lg:focus:bg-orange-darker',
       'description': ':focus { background-color: #613b1f; }'
     },
     {
       'name': 'lg:focus:bg-orange-dark',
       'description': ':focus { background-color: #de751f; }'
     },
     {
       'name': 'lg:focus:bg-orange',
       'description': ':focus { background-color: #f6993f; }'
     },
     {
       'name': 'lg:focus:bg-orange-light',
       'description': ':focus { background-color: #faad63; }'
     },
     {
       'name': 'lg:focus:bg-orange-lighter',
       'description': ':focus { background-color: #fcd9b6; }'
     },
     {
       'name': 'lg:focus:bg-orange-lightest',
       'description': ':focus { background-color: #fff5eb; }'
     },
     {
       'name': 'lg:focus:bg-yellow-darkest',
       'description': ':focus { background-color: #453411; }'
     },
     {
       'name': 'lg:focus:bg-yellow-darker',
       'description': ':focus { background-color: #684f1d; }'
     },
     {
       'name': 'lg:focus:bg-yellow-dark',
       'description': ':focus { background-color: #f2d024; }'
     },
     {
       'name': 'lg:focus:bg-yellow',
       'description': ':focus { background-color: #ffed4a; }'
     },
     {
       'name': 'lg:focus:bg-yellow-light',
       'description': ':focus { background-color: #fff382; }'
     },
     {
       'name': 'lg:focus:bg-yellow-lighter',
       'description': ':focus { background-color: #fff9c2; }'
     },
     {
       'name': 'lg:focus:bg-yellow-lightest',
       'description': ':focus { background-color: #fcfbeb; }'
     },
     {
       'name': 'lg:focus:bg-green-darkest',
       'description': ':focus { background-color: #0f2f21; }'
     },
     {
       'name': 'lg:focus:bg-green-darker',
       'description': ':focus { background-color: #1a4731; }'
     },
     {
       'name': 'lg:focus:bg-green-dark',
       'description': ':focus { background-color: #1f9d55; }'
     },
     {
       'name': 'lg:focus:bg-green',
       'description': ':focus { background-color: #38c172; }'
     },
     {
       'name': 'lg:focus:bg-green-light',
       'description': ':focus { background-color: #51d88a; }'
     },
     {
       'name': 'lg:focus:bg-green-lighter',
       'description': ':focus { background-color: #a2f5bf; }'
     },
     {
       'name': 'lg:focus:bg-green-lightest',
       'description': ':focus { background-color: #e3fcec; }'
     },
     {
       'name': 'lg:focus:bg-teal-darkest',
       'description': ':focus { background-color: #0d3331; }'
     },
     {
       'name': 'lg:focus:bg-teal-darker',
       'description': ':focus { background-color: #20504f; }'
     },
     {
       'name': 'lg:focus:bg-teal-dark',
       'description': ':focus { background-color: #38a89d; }'
     },
     {
       'name': 'lg:focus:bg-teal',
       'description': ':focus { background-color: #4dc0b5; }'
     },
     {
       'name': 'lg:focus:bg-teal-light',
       'description': ':focus { background-color: #64d5ca; }'
     },
     {
       'name': 'lg:focus:bg-teal-lighter',
       'description': ':focus { background-color: #a0f0ed; }'
     },
     {
       'name': 'lg:focus:bg-teal-lightest',
       'description': ':focus { background-color: #e8fffe; }'
     },
     {
       'name': 'lg:focus:bg-blue-darkest',
       'description': ':focus { background-color: #12283a; }'
     },
     {
       'name': 'lg:focus:bg-blue-darker',
       'description': ':focus { background-color: #1c3d5a; }'
     },
     {
       'name': 'lg:focus:bg-blue-dark',
       'description': ':focus { background-color: #2779bd; }'
     },
     {
       'name': 'lg:focus:bg-blue',
       'description': ':focus { background-color: #3490dc; }'
     },
     {
       'name': 'lg:focus:bg-blue-light',
       'description': ':focus { background-color: #6cb2eb; }'
     },
     {
       'name': 'lg:focus:bg-blue-lighter',
       'description': ':focus { background-color: #bcdefa; }'
     },
     {
       'name': 'lg:focus:bg-blue-lightest',
       'description': ':focus { background-color: #eff8ff; }'
     },
     {
       'name': 'lg:focus:bg-indigo-darkest',
       'description': ':focus { background-color: #191e38; }'
     },
     {
       'name': 'lg:focus:bg-indigo-darker',
       'description': ':focus { background-color: #2f365f; }'
     },
     {
       'name': 'lg:focus:bg-indigo-dark',
       'description': ':focus { background-color: #5661b3; }'
     },
     {
       'name': 'lg:focus:bg-indigo',
       'description': ':focus { background-color: #6574cd; }'
     },
     {
       'name': 'lg:focus:bg-indigo-light',
       'description': ':focus { background-color: #7886d7; }'
     },
     {
       'name': 'lg:focus:bg-indigo-lighter',
       'description': ':focus { background-color: #b2b7ff; }'
     },
     {
       'name': 'lg:focus:bg-indigo-lightest',
       'description': ':focus { background-color: #e6e8ff; }'
     },
     {
       'name': 'lg:focus:bg-purple-darkest',
       'description': ':focus { background-color: #21183c; }'
     },
     {
       'name': 'lg:focus:bg-purple-darker',
       'description': ':focus { background-color: #382b5f; }'
     },
     {
       'name': 'lg:focus:bg-purple-dark',
       'description': ':focus { background-color: #794acf; }'
     },
     {
       'name': 'lg:focus:bg-purple',
       'description': ':focus { background-color: #9561e2; }'
     },
     {
       'name': 'lg:focus:bg-purple-light',
       'description': ':focus { background-color: #a779e9; }'
     },
     {
       'name': 'lg:focus:bg-purple-lighter',
       'description': ':focus { background-color: #d6bbfc; }'
     },
     {
       'name': 'lg:focus:bg-purple-lightest',
       'description': ':focus { background-color: #f3ebff; }'
     },
     {
       'name': 'lg:focus:bg-pink-darkest',
       'description': ':focus { background-color: #451225; }'
     },
     {
       'name': 'lg:focus:bg-pink-darker',
       'description': ':focus { background-color: #6f213f; }'
     },
     {
       'name': 'lg:focus:bg-pink-dark',
       'description': ':focus { background-color: #eb5286; }'
     },
     {
       'name': 'lg:focus:bg-pink',
       'description': ':focus { background-color: #f66d9b; }'
     },
     {
       'name': 'lg:focus:bg-pink-light',
       'description': ':focus { background-color: #fa7ea8; }'
     },
     {
       'name': 'lg:focus:bg-pink-lighter',
       'description': ':focus { background-color: #ffbbca; }'
     },
     {
       'name': 'lg:focus:bg-pink-lightest',
       'description': ':focus { background-color: #ffebef; }'
     },
     {
       'name': 'lg:bg-bottom',
       'description': 'background-position: bottom;'
     },
     {
       'name': 'lg:bg-center',
       'description': 'background-position: center;'
     },
     {
       'name': 'lg:bg-left',
       'description': 'background-position: left;'
     },
     {
       'name': 'lg:bg-left-bottom',
       'description': 'background-position: left bottom;'
     },
     {
       'name': 'lg:bg-left-top',
       'description': 'background-position: left top;'
     },
     {
       'name': 'lg:bg-right',
       'description': 'background-position: right;'
     },
     {
       'name': 'lg:bg-right-bottom',
       'description': 'background-position: right bottom;'
     },
     {
       'name': 'lg:bg-right-top',
       'description': 'background-position: right top;'
     },
     {
       'name': 'lg:bg-top',
       'description': 'background-position: top;'
     },
     {
       'name': 'lg:bg-repeat',
       'description': 'background-repeat: repeat;'
     },
     {
       'name': 'lg:bg-no-repeat',
       'description': 'background-repeat: no-repeat;'
     },
     {
       'name': 'lg:bg-repeat-x',
       'description': 'background-repeat: repeat-x;'
     },
     {
       'name': 'lg:bg-repeat-y',
       'description': 'background-repeat: repeat-y;'
     },
     {
       'name': 'lg:bg-auto',
       'description': 'background-size: auto;'
     },
     {
       'name': 'lg:bg-cover',
       'description': 'background-size: cover;'
     },
     {
       'name': 'lg:bg-contain',
       'description': 'background-size: contain;'
     },
     {
       'name': 'lg:border-transparent',
       'description': 'border-color: transparent;'
     },
     {
       'name': 'lg:border-black',
       'description': 'border-color: #22292f;'
     },
     {
       'name': 'lg:border-grey-darkest',
       'description': 'border-color: #3d4852;'
     },
     {
       'name': 'lg:border-grey-darker',
       'description': 'border-color: #606f7b;'
     },
     {
       'name': 'lg:border-grey-dark',
       'description': 'border-color: #8795a1;'
     },
     {
       'name': 'lg:border-grey',
       'description': 'border-color: #b8c2cc;'
     },
     {
       'name': 'lg:border-grey-light',
       'description': 'border-color: #dae1e7;'
     },
     {
       'name': 'lg:border-grey-lighter',
       'description': 'border-color: #f1f5f8;'
     },
     {
       'name': 'lg:border-grey-lightest',
       'description': 'border-color: #f8fafc;'
     },
     {
       'name': 'lg:border-white',
       'description': 'border-color: #fff;'
     },
     {
       'name': 'lg:border-red-darkest',
       'description': 'border-color: #3b0d0c;'
     },
     {
       'name': 'lg:border-red-darker',
       'description': 'border-color: #621b18;'
     },
     {
       'name': 'lg:border-red-dark',
       'description': 'border-color: #cc1f1a;'
     },
     {
       'name': 'lg:border-red',
       'description': 'border-color: #e3342f;'
     },
     {
       'name': 'lg:border-red-light',
       'description': 'border-color: #ef5753;'
     },
     {
       'name': 'lg:border-red-lighter',
       'description': 'border-color: #f9acaa;'
     },
     {
       'name': 'lg:border-red-lightest',
       'description': 'border-color: #fcebea;'
     },
     {
       'name': 'lg:border-orange-darkest',
       'description': 'border-color: #462a16;'
     },
     {
       'name': 'lg:border-orange-darker',
       'description': 'border-color: #613b1f;'
     },
     {
       'name': 'lg:border-orange-dark',
       'description': 'border-color: #de751f;'
     },
     {
       'name': 'lg:border-orange',
       'description': 'border-color: #f6993f;'
     },
     {
       'name': 'lg:border-orange-light',
       'description': 'border-color: #faad63;'
     },
     {
       'name': 'lg:border-orange-lighter',
       'description': 'border-color: #fcd9b6;'
     },
     {
       'name': 'lg:border-orange-lightest',
       'description': 'border-color: #fff5eb;'
     },
     {
       'name': 'lg:border-yellow-darkest',
       'description': 'border-color: #453411;'
     },
     {
       'name': 'lg:border-yellow-darker',
       'description': 'border-color: #684f1d;'
     },
     {
       'name': 'lg:border-yellow-dark',
       'description': 'border-color: #f2d024;'
     },
     {
       'name': 'lg:border-yellow',
       'description': 'border-color: #ffed4a;'
     },
     {
       'name': 'lg:border-yellow-light',
       'description': 'border-color: #fff382;'
     },
     {
       'name': 'lg:border-yellow-lighter',
       'description': 'border-color: #fff9c2;'
     },
     {
       'name': 'lg:border-yellow-lightest',
       'description': 'border-color: #fcfbeb;'
     },
     {
       'name': 'lg:border-green-darkest',
       'description': 'border-color: #0f2f21;'
     },
     {
       'name': 'lg:border-green-darker',
       'description': 'border-color: #1a4731;'
     },
     {
       'name': 'lg:border-green-dark',
       'description': 'border-color: #1f9d55;'
     },
     {
       'name': 'lg:border-green',
       'description': 'border-color: #38c172;'
     },
     {
       'name': 'lg:border-green-light',
       'description': 'border-color: #51d88a;'
     },
     {
       'name': 'lg:border-green-lighter',
       'description': 'border-color: #a2f5bf;'
     },
     {
       'name': 'lg:border-green-lightest',
       'description': 'border-color: #e3fcec;'
     },
     {
       'name': 'lg:border-teal-darkest',
       'description': 'border-color: #0d3331;'
     },
     {
       'name': 'lg:border-teal-darker',
       'description': 'border-color: #20504f;'
     },
     {
       'name': 'lg:border-teal-dark',
       'description': 'border-color: #38a89d;'
     },
     {
       'name': 'lg:border-teal',
       'description': 'border-color: #4dc0b5;'
     },
     {
       'name': 'lg:border-teal-light',
       'description': 'border-color: #64d5ca;'
     },
     {
       'name': 'lg:border-teal-lighter',
       'description': 'border-color: #a0f0ed;'
     },
     {
       'name': 'lg:border-teal-lightest',
       'description': 'border-color: #e8fffe;'
     },
     {
       'name': 'lg:border-blue-darkest',
       'description': 'border-color: #12283a;'
     },
     {
       'name': 'lg:border-blue-darker',
       'description': 'border-color: #1c3d5a;'
     },
     {
       'name': 'lg:border-blue-dark',
       'description': 'border-color: #2779bd;'
     },
     {
       'name': 'lg:border-blue',
       'description': 'border-color: #3490dc;'
     },
     {
       'name': 'lg:border-blue-light',
       'description': 'border-color: #6cb2eb;'
     },
     {
       'name': 'lg:border-blue-lighter',
       'description': 'border-color: #bcdefa;'
     },
     {
       'name': 'lg:border-blue-lightest',
       'description': 'border-color: #eff8ff;'
     },
     {
       'name': 'lg:border-indigo-darkest',
       'description': 'border-color: #191e38;'
     },
     {
       'name': 'lg:border-indigo-darker',
       'description': 'border-color: #2f365f;'
     },
     {
       'name': 'lg:border-indigo-dark',
       'description': 'border-color: #5661b3;'
     },
     {
       'name': 'lg:border-indigo',
       'description': 'border-color: #6574cd;'
     },
     {
       'name': 'lg:border-indigo-light',
       'description': 'border-color: #7886d7;'
     },
     {
       'name': 'lg:border-indigo-lighter',
       'description': 'border-color: #b2b7ff;'
     },
     {
       'name': 'lg:border-indigo-lightest',
       'description': 'border-color: #e6e8ff;'
     },
     {
       'name': 'lg:border-purple-darkest',
       'description': 'border-color: #21183c;'
     },
     {
       'name': 'lg:border-purple-darker',
       'description': 'border-color: #382b5f;'
     },
     {
       'name': 'lg:border-purple-dark',
       'description': 'border-color: #794acf;'
     },
     {
       'name': 'lg:border-purple',
       'description': 'border-color: #9561e2;'
     },
     {
       'name': 'lg:border-purple-light',
       'description': 'border-color: #a779e9;'
     },
     {
       'name': 'lg:border-purple-lighter',
       'description': 'border-color: #d6bbfc;'
     },
     {
       'name': 'lg:border-purple-lightest',
       'description': 'border-color: #f3ebff;'
     },
     {
       'name': 'lg:border-pink-darkest',
       'description': 'border-color: #451225;'
     },
     {
       'name': 'lg:border-pink-darker',
       'description': 'border-color: #6f213f;'
     },
     {
       'name': 'lg:border-pink-dark',
       'description': 'border-color: #eb5286;'
     },
     {
       'name': 'lg:border-pink',
       'description': 'border-color: #f66d9b;'
     },
     {
       'name': 'lg:border-pink-light',
       'description': 'border-color: #fa7ea8;'
     },
     {
       'name': 'lg:border-pink-lighter',
       'description': 'border-color: #ffbbca;'
     },
     {
       'name': 'lg:border-pink-lightest',
       'description': 'border-color: #ffebef;'
     },
     {
       'name': 'lg:hover:border-transparent',
       'description': ':hover { border-color: transparent; }'
     },
     {
       'name': 'lg:hover:border-black',
       'description': ':hover { border-color: #22292f; }'
     },
     {
       'name': 'lg:hover:border-grey-darkest',
       'description': ':hover { border-color: #3d4852; }'
     },
     {
       'name': 'lg:hover:border-grey-darker',
       'description': ':hover { border-color: #606f7b; }'
     },
     {
       'name': 'lg:hover:border-grey-dark',
       'description': ':hover { border-color: #8795a1; }'
     },
     {
       'name': 'lg:hover:border-grey',
       'description': ':hover { border-color: #b8c2cc; }'
     },
     {
       'name': 'lg:hover:border-grey-light',
       'description': ':hover { border-color: #dae1e7; }'
     },
     {
       'name': 'lg:hover:border-grey-lighter',
       'description': ':hover { border-color: #f1f5f8; }'
     },
     {
       'name': 'lg:hover:border-grey-lightest',
       'description': ':hover { border-color: #f8fafc; }'
     },
     {
       'name': 'lg:hover:border-white',
       'description': ':hover { border-color: #fff; }'
     },
     {
       'name': 'lg:hover:border-red-darkest',
       'description': ':hover { border-color: #3b0d0c; }'
     },
     {
       'name': 'lg:hover:border-red-darker',
       'description': ':hover { border-color: #621b18; }'
     },
     {
       'name': 'lg:hover:border-red-dark',
       'description': ':hover { border-color: #cc1f1a; }'
     },
     {
       'name': 'lg:hover:border-red',
       'description': ':hover { border-color: #e3342f; }'
     },
     {
       'name': 'lg:hover:border-red-light',
       'description': ':hover { border-color: #ef5753; }'
     },
     {
       'name': 'lg:hover:border-red-lighter',
       'description': ':hover { border-color: #f9acaa; }'
     },
     {
       'name': 'lg:hover:border-red-lightest',
       'description': ':hover { border-color: #fcebea; }'
     },
     {
       'name': 'lg:hover:border-orange-darkest',
       'description': ':hover { border-color: #462a16; }'
     },
     {
       'name': 'lg:hover:border-orange-darker',
       'description': ':hover { border-color: #613b1f; }'
     },
     {
       'name': 'lg:hover:border-orange-dark',
       'description': ':hover { border-color: #de751f; }'
     },
     {
       'name': 'lg:hover:border-orange',
       'description': ':hover { border-color: #f6993f; }'
     },
     {
       'name': 'lg:hover:border-orange-light',
       'description': ':hover { border-color: #faad63; }'
     },
     {
       'name': 'lg:hover:border-orange-lighter',
       'description': ':hover { border-color: #fcd9b6; }'
     },
     {
       'name': 'lg:hover:border-orange-lightest',
       'description': ':hover { border-color: #fff5eb; }'
     },
     {
       'name': 'lg:hover:border-yellow-darkest',
       'description': ':hover { border-color: #453411; }'
     },
     {
       'name': 'lg:hover:border-yellow-darker',
       'description': ':hover { border-color: #684f1d; }'
     },
     {
       'name': 'lg:hover:border-yellow-dark',
       'description': ':hover { border-color: #f2d024; }'
     },
     {
       'name': 'lg:hover:border-yellow',
       'description': ':hover { border-color: #ffed4a; }'
     },
     {
       'name': 'lg:hover:border-yellow-light',
       'description': ':hover { border-color: #fff382; }'
     },
     {
       'name': 'lg:hover:border-yellow-lighter',
       'description': ':hover { border-color: #fff9c2; }'
     },
     {
       'name': 'lg:hover:border-yellow-lightest',
       'description': ':hover { border-color: #fcfbeb; }'
     },
     {
       'name': 'lg:hover:border-green-darkest',
       'description': ':hover { border-color: #0f2f21; }'
     },
     {
       'name': 'lg:hover:border-green-darker',
       'description': ':hover { border-color: #1a4731; }'
     },
     {
       'name': 'lg:hover:border-green-dark',
       'description': ':hover { border-color: #1f9d55; }'
     },
     {
       'name': 'lg:hover:border-green',
       'description': ':hover { border-color: #38c172; }'
     },
     {
       'name': 'lg:hover:border-green-light',
       'description': ':hover { border-color: #51d88a; }'
     },
     {
       'name': 'lg:hover:border-green-lighter',
       'description': ':hover { border-color: #a2f5bf; }'
     },
     {
       'name': 'lg:hover:border-green-lightest',
       'description': ':hover { border-color: #e3fcec; }'
     },
     {
       'name': 'lg:hover:border-teal-darkest',
       'description': ':hover { border-color: #0d3331; }'
     },
     {
       'name': 'lg:hover:border-teal-darker',
       'description': ':hover { border-color: #20504f; }'
     },
     {
       'name': 'lg:hover:border-teal-dark',
       'description': ':hover { border-color: #38a89d; }'
     },
     {
       'name': 'lg:hover:border-teal',
       'description': ':hover { border-color: #4dc0b5; }'
     },
     {
       'name': 'lg:hover:border-teal-light',
       'description': ':hover { border-color: #64d5ca; }'
     },
     {
       'name': 'lg:hover:border-teal-lighter',
       'description': ':hover { border-color: #a0f0ed; }'
     },
     {
       'name': 'lg:hover:border-teal-lightest',
       'description': ':hover { border-color: #e8fffe; }'
     },
     {
       'name': 'lg:hover:border-blue-darkest',
       'description': ':hover { border-color: #12283a; }'
     },
     {
       'name': 'lg:hover:border-blue-darker',
       'description': ':hover { border-color: #1c3d5a; }'
     },
     {
       'name': 'lg:hover:border-blue-dark',
       'description': ':hover { border-color: #2779bd; }'
     },
     {
       'name': 'lg:hover:border-blue',
       'description': ':hover { border-color: #3490dc; }'
     },
     {
       'name': 'lg:hover:border-blue-light',
       'description': ':hover { border-color: #6cb2eb; }'
     },
     {
       'name': 'lg:hover:border-blue-lighter',
       'description': ':hover { border-color: #bcdefa; }'
     },
     {
       'name': 'lg:hover:border-blue-lightest',
       'description': ':hover { border-color: #eff8ff; }'
     },
     {
       'name': 'lg:hover:border-indigo-darkest',
       'description': ':hover { border-color: #191e38; }'
     },
     {
       'name': 'lg:hover:border-indigo-darker',
       'description': ':hover { border-color: #2f365f; }'
     },
     {
       'name': 'lg:hover:border-indigo-dark',
       'description': ':hover { border-color: #5661b3; }'
     },
     {
       'name': 'lg:hover:border-indigo',
       'description': ':hover { border-color: #6574cd; }'
     },
     {
       'name': 'lg:hover:border-indigo-light',
       'description': ':hover { border-color: #7886d7; }'
     },
     {
       'name': 'lg:hover:border-indigo-lighter',
       'description': ':hover { border-color: #b2b7ff; }'
     },
     {
       'name': 'lg:hover:border-indigo-lightest',
       'description': ':hover { border-color: #e6e8ff; }'
     },
     {
       'name': 'lg:hover:border-purple-darkest',
       'description': ':hover { border-color: #21183c; }'
     },
     {
       'name': 'lg:hover:border-purple-darker',
       'description': ':hover { border-color: #382b5f; }'
     },
     {
       'name': 'lg:hover:border-purple-dark',
       'description': ':hover { border-color: #794acf; }'
     },
     {
       'name': 'lg:hover:border-purple',
       'description': ':hover { border-color: #9561e2; }'
     },
     {
       'name': 'lg:hover:border-purple-light',
       'description': ':hover { border-color: #a779e9; }'
     },
     {
       'name': 'lg:hover:border-purple-lighter',
       'description': ':hover { border-color: #d6bbfc; }'
     },
     {
       'name': 'lg:hover:border-purple-lightest',
       'description': ':hover { border-color: #f3ebff; }'
     },
     {
       'name': 'lg:hover:border-pink-darkest',
       'description': ':hover { border-color: #451225; }'
     },
     {
       'name': 'lg:hover:border-pink-darker',
       'description': ':hover { border-color: #6f213f; }'
     },
     {
       'name': 'lg:hover:border-pink-dark',
       'description': ':hover { border-color: #eb5286; }'
     },
     {
       'name': 'lg:hover:border-pink',
       'description': ':hover { border-color: #f66d9b; }'
     },
     {
       'name': 'lg:hover:border-pink-light',
       'description': ':hover { border-color: #fa7ea8; }'
     },
     {
       'name': 'lg:hover:border-pink-lighter',
       'description': ':hover { border-color: #ffbbca; }'
     },
     {
       'name': 'lg:hover:border-pink-lightest',
       'description': ':hover { border-color: #ffebef; }'
     },
     {
       'name': 'lg:focus:border-transparent',
       'description': ':focus { border-color: transparent; }'
     },
     {
       'name': 'lg:focus:border-black',
       'description': ':focus { border-color: #22292f; }'
     },
     {
       'name': 'lg:focus:border-grey-darkest',
       'description': ':focus { border-color: #3d4852; }'
     },
     {
       'name': 'lg:focus:border-grey-darker',
       'description': ':focus { border-color: #606f7b; }'
     },
     {
       'name': 'lg:focus:border-grey-dark',
       'description': ':focus { border-color: #8795a1; }'
     },
     {
       'name': 'lg:focus:border-grey',
       'description': ':focus { border-color: #b8c2cc; }'
     },
     {
       'name': 'lg:focus:border-grey-light',
       'description': ':focus { border-color: #dae1e7; }'
     },
     {
       'name': 'lg:focus:border-grey-lighter',
       'description': ':focus { border-color: #f1f5f8; }'
     },
     {
       'name': 'lg:focus:border-grey-lightest',
       'description': ':focus { border-color: #f8fafc; }'
     },
     {
       'name': 'lg:focus:border-white',
       'description': ':focus { border-color: #fff; }'
     },
     {
       'name': 'lg:focus:border-red-darkest',
       'description': ':focus { border-color: #3b0d0c; }'
     },
     {
       'name': 'lg:focus:border-red-darker',
       'description': ':focus { border-color: #621b18; }'
     },
     {
       'name': 'lg:focus:border-red-dark',
       'description': ':focus { border-color: #cc1f1a; }'
     },
     {
       'name': 'lg:focus:border-red',
       'description': ':focus { border-color: #e3342f; }'
     },
     {
       'name': 'lg:focus:border-red-light',
       'description': ':focus { border-color: #ef5753; }'
     },
     {
       'name': 'lg:focus:border-red-lighter',
       'description': ':focus { border-color: #f9acaa; }'
     },
     {
       'name': 'lg:focus:border-red-lightest',
       'description': ':focus { border-color: #fcebea; }'
     },
     {
       'name': 'lg:focus:border-orange-darkest',
       'description': ':focus { border-color: #462a16; }'
     },
     {
       'name': 'lg:focus:border-orange-darker',
       'description': ':focus { border-color: #613b1f; }'
     },
     {
       'name': 'lg:focus:border-orange-dark',
       'description': ':focus { border-color: #de751f; }'
     },
     {
       'name': 'lg:focus:border-orange',
       'description': ':focus { border-color: #f6993f; }'
     },
     {
       'name': 'lg:focus:border-orange-light',
       'description': ':focus { border-color: #faad63; }'
     },
     {
       'name': 'lg:focus:border-orange-lighter',
       'description': ':focus { border-color: #fcd9b6; }'
     },
     {
       'name': 'lg:focus:border-orange-lightest',
       'description': ':focus { border-color: #fff5eb; }'
     },
     {
       'name': 'lg:focus:border-yellow-darkest',
       'description': ':focus { border-color: #453411; }'
     },
     {
       'name': 'lg:focus:border-yellow-darker',
       'description': ':focus { border-color: #684f1d; }'
     },
     {
       'name': 'lg:focus:border-yellow-dark',
       'description': ':focus { border-color: #f2d024; }'
     },
     {
       'name': 'lg:focus:border-yellow',
       'description': ':focus { border-color: #ffed4a; }'
     },
     {
       'name': 'lg:focus:border-yellow-light',
       'description': ':focus { border-color: #fff382; }'
     },
     {
       'name': 'lg:focus:border-yellow-lighter',
       'description': ':focus { border-color: #fff9c2; }'
     },
     {
       'name': 'lg:focus:border-yellow-lightest',
       'description': ':focus { border-color: #fcfbeb; }'
     },
     {
       'name': 'lg:focus:border-green-darkest',
       'description': ':focus { border-color: #0f2f21; }'
     },
     {
       'name': 'lg:focus:border-green-darker',
       'description': ':focus { border-color: #1a4731; }'
     },
     {
       'name': 'lg:focus:border-green-dark',
       'description': ':focus { border-color: #1f9d55; }'
     },
     {
       'name': 'lg:focus:border-green',
       'description': ':focus { border-color: #38c172; }'
     },
     {
       'name': 'lg:focus:border-green-light',
       'description': ':focus { border-color: #51d88a; }'
     },
     {
       'name': 'lg:focus:border-green-lighter',
       'description': ':focus { border-color: #a2f5bf; }'
     },
     {
       'name': 'lg:focus:border-green-lightest',
       'description': ':focus { border-color: #e3fcec; }'
     },
     {
       'name': 'lg:focus:border-teal-darkest',
       'description': ':focus { border-color: #0d3331; }'
     },
     {
       'name': 'lg:focus:border-teal-darker',
       'description': ':focus { border-color: #20504f; }'
     },
     {
       'name': 'lg:focus:border-teal-dark',
       'description': ':focus { border-color: #38a89d; }'
     },
     {
       'name': 'lg:focus:border-teal',
       'description': ':focus { border-color: #4dc0b5; }'
     },
     {
       'name': 'lg:focus:border-teal-light',
       'description': ':focus { border-color: #64d5ca; }'
     },
     {
       'name': 'lg:focus:border-teal-lighter',
       'description': ':focus { border-color: #a0f0ed; }'
     },
     {
       'name': 'lg:focus:border-teal-lightest',
       'description': ':focus { border-color: #e8fffe; }'
     },
     {
       'name': 'lg:focus:border-blue-darkest',
       'description': ':focus { border-color: #12283a; }'
     },
     {
       'name': 'lg:focus:border-blue-darker',
       'description': ':focus { border-color: #1c3d5a; }'
     },
     {
       'name': 'lg:focus:border-blue-dark',
       'description': ':focus { border-color: #2779bd; }'
     },
     {
       'name': 'lg:focus:border-blue',
       'description': ':focus { border-color: #3490dc; }'
     },
     {
       'name': 'lg:focus:border-blue-light',
       'description': ':focus { border-color: #6cb2eb; }'
     },
     {
       'name': 'lg:focus:border-blue-lighter',
       'description': ':focus { border-color: #bcdefa; }'
     },
     {
       'name': 'lg:focus:border-blue-lightest',
       'description': ':focus { border-color: #eff8ff; }'
     },
     {
       'name': 'lg:focus:border-indigo-darkest',
       'description': ':focus { border-color: #191e38; }'
     },
     {
       'name': 'lg:focus:border-indigo-darker',
       'description': ':focus { border-color: #2f365f; }'
     },
     {
       'name': 'lg:focus:border-indigo-dark',
       'description': ':focus { border-color: #5661b3; }'
     },
     {
       'name': 'lg:focus:border-indigo',
       'description': ':focus { border-color: #6574cd; }'
     },
     {
       'name': 'lg:focus:border-indigo-light',
       'description': ':focus { border-color: #7886d7; }'
     },
     {
       'name': 'lg:focus:border-indigo-lighter',
       'description': ':focus { border-color: #b2b7ff; }'
     },
     {
       'name': 'lg:focus:border-indigo-lightest',
       'description': ':focus { border-color: #e6e8ff; }'
     },
     {
       'name': 'lg:focus:border-purple-darkest',
       'description': ':focus { border-color: #21183c; }'
     },
     {
       'name': 'lg:focus:border-purple-darker',
       'description': ':focus { border-color: #382b5f; }'
     },
     {
       'name': 'lg:focus:border-purple-dark',
       'description': ':focus { border-color: #794acf; }'
     },
     {
       'name': 'lg:focus:border-purple',
       'description': ':focus { border-color: #9561e2; }'
     },
     {
       'name': 'lg:focus:border-purple-light',
       'description': ':focus { border-color: #a779e9; }'
     },
     {
       'name': 'lg:focus:border-purple-lighter',
       'description': ':focus { border-color: #d6bbfc; }'
     },
     {
       'name': 'lg:focus:border-purple-lightest',
       'description': ':focus { border-color: #f3ebff; }'
     },
     {
       'name': 'lg:focus:border-pink-darkest',
       'description': ':focus { border-color: #451225; }'
     },
     {
       'name': 'lg:focus:border-pink-darker',
       'description': ':focus { border-color: #6f213f; }'
     },
     {
       'name': 'lg:focus:border-pink-dark',
       'description': ':focus { border-color: #eb5286; }'
     },
     {
       'name': 'lg:focus:border-pink',
       'description': ':focus { border-color: #f66d9b; }'
     },
     {
       'name': 'lg:focus:border-pink-light',
       'description': ':focus { border-color: #fa7ea8; }'
     },
     {
       'name': 'lg:focus:border-pink-lighter',
       'description': ':focus { border-color: #ffbbca; }'
     },
     {
       'name': 'lg:focus:border-pink-lightest',
       'description': ':focus { border-color: #ffebef; }'
     },
     {
       'name': 'lg:rounded-none',
       'description': 'border-radius: 0;'
     },
     {
       'name': 'lg:rounded-sm',
       'description': 'border-radius: .125rem;'
     },
     {
       'name': 'lg:rounded',
       'description': 'border-radius: .25rem;'
     },
     {
       'name': 'lg:rounded-lg',
       'description': 'border-radius: .5rem;'
     },
     {
       'name': 'lg:rounded-full',
       'description': 'border-radius: 9999px;'
     },
     {
       'name': 'lg:rounded-t-none',
       'description': 'border-top-left-radius: 0; border-top-right-radius: 0;'
     },
     {
       'name': 'lg:rounded-r-none',
       'description': 'border-top-right-radius: 0; border-bottom-right-radius: 0;'
     },
     {
       'name': 'lg:rounded-b-none',
       'description': 'border-bottom-right-radius: 0; border-bottom-left-radius: 0;'
     },
     {
       'name': 'lg:rounded-l-none',
       'description': 'border-top-left-radius: 0; border-bottom-left-radius: 0;'
     },
     {
       'name': 'lg:rounded-t-sm',
       'description': 'border-top-left-radius: .125rem; border-top-right-radius: .125rem;'
     },
     {
       'name': 'lg:rounded-r-sm',
       'description': 'border-top-right-radius: .125rem; border-bottom-right-radius: .125rem;'
     },
     {
       'name': 'lg:rounded-b-sm',
       'description': 'border-bottom-right-radius: .125rem; border-bottom-left-radius: .125rem;'
     },
     {
       'name': 'lg:rounded-l-sm',
       'description': 'border-top-left-radius: .125rem; border-bottom-left-radius: .125rem;'
     },
     {
       'name': 'lg:rounded-t',
       'description': 'border-top-left-radius: .25rem; border-top-right-radius: .25rem;'
     },
     {
       'name': 'lg:rounded-r',
       'description': 'border-top-right-radius: .25rem; border-bottom-right-radius: .25rem;'
     },
     {
       'name': 'lg:rounded-b',
       'description': 'border-bottom-right-radius: .25rem; border-bottom-left-radius: .25rem;'
     },
     {
       'name': 'lg:rounded-l',
       'description': 'border-top-left-radius: .25rem; border-bottom-left-radius: .25rem;'
     },
     {
       'name': 'lg:rounded-t-lg',
       'description': 'border-top-left-radius: .5rem; border-top-right-radius: .5rem;'
     },
     {
       'name': 'lg:rounded-r-lg',
       'description': 'border-top-right-radius: .5rem; border-bottom-right-radius: .5rem;'
     },
     {
       'name': 'lg:rounded-b-lg',
       'description': 'border-bottom-right-radius: .5rem; border-bottom-left-radius: .5rem;'
     },
     {
       'name': 'lg:rounded-l-lg',
       'description': 'border-top-left-radius: .5rem; border-bottom-left-radius: .5rem;'
     },
     {
       'name': 'lg:rounded-t-full',
       'description': 'border-top-left-radius: 9999px; border-top-right-radius: 9999px;'
     },
     {
       'name': 'lg:rounded-r-full',
       'description': 'border-top-right-radius: 9999px; border-bottom-right-radius: 9999px;'
     },
     {
       'name': 'lg:rounded-b-full',
       'description': 'border-bottom-right-radius: 9999px; border-bottom-left-radius: 9999px;'
     },
     {
       'name': 'lg:rounded-l-full',
       'description': 'border-top-left-radius: 9999px; border-bottom-left-radius: 9999px;'
     },
     {
       'name': 'lg:rounded-tl-none',
       'description': 'border-top-left-radius: 0;'
     },
     {
       'name': 'lg:rounded-tr-none',
       'description': 'border-top-right-radius: 0;'
     },
     {
       'name': 'lg:rounded-br-none',
       'description': 'border-bottom-right-radius: 0;'
     },
     {
       'name': 'lg:rounded-bl-none',
       'description': 'border-bottom-left-radius: 0;'
     },
     {
       'name': 'lg:rounded-tl-sm',
       'description': 'border-top-left-radius: .125rem;'
     },
     {
       'name': 'lg:rounded-tr-sm',
       'description': 'border-top-right-radius: .125rem;'
     },
     {
       'name': 'lg:rounded-br-sm',
       'description': 'border-bottom-right-radius: .125rem;'
     },
     {
       'name': 'lg:rounded-bl-sm',
       'description': 'border-bottom-left-radius: .125rem;'
     },
     {
       'name': 'lg:rounded-tl',
       'description': 'border-top-left-radius: .25rem;'
     },
     {
       'name': 'lg:rounded-tr',
       'description': 'border-top-right-radius: .25rem;'
     },
     {
       'name': 'lg:rounded-br',
       'description': 'border-bottom-right-radius: .25rem;'
     },
     {
       'name': 'lg:rounded-bl',
       'description': 'border-bottom-left-radius: .25rem;'
     },
     {
       'name': 'lg:rounded-tl-lg',
       'description': 'border-top-left-radius: .5rem;'
     },
     {
       'name': 'lg:rounded-tr-lg',
       'description': 'border-top-right-radius: .5rem;'
     },
     {
       'name': 'lg:rounded-br-lg',
       'description': 'border-bottom-right-radius: .5rem;'
     },
     {
       'name': 'lg:rounded-bl-lg',
       'description': 'border-bottom-left-radius: .5rem;'
     },
     {
       'name': 'lg:rounded-tl-full',
       'description': 'border-top-left-radius: 9999px;'
     },
     {
       'name': 'lg:rounded-tr-full',
       'description': 'border-top-right-radius: 9999px;'
     },
     {
       'name': 'lg:rounded-br-full',
       'description': 'border-bottom-right-radius: 9999px;'
     },
     {
       'name': 'lg:rounded-bl-full',
       'description': 'border-bottom-left-radius: 9999px;'
     },
     {
       'name': 'lg:border-solid',
       'description': 'border-style: solid;'
     },
     {
       'name': 'lg:border-dashed',
       'description': 'border-style: dashed;'
     },
     {
       'name': 'lg:border-dotted',
       'description': 'border-style: dotted;'
     },
     {
       'name': 'lg:border-none',
       'description': 'border-style: none;'
     },
     {
       'name': 'lg:border-0',
       'description': 'border-width: 0;'
     },
     {
       'name': 'lg:border-2',
       'description': 'border-width: 2px;'
     },
     {
       'name': 'lg:border-4',
       'description': 'border-width: 4px;'
     },
     {
       'name': 'lg:border-8',
       'description': 'border-width: 8px;'
     },
     {
       'name': 'lg:border',
       'description': 'border-width: 1px;'
     },
     {
       'name': 'lg:border-t-0',
       'description': 'border-top-width: 0;'
     },
     {
       'name': 'lg:border-r-0',
       'description': 'border-right-width: 0;'
     },
     {
       'name': 'lg:border-b-0',
       'description': 'border-bottom-width: 0;'
     },
     {
       'name': 'lg:border-l-0',
       'description': 'border-left-width: 0;'
     },
     {
       'name': 'lg:border-t-2',
       'description': 'border-top-width: 2px;'
     },
     {
       'name': 'lg:border-r-2',
       'description': 'border-right-width: 2px;'
     },
     {
       'name': 'lg:border-b-2',
       'description': 'border-bottom-width: 2px;'
     },
     {
       'name': 'lg:border-l-2',
       'description': 'border-left-width: 2px;'
     },
     {
       'name': 'lg:border-t-4',
       'description': 'border-top-width: 4px;'
     },
     {
       'name': 'lg:border-r-4',
       'description': 'border-right-width: 4px;'
     },
     {
       'name': 'lg:border-b-4',
       'description': 'border-bottom-width: 4px;'
     },
     {
       'name': 'lg:border-l-4',
       'description': 'border-left-width: 4px;'
     },
     {
       'name': 'lg:border-t-8',
       'description': 'border-top-width: 8px;'
     },
     {
       'name': 'lg:border-r-8',
       'description': 'border-right-width: 8px;'
     },
     {
       'name': 'lg:border-b-8',
       'description': 'border-bottom-width: 8px;'
     },
     {
       'name': 'lg:border-l-8',
       'description': 'border-left-width: 8px;'
     },
     {
       'name': 'lg:border-t',
       'description': 'border-top-width: 1px;'
     },
     {
       'name': 'lg:border-r',
       'description': 'border-right-width: 1px;'
     },
     {
       'name': 'lg:border-b',
       'description': 'border-bottom-width: 1px;'
     },
     {
       'name': 'lg:border-l',
       'description': 'border-left-width: 1px;'
     },
     {
       'name': 'lg:cursor-auto',
       'description': 'cursor: auto;'
     },
     {
       'name': 'lg:cursor-default',
       'description': 'cursor: default;'
     },
     {
       'name': 'lg:cursor-pointer',
       'description': 'cursor: pointer;'
     },
     {
       'name': 'lg:cursor-wait',
       'description': 'cursor: wait;'
     },
     {
       'name': 'lg:cursor-move',
       'description': 'cursor: move;'
     },
     {
       'name': 'lg:cursor-not-allowed',
       'description': 'cursor: not-allowed;'
     },
     {
       'name': 'lg:block',
       'description': 'display: block;'
     },
     {
       'name': 'lg:inline-block',
       'description': 'display: inline-block;'
     },
     {
       'name': 'lg:inline',
       'description': 'display: inline;'
     },
     {
       'name': 'lg:table',
       'description': 'display: table;'
     },
     {
       'name': 'lg:table-row',
       'description': 'display: table-row;'
     },
     {
       'name': 'lg:table-cell',
       'description': 'display: table-cell;'
     },
     {
       'name': 'lg:hidden',
       'description': 'display: none;'
     },
     {
       'name': 'lg:flex',
       'description': 'display: flex;'
     },
     {
       'name': 'lg:inline-flex',
       'description': 'display: inline-flex;'
     },
     {
       'name': 'lg:flex-row',
       'description': 'flex-direction: row;'
     },
     {
       'name': 'lg:flex-row-reverse',
       'description': 'flex-direction: row-reverse;'
     },
     {
       'name': 'lg:flex-col',
       'description': 'flex-direction: column;'
     },
     {
       'name': 'lg:flex-col-reverse',
       'description': 'flex-direction: column-reverse;'
     },
     {
       'name': 'lg:flex-wrap',
       'description': 'flex-wrap: wrap;'
     },
     {
       'name': 'lg:flex-wrap-reverse',
       'description': 'flex-wrap: wrap-reverse;'
     },
     {
       'name': 'lg:flex-no-wrap',
       'description': 'flex-wrap: nowrap;'
     },
     {
       'name': 'lg:items-start',
       'description': 'align-items: flex-start;'
     },
     {
       'name': 'lg:items-end',
       'description': 'align-items: flex-end;'
     },
     {
       'name': 'lg:items-center',
       'description': 'align-items: center;'
     },
     {
       'name': 'lg:items-baseline',
       'description': 'align-items: baseline;'
     },
     {
       'name': 'lg:items-stretch',
       'description': 'align-items: stretch;'
     },
     {
       'name': 'lg:self-auto',
       'description': 'align-self: auto;'
     },
     {
       'name': 'lg:self-start',
       'description': 'align-self: flex-start;'
     },
     {
       'name': 'lg:self-end',
       'description': 'align-self: flex-end;'
     },
     {
       'name': 'lg:self-center',
       'description': 'align-self: center;'
     },
     {
       'name': 'lg:self-stretch',
       'description': 'align-self: stretch;'
     },
     {
       'name': 'lg:justify-start',
       'description': 'justify-content: flex-start;'
     },
     {
       'name': 'lg:justify-end',
       'description': 'justify-content: flex-end;'
     },
     {
       'name': 'lg:justify-center',
       'description': 'justify-content: center;'
     },
     {
       'name': 'lg:justify-between',
       'description': 'justify-content: space-between;'
     },
     {
       'name': 'lg:justify-around',
       'description': 'justify-content: space-around;'
     },
     {
       'name': 'lg:content-center',
       'description': 'align-content: center;'
     },
     {
       'name': 'lg:content-start',
       'description': 'align-content: flex-start;'
     },
     {
       'name': 'lg:content-end',
       'description': 'align-content: flex-end;'
     },
     {
       'name': 'lg:content-between',
       'description': 'align-content: space-between;'
     },
     {
       'name': 'lg:content-around',
       'description': 'align-content: space-around;'
     },
     {
       'name': 'lg:flex-1',
       'description': 'flex: 1 1 0%;'
     },
     {
       'name': 'lg:flex-auto',
       'description': 'flex: 1 1 auto;'
     },
     {
       'name': 'lg:flex-initial',
       'description': 'flex: 0 1 auto;'
     },
     {
       'name': 'lg:flex-none',
       'description': 'flex: none;'
     },
     {
       'name': 'lg:flex-grow',
       'description': 'flex-grow: 1;'
     },
     {
       'name': 'lg:flex-shrink',
       'description': 'flex-shrink: 1;'
     },
     {
       'name': 'lg:flex-no-grow',
       'description': 'flex-grow: 0;'
     },
     {
       'name': 'lg:flex-no-shrink',
       'description': 'flex-shrink: 0;'
     },
     {
       'name': 'lg:float-right',
       'description': 'float: right;'
     },
     {
       'name': 'lg:float-left',
       'description': 'float: left;'
     },
     {
       'name': 'lg:float-none',
       'description': 'float: none;'
     },
     {
       'name': 'lg:clearfix',
       'description': ':after { content: \'\'; display: table; clear: both; }'
     },
     {
       'name': 'lg:font-sans',
       'description': 'font-family: system-ui, BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;'
     },
     {
       'name': 'lg:font-serif',
       'description': 'font-family: Constantia, Lucida Bright, Lucidabright, Lucida Serif, Lucida, DejaVu Serif, Bitstream Vera Serif, Liberation Serif, Georgia, serif;'
     },
     {
       'name': 'lg:font-mono',
       'description': 'font-family: Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace;'
     },
     {
       'name': 'lg:font-hairline',
       'description': 'font-weight: 100;'
     },
     {
       'name': 'lg:font-thin',
       'description': 'font-weight: 200;'
     },
     {
       'name': 'lg:font-light',
       'description': 'font-weight: 300;'
     },
     {
       'name': 'lg:font-normal',
       'description': 'font-weight: 400;'
     },
     {
       'name': 'lg:font-medium',
       'description': 'font-weight: 500;'
     },
     {
       'name': 'lg:font-semibold',
       'description': 'font-weight: 600;'
     },
     {
       'name': 'lg:font-bold',
       'description': 'font-weight: 700;'
     },
     {
       'name': 'lg:font-extrabold',
       'description': 'font-weight: 800;'
     },
     {
       'name': 'lg:font-black',
       'description': 'font-weight: 900;'
     },
     {
       'name': 'lg:hover:font-hairline',
       'description': ':hover { font-weight: 100; }'
     },
     {
       'name': 'lg:hover:font-thin',
       'description': ':hover { font-weight: 200; }'
     },
     {
       'name': 'lg:hover:font-light',
       'description': ':hover { font-weight: 300; }'
     },
     {
       'name': 'lg:hover:font-normal',
       'description': ':hover { font-weight: 400; }'
     },
     {
       'name': 'lg:hover:font-medium',
       'description': ':hover { font-weight: 500; }'
     },
     {
       'name': 'lg:hover:font-semibold',
       'description': ':hover { font-weight: 600; }'
     },
     {
       'name': 'lg:hover:font-bold',
       'description': ':hover { font-weight: 700; }'
     },
     {
       'name': 'lg:hover:font-extrabold',
       'description': ':hover { font-weight: 800; }'
     },
     {
       'name': 'lg:hover:font-black',
       'description': ':hover { font-weight: 900; }'
     },
     {
       'name': 'lg:focus:font-hairline',
       'description': ':focus { font-weight: 100; }'
     },
     {
       'name': 'lg:focus:font-thin',
       'description': ':focus { font-weight: 200; }'
     },
     {
       'name': 'lg:focus:font-light',
       'description': ':focus { font-weight: 300; }'
     },
     {
       'name': 'lg:focus:font-normal',
       'description': ':focus { font-weight: 400; }'
     },
     {
       'name': 'lg:focus:font-medium',
       'description': ':focus { font-weight: 500; }'
     },
     {
       'name': 'lg:focus:font-semibold',
       'description': ':focus { font-weight: 600; }'
     },
     {
       'name': 'lg:focus:font-bold',
       'description': ':focus { font-weight: 700; }'
     },
     {
       'name': 'lg:focus:font-extrabold',
       'description': ':focus { font-weight: 800; }'
     },
     {
       'name': 'lg:focus:font-black',
       'description': ':focus { font-weight: 900; }'
     },
     {
       'name': 'lg:h-1',
       'description': 'height: .25rem;'
     },
     {
       'name': 'lg:h-2',
       'description': 'height: .5rem;'
     },
     {
       'name': 'lg:h-3',
       'description': 'height: .75rem;'
     },
     {
       'name': 'lg:h-4',
       'description': 'height: 1rem;'
     },
     {
       'name': 'lg:h-5',
       'description': 'height: 1.25rem;'
     },
     {
       'name': 'lg:h-6',
       'description': 'height: 1.5rem;'
     },
     {
       'name': 'lg:h-8',
       'description': 'height: 2rem;'
     },
     {
       'name': 'lg:h-10',
       'description': 'height: 2.5rem;'
     },
     {
       'name': 'lg:h-12',
       'description': 'height: 3rem;'
     },
     {
       'name': 'lg:h-16',
       'description': 'height: 4rem;'
     },
     {
       'name': 'lg:h-24',
       'description': 'height: 6rem;'
     },
     {
       'name': 'lg:h-32',
       'description': 'height: 8rem;'
     },
     {
       'name': 'lg:h-48',
       'description': 'height: 12rem;'
     },
     {
       'name': 'lg:h-64',
       'description': 'height: 16rem;'
     },
     {
       'name': 'lg:h-auto',
       'description': 'height: auto;'
     },
     {
       'name': 'lg:h-px',
       'description': 'height: 1px;'
     },
     {
       'name': 'lg:h-full',
       'description': 'height: 100%;'
     },
     {
       'name': 'lg:h-screen',
       'description': 'height: 100vh;'
     },
     {
       'name': 'lg:leading-none',
       'description': 'line-height: 1;'
     },
     {
       'name': 'lg:leading-tight',
       'description': 'line-height: 1.25;'
     },
     {
       'name': 'lg:leading-normal',
       'description': 'line-height: 1.5;'
     },
     {
       'name': 'lg:leading-loose',
       'description': 'line-height: 2;'
     },
     {
       'name': 'lg:m-0',
       'description': 'margin: 0;'
     },
     {
       'name': 'lg:m-1',
       'description': 'margin: .25rem;'
     },
     {
       'name': 'lg:m-2',
       'description': 'margin: .5rem;'
     },
     {
       'name': 'lg:m-3',
       'description': 'margin: .75rem;'
     },
     {
       'name': 'lg:m-4',
       'description': 'margin: 1rem;'
     },
     {
       'name': 'lg:m-5',
       'description': 'margin: 1.25rem;'
     },
     {
       'name': 'lg:m-6',
       'description': 'margin: 1.5rem;'
     },
     {
       'name': 'lg:m-8',
       'description': 'margin: 2rem;'
     },
     {
       'name': 'lg:m-10',
       'description': 'margin: 2.5rem;'
     },
     {
       'name': 'lg:m-12',
       'description': 'margin: 3rem;'
     },
     {
       'name': 'lg:m-16',
       'description': 'margin: 4rem;'
     },
     {
       'name': 'lg:m-20',
       'description': 'margin: 5rem;'
     },
     {
       'name': 'lg:m-24',
       'description': 'margin: 6rem;'
     },
     {
       'name': 'lg:m-32',
       'description': 'margin: 8rem;'
     },
     {
       'name': 'lg:m-auto',
       'description': 'margin: auto;'
     },
     {
       'name': 'lg:m-px',
       'description': 'margin: 1px;'
     },
     {
       'name': 'lg:my-0',
       'description': 'margin-top: 0; margin-bottom: 0;'
     },
     {
       'name': 'lg:mx-0',
       'description': 'margin-left: 0; margin-right: 0;'
     },
     {
       'name': 'lg:my-1',
       'description': 'margin-top: .25rem; margin-bottom: .25rem;'
     },
     {
       'name': 'lg:mx-1',
       'description': 'margin-left: .25rem; margin-right: .25rem;'
     },
     {
       'name': 'lg:my-2',
       'description': 'margin-top: .5rem; margin-bottom: .5rem;'
     },
     {
       'name': 'lg:mx-2',
       'description': 'margin-left: .5rem; margin-right: .5rem;'
     },
     {
       'name': 'lg:my-3',
       'description': 'margin-top: .75rem; margin-bottom: .75rem;'
     },
     {
       'name': 'lg:mx-3',
       'description': 'margin-left: .75rem; margin-right: .75rem;'
     },
     {
       'name': 'lg:my-4',
       'description': 'margin-top: 1rem; margin-bottom: 1rem;'
     },
     {
       'name': 'lg:mx-4',
       'description': 'margin-left: 1rem; margin-right: 1rem;'
     },
     {
       'name': 'lg:my-5',
       'description': 'margin-top: 1.25rem; margin-bottom: 1.25rem;'
     },
     {
       'name': 'lg:mx-5',
       'description': 'margin-left: 1.25rem; margin-right: 1.25rem;'
     },
     {
       'name': 'lg:my-6',
       'description': 'margin-top: 1.5rem; margin-bottom: 1.5rem;'
     },
     {
       'name': 'lg:mx-6',
       'description': 'margin-left: 1.5rem; margin-right: 1.5rem;'
     },
     {
       'name': 'lg:my-8',
       'description': 'margin-top: 2rem; margin-bottom: 2rem;'
     },
     {
       'name': 'lg:mx-8',
       'description': 'margin-left: 2rem; margin-right: 2rem;'
     },
     {
       'name': 'lg:my-10',
       'description': 'margin-top: 2.5rem; margin-bottom: 2.5rem;'
     },
     {
       'name': 'lg:mx-10',
       'description': 'margin-left: 2.5rem; margin-right: 2.5rem;'
     },
     {
       'name': 'lg:my-12',
       'description': 'margin-top: 3rem; margin-bottom: 3rem;'
     },
     {
       'name': 'lg:mx-12',
       'description': 'margin-left: 3rem; margin-right: 3rem;'
     },
     {
       'name': 'lg:my-16',
       'description': 'margin-top: 4rem; margin-bottom: 4rem;'
     },
     {
       'name': 'lg:mx-16',
       'description': 'margin-left: 4rem; margin-right: 4rem;'
     },
     {
       'name': 'lg:my-20',
       'description': 'margin-top: 5rem; margin-bottom: 5rem;'
     },
     {
       'name': 'lg:mx-20',
       'description': 'margin-left: 5rem; margin-right: 5rem;'
     },
     {
       'name': 'lg:my-24',
       'description': 'margin-top: 6rem; margin-bottom: 6rem;'
     },
     {
       'name': 'lg:mx-24',
       'description': 'margin-left: 6rem; margin-right: 6rem;'
     },
     {
       'name': 'lg:my-32',
       'description': 'margin-top: 8rem; margin-bottom: 8rem;'
     },
     {
       'name': 'lg:mx-32',
       'description': 'margin-left: 8rem; margin-right: 8rem;'
     },
     {
       'name': 'lg:my-auto',
       'description': 'margin-top: auto; margin-bottom: auto;'
     },
     {
       'name': 'lg:mx-auto',
       'description': 'margin-left: auto; margin-right: auto;'
     },
     {
       'name': 'lg:my-px',
       'description': 'margin-top: 1px; margin-bottom: 1px;'
     },
     {
       'name': 'lg:mx-px',
       'description': 'margin-left: 1px; margin-right: 1px;'
     },
     {
       'name': 'lg:mt-0',
       'description': 'margin-top: 0;'
     },
     {
       'name': 'lg:mr-0',
       'description': 'margin-right: 0;'
     },
     {
       'name': 'lg:mb-0',
       'description': 'margin-bottom: 0;'
     },
     {
       'name': 'lg:ml-0',
       'description': 'margin-left: 0;'
     },
     {
       'name': 'lg:mt-1',
       'description': 'margin-top: .25rem;'
     },
     {
       'name': 'lg:mr-1',
       'description': 'margin-right: .25rem;'
     },
     {
       'name': 'lg:mb-1',
       'description': 'margin-bottom: .25rem;'
     },
     {
       'name': 'lg:ml-1',
       'description': 'margin-left: .25rem;'
     },
     {
       'name': 'lg:mt-2',
       'description': 'margin-top: .5rem;'
     },
     {
       'name': 'lg:mr-2',
       'description': 'margin-right: .5rem;'
     },
     {
       'name': 'lg:mb-2',
       'description': 'margin-bottom: .5rem;'
     },
     {
       'name': 'lg:ml-2',
       'description': 'margin-left: .5rem;'
     },
     {
       'name': 'lg:mt-3',
       'description': 'margin-top: .75rem;'
     },
     {
       'name': 'lg:mr-3',
       'description': 'margin-right: .75rem;'
     },
     {
       'name': 'lg:mb-3',
       'description': 'margin-bottom: .75rem;'
     },
     {
       'name': 'lg:ml-3',
       'description': 'margin-left: .75rem;'
     },
     {
       'name': 'lg:mt-4',
       'description': 'margin-top: 1rem;'
     },
     {
       'name': 'lg:mr-4',
       'description': 'margin-right: 1rem;'
     },
     {
       'name': 'lg:mb-4',
       'description': 'margin-bottom: 1rem;'
     },
     {
       'name': 'lg:ml-4',
       'description': 'margin-left: 1rem;'
     },
     {
       'name': 'lg:mt-5',
       'description': 'margin-top: 1.25rem;'
     },
     {
       'name': 'lg:mr-5',
       'description': 'margin-right: 1.25rem;'
     },
     {
       'name': 'lg:mb-5',
       'description': 'margin-bottom: 1.25rem;'
     },
     {
       'name': 'lg:ml-5',
       'description': 'margin-left: 1.25rem;'
     },
     {
       'name': 'lg:mt-6',
       'description': 'margin-top: 1.5rem;'
     },
     {
       'name': 'lg:mr-6',
       'description': 'margin-right: 1.5rem;'
     },
     {
       'name': 'lg:mb-6',
       'description': 'margin-bottom: 1.5rem;'
     },
     {
       'name': 'lg:ml-6',
       'description': 'margin-left: 1.5rem;'
     },
     {
       'name': 'lg:mt-8',
       'description': 'margin-top: 2rem;'
     },
     {
       'name': 'lg:mr-8',
       'description': 'margin-right: 2rem;'
     },
     {
       'name': 'lg:mb-8',
       'description': 'margin-bottom: 2rem;'
     },
     {
       'name': 'lg:ml-8',
       'description': 'margin-left: 2rem;'
     },
     {
       'name': 'lg:mt-10',
       'description': 'margin-top: 2.5rem;'
     },
     {
       'name': 'lg:mr-10',
       'description': 'margin-right: 2.5rem;'
     },
     {
       'name': 'lg:mb-10',
       'description': 'margin-bottom: 2.5rem;'
     },
     {
       'name': 'lg:ml-10',
       'description': 'margin-left: 2.5rem;'
     },
     {
       'name': 'lg:mt-12',
       'description': 'margin-top: 3rem;'
     },
     {
       'name': 'lg:mr-12',
       'description': 'margin-right: 3rem;'
     },
     {
       'name': 'lg:mb-12',
       'description': 'margin-bottom: 3rem;'
     },
     {
       'name': 'lg:ml-12',
       'description': 'margin-left: 3rem;'
     },
     {
       'name': 'lg:mt-16',
       'description': 'margin-top: 4rem;'
     },
     {
       'name': 'lg:mr-16',
       'description': 'margin-right: 4rem;'
     },
     {
       'name': 'lg:mb-16',
       'description': 'margin-bottom: 4rem;'
     },
     {
       'name': 'lg:ml-16',
       'description': 'margin-left: 4rem;'
     },
     {
       'name': 'lg:mt-20',
       'description': 'margin-top: 5rem;'
     },
     {
       'name': 'lg:mr-20',
       'description': 'margin-right: 5rem;'
     },
     {
       'name': 'lg:mb-20',
       'description': 'margin-bottom: 5rem;'
     },
     {
       'name': 'lg:ml-20',
       'description': 'margin-left: 5rem;'
     },
     {
       'name': 'lg:mt-24',
       'description': 'margin-top: 6rem;'
     },
     {
       'name': 'lg:mr-24',
       'description': 'margin-right: 6rem;'
     },
     {
       'name': 'lg:mb-24',
       'description': 'margin-bottom: 6rem;'
     },
     {
       'name': 'lg:ml-24',
       'description': 'margin-left: 6rem;'
     },
     {
       'name': 'lg:mt-32',
       'description': 'margin-top: 8rem;'
     },
     {
       'name': 'lg:mr-32',
       'description': 'margin-right: 8rem;'
     },
     {
       'name': 'lg:mb-32',
       'description': 'margin-bottom: 8rem;'
     },
     {
       'name': 'lg:ml-32',
       'description': 'margin-left: 8rem;'
     },
     {
       'name': 'lg:mt-auto',
       'description': 'margin-top: auto;'
     },
     {
       'name': 'lg:mr-auto',
       'description': 'margin-right: auto;'
     },
     {
       'name': 'lg:mb-auto',
       'description': 'margin-bottom: auto;'
     },
     {
       'name': 'lg:ml-auto',
       'description': 'margin-left: auto;'
     },
     {
       'name': 'lg:mt-px',
       'description': 'margin-top: 1px;'
     },
     {
       'name': 'lg:mr-px',
       'description': 'margin-right: 1px;'
     },
     {
       'name': 'lg:mb-px',
       'description': 'margin-bottom: 1px;'
     },
     {
       'name': 'lg:ml-px',
       'description': 'margin-left: 1px;'
     },
     {
       'name': 'lg:max-h-full',
       'description': 'max-height: 100%;'
     },
     {
       'name': 'lg:max-h-screen',
       'description': 'max-height: 100vh;'
     },
     {
       'name': 'lg:max-w-xs',
       'description': 'max-width: 20rem;'
     },
     {
       'name': 'lg:max-w-sm',
       'description': 'max-width: 30rem;'
     },
     {
       'name': 'lg:max-w-md',
       'description': 'max-width: 40rem;'
     },
     {
       'name': 'lg:max-w-lg',
       'description': 'max-width: 50rem;'
     },
     {
       'name': 'lg:max-w-xl',
       'description': 'max-width: 60rem;'
     },
     {
       'name': 'lg:max-w-2xl',
       'description': 'max-width: 70rem;'
     },
     {
       'name': 'lg:max-w-3xl',
       'description': 'max-width: 80rem;'
     },
     {
       'name': 'lg:max-w-4xl',
       'description': 'max-width: 90rem;'
     },
     {
       'name': 'lg:max-w-5xl',
       'description': 'max-width: 100rem;'
     },
     {
       'name': 'lg:max-w-full',
       'description': 'max-width: 100%;'
     },
     {
       'name': 'lg:min-h-0',
       'description': 'min-height: 0;'
     },
     {
       'name': 'lg:min-h-full',
       'description': 'min-height: 100%;'
     },
     {
       'name': 'lg:min-h-screen',
       'description': 'min-height: 100vh;'
     },
     {
       'name': 'lg:min-w-0',
       'description': 'min-width: 0;'
     },
     {
       'name': 'lg:min-w-full',
       'description': 'min-width: 100%;'
     },
     {
       'name': 'lg:-m-0',
       'description': 'margin: 0;'
     },
     {
       'name': 'lg:-m-1',
       'description': 'margin: -0.25rem;'
     },
     {
       'name': 'lg:-m-2',
       'description': 'margin: -0.5rem;'
     },
     {
       'name': 'lg:-m-3',
       'description': 'margin: -0.75rem;'
     },
     {
       'name': 'lg:-m-4',
       'description': 'margin: -1rem;'
     },
     {
       'name': 'lg:-m-5',
       'description': 'margin: -1.25rem;'
     },
     {
       'name': 'lg:-m-6',
       'description': 'margin: -1.5rem;'
     },
     {
       'name': 'lg:-m-8',
       'description': 'margin: -2rem;'
     },
     {
       'name': 'lg:-m-10',
       'description': 'margin: -2.5rem;'
     },
     {
       'name': 'lg:-m-12',
       'description': 'margin: -3rem;'
     },
     {
       'name': 'lg:-m-16',
       'description': 'margin: -4rem;'
     },
     {
       'name': 'lg:-m-20',
       'description': 'margin: -5rem;'
     },
     {
       'name': 'lg:-m-24',
       'description': 'margin: -6rem;'
     },
     {
       'name': 'lg:-m-32',
       'description': 'margin: -8rem;'
     },
     {
       'name': 'lg:-m-px',
       'description': 'margin: -1px;'
     },
     {
       'name': 'lg:-my-0',
       'description': 'margin-top: 0; margin-bottom: 0;'
     },
     {
       'name': 'lg:-mx-0',
       'description': 'margin-left: 0; margin-right: 0;'
     },
     {
       'name': 'lg:-my-1',
       'description': 'margin-top: -0.25rem; margin-bottom: -0.25rem;'
     },
     {
       'name': 'lg:-mx-1',
       'description': 'margin-left: -0.25rem; margin-right: -0.25rem;'
     },
     {
       'name': 'lg:-my-2',
       'description': 'margin-top: -0.5rem; margin-bottom: -0.5rem;'
     },
     {
       'name': 'lg:-mx-2',
       'description': 'margin-left: -0.5rem; margin-right: -0.5rem;'
     },
     {
       'name': 'lg:-my-3',
       'description': 'margin-top: -0.75rem; margin-bottom: -0.75rem;'
     },
     {
       'name': 'lg:-mx-3',
       'description': 'margin-left: -0.75rem; margin-right: -0.75rem;'
     },
     {
       'name': 'lg:-my-4',
       'description': 'margin-top: -1rem; margin-bottom: -1rem;'
     },
     {
       'name': 'lg:-mx-4',
       'description': 'margin-left: -1rem; margin-right: -1rem;'
     },
     {
       'name': 'lg:-my-5',
       'description': 'margin-top: -1.25rem; margin-bottom: -1.25rem;'
     },
     {
       'name': 'lg:-mx-5',
       'description': 'margin-left: -1.25rem; margin-right: -1.25rem;'
     },
     {
       'name': 'lg:-my-6',
       'description': 'margin-top: -1.5rem; margin-bottom: -1.5rem;'
     },
     {
       'name': 'lg:-mx-6',
       'description': 'margin-left: -1.5rem; margin-right: -1.5rem;'
     },
     {
       'name': 'lg:-my-8',
       'description': 'margin-top: -2rem; margin-bottom: -2rem;'
     },
     {
       'name': 'lg:-mx-8',
       'description': 'margin-left: -2rem; margin-right: -2rem;'
     },
     {
       'name': 'lg:-my-10',
       'description': 'margin-top: -2.5rem; margin-bottom: -2.5rem;'
     },
     {
       'name': 'lg:-mx-10',
       'description': 'margin-left: -2.5rem; margin-right: -2.5rem;'
     },
     {
       'name': 'lg:-my-12',
       'description': 'margin-top: -3rem; margin-bottom: -3rem;'
     },
     {
       'name': 'lg:-mx-12',
       'description': 'margin-left: -3rem; margin-right: -3rem;'
     },
     {
       'name': 'lg:-my-16',
       'description': 'margin-top: -4rem; margin-bottom: -4rem;'
     },
     {
       'name': 'lg:-mx-16',
       'description': 'margin-left: -4rem; margin-right: -4rem;'
     },
     {
       'name': 'lg:-my-20',
       'description': 'margin-top: -5rem; margin-bottom: -5rem;'
     },
     {
       'name': 'lg:-mx-20',
       'description': 'margin-left: -5rem; margin-right: -5rem;'
     },
     {
       'name': 'lg:-my-24',
       'description': 'margin-top: -6rem; margin-bottom: -6rem;'
     },
     {
       'name': 'lg:-mx-24',
       'description': 'margin-left: -6rem; margin-right: -6rem;'
     },
     {
       'name': 'lg:-my-32',
       'description': 'margin-top: -8rem; margin-bottom: -8rem;'
     },
     {
       'name': 'lg:-mx-32',
       'description': 'margin-left: -8rem; margin-right: -8rem;'
     },
     {
       'name': 'lg:-my-px',
       'description': 'margin-top: -1px; margin-bottom: -1px;'
     },
     {
       'name': 'lg:-mx-px',
       'description': 'margin-left: -1px; margin-right: -1px;'
     },
     {
       'name': 'lg:-mt-0',
       'description': 'margin-top: 0;'
     },
     {
       'name': 'lg:-mr-0',
       'description': 'margin-right: 0;'
     },
     {
       'name': 'lg:-mb-0',
       'description': 'margin-bottom: 0;'
     },
     {
       'name': 'lg:-ml-0',
       'description': 'margin-left: 0;'
     },
     {
       'name': 'lg:-mt-1',
       'description': 'margin-top: -0.25rem;'
     },
     {
       'name': 'lg:-mr-1',
       'description': 'margin-right: -0.25rem;'
     },
     {
       'name': 'lg:-mb-1',
       'description': 'margin-bottom: -0.25rem;'
     },
     {
       'name': 'lg:-ml-1',
       'description': 'margin-left: -0.25rem;'
     },
     {
       'name': 'lg:-mt-2',
       'description': 'margin-top: -0.5rem;'
     },
     {
       'name': 'lg:-mr-2',
       'description': 'margin-right: -0.5rem;'
     },
     {
       'name': 'lg:-mb-2',
       'description': 'margin-bottom: -0.5rem;'
     },
     {
       'name': 'lg:-ml-2',
       'description': 'margin-left: -0.5rem;'
     },
     {
       'name': 'lg:-mt-3',
       'description': 'margin-top: -0.75rem;'
     },
     {
       'name': 'lg:-mr-3',
       'description': 'margin-right: -0.75rem;'
     },
     {
       'name': 'lg:-mb-3',
       'description': 'margin-bottom: -0.75rem;'
     },
     {
       'name': 'lg:-ml-3',
       'description': 'margin-left: -0.75rem;'
     },
     {
       'name': 'lg:-mt-4',
       'description': 'margin-top: -1rem;'
     },
     {
       'name': 'lg:-mr-4',
       'description': 'margin-right: -1rem;'
     },
     {
       'name': 'lg:-mb-4',
       'description': 'margin-bottom: -1rem;'
     },
     {
       'name': 'lg:-ml-4',
       'description': 'margin-left: -1rem;'
     },
     {
       'name': 'lg:-mt-5',
       'description': 'margin-top: -1.25rem;'
     },
     {
       'name': 'lg:-mr-5',
       'description': 'margin-right: -1.25rem;'
     },
     {
       'name': 'lg:-mb-5',
       'description': 'margin-bottom: -1.25rem;'
     },
     {
       'name': 'lg:-ml-5',
       'description': 'margin-left: -1.25rem;'
     },
     {
       'name': 'lg:-mt-6',
       'description': 'margin-top: -1.5rem;'
     },
     {
       'name': 'lg:-mr-6',
       'description': 'margin-right: -1.5rem;'
     },
     {
       'name': 'lg:-mb-6',
       'description': 'margin-bottom: -1.5rem;'
     },
     {
       'name': 'lg:-ml-6',
       'description': 'margin-left: -1.5rem;'
     },
     {
       'name': 'lg:-mt-8',
       'description': 'margin-top: -2rem;'
     },
     {
       'name': 'lg:-mr-8',
       'description': 'margin-right: -2rem;'
     },
     {
       'name': 'lg:-mb-8',
       'description': 'margin-bottom: -2rem;'
     },
     {
       'name': 'lg:-ml-8',
       'description': 'margin-left: -2rem;'
     },
     {
       'name': 'lg:-mt-10',
       'description': 'margin-top: -2.5rem;'
     },
     {
       'name': 'lg:-mr-10',
       'description': 'margin-right: -2.5rem;'
     },
     {
       'name': 'lg:-mb-10',
       'description': 'margin-bottom: -2.5rem;'
     },
     {
       'name': 'lg:-ml-10',
       'description': 'margin-left: -2.5rem;'
     },
     {
       'name': 'lg:-mt-12',
       'description': 'margin-top: -3rem;'
     },
     {
       'name': 'lg:-mr-12',
       'description': 'margin-right: -3rem;'
     },
     {
       'name': 'lg:-mb-12',
       'description': 'margin-bottom: -3rem;'
     },
     {
       'name': 'lg:-ml-12',
       'description': 'margin-left: -3rem;'
     },
     {
       'name': 'lg:-mt-16',
       'description': 'margin-top: -4rem;'
     },
     {
       'name': 'lg:-mr-16',
       'description': 'margin-right: -4rem;'
     },
     {
       'name': 'lg:-mb-16',
       'description': 'margin-bottom: -4rem;'
     },
     {
       'name': 'lg:-ml-16',
       'description': 'margin-left: -4rem;'
     },
     {
       'name': 'lg:-mt-20',
       'description': 'margin-top: -5rem;'
     },
     {
       'name': 'lg:-mr-20',
       'description': 'margin-right: -5rem;'
     },
     {
       'name': 'lg:-mb-20',
       'description': 'margin-bottom: -5rem;'
     },
     {
       'name': 'lg:-ml-20',
       'description': 'margin-left: -5rem;'
     },
     {
       'name': 'lg:-mt-24',
       'description': 'margin-top: -6rem;'
     },
     {
       'name': 'lg:-mr-24',
       'description': 'margin-right: -6rem;'
     },
     {
       'name': 'lg:-mb-24',
       'description': 'margin-bottom: -6rem;'
     },
     {
       'name': 'lg:-ml-24',
       'description': 'margin-left: -6rem;'
     },
     {
       'name': 'lg:-mt-32',
       'description': 'margin-top: -8rem;'
     },
     {
       'name': 'lg:-mr-32',
       'description': 'margin-right: -8rem;'
     },
     {
       'name': 'lg:-mb-32',
       'description': 'margin-bottom: -8rem;'
     },
     {
       'name': 'lg:-ml-32',
       'description': 'margin-left: -8rem;'
     },
     {
       'name': 'lg:-mt-px',
       'description': 'margin-top: -1px;'
     },
     {
       'name': 'lg:-mr-px',
       'description': 'margin-right: -1px;'
     },
     {
       'name': 'lg:-mb-px',
       'description': 'margin-bottom: -1px;'
     },
     {
       'name': 'lg:-ml-px',
       'description': 'margin-left: -1px;'
     },
     {
       'name': 'lg:opacity-0',
       'description': 'opacity: 0;'
     },
     {
       'name': 'lg:opacity-25',
       'description': 'opacity: .25;'
     },
     {
       'name': 'lg:opacity-50',
       'description': 'opacity: .5;'
     },
     {
       'name': 'lg:opacity-75',
       'description': 'opacity: .75;'
     },
     {
       'name': 'lg:opacity-100',
       'description': 'opacity: 1;'
     },
     {
       'name': 'lg:overflow-auto',
       'description': 'overflow: auto;'
     },
     {
       'name': 'lg:overflow-hidden',
       'description': 'overflow: hidden;'
     },
     {
       'name': 'lg:overflow-visible',
       'description': 'overflow: visible;'
     },
     {
       'name': 'lg:overflow-scroll',
       'description': 'overflow: scroll;'
     },
     {
       'name': 'lg:overflow-x-auto',
       'description': 'overflow-x: auto;'
     },
     {
       'name': 'lg:overflow-y-auto',
       'description': 'overflow-y: auto;'
     },
     {
       'name': 'lg:overflow-x-hidden',
       'description': 'overflow-x: hidden;'
     },
     {
       'name': 'lg:overflow-y-hidden',
       'description': 'overflow-y: hidden;'
     },
     {
       'name': 'lg:overflow-x-visible',
       'description': 'overflow-x: visible;'
     },
     {
       'name': 'lg:overflow-y-visible',
       'description': 'overflow-y: visible;'
     },
     {
       'name': 'lg:overflow-x-scroll',
       'description': 'overflow-x: scroll;'
     },
     {
       'name': 'lg:overflow-y-scroll',
       'description': 'overflow-y: scroll;'
     },
     {
       'name': 'lg:scrolling-touch',
       'description': '-webkit-overflow-scrolling: touch;'
     },
     {
       'name': 'lg:scrolling-auto',
       'description': '-webkit-overflow-scrolling: auto;'
     },
     {
       'name': 'lg:p-0',
       'description': 'padding: 0;'
     },
     {
       'name': 'lg:p-1',
       'description': 'padding: .25rem;'
     },
     {
       'name': 'lg:p-2',
       'description': 'padding: .5rem;'
     },
     {
       'name': 'lg:p-3',
       'description': 'padding: .75rem;'
     },
     {
       'name': 'lg:p-4',
       'description': 'padding: 1rem;'
     },
     {
       'name': 'lg:p-5',
       'description': 'padding: 1.25rem;'
     },
     {
       'name': 'lg:p-6',
       'description': 'padding: 1.5rem;'
     },
     {
       'name': 'lg:p-8',
       'description': 'padding: 2rem;'
     },
     {
       'name': 'lg:p-10',
       'description': 'padding: 2.5rem;'
     },
     {
       'name': 'lg:p-12',
       'description': 'padding: 3rem;'
     },
     {
       'name': 'lg:p-16',
       'description': 'padding: 4rem;'
     },
     {
       'name': 'lg:p-20',
       'description': 'padding: 5rem;'
     },
     {
       'name': 'lg:p-24',
       'description': 'padding: 6rem;'
     },
     {
       'name': 'lg:p-32',
       'description': 'padding: 8rem;'
     },
     {
       'name': 'lg:p-px',
       'description': 'padding: 1px;'
     },
     {
       'name': 'lg:py-0',
       'description': 'padding-top: 0; padding-bottom: 0;'
     },
     {
       'name': 'lg:px-0',
       'description': 'padding-left: 0; padding-right: 0;'
     },
     {
       'name': 'lg:py-1',
       'description': 'padding-top: .25rem; padding-bottom: .25rem;'
     },
     {
       'name': 'lg:px-1',
       'description': 'padding-left: .25rem; padding-right: .25rem;'
     },
     {
       'name': 'lg:py-2',
       'description': 'padding-top: .5rem; padding-bottom: .5rem;'
     },
     {
       'name': 'lg:px-2',
       'description': 'padding-left: .5rem; padding-right: .5rem;'
     },
     {
       'name': 'lg:py-3',
       'description': 'padding-top: .75rem; padding-bottom: .75rem;'
     },
     {
       'name': 'lg:px-3',
       'description': 'padding-left: .75rem; padding-right: .75rem;'
     },
     {
       'name': 'lg:py-4',
       'description': 'padding-top: 1rem; padding-bottom: 1rem;'
     },
     {
       'name': 'lg:px-4',
       'description': 'padding-left: 1rem; padding-right: 1rem;'
     },
     {
       'name': 'lg:py-5',
       'description': 'padding-top: 1.25rem; padding-bottom: 1.25rem;'
     },
     {
       'name': 'lg:px-5',
       'description': 'padding-left: 1.25rem; padding-right: 1.25rem;'
     },
     {
       'name': 'lg:py-6',
       'description': 'padding-top: 1.5rem; padding-bottom: 1.5rem;'
     },
     {
       'name': 'lg:px-6',
       'description': 'padding-left: 1.5rem; padding-right: 1.5rem;'
     },
     {
       'name': 'lg:py-8',
       'description': 'padding-top: 2rem; padding-bottom: 2rem;'
     },
     {
       'name': 'lg:px-8',
       'description': 'padding-left: 2rem; padding-right: 2rem;'
     },
     {
       'name': 'lg:py-10',
       'description': 'padding-top: 2.5rem; padding-bottom: 2.5rem;'
     },
     {
       'name': 'lg:px-10',
       'description': 'padding-left: 2.5rem; padding-right: 2.5rem;'
     },
     {
       'name': 'lg:py-12',
       'description': 'padding-top: 3rem; padding-bottom: 3rem;'
     },
     {
       'name': 'lg:px-12',
       'description': 'padding-left: 3rem; padding-right: 3rem;'
     },
     {
       'name': 'lg:py-16',
       'description': 'padding-top: 4rem; padding-bottom: 4rem;'
     },
     {
       'name': 'lg:px-16',
       'description': 'padding-left: 4rem; padding-right: 4rem;'
     },
     {
       'name': 'lg:py-20',
       'description': 'padding-top: 5rem; padding-bottom: 5rem;'
     },
     {
       'name': 'lg:px-20',
       'description': 'padding-left: 5rem; padding-right: 5rem;'
     },
     {
       'name': 'lg:py-24',
       'description': 'padding-top: 6rem; padding-bottom: 6rem;'
     },
     {
       'name': 'lg:px-24',
       'description': 'padding-left: 6rem; padding-right: 6rem;'
     },
     {
       'name': 'lg:py-32',
       'description': 'padding-top: 8rem; padding-bottom: 8rem;'
     },
     {
       'name': 'lg:px-32',
       'description': 'padding-left: 8rem; padding-right: 8rem;'
     },
     {
       'name': 'lg:py-px',
       'description': 'padding-top: 1px; padding-bottom: 1px;'
     },
     {
       'name': 'lg:px-px',
       'description': 'padding-left: 1px; padding-right: 1px;'
     },
     {
       'name': 'lg:pt-0',
       'description': 'padding-top: 0;'
     },
     {
       'name': 'lg:pr-0',
       'description': 'padding-right: 0;'
     },
     {
       'name': 'lg:pb-0',
       'description': 'padding-bottom: 0;'
     },
     {
       'name': 'lg:pl-0',
       'description': 'padding-left: 0;'
     },
     {
       'name': 'lg:pt-1',
       'description': 'padding-top: .25rem;'
     },
     {
       'name': 'lg:pr-1',
       'description': 'padding-right: .25rem;'
     },
     {
       'name': 'lg:pb-1',
       'description': 'padding-bottom: .25rem;'
     },
     {
       'name': 'lg:pl-1',
       'description': 'padding-left: .25rem;'
     },
     {
       'name': 'lg:pt-2',
       'description': 'padding-top: .5rem;'
     },
     {
       'name': 'lg:pr-2',
       'description': 'padding-right: .5rem;'
     },
     {
       'name': 'lg:pb-2',
       'description': 'padding-bottom: .5rem;'
     },
     {
       'name': 'lg:pl-2',
       'description': 'padding-left: .5rem;'
     },
     {
       'name': 'lg:pt-3',
       'description': 'padding-top: .75rem;'
     },
     {
       'name': 'lg:pr-3',
       'description': 'padding-right: .75rem;'
     },
     {
       'name': 'lg:pb-3',
       'description': 'padding-bottom: .75rem;'
     },
     {
       'name': 'lg:pl-3',
       'description': 'padding-left: .75rem;'
     },
     {
       'name': 'lg:pt-4',
       'description': 'padding-top: 1rem;'
     },
     {
       'name': 'lg:pr-4',
       'description': 'padding-right: 1rem;'
     },
     {
       'name': 'lg:pb-4',
       'description': 'padding-bottom: 1rem;'
     },
     {
       'name': 'lg:pl-4',
       'description': 'padding-left: 1rem;'
     },
     {
       'name': 'lg:pt-5',
       'description': 'padding-top: 1.25rem;'
     },
     {
       'name': 'lg:pr-5',
       'description': 'padding-right: 1.25rem;'
     },
     {
       'name': 'lg:pb-5',
       'description': 'padding-bottom: 1.25rem;'
     },
     {
       'name': 'lg:pl-5',
       'description': 'padding-left: 1.25rem;'
     },
     {
       'name': 'lg:pt-6',
       'description': 'padding-top: 1.5rem;'
     },
     {
       'name': 'lg:pr-6',
       'description': 'padding-right: 1.5rem;'
     },
     {
       'name': 'lg:pb-6',
       'description': 'padding-bottom: 1.5rem;'
     },
     {
       'name': 'lg:pl-6',
       'description': 'padding-left: 1.5rem;'
     },
     {
       'name': 'lg:pt-8',
       'description': 'padding-top: 2rem;'
     },
     {
       'name': 'lg:pr-8',
       'description': 'padding-right: 2rem;'
     },
     {
       'name': 'lg:pb-8',
       'description': 'padding-bottom: 2rem;'
     },
     {
       'name': 'lg:pl-8',
       'description': 'padding-left: 2rem;'
     },
     {
       'name': 'lg:pt-10',
       'description': 'padding-top: 2.5rem;'
     },
     {
       'name': 'lg:pr-10',
       'description': 'padding-right: 2.5rem;'
     },
     {
       'name': 'lg:pb-10',
       'description': 'padding-bottom: 2.5rem;'
     },
     {
       'name': 'lg:pl-10',
       'description': 'padding-left: 2.5rem;'
     },
     {
       'name': 'lg:pt-12',
       'description': 'padding-top: 3rem;'
     },
     {
       'name': 'lg:pr-12',
       'description': 'padding-right: 3rem;'
     },
     {
       'name': 'lg:pb-12',
       'description': 'padding-bottom: 3rem;'
     },
     {
       'name': 'lg:pl-12',
       'description': 'padding-left: 3rem;'
     },
     {
       'name': 'lg:pt-16',
       'description': 'padding-top: 4rem;'
     },
     {
       'name': 'lg:pr-16',
       'description': 'padding-right: 4rem;'
     },
     {
       'name': 'lg:pb-16',
       'description': 'padding-bottom: 4rem;'
     },
     {
       'name': 'lg:pl-16',
       'description': 'padding-left: 4rem;'
     },
     {
       'name': 'lg:pt-20',
       'description': 'padding-top: 5rem;'
     },
     {
       'name': 'lg:pr-20',
       'description': 'padding-right: 5rem;'
     },
     {
       'name': 'lg:pb-20',
       'description': 'padding-bottom: 5rem;'
     },
     {
       'name': 'lg:pl-20',
       'description': 'padding-left: 5rem;'
     },
     {
       'name': 'lg:pt-24',
       'description': 'padding-top: 6rem;'
     },
     {
       'name': 'lg:pr-24',
       'description': 'padding-right: 6rem;'
     },
     {
       'name': 'lg:pb-24',
       'description': 'padding-bottom: 6rem;'
     },
     {
       'name': 'lg:pl-24',
       'description': 'padding-left: 6rem;'
     },
     {
       'name': 'lg:pt-32',
       'description': 'padding-top: 8rem;'
     },
     {
       'name': 'lg:pr-32',
       'description': 'padding-right: 8rem;'
     },
     {
       'name': 'lg:pb-32',
       'description': 'padding-bottom: 8rem;'
     },
     {
       'name': 'lg:pl-32',
       'description': 'padding-left: 8rem;'
     },
     {
       'name': 'lg:pt-px',
       'description': 'padding-top: 1px;'
     },
     {
       'name': 'lg:pr-px',
       'description': 'padding-right: 1px;'
     },
     {
       'name': 'lg:pb-px',
       'description': 'padding-bottom: 1px;'
     },
     {
       'name': 'lg:pl-px',
       'description': 'padding-left: 1px;'
     },
     {
       'name': 'lg:pointer-events-none',
       'description': 'pointer-events: none;'
     },
     {
       'name': 'lg:pointer-events-auto',
       'description': 'pointer-events: auto;'
     },
     {
       'name': 'lg:static',
       'description': 'position: static;'
     },
     {
       'name': 'lg:fixed',
       'description': 'position: fixed;'
     },
     {
       'name': 'lg:absolute',
       'description': 'position: absolute;'
     },
     {
       'name': 'lg:relative',
       'description': 'position: relative;'
     },
     {
       'name': 'lg:sticky',
       'description': 'position: sticky;'
     },
     {
       'name': 'lg:pin-none',
       'description': 'top: auto; right: auto; bottom: auto; left: auto;'
     },
     {
       'name': 'lg:pin',
       'description': 'top: 0; right: 0; bottom: 0; left: 0;'
     },
     {
       'name': 'lg:pin-y',
       'description': 'top: 0; bottom: 0;'
     },
     {
       'name': 'lg:pin-x',
       'description': 'right: 0; left: 0;'
     },
     {
       'name': 'lg:pin-t',
       'description': 'top: 0;'
     },
     {
       'name': 'lg:pin-r',
       'description': 'right: 0;'
     },
     {
       'name': 'lg:pin-b',
       'description': 'bottom: 0;'
     },
     {
       'name': 'lg:pin-l',
       'description': 'left: 0;'
     },
     {
       'name': 'lg:resize-none',
       'description': 'resize: none;'
     },
     {
       'name': 'lg:resize-y',
       'description': 'resize: vertical;'
     },
     {
       'name': 'lg:resize-x',
       'description': 'resize: horizontal;'
     },
     {
       'name': 'lg:resize',
       'description': 'resize: both;'
     },
     {
       'name': 'lg:shadow',
       'description': 'box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .1);'
     },
     {
       'name': 'lg:shadow-md',
       'description': 'box-shadow: 0 4px 8px 0 rgba(0, 0, 0, .12), 0 2px 4px 0 rgba(0, 0, 0, .08);'
     },
     {
       'name': 'lg:shadow-lg',
       'description': 'box-shadow: 0 15px 30px 0 rgba(0, 0, 0, .11), 0 5px 15px 0 rgba(0, 0, 0, .08);'
     },
     {
       'name': 'lg:shadow-inner',
       'description': 'box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, .06);'
     },
     {
       'name': 'lg:shadow-outline',
       'description': 'box-shadow: 0 0 0 3px rgba(52, 144, 220, .5);'
     },
     {
       'name': 'lg:shadow-none',
       'description': 'box-shadow: none;'
     },
     {
       'name': 'lg:hover:shadow',
       'description': ':hover { box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .1); }'
     },
     {
       'name': 'lg:hover:shadow-md',
       'description': ':hover { box-shadow: 0 4px 8px 0 rgba(0, 0, 0, .12), 0 2px 4px 0 rgba(0, 0, 0, .08); }'
     },
     {
       'name': 'lg:hover:shadow-lg',
       'description': ':hover { box-shadow: 0 15px 30px 0 rgba(0, 0, 0, .11), 0 5px 15px 0 rgba(0, 0, 0, .08); }'
     },
     {
       'name': 'lg:hover:shadow-inner',
       'description': ':hover { box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, .06); }'
     },
     {
       'name': 'lg:hover:shadow-outline',
       'description': ':hover { box-shadow: 0 0 0 3px rgba(52, 144, 220, .5); }'
     },
     {
       'name': 'lg:hover:shadow-none',
       'description': ':hover { box-shadow: none; }'
     },
     {
       'name': 'lg:focus:shadow',
       'description': ':focus { box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .1); }'
     },
     {
       'name': 'lg:focus:shadow-md',
       'description': ':focus { box-shadow: 0 4px 8px 0 rgba(0, 0, 0, .12), 0 2px 4px 0 rgba(0, 0, 0, .08); }'
     },
     {
       'name': 'lg:focus:shadow-lg',
       'description': ':focus { box-shadow: 0 15px 30px 0 rgba(0, 0, 0, .11), 0 5px 15px 0 rgba(0, 0, 0, .08); }'
     },
     {
       'name': 'lg:focus:shadow-inner',
       'description': ':focus { box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, .06); }'
     },
     {
       'name': 'lg:focus:shadow-outline',
       'description': ':focus { box-shadow: 0 0 0 3px rgba(52, 144, 220, .5); }'
     },
     {
       'name': 'lg:focus:shadow-none',
       'description': ':focus { box-shadow: none; }'
     },
     {
       'name': 'lg:table-auto',
       'description': 'table-layout: auto;'
     },
     {
       'name': 'lg:table-fixed',
       'description': 'table-layout: fixed;'
     },
     {
       'name': 'lg:text-left',
       'description': 'text-align: left;'
     },
     {
       'name': 'lg:text-center',
       'description': 'text-align: center;'
     },
     {
       'name': 'lg:text-right',
       'description': 'text-align: right;'
     },
     {
       'name': 'lg:text-justify',
       'description': 'text-align: justify;'
     },
     {
       'name': 'lg:text-transparent',
       'description': 'color: transparent;'
     },
     {
       'name': 'lg:text-black',
       'description': 'color: #22292f;'
     },
     {
       'name': 'lg:text-grey-darkest',
       'description': 'color: #3d4852;'
     },
     {
       'name': 'lg:text-grey-darker',
       'description': 'color: #606f7b;'
     },
     {
       'name': 'lg:text-grey-dark',
       'description': 'color: #8795a1;'
     },
     {
       'name': 'lg:text-grey',
       'description': 'color: #b8c2cc;'
     },
     {
       'name': 'lg:text-grey-light',
       'description': 'color: #dae1e7;'
     },
     {
       'name': 'lg:text-grey-lighter',
       'description': 'color: #f1f5f8;'
     },
     {
       'name': 'lg:text-grey-lightest',
       'description': 'color: #f8fafc;'
     },
     {
       'name': 'lg:text-white',
       'description': 'color: #fff;'
     },
     {
       'name': 'lg:text-red-darkest',
       'description': 'color: #3b0d0c;'
     },
     {
       'name': 'lg:text-red-darker',
       'description': 'color: #621b18;'
     },
     {
       'name': 'lg:text-red-dark',
       'description': 'color: #cc1f1a;'
     },
     {
       'name': 'lg:text-red',
       'description': 'color: #e3342f;'
     },
     {
       'name': 'lg:text-red-light',
       'description': 'color: #ef5753;'
     },
     {
       'name': 'lg:text-red-lighter',
       'description': 'color: #f9acaa;'
     },
     {
       'name': 'lg:text-red-lightest',
       'description': 'color: #fcebea;'
     },
     {
       'name': 'lg:text-orange-darkest',
       'description': 'color: #462a16;'
     },
     {
       'name': 'lg:text-orange-darker',
       'description': 'color: #613b1f;'
     },
     {
       'name': 'lg:text-orange-dark',
       'description': 'color: #de751f;'
     },
     {
       'name': 'lg:text-orange',
       'description': 'color: #f6993f;'
     },
     {
       'name': 'lg:text-orange-light',
       'description': 'color: #faad63;'
     },
     {
       'name': 'lg:text-orange-lighter',
       'description': 'color: #fcd9b6;'
     },
     {
       'name': 'lg:text-orange-lightest',
       'description': 'color: #fff5eb;'
     },
     {
       'name': 'lg:text-yellow-darkest',
       'description': 'color: #453411;'
     },
     {
       'name': 'lg:text-yellow-darker',
       'description': 'color: #684f1d;'
     },
     {
       'name': 'lg:text-yellow-dark',
       'description': 'color: #f2d024;'
     },
     {
       'name': 'lg:text-yellow',
       'description': 'color: #ffed4a;'
     },
     {
       'name': 'lg:text-yellow-light',
       'description': 'color: #fff382;'
     },
     {
       'name': 'lg:text-yellow-lighter',
       'description': 'color: #fff9c2;'
     },
     {
       'name': 'lg:text-yellow-lightest',
       'description': 'color: #fcfbeb;'
     },
     {
       'name': 'lg:text-green-darkest',
       'description': 'color: #0f2f21;'
     },
     {
       'name': 'lg:text-green-darker',
       'description': 'color: #1a4731;'
     },
     {
       'name': 'lg:text-green-dark',
       'description': 'color: #1f9d55;'
     },
     {
       'name': 'lg:text-green',
       'description': 'color: #38c172;'
     },
     {
       'name': 'lg:text-green-light',
       'description': 'color: #51d88a;'
     },
     {
       'name': 'lg:text-green-lighter',
       'description': 'color: #a2f5bf;'
     },
     {
       'name': 'lg:text-green-lightest',
       'description': 'color: #e3fcec;'
     },
     {
       'name': 'lg:text-teal-darkest',
       'description': 'color: #0d3331;'
     },
     {
       'name': 'lg:text-teal-darker',
       'description': 'color: #20504f;'
     },
     {
       'name': 'lg:text-teal-dark',
       'description': 'color: #38a89d;'
     },
     {
       'name': 'lg:text-teal',
       'description': 'color: #4dc0b5;'
     },
     {
       'name': 'lg:text-teal-light',
       'description': 'color: #64d5ca;'
     },
     {
       'name': 'lg:text-teal-lighter',
       'description': 'color: #a0f0ed;'
     },
     {
       'name': 'lg:text-teal-lightest',
       'description': 'color: #e8fffe;'
     },
     {
       'name': 'lg:text-blue-darkest',
       'description': 'color: #12283a;'
     },
     {
       'name': 'lg:text-blue-darker',
       'description': 'color: #1c3d5a;'
     },
     {
       'name': 'lg:text-blue-dark',
       'description': 'color: #2779bd;'
     },
     {
       'name': 'lg:text-blue',
       'description': 'color: #3490dc;'
     },
     {
       'name': 'lg:text-blue-light',
       'description': 'color: #6cb2eb;'
     },
     {
       'name': 'lg:text-blue-lighter',
       'description': 'color: #bcdefa;'
     },
     {
       'name': 'lg:text-blue-lightest',
       'description': 'color: #eff8ff;'
     },
     {
       'name': 'lg:text-indigo-darkest',
       'description': 'color: #191e38;'
     },
     {
       'name': 'lg:text-indigo-darker',
       'description': 'color: #2f365f;'
     },
     {
       'name': 'lg:text-indigo-dark',
       'description': 'color: #5661b3;'
     },
     {
       'name': 'lg:text-indigo',
       'description': 'color: #6574cd;'
     },
     {
       'name': 'lg:text-indigo-light',
       'description': 'color: #7886d7;'
     },
     {
       'name': 'lg:text-indigo-lighter',
       'description': 'color: #b2b7ff;'
     },
     {
       'name': 'lg:text-indigo-lightest',
       'description': 'color: #e6e8ff;'
     },
     {
       'name': 'lg:text-purple-darkest',
       'description': 'color: #21183c;'
     },
     {
       'name': 'lg:text-purple-darker',
       'description': 'color: #382b5f;'
     },
     {
       'name': 'lg:text-purple-dark',
       'description': 'color: #794acf;'
     },
     {
       'name': 'lg:text-purple',
       'description': 'color: #9561e2;'
     },
     {
       'name': 'lg:text-purple-light',
       'description': 'color: #a779e9;'
     },
     {
       'name': 'lg:text-purple-lighter',
       'description': 'color: #d6bbfc;'
     },
     {
       'name': 'lg:text-purple-lightest',
       'description': 'color: #f3ebff;'
     },
     {
       'name': 'lg:text-pink-darkest',
       'description': 'color: #451225;'
     },
     {
       'name': 'lg:text-pink-darker',
       'description': 'color: #6f213f;'
     },
     {
       'name': 'lg:text-pink-dark',
       'description': 'color: #eb5286;'
     },
     {
       'name': 'lg:text-pink',
       'description': 'color: #f66d9b;'
     },
     {
       'name': 'lg:text-pink-light',
       'description': 'color: #fa7ea8;'
     },
     {
       'name': 'lg:text-pink-lighter',
       'description': 'color: #ffbbca;'
     },
     {
       'name': 'lg:text-pink-lightest',
       'description': 'color: #ffebef;'
     },
     {
       'name': 'lg:hover:text-transparent',
       'description': ':hover { color: transparent; }'
     },
     {
       'name': 'lg:hover:text-black',
       'description': ':hover { color: #22292f; }'
     },
     {
       'name': 'lg:hover:text-grey-darkest',
       'description': ':hover { color: #3d4852; }'
     },
     {
       'name': 'lg:hover:text-grey-darker',
       'description': ':hover { color: #606f7b; }'
     },
     {
       'name': 'lg:hover:text-grey-dark',
       'description': ':hover { color: #8795a1; }'
     },
     {
       'name': 'lg:hover:text-grey',
       'description': ':hover { color: #b8c2cc; }'
     },
     {
       'name': 'lg:hover:text-grey-light',
       'description': ':hover { color: #dae1e7; }'
     },
     {
       'name': 'lg:hover:text-grey-lighter',
       'description': ':hover { color: #f1f5f8; }'
     },
     {
       'name': 'lg:hover:text-grey-lightest',
       'description': ':hover { color: #f8fafc; }'
     },
     {
       'name': 'lg:hover:text-white',
       'description': ':hover { color: #fff; }'
     },
     {
       'name': 'lg:hover:text-red-darkest',
       'description': ':hover { color: #3b0d0c; }'
     },
     {
       'name': 'lg:hover:text-red-darker',
       'description': ':hover { color: #621b18; }'
     },
     {
       'name': 'lg:hover:text-red-dark',
       'description': ':hover { color: #cc1f1a; }'
     },
     {
       'name': 'lg:hover:text-red',
       'description': ':hover { color: #e3342f; }'
     },
     {
       'name': 'lg:hover:text-red-light',
       'description': ':hover { color: #ef5753; }'
     },
     {
       'name': 'lg:hover:text-red-lighter',
       'description': ':hover { color: #f9acaa; }'
     },
     {
       'name': 'lg:hover:text-red-lightest',
       'description': ':hover { color: #fcebea; }'
     },
     {
       'name': 'lg:hover:text-orange-darkest',
       'description': ':hover { color: #462a16; }'
     },
     {
       'name': 'lg:hover:text-orange-darker',
       'description': ':hover { color: #613b1f; }'
     },
     {
       'name': 'lg:hover:text-orange-dark',
       'description': ':hover { color: #de751f; }'
     },
     {
       'name': 'lg:hover:text-orange',
       'description': ':hover { color: #f6993f; }'
     },
     {
       'name': 'lg:hover:text-orange-light',
       'description': ':hover { color: #faad63; }'
     },
     {
       'name': 'lg:hover:text-orange-lighter',
       'description': ':hover { color: #fcd9b6; }'
     },
     {
       'name': 'lg:hover:text-orange-lightest',
       'description': ':hover { color: #fff5eb; }'
     },
     {
       'name': 'lg:hover:text-yellow-darkest',
       'description': ':hover { color: #453411; }'
     },
     {
       'name': 'lg:hover:text-yellow-darker',
       'description': ':hover { color: #684f1d; }'
     },
     {
       'name': 'lg:hover:text-yellow-dark',
       'description': ':hover { color: #f2d024; }'
     },
     {
       'name': 'lg:hover:text-yellow',
       'description': ':hover { color: #ffed4a; }'
     },
     {
       'name': 'lg:hover:text-yellow-light',
       'description': ':hover { color: #fff382; }'
     },
     {
       'name': 'lg:hover:text-yellow-lighter',
       'description': ':hover { color: #fff9c2; }'
     },
     {
       'name': 'lg:hover:text-yellow-lightest',
       'description': ':hover { color: #fcfbeb; }'
     },
     {
       'name': 'lg:hover:text-green-darkest',
       'description': ':hover { color: #0f2f21; }'
     },
     {
       'name': 'lg:hover:text-green-darker',
       'description': ':hover { color: #1a4731; }'
     },
     {
       'name': 'lg:hover:text-green-dark',
       'description': ':hover { color: #1f9d55; }'
     },
     {
       'name': 'lg:hover:text-green',
       'description': ':hover { color: #38c172; }'
     },
     {
       'name': 'lg:hover:text-green-light',
       'description': ':hover { color: #51d88a; }'
     },
     {
       'name': 'lg:hover:text-green-lighter',
       'description': ':hover { color: #a2f5bf; }'
     },
     {
       'name': 'lg:hover:text-green-lightest',
       'description': ':hover { color: #e3fcec; }'
     },
     {
       'name': 'lg:hover:text-teal-darkest',
       'description': ':hover { color: #0d3331; }'
     },
     {
       'name': 'lg:hover:text-teal-darker',
       'description': ':hover { color: #20504f; }'
     },
     {
       'name': 'lg:hover:text-teal-dark',
       'description': ':hover { color: #38a89d; }'
     },
     {
       'name': 'lg:hover:text-teal',
       'description': ':hover { color: #4dc0b5; }'
     },
     {
       'name': 'lg:hover:text-teal-light',
       'description': ':hover { color: #64d5ca; }'
     },
     {
       'name': 'lg:hover:text-teal-lighter',
       'description': ':hover { color: #a0f0ed; }'
     },
     {
       'name': 'lg:hover:text-teal-lightest',
       'description': ':hover { color: #e8fffe; }'
     },
     {
       'name': 'lg:hover:text-blue-darkest',
       'description': ':hover { color: #12283a; }'
     },
     {
       'name': 'lg:hover:text-blue-darker',
       'description': ':hover { color: #1c3d5a; }'
     },
     {
       'name': 'lg:hover:text-blue-dark',
       'description': ':hover { color: #2779bd; }'
     },
     {
       'name': 'lg:hover:text-blue',
       'description': ':hover { color: #3490dc; }'
     },
     {
       'name': 'lg:hover:text-blue-light',
       'description': ':hover { color: #6cb2eb; }'
     },
     {
       'name': 'lg:hover:text-blue-lighter',
       'description': ':hover { color: #bcdefa; }'
     },
     {
       'name': 'lg:hover:text-blue-lightest',
       'description': ':hover { color: #eff8ff; }'
     },
     {
       'name': 'lg:hover:text-indigo-darkest',
       'description': ':hover { color: #191e38; }'
     },
     {
       'name': 'lg:hover:text-indigo-darker',
       'description': ':hover { color: #2f365f; }'
     },
     {
       'name': 'lg:hover:text-indigo-dark',
       'description': ':hover { color: #5661b3; }'
     },
     {
       'name': 'lg:hover:text-indigo',
       'description': ':hover { color: #6574cd; }'
     },
     {
       'name': 'lg:hover:text-indigo-light',
       'description': ':hover { color: #7886d7; }'
     },
     {
       'name': 'lg:hover:text-indigo-lighter',
       'description': ':hover { color: #b2b7ff; }'
     },
     {
       'name': 'lg:hover:text-indigo-lightest',
       'description': ':hover { color: #e6e8ff; }'
     },
     {
       'name': 'lg:hover:text-purple-darkest',
       'description': ':hover { color: #21183c; }'
     },
     {
       'name': 'lg:hover:text-purple-darker',
       'description': ':hover { color: #382b5f; }'
     },
     {
       'name': 'lg:hover:text-purple-dark',
       'description': ':hover { color: #794acf; }'
     },
     {
       'name': 'lg:hover:text-purple',
       'description': ':hover { color: #9561e2; }'
     },
     {
       'name': 'lg:hover:text-purple-light',
       'description': ':hover { color: #a779e9; }'
     },
     {
       'name': 'lg:hover:text-purple-lighter',
       'description': ':hover { color: #d6bbfc; }'
     },
     {
       'name': 'lg:hover:text-purple-lightest',
       'description': ':hover { color: #f3ebff; }'
     },
     {
       'name': 'lg:hover:text-pink-darkest',
       'description': ':hover { color: #451225; }'
     },
     {
       'name': 'lg:hover:text-pink-darker',
       'description': ':hover { color: #6f213f; }'
     },
     {
       'name': 'lg:hover:text-pink-dark',
       'description': ':hover { color: #eb5286; }'
     },
     {
       'name': 'lg:hover:text-pink',
       'description': ':hover { color: #f66d9b; }'
     },
     {
       'name': 'lg:hover:text-pink-light',
       'description': ':hover { color: #fa7ea8; }'
     },
     {
       'name': 'lg:hover:text-pink-lighter',
       'description': ':hover { color: #ffbbca; }'
     },
     {
       'name': 'lg:hover:text-pink-lightest',
       'description': ':hover { color: #ffebef; }'
     },
     {
       'name': 'lg:focus:text-transparent',
       'description': ':focus { color: transparent; }'
     },
     {
       'name': 'lg:focus:text-black',
       'description': ':focus { color: #22292f; }'
     },
     {
       'name': 'lg:focus:text-grey-darkest',
       'description': ':focus { color: #3d4852; }'
     },
     {
       'name': 'lg:focus:text-grey-darker',
       'description': ':focus { color: #606f7b; }'
     },
     {
       'name': 'lg:focus:text-grey-dark',
       'description': ':focus { color: #8795a1; }'
     },
     {
       'name': 'lg:focus:text-grey',
       'description': ':focus { color: #b8c2cc; }'
     },
     {
       'name': 'lg:focus:text-grey-light',
       'description': ':focus { color: #dae1e7; }'
     },
     {
       'name': 'lg:focus:text-grey-lighter',
       'description': ':focus { color: #f1f5f8; }'
     },
     {
       'name': 'lg:focus:text-grey-lightest',
       'description': ':focus { color: #f8fafc; }'
     },
     {
       'name': 'lg:focus:text-white',
       'description': ':focus { color: #fff; }'
     },
     {
       'name': 'lg:focus:text-red-darkest',
       'description': ':focus { color: #3b0d0c; }'
     },
     {
       'name': 'lg:focus:text-red-darker',
       'description': ':focus { color: #621b18; }'
     },
     {
       'name': 'lg:focus:text-red-dark',
       'description': ':focus { color: #cc1f1a; }'
     },
     {
       'name': 'lg:focus:text-red',
       'description': ':focus { color: #e3342f; }'
     },
     {
       'name': 'lg:focus:text-red-light',
       'description': ':focus { color: #ef5753; }'
     },
     {
       'name': 'lg:focus:text-red-lighter',
       'description': ':focus { color: #f9acaa; }'
     },
     {
       'name': 'lg:focus:text-red-lightest',
       'description': ':focus { color: #fcebea; }'
     },
     {
       'name': 'lg:focus:text-orange-darkest',
       'description': ':focus { color: #462a16; }'
     },
     {
       'name': 'lg:focus:text-orange-darker',
       'description': ':focus { color: #613b1f; }'
     },
     {
       'name': 'lg:focus:text-orange-dark',
       'description': ':focus { color: #de751f; }'
     },
     {
       'name': 'lg:focus:text-orange',
       'description': ':focus { color: #f6993f; }'
     },
     {
       'name': 'lg:focus:text-orange-light',
       'description': ':focus { color: #faad63; }'
     },
     {
       'name': 'lg:focus:text-orange-lighter',
       'description': ':focus { color: #fcd9b6; }'
     },
     {
       'name': 'lg:focus:text-orange-lightest',
       'description': ':focus { color: #fff5eb; }'
     },
     {
       'name': 'lg:focus:text-yellow-darkest',
       'description': ':focus { color: #453411; }'
     },
     {
       'name': 'lg:focus:text-yellow-darker',
       'description': ':focus { color: #684f1d; }'
     },
     {
       'name': 'lg:focus:text-yellow-dark',
       'description': ':focus { color: #f2d024; }'
     },
     {
       'name': 'lg:focus:text-yellow',
       'description': ':focus { color: #ffed4a; }'
     },
     {
       'name': 'lg:focus:text-yellow-light',
       'description': ':focus { color: #fff382; }'
     },
     {
       'name': 'lg:focus:text-yellow-lighter',
       'description': ':focus { color: #fff9c2; }'
     },
     {
       'name': 'lg:focus:text-yellow-lightest',
       'description': ':focus { color: #fcfbeb; }'
     },
     {
       'name': 'lg:focus:text-green-darkest',
       'description': ':focus { color: #0f2f21; }'
     },
     {
       'name': 'lg:focus:text-green-darker',
       'description': ':focus { color: #1a4731; }'
     },
     {
       'name': 'lg:focus:text-green-dark',
       'description': ':focus { color: #1f9d55; }'
     },
     {
       'name': 'lg:focus:text-green',
       'description': ':focus { color: #38c172; }'
     },
     {
       'name': 'lg:focus:text-green-light',
       'description': ':focus { color: #51d88a; }'
     },
     {
       'name': 'lg:focus:text-green-lighter',
       'description': ':focus { color: #a2f5bf; }'
     },
     {
       'name': 'lg:focus:text-green-lightest',
       'description': ':focus { color: #e3fcec; }'
     },
     {
       'name': 'lg:focus:text-teal-darkest',
       'description': ':focus { color: #0d3331; }'
     },
     {
       'name': 'lg:focus:text-teal-darker',
       'description': ':focus { color: #20504f; }'
     },
     {
       'name': 'lg:focus:text-teal-dark',
       'description': ':focus { color: #38a89d; }'
     },
     {
       'name': 'lg:focus:text-teal',
       'description': ':focus { color: #4dc0b5; }'
     },
     {
       'name': 'lg:focus:text-teal-light',
       'description': ':focus { color: #64d5ca; }'
     },
     {
       'name': 'lg:focus:text-teal-lighter',
       'description': ':focus { color: #a0f0ed; }'
     },
     {
       'name': 'lg:focus:text-teal-lightest',
       'description': ':focus { color: #e8fffe; }'
     },
     {
       'name': 'lg:focus:text-blue-darkest',
       'description': ':focus { color: #12283a; }'
     },
     {
       'name': 'lg:focus:text-blue-darker',
       'description': ':focus { color: #1c3d5a; }'
     },
     {
       'name': 'lg:focus:text-blue-dark',
       'description': ':focus { color: #2779bd; }'
     },
     {
       'name': 'lg:focus:text-blue',
       'description': ':focus { color: #3490dc; }'
     },
     {
       'name': 'lg:focus:text-blue-light',
       'description': ':focus { color: #6cb2eb; }'
     },
     {
       'name': 'lg:focus:text-blue-lighter',
       'description': ':focus { color: #bcdefa; }'
     },
     {
       'name': 'lg:focus:text-blue-lightest',
       'description': ':focus { color: #eff8ff; }'
     },
     {
       'name': 'lg:focus:text-indigo-darkest',
       'description': ':focus { color: #191e38; }'
     },
     {
       'name': 'lg:focus:text-indigo-darker',
       'description': ':focus { color: #2f365f; }'
     },
     {
       'name': 'lg:focus:text-indigo-dark',
       'description': ':focus { color: #5661b3; }'
     },
     {
       'name': 'lg:focus:text-indigo',
       'description': ':focus { color: #6574cd; }'
     },
     {
       'name': 'lg:focus:text-indigo-light',
       'description': ':focus { color: #7886d7; }'
     },
     {
       'name': 'lg:focus:text-indigo-lighter',
       'description': ':focus { color: #b2b7ff; }'
     },
     {
       'name': 'lg:focus:text-indigo-lightest',
       'description': ':focus { color: #e6e8ff; }'
     },
     {
       'name': 'lg:focus:text-purple-darkest',
       'description': ':focus { color: #21183c; }'
     },
     {
       'name': 'lg:focus:text-purple-darker',
       'description': ':focus { color: #382b5f; }'
     },
     {
       'name': 'lg:focus:text-purple-dark',
       'description': ':focus { color: #794acf; }'
     },
     {
       'name': 'lg:focus:text-purple',
       'description': ':focus { color: #9561e2; }'
     },
     {
       'name': 'lg:focus:text-purple-light',
       'description': ':focus { color: #a779e9; }'
     },
     {
       'name': 'lg:focus:text-purple-lighter',
       'description': ':focus { color: #d6bbfc; }'
     },
     {
       'name': 'lg:focus:text-purple-lightest',
       'description': ':focus { color: #f3ebff; }'
     },
     {
       'name': 'lg:focus:text-pink-darkest',
       'description': ':focus { color: #451225; }'
     },
     {
       'name': 'lg:focus:text-pink-darker',
       'description': ':focus { color: #6f213f; }'
     },
     {
       'name': 'lg:focus:text-pink-dark',
       'description': ':focus { color: #eb5286; }'
     },
     {
       'name': 'lg:focus:text-pink',
       'description': ':focus { color: #f66d9b; }'
     },
     {
       'name': 'lg:focus:text-pink-light',
       'description': ':focus { color: #fa7ea8; }'
     },
     {
       'name': 'lg:focus:text-pink-lighter',
       'description': ':focus { color: #ffbbca; }'
     },
     {
       'name': 'lg:focus:text-pink-lightest',
       'description': ':focus { color: #ffebef; }'
     },
     {
       'name': 'lg:text-xs',
       'description': 'font-size: .75rem;'
     },
     {
       'name': 'lg:text-sm',
       'description': 'font-size: .875rem;'
     },
     {
       'name': 'lg:text-base',
       'description': 'font-size: 1rem;'
     },
     {
       'name': 'lg:text-lg',
       'description': 'font-size: 1.125rem;'
     },
     {
       'name': 'lg:text-xl',
       'description': 'font-size: 1.25rem;'
     },
     {
       'name': 'lg:text-2xl',
       'description': 'font-size: 1.5rem;'
     },
     {
       'name': 'lg:text-3xl',
       'description': 'font-size: 1.875rem;'
     },
     {
       'name': 'lg:text-4xl',
       'description': 'font-size: 2.25rem;'
     },
     {
       'name': 'lg:text-5xl',
       'description': 'font-size: 3rem;'
     },
     {
       'name': 'lg:italic',
       'description': 'font-style: italic;'
     },
     {
       'name': 'lg:roman',
       'description': 'font-style: normal;'
     },
     {
       'name': 'lg:uppercase',
       'description': 'text-transform: uppercase;'
     },
     {
       'name': 'lg:lowercase',
       'description': 'text-transform: lowercase;'
     },
     {
       'name': 'lg:capitalize',
       'description': 'text-transform: capitalize;'
     },
     {
       'name': 'lg:normal-case',
       'description': 'text-transform: none;'
     },
     {
       'name': 'lg:underline',
       'description': 'text-decoration: underline;'
     },
     {
       'name': 'lg:line-through',
       'description': 'text-decoration: line-through;'
     },
     {
       'name': 'lg:no-underline',
       'description': 'text-decoration: none;'
     },
     {
       'name': 'lg:antialiased',
       'description': '-webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;'
     },
     {
       'name': 'lg:subpixel-antialiased',
       'description': '-webkit-font-smoothing: auto; -moz-osx-font-smoothing: auto;'
     },
     {
       'name': 'lg:hover:italic',
       'description': ':hover { font-style: italic; }'
     },
     {
       'name': 'lg:hover:roman',
       'description': ':hover { font-style: normal; }'
     },
     {
       'name': 'lg:hover:uppercase',
       'description': ':hover { text-transform: uppercase; }'
     },
     {
       'name': 'lg:hover:lowercase',
       'description': ':hover { text-transform: lowercase; }'
     },
     {
       'name': 'lg:hover:capitalize',
       'description': ':hover { text-transform: capitalize; }'
     },
     {
       'name': 'lg:hover:normal-case',
       'description': ':hover { text-transform: none; }'
     },
     {
       'name': 'lg:hover:underline',
       'description': ':hover { text-decoration: underline; }'
     },
     {
       'name': 'lg:hover:line-through',
       'description': ':hover { text-decoration: line-through; }'
     },
     {
       'name': 'lg:hover:no-underline',
       'description': ':hover { text-decoration: none; }'
     },
     {
       'name': 'lg:hover:antialiased',
       'description': ':hover { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }'
     },
     {
       'name': 'lg:hover:subpixel-antialiased',
       'description': ':hover { -webkit-font-smoothing: auto; -moz-osx-font-smoothing: auto; }'
     },
     {
       'name': 'lg:focus:italic',
       'description': ':focus { font-style: italic; }'
     },
     {
       'name': 'lg:focus:roman',
       'description': ':focus { font-style: normal; }'
     },
     {
       'name': 'lg:focus:uppercase',
       'description': ':focus { text-transform: uppercase; }'
     },
     {
       'name': 'lg:focus:lowercase',
       'description': ':focus { text-transform: lowercase; }'
     },
     {
       'name': 'lg:focus:capitalize',
       'description': ':focus { text-transform: capitalize; }'
     },
     {
       'name': 'lg:focus:normal-case',
       'description': ':focus { text-transform: none; }'
     },
     {
       'name': 'lg:focus:underline',
       'description': ':focus { text-decoration: underline; }'
     },
     {
       'name': 'lg:focus:line-through',
       'description': ':focus { text-decoration: line-through; }'
     },
     {
       'name': 'lg:focus:no-underline',
       'description': ':focus { text-decoration: none; }'
     },
     {
       'name': 'lg:focus:antialiased',
       'description': ':focus { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }'
     },
     {
       'name': 'lg:focus:subpixel-antialiased',
       'description': ':focus { -webkit-font-smoothing: auto; -moz-osx-font-smoothing: auto; }'
     },
     {
       'name': 'lg:tracking-tight',
       'description': 'letter-spacing: -0.05em;'
     },
     {
       'name': 'lg:tracking-normal',
       'description': 'letter-spacing: 0;'
     },
     {
       'name': 'lg:tracking-wide',
       'description': 'letter-spacing: .05em;'
     },
     {
       'name': 'lg:select-none',
       'description': 'user-select: none;'
     },
     {
       'name': 'lg:select-text',
       'description': 'user-select: text;'
     },
     {
       'name': 'lg:align-baseline',
       'description': 'vertical-align: baseline;'
     },
     {
       'name': 'lg:align-top',
       'description': 'vertical-align: top;'
     },
     {
       'name': 'lg:align-middle',
       'description': 'vertical-align: middle;'
     },
     {
       'name': 'lg:align-bottom',
       'description': 'vertical-align: bottom;'
     },
     {
       'name': 'lg:align-text-top',
       'description': 'vertical-align: text-top;'
     },
     {
       'name': 'lg:align-text-bottom',
       'description': 'vertical-align: text-bottom;'
     },
     {
       'name': 'lg:visible',
       'description': 'visibility: visible;'
     },
     {
       'name': 'lg:invisible',
       'description': 'visibility: hidden;'
     },
     {
       'name': 'lg:whitespace-normal',
       'description': 'white-space: normal;'
     },
     {
       'name': 'lg:whitespace-no-wrap',
       'description': 'white-space: nowrap;'
     },
     {
       'name': 'lg:whitespace-pre',
       'description': 'white-space: pre;'
     },
     {
       'name': 'lg:whitespace-pre-line',
       'description': 'white-space: pre-line;'
     },
     {
       'name': 'lg:whitespace-pre-wrap',
       'description': 'white-space: pre-wrap;'
     },
     {
       'name': 'lg:break-words',
       'description': 'word-wrap: break-word;'
     },
     {
       'name': 'lg:break-normal',
       'description': 'word-wrap: normal;'
     },
     {
       'name': 'lg:truncate',
       'description': 'overflow: hidden; text-overflow: ellipsis; white-space: nowrap;'
     },
     {
       'name': 'lg:w-1',
       'description': 'width: .25rem;'
     },
     {
       'name': 'lg:w-2',
       'description': 'width: .5rem;'
     },
     {
       'name': 'lg:w-3',
       'description': 'width: .75rem;'
     },
     {
       'name': 'lg:w-4',
       'description': 'width: 1rem;'
     },
     {
       'name': 'lg:w-5',
       'description': 'width: 1.25rem;'
     },
     {
       'name': 'lg:w-6',
       'description': 'width: 1.5rem;'
     },
     {
       'name': 'lg:w-8',
       'description': 'width: 2rem;'
     },
     {
       'name': 'lg:w-10',
       'description': 'width: 2.5rem;'
     },
     {
       'name': 'lg:w-12',
       'description': 'width: 3rem;'
     },
     {
       'name': 'lg:w-16',
       'description': 'width: 4rem;'
     },
     {
       'name': 'lg:w-24',
       'description': 'width: 6rem;'
     },
     {
       'name': 'lg:w-32',
       'description': 'width: 8rem;'
     },
     {
       'name': 'lg:w-48',
       'description': 'width: 12rem;'
     },
     {
       'name': 'lg:w-64',
       'description': 'width: 16rem;'
     },
     {
       'name': 'lg:w-auto',
       'description': 'width: auto;'
     },
     {
       'name': 'lg:w-px',
       'description': 'width: 1px;'
     },
     {
       'name': 'lg:w-1/2',
       'description': 'width: 50%;'
     },
     {
       'name': 'lg:w-1/3',
       'description': 'width: 33.33333%;'
     },
     {
       'name': 'lg:w-2/3',
       'description': 'width: 66.66667%;'
     },
     {
       'name': 'lg:w-1/4',
       'description': 'width: 25%;'
     },
     {
       'name': 'lg:w-3/4',
       'description': 'width: 75%;'
     },
     {
       'name': 'lg:w-1/5',
       'description': 'width: 20%;'
     },
     {
       'name': 'lg:w-2/5',
       'description': 'width: 40%;'
     },
     {
       'name': 'lg:w-3/5',
       'description': 'width: 60%;'
     },
     {
       'name': 'lg:w-4/5',
       'description': 'width: 80%;'
     },
     {
       'name': 'lg:w-1/6',
       'description': 'width: 16.66667%;'
     },
     {
       'name': 'lg:w-5/6',
       'description': 'width: 83.33333%;'
     },
     {
       'name': 'lg:w-full',
       'description': 'width: 100%;'
     },
     {
       'name': 'lg:w-screen',
       'description': 'width: 100vw;'
     },
     {
       'name': 'lg:z-0',
       'description': 'z-index: 0;'
     },
     {
       'name': 'lg:z-10',
       'description': 'z-index: 10;'
     },
     {
       'name': 'lg:z-20',
       'description': 'z-index: 20;'
     },
     {
       'name': 'lg:z-30',
       'description': 'z-index: 30;'
     },
     {
       'name': 'lg:z-40',
       'description': 'z-index: 40;'
     },
     {
       'name': 'lg:z-50',
       'description': 'z-index: 50;'
     },
     {
       'name': 'lg:z-auto',
       'description': 'z-index: auto;'
     },
     {
       'name': 'xl:list-reset',
       'description': 'list-style: none; padding: 0;'
     },
     {
       'name': 'xl:appearance-none',
       'description': 'appearance: none;'
     },
     {
       'name': 'xl:bg-fixed',
       'description': 'background-attachment: fixed;'
     },
     {
       'name': 'xl:bg-local',
       'description': 'background-attachment: local;'
     },
     {
       'name': 'xl:bg-scroll',
       'description': 'background-attachment: scroll;'
     },
     {
       'name': 'xl:bg-transparent',
       'description': 'background-color: transparent;'
     },
     {
       'name': 'xl:bg-black',
       'description': 'background-color: #22292f;'
     },
     {
       'name': 'xl:bg-grey-darkest',
       'description': 'background-color: #3d4852;'
     },
     {
       'name': 'xl:bg-grey-darker',
       'description': 'background-color: #606f7b;'
     },
     {
       'name': 'xl:bg-grey-dark',
       'description': 'background-color: #8795a1;'
     },
     {
       'name': 'xl:bg-grey',
       'description': 'background-color: #b8c2cc;'
     },
     {
       'name': 'xl:bg-grey-light',
       'description': 'background-color: #dae1e7;'
     },
     {
       'name': 'xl:bg-grey-lighter',
       'description': 'background-color: #f1f5f8;'
     },
     {
       'name': 'xl:bg-grey-lightest',
       'description': 'background-color: #f8fafc;'
     },
     {
       'name': 'xl:bg-white',
       'description': 'background-color: #fff;'
     },
     {
       'name': 'xl:bg-red-darkest',
       'description': 'background-color: #3b0d0c;'
     },
     {
       'name': 'xl:bg-red-darker',
       'description': 'background-color: #621b18;'
     },
     {
       'name': 'xl:bg-red-dark',
       'description': 'background-color: #cc1f1a;'
     },
     {
       'name': 'xl:bg-red',
       'description': 'background-color: #e3342f;'
     },
     {
       'name': 'xl:bg-red-light',
       'description': 'background-color: #ef5753;'
     },
     {
       'name': 'xl:bg-red-lighter',
       'description': 'background-color: #f9acaa;'
     },
     {
       'name': 'xl:bg-red-lightest',
       'description': 'background-color: #fcebea;'
     },
     {
       'name': 'xl:bg-orange-darkest',
       'description': 'background-color: #462a16;'
     },
     {
       'name': 'xl:bg-orange-darker',
       'description': 'background-color: #613b1f;'
     },
     {
       'name': 'xl:bg-orange-dark',
       'description': 'background-color: #de751f;'
     },
     {
       'name': 'xl:bg-orange',
       'description': 'background-color: #f6993f;'
     },
     {
       'name': 'xl:bg-orange-light',
       'description': 'background-color: #faad63;'
     },
     {
       'name': 'xl:bg-orange-lighter',
       'description': 'background-color: #fcd9b6;'
     },
     {
       'name': 'xl:bg-orange-lightest',
       'description': 'background-color: #fff5eb;'
     },
     {
       'name': 'xl:bg-yellow-darkest',
       'description': 'background-color: #453411;'
     },
     {
       'name': 'xl:bg-yellow-darker',
       'description': 'background-color: #684f1d;'
     },
     {
       'name': 'xl:bg-yellow-dark',
       'description': 'background-color: #f2d024;'
     },
     {
       'name': 'xl:bg-yellow',
       'description': 'background-color: #ffed4a;'
     },
     {
       'name': 'xl:bg-yellow-light',
       'description': 'background-color: #fff382;'
     },
     {
       'name': 'xl:bg-yellow-lighter',
       'description': 'background-color: #fff9c2;'
     },
     {
       'name': 'xl:bg-yellow-lightest',
       'description': 'background-color: #fcfbeb;'
     },
     {
       'name': 'xl:bg-green-darkest',
       'description': 'background-color: #0f2f21;'
     },
     {
       'name': 'xl:bg-green-darker',
       'description': 'background-color: #1a4731;'
     },
     {
       'name': 'xl:bg-green-dark',
       'description': 'background-color: #1f9d55;'
     },
     {
       'name': 'xl:bg-green',
       'description': 'background-color: #38c172;'
     },
     {
       'name': 'xl:bg-green-light',
       'description': 'background-color: #51d88a;'
     },
     {
       'name': 'xl:bg-green-lighter',
       'description': 'background-color: #a2f5bf;'
     },
     {
       'name': 'xl:bg-green-lightest',
       'description': 'background-color: #e3fcec;'
     },
     {
       'name': 'xl:bg-teal-darkest',
       'description': 'background-color: #0d3331;'
     },
     {
       'name': 'xl:bg-teal-darker',
       'description': 'background-color: #20504f;'
     },
     {
       'name': 'xl:bg-teal-dark',
       'description': 'background-color: #38a89d;'
     },
     {
       'name': 'xl:bg-teal',
       'description': 'background-color: #4dc0b5;'
     },
     {
       'name': 'xl:bg-teal-light',
       'description': 'background-color: #64d5ca;'
     },
     {
       'name': 'xl:bg-teal-lighter',
       'description': 'background-color: #a0f0ed;'
     },
     {
       'name': 'xl:bg-teal-lightest',
       'description': 'background-color: #e8fffe;'
     },
     {
       'name': 'xl:bg-blue-darkest',
       'description': 'background-color: #12283a;'
     },
     {
       'name': 'xl:bg-blue-darker',
       'description': 'background-color: #1c3d5a;'
     },
     {
       'name': 'xl:bg-blue-dark',
       'description': 'background-color: #2779bd;'
     },
     {
       'name': 'xl:bg-blue',
       'description': 'background-color: #3490dc;'
     },
     {
       'name': 'xl:bg-blue-light',
       'description': 'background-color: #6cb2eb;'
     },
     {
       'name': 'xl:bg-blue-lighter',
       'description': 'background-color: #bcdefa;'
     },
     {
       'name': 'xl:bg-blue-lightest',
       'description': 'background-color: #eff8ff;'
     },
     {
       'name': 'xl:bg-indigo-darkest',
       'description': 'background-color: #191e38;'
     },
     {
       'name': 'xl:bg-indigo-darker',
       'description': 'background-color: #2f365f;'
     },
     {
       'name': 'xl:bg-indigo-dark',
       'description': 'background-color: #5661b3;'
     },
     {
       'name': 'xl:bg-indigo',
       'description': 'background-color: #6574cd;'
     },
     {
       'name': 'xl:bg-indigo-light',
       'description': 'background-color: #7886d7;'
     },
     {
       'name': 'xl:bg-indigo-lighter',
       'description': 'background-color: #b2b7ff;'
     },
     {
       'name': 'xl:bg-indigo-lightest',
       'description': 'background-color: #e6e8ff;'
     },
     {
       'name': 'xl:bg-purple-darkest',
       'description': 'background-color: #21183c;'
     },
     {
       'name': 'xl:bg-purple-darker',
       'description': 'background-color: #382b5f;'
     },
     {
       'name': 'xl:bg-purple-dark',
       'description': 'background-color: #794acf;'
     },
     {
       'name': 'xl:bg-purple',
       'description': 'background-color: #9561e2;'
     },
     {
       'name': 'xl:bg-purple-light',
       'description': 'background-color: #a779e9;'
     },
     {
       'name': 'xl:bg-purple-lighter',
       'description': 'background-color: #d6bbfc;'
     },
     {
       'name': 'xl:bg-purple-lightest',
       'description': 'background-color: #f3ebff;'
     },
     {
       'name': 'xl:bg-pink-darkest',
       'description': 'background-color: #451225;'
     },
     {
       'name': 'xl:bg-pink-darker',
       'description': 'background-color: #6f213f;'
     },
     {
       'name': 'xl:bg-pink-dark',
       'description': 'background-color: #eb5286;'
     },
     {
       'name': 'xl:bg-pink',
       'description': 'background-color: #f66d9b;'
     },
     {
       'name': 'xl:bg-pink-light',
       'description': 'background-color: #fa7ea8;'
     },
     {
       'name': 'xl:bg-pink-lighter',
       'description': 'background-color: #ffbbca;'
     },
     {
       'name': 'xl:bg-pink-lightest',
       'description': 'background-color: #ffebef;'
     },
     {
       'name': 'xl:hover:bg-transparent',
       'description': ':hover { background-color: transparent; }'
     },
     {
       'name': 'xl:hover:bg-black',
       'description': ':hover { background-color: #22292f; }'
     },
     {
       'name': 'xl:hover:bg-grey-darkest',
       'description': ':hover { background-color: #3d4852; }'
     },
     {
       'name': 'xl:hover:bg-grey-darker',
       'description': ':hover { background-color: #606f7b; }'
     },
     {
       'name': 'xl:hover:bg-grey-dark',
       'description': ':hover { background-color: #8795a1; }'
     },
     {
       'name': 'xl:hover:bg-grey',
       'description': ':hover { background-color: #b8c2cc; }'
     },
     {
       'name': 'xl:hover:bg-grey-light',
       'description': ':hover { background-color: #dae1e7; }'
     },
     {
       'name': 'xl:hover:bg-grey-lighter',
       'description': ':hover { background-color: #f1f5f8; }'
     },
     {
       'name': 'xl:hover:bg-grey-lightest',
       'description': ':hover { background-color: #f8fafc; }'
     },
     {
       'name': 'xl:hover:bg-white',
       'description': ':hover { background-color: #fff; }'
     },
     {
       'name': 'xl:hover:bg-red-darkest',
       'description': ':hover { background-color: #3b0d0c; }'
     },
     {
       'name': 'xl:hover:bg-red-darker',
       'description': ':hover { background-color: #621b18; }'
     },
     {
       'name': 'xl:hover:bg-red-dark',
       'description': ':hover { background-color: #cc1f1a; }'
     },
     {
       'name': 'xl:hover:bg-red',
       'description': ':hover { background-color: #e3342f; }'
     },
     {
       'name': 'xl:hover:bg-red-light',
       'description': ':hover { background-color: #ef5753; }'
     },
     {
       'name': 'xl:hover:bg-red-lighter',
       'description': ':hover { background-color: #f9acaa; }'
     },
     {
       'name': 'xl:hover:bg-red-lightest',
       'description': ':hover { background-color: #fcebea; }'
     },
     {
       'name': 'xl:hover:bg-orange-darkest',
       'description': ':hover { background-color: #462a16; }'
     },
     {
       'name': 'xl:hover:bg-orange-darker',
       'description': ':hover { background-color: #613b1f; }'
     },
     {
       'name': 'xl:hover:bg-orange-dark',
       'description': ':hover { background-color: #de751f; }'
     },
     {
       'name': 'xl:hover:bg-orange',
       'description': ':hover { background-color: #f6993f; }'
     },
     {
       'name': 'xl:hover:bg-orange-light',
       'description': ':hover { background-color: #faad63; }'
     },
     {
       'name': 'xl:hover:bg-orange-lighter',
       'description': ':hover { background-color: #fcd9b6; }'
     },
     {
       'name': 'xl:hover:bg-orange-lightest',
       'description': ':hover { background-color: #fff5eb; }'
     },
     {
       'name': 'xl:hover:bg-yellow-darkest',
       'description': ':hover { background-color: #453411; }'
     },
     {
       'name': 'xl:hover:bg-yellow-darker',
       'description': ':hover { background-color: #684f1d; }'
     },
     {
       'name': 'xl:hover:bg-yellow-dark',
       'description': ':hover { background-color: #f2d024; }'
     },
     {
       'name': 'xl:hover:bg-yellow',
       'description': ':hover { background-color: #ffed4a; }'
     },
     {
       'name': 'xl:hover:bg-yellow-light',
       'description': ':hover { background-color: #fff382; }'
     },
     {
       'name': 'xl:hover:bg-yellow-lighter',
       'description': ':hover { background-color: #fff9c2; }'
     },
     {
       'name': 'xl:hover:bg-yellow-lightest',
       'description': ':hover { background-color: #fcfbeb; }'
     },
     {
       'name': 'xl:hover:bg-green-darkest',
       'description': ':hover { background-color: #0f2f21; }'
     },
     {
       'name': 'xl:hover:bg-green-darker',
       'description': ':hover { background-color: #1a4731; }'
     },
     {
       'name': 'xl:hover:bg-green-dark',
       'description': ':hover { background-color: #1f9d55; }'
     },
     {
       'name': 'xl:hover:bg-green',
       'description': ':hover { background-color: #38c172; }'
     },
     {
       'name': 'xl:hover:bg-green-light',
       'description': ':hover { background-color: #51d88a; }'
     },
     {
       'name': 'xl:hover:bg-green-lighter',
       'description': ':hover { background-color: #a2f5bf; }'
     },
     {
       'name': 'xl:hover:bg-green-lightest',
       'description': ':hover { background-color: #e3fcec; }'
     },
     {
       'name': 'xl:hover:bg-teal-darkest',
       'description': ':hover { background-color: #0d3331; }'
     },
     {
       'name': 'xl:hover:bg-teal-darker',
       'description': ':hover { background-color: #20504f; }'
     },
     {
       'name': 'xl:hover:bg-teal-dark',
       'description': ':hover { background-color: #38a89d; }'
     },
     {
       'name': 'xl:hover:bg-teal',
       'description': ':hover { background-color: #4dc0b5; }'
     },
     {
       'name': 'xl:hover:bg-teal-light',
       'description': ':hover { background-color: #64d5ca; }'
     },
     {
       'name': 'xl:hover:bg-teal-lighter',
       'description': ':hover { background-color: #a0f0ed; }'
     },
     {
       'name': 'xl:hover:bg-teal-lightest',
       'description': ':hover { background-color: #e8fffe; }'
     },
     {
       'name': 'xl:hover:bg-blue-darkest',
       'description': ':hover { background-color: #12283a; }'
     },
     {
       'name': 'xl:hover:bg-blue-darker',
       'description': ':hover { background-color: #1c3d5a; }'
     },
     {
       'name': 'xl:hover:bg-blue-dark',
       'description': ':hover { background-color: #2779bd; }'
     },
     {
       'name': 'xl:hover:bg-blue',
       'description': ':hover { background-color: #3490dc; }'
     },
     {
       'name': 'xl:hover:bg-blue-light',
       'description': ':hover { background-color: #6cb2eb; }'
     },
     {
       'name': 'xl:hover:bg-blue-lighter',
       'description': ':hover { background-color: #bcdefa; }'
     },
     {
       'name': 'xl:hover:bg-blue-lightest',
       'description': ':hover { background-color: #eff8ff; }'
     },
     {
       'name': 'xl:hover:bg-indigo-darkest',
       'description': ':hover { background-color: #191e38; }'
     },
     {
       'name': 'xl:hover:bg-indigo-darker',
       'description': ':hover { background-color: #2f365f; }'
     },
     {
       'name': 'xl:hover:bg-indigo-dark',
       'description': ':hover { background-color: #5661b3; }'
     },
     {
       'name': 'xl:hover:bg-indigo',
       'description': ':hover { background-color: #6574cd; }'
     },
     {
       'name': 'xl:hover:bg-indigo-light',
       'description': ':hover { background-color: #7886d7; }'
     },
     {
       'name': 'xl:hover:bg-indigo-lighter',
       'description': ':hover { background-color: #b2b7ff; }'
     },
     {
       'name': 'xl:hover:bg-indigo-lightest',
       'description': ':hover { background-color: #e6e8ff; }'
     },
     {
       'name': 'xl:hover:bg-purple-darkest',
       'description': ':hover { background-color: #21183c; }'
     },
     {
       'name': 'xl:hover:bg-purple-darker',
       'description': ':hover { background-color: #382b5f; }'
     },
     {
       'name': 'xl:hover:bg-purple-dark',
       'description': ':hover { background-color: #794acf; }'
     },
     {
       'name': 'xl:hover:bg-purple',
       'description': ':hover { background-color: #9561e2; }'
     },
     {
       'name': 'xl:hover:bg-purple-light',
       'description': ':hover { background-color: #a779e9; }'
     },
     {
       'name': 'xl:hover:bg-purple-lighter',
       'description': ':hover { background-color: #d6bbfc; }'
     },
     {
       'name': 'xl:hover:bg-purple-lightest',
       'description': ':hover { background-color: #f3ebff; }'
     },
     {
       'name': 'xl:hover:bg-pink-darkest',
       'description': ':hover { background-color: #451225; }'
     },
     {
       'name': 'xl:hover:bg-pink-darker',
       'description': ':hover { background-color: #6f213f; }'
     },
     {
       'name': 'xl:hover:bg-pink-dark',
       'description': ':hover { background-color: #eb5286; }'
     },
     {
       'name': 'xl:hover:bg-pink',
       'description': ':hover { background-color: #f66d9b; }'
     },
     {
       'name': 'xl:hover:bg-pink-light',
       'description': ':hover { background-color: #fa7ea8; }'
     },
     {
       'name': 'xl:hover:bg-pink-lighter',
       'description': ':hover { background-color: #ffbbca; }'
     },
     {
       'name': 'xl:hover:bg-pink-lightest',
       'description': ':hover { background-color: #ffebef; }'
     },
     {
       'name': 'xl:focus:bg-transparent',
       'description': ':focus { background-color: transparent; }'
     },
     {
       'name': 'xl:focus:bg-black',
       'description': ':focus { background-color: #22292f; }'
     },
     {
       'name': 'xl:focus:bg-grey-darkest',
       'description': ':focus { background-color: #3d4852; }'
     },
     {
       'name': 'xl:focus:bg-grey-darker',
       'description': ':focus { background-color: #606f7b; }'
     },
     {
       'name': 'xl:focus:bg-grey-dark',
       'description': ':focus { background-color: #8795a1; }'
     },
     {
       'name': 'xl:focus:bg-grey',
       'description': ':focus { background-color: #b8c2cc; }'
     },
     {
       'name': 'xl:focus:bg-grey-light',
       'description': ':focus { background-color: #dae1e7; }'
     },
     {
       'name': 'xl:focus:bg-grey-lighter',
       'description': ':focus { background-color: #f1f5f8; }'
     },
     {
       'name': 'xl:focus:bg-grey-lightest',
       'description': ':focus { background-color: #f8fafc; }'
     },
     {
       'name': 'xl:focus:bg-white',
       'description': ':focus { background-color: #fff; }'
     },
     {
       'name': 'xl:focus:bg-red-darkest',
       'description': ':focus { background-color: #3b0d0c; }'
     },
     {
       'name': 'xl:focus:bg-red-darker',
       'description': ':focus { background-color: #621b18; }'
     },
     {
       'name': 'xl:focus:bg-red-dark',
       'description': ':focus { background-color: #cc1f1a; }'
     },
     {
       'name': 'xl:focus:bg-red',
       'description': ':focus { background-color: #e3342f; }'
     },
     {
       'name': 'xl:focus:bg-red-light',
       'description': ':focus { background-color: #ef5753; }'
     },
     {
       'name': 'xl:focus:bg-red-lighter',
       'description': ':focus { background-color: #f9acaa; }'
     },
     {
       'name': 'xl:focus:bg-red-lightest',
       'description': ':focus { background-color: #fcebea; }'
     },
     {
       'name': 'xl:focus:bg-orange-darkest',
       'description': ':focus { background-color: #462a16; }'
     },
     {
       'name': 'xl:focus:bg-orange-darker',
       'description': ':focus { background-color: #613b1f; }'
     },
     {
       'name': 'xl:focus:bg-orange-dark',
       'description': ':focus { background-color: #de751f; }'
     },
     {
       'name': 'xl:focus:bg-orange',
       'description': ':focus { background-color: #f6993f; }'
     },
     {
       'name': 'xl:focus:bg-orange-light',
       'description': ':focus { background-color: #faad63; }'
     },
     {
       'name': 'xl:focus:bg-orange-lighter',
       'description': ':focus { background-color: #fcd9b6; }'
     },
     {
       'name': 'xl:focus:bg-orange-lightest',
       'description': ':focus { background-color: #fff5eb; }'
     },
     {
       'name': 'xl:focus:bg-yellow-darkest',
       'description': ':focus { background-color: #453411; }'
     },
     {
       'name': 'xl:focus:bg-yellow-darker',
       'description': ':focus { background-color: #684f1d; }'
     },
     {
       'name': 'xl:focus:bg-yellow-dark',
       'description': ':focus { background-color: #f2d024; }'
     },
     {
       'name': 'xl:focus:bg-yellow',
       'description': ':focus { background-color: #ffed4a; }'
     },
     {
       'name': 'xl:focus:bg-yellow-light',
       'description': ':focus { background-color: #fff382; }'
     },
     {
       'name': 'xl:focus:bg-yellow-lighter',
       'description': ':focus { background-color: #fff9c2; }'
     },
     {
       'name': 'xl:focus:bg-yellow-lightest',
       'description': ':focus { background-color: #fcfbeb; }'
     },
     {
       'name': 'xl:focus:bg-green-darkest',
       'description': ':focus { background-color: #0f2f21; }'
     },
     {
       'name': 'xl:focus:bg-green-darker',
       'description': ':focus { background-color: #1a4731; }'
     },
     {
       'name': 'xl:focus:bg-green-dark',
       'description': ':focus { background-color: #1f9d55; }'
     },
     {
       'name': 'xl:focus:bg-green',
       'description': ':focus { background-color: #38c172; }'
     },
     {
       'name': 'xl:focus:bg-green-light',
       'description': ':focus { background-color: #51d88a; }'
     },
     {
       'name': 'xl:focus:bg-green-lighter',
       'description': ':focus { background-color: #a2f5bf; }'
     },
     {
       'name': 'xl:focus:bg-green-lightest',
       'description': ':focus { background-color: #e3fcec; }'
     },
     {
       'name': 'xl:focus:bg-teal-darkest',
       'description': ':focus { background-color: #0d3331; }'
     },
     {
       'name': 'xl:focus:bg-teal-darker',
       'description': ':focus { background-color: #20504f; }'
     },
     {
       'name': 'xl:focus:bg-teal-dark',
       'description': ':focus { background-color: #38a89d; }'
     },
     {
       'name': 'xl:focus:bg-teal',
       'description': ':focus { background-color: #4dc0b5; }'
     },
     {
       'name': 'xl:focus:bg-teal-light',
       'description': ':focus { background-color: #64d5ca; }'
     },
     {
       'name': 'xl:focus:bg-teal-lighter',
       'description': ':focus { background-color: #a0f0ed; }'
     },
     {
       'name': 'xl:focus:bg-teal-lightest',
       'description': ':focus { background-color: #e8fffe; }'
     },
     {
       'name': 'xl:focus:bg-blue-darkest',
       'description': ':focus { background-color: #12283a; }'
     },
     {
       'name': 'xl:focus:bg-blue-darker',
       'description': ':focus { background-color: #1c3d5a; }'
     },
     {
       'name': 'xl:focus:bg-blue-dark',
       'description': ':focus { background-color: #2779bd; }'
     },
     {
       'name': 'xl:focus:bg-blue',
       'description': ':focus { background-color: #3490dc; }'
     },
     {
       'name': 'xl:focus:bg-blue-light',
       'description': ':focus { background-color: #6cb2eb; }'
     },
     {
       'name': 'xl:focus:bg-blue-lighter',
       'description': ':focus { background-color: #bcdefa; }'
     },
     {
       'name': 'xl:focus:bg-blue-lightest',
       'description': ':focus { background-color: #eff8ff; }'
     },
     {
       'name': 'xl:focus:bg-indigo-darkest',
       'description': ':focus { background-color: #191e38; }'
     },
     {
       'name': 'xl:focus:bg-indigo-darker',
       'description': ':focus { background-color: #2f365f; }'
     },
     {
       'name': 'xl:focus:bg-indigo-dark',
       'description': ':focus { background-color: #5661b3; }'
     },
     {
       'name': 'xl:focus:bg-indigo',
       'description': ':focus { background-color: #6574cd; }'
     },
     {
       'name': 'xl:focus:bg-indigo-light',
       'description': ':focus { background-color: #7886d7; }'
     },
     {
       'name': 'xl:focus:bg-indigo-lighter',
       'description': ':focus { background-color: #b2b7ff; }'
     },
     {
       'name': 'xl:focus:bg-indigo-lightest',
       'description': ':focus { background-color: #e6e8ff; }'
     },
     {
       'name': 'xl:focus:bg-purple-darkest',
       'description': ':focus { background-color: #21183c; }'
     },
     {
       'name': 'xl:focus:bg-purple-darker',
       'description': ':focus { background-color: #382b5f; }'
     },
     {
       'name': 'xl:focus:bg-purple-dark',
       'description': ':focus { background-color: #794acf; }'
     },
     {
       'name': 'xl:focus:bg-purple',
       'description': ':focus { background-color: #9561e2; }'
     },
     {
       'name': 'xl:focus:bg-purple-light',
       'description': ':focus { background-color: #a779e9; }'
     },
     {
       'name': 'xl:focus:bg-purple-lighter',
       'description': ':focus { background-color: #d6bbfc; }'
     },
     {
       'name': 'xl:focus:bg-purple-lightest',
       'description': ':focus { background-color: #f3ebff; }'
     },
     {
       'name': 'xl:focus:bg-pink-darkest',
       'description': ':focus { background-color: #451225; }'
     },
     {
       'name': 'xl:focus:bg-pink-darker',
       'description': ':focus { background-color: #6f213f; }'
     },
     {
       'name': 'xl:focus:bg-pink-dark',
       'description': ':focus { background-color: #eb5286; }'
     },
     {
       'name': 'xl:focus:bg-pink',
       'description': ':focus { background-color: #f66d9b; }'
     },
     {
       'name': 'xl:focus:bg-pink-light',
       'description': ':focus { background-color: #fa7ea8; }'
     },
     {
       'name': 'xl:focus:bg-pink-lighter',
       'description': ':focus { background-color: #ffbbca; }'
     },
     {
       'name': 'xl:focus:bg-pink-lightest',
       'description': ':focus { background-color: #ffebef; }'
     },
     {
       'name': 'xl:bg-bottom',
       'description': 'background-position: bottom;'
     },
     {
       'name': 'xl:bg-center',
       'description': 'background-position: center;'
     },
     {
       'name': 'xl:bg-left',
       'description': 'background-position: left;'
     },
     {
       'name': 'xl:bg-left-bottom',
       'description': 'background-position: left bottom;'
     },
     {
       'name': 'xl:bg-left-top',
       'description': 'background-position: left top;'
     },
     {
       'name': 'xl:bg-right',
       'description': 'background-position: right;'
     },
     {
       'name': 'xl:bg-right-bottom',
       'description': 'background-position: right bottom;'
     },
     {
       'name': 'xl:bg-right-top',
       'description': 'background-position: right top;'
     },
     {
       'name': 'xl:bg-top',
       'description': 'background-position: top;'
     },
     {
       'name': 'xl:bg-repeat',
       'description': 'background-repeat: repeat;'
     },
     {
       'name': 'xl:bg-no-repeat',
       'description': 'background-repeat: no-repeat;'
     },
     {
       'name': 'xl:bg-repeat-x',
       'description': 'background-repeat: repeat-x;'
     },
     {
       'name': 'xl:bg-repeat-y',
       'description': 'background-repeat: repeat-y;'
     },
     {
       'name': 'xl:bg-auto',
       'description': 'background-size: auto;'
     },
     {
       'name': 'xl:bg-cover',
       'description': 'background-size: cover;'
     },
     {
       'name': 'xl:bg-contain',
       'description': 'background-size: contain;'
     },
     {
       'name': 'xl:border-transparent',
       'description': 'border-color: transparent;'
     },
     {
       'name': 'xl:border-black',
       'description': 'border-color: #22292f;'
     },
     {
       'name': 'xl:border-grey-darkest',
       'description': 'border-color: #3d4852;'
     },
     {
       'name': 'xl:border-grey-darker',
       'description': 'border-color: #606f7b;'
     },
     {
       'name': 'xl:border-grey-dark',
       'description': 'border-color: #8795a1;'
     },
     {
       'name': 'xl:border-grey',
       'description': 'border-color: #b8c2cc;'
     },
     {
       'name': 'xl:border-grey-light',
       'description': 'border-color: #dae1e7;'
     },
     {
       'name': 'xl:border-grey-lighter',
       'description': 'border-color: #f1f5f8;'
     },
     {
       'name': 'xl:border-grey-lightest',
       'description': 'border-color: #f8fafc;'
     },
     {
       'name': 'xl:border-white',
       'description': 'border-color: #fff;'
     },
     {
       'name': 'xl:border-red-darkest',
       'description': 'border-color: #3b0d0c;'
     },
     {
       'name': 'xl:border-red-darker',
       'description': 'border-color: #621b18;'
     },
     {
       'name': 'xl:border-red-dark',
       'description': 'border-color: #cc1f1a;'
     },
     {
       'name': 'xl:border-red',
       'description': 'border-color: #e3342f;'
     },
     {
       'name': 'xl:border-red-light',
       'description': 'border-color: #ef5753;'
     },
     {
       'name': 'xl:border-red-lighter',
       'description': 'border-color: #f9acaa;'
     },
     {
       'name': 'xl:border-red-lightest',
       'description': 'border-color: #fcebea;'
     },
     {
       'name': 'xl:border-orange-darkest',
       'description': 'border-color: #462a16;'
     },
     {
       'name': 'xl:border-orange-darker',
       'description': 'border-color: #613b1f;'
     },
     {
       'name': 'xl:border-orange-dark',
       'description': 'border-color: #de751f;'
     },
     {
       'name': 'xl:border-orange',
       'description': 'border-color: #f6993f;'
     },
     {
       'name': 'xl:border-orange-light',
       'description': 'border-color: #faad63;'
     },
     {
       'name': 'xl:border-orange-lighter',
       'description': 'border-color: #fcd9b6;'
     },
     {
       'name': 'xl:border-orange-lightest',
       'description': 'border-color: #fff5eb;'
     },
     {
       'name': 'xl:border-yellow-darkest',
       'description': 'border-color: #453411;'
     },
     {
       'name': 'xl:border-yellow-darker',
       'description': 'border-color: #684f1d;'
     },
     {
       'name': 'xl:border-yellow-dark',
       'description': 'border-color: #f2d024;'
     },
     {
       'name': 'xl:border-yellow',
       'description': 'border-color: #ffed4a;'
     },
     {
       'name': 'xl:border-yellow-light',
       'description': 'border-color: #fff382;'
     },
     {
       'name': 'xl:border-yellow-lighter',
       'description': 'border-color: #fff9c2;'
     },
     {
       'name': 'xl:border-yellow-lightest',
       'description': 'border-color: #fcfbeb;'
     },
     {
       'name': 'xl:border-green-darkest',
       'description': 'border-color: #0f2f21;'
     },
     {
       'name': 'xl:border-green-darker',
       'description': 'border-color: #1a4731;'
     },
     {
       'name': 'xl:border-green-dark',
       'description': 'border-color: #1f9d55;'
     },
     {
       'name': 'xl:border-green',
       'description': 'border-color: #38c172;'
     },
     {
       'name': 'xl:border-green-light',
       'description': 'border-color: #51d88a;'
     },
     {
       'name': 'xl:border-green-lighter',
       'description': 'border-color: #a2f5bf;'
     },
     {
       'name': 'xl:border-green-lightest',
       'description': 'border-color: #e3fcec;'
     },
     {
       'name': 'xl:border-teal-darkest',
       'description': 'border-color: #0d3331;'
     },
     {
       'name': 'xl:border-teal-darker',
       'description': 'border-color: #20504f;'
     },
     {
       'name': 'xl:border-teal-dark',
       'description': 'border-color: #38a89d;'
     },
     {
       'name': 'xl:border-teal',
       'description': 'border-color: #4dc0b5;'
     },
     {
       'name': 'xl:border-teal-light',
       'description': 'border-color: #64d5ca;'
     },
     {
       'name': 'xl:border-teal-lighter',
       'description': 'border-color: #a0f0ed;'
     },
     {
       'name': 'xl:border-teal-lightest',
       'description': 'border-color: #e8fffe;'
     },
     {
       'name': 'xl:border-blue-darkest',
       'description': 'border-color: #12283a;'
     },
     {
       'name': 'xl:border-blue-darker',
       'description': 'border-color: #1c3d5a;'
     },
     {
       'name': 'xl:border-blue-dark',
       'description': 'border-color: #2779bd;'
     },
     {
       'name': 'xl:border-blue',
       'description': 'border-color: #3490dc;'
     },
     {
       'name': 'xl:border-blue-light',
       'description': 'border-color: #6cb2eb;'
     },
     {
       'name': 'xl:border-blue-lighter',
       'description': 'border-color: #bcdefa;'
     },
     {
       'name': 'xl:border-blue-lightest',
       'description': 'border-color: #eff8ff;'
     },
     {
       'name': 'xl:border-indigo-darkest',
       'description': 'border-color: #191e38;'
     },
     {
       'name': 'xl:border-indigo-darker',
       'description': 'border-color: #2f365f;'
     },
     {
       'name': 'xl:border-indigo-dark',
       'description': 'border-color: #5661b3;'
     },
     {
       'name': 'xl:border-indigo',
       'description': 'border-color: #6574cd;'
     },
     {
       'name': 'xl:border-indigo-light',
       'description': 'border-color: #7886d7;'
     },
     {
       'name': 'xl:border-indigo-lighter',
       'description': 'border-color: #b2b7ff;'
     },
     {
       'name': 'xl:border-indigo-lightest',
       'description': 'border-color: #e6e8ff;'
     },
     {
       'name': 'xl:border-purple-darkest',
       'description': 'border-color: #21183c;'
     },
     {
       'name': 'xl:border-purple-darker',
       'description': 'border-color: #382b5f;'
     },
     {
       'name': 'xl:border-purple-dark',
       'description': 'border-color: #794acf;'
     },
     {
       'name': 'xl:border-purple',
       'description': 'border-color: #9561e2;'
     },
     {
       'name': 'xl:border-purple-light',
       'description': 'border-color: #a779e9;'
     },
     {
       'name': 'xl:border-purple-lighter',
       'description': 'border-color: #d6bbfc;'
     },
     {
       'name': 'xl:border-purple-lightest',
       'description': 'border-color: #f3ebff;'
     },
     {
       'name': 'xl:border-pink-darkest',
       'description': 'border-color: #451225;'
     },
     {
       'name': 'xl:border-pink-darker',
       'description': 'border-color: #6f213f;'
     },
     {
       'name': 'xl:border-pink-dark',
       'description': 'border-color: #eb5286;'
     },
     {
       'name': 'xl:border-pink',
       'description': 'border-color: #f66d9b;'
     },
     {
       'name': 'xl:border-pink-light',
       'description': 'border-color: #fa7ea8;'
     },
     {
       'name': 'xl:border-pink-lighter',
       'description': 'border-color: #ffbbca;'
     },
     {
       'name': 'xl:border-pink-lightest',
       'description': 'border-color: #ffebef;'
     },
     {
       'name': 'xl:hover:border-transparent',
       'description': ':hover { border-color: transparent; }'
     },
     {
       'name': 'xl:hover:border-black',
       'description': ':hover { border-color: #22292f; }'
     },
     {
       'name': 'xl:hover:border-grey-darkest',
       'description': ':hover { border-color: #3d4852; }'
     },
     {
       'name': 'xl:hover:border-grey-darker',
       'description': ':hover { border-color: #606f7b; }'
     },
     {
       'name': 'xl:hover:border-grey-dark',
       'description': ':hover { border-color: #8795a1; }'
     },
     {
       'name': 'xl:hover:border-grey',
       'description': ':hover { border-color: #b8c2cc; }'
     },
     {
       'name': 'xl:hover:border-grey-light',
       'description': ':hover { border-color: #dae1e7; }'
     },
     {
       'name': 'xl:hover:border-grey-lighter',
       'description': ':hover { border-color: #f1f5f8; }'
     },
     {
       'name': 'xl:hover:border-grey-lightest',
       'description': ':hover { border-color: #f8fafc; }'
     },
     {
       'name': 'xl:hover:border-white',
       'description': ':hover { border-color: #fff; }'
     },
     {
       'name': 'xl:hover:border-red-darkest',
       'description': ':hover { border-color: #3b0d0c; }'
     },
     {
       'name': 'xl:hover:border-red-darker',
       'description': ':hover { border-color: #621b18; }'
     },
     {
       'name': 'xl:hover:border-red-dark',
       'description': ':hover { border-color: #cc1f1a; }'
     },
     {
       'name': 'xl:hover:border-red',
       'description': ':hover { border-color: #e3342f; }'
     },
     {
       'name': 'xl:hover:border-red-light',
       'description': ':hover { border-color: #ef5753; }'
     },
     {
       'name': 'xl:hover:border-red-lighter',
       'description': ':hover { border-color: #f9acaa; }'
     },
     {
       'name': 'xl:hover:border-red-lightest',
       'description': ':hover { border-color: #fcebea; }'
     },
     {
       'name': 'xl:hover:border-orange-darkest',
       'description': ':hover { border-color: #462a16; }'
     },
     {
       'name': 'xl:hover:border-orange-darker',
       'description': ':hover { border-color: #613b1f; }'
     },
     {
       'name': 'xl:hover:border-orange-dark',
       'description': ':hover { border-color: #de751f; }'
     },
     {
       'name': 'xl:hover:border-orange',
       'description': ':hover { border-color: #f6993f; }'
     },
     {
       'name': 'xl:hover:border-orange-light',
       'description': ':hover { border-color: #faad63; }'
     },
     {
       'name': 'xl:hover:border-orange-lighter',
       'description': ':hover { border-color: #fcd9b6; }'
     },
     {
       'name': 'xl:hover:border-orange-lightest',
       'description': ':hover { border-color: #fff5eb; }'
     },
     {
       'name': 'xl:hover:border-yellow-darkest',
       'description': ':hover { border-color: #453411; }'
     },
     {
       'name': 'xl:hover:border-yellow-darker',
       'description': ':hover { border-color: #684f1d; }'
     },
     {
       'name': 'xl:hover:border-yellow-dark',
       'description': ':hover { border-color: #f2d024; }'
     },
     {
       'name': 'xl:hover:border-yellow',
       'description': ':hover { border-color: #ffed4a; }'
     },
     {
       'name': 'xl:hover:border-yellow-light',
       'description': ':hover { border-color: #fff382; }'
     },
     {
       'name': 'xl:hover:border-yellow-lighter',
       'description': ':hover { border-color: #fff9c2; }'
     },
     {
       'name': 'xl:hover:border-yellow-lightest',
       'description': ':hover { border-color: #fcfbeb; }'
     },
     {
       'name': 'xl:hover:border-green-darkest',
       'description': ':hover { border-color: #0f2f21; }'
     },
     {
       'name': 'xl:hover:border-green-darker',
       'description': ':hover { border-color: #1a4731; }'
     },
     {
       'name': 'xl:hover:border-green-dark',
       'description': ':hover { border-color: #1f9d55; }'
     },
     {
       'name': 'xl:hover:border-green',
       'description': ':hover { border-color: #38c172; }'
     },
     {
       'name': 'xl:hover:border-green-light',
       'description': ':hover { border-color: #51d88a; }'
     },
     {
       'name': 'xl:hover:border-green-lighter',
       'description': ':hover { border-color: #a2f5bf; }'
     },
     {
       'name': 'xl:hover:border-green-lightest',
       'description': ':hover { border-color: #e3fcec; }'
     },
     {
       'name': 'xl:hover:border-teal-darkest',
       'description': ':hover { border-color: #0d3331; }'
     },
     {
       'name': 'xl:hover:border-teal-darker',
       'description': ':hover { border-color: #20504f; }'
     },
     {
       'name': 'xl:hover:border-teal-dark',
       'description': ':hover { border-color: #38a89d; }'
     },
     {
       'name': 'xl:hover:border-teal',
       'description': ':hover { border-color: #4dc0b5; }'
     },
     {
       'name': 'xl:hover:border-teal-light',
       'description': ':hover { border-color: #64d5ca; }'
     },
     {
       'name': 'xl:hover:border-teal-lighter',
       'description': ':hover { border-color: #a0f0ed; }'
     },
     {
       'name': 'xl:hover:border-teal-lightest',
       'description': ':hover { border-color: #e8fffe; }'
     },
     {
       'name': 'xl:hover:border-blue-darkest',
       'description': ':hover { border-color: #12283a; }'
     },
     {
       'name': 'xl:hover:border-blue-darker',
       'description': ':hover { border-color: #1c3d5a; }'
     },
     {
       'name': 'xl:hover:border-blue-dark',
       'description': ':hover { border-color: #2779bd; }'
     },
     {
       'name': 'xl:hover:border-blue',
       'description': ':hover { border-color: #3490dc; }'
     },
     {
       'name': 'xl:hover:border-blue-light',
       'description': ':hover { border-color: #6cb2eb; }'
     },
     {
       'name': 'xl:hover:border-blue-lighter',
       'description': ':hover { border-color: #bcdefa; }'
     },
     {
       'name': 'xl:hover:border-blue-lightest',
       'description': ':hover { border-color: #eff8ff; }'
     },
     {
       'name': 'xl:hover:border-indigo-darkest',
       'description': ':hover { border-color: #191e38; }'
     },
     {
       'name': 'xl:hover:border-indigo-darker',
       'description': ':hover { border-color: #2f365f; }'
     },
     {
       'name': 'xl:hover:border-indigo-dark',
       'description': ':hover { border-color: #5661b3; }'
     },
     {
       'name': 'xl:hover:border-indigo',
       'description': ':hover { border-color: #6574cd; }'
     },
     {
       'name': 'xl:hover:border-indigo-light',
       'description': ':hover { border-color: #7886d7; }'
     },
     {
       'name': 'xl:hover:border-indigo-lighter',
       'description': ':hover { border-color: #b2b7ff; }'
     },
     {
       'name': 'xl:hover:border-indigo-lightest',
       'description': ':hover { border-color: #e6e8ff; }'
     },
     {
       'name': 'xl:hover:border-purple-darkest',
       'description': ':hover { border-color: #21183c; }'
     },
     {
       'name': 'xl:hover:border-purple-darker',
       'description': ':hover { border-color: #382b5f; }'
     },
     {
       'name': 'xl:hover:border-purple-dark',
       'description': ':hover { border-color: #794acf; }'
     },
     {
       'name': 'xl:hover:border-purple',
       'description': ':hover { border-color: #9561e2; }'
     },
     {
       'name': 'xl:hover:border-purple-light',
       'description': ':hover { border-color: #a779e9; }'
     },
     {
       'name': 'xl:hover:border-purple-lighter',
       'description': ':hover { border-color: #d6bbfc; }'
     },
     {
       'name': 'xl:hover:border-purple-lightest',
       'description': ':hover { border-color: #f3ebff; }'
     },
     {
       'name': 'xl:hover:border-pink-darkest',
       'description': ':hover { border-color: #451225; }'
     },
     {
       'name': 'xl:hover:border-pink-darker',
       'description': ':hover { border-color: #6f213f; }'
     },
     {
       'name': 'xl:hover:border-pink-dark',
       'description': ':hover { border-color: #eb5286; }'
     },
     {
       'name': 'xl:hover:border-pink',
       'description': ':hover { border-color: #f66d9b; }'
     },
     {
       'name': 'xl:hover:border-pink-light',
       'description': ':hover { border-color: #fa7ea8; }'
     },
     {
       'name': 'xl:hover:border-pink-lighter',
       'description': ':hover { border-color: #ffbbca; }'
     },
     {
       'name': 'xl:hover:border-pink-lightest',
       'description': ':hover { border-color: #ffebef; }'
     },
     {
       'name': 'xl:focus:border-transparent',
       'description': ':focus { border-color: transparent; }'
     },
     {
       'name': 'xl:focus:border-black',
       'description': ':focus { border-color: #22292f; }'
     },
     {
       'name': 'xl:focus:border-grey-darkest',
       'description': ':focus { border-color: #3d4852; }'
     },
     {
       'name': 'xl:focus:border-grey-darker',
       'description': ':focus { border-color: #606f7b; }'
     },
     {
       'name': 'xl:focus:border-grey-dark',
       'description': ':focus { border-color: #8795a1; }'
     },
     {
       'name': 'xl:focus:border-grey',
       'description': ':focus { border-color: #b8c2cc; }'
     },
     {
       'name': 'xl:focus:border-grey-light',
       'description': ':focus { border-color: #dae1e7; }'
     },
     {
       'name': 'xl:focus:border-grey-lighter',
       'description': ':focus { border-color: #f1f5f8; }'
     },
     {
       'name': 'xl:focus:border-grey-lightest',
       'description': ':focus { border-color: #f8fafc; }'
     },
     {
       'name': 'xl:focus:border-white',
       'description': ':focus { border-color: #fff; }'
     },
     {
       'name': 'xl:focus:border-red-darkest',
       'description': ':focus { border-color: #3b0d0c; }'
     },
     {
       'name': 'xl:focus:border-red-darker',
       'description': ':focus { border-color: #621b18; }'
     },
     {
       'name': 'xl:focus:border-red-dark',
       'description': ':focus { border-color: #cc1f1a; }'
     },
     {
       'name': 'xl:focus:border-red',
       'description': ':focus { border-color: #e3342f; }'
     },
     {
       'name': 'xl:focus:border-red-light',
       'description': ':focus { border-color: #ef5753; }'
     },
     {
       'name': 'xl:focus:border-red-lighter',
       'description': ':focus { border-color: #f9acaa; }'
     },
     {
       'name': 'xl:focus:border-red-lightest',
       'description': ':focus { border-color: #fcebea; }'
     },
     {
       'name': 'xl:focus:border-orange-darkest',
       'description': ':focus { border-color: #462a16; }'
     },
     {
       'name': 'xl:focus:border-orange-darker',
       'description': ':focus { border-color: #613b1f; }'
     },
     {
       'name': 'xl:focus:border-orange-dark',
       'description': ':focus { border-color: #de751f; }'
     },
     {
       'name': 'xl:focus:border-orange',
       'description': ':focus { border-color: #f6993f; }'
     },
     {
       'name': 'xl:focus:border-orange-light',
       'description': ':focus { border-color: #faad63; }'
     },
     {
       'name': 'xl:focus:border-orange-lighter',
       'description': ':focus { border-color: #fcd9b6; }'
     },
     {
       'name': 'xl:focus:border-orange-lightest',
       'description': ':focus { border-color: #fff5eb; }'
     },
     {
       'name': 'xl:focus:border-yellow-darkest',
       'description': ':focus { border-color: #453411; }'
     },
     {
       'name': 'xl:focus:border-yellow-darker',
       'description': ':focus { border-color: #684f1d; }'
     },
     {
       'name': 'xl:focus:border-yellow-dark',
       'description': ':focus { border-color: #f2d024; }'
     },
     {
       'name': 'xl:focus:border-yellow',
       'description': ':focus { border-color: #ffed4a; }'
     },
     {
       'name': 'xl:focus:border-yellow-light',
       'description': ':focus { border-color: #fff382; }'
     },
     {
       'name': 'xl:focus:border-yellow-lighter',
       'description': ':focus { border-color: #fff9c2; }'
     },
     {
       'name': 'xl:focus:border-yellow-lightest',
       'description': ':focus { border-color: #fcfbeb; }'
     },
     {
       'name': 'xl:focus:border-green-darkest',
       'description': ':focus { border-color: #0f2f21; }'
     },
     {
       'name': 'xl:focus:border-green-darker',
       'description': ':focus { border-color: #1a4731; }'
     },
     {
       'name': 'xl:focus:border-green-dark',
       'description': ':focus { border-color: #1f9d55; }'
     },
     {
       'name': 'xl:focus:border-green',
       'description': ':focus { border-color: #38c172; }'
     },
     {
       'name': 'xl:focus:border-green-light',
       'description': ':focus { border-color: #51d88a; }'
     },
     {
       'name': 'xl:focus:border-green-lighter',
       'description': ':focus { border-color: #a2f5bf; }'
     },
     {
       'name': 'xl:focus:border-green-lightest',
       'description': ':focus { border-color: #e3fcec; }'
     },
     {
       'name': 'xl:focus:border-teal-darkest',
       'description': ':focus { border-color: #0d3331; }'
     },
     {
       'name': 'xl:focus:border-teal-darker',
       'description': ':focus { border-color: #20504f; }'
     },
     {
       'name': 'xl:focus:border-teal-dark',
       'description': ':focus { border-color: #38a89d; }'
     },
     {
       'name': 'xl:focus:border-teal',
       'description': ':focus { border-color: #4dc0b5; }'
     },
     {
       'name': 'xl:focus:border-teal-light',
       'description': ':focus { border-color: #64d5ca; }'
     },
     {
       'name': 'xl:focus:border-teal-lighter',
       'description': ':focus { border-color: #a0f0ed; }'
     },
     {
       'name': 'xl:focus:border-teal-lightest',
       'description': ':focus { border-color: #e8fffe; }'
     },
     {
       'name': 'xl:focus:border-blue-darkest',
       'description': ':focus { border-color: #12283a; }'
     },
     {
       'name': 'xl:focus:border-blue-darker',
       'description': ':focus { border-color: #1c3d5a; }'
     },
     {
       'name': 'xl:focus:border-blue-dark',
       'description': ':focus { border-color: #2779bd; }'
     },
     {
       'name': 'xl:focus:border-blue',
       'description': ':focus { border-color: #3490dc; }'
     },
     {
       'name': 'xl:focus:border-blue-light',
       'description': ':focus { border-color: #6cb2eb; }'
     },
     {
       'name': 'xl:focus:border-blue-lighter',
       'description': ':focus { border-color: #bcdefa; }'
     },
     {
       'name': 'xl:focus:border-blue-lightest',
       'description': ':focus { border-color: #eff8ff; }'
     },
     {
       'name': 'xl:focus:border-indigo-darkest',
       'description': ':focus { border-color: #191e38; }'
     },
     {
       'name': 'xl:focus:border-indigo-darker',
       'description': ':focus { border-color: #2f365f; }'
     },
     {
       'name': 'xl:focus:border-indigo-dark',
       'description': ':focus { border-color: #5661b3; }'
     },
     {
       'name': 'xl:focus:border-indigo',
       'description': ':focus { border-color: #6574cd; }'
     },
     {
       'name': 'xl:focus:border-indigo-light',
       'description': ':focus { border-color: #7886d7; }'
     },
     {
       'name': 'xl:focus:border-indigo-lighter',
       'description': ':focus { border-color: #b2b7ff; }'
     },
     {
       'name': 'xl:focus:border-indigo-lightest',
       'description': ':focus { border-color: #e6e8ff; }'
     },
     {
       'name': 'xl:focus:border-purple-darkest',
       'description': ':focus { border-color: #21183c; }'
     },
     {
       'name': 'xl:focus:border-purple-darker',
       'description': ':focus { border-color: #382b5f; }'
     },
     {
       'name': 'xl:focus:border-purple-dark',
       'description': ':focus { border-color: #794acf; }'
     },
     {
       'name': 'xl:focus:border-purple',
       'description': ':focus { border-color: #9561e2; }'
     },
     {
       'name': 'xl:focus:border-purple-light',
       'description': ':focus { border-color: #a779e9; }'
     },
     {
       'name': 'xl:focus:border-purple-lighter',
       'description': ':focus { border-color: #d6bbfc; }'
     },
     {
       'name': 'xl:focus:border-purple-lightest',
       'description': ':focus { border-color: #f3ebff; }'
     },
     {
       'name': 'xl:focus:border-pink-darkest',
       'description': ':focus { border-color: #451225; }'
     },
     {
       'name': 'xl:focus:border-pink-darker',
       'description': ':focus { border-color: #6f213f; }'
     },
     {
       'name': 'xl:focus:border-pink-dark',
       'description': ':focus { border-color: #eb5286; }'
     },
     {
       'name': 'xl:focus:border-pink',
       'description': ':focus { border-color: #f66d9b; }'
     },
     {
       'name': 'xl:focus:border-pink-light',
       'description': ':focus { border-color: #fa7ea8; }'
     },
     {
       'name': 'xl:focus:border-pink-lighter',
       'description': ':focus { border-color: #ffbbca; }'
     },
     {
       'name': 'xl:focus:border-pink-lightest',
       'description': ':focus { border-color: #ffebef; }'
     },
     {
       'name': 'xl:rounded-none',
       'description': 'border-radius: 0;'
     },
     {
       'name': 'xl:rounded-sm',
       'description': 'border-radius: .125rem;'
     },
     {
       'name': 'xl:rounded',
       'description': 'border-radius: .25rem;'
     },
     {
       'name': 'xl:rounded-lg',
       'description': 'border-radius: .5rem;'
     },
     {
       'name': 'xl:rounded-full',
       'description': 'border-radius: 9999px;'
     },
     {
       'name': 'xl:rounded-t-none',
       'description': 'border-top-left-radius: 0; border-top-right-radius: 0;'
     },
     {
       'name': 'xl:rounded-r-none',
       'description': 'border-top-right-radius: 0; border-bottom-right-radius: 0;'
     },
     {
       'name': 'xl:rounded-b-none',
       'description': 'border-bottom-right-radius: 0; border-bottom-left-radius: 0;'
     },
     {
       'name': 'xl:rounded-l-none',
       'description': 'border-top-left-radius: 0; border-bottom-left-radius: 0;'
     },
     {
       'name': 'xl:rounded-t-sm',
       'description': 'border-top-left-radius: .125rem; border-top-right-radius: .125rem;'
     },
     {
       'name': 'xl:rounded-r-sm',
       'description': 'border-top-right-radius: .125rem; border-bottom-right-radius: .125rem;'
     },
     {
       'name': 'xl:rounded-b-sm',
       'description': 'border-bottom-right-radius: .125rem; border-bottom-left-radius: .125rem;'
     },
     {
       'name': 'xl:rounded-l-sm',
       'description': 'border-top-left-radius: .125rem; border-bottom-left-radius: .125rem;'
     },
     {
       'name': 'xl:rounded-t',
       'description': 'border-top-left-radius: .25rem; border-top-right-radius: .25rem;'
     },
     {
       'name': 'xl:rounded-r',
       'description': 'border-top-right-radius: .25rem; border-bottom-right-radius: .25rem;'
     },
     {
       'name': 'xl:rounded-b',
       'description': 'border-bottom-right-radius: .25rem; border-bottom-left-radius: .25rem;'
     },
     {
       'name': 'xl:rounded-l',
       'description': 'border-top-left-radius: .25rem; border-bottom-left-radius: .25rem;'
     },
     {
       'name': 'xl:rounded-t-lg',
       'description': 'border-top-left-radius: .5rem; border-top-right-radius: .5rem;'
     },
     {
       'name': 'xl:rounded-r-lg',
       'description': 'border-top-right-radius: .5rem; border-bottom-right-radius: .5rem;'
     },
     {
       'name': 'xl:rounded-b-lg',
       'description': 'border-bottom-right-radius: .5rem; border-bottom-left-radius: .5rem;'
     },
     {
       'name': 'xl:rounded-l-lg',
       'description': 'border-top-left-radius: .5rem; border-bottom-left-radius: .5rem;'
     },
     {
       'name': 'xl:rounded-t-full',
       'description': 'border-top-left-radius: 9999px; border-top-right-radius: 9999px;'
     },
     {
       'name': 'xl:rounded-r-full',
       'description': 'border-top-right-radius: 9999px; border-bottom-right-radius: 9999px;'
     },
     {
       'name': 'xl:rounded-b-full',
       'description': 'border-bottom-right-radius: 9999px; border-bottom-left-radius: 9999px;'
     },
     {
       'name': 'xl:rounded-l-full',
       'description': 'border-top-left-radius: 9999px; border-bottom-left-radius: 9999px;'
     },
     {
       'name': 'xl:rounded-tl-none',
       'description': 'border-top-left-radius: 0;'
     },
     {
       'name': 'xl:rounded-tr-none',
       'description': 'border-top-right-radius: 0;'
     },
     {
       'name': 'xl:rounded-br-none',
       'description': 'border-bottom-right-radius: 0;'
     },
     {
       'name': 'xl:rounded-bl-none',
       'description': 'border-bottom-left-radius: 0;'
     },
     {
       'name': 'xl:rounded-tl-sm',
       'description': 'border-top-left-radius: .125rem;'
     },
     {
       'name': 'xl:rounded-tr-sm',
       'description': 'border-top-right-radius: .125rem;'
     },
     {
       'name': 'xl:rounded-br-sm',
       'description': 'border-bottom-right-radius: .125rem;'
     },
     {
       'name': 'xl:rounded-bl-sm',
       'description': 'border-bottom-left-radius: .125rem;'
     },
     {
       'name': 'xl:rounded-tl',
       'description': 'border-top-left-radius: .25rem;'
     },
     {
       'name': 'xl:rounded-tr',
       'description': 'border-top-right-radius: .25rem;'
     },
     {
       'name': 'xl:rounded-br',
       'description': 'border-bottom-right-radius: .25rem;'
     },
     {
       'name': 'xl:rounded-bl',
       'description': 'border-bottom-left-radius: .25rem;'
     },
     {
       'name': 'xl:rounded-tl-lg',
       'description': 'border-top-left-radius: .5rem;'
     },
     {
       'name': 'xl:rounded-tr-lg',
       'description': 'border-top-right-radius: .5rem;'
     },
     {
       'name': 'xl:rounded-br-lg',
       'description': 'border-bottom-right-radius: .5rem;'
     },
     {
       'name': 'xl:rounded-bl-lg',
       'description': 'border-bottom-left-radius: .5rem;'
     },
     {
       'name': 'xl:rounded-tl-full',
       'description': 'border-top-left-radius: 9999px;'
     },
     {
       'name': 'xl:rounded-tr-full',
       'description': 'border-top-right-radius: 9999px;'
     },
     {
       'name': 'xl:rounded-br-full',
       'description': 'border-bottom-right-radius: 9999px;'
     },
     {
       'name': 'xl:rounded-bl-full',
       'description': 'border-bottom-left-radius: 9999px;'
     },
     {
       'name': 'xl:border-solid',
       'description': 'border-style: solid;'
     },
     {
       'name': 'xl:border-dashed',
       'description': 'border-style: dashed;'
     },
     {
       'name': 'xl:border-dotted',
       'description': 'border-style: dotted;'
     },
     {
       'name': 'xl:border-none',
       'description': 'border-style: none;'
     },
     {
       'name': 'xl:border-0',
       'description': 'border-width: 0;'
     },
     {
       'name': 'xl:border-2',
       'description': 'border-width: 2px;'
     },
     {
       'name': 'xl:border-4',
       'description': 'border-width: 4px;'
     },
     {
       'name': 'xl:border-8',
       'description': 'border-width: 8px;'
     },
     {
       'name': 'xl:border',
       'description': 'border-width: 1px;'
     },
     {
       'name': 'xl:border-t-0',
       'description': 'border-top-width: 0;'
     },
     {
       'name': 'xl:border-r-0',
       'description': 'border-right-width: 0;'
     },
     {
       'name': 'xl:border-b-0',
       'description': 'border-bottom-width: 0;'
     },
     {
       'name': 'xl:border-l-0',
       'description': 'border-left-width: 0;'
     },
     {
       'name': 'xl:border-t-2',
       'description': 'border-top-width: 2px;'
     },
     {
       'name': 'xl:border-r-2',
       'description': 'border-right-width: 2px;'
     },
     {
       'name': 'xl:border-b-2',
       'description': 'border-bottom-width: 2px;'
     },
     {
       'name': 'xl:border-l-2',
       'description': 'border-left-width: 2px;'
     },
     {
       'name': 'xl:border-t-4',
       'description': 'border-top-width: 4px;'
     },
     {
       'name': 'xl:border-r-4',
       'description': 'border-right-width: 4px;'
     },
     {
       'name': 'xl:border-b-4',
       'description': 'border-bottom-width: 4px;'
     },
     {
       'name': 'xl:border-l-4',
       'description': 'border-left-width: 4px;'
     },
     {
       'name': 'xl:border-t-8',
       'description': 'border-top-width: 8px;'
     },
     {
       'name': 'xl:border-r-8',
       'description': 'border-right-width: 8px;'
     },
     {
       'name': 'xl:border-b-8',
       'description': 'border-bottom-width: 8px;'
     },
     {
       'name': 'xl:border-l-8',
       'description': 'border-left-width: 8px;'
     },
     {
       'name': 'xl:border-t',
       'description': 'border-top-width: 1px;'
     },
     {
       'name': 'xl:border-r',
       'description': 'border-right-width: 1px;'
     },
     {
       'name': 'xl:border-b',
       'description': 'border-bottom-width: 1px;'
     },
     {
       'name': 'xl:border-l',
       'description': 'border-left-width: 1px;'
     },
     {
       'name': 'xl:cursor-auto',
       'description': 'cursor: auto;'
     },
     {
       'name': 'xl:cursor-default',
       'description': 'cursor: default;'
     },
     {
       'name': 'xl:cursor-pointer',
       'description': 'cursor: pointer;'
     },
     {
       'name': 'xl:cursor-wait',
       'description': 'cursor: wait;'
     },
     {
       'name': 'xl:cursor-move',
       'description': 'cursor: move;'
     },
     {
       'name': 'xl:cursor-not-allowed',
       'description': 'cursor: not-allowed;'
     },
     {
       'name': 'xl:block',
       'description': 'display: block;'
     },
     {
       'name': 'xl:inline-block',
       'description': 'display: inline-block;'
     },
     {
       'name': 'xl:inline',
       'description': 'display: inline;'
     },
     {
       'name': 'xl:table',
       'description': 'display: table;'
     },
     {
       'name': 'xl:table-row',
       'description': 'display: table-row;'
     },
     {
       'name': 'xl:table-cell',
       'description': 'display: table-cell;'
     },
     {
       'name': 'xl:hidden',
       'description': 'display: none;'
     },
     {
       'name': 'xl:flex',
       'description': 'display: flex;'
     },
     {
       'name': 'xl:inline-flex',
       'description': 'display: inline-flex;'
     },
     {
       'name': 'xl:flex-row',
       'description': 'flex-direction: row;'
     },
     {
       'name': 'xl:flex-row-reverse',
       'description': 'flex-direction: row-reverse;'
     },
     {
       'name': 'xl:flex-col',
       'description': 'flex-direction: column;'
     },
     {
       'name': 'xl:flex-col-reverse',
       'description': 'flex-direction: column-reverse;'
     },
     {
       'name': 'xl:flex-wrap',
       'description': 'flex-wrap: wrap;'
     },
     {
       'name': 'xl:flex-wrap-reverse',
       'description': 'flex-wrap: wrap-reverse;'
     },
     {
       'name': 'xl:flex-no-wrap',
       'description': 'flex-wrap: nowrap;'
     },
     {
       'name': 'xl:items-start',
       'description': 'align-items: flex-start;'
     },
     {
       'name': 'xl:items-end',
       'description': 'align-items: flex-end;'
     },
     {
       'name': 'xl:items-center',
       'description': 'align-items: center;'
     },
     {
       'name': 'xl:items-baseline',
       'description': 'align-items: baseline;'
     },
     {
       'name': 'xl:items-stretch',
       'description': 'align-items: stretch;'
     },
     {
       'name': 'xl:self-auto',
       'description': 'align-self: auto;'
     },
     {
       'name': 'xl:self-start',
       'description': 'align-self: flex-start;'
     },
     {
       'name': 'xl:self-end',
       'description': 'align-self: flex-end;'
     },
     {
       'name': 'xl:self-center',
       'description': 'align-self: center;'
     },
     {
       'name': 'xl:self-stretch',
       'description': 'align-self: stretch;'
     },
     {
       'name': 'xl:justify-start',
       'description': 'justify-content: flex-start;'
     },
     {
       'name': 'xl:justify-end',
       'description': 'justify-content: flex-end;'
     },
     {
       'name': 'xl:justify-center',
       'description': 'justify-content: center;'
     },
     {
       'name': 'xl:justify-between',
       'description': 'justify-content: space-between;'
     },
     {
       'name': 'xl:justify-around',
       'description': 'justify-content: space-around;'
     },
     {
       'name': 'xl:content-center',
       'description': 'align-content: center;'
     },
     {
       'name': 'xl:content-start',
       'description': 'align-content: flex-start;'
     },
     {
       'name': 'xl:content-end',
       'description': 'align-content: flex-end;'
     },
     {
       'name': 'xl:content-between',
       'description': 'align-content: space-between;'
     },
     {
       'name': 'xl:content-around',
       'description': 'align-content: space-around;'
     },
     {
       'name': 'xl:flex-1',
       'description': 'flex: 1 1 0%;'
     },
     {
       'name': 'xl:flex-auto',
       'description': 'flex: 1 1 auto;'
     },
     {
       'name': 'xl:flex-initial',
       'description': 'flex: 0 1 auto;'
     },
     {
       'name': 'xl:flex-none',
       'description': 'flex: none;'
     },
     {
       'name': 'xl:flex-grow',
       'description': 'flex-grow: 1;'
     },
     {
       'name': 'xl:flex-shrink',
       'description': 'flex-shrink: 1;'
     },
     {
       'name': 'xl:flex-no-grow',
       'description': 'flex-grow: 0;'
     },
     {
       'name': 'xl:flex-no-shrink',
       'description': 'flex-shrink: 0;'
     },
     {
       'name': 'xl:float-right',
       'description': 'float: right;'
     },
     {
       'name': 'xl:float-left',
       'description': 'float: left;'
     },
     {
       'name': 'xl:float-none',
       'description': 'float: none;'
     },
     {
       'name': 'xl:clearfix',
       'description': ':after { content: \'\'; display: table; clear: both; }'
     },
     {
       'name': 'xl:font-sans',
       'description': 'font-family: system-ui, BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;'
     },
     {
       'name': 'xl:font-serif',
       'description': 'font-family: Constantia, Lucida Bright, Lucidabright, Lucida Serif, Lucida, DejaVu Serif, Bitstream Vera Serif, Liberation Serif, Georgia, serif;'
     },
     {
       'name': 'xl:font-mono',
       'description': 'font-family: Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace;'
     },
     {
       'name': 'xl:font-hairline',
       'description': 'font-weight: 100;'
     },
     {
       'name': 'xl:font-thin',
       'description': 'font-weight: 200;'
     },
     {
       'name': 'xl:font-light',
       'description': 'font-weight: 300;'
     },
     {
       'name': 'xl:font-normal',
       'description': 'font-weight: 400;'
     },
     {
       'name': 'xl:font-medium',
       'description': 'font-weight: 500;'
     },
     {
       'name': 'xl:font-semibold',
       'description': 'font-weight: 600;'
     },
     {
       'name': 'xl:font-bold',
       'description': 'font-weight: 700;'
     },
     {
       'name': 'xl:font-extrabold',
       'description': 'font-weight: 800;'
     },
     {
       'name': 'xl:font-black',
       'description': 'font-weight: 900;'
     },
     {
       'name': 'xl:hover:font-hairline',
       'description': ':hover { font-weight: 100; }'
     },
     {
       'name': 'xl:hover:font-thin',
       'description': ':hover { font-weight: 200; }'
     },
     {
       'name': 'xl:hover:font-light',
       'description': ':hover { font-weight: 300; }'
     },
     {
       'name': 'xl:hover:font-normal',
       'description': ':hover { font-weight: 400; }'
     },
     {
       'name': 'xl:hover:font-medium',
       'description': ':hover { font-weight: 500; }'
     },
     {
       'name': 'xl:hover:font-semibold',
       'description': ':hover { font-weight: 600; }'
     },
     {
       'name': 'xl:hover:font-bold',
       'description': ':hover { font-weight: 700; }'
     },
     {
       'name': 'xl:hover:font-extrabold',
       'description': ':hover { font-weight: 800; }'
     },
     {
       'name': 'xl:hover:font-black',
       'description': ':hover { font-weight: 900; }'
     },
     {
       'name': 'xl:focus:font-hairline',
       'description': ':focus { font-weight: 100; }'
     },
     {
       'name': 'xl:focus:font-thin',
       'description': ':focus { font-weight: 200; }'
     },
     {
       'name': 'xl:focus:font-light',
       'description': ':focus { font-weight: 300; }'
     },
     {
       'name': 'xl:focus:font-normal',
       'description': ':focus { font-weight: 400; }'
     },
     {
       'name': 'xl:focus:font-medium',
       'description': ':focus { font-weight: 500; }'
     },
     {
       'name': 'xl:focus:font-semibold',
       'description': ':focus { font-weight: 600; }'
     },
     {
       'name': 'xl:focus:font-bold',
       'description': ':focus { font-weight: 700; }'
     },
     {
       'name': 'xl:focus:font-extrabold',
       'description': ':focus { font-weight: 800; }'
     },
     {
       'name': 'xl:focus:font-black',
       'description': ':focus { font-weight: 900; }'
     },
     {
       'name': 'xl:h-1',
       'description': 'height: .25rem;'
     },
     {
       'name': 'xl:h-2',
       'description': 'height: .5rem;'
     },
     {
       'name': 'xl:h-3',
       'description': 'height: .75rem;'
     },
     {
       'name': 'xl:h-4',
       'description': 'height: 1rem;'
     },
     {
       'name': 'xl:h-5',
       'description': 'height: 1.25rem;'
     },
     {
       'name': 'xl:h-6',
       'description': 'height: 1.5rem;'
     },
     {
       'name': 'xl:h-8',
       'description': 'height: 2rem;'
     },
     {
       'name': 'xl:h-10',
       'description': 'height: 2.5rem;'
     },
     {
       'name': 'xl:h-12',
       'description': 'height: 3rem;'
     },
     {
       'name': 'xl:h-16',
       'description': 'height: 4rem;'
     },
     {
       'name': 'xl:h-24',
       'description': 'height: 6rem;'
     },
     {
       'name': 'xl:h-32',
       'description': 'height: 8rem;'
     },
     {
       'name': 'xl:h-48',
       'description': 'height: 12rem;'
     },
     {
       'name': 'xl:h-64',
       'description': 'height: 16rem;'
     },
     {
       'name': 'xl:h-auto',
       'description': 'height: auto;'
     },
     {
       'name': 'xl:h-px',
       'description': 'height: 1px;'
     },
     {
       'name': 'xl:h-full',
       'description': 'height: 100%;'
     },
     {
       'name': 'xl:h-screen',
       'description': 'height: 100vh;'
     },
     {
       'name': 'xl:leading-none',
       'description': 'line-height: 1;'
     },
     {
       'name': 'xl:leading-tight',
       'description': 'line-height: 1.25;'
     },
     {
       'name': 'xl:leading-normal',
       'description': 'line-height: 1.5;'
     },
     {
       'name': 'xl:leading-loose',
       'description': 'line-height: 2;'
     },
     {
       'name': 'xl:m-0',
       'description': 'margin: 0;'
     },
     {
       'name': 'xl:m-1',
       'description': 'margin: .25rem;'
     },
     {
       'name': 'xl:m-2',
       'description': 'margin: .5rem;'
     },
     {
       'name': 'xl:m-3',
       'description': 'margin: .75rem;'
     },
     {
       'name': 'xl:m-4',
       'description': 'margin: 1rem;'
     },
     {
       'name': 'xl:m-5',
       'description': 'margin: 1.25rem;'
     },
     {
       'name': 'xl:m-6',
       'description': 'margin: 1.5rem;'
     },
     {
       'name': 'xl:m-8',
       'description': 'margin: 2rem;'
     },
     {
       'name': 'xl:m-10',
       'description': 'margin: 2.5rem;'
     },
     {
       'name': 'xl:m-12',
       'description': 'margin: 3rem;'
     },
     {
       'name': 'xl:m-16',
       'description': 'margin: 4rem;'
     },
     {
       'name': 'xl:m-20',
       'description': 'margin: 5rem;'
     },
     {
       'name': 'xl:m-24',
       'description': 'margin: 6rem;'
     },
     {
       'name': 'xl:m-32',
       'description': 'margin: 8rem;'
     },
     {
       'name': 'xl:m-auto',
       'description': 'margin: auto;'
     },
     {
       'name': 'xl:m-px',
       'description': 'margin: 1px;'
     },
     {
       'name': 'xl:my-0',
       'description': 'margin-top: 0; margin-bottom: 0;'
     },
     {
       'name': 'xl:mx-0',
       'description': 'margin-left: 0; margin-right: 0;'
     },
     {
       'name': 'xl:my-1',
       'description': 'margin-top: .25rem; margin-bottom: .25rem;'
     },
     {
       'name': 'xl:mx-1',
       'description': 'margin-left: .25rem; margin-right: .25rem;'
     },
     {
       'name': 'xl:my-2',
       'description': 'margin-top: .5rem; margin-bottom: .5rem;'
     },
     {
       'name': 'xl:mx-2',
       'description': 'margin-left: .5rem; margin-right: .5rem;'
     },
     {
       'name': 'xl:my-3',
       'description': 'margin-top: .75rem; margin-bottom: .75rem;'
     },
     {
       'name': 'xl:mx-3',
       'description': 'margin-left: .75rem; margin-right: .75rem;'
     },
     {
       'name': 'xl:my-4',
       'description': 'margin-top: 1rem; margin-bottom: 1rem;'
     },
     {
       'name': 'xl:mx-4',
       'description': 'margin-left: 1rem; margin-right: 1rem;'
     },
     {
       'name': 'xl:my-5',
       'description': 'margin-top: 1.25rem; margin-bottom: 1.25rem;'
     },
     {
       'name': 'xl:mx-5',
       'description': 'margin-left: 1.25rem; margin-right: 1.25rem;'
     },
     {
       'name': 'xl:my-6',
       'description': 'margin-top: 1.5rem; margin-bottom: 1.5rem;'
     },
     {
       'name': 'xl:mx-6',
       'description': 'margin-left: 1.5rem; margin-right: 1.5rem;'
     },
     {
       'name': 'xl:my-8',
       'description': 'margin-top: 2rem; margin-bottom: 2rem;'
     },
     {
       'name': 'xl:mx-8',
       'description': 'margin-left: 2rem; margin-right: 2rem;'
     },
     {
       'name': 'xl:my-10',
       'description': 'margin-top: 2.5rem; margin-bottom: 2.5rem;'
     },
     {
       'name': 'xl:mx-10',
       'description': 'margin-left: 2.5rem; margin-right: 2.5rem;'
     },
     {
       'name': 'xl:my-12',
       'description': 'margin-top: 3rem; margin-bottom: 3rem;'
     },
     {
       'name': 'xl:mx-12',
       'description': 'margin-left: 3rem; margin-right: 3rem;'
     },
     {
       'name': 'xl:my-16',
       'description': 'margin-top: 4rem; margin-bottom: 4rem;'
     },
     {
       'name': 'xl:mx-16',
       'description': 'margin-left: 4rem; margin-right: 4rem;'
     },
     {
       'name': 'xl:my-20',
       'description': 'margin-top: 5rem; margin-bottom: 5rem;'
     },
     {
       'name': 'xl:mx-20',
       'description': 'margin-left: 5rem; margin-right: 5rem;'
     },
     {
       'name': 'xl:my-24',
       'description': 'margin-top: 6rem; margin-bottom: 6rem;'
     },
     {
       'name': 'xl:mx-24',
       'description': 'margin-left: 6rem; margin-right: 6rem;'
     },
     {
       'name': 'xl:my-32',
       'description': 'margin-top: 8rem; margin-bottom: 8rem;'
     },
     {
       'name': 'xl:mx-32',
       'description': 'margin-left: 8rem; margin-right: 8rem;'
     },
     {
       'name': 'xl:my-auto',
       'description': 'margin-top: auto; margin-bottom: auto;'
     },
     {
       'name': 'xl:mx-auto',
       'description': 'margin-left: auto; margin-right: auto;'
     },
     {
       'name': 'xl:my-px',
       'description': 'margin-top: 1px; margin-bottom: 1px;'
     },
     {
       'name': 'xl:mx-px',
       'description': 'margin-left: 1px; margin-right: 1px;'
     },
     {
       'name': 'xl:mt-0',
       'description': 'margin-top: 0;'
     },
     {
       'name': 'xl:mr-0',
       'description': 'margin-right: 0;'
     },
     {
       'name': 'xl:mb-0',
       'description': 'margin-bottom: 0;'
     },
     {
       'name': 'xl:ml-0',
       'description': 'margin-left: 0;'
     },
     {
       'name': 'xl:mt-1',
       'description': 'margin-top: .25rem;'
     },
     {
       'name': 'xl:mr-1',
       'description': 'margin-right: .25rem;'
     },
     {
       'name': 'xl:mb-1',
       'description': 'margin-bottom: .25rem;'
     },
     {
       'name': 'xl:ml-1',
       'description': 'margin-left: .25rem;'
     },
     {
       'name': 'xl:mt-2',
       'description': 'margin-top: .5rem;'
     },
     {
       'name': 'xl:mr-2',
       'description': 'margin-right: .5rem;'
     },
     {
       'name': 'xl:mb-2',
       'description': 'margin-bottom: .5rem;'
     },
     {
       'name': 'xl:ml-2',
       'description': 'margin-left: .5rem;'
     },
     {
       'name': 'xl:mt-3',
       'description': 'margin-top: .75rem;'
     },
     {
       'name': 'xl:mr-3',
       'description': 'margin-right: .75rem;'
     },
     {
       'name': 'xl:mb-3',
       'description': 'margin-bottom: .75rem;'
     },
     {
       'name': 'xl:ml-3',
       'description': 'margin-left: .75rem;'
     },
     {
       'name': 'xl:mt-4',
       'description': 'margin-top: 1rem;'
     },
     {
       'name': 'xl:mr-4',
       'description': 'margin-right: 1rem;'
     },
     {
       'name': 'xl:mb-4',
       'description': 'margin-bottom: 1rem;'
     },
     {
       'name': 'xl:ml-4',
       'description': 'margin-left: 1rem;'
     },
     {
       'name': 'xl:mt-5',
       'description': 'margin-top: 1.25rem;'
     },
     {
       'name': 'xl:mr-5',
       'description': 'margin-right: 1.25rem;'
     },
     {
       'name': 'xl:mb-5',
       'description': 'margin-bottom: 1.25rem;'
     },
     {
       'name': 'xl:ml-5',
       'description': 'margin-left: 1.25rem;'
     },
     {
       'name': 'xl:mt-6',
       'description': 'margin-top: 1.5rem;'
     },
     {
       'name': 'xl:mr-6',
       'description': 'margin-right: 1.5rem;'
     },
     {
       'name': 'xl:mb-6',
       'description': 'margin-bottom: 1.5rem;'
     },
     {
       'name': 'xl:ml-6',
       'description': 'margin-left: 1.5rem;'
     },
     {
       'name': 'xl:mt-8',
       'description': 'margin-top: 2rem;'
     },
     {
       'name': 'xl:mr-8',
       'description': 'margin-right: 2rem;'
     },
     {
       'name': 'xl:mb-8',
       'description': 'margin-bottom: 2rem;'
     },
     {
       'name': 'xl:ml-8',
       'description': 'margin-left: 2rem;'
     },
     {
       'name': 'xl:mt-10',
       'description': 'margin-top: 2.5rem;'
     },
     {
       'name': 'xl:mr-10',
       'description': 'margin-right: 2.5rem;'
     },
     {
       'name': 'xl:mb-10',
       'description': 'margin-bottom: 2.5rem;'
     },
     {
       'name': 'xl:ml-10',
       'description': 'margin-left: 2.5rem;'
     },
     {
       'name': 'xl:mt-12',
       'description': 'margin-top: 3rem;'
     },
     {
       'name': 'xl:mr-12',
       'description': 'margin-right: 3rem;'
     },
     {
       'name': 'xl:mb-12',
       'description': 'margin-bottom: 3rem;'
     },
     {
       'name': 'xl:ml-12',
       'description': 'margin-left: 3rem;'
     },
     {
       'name': 'xl:mt-16',
       'description': 'margin-top: 4rem;'
     },
     {
       'name': 'xl:mr-16',
       'description': 'margin-right: 4rem;'
     },
     {
       'name': 'xl:mb-16',
       'description': 'margin-bottom: 4rem;'
     },
     {
       'name': 'xl:ml-16',
       'description': 'margin-left: 4rem;'
     },
     {
       'name': 'xl:mt-20',
       'description': 'margin-top: 5rem;'
     },
     {
       'name': 'xl:mr-20',
       'description': 'margin-right: 5rem;'
     },
     {
       'name': 'xl:mb-20',
       'description': 'margin-bottom: 5rem;'
     },
     {
       'name': 'xl:ml-20',
       'description': 'margin-left: 5rem;'
     },
     {
       'name': 'xl:mt-24',
       'description': 'margin-top: 6rem;'
     },
     {
       'name': 'xl:mr-24',
       'description': 'margin-right: 6rem;'
     },
     {
       'name': 'xl:mb-24',
       'description': 'margin-bottom: 6rem;'
     },
     {
       'name': 'xl:ml-24',
       'description': 'margin-left: 6rem;'
     },
     {
       'name': 'xl:mt-32',
       'description': 'margin-top: 8rem;'
     },
     {
       'name': 'xl:mr-32',
       'description': 'margin-right: 8rem;'
     },
     {
       'name': 'xl:mb-32',
       'description': 'margin-bottom: 8rem;'
     },
     {
       'name': 'xl:ml-32',
       'description': 'margin-left: 8rem;'
     },
     {
       'name': 'xl:mt-auto',
       'description': 'margin-top: auto;'
     },
     {
       'name': 'xl:mr-auto',
       'description': 'margin-right: auto;'
     },
     {
       'name': 'xl:mb-auto',
       'description': 'margin-bottom: auto;'
     },
     {
       'name': 'xl:ml-auto',
       'description': 'margin-left: auto;'
     },
     {
       'name': 'xl:mt-px',
       'description': 'margin-top: 1px;'
     },
     {
       'name': 'xl:mr-px',
       'description': 'margin-right: 1px;'
     },
     {
       'name': 'xl:mb-px',
       'description': 'margin-bottom: 1px;'
     },
     {
       'name': 'xl:ml-px',
       'description': 'margin-left: 1px;'
     },
     {
       'name': 'xl:max-h-full',
       'description': 'max-height: 100%;'
     },
     {
       'name': 'xl:max-h-screen',
       'description': 'max-height: 100vh;'
     },
     {
       'name': 'xl:max-w-xs',
       'description': 'max-width: 20rem;'
     },
     {
       'name': 'xl:max-w-sm',
       'description': 'max-width: 30rem;'
     },
     {
       'name': 'xl:max-w-md',
       'description': 'max-width: 40rem;'
     },
     {
       'name': 'xl:max-w-lg',
       'description': 'max-width: 50rem;'
     },
     {
       'name': 'xl:max-w-xl',
       'description': 'max-width: 60rem;'
     },
     {
       'name': 'xl:max-w-2xl',
       'description': 'max-width: 70rem;'
     },
     {
       'name': 'xl:max-w-3xl',
       'description': 'max-width: 80rem;'
     },
     {
       'name': 'xl:max-w-4xl',
       'description': 'max-width: 90rem;'
     },
     {
       'name': 'xl:max-w-5xl',
       'description': 'max-width: 100rem;'
     },
     {
       'name': 'xl:max-w-full',
       'description': 'max-width: 100%;'
     },
     {
       'name': 'xl:min-h-0',
       'description': 'min-height: 0;'
     },
     {
       'name': 'xl:min-h-full',
       'description': 'min-height: 100%;'
     },
     {
       'name': 'xl:min-h-screen',
       'description': 'min-height: 100vh;'
     },
     {
       'name': 'xl:min-w-0',
       'description': 'min-width: 0;'
     },
     {
       'name': 'xl:min-w-full',
       'description': 'min-width: 100%;'
     },
     {
       'name': 'xl:-m-0',
       'description': 'margin: 0;'
     },
     {
       'name': 'xl:-m-1',
       'description': 'margin: -0.25rem;'
     },
     {
       'name': 'xl:-m-2',
       'description': 'margin: -0.5rem;'
     },
     {
       'name': 'xl:-m-3',
       'description': 'margin: -0.75rem;'
     },
     {
       'name': 'xl:-m-4',
       'description': 'margin: -1rem;'
     },
     {
       'name': 'xl:-m-5',
       'description': 'margin: -1.25rem;'
     },
     {
       'name': 'xl:-m-6',
       'description': 'margin: -1.5rem;'
     },
     {
       'name': 'xl:-m-8',
       'description': 'margin: -2rem;'
     },
     {
       'name': 'xl:-m-10',
       'description': 'margin: -2.5rem;'
     },
     {
       'name': 'xl:-m-12',
       'description': 'margin: -3rem;'
     },
     {
       'name': 'xl:-m-16',
       'description': 'margin: -4rem;'
     },
     {
       'name': 'xl:-m-20',
       'description': 'margin: -5rem;'
     },
     {
       'name': 'xl:-m-24',
       'description': 'margin: -6rem;'
     },
     {
       'name': 'xl:-m-32',
       'description': 'margin: -8rem;'
     },
     {
       'name': 'xl:-m-px',
       'description': 'margin: -1px;'
     },
     {
       'name': 'xl:-my-0',
       'description': 'margin-top: 0; margin-bottom: 0;'
     },
     {
       'name': 'xl:-mx-0',
       'description': 'margin-left: 0; margin-right: 0;'
     },
     {
       'name': 'xl:-my-1',
       'description': 'margin-top: -0.25rem; margin-bottom: -0.25rem;'
     },
     {
       'name': 'xl:-mx-1',
       'description': 'margin-left: -0.25rem; margin-right: -0.25rem;'
     },
     {
       'name': 'xl:-my-2',
       'description': 'margin-top: -0.5rem; margin-bottom: -0.5rem;'
     },
     {
       'name': 'xl:-mx-2',
       'description': 'margin-left: -0.5rem; margin-right: -0.5rem;'
     },
     {
       'name': 'xl:-my-3',
       'description': 'margin-top: -0.75rem; margin-bottom: -0.75rem;'
     },
     {
       'name': 'xl:-mx-3',
       'description': 'margin-left: -0.75rem; margin-right: -0.75rem;'
     },
     {
       'name': 'xl:-my-4',
       'description': 'margin-top: -1rem; margin-bottom: -1rem;'
     },
     {
       'name': 'xl:-mx-4',
       'description': 'margin-left: -1rem; margin-right: -1rem;'
     },
     {
       'name': 'xl:-my-5',
       'description': 'margin-top: -1.25rem; margin-bottom: -1.25rem;'
     },
     {
       'name': 'xl:-mx-5',
       'description': 'margin-left: -1.25rem; margin-right: -1.25rem;'
     },
     {
       'name': 'xl:-my-6',
       'description': 'margin-top: -1.5rem; margin-bottom: -1.5rem;'
     },
     {
       'name': 'xl:-mx-6',
       'description': 'margin-left: -1.5rem; margin-right: -1.5rem;'
     },
     {
       'name': 'xl:-my-8',
       'description': 'margin-top: -2rem; margin-bottom: -2rem;'
     },
     {
       'name': 'xl:-mx-8',
       'description': 'margin-left: -2rem; margin-right: -2rem;'
     },
     {
       'name': 'xl:-my-10',
       'description': 'margin-top: -2.5rem; margin-bottom: -2.5rem;'
     },
     {
       'name': 'xl:-mx-10',
       'description': 'margin-left: -2.5rem; margin-right: -2.5rem;'
     },
     {
       'name': 'xl:-my-12',
       'description': 'margin-top: -3rem; margin-bottom: -3rem;'
     },
     {
       'name': 'xl:-mx-12',
       'description': 'margin-left: -3rem; margin-right: -3rem;'
     },
     {
       'name': 'xl:-my-16',
       'description': 'margin-top: -4rem; margin-bottom: -4rem;'
     },
     {
       'name': 'xl:-mx-16',
       'description': 'margin-left: -4rem; margin-right: -4rem;'
     },
     {
       'name': 'xl:-my-20',
       'description': 'margin-top: -5rem; margin-bottom: -5rem;'
     },
     {
       'name': 'xl:-mx-20',
       'description': 'margin-left: -5rem; margin-right: -5rem;'
     },
     {
       'name': 'xl:-my-24',
       'description': 'margin-top: -6rem; margin-bottom: -6rem;'
     },
     {
       'name': 'xl:-mx-24',
       'description': 'margin-left: -6rem; margin-right: -6rem;'
     },
     {
       'name': 'xl:-my-32',
       'description': 'margin-top: -8rem; margin-bottom: -8rem;'
     },
     {
       'name': 'xl:-mx-32',
       'description': 'margin-left: -8rem; margin-right: -8rem;'
     },
     {
       'name': 'xl:-my-px',
       'description': 'margin-top: -1px; margin-bottom: -1px;'
     },
     {
       'name': 'xl:-mx-px',
       'description': 'margin-left: -1px; margin-right: -1px;'
     },
     {
       'name': 'xl:-mt-0',
       'description': 'margin-top: 0;'
     },
     {
       'name': 'xl:-mr-0',
       'description': 'margin-right: 0;'
     },
     {
       'name': 'xl:-mb-0',
       'description': 'margin-bottom: 0;'
     },
     {
       'name': 'xl:-ml-0',
       'description': 'margin-left: 0;'
     },
     {
       'name': 'xl:-mt-1',
       'description': 'margin-top: -0.25rem;'
     },
     {
       'name': 'xl:-mr-1',
       'description': 'margin-right: -0.25rem;'
     },
     {
       'name': 'xl:-mb-1',
       'description': 'margin-bottom: -0.25rem;'
     },
     {
       'name': 'xl:-ml-1',
       'description': 'margin-left: -0.25rem;'
     },
     {
       'name': 'xl:-mt-2',
       'description': 'margin-top: -0.5rem;'
     },
     {
       'name': 'xl:-mr-2',
       'description': 'margin-right: -0.5rem;'
     },
     {
       'name': 'xl:-mb-2',
       'description': 'margin-bottom: -0.5rem;'
     },
     {
       'name': 'xl:-ml-2',
       'description': 'margin-left: -0.5rem;'
     },
     {
       'name': 'xl:-mt-3',
       'description': 'margin-top: -0.75rem;'
     },
     {
       'name': 'xl:-mr-3',
       'description': 'margin-right: -0.75rem;'
     },
     {
       'name': 'xl:-mb-3',
       'description': 'margin-bottom: -0.75rem;'
     },
     {
       'name': 'xl:-ml-3',
       'description': 'margin-left: -0.75rem;'
     },
     {
       'name': 'xl:-mt-4',
       'description': 'margin-top: -1rem;'
     },
     {
       'name': 'xl:-mr-4',
       'description': 'margin-right: -1rem;'
     },
     {
       'name': 'xl:-mb-4',
       'description': 'margin-bottom: -1rem;'
     },
     {
       'name': 'xl:-ml-4',
       'description': 'margin-left: -1rem;'
     },
     {
       'name': 'xl:-mt-5',
       'description': 'margin-top: -1.25rem;'
     },
     {
       'name': 'xl:-mr-5',
       'description': 'margin-right: -1.25rem;'
     },
     {
       'name': 'xl:-mb-5',
       'description': 'margin-bottom: -1.25rem;'
     },
     {
       'name': 'xl:-ml-5',
       'description': 'margin-left: -1.25rem;'
     },
     {
       'name': 'xl:-mt-6',
       'description': 'margin-top: -1.5rem;'
     },
     {
       'name': 'xl:-mr-6',
       'description': 'margin-right: -1.5rem;'
     },
     {
       'name': 'xl:-mb-6',
       'description': 'margin-bottom: -1.5rem;'
     },
     {
       'name': 'xl:-ml-6',
       'description': 'margin-left: -1.5rem;'
     },
     {
       'name': 'xl:-mt-8',
       'description': 'margin-top: -2rem;'
     },
     {
       'name': 'xl:-mr-8',
       'description': 'margin-right: -2rem;'
     },
     {
       'name': 'xl:-mb-8',
       'description': 'margin-bottom: -2rem;'
     },
     {
       'name': 'xl:-ml-8',
       'description': 'margin-left: -2rem;'
     },
     {
       'name': 'xl:-mt-10',
       'description': 'margin-top: -2.5rem;'
     },
     {
       'name': 'xl:-mr-10',
       'description': 'margin-right: -2.5rem;'
     },
     {
       'name': 'xl:-mb-10',
       'description': 'margin-bottom: -2.5rem;'
     },
     {
       'name': 'xl:-ml-10',
       'description': 'margin-left: -2.5rem;'
     },
     {
       'name': 'xl:-mt-12',
       'description': 'margin-top: -3rem;'
     },
     {
       'name': 'xl:-mr-12',
       'description': 'margin-right: -3rem;'
     },
     {
       'name': 'xl:-mb-12',
       'description': 'margin-bottom: -3rem;'
     },
     {
       'name': 'xl:-ml-12',
       'description': 'margin-left: -3rem;'
     },
     {
       'name': 'xl:-mt-16',
       'description': 'margin-top: -4rem;'
     },
     {
       'name': 'xl:-mr-16',
       'description': 'margin-right: -4rem;'
     },
     {
       'name': 'xl:-mb-16',
       'description': 'margin-bottom: -4rem;'
     },
     {
       'name': 'xl:-ml-16',
       'description': 'margin-left: -4rem;'
     },
     {
       'name': 'xl:-mt-20',
       'description': 'margin-top: -5rem;'
     },
     {
       'name': 'xl:-mr-20',
       'description': 'margin-right: -5rem;'
     },
     {
       'name': 'xl:-mb-20',
       'description': 'margin-bottom: -5rem;'
     },
     {
       'name': 'xl:-ml-20',
       'description': 'margin-left: -5rem;'
     },
     {
       'name': 'xl:-mt-24',
       'description': 'margin-top: -6rem;'
     },
     {
       'name': 'xl:-mr-24',
       'description': 'margin-right: -6rem;'
     },
     {
       'name': 'xl:-mb-24',
       'description': 'margin-bottom: -6rem;'
     },
     {
       'name': 'xl:-ml-24',
       'description': 'margin-left: -6rem;'
     },
     {
       'name': 'xl:-mt-32',
       'description': 'margin-top: -8rem;'
     },
     {
       'name': 'xl:-mr-32',
       'description': 'margin-right: -8rem;'
     },
     {
       'name': 'xl:-mb-32',
       'description': 'margin-bottom: -8rem;'
     },
     {
       'name': 'xl:-ml-32',
       'description': 'margin-left: -8rem;'
     },
     {
       'name': 'xl:-mt-px',
       'description': 'margin-top: -1px;'
     },
     {
       'name': 'xl:-mr-px',
       'description': 'margin-right: -1px;'
     },
     {
       'name': 'xl:-mb-px',
       'description': 'margin-bottom: -1px;'
     },
     {
       'name': 'xl:-ml-px',
       'description': 'margin-left: -1px;'
     },
     {
       'name': 'xl:opacity-0',
       'description': 'opacity: 0;'
     },
     {
       'name': 'xl:opacity-25',
       'description': 'opacity: .25;'
     },
     {
       'name': 'xl:opacity-50',
       'description': 'opacity: .5;'
     },
     {
       'name': 'xl:opacity-75',
       'description': 'opacity: .75;'
     },
     {
       'name': 'xl:opacity-100',
       'description': 'opacity: 1;'
     },
     {
       'name': 'xl:overflow-auto',
       'description': 'overflow: auto;'
     },
     {
       'name': 'xl:overflow-hidden',
       'description': 'overflow: hidden;'
     },
     {
       'name': 'xl:overflow-visible',
       'description': 'overflow: visible;'
     },
     {
       'name': 'xl:overflow-scroll',
       'description': 'overflow: scroll;'
     },
     {
       'name': 'xl:overflow-x-auto',
       'description': 'overflow-x: auto;'
     },
     {
       'name': 'xl:overflow-y-auto',
       'description': 'overflow-y: auto;'
     },
     {
       'name': 'xl:overflow-x-hidden',
       'description': 'overflow-x: hidden;'
     },
     {
       'name': 'xl:overflow-y-hidden',
       'description': 'overflow-y: hidden;'
     },
     {
       'name': 'xl:overflow-x-visible',
       'description': 'overflow-x: visible;'
     },
     {
       'name': 'xl:overflow-y-visible',
       'description': 'overflow-y: visible;'
     },
     {
       'name': 'xl:overflow-x-scroll',
       'description': 'overflow-x: scroll;'
     },
     {
       'name': 'xl:overflow-y-scroll',
       'description': 'overflow-y: scroll;'
     },
     {
       'name': 'xl:scrolling-touch',
       'description': '-webkit-overflow-scrolling: touch;'
     },
     {
       'name': 'xl:scrolling-auto',
       'description': '-webkit-overflow-scrolling: auto;'
     },
     {
       'name': 'xl:p-0',
       'description': 'padding: 0;'
     },
     {
       'name': 'xl:p-1',
       'description': 'padding: .25rem;'
     },
     {
       'name': 'xl:p-2',
       'description': 'padding: .5rem;'
     },
     {
       'name': 'xl:p-3',
       'description': 'padding: .75rem;'
     },
     {
       'name': 'xl:p-4',
       'description': 'padding: 1rem;'
     },
     {
       'name': 'xl:p-5',
       'description': 'padding: 1.25rem;'
     },
     {
       'name': 'xl:p-6',
       'description': 'padding: 1.5rem;'
     },
     {
       'name': 'xl:p-8',
       'description': 'padding: 2rem;'
     },
     {
       'name': 'xl:p-10',
       'description': 'padding: 2.5rem;'
     },
     {
       'name': 'xl:p-12',
       'description': 'padding: 3rem;'
     },
     {
       'name': 'xl:p-16',
       'description': 'padding: 4rem;'
     },
     {
       'name': 'xl:p-20',
       'description': 'padding: 5rem;'
     },
     {
       'name': 'xl:p-24',
       'description': 'padding: 6rem;'
     },
     {
       'name': 'xl:p-32',
       'description': 'padding: 8rem;'
     },
     {
       'name': 'xl:p-px',
       'description': 'padding: 1px;'
     },
     {
       'name': 'xl:py-0',
       'description': 'padding-top: 0; padding-bottom: 0;'
     },
     {
       'name': 'xl:px-0',
       'description': 'padding-left: 0; padding-right: 0;'
     },
     {
       'name': 'xl:py-1',
       'description': 'padding-top: .25rem; padding-bottom: .25rem;'
     },
     {
       'name': 'xl:px-1',
       'description': 'padding-left: .25rem; padding-right: .25rem;'
     },
     {
       'name': 'xl:py-2',
       'description': 'padding-top: .5rem; padding-bottom: .5rem;'
     },
     {
       'name': 'xl:px-2',
       'description': 'padding-left: .5rem; padding-right: .5rem;'
     },
     {
       'name': 'xl:py-3',
       'description': 'padding-top: .75rem; padding-bottom: .75rem;'
     },
     {
       'name': 'xl:px-3',
       'description': 'padding-left: .75rem; padding-right: .75rem;'
     },
     {
       'name': 'xl:py-4',
       'description': 'padding-top: 1rem; padding-bottom: 1rem;'
     },
     {
       'name': 'xl:px-4',
       'description': 'padding-left: 1rem; padding-right: 1rem;'
     },
     {
       'name': 'xl:py-5',
       'description': 'padding-top: 1.25rem; padding-bottom: 1.25rem;'
     },
     {
       'name': 'xl:px-5',
       'description': 'padding-left: 1.25rem; padding-right: 1.25rem;'
     },
     {
       'name': 'xl:py-6',
       'description': 'padding-top: 1.5rem; padding-bottom: 1.5rem;'
     },
     {
       'name': 'xl:px-6',
       'description': 'padding-left: 1.5rem; padding-right: 1.5rem;'
     },
     {
       'name': 'xl:py-8',
       'description': 'padding-top: 2rem; padding-bottom: 2rem;'
     },
     {
       'name': 'xl:px-8',
       'description': 'padding-left: 2rem; padding-right: 2rem;'
     },
     {
       'name': 'xl:py-10',
       'description': 'padding-top: 2.5rem; padding-bottom: 2.5rem;'
     },
     {
       'name': 'xl:px-10',
       'description': 'padding-left: 2.5rem; padding-right: 2.5rem;'
     },
     {
       'name': 'xl:py-12',
       'description': 'padding-top: 3rem; padding-bottom: 3rem;'
     },
     {
       'name': 'xl:px-12',
       'description': 'padding-left: 3rem; padding-right: 3rem;'
     },
     {
       'name': 'xl:py-16',
       'description': 'padding-top: 4rem; padding-bottom: 4rem;'
     },
     {
       'name': 'xl:px-16',
       'description': 'padding-left: 4rem; padding-right: 4rem;'
     },
     {
       'name': 'xl:py-20',
       'description': 'padding-top: 5rem; padding-bottom: 5rem;'
     },
     {
       'name': 'xl:px-20',
       'description': 'padding-left: 5rem; padding-right: 5rem;'
     },
     {
       'name': 'xl:py-24',
       'description': 'padding-top: 6rem; padding-bottom: 6rem;'
     },
     {
       'name': 'xl:px-24',
       'description': 'padding-left: 6rem; padding-right: 6rem;'
     },
     {
       'name': 'xl:py-32',
       'description': 'padding-top: 8rem; padding-bottom: 8rem;'
     },
     {
       'name': 'xl:px-32',
       'description': 'padding-left: 8rem; padding-right: 8rem;'
     },
     {
       'name': 'xl:py-px',
       'description': 'padding-top: 1px; padding-bottom: 1px;'
     },
     {
       'name': 'xl:px-px',
       'description': 'padding-left: 1px; padding-right: 1px;'
     },
     {
       'name': 'xl:pt-0',
       'description': 'padding-top: 0;'
     },
     {
       'name': 'xl:pr-0',
       'description': 'padding-right: 0;'
     },
     {
       'name': 'xl:pb-0',
       'description': 'padding-bottom: 0;'
     },
     {
       'name': 'xl:pl-0',
       'description': 'padding-left: 0;'
     },
     {
       'name': 'xl:pt-1',
       'description': 'padding-top: .25rem;'
     },
     {
       'name': 'xl:pr-1',
       'description': 'padding-right: .25rem;'
     },
     {
       'name': 'xl:pb-1',
       'description': 'padding-bottom: .25rem;'
     },
     {
       'name': 'xl:pl-1',
       'description': 'padding-left: .25rem;'
     },
     {
       'name': 'xl:pt-2',
       'description': 'padding-top: .5rem;'
     },
     {
       'name': 'xl:pr-2',
       'description': 'padding-right: .5rem;'
     },
     {
       'name': 'xl:pb-2',
       'description': 'padding-bottom: .5rem;'
     },
     {
       'name': 'xl:pl-2',
       'description': 'padding-left: .5rem;'
     },
     {
       'name': 'xl:pt-3',
       'description': 'padding-top: .75rem;'
     },
     {
       'name': 'xl:pr-3',
       'description': 'padding-right: .75rem;'
     },
     {
       'name': 'xl:pb-3',
       'description': 'padding-bottom: .75rem;'
     },
     {
       'name': 'xl:pl-3',
       'description': 'padding-left: .75rem;'
     },
     {
       'name': 'xl:pt-4',
       'description': 'padding-top: 1rem;'
     },
     {
       'name': 'xl:pr-4',
       'description': 'padding-right: 1rem;'
     },
     {
       'name': 'xl:pb-4',
       'description': 'padding-bottom: 1rem;'
     },
     {
       'name': 'xl:pl-4',
       'description': 'padding-left: 1rem;'
     },
     {
       'name': 'xl:pt-5',
       'description': 'padding-top: 1.25rem;'
     },
     {
       'name': 'xl:pr-5',
       'description': 'padding-right: 1.25rem;'
     },
     {
       'name': 'xl:pb-5',
       'description': 'padding-bottom: 1.25rem;'
     },
     {
       'name': 'xl:pl-5',
       'description': 'padding-left: 1.25rem;'
     },
     {
       'name': 'xl:pt-6',
       'description': 'padding-top: 1.5rem;'
     },
     {
       'name': 'xl:pr-6',
       'description': 'padding-right: 1.5rem;'
     },
     {
       'name': 'xl:pb-6',
       'description': 'padding-bottom: 1.5rem;'
     },
     {
       'name': 'xl:pl-6',
       'description': 'padding-left: 1.5rem;'
     },
     {
       'name': 'xl:pt-8',
       'description': 'padding-top: 2rem;'
     },
     {
       'name': 'xl:pr-8',
       'description': 'padding-right: 2rem;'
     },
     {
       'name': 'xl:pb-8',
       'description': 'padding-bottom: 2rem;'
     },
     {
       'name': 'xl:pl-8',
       'description': 'padding-left: 2rem;'
     },
     {
       'name': 'xl:pt-10',
       'description': 'padding-top: 2.5rem;'
     },
     {
       'name': 'xl:pr-10',
       'description': 'padding-right: 2.5rem;'
     },
     {
       'name': 'xl:pb-10',
       'description': 'padding-bottom: 2.5rem;'
     },
     {
       'name': 'xl:pl-10',
       'description': 'padding-left: 2.5rem;'
     },
     {
       'name': 'xl:pt-12',
       'description': 'padding-top: 3rem;'
     },
     {
       'name': 'xl:pr-12',
       'description': 'padding-right: 3rem;'
     },
     {
       'name': 'xl:pb-12',
       'description': 'padding-bottom: 3rem;'
     },
     {
       'name': 'xl:pl-12',
       'description': 'padding-left: 3rem;'
     },
     {
       'name': 'xl:pt-16',
       'description': 'padding-top: 4rem;'
     },
     {
       'name': 'xl:pr-16',
       'description': 'padding-right: 4rem;'
     },
     {
       'name': 'xl:pb-16',
       'description': 'padding-bottom: 4rem;'
     },
     {
       'name': 'xl:pl-16',
       'description': 'padding-left: 4rem;'
     },
     {
       'name': 'xl:pt-20',
       'description': 'padding-top: 5rem;'
     },
     {
       'name': 'xl:pr-20',
       'description': 'padding-right: 5rem;'
     },
     {
       'name': 'xl:pb-20',
       'description': 'padding-bottom: 5rem;'
     },
     {
       'name': 'xl:pl-20',
       'description': 'padding-left: 5rem;'
     },
     {
       'name': 'xl:pt-24',
       'description': 'padding-top: 6rem;'
     },
     {
       'name': 'xl:pr-24',
       'description': 'padding-right: 6rem;'
     },
     {
       'name': 'xl:pb-24',
       'description': 'padding-bottom: 6rem;'
     },
     {
       'name': 'xl:pl-24',
       'description': 'padding-left: 6rem;'
     },
     {
       'name': 'xl:pt-32',
       'description': 'padding-top: 8rem;'
     },
     {
       'name': 'xl:pr-32',
       'description': 'padding-right: 8rem;'
     },
     {
       'name': 'xl:pb-32',
       'description': 'padding-bottom: 8rem;'
     },
     {
       'name': 'xl:pl-32',
       'description': 'padding-left: 8rem;'
     },
     {
       'name': 'xl:pt-px',
       'description': 'padding-top: 1px;'
     },
     {
       'name': 'xl:pr-px',
       'description': 'padding-right: 1px;'
     },
     {
       'name': 'xl:pb-px',
       'description': 'padding-bottom: 1px;'
     },
     {
       'name': 'xl:pl-px',
       'description': 'padding-left: 1px;'
     },
     {
       'name': 'xl:pointer-events-none',
       'description': 'pointer-events: none;'
     },
     {
       'name': 'xl:pointer-events-auto',
       'description': 'pointer-events: auto;'
     },
     {
       'name': 'xl:static',
       'description': 'position: static;'
     },
     {
       'name': 'xl:fixed',
       'description': 'position: fixed;'
     },
     {
       'name': 'xl:absolute',
       'description': 'position: absolute;'
     },
     {
       'name': 'xl:relative',
       'description': 'position: relative;'
     },
     {
       'name': 'xl:sticky',
       'description': 'position: sticky;'
     },
     {
       'name': 'xl:pin-none',
       'description': 'top: auto; right: auto; bottom: auto; left: auto;'
     },
     {
       'name': 'xl:pin',
       'description': 'top: 0; right: 0; bottom: 0; left: 0;'
     },
     {
       'name': 'xl:pin-y',
       'description': 'top: 0; bottom: 0;'
     },
     {
       'name': 'xl:pin-x',
       'description': 'right: 0; left: 0;'
     },
     {
       'name': 'xl:pin-t',
       'description': 'top: 0;'
     },
     {
       'name': 'xl:pin-r',
       'description': 'right: 0;'
     },
     {
       'name': 'xl:pin-b',
       'description': 'bottom: 0;'
     },
     {
       'name': 'xl:pin-l',
       'description': 'left: 0;'
     },
     {
       'name': 'xl:resize-none',
       'description': 'resize: none;'
     },
     {
       'name': 'xl:resize-y',
       'description': 'resize: vertical;'
     },
     {
       'name': 'xl:resize-x',
       'description': 'resize: horizontal;'
     },
     {
       'name': 'xl:resize',
       'description': 'resize: both;'
     },
     {
       'name': 'xl:shadow',
       'description': 'box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .1);'
     },
     {
       'name': 'xl:shadow-md',
       'description': 'box-shadow: 0 4px 8px 0 rgba(0, 0, 0, .12), 0 2px 4px 0 rgba(0, 0, 0, .08);'
     },
     {
       'name': 'xl:shadow-lg',
       'description': 'box-shadow: 0 15px 30px 0 rgba(0, 0, 0, .11), 0 5px 15px 0 rgba(0, 0, 0, .08);'
     },
     {
       'name': 'xl:shadow-inner',
       'description': 'box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, .06);'
     },
     {
       'name': 'xl:shadow-outline',
       'description': 'box-shadow: 0 0 0 3px rgba(52, 144, 220, .5);'
     },
     {
       'name': 'xl:shadow-none',
       'description': 'box-shadow: none;'
     },
     {
       'name': 'xl:hover:shadow',
       'description': ':hover { box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .1); }'
     },
     {
       'name': 'xl:hover:shadow-md',
       'description': ':hover { box-shadow: 0 4px 8px 0 rgba(0, 0, 0, .12), 0 2px 4px 0 rgba(0, 0, 0, .08); }'
     },
     {
       'name': 'xl:hover:shadow-lg',
       'description': ':hover { box-shadow: 0 15px 30px 0 rgba(0, 0, 0, .11), 0 5px 15px 0 rgba(0, 0, 0, .08); }'
     },
     {
       'name': 'xl:hover:shadow-inner',
       'description': ':hover { box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, .06); }'
     },
     {
       'name': 'xl:hover:shadow-outline',
       'description': ':hover { box-shadow: 0 0 0 3px rgba(52, 144, 220, .5); }'
     },
     {
       'name': 'xl:hover:shadow-none',
       'description': ':hover { box-shadow: none; }'
     },
     {
       'name': 'xl:focus:shadow',
       'description': ':focus { box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .1); }'
     },
     {
       'name': 'xl:focus:shadow-md',
       'description': ':focus { box-shadow: 0 4px 8px 0 rgba(0, 0, 0, .12), 0 2px 4px 0 rgba(0, 0, 0, .08); }'
     },
     {
       'name': 'xl:focus:shadow-lg',
       'description': ':focus { box-shadow: 0 15px 30px 0 rgba(0, 0, 0, .11), 0 5px 15px 0 rgba(0, 0, 0, .08); }'
     },
     {
       'name': 'xl:focus:shadow-inner',
       'description': ':focus { box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, .06); }'
     },
     {
       'name': 'xl:focus:shadow-outline',
       'description': ':focus { box-shadow: 0 0 0 3px rgba(52, 144, 220, .5); }'
     },
     {
       'name': 'xl:focus:shadow-none',
       'description': ':focus { box-shadow: none; }'
     },
     {
       'name': 'xl:table-auto',
       'description': 'table-layout: auto;'
     },
     {
       'name': 'xl:table-fixed',
       'description': 'table-layout: fixed;'
     },
     {
       'name': 'xl:text-left',
       'description': 'text-align: left;'
     },
     {
       'name': 'xl:text-center',
       'description': 'text-align: center;'
     },
     {
       'name': 'xl:text-right',
       'description': 'text-align: right;'
     },
     {
       'name': 'xl:text-justify',
       'description': 'text-align: justify;'
     },
     {
       'name': 'xl:text-transparent',
       'description': 'color: transparent;'
     },
     {
       'name': 'xl:text-black',
       'description': 'color: #22292f;'
     },
     {
       'name': 'xl:text-grey-darkest',
       'description': 'color: #3d4852;'
     },
     {
       'name': 'xl:text-grey-darker',
       'description': 'color: #606f7b;'
     },
     {
       'name': 'xl:text-grey-dark',
       'description': 'color: #8795a1;'
     },
     {
       'name': 'xl:text-grey',
       'description': 'color: #b8c2cc;'
     },
     {
       'name': 'xl:text-grey-light',
       'description': 'color: #dae1e7;'
     },
     {
       'name': 'xl:text-grey-lighter',
       'description': 'color: #f1f5f8;'
     },
     {
       'name': 'xl:text-grey-lightest',
       'description': 'color: #f8fafc;'
     },
     {
       'name': 'xl:text-white',
       'description': 'color: #fff;'
     },
     {
       'name': 'xl:text-red-darkest',
       'description': 'color: #3b0d0c;'
     },
     {
       'name': 'xl:text-red-darker',
       'description': 'color: #621b18;'
     },
     {
       'name': 'xl:text-red-dark',
       'description': 'color: #cc1f1a;'
     },
     {
       'name': 'xl:text-red',
       'description': 'color: #e3342f;'
     },
     {
       'name': 'xl:text-red-light',
       'description': 'color: #ef5753;'
     },
     {
       'name': 'xl:text-red-lighter',
       'description': 'color: #f9acaa;'
     },
     {
       'name': 'xl:text-red-lightest',
       'description': 'color: #fcebea;'
     },
     {
       'name': 'xl:text-orange-darkest',
       'description': 'color: #462a16;'
     },
     {
       'name': 'xl:text-orange-darker',
       'description': 'color: #613b1f;'
     },
     {
       'name': 'xl:text-orange-dark',
       'description': 'color: #de751f;'
     },
     {
       'name': 'xl:text-orange',
       'description': 'color: #f6993f;'
     },
     {
       'name': 'xl:text-orange-light',
       'description': 'color: #faad63;'
     },
     {
       'name': 'xl:text-orange-lighter',
       'description': 'color: #fcd9b6;'
     },
     {
       'name': 'xl:text-orange-lightest',
       'description': 'color: #fff5eb;'
     },
     {
       'name': 'xl:text-yellow-darkest',
       'description': 'color: #453411;'
     },
     {
       'name': 'xl:text-yellow-darker',
       'description': 'color: #684f1d;'
     },
     {
       'name': 'xl:text-yellow-dark',
       'description': 'color: #f2d024;'
     },
     {
       'name': 'xl:text-yellow',
       'description': 'color: #ffed4a;'
     },
     {
       'name': 'xl:text-yellow-light',
       'description': 'color: #fff382;'
     },
     {
       'name': 'xl:text-yellow-lighter',
       'description': 'color: #fff9c2;'
     },
     {
       'name': 'xl:text-yellow-lightest',
       'description': 'color: #fcfbeb;'
     },
     {
       'name': 'xl:text-green-darkest',
       'description': 'color: #0f2f21;'
     },
     {
       'name': 'xl:text-green-darker',
       'description': 'color: #1a4731;'
     },
     {
       'name': 'xl:text-green-dark',
       'description': 'color: #1f9d55;'
     },
     {
       'name': 'xl:text-green',
       'description': 'color: #38c172;'
     },
     {
       'name': 'xl:text-green-light',
       'description': 'color: #51d88a;'
     },
     {
       'name': 'xl:text-green-lighter',
       'description': 'color: #a2f5bf;'
     },
     {
       'name': 'xl:text-green-lightest',
       'description': 'color: #e3fcec;'
     },
     {
       'name': 'xl:text-teal-darkest',
       'description': 'color: #0d3331;'
     },
     {
       'name': 'xl:text-teal-darker',
       'description': 'color: #20504f;'
     },
     {
       'name': 'xl:text-teal-dark',
       'description': 'color: #38a89d;'
     },
     {
       'name': 'xl:text-teal',
       'description': 'color: #4dc0b5;'
     },
     {
       'name': 'xl:text-teal-light',
       'description': 'color: #64d5ca;'
     },
     {
       'name': 'xl:text-teal-lighter',
       'description': 'color: #a0f0ed;'
     },
     {
       'name': 'xl:text-teal-lightest',
       'description': 'color: #e8fffe;'
     },
     {
       'name': 'xl:text-blue-darkest',
       'description': 'color: #12283a;'
     },
     {
       'name': 'xl:text-blue-darker',
       'description': 'color: #1c3d5a;'
     },
     {
       'name': 'xl:text-blue-dark',
       'description': 'color: #2779bd;'
     },
     {
       'name': 'xl:text-blue',
       'description': 'color: #3490dc;'
     },
     {
       'name': 'xl:text-blue-light',
       'description': 'color: #6cb2eb;'
     },
     {
       'name': 'xl:text-blue-lighter',
       'description': 'color: #bcdefa;'
     },
     {
       'name': 'xl:text-blue-lightest',
       'description': 'color: #eff8ff;'
     },
     {
       'name': 'xl:text-indigo-darkest',
       'description': 'color: #191e38;'
     },
     {
       'name': 'xl:text-indigo-darker',
       'description': 'color: #2f365f;'
     },
     {
       'name': 'xl:text-indigo-dark',
       'description': 'color: #5661b3;'
     },
     {
       'name': 'xl:text-indigo',
       'description': 'color: #6574cd;'
     },
     {
       'name': 'xl:text-indigo-light',
       'description': 'color: #7886d7;'
     },
     {
       'name': 'xl:text-indigo-lighter',
       'description': 'color: #b2b7ff;'
     },
     {
       'name': 'xl:text-indigo-lightest',
       'description': 'color: #e6e8ff;'
     },
     {
       'name': 'xl:text-purple-darkest',
       'description': 'color: #21183c;'
     },
     {
       'name': 'xl:text-purple-darker',
       'description': 'color: #382b5f;'
     },
     {
       'name': 'xl:text-purple-dark',
       'description': 'color: #794acf;'
     },
     {
       'name': 'xl:text-purple',
       'description': 'color: #9561e2;'
     },
     {
       'name': 'xl:text-purple-light',
       'description': 'color: #a779e9;'
     },
     {
       'name': 'xl:text-purple-lighter',
       'description': 'color: #d6bbfc;'
     },
     {
       'name': 'xl:text-purple-lightest',
       'description': 'color: #f3ebff;'
     },
     {
       'name': 'xl:text-pink-darkest',
       'description': 'color: #451225;'
     },
     {
       'name': 'xl:text-pink-darker',
       'description': 'color: #6f213f;'
     },
     {
       'name': 'xl:text-pink-dark',
       'description': 'color: #eb5286;'
     },
     {
       'name': 'xl:text-pink',
       'description': 'color: #f66d9b;'
     },
     {
       'name': 'xl:text-pink-light',
       'description': 'color: #fa7ea8;'
     },
     {
       'name': 'xl:text-pink-lighter',
       'description': 'color: #ffbbca;'
     },
     {
       'name': 'xl:text-pink-lightest',
       'description': 'color: #ffebef;'
     },
     {
       'name': 'xl:hover:text-transparent',
       'description': ':hover { color: transparent; }'
     },
     {
       'name': 'xl:hover:text-black',
       'description': ':hover { color: #22292f; }'
     },
     {
       'name': 'xl:hover:text-grey-darkest',
       'description': ':hover { color: #3d4852; }'
     },
     {
       'name': 'xl:hover:text-grey-darker',
       'description': ':hover { color: #606f7b; }'
     },
     {
       'name': 'xl:hover:text-grey-dark',
       'description': ':hover { color: #8795a1; }'
     },
     {
       'name': 'xl:hover:text-grey',
       'description': ':hover { color: #b8c2cc; }'
     },
     {
       'name': 'xl:hover:text-grey-light',
       'description': ':hover { color: #dae1e7; }'
     },
     {
       'name': 'xl:hover:text-grey-lighter',
       'description': ':hover { color: #f1f5f8; }'
     },
     {
       'name': 'xl:hover:text-grey-lightest',
       'description': ':hover { color: #f8fafc; }'
     },
     {
       'name': 'xl:hover:text-white',
       'description': ':hover { color: #fff; }'
     },
     {
       'name': 'xl:hover:text-red-darkest',
       'description': ':hover { color: #3b0d0c; }'
     },
     {
       'name': 'xl:hover:text-red-darker',
       'description': ':hover { color: #621b18; }'
     },
     {
       'name': 'xl:hover:text-red-dark',
       'description': ':hover { color: #cc1f1a; }'
     },
     {
       'name': 'xl:hover:text-red',
       'description': ':hover { color: #e3342f; }'
     },
     {
       'name': 'xl:hover:text-red-light',
       'description': ':hover { color: #ef5753; }'
     },
     {
       'name': 'xl:hover:text-red-lighter',
       'description': ':hover { color: #f9acaa; }'
     },
     {
       'name': 'xl:hover:text-red-lightest',
       'description': ':hover { color: #fcebea; }'
     },
     {
       'name': 'xl:hover:text-orange-darkest',
       'description': ':hover { color: #462a16; }'
     },
     {
       'name': 'xl:hover:text-orange-darker',
       'description': ':hover { color: #613b1f; }'
     },
     {
       'name': 'xl:hover:text-orange-dark',
       'description': ':hover { color: #de751f; }'
     },
     {
       'name': 'xl:hover:text-orange',
       'description': ':hover { color: #f6993f; }'
     },
     {
       'name': 'xl:hover:text-orange-light',
       'description': ':hover { color: #faad63; }'
     },
     {
       'name': 'xl:hover:text-orange-lighter',
       'description': ':hover { color: #fcd9b6; }'
     },
     {
       'name': 'xl:hover:text-orange-lightest',
       'description': ':hover { color: #fff5eb; }'
     },
     {
       'name': 'xl:hover:text-yellow-darkest',
       'description': ':hover { color: #453411; }'
     },
     {
       'name': 'xl:hover:text-yellow-darker',
       'description': ':hover { color: #684f1d; }'
     },
     {
       'name': 'xl:hover:text-yellow-dark',
       'description': ':hover { color: #f2d024; }'
     },
     {
       'name': 'xl:hover:text-yellow',
       'description': ':hover { color: #ffed4a; }'
     },
     {
       'name': 'xl:hover:text-yellow-light',
       'description': ':hover { color: #fff382; }'
     },
     {
       'name': 'xl:hover:text-yellow-lighter',
       'description': ':hover { color: #fff9c2; }'
     },
     {
       'name': 'xl:hover:text-yellow-lightest',
       'description': ':hover { color: #fcfbeb; }'
     },
     {
       'name': 'xl:hover:text-green-darkest',
       'description': ':hover { color: #0f2f21; }'
     },
     {
       'name': 'xl:hover:text-green-darker',
       'description': ':hover { color: #1a4731; }'
     },
     {
       'name': 'xl:hover:text-green-dark',
       'description': ':hover { color: #1f9d55; }'
     },
     {
       'name': 'xl:hover:text-green',
       'description': ':hover { color: #38c172; }'
     },
     {
       'name': 'xl:hover:text-green-light',
       'description': ':hover { color: #51d88a; }'
     },
     {
       'name': 'xl:hover:text-green-lighter',
       'description': ':hover { color: #a2f5bf; }'
     },
     {
       'name': 'xl:hover:text-green-lightest',
       'description': ':hover { color: #e3fcec; }'
     },
     {
       'name': 'xl:hover:text-teal-darkest',
       'description': ':hover { color: #0d3331; }'
     },
     {
       'name': 'xl:hover:text-teal-darker',
       'description': ':hover { color: #20504f; }'
     },
     {
       'name': 'xl:hover:text-teal-dark',
       'description': ':hover { color: #38a89d; }'
     },
     {
       'name': 'xl:hover:text-teal',
       'description': ':hover { color: #4dc0b5; }'
     },
     {
       'name': 'xl:hover:text-teal-light',
       'description': ':hover { color: #64d5ca; }'
     },
     {
       'name': 'xl:hover:text-teal-lighter',
       'description': ':hover { color: #a0f0ed; }'
     },
     {
       'name': 'xl:hover:text-teal-lightest',
       'description': ':hover { color: #e8fffe; }'
     },
     {
       'name': 'xl:hover:text-blue-darkest',
       'description': ':hover { color: #12283a; }'
     },
     {
       'name': 'xl:hover:text-blue-darker',
       'description': ':hover { color: #1c3d5a; }'
     },
     {
       'name': 'xl:hover:text-blue-dark',
       'description': ':hover { color: #2779bd; }'
     },
     {
       'name': 'xl:hover:text-blue',
       'description': ':hover { color: #3490dc; }'
     },
     {
       'name': 'xl:hover:text-blue-light',
       'description': ':hover { color: #6cb2eb; }'
     },
     {
       'name': 'xl:hover:text-blue-lighter',
       'description': ':hover { color: #bcdefa; }'
     },
     {
       'name': 'xl:hover:text-blue-lightest',
       'description': ':hover { color: #eff8ff; }'
     },
     {
       'name': 'xl:hover:text-indigo-darkest',
       'description': ':hover { color: #191e38; }'
     },
     {
       'name': 'xl:hover:text-indigo-darker',
       'description': ':hover { color: #2f365f; }'
     },
     {
       'name': 'xl:hover:text-indigo-dark',
       'description': ':hover { color: #5661b3; }'
     },
     {
       'name': 'xl:hover:text-indigo',
       'description': ':hover { color: #6574cd; }'
     },
     {
       'name': 'xl:hover:text-indigo-light',
       'description': ':hover { color: #7886d7; }'
     },
     {
       'name': 'xl:hover:text-indigo-lighter',
       'description': ':hover { color: #b2b7ff; }'
     },
     {
       'name': 'xl:hover:text-indigo-lightest',
       'description': ':hover { color: #e6e8ff; }'
     },
     {
       'name': 'xl:hover:text-purple-darkest',
       'description': ':hover { color: #21183c; }'
     },
     {
       'name': 'xl:hover:text-purple-darker',
       'description': ':hover { color: #382b5f; }'
     },
     {
       'name': 'xl:hover:text-purple-dark',
       'description': ':hover { color: #794acf; }'
     },
     {
       'name': 'xl:hover:text-purple',
       'description': ':hover { color: #9561e2; }'
     },
     {
       'name': 'xl:hover:text-purple-light',
       'description': ':hover { color: #a779e9; }'
     },
     {
       'name': 'xl:hover:text-purple-lighter',
       'description': ':hover { color: #d6bbfc; }'
     },
     {
       'name': 'xl:hover:text-purple-lightest',
       'description': ':hover { color: #f3ebff; }'
     },
     {
       'name': 'xl:hover:text-pink-darkest',
       'description': ':hover { color: #451225; }'
     },
     {
       'name': 'xl:hover:text-pink-darker',
       'description': ':hover { color: #6f213f; }'
     },
     {
       'name': 'xl:hover:text-pink-dark',
       'description': ':hover { color: #eb5286; }'
     },
     {
       'name': 'xl:hover:text-pink',
       'description': ':hover { color: #f66d9b; }'
     },
     {
       'name': 'xl:hover:text-pink-light',
       'description': ':hover { color: #fa7ea8; }'
     },
     {
       'name': 'xl:hover:text-pink-lighter',
       'description': ':hover { color: #ffbbca; }'
     },
     {
       'name': 'xl:hover:text-pink-lightest',
       'description': ':hover { color: #ffebef; }'
     },
     {
       'name': 'xl:focus:text-transparent',
       'description': ':focus { color: transparent; }'
     },
     {
       'name': 'xl:focus:text-black',
       'description': ':focus { color: #22292f; }'
     },
     {
       'name': 'xl:focus:text-grey-darkest',
       'description': ':focus { color: #3d4852; }'
     },
     {
       'name': 'xl:focus:text-grey-darker',
       'description': ':focus { color: #606f7b; }'
     },
     {
       'name': 'xl:focus:text-grey-dark',
       'description': ':focus { color: #8795a1; }'
     },
     {
       'name': 'xl:focus:text-grey',
       'description': ':focus { color: #b8c2cc; }'
     },
     {
       'name': 'xl:focus:text-grey-light',
       'description': ':focus { color: #dae1e7; }'
     },
     {
       'name': 'xl:focus:text-grey-lighter',
       'description': ':focus { color: #f1f5f8; }'
     },
     {
       'name': 'xl:focus:text-grey-lightest',
       'description': ':focus { color: #f8fafc; }'
     },
     {
       'name': 'xl:focus:text-white',
       'description': ':focus { color: #fff; }'
     },
     {
       'name': 'xl:focus:text-red-darkest',
       'description': ':focus { color: #3b0d0c; }'
     },
     {
       'name': 'xl:focus:text-red-darker',
       'description': ':focus { color: #621b18; }'
     },
     {
       'name': 'xl:focus:text-red-dark',
       'description': ':focus { color: #cc1f1a; }'
     },
     {
       'name': 'xl:focus:text-red',
       'description': ':focus { color: #e3342f; }'
     },
     {
       'name': 'xl:focus:text-red-light',
       'description': ':focus { color: #ef5753; }'
     },
     {
       'name': 'xl:focus:text-red-lighter',
       'description': ':focus { color: #f9acaa; }'
     },
     {
       'name': 'xl:focus:text-red-lightest',
       'description': ':focus { color: #fcebea; }'
     },
     {
       'name': 'xl:focus:text-orange-darkest',
       'description': ':focus { color: #462a16; }'
     },
     {
       'name': 'xl:focus:text-orange-darker',
       'description': ':focus { color: #613b1f; }'
     },
     {
       'name': 'xl:focus:text-orange-dark',
       'description': ':focus { color: #de751f; }'
     },
     {
       'name': 'xl:focus:text-orange',
       'description': ':focus { color: #f6993f; }'
     },
     {
       'name': 'xl:focus:text-orange-light',
       'description': ':focus { color: #faad63; }'
     },
     {
       'name': 'xl:focus:text-orange-lighter',
       'description': ':focus { color: #fcd9b6; }'
     },
     {
       'name': 'xl:focus:text-orange-lightest',
       'description': ':focus { color: #fff5eb; }'
     },
     {
       'name': 'xl:focus:text-yellow-darkest',
       'description': ':focus { color: #453411; }'
     },
     {
       'name': 'xl:focus:text-yellow-darker',
       'description': ':focus { color: #684f1d; }'
     },
     {
       'name': 'xl:focus:text-yellow-dark',
       'description': ':focus { color: #f2d024; }'
     },
     {
       'name': 'xl:focus:text-yellow',
       'description': ':focus { color: #ffed4a; }'
     },
     {
       'name': 'xl:focus:text-yellow-light',
       'description': ':focus { color: #fff382; }'
     },
     {
       'name': 'xl:focus:text-yellow-lighter',
       'description': ':focus { color: #fff9c2; }'
     },
     {
       'name': 'xl:focus:text-yellow-lightest',
       'description': ':focus { color: #fcfbeb; }'
     },
     {
       'name': 'xl:focus:text-green-darkest',
       'description': ':focus { color: #0f2f21; }'
     },
     {
       'name': 'xl:focus:text-green-darker',
       'description': ':focus { color: #1a4731; }'
     },
     {
       'name': 'xl:focus:text-green-dark',
       'description': ':focus { color: #1f9d55; }'
     },
     {
       'name': 'xl:focus:text-green',
       'description': ':focus { color: #38c172; }'
     },
     {
       'name': 'xl:focus:text-green-light',
       'description': ':focus { color: #51d88a; }'
     },
     {
       'name': 'xl:focus:text-green-lighter',
       'description': ':focus { color: #a2f5bf; }'
     },
     {
       'name': 'xl:focus:text-green-lightest',
       'description': ':focus { color: #e3fcec; }'
     },
     {
       'name': 'xl:focus:text-teal-darkest',
       'description': ':focus { color: #0d3331; }'
     },
     {
       'name': 'xl:focus:text-teal-darker',
       'description': ':focus { color: #20504f; }'
     },
     {
       'name': 'xl:focus:text-teal-dark',
       'description': ':focus { color: #38a89d; }'
     },
     {
       'name': 'xl:focus:text-teal',
       'description': ':focus { color: #4dc0b5; }'
     },
     {
       'name': 'xl:focus:text-teal-light',
       'description': ':focus { color: #64d5ca; }'
     },
     {
       'name': 'xl:focus:text-teal-lighter',
       'description': ':focus { color: #a0f0ed; }'
     },
     {
       'name': 'xl:focus:text-teal-lightest',
       'description': ':focus { color: #e8fffe; }'
     },
     {
       'name': 'xl:focus:text-blue-darkest',
       'description': ':focus { color: #12283a; }'
     },
     {
       'name': 'xl:focus:text-blue-darker',
       'description': ':focus { color: #1c3d5a; }'
     },
     {
       'name': 'xl:focus:text-blue-dark',
       'description': ':focus { color: #2779bd; }'
     },
     {
       'name': 'xl:focus:text-blue',
       'description': ':focus { color: #3490dc; }'
     },
     {
       'name': 'xl:focus:text-blue-light',
       'description': ':focus { color: #6cb2eb; }'
     },
     {
       'name': 'xl:focus:text-blue-lighter',
       'description': ':focus { color: #bcdefa; }'
     },
     {
       'name': 'xl:focus:text-blue-lightest',
       'description': ':focus { color: #eff8ff; }'
     },
     {
       'name': 'xl:focus:text-indigo-darkest',
       'description': ':focus { color: #191e38; }'
     },
     {
       'name': 'xl:focus:text-indigo-darker',
       'description': ':focus { color: #2f365f; }'
     },
     {
       'name': 'xl:focus:text-indigo-dark',
       'description': ':focus { color: #5661b3; }'
     },
     {
       'name': 'xl:focus:text-indigo',
       'description': ':focus { color: #6574cd; }'
     },
     {
       'name': 'xl:focus:text-indigo-light',
       'description': ':focus { color: #7886d7; }'
     },
     {
       'name': 'xl:focus:text-indigo-lighter',
       'description': ':focus { color: #b2b7ff; }'
     },
     {
       'name': 'xl:focus:text-indigo-lightest',
       'description': ':focus { color: #e6e8ff; }'
     },
     {
       'name': 'xl:focus:text-purple-darkest',
       'description': ':focus { color: #21183c; }'
     },
     {
       'name': 'xl:focus:text-purple-darker',
       'description': ':focus { color: #382b5f; }'
     },
     {
       'name': 'xl:focus:text-purple-dark',
       'description': ':focus { color: #794acf; }'
     },
     {
       'name': 'xl:focus:text-purple',
       'description': ':focus { color: #9561e2; }'
     },
     {
       'name': 'xl:focus:text-purple-light',
       'description': ':focus { color: #a779e9; }'
     },
     {
       'name': 'xl:focus:text-purple-lighter',
       'description': ':focus { color: #d6bbfc; }'
     },
     {
       'name': 'xl:focus:text-purple-lightest',
       'description': ':focus { color: #f3ebff; }'
     },
     {
       'name': 'xl:focus:text-pink-darkest',
       'description': ':focus { color: #451225; }'
     },
     {
       'name': 'xl:focus:text-pink-darker',
       'description': ':focus { color: #6f213f; }'
     },
     {
       'name': 'xl:focus:text-pink-dark',
       'description': ':focus { color: #eb5286; }'
     },
     {
       'name': 'xl:focus:text-pink',
       'description': ':focus { color: #f66d9b; }'
     },
     {
       'name': 'xl:focus:text-pink-light',
       'description': ':focus { color: #fa7ea8; }'
     },
     {
       'name': 'xl:focus:text-pink-lighter',
       'description': ':focus { color: #ffbbca; }'
     },
     {
       'name': 'xl:focus:text-pink-lightest',
       'description': ':focus { color: #ffebef; }'
     },
     {
       'name': 'xl:text-xs',
       'description': 'font-size: .75rem;'
     },
     {
       'name': 'xl:text-sm',
       'description': 'font-size: .875rem;'
     },
     {
       'name': 'xl:text-base',
       'description': 'font-size: 1rem;'
     },
     {
       'name': 'xl:text-lg',
       'description': 'font-size: 1.125rem;'
     },
     {
       'name': 'xl:text-xl',
       'description': 'font-size: 1.25rem;'
     },
     {
       'name': 'xl:text-2xl',
       'description': 'font-size: 1.5rem;'
     },
     {
       'name': 'xl:text-3xl',
       'description': 'font-size: 1.875rem;'
     },
     {
       'name': 'xl:text-4xl',
       'description': 'font-size: 2.25rem;'
     },
     {
       'name': 'xl:text-5xl',
       'description': 'font-size: 3rem;'
     },
     {
       'name': 'xl:italic',
       'description': 'font-style: italic;'
     },
     {
       'name': 'xl:roman',
       'description': 'font-style: normal;'
     },
     {
       'name': 'xl:uppercase',
       'description': 'text-transform: uppercase;'
     },
     {
       'name': 'xl:lowercase',
       'description': 'text-transform: lowercase;'
     },
     {
       'name': 'xl:capitalize',
       'description': 'text-transform: capitalize;'
     },
     {
       'name': 'xl:normal-case',
       'description': 'text-transform: none;'
     },
     {
       'name': 'xl:underline',
       'description': 'text-decoration: underline;'
     },
     {
       'name': 'xl:line-through',
       'description': 'text-decoration: line-through;'
     },
     {
       'name': 'xl:no-underline',
       'description': 'text-decoration: none;'
     },
     {
       'name': 'xl:antialiased',
       'description': '-webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;'
     },
     {
       'name': 'xl:subpixel-antialiased',
       'description': '-webkit-font-smoothing: auto; -moz-osx-font-smoothing: auto;'
     },
     {
       'name': 'xl:hover:italic',
       'description': ':hover { font-style: italic; }'
     },
     {
       'name': 'xl:hover:roman',
       'description': ':hover { font-style: normal; }'
     },
     {
       'name': 'xl:hover:uppercase',
       'description': ':hover { text-transform: uppercase; }'
     },
     {
       'name': 'xl:hover:lowercase',
       'description': ':hover { text-transform: lowercase; }'
     },
     {
       'name': 'xl:hover:capitalize',
       'description': ':hover { text-transform: capitalize; }'
     },
     {
       'name': 'xl:hover:normal-case',
       'description': ':hover { text-transform: none; }'
     },
     {
       'name': 'xl:hover:underline',
       'description': ':hover { text-decoration: underline; }'
     },
     {
       'name': 'xl:hover:line-through',
       'description': ':hover { text-decoration: line-through; }'
     },
     {
       'name': 'xl:hover:no-underline',
       'description': ':hover { text-decoration: none; }'
     },
     {
       'name': 'xl:hover:antialiased',
       'description': ':hover { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }'
     },
     {
       'name': 'xl:hover:subpixel-antialiased',
       'description': ':hover { -webkit-font-smoothing: auto; -moz-osx-font-smoothing: auto; }'
     },
     {
       'name': 'xl:focus:italic',
       'description': ':focus { font-style: italic; }'
     },
     {
       'name': 'xl:focus:roman',
       'description': ':focus { font-style: normal; }'
     },
     {
       'name': 'xl:focus:uppercase',
       'description': ':focus { text-transform: uppercase; }'
     },
     {
       'name': 'xl:focus:lowercase',
       'description': ':focus { text-transform: lowercase; }'
     },
     {
       'name': 'xl:focus:capitalize',
       'description': ':focus { text-transform: capitalize; }'
     },
     {
       'name': 'xl:focus:normal-case',
       'description': ':focus { text-transform: none; }'
     },
     {
       'name': 'xl:focus:underline',
       'description': ':focus { text-decoration: underline; }'
     },
     {
       'name': 'xl:focus:line-through',
       'description': ':focus { text-decoration: line-through; }'
     },
     {
       'name': 'xl:focus:no-underline',
       'description': ':focus { text-decoration: none; }'
     },
     {
       'name': 'xl:focus:antialiased',
       'description': ':focus { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }'
     },
     {
       'name': 'xl:focus:subpixel-antialiased',
       'description': ':focus { -webkit-font-smoothing: auto; -moz-osx-font-smoothing: auto; }'
     },
     {
       'name': 'xl:tracking-tight',
       'description': 'letter-spacing: -0.05em;'
     },
     {
       'name': 'xl:tracking-normal',
       'description': 'letter-spacing: 0;'
     },
     {
       'name': 'xl:tracking-wide',
       'description': 'letter-spacing: .05em;'
     },
     {
       'name': 'xl:select-none',
       'description': 'user-select: none;'
     },
     {
       'name': 'xl:select-text',
       'description': 'user-select: text;'
     },
     {
       'name': 'xl:align-baseline',
       'description': 'vertical-align: baseline;'
     },
     {
       'name': 'xl:align-top',
       'description': 'vertical-align: top;'
     },
     {
       'name': 'xl:align-middle',
       'description': 'vertical-align: middle;'
     },
     {
       'name': 'xl:align-bottom',
       'description': 'vertical-align: bottom;'
     },
     {
       'name': 'xl:align-text-top',
       'description': 'vertical-align: text-top;'
     },
     {
       'name': 'xl:align-text-bottom',
       'description': 'vertical-align: text-bottom;'
     },
     {
       'name': 'xl:visible',
       'description': 'visibility: visible;'
     },
     {
       'name': 'xl:invisible',
       'description': 'visibility: hidden;'
     },
     {
       'name': 'xl:whitespace-normal',
       'description': 'white-space: normal;'
     },
     {
       'name': 'xl:whitespace-no-wrap',
       'description': 'white-space: nowrap;'
     },
     {
       'name': 'xl:whitespace-pre',
       'description': 'white-space: pre;'
     },
     {
       'name': 'xl:whitespace-pre-line',
       'description': 'white-space: pre-line;'
     },
     {
       'name': 'xl:whitespace-pre-wrap',
       'description': 'white-space: pre-wrap;'
     },
     {
       'name': 'xl:break-words',
       'description': 'word-wrap: break-word;'
     },
     {
       'name': 'xl:break-normal',
       'description': 'word-wrap: normal;'
     },
     {
       'name': 'xl:truncate',
       'description': 'overflow: hidden; text-overflow: ellipsis; white-space: nowrap;'
     },
     {
       'name': 'xl:w-1',
       'description': 'width: .25rem;'
     },
     {
       'name': 'xl:w-2',
       'description': 'width: .5rem;'
     },
     {
       'name': 'xl:w-3',
       'description': 'width: .75rem;'
     },
     {
       'name': 'xl:w-4',
       'description': 'width: 1rem;'
     },
     {
       'name': 'xl:w-5',
       'description': 'width: 1.25rem;'
     },
     {
       'name': 'xl:w-6',
       'description': 'width: 1.5rem;'
     },
     {
       'name': 'xl:w-8',
       'description': 'width: 2rem;'
     },
     {
       'name': 'xl:w-10',
       'description': 'width: 2.5rem;'
     },
     {
       'name': 'xl:w-12',
       'description': 'width: 3rem;'
     },
     {
       'name': 'xl:w-16',
       'description': 'width: 4rem;'
     },
     {
       'name': 'xl:w-24',
       'description': 'width: 6rem;'
     },
     {
       'name': 'xl:w-32',
       'description': 'width: 8rem;'
     },
     {
       'name': 'xl:w-48',
       'description': 'width: 12rem;'
     },
     {
       'name': 'xl:w-64',
       'description': 'width: 16rem;'
     },
     {
       'name': 'xl:w-auto',
       'description': 'width: auto;'
     },
     {
       'name': 'xl:w-px',
       'description': 'width: 1px;'
     },
     {
       'name': 'xl:w-1/2',
       'description': 'width: 50%;'
     },
     {
       'name': 'xl:w-1/3',
       'description': 'width: 33.33333%;'
     },
     {
       'name': 'xl:w-2/3',
       'description': 'width: 66.66667%;'
     },
     {
       'name': 'xl:w-1/4',
       'description': 'width: 25%;'
     },
     {
       'name': 'xl:w-3/4',
       'description': 'width: 75%;'
     },
     {
       'name': 'xl:w-1/5',
       'description': 'width: 20%;'
     },
     {
       'name': 'xl:w-2/5',
       'description': 'width: 40%;'
     },
     {
       'name': 'xl:w-3/5',
       'description': 'width: 60%;'
     },
     {
       'name': 'xl:w-4/5',
       'description': 'width: 80%;'
     },
     {
       'name': 'xl:w-1/6',
       'description': 'width: 16.66667%;'
     },
     {
       'name': 'xl:w-5/6',
       'description': 'width: 83.33333%;'
     },
     {
       'name': 'xl:w-full',
       'description': 'width: 100%;'
     },
     {
       'name': 'xl:w-screen',
       'description': 'width: 100vw;'
     },
     {
       'name': 'xl:z-0',
       'description': 'z-index: 0;'
     },
     {
       'name': 'xl:z-10',
       'description': 'z-index: 10;'
     },
     {
       'name': 'xl:z-20',
       'description': 'z-index: 20;'
     },
     {
       'name': 'xl:z-30',
       'description': 'z-index: 30;'
     },
     {
       'name': 'xl:z-40',
       'description': 'z-index: 40;'
     },
     {
       'name': 'xl:z-50',
       'description': 'z-index: 50;'
     },
     {
       'name': 'xl:z-auto',
       'description': 'z-index: auto;'
     }

    ];
    $scope.columns = [
      {
        'name': 'Name',
        'identificator': 'name',
        'settings': {
          'sortable': true
        }
      }, {
        'name': 'Description'
      }
    ];
  });

  angular.module('ngMdTables', ['ngMaterial']).directive('ngMdTable', function($filter) {
    return {
      restrict: 'E',
      scope: {
        tableName: '@tableName',
        data: '=data',
        columns: '=',
        pageSize: '=pageSize',
        showSearch: '=showSearch',
        showPagination: '=showPagination',
        isLoaded: '='
      },
      templateUrl: 'ngMdTable/table.html',
      link: function(scope, element) {
        scope.currentPage = 0;
        scope.showSearch = scope.showSearch || false;
        scope.showPagination = scope.showPagination || false;
        if (scope.isLoaded === void 0) {
          scope.isLoaded = true;
        }
        scope.$watch('searchInput', function() {
          if (scope.currentPage >= scope.numberOfPages()) {
            scope.currentPage = 0;
          }
        });
        scope.order = function(predicate, reverse) {
          var dataAfterFiltration;
          dataAfterFiltration = $filter('filter')(scope.data, scope.searchInput);
          scope.lastPredicate = predicate;
          scope.reverse = reverse;
          scope.data = $filter('orderBy')(dataAfterFiltration, predicate, reverse);
        };
        scope.numberOfPages = function() {
          var dataAfterFiltration;
          dataAfterFiltration = $filter('filter')(scope.data, scope.searchInput);
          return Math.ceil(dataAfterFiltration.length / scope.pageSize);
        };
        scope.showArrowUp = function(columnName, reverse) {
          return scope.lastPredicate === columnName && !reverse;
        };
        scope.showArrowDown = function(columnName, reverse) {
          return scope.lastPredicate === columnName && reverse;
        };
      }
    };
  }).filter('startFrom', function() {
    return function(input, start) {
      start = +start;
      return input.slice(start);
    };
  }).filter('floor', function() {
    return function(input) {
      return Math.floor(input);
    };
  }).filter('search', function() {
    return function(array, searcherInput) {
      return Math.floor(input);
    };
  }).run([
    '$templateCache', function($templateCache) {
      $templateCache.put('ngMdTable/table.html', '<div> <section class="loading-animation" ng-show="isLoaded"> <md-toolbar class="table-toolbar md-primary"> <div class="md-toolbar-tools"><h1>{{tableName}}</h1> <div class="center-outer"> <div class="center-inner"><md-button href="https://raw.githubusercontent.com/Alicannklc/intellij-tailwind-css/master/Tailwind%20Cheat%20Sheet%20.pdf" class="md-accent md-raised">Pdf Download</md-button><md-button href="https://github.com/Alicannklc/intellij-tailwind-css" class="md-accent md-raised">Github</md-button> <md-button href="https://alicannklc.github.io/intellij-tailwind-css/v.1.0.0" class="md-accent md-raised">V 1.0.0</md-button> <md-button href="https://plugins.jetbrains.com/plugin/12074-tailwindcss" class="md-accent md-raised">Plugin Url</md-button></div></div><span flex></span> <md-input-container class="toolbar-input" ng-show="showSearch"> <label>Search by...</label> <input ng-model="searchInput"> </md-input-container> </div> </md-toolbar> <table class="md-table" ng-show="filtered.length"> <!--Columns section--> <tr> <th ng-init="reverse = false;" ng-repeat="column in columns" style="width:{{100/columns.length | floor}}%"> <span class="pointer" ng-class="{sortationActive: lastPredicate === column.identificator}" ng-if="column.settings.sortable"> <a ng-click="reverse=!reverse;order(column.identificator, reverse)">{{column.name}}</a> <!--Sorting direction indicators--> <span> <span ng-if="showArrowUp(column.identificator, reverse)">&#x25B2;</span> <span ng-if="showArrowDown(column.identificator, reverse)">&#x25BC;</span> </span> <!--/Sorting direction indicators--> <!--Show that sorting is possible--> <span class="can-be-sorted" ng-if="(lastPredicate !== column.identificator)"> <span>&#x25B2;</span> <span>&#x25BC;</span> </span> <!--/Show that sorting is possible--> </span> <!--Non sortable column--> <span ng-if="!column.settings.sortable"> <a>{{column.name}}</a> </span> <!--/Non sortable column--> </th> </tr> <!--/Columns section--> <!--Data rows--> <tr ng-repeat="row in filtered = (data | startFrom:currentPage*pageSize | filter: searchInput | limitTo:pageSize )"> <td ng-repeat="(key, val) in row"> {{val}} </td> </tr> <!--/Data rows--> </table> <div class="no-results" ng-show="(filtered.length === 0 && searchInput)"> <h1>Sorry not found Tailwind Cheat Sheet.</h1> </div> <div class="no-results" ng-if="(filtered.length === 0 && !searchInput)"> <h1>No data to load!</h1> </div> <!--Table footer with pagination--> <footer class="table-footer" layout-wrap layout="row" ng-show="pageSize"> <div flex="33" layout-align="start center" layout="row"> <md-button ng-click="currentPage=currentPage-1" ng-disabled="currentPage === 0"> Previous </md-button> </div> <div flex="33" layout-align="center center" layout="row"> <h3>{{currentPage+1}}/{{numberOfPages()}}</h3> </div> <div flex="33" layout-align="end center" layout="row"> <md-button ng-click="currentPage=currentPage+1" ng-disabled="currentPage + 1 >= numberOfPages()"> Next </md-button> </div> </footer> <!--/Table footer with pagination--> </section> </div>');
    }
  ]);

}).call(this);
