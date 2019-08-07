(function() {
  angular.module('angularMaterialTableApp', ['ngMdTables', 'ngMaterial']).controller('MainCtrl', function($scope, $timeout) {
    $timeout((function() {
      $scope.loaded = true;
    }), 1500);
    $scope.data = [
{
   "name": "container",
   "description": "width: 100%;"
 },
 {
   "name": "appearance-none",
   "description": "appearance: none;"
 },
 {
   "name": "bg-fixed",
   "description": "background-attachment: fixed;"
 },
 {
   "name": "bg-local",
   "description": "background-attachment: local;"
 },
 {
   "name": "bg-scroll",
   "description": "background-attachment: scroll;"
 },
 {
   "name": "bg-transparent",
   "description": "background-color: transparent;"
 },
 {
   "name": "bg-black",
   "description": "background-color: #000;"
 },
 {
   "name": "bg-white",
   "description": "background-color: #fff;"
 },
 {
   "name": "bg-gray-100",
   "description": "background-color: #f7fafc;"
 },
 {
   "name": "bg-gray-200",
   "description": "background-color: #edf2f7;"
 },
 {
   "name": "bg-gray-300",
   "description": "background-color: #e2e8f0;"
 },
 {
   "name": "bg-gray-400",
   "description": "background-color: #cbd5e0;"
 },
 {
   "name": "bg-gray-500",
   "description": "background-color: #a0aec0;"
 },
 {
   "name": "bg-gray-600",
   "description": "background-color: #718096;"
 },
 {
   "name": "bg-gray-700",
   "description": "background-color: #4a5568;"
 },
 {
   "name": "bg-gray-800",
   "description": "background-color: #2d3748;"
 },
 {
   "name": "bg-gray-900",
   "description": "background-color: #1a202c;"
 },
 {
   "name": "bg-red-100",
   "description": "background-color: #fff5f5;"
 },
 {
   "name": "bg-red-200",
   "description": "background-color: #fed7d7;"
 },
 {
   "name": "bg-red-300",
   "description": "background-color: #feb2b2;"
 },
 {
   "name": "bg-red-400",
   "description": "background-color: #fc8181;"
 },
 {
   "name": "bg-red-500",
   "description": "background-color: #f56565;"
 },
 {
   "name": "bg-red-600",
   "description": "background-color: #e53e3e;"
 },
 {
   "name": "bg-red-700",
   "description": "background-color: #c53030;"
 },
 {
   "name": "bg-red-800",
   "description": "background-color: #9b2c2c;"
 },
 {
   "name": "bg-red-900",
   "description": "background-color: #742a2a;"
 },
 {
   "name": "bg-orange-100",
   "description": "background-color: #fffaf0;"
 },
 {
   "name": "bg-orange-200",
   "description": "background-color: #feebc8;"
 },
 {
   "name": "bg-orange-300",
   "description": "background-color: #fbd38d;"
 },
 {
   "name": "bg-orange-400",
   "description": "background-color: #f6ad55;"
 },
 {
   "name": "bg-orange-500",
   "description": "background-color: #ed8936;"
 },
 {
   "name": "bg-orange-600",
   "description": "background-color: #dd6b20;"
 },
 {
   "name": "bg-orange-700",
   "description": "background-color: #c05621;"
 },
 {
   "name": "bg-orange-800",
   "description": "background-color: #9c4221;"
 },
 {
   "name": "bg-orange-900",
   "description": "background-color: #7b341e;"
 },
 {
   "name": "bg-yellow-100",
   "description": "background-color: #fffff0;"
 },
 {
   "name": "bg-yellow-200",
   "description": "background-color: #fefcbf;"
 },
 {
   "name": "bg-yellow-300",
   "description": "background-color: #faf089;"
 },
 {
   "name": "bg-yellow-400",
   "description": "background-color: #f6e05e;"
 },
 {
   "name": "bg-yellow-500",
   "description": "background-color: #ecc94b;"
 },
 {
   "name": "bg-yellow-600",
   "description": "background-color: #d69e2e;"
 },
 {
   "name": "bg-yellow-700",
   "description": "background-color: #b7791f;"
 },
 {
   "name": "bg-yellow-800",
   "description": "background-color: #975a16;"
 },
 {
   "name": "bg-yellow-900",
   "description": "background-color: #744210;"
 },
 {
   "name": "bg-green-100",
   "description": "background-color: #f0fff4;"
 },
 {
   "name": "bg-green-200",
   "description": "background-color: #c6f6d5;"
 },
 {
   "name": "bg-green-300",
   "description": "background-color: #9ae6b4;"
 },
 {
   "name": "bg-green-400",
   "description": "background-color: #68d391;"
 },
 {
   "name": "bg-green-500",
   "description": "background-color: #48bb78;"
 },
 {
   "name": "bg-green-600",
   "description": "background-color: #38a169;"
 },
 {
   "name": "bg-green-700",
   "description": "background-color: #2f855a;"
 },
 {
   "name": "bg-green-800",
   "description": "background-color: #276749;"
 },
 {
   "name": "bg-green-900",
   "description": "background-color: #22543d;"
 },
 {
   "name": "bg-teal-100",
   "description": "background-color: #e6fffa;"
 },
 {
   "name": "bg-teal-200",
   "description": "background-color: #b2f5ea;"
 },
 {
   "name": "bg-teal-300",
   "description": "background-color: #81e6d9;"
 },
 {
   "name": "bg-teal-400",
   "description": "background-color: #4fd1c5;"
 },
 {
   "name": "bg-teal-500",
   "description": "background-color: #38b2ac;"
 },
 {
   "name": "bg-teal-600",
   "description": "background-color: #319795;"
 },
 {
   "name": "bg-teal-700",
   "description": "background-color: #2c7a7b;"
 },
 {
   "name": "bg-teal-800",
   "description": "background-color: #285e61;"
 },
 {
   "name": "bg-teal-900",
   "description": "background-color: #234e52;"
 },
 {
   "name": "bg-blue-100",
   "description": "background-color: #ebf8ff;"
 },
 {
   "name": "bg-blue-200",
   "description": "background-color: #bee3f8;"
 },
 {
   "name": "bg-blue-300",
   "description": "background-color: #90cdf4;"
 },
 {
   "name": "bg-blue-400",
   "description": "background-color: #63b3ed;"
 },
 {
   "name": "bg-blue-500",
   "description": "background-color: #4299e1;"
 },
 {
   "name": "bg-blue-600",
   "description": "background-color: #3182ce;"
 },
 {
   "name": "bg-blue-700",
   "description": "background-color: #2b6cb0;"
 },
 {
   "name": "bg-blue-800",
   "description": "background-color: #2c5282;"
 },
 {
   "name": "bg-blue-900",
   "description": "background-color: #2a4365;"
 },
 {
   "name": "bg-indigo-100",
   "description": "background-color: #ebf4ff;"
 },
 {
   "name": "bg-indigo-200",
   "description": "background-color: #c3dafe;"
 },
 {
   "name": "bg-indigo-300",
   "description": "background-color: #a3bffa;"
 },
 {
   "name": "bg-indigo-400",
   "description": "background-color: #7f9cf5;"
 },
 {
   "name": "bg-indigo-500",
   "description": "background-color: #667eea;"
 },
 {
   "name": "bg-indigo-600",
   "description": "background-color: #5a67d8;"
 },
 {
   "name": "bg-indigo-700",
   "description": "background-color: #4c51bf;"
 },
 {
   "name": "bg-indigo-800",
   "description": "background-color: #434190;"
 },
 {
   "name": "bg-indigo-900",
   "description": "background-color: #3c366b;"
 },
 {
   "name": "bg-purple-100",
   "description": "background-color: #faf5ff;"
 },
 {
   "name": "bg-purple-200",
   "description": "background-color: #e9d8fd;"
 },
 {
   "name": "bg-purple-300",
   "description": "background-color: #d6bcfa;"
 },
 {
   "name": "bg-purple-400",
   "description": "background-color: #b794f4;"
 },
 {
   "name": "bg-purple-500",
   "description": "background-color: #9f7aea;"
 },
 {
   "name": "bg-purple-600",
   "description": "background-color: #805ad5;"
 },
 {
   "name": "bg-purple-700",
   "description": "background-color: #6b46c1;"
 },
 {
   "name": "bg-purple-800",
   "description": "background-color: #553c9a;"
 },
 {
   "name": "bg-purple-900",
   "description": "background-color: #44337a;"
 },
 {
   "name": "bg-pink-100",
   "description": "background-color: #fff5f7;"
 },
 {
   "name": "bg-pink-200",
   "description": "background-color: #fed7e2;"
 },
 {
   "name": "bg-pink-300",
   "description": "background-color: #fbb6ce;"
 },
 {
   "name": "bg-pink-400",
   "description": "background-color: #f687b3;"
 },
 {
   "name": "bg-pink-500",
   "description": "background-color: #ed64a6;"
 },
 {
   "name": "bg-pink-600",
   "description": "background-color: #d53f8c;"
 },
 {
   "name": "bg-pink-700",
   "description": "background-color: #b83280;"
 },
 {
   "name": "bg-pink-800",
   "description": "background-color: #97266d;"
 },
 {
   "name": "bg-pink-900",
   "description": "background-color: #702459;"
 },
 {
   "name": "hover:bg-transparent",
   "description": "background-color: transparent;"
 },
 {
   "name": "hover:bg-black",
   "description": "background-color: #000;"
 },
 {
   "name": "hover:bg-white",
   "description": "background-color: #fff;"
 },
 {
   "name": "hover:bg-gray-100",
   "description": "background-color: #f7fafc;"
 },
 {
   "name": "hover:bg-gray-200",
   "description": "background-color: #edf2f7;"
 },
 {
   "name": "hover:bg-gray-300",
   "description": "background-color: #e2e8f0;"
 },
 {
   "name": "hover:bg-gray-400",
   "description": "background-color: #cbd5e0;"
 },
 {
   "name": "hover:bg-gray-500",
   "description": "background-color: #a0aec0;"
 },
 {
   "name": "hover:bg-gray-600",
   "description": "background-color: #718096;"
 },
 {
   "name": "hover:bg-gray-700",
   "description": "background-color: #4a5568;"
 },
 {
   "name": "hover:bg-gray-800",
   "description": "background-color: #2d3748;"
 },
 {
   "name": "hover:bg-gray-900",
   "description": "background-color: #1a202c;"
 },
 {
   "name": "hover:bg-red-100",
   "description": "background-color: #fff5f5;"
 },
 {
   "name": "hover:bg-red-200",
   "description": "background-color: #fed7d7;"
 },
 {
   "name": "hover:bg-red-300",
   "description": "background-color: #feb2b2;"
 },
 {
   "name": "hover:bg-red-400",
   "description": "background-color: #fc8181;"
 },
 {
   "name": "hover:bg-red-500",
   "description": "background-color: #f56565;"
 },
 {
   "name": "hover:bg-red-600",
   "description": "background-color: #e53e3e;"
 },
 {
   "name": "hover:bg-red-700",
   "description": "background-color: #c53030;"
 },
 {
   "name": "hover:bg-red-800",
   "description": "background-color: #9b2c2c;"
 },
 {
   "name": "hover:bg-red-900",
   "description": "background-color: #742a2a;"
 },
 {
   "name": "hover:bg-orange-100",
   "description": "background-color: #fffaf0;"
 },
 {
   "name": "hover:bg-orange-200",
   "description": "background-color: #feebc8;"
 },
 {
   "name": "hover:bg-orange-300",
   "description": "background-color: #fbd38d;"
 },
 {
   "name": "hover:bg-orange-400",
   "description": "background-color: #f6ad55;"
 },
 {
   "name": "hover:bg-orange-500",
   "description": "background-color: #ed8936;"
 },
 {
   "name": "hover:bg-orange-600",
   "description": "background-color: #dd6b20;"
 },
 {
   "name": "hover:bg-orange-700",
   "description": "background-color: #c05621;"
 },
 {
   "name": "hover:bg-orange-800",
   "description": "background-color: #9c4221;"
 },
 {
   "name": "hover:bg-orange-900",
   "description": "background-color: #7b341e;"
 },
 {
   "name": "hover:bg-yellow-100",
   "description": "background-color: #fffff0;"
 },
 {
   "name": "hover:bg-yellow-200",
   "description": "background-color: #fefcbf;"
 },
 {
   "name": "hover:bg-yellow-300",
   "description": "background-color: #faf089;"
 },
 {
   "name": "hover:bg-yellow-400",
   "description": "background-color: #f6e05e;"
 },
 {
   "name": "hover:bg-yellow-500",
   "description": "background-color: #ecc94b;"
 },
 {
   "name": "hover:bg-yellow-600",
   "description": "background-color: #d69e2e;"
 },
 {
   "name": "hover:bg-yellow-700",
   "description": "background-color: #b7791f;"
 },
 {
   "name": "hover:bg-yellow-800",
   "description": "background-color: #975a16;"
 },
 {
   "name": "hover:bg-yellow-900",
   "description": "background-color: #744210;"
 },
 {
   "name": "hover:bg-green-100",
   "description": "background-color: #f0fff4;"
 },
 {
   "name": "hover:bg-green-200",
   "description": "background-color: #c6f6d5;"
 },
 {
   "name": "hover:bg-green-300",
   "description": "background-color: #9ae6b4;"
 },
 {
   "name": "hover:bg-green-400",
   "description": "background-color: #68d391;"
 },
 {
   "name": "hover:bg-green-500",
   "description": "background-color: #48bb78;"
 },
 {
   "name": "hover:bg-green-600",
   "description": "background-color: #38a169;"
 },
 {
   "name": "hover:bg-green-700",
   "description": "background-color: #2f855a;"
 },
 {
   "name": "hover:bg-green-800",
   "description": "background-color: #276749;"
 },
 {
   "name": "hover:bg-green-900",
   "description": "background-color: #22543d;"
 },
 {
   "name": "hover:bg-teal-100",
   "description": "background-color: #e6fffa;"
 },
 {
   "name": "hover:bg-teal-200",
   "description": "background-color: #b2f5ea;"
 },
 {
   "name": "hover:bg-teal-300",
   "description": "background-color: #81e6d9;"
 },
 {
   "name": "hover:bg-teal-400",
   "description": "background-color: #4fd1c5;"
 },
 {
   "name": "hover:bg-teal-500",
   "description": "background-color: #38b2ac;"
 },
 {
   "name": "hover:bg-teal-600",
   "description": "background-color: #319795;"
 },
 {
   "name": "hover:bg-teal-700",
   "description": "background-color: #2c7a7b;"
 },
 {
   "name": "hover:bg-teal-800",
   "description": "background-color: #285e61;"
 },
 {
   "name": "hover:bg-teal-900",
   "description": "background-color: #234e52;"
 },
 {
   "name": "hover:bg-blue-100",
   "description": "background-color: #ebf8ff;"
 },
 {
   "name": "hover:bg-blue-200",
   "description": "background-color: #bee3f8;"
 },
 {
   "name": "hover:bg-blue-300",
   "description": "background-color: #90cdf4;"
 },
 {
   "name": "hover:bg-blue-400",
   "description": "background-color: #63b3ed;"
 },
 {
   "name": "hover:bg-blue-500",
   "description": "background-color: #4299e1;"
 },
 {
   "name": "hover:bg-blue-600",
   "description": "background-color: #3182ce;"
 },
 {
   "name": "hover:bg-blue-700",
   "description": "background-color: #2b6cb0;"
 },
 {
   "name": "hover:bg-blue-800",
   "description": "background-color: #2c5282;"
 },
 {
   "name": "hover:bg-blue-900",
   "description": "background-color: #2a4365;"
 },
 {
   "name": "hover:bg-indigo-100",
   "description": "background-color: #ebf4ff;"
 },
 {
   "name": "hover:bg-indigo-200",
   "description": "background-color: #c3dafe;"
 },
 {
   "name": "hover:bg-indigo-300",
   "description": "background-color: #a3bffa;"
 },
 {
   "name": "hover:bg-indigo-400",
   "description": "background-color: #7f9cf5;"
 },
 {
   "name": "hover:bg-indigo-500",
   "description": "background-color: #667eea;"
 },
 {
   "name": "hover:bg-indigo-600",
   "description": "background-color: #5a67d8;"
 },
 {
   "name": "hover:bg-indigo-700",
   "description": "background-color: #4c51bf;"
 },
 {
   "name": "hover:bg-indigo-800",
   "description": "background-color: #434190;"
 },
 {
   "name": "hover:bg-indigo-900",
   "description": "background-color: #3c366b;"
 },
 {
   "name": "hover:bg-purple-100",
   "description": "background-color: #faf5ff;"
 },
 {
   "name": "hover:bg-purple-200",
   "description": "background-color: #e9d8fd;"
 },
 {
   "name": "hover:bg-purple-300",
   "description": "background-color: #d6bcfa;"
 },
 {
   "name": "hover:bg-purple-400",
   "description": "background-color: #b794f4;"
 },
 {
   "name": "hover:bg-purple-500",
   "description": "background-color: #9f7aea;"
 },
 {
   "name": "hover:bg-purple-600",
   "description": "background-color: #805ad5;"
 },
 {
   "name": "hover:bg-purple-700",
   "description": "background-color: #6b46c1;"
 },
 {
   "name": "hover:bg-purple-800",
   "description": "background-color: #553c9a;"
 },
 {
   "name": "hover:bg-purple-900",
   "description": "background-color: #44337a;"
 },
 {
   "name": "hover:bg-pink-100",
   "description": "background-color: #fff5f7;"
 },
 {
   "name": "hover:bg-pink-200",
   "description": "background-color: #fed7e2;"
 },
 {
   "name": "hover:bg-pink-300",
   "description": "background-color: #fbb6ce;"
 },
 {
   "name": "hover:bg-pink-400",
   "description": "background-color: #f687b3;"
 },
 {
   "name": "hover:bg-pink-500",
   "description": "background-color: #ed64a6;"
 },
 {
   "name": "hover:bg-pink-600",
   "description": "background-color: #d53f8c;"
 },
 {
   "name": "hover:bg-pink-700",
   "description": "background-color: #b83280;"
 },
 {
   "name": "hover:bg-pink-800",
   "description": "background-color: #97266d;"
 },
 {
   "name": "hover:bg-pink-900",
   "description": "background-color: #702459;"
 },
 {
   "name": "focus:bg-transparent",
   "description": "background-color: transparent;"
 },
 {
   "name": "focus:bg-black",
   "description": "background-color: #000;"
 },
 {
   "name": "focus:bg-white",
   "description": "background-color: #fff;"
 },
 {
   "name": "focus:bg-gray-100",
   "description": "background-color: #f7fafc;"
 },
 {
   "name": "focus:bg-gray-200",
   "description": "background-color: #edf2f7;"
 },
 {
   "name": "focus:bg-gray-300",
   "description": "background-color: #e2e8f0;"
 },
 {
   "name": "focus:bg-gray-400",
   "description": "background-color: #cbd5e0;"
 },
 {
   "name": "focus:bg-gray-500",
   "description": "background-color: #a0aec0;"
 },
 {
   "name": "focus:bg-gray-600",
   "description": "background-color: #718096;"
 },
 {
   "name": "focus:bg-gray-700",
   "description": "background-color: #4a5568;"
 },
 {
   "name": "focus:bg-gray-800",
   "description": "background-color: #2d3748;"
 },
 {
   "name": "focus:bg-gray-900",
   "description": "background-color: #1a202c;"
 },
 {
   "name": "focus:bg-red-100",
   "description": "background-color: #fff5f5;"
 },
 {
   "name": "focus:bg-red-200",
   "description": "background-color: #fed7d7;"
 },
 {
   "name": "focus:bg-red-300",
   "description": "background-color: #feb2b2;"
 },
 {
   "name": "focus:bg-red-400",
   "description": "background-color: #fc8181;"
 },
 {
   "name": "focus:bg-red-500",
   "description": "background-color: #f56565;"
 },
 {
   "name": "focus:bg-red-600",
   "description": "background-color: #e53e3e;"
 },
 {
   "name": "focus:bg-red-700",
   "description": "background-color: #c53030;"
 },
 {
   "name": "focus:bg-red-800",
   "description": "background-color: #9b2c2c;"
 },
 {
   "name": "focus:bg-red-900",
   "description": "background-color: #742a2a;"
 },
 {
   "name": "focus:bg-orange-100",
   "description": "background-color: #fffaf0;"
 },
 {
   "name": "focus:bg-orange-200",
   "description": "background-color: #feebc8;"
 },
 {
   "name": "focus:bg-orange-300",
   "description": "background-color: #fbd38d;"
 },
 {
   "name": "focus:bg-orange-400",
   "description": "background-color: #f6ad55;"
 },
 {
   "name": "focus:bg-orange-500",
   "description": "background-color: #ed8936;"
 },
 {
   "name": "focus:bg-orange-600",
   "description": "background-color: #dd6b20;"
 },
 {
   "name": "focus:bg-orange-700",
   "description": "background-color: #c05621;"
 },
 {
   "name": "focus:bg-orange-800",
   "description": "background-color: #9c4221;"
 },
 {
   "name": "focus:bg-orange-900",
   "description": "background-color: #7b341e;"
 },
 {
   "name": "focus:bg-yellow-100",
   "description": "background-color: #fffff0;"
 },
 {
   "name": "focus:bg-yellow-200",
   "description": "background-color: #fefcbf;"
 },
 {
   "name": "focus:bg-yellow-300",
   "description": "background-color: #faf089;"
 },
 {
   "name": "focus:bg-yellow-400",
   "description": "background-color: #f6e05e;"
 },
 {
   "name": "focus:bg-yellow-500",
   "description": "background-color: #ecc94b;"
 },
 {
   "name": "focus:bg-yellow-600",
   "description": "background-color: #d69e2e;"
 },
 {
   "name": "focus:bg-yellow-700",
   "description": "background-color: #b7791f;"
 },
 {
   "name": "focus:bg-yellow-800",
   "description": "background-color: #975a16;"
 },
 {
   "name": "focus:bg-yellow-900",
   "description": "background-color: #744210;"
 },
 {
   "name": "focus:bg-green-100",
   "description": "background-color: #f0fff4;"
 },
 {
   "name": "focus:bg-green-200",
   "description": "background-color: #c6f6d5;"
 },
 {
   "name": "focus:bg-green-300",
   "description": "background-color: #9ae6b4;"
 },
 {
   "name": "focus:bg-green-400",
   "description": "background-color: #68d391;"
 },
 {
   "name": "focus:bg-green-500",
   "description": "background-color: #48bb78;"
 },
 {
   "name": "focus:bg-green-600",
   "description": "background-color: #38a169;"
 },
 {
   "name": "focus:bg-green-700",
   "description": "background-color: #2f855a;"
 },
 {
   "name": "focus:bg-green-800",
   "description": "background-color: #276749;"
 },
 {
   "name": "focus:bg-green-900",
   "description": "background-color: #22543d;"
 },
 {
   "name": "focus:bg-teal-100",
   "description": "background-color: #e6fffa;"
 },
 {
   "name": "focus:bg-teal-200",
   "description": "background-color: #b2f5ea;"
 },
 {
   "name": "focus:bg-teal-300",
   "description": "background-color: #81e6d9;"
 },
 {
   "name": "focus:bg-teal-400",
   "description": "background-color: #4fd1c5;"
 },
 {
   "name": "focus:bg-teal-500",
   "description": "background-color: #38b2ac;"
 },
 {
   "name": "focus:bg-teal-600",
   "description": "background-color: #319795;"
 },
 {
   "name": "focus:bg-teal-700",
   "description": "background-color: #2c7a7b;"
 },
 {
   "name": "focus:bg-teal-800",
   "description": "background-color: #285e61;"
 },
 {
   "name": "focus:bg-teal-900",
   "description": "background-color: #234e52;"
 },
 {
   "name": "focus:bg-blue-100",
   "description": "background-color: #ebf8ff;"
 },
 {
   "name": "focus:bg-blue-200",
   "description": "background-color: #bee3f8;"
 },
 {
   "name": "focus:bg-blue-300",
   "description": "background-color: #90cdf4;"
 },
 {
   "name": "focus:bg-blue-400",
   "description": "background-color: #63b3ed;"
 },
 {
   "name": "focus:bg-blue-500",
   "description": "background-color: #4299e1;"
 },
 {
   "name": "focus:bg-blue-600",
   "description": "background-color: #3182ce;"
 },
 {
   "name": "focus:bg-blue-700",
   "description": "background-color: #2b6cb0;"
 },
 {
   "name": "focus:bg-blue-800",
   "description": "background-color: #2c5282;"
 },
 {
   "name": "focus:bg-blue-900",
   "description": "background-color: #2a4365;"
 },
 {
   "name": "focus:bg-indigo-100",
   "description": "background-color: #ebf4ff;"
 },
 {
   "name": "focus:bg-indigo-200",
   "description": "background-color: #c3dafe;"
 },
 {
   "name": "focus:bg-indigo-300",
   "description": "background-color: #a3bffa;"
 },
 {
   "name": "focus:bg-indigo-400",
   "description": "background-color: #7f9cf5;"
 },
 {
   "name": "focus:bg-indigo-500",
   "description": "background-color: #667eea;"
 },
 {
   "name": "focus:bg-indigo-600",
   "description": "background-color: #5a67d8;"
 },
 {
   "name": "focus:bg-indigo-700",
   "description": "background-color: #4c51bf;"
 },
 {
   "name": "focus:bg-indigo-800",
   "description": "background-color: #434190;"
 },
 {
   "name": "focus:bg-indigo-900",
   "description": "background-color: #3c366b;"
 },
 {
   "name": "focus:bg-purple-100",
   "description": "background-color: #faf5ff;"
 },
 {
   "name": "focus:bg-purple-200",
   "description": "background-color: #e9d8fd;"
 },
 {
   "name": "focus:bg-purple-300",
   "description": "background-color: #d6bcfa;"
 },
 {
   "name": "focus:bg-purple-400",
   "description": "background-color: #b794f4;"
 },
 {
   "name": "focus:bg-purple-500",
   "description": "background-color: #9f7aea;"
 },
 {
   "name": "focus:bg-purple-600",
   "description": "background-color: #805ad5;"
 },
 {
   "name": "focus:bg-purple-700",
   "description": "background-color: #6b46c1;"
 },
 {
   "name": "focus:bg-purple-800",
   "description": "background-color: #553c9a;"
 },
 {
   "name": "focus:bg-purple-900",
   "description": "background-color: #44337a;"
 },
 {
   "name": "focus:bg-pink-100",
   "description": "background-color: #fff5f7;"
 },
 {
   "name": "focus:bg-pink-200",
   "description": "background-color: #fed7e2;"
 },
 {
   "name": "focus:bg-pink-300",
   "description": "background-color: #fbb6ce;"
 },
 {
   "name": "focus:bg-pink-400",
   "description": "background-color: #f687b3;"
 },
 {
   "name": "focus:bg-pink-500",
   "description": "background-color: #ed64a6;"
 },
 {
   "name": "focus:bg-pink-600",
   "description": "background-color: #d53f8c;"
 },
 {
   "name": "focus:bg-pink-700",
   "description": "background-color: #b83280;"
 },
 {
   "name": "focus:bg-pink-800",
   "description": "background-color: #97266d;"
 },
 {
   "name": "focus:bg-pink-900",
   "description": "background-color: #702459;"
 },
 {
   "name": "bg-bottom",
   "description": "background-position: bottom;"
 },
 {
   "name": "bg-center",
   "description": "background-position: center;"
 },
 {
   "name": "bg-left",
   "description": "background-position: left;"
 },
 {
   "name": "bg-left-bottom",
   "description": "background-position: left bottom;"
 },
 {
   "name": "bg-left-top",
   "description": "background-position: left top;"
 },
 {
   "name": "bg-right",
   "description": "background-position: right;"
 },
 {
   "name": "bg-right-bottom",
   "description": "background-position: right bottom;"
 },
 {
   "name": "bg-right-top",
   "description": "background-position: right top;"
 },
 {
   "name": "bg-top",
   "description": "background-position: top;"
 },
 {
   "name": "bg-repeat",
   "description": "background-repeat: repeat;"
 },
 {
   "name": "bg-no-repeat",
   "description": "background-repeat: no-repeat;"
 },
 {
   "name": "bg-repeat-x",
   "description": "background-repeat: repeat-x;"
 },
 {
   "name": "bg-repeat-y",
   "description": "background-repeat: repeat-y;"
 },
 {
   "name": "bg-repeat-round",
   "description": "background-repeat: round;"
 },
 {
   "name": "bg-repeat-space",
   "description": "background-repeat: space;"
 },
 {
   "name": "bg-auto",
   "description": "background-size: auto;"
 },
 {
   "name": "bg-cover",
   "description": "background-size: cover;"
 },
 {
   "name": "bg-contain",
   "description": "background-size: contain;"
 },
 {
   "name": "border-collapse",
   "description": "border-collapse: collapse;"
 },
 {
   "name": "border-separate",
   "description": "border-collapse: separate;"
 },
 {
   "name": "border-transparent",
   "description": "border-color: transparent;"
 },
 {
   "name": "border-black",
   "description": "border-color: #000;"
 },
 {
   "name": "border-white",
   "description": "border-color: #fff;"
 },
 {
   "name": "border-gray-100",
   "description": "border-color: #f7fafc;"
 },
 {
   "name": "border-gray-200",
   "description": "border-color: #edf2f7;"
 },
 {
   "name": "border-gray-300",
   "description": "border-color: #e2e8f0;"
 },
 {
   "name": "border-gray-400",
   "description": "border-color: #cbd5e0;"
 },
 {
   "name": "border-gray-500",
   "description": "border-color: #a0aec0;"
 },
 {
   "name": "border-gray-600",
   "description": "border-color: #718096;"
 },
 {
   "name": "border-gray-700",
   "description": "border-color: #4a5568;"
 },
 {
   "name": "border-gray-800",
   "description": "border-color: #2d3748;"
 },
 {
   "name": "border-gray-900",
   "description": "border-color: #1a202c;"
 },
 {
   "name": "border-red-100",
   "description": "border-color: #fff5f5;"
 },
 {
   "name": "border-red-200",
   "description": "border-color: #fed7d7;"
 },
 {
   "name": "border-red-300",
   "description": "border-color: #feb2b2;"
 },
 {
   "name": "border-red-400",
   "description": "border-color: #fc8181;"
 },
 {
   "name": "border-red-500",
   "description": "border-color: #f56565;"
 },
 {
   "name": "border-red-600",
   "description": "border-color: #e53e3e;"
 },
 {
   "name": "border-red-700",
   "description": "border-color: #c53030;"
 },
 {
   "name": "border-red-800",
   "description": "border-color: #9b2c2c;"
 },
 {
   "name": "border-red-900",
   "description": "border-color: #742a2a;"
 },
 {
   "name": "border-orange-100",
   "description": "border-color: #fffaf0;"
 },
 {
   "name": "border-orange-200",
   "description": "border-color: #feebc8;"
 },
 {
   "name": "border-orange-300",
   "description": "border-color: #fbd38d;"
 },
 {
   "name": "border-orange-400",
   "description": "border-color: #f6ad55;"
 },
 {
   "name": "border-orange-500",
   "description": "border-color: #ed8936;"
 },
 {
   "name": "border-orange-600",
   "description": "border-color: #dd6b20;"
 },
 {
   "name": "border-orange-700",
   "description": "border-color: #c05621;"
 },
 {
   "name": "border-orange-800",
   "description": "border-color: #9c4221;"
 },
 {
   "name": "border-orange-900",
   "description": "border-color: #7b341e;"
 },
 {
   "name": "border-yellow-100",
   "description": "border-color: #fffff0;"
 },
 {
   "name": "border-yellow-200",
   "description": "border-color: #fefcbf;"
 },
 {
   "name": "border-yellow-300",
   "description": "border-color: #faf089;"
 },
 {
   "name": "border-yellow-400",
   "description": "border-color: #f6e05e;"
 },
 {
   "name": "border-yellow-500",
   "description": "border-color: #ecc94b;"
 },
 {
   "name": "border-yellow-600",
   "description": "border-color: #d69e2e;"
 },
 {
   "name": "border-yellow-700",
   "description": "border-color: #b7791f;"
 },
 {
   "name": "border-yellow-800",
   "description": "border-color: #975a16;"
 },
 {
   "name": "border-yellow-900",
   "description": "border-color: #744210;"
 },
 {
   "name": "border-green-100",
   "description": "border-color: #f0fff4;"
 },
 {
   "name": "border-green-200",
   "description": "border-color: #c6f6d5;"
 },
 {
   "name": "border-green-300",
   "description": "border-color: #9ae6b4;"
 },
 {
   "name": "border-green-400",
   "description": "border-color: #68d391;"
 },
 {
   "name": "border-green-500",
   "description": "border-color: #48bb78;"
 },
 {
   "name": "border-green-600",
   "description": "border-color: #38a169;"
 },
 {
   "name": "border-green-700",
   "description": "border-color: #2f855a;"
 },
 {
   "name": "border-green-800",
   "description": "border-color: #276749;"
 },
 {
   "name": "border-green-900",
   "description": "border-color: #22543d;"
 },
 {
   "name": "border-teal-100",
   "description": "border-color: #e6fffa;"
 },
 {
   "name": "border-teal-200",
   "description": "border-color: #b2f5ea;"
 },
 {
   "name": "border-teal-300",
   "description": "border-color: #81e6d9;"
 },
 {
   "name": "border-teal-400",
   "description": "border-color: #4fd1c5;"
 },
 {
   "name": "border-teal-500",
   "description": "border-color: #38b2ac;"
 },
 {
   "name": "border-teal-600",
   "description": "border-color: #319795;"
 },
 {
   "name": "border-teal-700",
   "description": "border-color: #2c7a7b;"
 },
 {
   "name": "border-teal-800",
   "description": "border-color: #285e61;"
 },
 {
   "name": "border-teal-900",
   "description": "border-color: #234e52;"
 },
 {
   "name": "border-blue-100",
   "description": "border-color: #ebf8ff;"
 },
 {
   "name": "border-blue-200",
   "description": "border-color: #bee3f8;"
 },
 {
   "name": "border-blue-300",
   "description": "border-color: #90cdf4;"
 },
 {
   "name": "border-blue-400",
   "description": "border-color: #63b3ed;"
 },
 {
   "name": "border-blue-500",
   "description": "border-color: #4299e1;"
 },
 {
   "name": "border-blue-600",
   "description": "border-color: #3182ce;"
 },
 {
   "name": "border-blue-700",
   "description": "border-color: #2b6cb0;"
 },
 {
   "name": "border-blue-800",
   "description": "border-color: #2c5282;"
 },
 {
   "name": "border-blue-900",
   "description": "border-color: #2a4365;"
 },
 {
   "name": "border-indigo-100",
   "description": "border-color: #ebf4ff;"
 },
 {
   "name": "border-indigo-200",
   "description": "border-color: #c3dafe;"
 },
 {
   "name": "border-indigo-300",
   "description": "border-color: #a3bffa;"
 },
 {
   "name": "border-indigo-400",
   "description": "border-color: #7f9cf5;"
 },
 {
   "name": "border-indigo-500",
   "description": "border-color: #667eea;"
 },
 {
   "name": "border-indigo-600",
   "description": "border-color: #5a67d8;"
 },
 {
   "name": "border-indigo-700",
   "description": "border-color: #4c51bf;"
 },
 {
   "name": "border-indigo-800",
   "description": "border-color: #434190;"
 },
 {
   "name": "border-indigo-900",
   "description": "border-color: #3c366b;"
 },
 {
   "name": "border-purple-100",
   "description": "border-color: #faf5ff;"
 },
 {
   "name": "border-purple-200",
   "description": "border-color: #e9d8fd;"
 },
 {
   "name": "border-purple-300",
   "description": "border-color: #d6bcfa;"
 },
 {
   "name": "border-purple-400",
   "description": "border-color: #b794f4;"
 },
 {
   "name": "border-purple-500",
   "description": "border-color: #9f7aea;"
 },
 {
   "name": "border-purple-600",
   "description": "border-color: #805ad5;"
 },
 {
   "name": "border-purple-700",
   "description": "border-color: #6b46c1;"
 },
 {
   "name": "border-purple-800",
   "description": "border-color: #553c9a;"
 },
 {
   "name": "border-purple-900",
   "description": "border-color: #44337a;"
 },
 {
   "name": "border-pink-100",
   "description": "border-color: #fff5f7;"
 },
 {
   "name": "border-pink-200",
   "description": "border-color: #fed7e2;"
 },
 {
   "name": "border-pink-300",
   "description": "border-color: #fbb6ce;"
 },
 {
   "name": "border-pink-400",
   "description": "border-color: #f687b3;"
 },
 {
   "name": "border-pink-500",
   "description": "border-color: #ed64a6;"
 },
 {
   "name": "border-pink-600",
   "description": "border-color: #d53f8c;"
 },
 {
   "name": "border-pink-700",
   "description": "border-color: #b83280;"
 },
 {
   "name": "border-pink-800",
   "description": "border-color: #97266d;"
 },
 {
   "name": "border-pink-900",
   "description": "border-color: #702459;"
 },
 {
   "name": "hover:border-transparent",
   "description": "border-color: transparent;"
 },
 {
   "name": "hover:border-black",
   "description": "border-color: #000;"
 },
 {
   "name": "hover:border-white",
   "description": "border-color: #fff;"
 },
 {
   "name": "hover:border-gray-100",
   "description": "border-color: #f7fafc;"
 },
 {
   "name": "hover:border-gray-200",
   "description": "border-color: #edf2f7;"
 },
 {
   "name": "hover:border-gray-300",
   "description": "border-color: #e2e8f0;"
 },
 {
   "name": "hover:border-gray-400",
   "description": "border-color: #cbd5e0;"
 },
 {
   "name": "hover:border-gray-500",
   "description": "border-color: #a0aec0;"
 },
 {
   "name": "hover:border-gray-600",
   "description": "border-color: #718096;"
 },
 {
   "name": "hover:border-gray-700",
   "description": "border-color: #4a5568;"
 },
 {
   "name": "hover:border-gray-800",
   "description": "border-color: #2d3748;"
 },
 {
   "name": "hover:border-gray-900",
   "description": "border-color: #1a202c;"
 },
 {
   "name": "hover:border-red-100",
   "description": "border-color: #fff5f5;"
 },
 {
   "name": "hover:border-red-200",
   "description": "border-color: #fed7d7;"
 },
 {
   "name": "hover:border-red-300",
   "description": "border-color: #feb2b2;"
 },
 {
   "name": "hover:border-red-400",
   "description": "border-color: #fc8181;"
 },
 {
   "name": "hover:border-red-500",
   "description": "border-color: #f56565;"
 },
 {
   "name": "hover:border-red-600",
   "description": "border-color: #e53e3e;"
 },
 {
   "name": "hover:border-red-700",
   "description": "border-color: #c53030;"
 },
 {
   "name": "hover:border-red-800",
   "description": "border-color: #9b2c2c;"
 },
 {
   "name": "hover:border-red-900",
   "description": "border-color: #742a2a;"
 },
 {
   "name": "hover:border-orange-100",
   "description": "border-color: #fffaf0;"
 },
 {
   "name": "hover:border-orange-200",
   "description": "border-color: #feebc8;"
 },
 {
   "name": "hover:border-orange-300",
   "description": "border-color: #fbd38d;"
 },
 {
   "name": "hover:border-orange-400",
   "description": "border-color: #f6ad55;"
 },
 {
   "name": "hover:border-orange-500",
   "description": "border-color: #ed8936;"
 },
 {
   "name": "hover:border-orange-600",
   "description": "border-color: #dd6b20;"
 },
 {
   "name": "hover:border-orange-700",
   "description": "border-color: #c05621;"
 },
 {
   "name": "hover:border-orange-800",
   "description": "border-color: #9c4221;"
 },
 {
   "name": "hover:border-orange-900",
   "description": "border-color: #7b341e;"
 },
 {
   "name": "hover:border-yellow-100",
   "description": "border-color: #fffff0;"
 },
 {
   "name": "hover:border-yellow-200",
   "description": "border-color: #fefcbf;"
 },
 {
   "name": "hover:border-yellow-300",
   "description": "border-color: #faf089;"
 },
 {
   "name": "hover:border-yellow-400",
   "description": "border-color: #f6e05e;"
 },
 {
   "name": "hover:border-yellow-500",
   "description": "border-color: #ecc94b;"
 },
 {
   "name": "hover:border-yellow-600",
   "description": "border-color: #d69e2e;"
 },
 {
   "name": "hover:border-yellow-700",
   "description": "border-color: #b7791f;"
 },
 {
   "name": "hover:border-yellow-800",
   "description": "border-color: #975a16;"
 },
 {
   "name": "hover:border-yellow-900",
   "description": "border-color: #744210;"
 },
 {
   "name": "hover:border-green-100",
   "description": "border-color: #f0fff4;"
 },
 {
   "name": "hover:border-green-200",
   "description": "border-color: #c6f6d5;"
 },
 {
   "name": "hover:border-green-300",
   "description": "border-color: #9ae6b4;"
 },
 {
   "name": "hover:border-green-400",
   "description": "border-color: #68d391;"
 },
 {
   "name": "hover:border-green-500",
   "description": "border-color: #48bb78;"
 },
 {
   "name": "hover:border-green-600",
   "description": "border-color: #38a169;"
 },
 {
   "name": "hover:border-green-700",
   "description": "border-color: #2f855a;"
 },
 {
   "name": "hover:border-green-800",
   "description": "border-color: #276749;"
 },
 {
   "name": "hover:border-green-900",
   "description": "border-color: #22543d;"
 },
 {
   "name": "hover:border-teal-100",
   "description": "border-color: #e6fffa;"
 },
 {
   "name": "hover:border-teal-200",
   "description": "border-color: #b2f5ea;"
 },
 {
   "name": "hover:border-teal-300",
   "description": "border-color: #81e6d9;"
 },
 {
   "name": "hover:border-teal-400",
   "description": "border-color: #4fd1c5;"
 },
 {
   "name": "hover:border-teal-500",
   "description": "border-color: #38b2ac;"
 },
 {
   "name": "hover:border-teal-600",
   "description": "border-color: #319795;"
 },
 {
   "name": "hover:border-teal-700",
   "description": "border-color: #2c7a7b;"
 },
 {
   "name": "hover:border-teal-800",
   "description": "border-color: #285e61;"
 },
 {
   "name": "hover:border-teal-900",
   "description": "border-color: #234e52;"
 },
 {
   "name": "hover:border-blue-100",
   "description": "border-color: #ebf8ff;"
 },
 {
   "name": "hover:border-blue-200",
   "description": "border-color: #bee3f8;"
 },
 {
   "name": "hover:border-blue-300",
   "description": "border-color: #90cdf4;"
 },
 {
   "name": "hover:border-blue-400",
   "description": "border-color: #63b3ed;"
 },
 {
   "name": "hover:border-blue-500",
   "description": "border-color: #4299e1;"
 },
 {
   "name": "hover:border-blue-600",
   "description": "border-color: #3182ce;"
 },
 {
   "name": "hover:border-blue-700",
   "description": "border-color: #2b6cb0;"
 },
 {
   "name": "hover:border-blue-800",
   "description": "border-color: #2c5282;"
 },
 {
   "name": "hover:border-blue-900",
   "description": "border-color: #2a4365;"
 },
 {
   "name": "hover:border-indigo-100",
   "description": "border-color: #ebf4ff;"
 },
 {
   "name": "hover:border-indigo-200",
   "description": "border-color: #c3dafe;"
 },
 {
   "name": "hover:border-indigo-300",
   "description": "border-color: #a3bffa;"
 },
 {
   "name": "hover:border-indigo-400",
   "description": "border-color: #7f9cf5;"
 },
 {
   "name": "hover:border-indigo-500",
   "description": "border-color: #667eea;"
 },
 {
   "name": "hover:border-indigo-600",
   "description": "border-color: #5a67d8;"
 },
 {
   "name": "hover:border-indigo-700",
   "description": "border-color: #4c51bf;"
 },
 {
   "name": "hover:border-indigo-800",
   "description": "border-color: #434190;"
 },
 {
   "name": "hover:border-indigo-900",
   "description": "border-color: #3c366b;"
 },
 {
   "name": "hover:border-purple-100",
   "description": "border-color: #faf5ff;"
 },
 {
   "name": "hover:border-purple-200",
   "description": "border-color: #e9d8fd;"
 },
 {
   "name": "hover:border-purple-300",
   "description": "border-color: #d6bcfa;"
 },
 {
   "name": "hover:border-purple-400",
   "description": "border-color: #b794f4;"
 },
 {
   "name": "hover:border-purple-500",
   "description": "border-color: #9f7aea;"
 },
 {
   "name": "hover:border-purple-600",
   "description": "border-color: #805ad5;"
 },
 {
   "name": "hover:border-purple-700",
   "description": "border-color: #6b46c1;"
 },
 {
   "name": "hover:border-purple-800",
   "description": "border-color: #553c9a;"
 },
 {
   "name": "hover:border-purple-900",
   "description": "border-color: #44337a;"
 },
 {
   "name": "hover:border-pink-100",
   "description": "border-color: #fff5f7;"
 },
 {
   "name": "hover:border-pink-200",
   "description": "border-color: #fed7e2;"
 },
 {
   "name": "hover:border-pink-300",
   "description": "border-color: #fbb6ce;"
 },
 {
   "name": "hover:border-pink-400",
   "description": "border-color: #f687b3;"
 },
 {
   "name": "hover:border-pink-500",
   "description": "border-color: #ed64a6;"
 },
 {
   "name": "hover:border-pink-600",
   "description": "border-color: #d53f8c;"
 },
 {
   "name": "hover:border-pink-700",
   "description": "border-color: #b83280;"
 },
 {
   "name": "hover:border-pink-800",
   "description": "border-color: #97266d;"
 },
 {
   "name": "hover:border-pink-900",
   "description": "border-color: #702459;"
 },
 {
   "name": "focus:border-transparent",
   "description": "border-color: transparent;"
 },
 {
   "name": "focus:border-black",
   "description": "border-color: #000;"
 },
 {
   "name": "focus:border-white",
   "description": "border-color: #fff;"
 },
 {
   "name": "focus:border-gray-100",
   "description": "border-color: #f7fafc;"
 },
 {
   "name": "focus:border-gray-200",
   "description": "border-color: #edf2f7;"
 },
 {
   "name": "focus:border-gray-300",
   "description": "border-color: #e2e8f0;"
 },
 {
   "name": "focus:border-gray-400",
   "description": "border-color: #cbd5e0;"
 },
 {
   "name": "focus:border-gray-500",
   "description": "border-color: #a0aec0;"
 },
 {
   "name": "focus:border-gray-600",
   "description": "border-color: #718096;"
 },
 {
   "name": "focus:border-gray-700",
   "description": "border-color: #4a5568;"
 },
 {
   "name": "focus:border-gray-800",
   "description": "border-color: #2d3748;"
 },
 {
   "name": "focus:border-gray-900",
   "description": "border-color: #1a202c;"
 },
 {
   "name": "focus:border-red-100",
   "description": "border-color: #fff5f5;"
 },
 {
   "name": "focus:border-red-200",
   "description": "border-color: #fed7d7;"
 },
 {
   "name": "focus:border-red-300",
   "description": "border-color: #feb2b2;"
 },
 {
   "name": "focus:border-red-400",
   "description": "border-color: #fc8181;"
 },
 {
   "name": "focus:border-red-500",
   "description": "border-color: #f56565;"
 },
 {
   "name": "focus:border-red-600",
   "description": "border-color: #e53e3e;"
 },
 {
   "name": "focus:border-red-700",
   "description": "border-color: #c53030;"
 },
 {
   "name": "focus:border-red-800",
   "description": "border-color: #9b2c2c;"
 },
 {
   "name": "focus:border-red-900",
   "description": "border-color: #742a2a;"
 },
 {
   "name": "focus:border-orange-100",
   "description": "border-color: #fffaf0;"
 },
 {
   "name": "focus:border-orange-200",
   "description": "border-color: #feebc8;"
 },
 {
   "name": "focus:border-orange-300",
   "description": "border-color: #fbd38d;"
 },
 {
   "name": "focus:border-orange-400",
   "description": "border-color: #f6ad55;"
 },
 {
   "name": "focus:border-orange-500",
   "description": "border-color: #ed8936;"
 },
 {
   "name": "focus:border-orange-600",
   "description": "border-color: #dd6b20;"
 },
 {
   "name": "focus:border-orange-700",
   "description": "border-color: #c05621;"
 },
 {
   "name": "focus:border-orange-800",
   "description": "border-color: #9c4221;"
 },
 {
   "name": "focus:border-orange-900",
   "description": "border-color: #7b341e;"
 },
 {
   "name": "focus:border-yellow-100",
   "description": "border-color: #fffff0;"
 },
 {
   "name": "focus:border-yellow-200",
   "description": "border-color: #fefcbf;"
 },
 {
   "name": "focus:border-yellow-300",
   "description": "border-color: #faf089;"
 },
 {
   "name": "focus:border-yellow-400",
   "description": "border-color: #f6e05e;"
 },
 {
   "name": "focus:border-yellow-500",
   "description": "border-color: #ecc94b;"
 },
 {
   "name": "focus:border-yellow-600",
   "description": "border-color: #d69e2e;"
 },
 {
   "name": "focus:border-yellow-700",
   "description": "border-color: #b7791f;"
 },
 {
   "name": "focus:border-yellow-800",
   "description": "border-color: #975a16;"
 },
 {
   "name": "focus:border-yellow-900",
   "description": "border-color: #744210;"
 },
 {
   "name": "focus:border-green-100",
   "description": "border-color: #f0fff4;"
 },
 {
   "name": "focus:border-green-200",
   "description": "border-color: #c6f6d5;"
 },
 {
   "name": "focus:border-green-300",
   "description": "border-color: #9ae6b4;"
 },
 {
   "name": "focus:border-green-400",
   "description": "border-color: #68d391;"
 },
 {
   "name": "focus:border-green-500",
   "description": "border-color: #48bb78;"
 },
 {
   "name": "focus:border-green-600",
   "description": "border-color: #38a169;"
 },
 {
   "name": "focus:border-green-700",
   "description": "border-color: #2f855a;"
 },
 {
   "name": "focus:border-green-800",
   "description": "border-color: #276749;"
 },
 {
   "name": "focus:border-green-900",
   "description": "border-color: #22543d;"
 },
 {
   "name": "focus:border-teal-100",
   "description": "border-color: #e6fffa;"
 },
 {
   "name": "focus:border-teal-200",
   "description": "border-color: #b2f5ea;"
 },
 {
   "name": "focus:border-teal-300",
   "description": "border-color: #81e6d9;"
 },
 {
   "name": "focus:border-teal-400",
   "description": "border-color: #4fd1c5;"
 },
 {
   "name": "focus:border-teal-500",
   "description": "border-color: #38b2ac;"
 },
 {
   "name": "focus:border-teal-600",
   "description": "border-color: #319795;"
 },
 {
   "name": "focus:border-teal-700",
   "description": "border-color: #2c7a7b;"
 },
 {
   "name": "focus:border-teal-800",
   "description": "border-color: #285e61;"
 },
 {
   "name": "focus:border-teal-900",
   "description": "border-color: #234e52;"
 },
 {
   "name": "focus:border-blue-100",
   "description": "border-color: #ebf8ff;"
 },
 {
   "name": "focus:border-blue-200",
   "description": "border-color: #bee3f8;"
 },
 {
   "name": "focus:border-blue-300",
   "description": "border-color: #90cdf4;"
 },
 {
   "name": "focus:border-blue-400",
   "description": "border-color: #63b3ed;"
 },
 {
   "name": "focus:border-blue-500",
   "description": "border-color: #4299e1;"
 },
 {
   "name": "focus:border-blue-600",
   "description": "border-color: #3182ce;"
 },
 {
   "name": "focus:border-blue-700",
   "description": "border-color: #2b6cb0;"
 },
 {
   "name": "focus:border-blue-800",
   "description": "border-color: #2c5282;"
 },
 {
   "name": "focus:border-blue-900",
   "description": "border-color: #2a4365;"
 },
 {
   "name": "focus:border-indigo-100",
   "description": "border-color: #ebf4ff;"
 },
 {
   "name": "focus:border-indigo-200",
   "description": "border-color: #c3dafe;"
 },
 {
   "name": "focus:border-indigo-300",
   "description": "border-color: #a3bffa;"
 },
 {
   "name": "focus:border-indigo-400",
   "description": "border-color: #7f9cf5;"
 },
 {
   "name": "focus:border-indigo-500",
   "description": "border-color: #667eea;"
 },
 {
   "name": "focus:border-indigo-600",
   "description": "border-color: #5a67d8;"
 },
 {
   "name": "focus:border-indigo-700",
   "description": "border-color: #4c51bf;"
 },
 {
   "name": "focus:border-indigo-800",
   "description": "border-color: #434190;"
 },
 {
   "name": "focus:border-indigo-900",
   "description": "border-color: #3c366b;"
 },
 {
   "name": "focus:border-purple-100",
   "description": "border-color: #faf5ff;"
 },
 {
   "name": "focus:border-purple-200",
   "description": "border-color: #e9d8fd;"
 },
 {
   "name": "focus:border-purple-300",
   "description": "border-color: #d6bcfa;"
 },
 {
   "name": "focus:border-purple-400",
   "description": "border-color: #b794f4;"
 },
 {
   "name": "focus:border-purple-500",
   "description": "border-color: #9f7aea;"
 },
 {
   "name": "focus:border-purple-600",
   "description": "border-color: #805ad5;"
 },
 {
   "name": "focus:border-purple-700",
   "description": "border-color: #6b46c1;"
 },
 {
   "name": "focus:border-purple-800",
   "description": "border-color: #553c9a;"
 },
 {
   "name": "focus:border-purple-900",
   "description": "border-color: #44337a;"
 },
 {
   "name": "focus:border-pink-100",
   "description": "border-color: #fff5f7;"
 },
 {
   "name": "focus:border-pink-200",
   "description": "border-color: #fed7e2;"
 },
 {
   "name": "focus:border-pink-300",
   "description": "border-color: #fbb6ce;"
 },
 {
   "name": "focus:border-pink-400",
   "description": "border-color: #f687b3;"
 },
 {
   "name": "focus:border-pink-500",
   "description": "border-color: #ed64a6;"
 },
 {
   "name": "focus:border-pink-600",
   "description": "border-color: #d53f8c;"
 },
 {
   "name": "focus:border-pink-700",
   "description": "border-color: #b83280;"
 },
 {
   "name": "focus:border-pink-800",
   "description": "border-color: #97266d;"
 },
 {
   "name": "focus:border-pink-900",
   "description": "border-color: #702459;"
 },
 {
   "name": "rounded-none",
   "description": "border-radius: 0;"
 },
 {
   "name": "rounded-sm",
   "description": "border-radius: 0.125rem;"
 },
 {
   "name": "rounded",
   "description": "border-radius: 0.25rem;"
 },
 {
   "name": "rounded-lg",
   "description": "border-radius: 0.5rem;"
 },
 {
   "name": "rounded-full",
   "description": "border-radius: 9999px;"
 },
 {
   "name": "rounded-t-none",
   "description": "border-top-left-radius: 0; border-top-right-radius: 0;"
 },
 {
   "name": "rounded-r-none",
   "description": "border-top-right-radius: 0; border-bottom-right-radius: 0;"
 },
 {
   "name": "rounded-b-none",
   "description": "border-bottom-right-radius: 0; border-bottom-left-radius: 0;"
 },
 {
   "name": "rounded-l-none",
   "description": "border-top-left-radius: 0; border-bottom-left-radius: 0;"
 },
 {
   "name": "rounded-t-sm",
   "description": "border-top-left-radius: 0.125rem; border-top-right-radius: 0.125rem;"
 },
 {
   "name": "rounded-r-sm",
   "description": "border-top-right-radius: 0.125rem; border-bottom-right-radius: 0.125rem;"
 },
 {
   "name": "rounded-b-sm",
   "description": "border-bottom-right-radius: 0.125rem; border-bottom-left-radius: 0.125rem;"
 },
 {
   "name": "rounded-l-sm",
   "description": "border-top-left-radius: 0.125rem; border-bottom-left-radius: 0.125rem;"
 },
 {
   "name": "rounded-t",
   "description": "border-top-left-radius: 0.25rem; border-top-right-radius: 0.25rem;"
 },
 {
   "name": "rounded-r",
   "description": "border-top-right-radius: 0.25rem; border-bottom-right-radius: 0.25rem;"
 },
 {
   "name": "rounded-b",
   "description": "border-bottom-right-radius: 0.25rem; border-bottom-left-radius: 0.25rem;"
 },
 {
   "name": "rounded-l",
   "description": "border-top-left-radius: 0.25rem; border-bottom-left-radius: 0.25rem;"
 },
 {
   "name": "rounded-t-lg",
   "description": "border-top-left-radius: 0.5rem; border-top-right-radius: 0.5rem;"
 },
 {
   "name": "rounded-r-lg",
   "description": "border-top-right-radius: 0.5rem; border-bottom-right-radius: 0.5rem;"
 },
 {
   "name": "rounded-b-lg",
   "description": "border-bottom-right-radius: 0.5rem; border-bottom-left-radius: 0.5rem;"
 },
 {
   "name": "rounded-l-lg",
   "description": "border-top-left-radius: 0.5rem; border-bottom-left-radius: 0.5rem;"
 },
 {
   "name": "rounded-t-full",
   "description": "border-top-left-radius: 9999px; border-top-right-radius: 9999px;"
 },
 {
   "name": "rounded-r-full",
   "description": "border-top-right-radius: 9999px; border-bottom-right-radius: 9999px;"
 },
 {
   "name": "rounded-b-full",
   "description": "border-bottom-right-radius: 9999px; border-bottom-left-radius: 9999px;"
 },
 {
   "name": "rounded-l-full",
   "description": "border-top-left-radius: 9999px; border-bottom-left-radius: 9999px;"
 },
 {
   "name": "rounded-tl-none",
   "description": "border-top-left-radius: 0;"
 },
 {
   "name": "rounded-tr-none",
   "description": "border-top-right-radius: 0;"
 },
 {
   "name": "rounded-br-none",
   "description": "border-bottom-right-radius: 0;"
 },
 {
   "name": "rounded-bl-none",
   "description": "border-bottom-left-radius: 0;"
 },
 {
   "name": "rounded-tl-sm",
   "description": "border-top-left-radius: 0.125rem;"
 },
 {
   "name": "rounded-tr-sm",
   "description": "border-top-right-radius: 0.125rem;"
 },
 {
   "name": "rounded-br-sm",
   "description": "border-bottom-right-radius: 0.125rem;"
 },
 {
   "name": "rounded-bl-sm",
   "description": "border-bottom-left-radius: 0.125rem;"
 },
 {
   "name": "rounded-tl",
   "description": "border-top-left-radius: 0.25rem;"
 },
 {
   "name": "rounded-tr",
   "description": "border-top-right-radius: 0.25rem;"
 },
 {
   "name": "rounded-br",
   "description": "border-bottom-right-radius: 0.25rem;"
 },
 {
   "name": "rounded-bl",
   "description": "border-bottom-left-radius: 0.25rem;"
 },
 {
   "name": "rounded-tl-lg",
   "description": "border-top-left-radius: 0.5rem;"
 },
 {
   "name": "rounded-tr-lg",
   "description": "border-top-right-radius: 0.5rem;"
 },
 {
   "name": "rounded-br-lg",
   "description": "border-bottom-right-radius: 0.5rem;"
 },
 {
   "name": "rounded-bl-lg",
   "description": "border-bottom-left-radius: 0.5rem;"
 },
 {
   "name": "rounded-tl-full",
   "description": "border-top-left-radius: 9999px;"
 },
 {
   "name": "rounded-tr-full",
   "description": "border-top-right-radius: 9999px;"
 },
 {
   "name": "rounded-br-full",
   "description": "border-bottom-right-radius: 9999px;"
 },
 {
   "name": "rounded-bl-full",
   "description": "border-bottom-left-radius: 9999px;"
 },
 {
   "name": "border-solid",
   "description": "border-style: solid;"
 },
 {
   "name": "border-dashed",
   "description": "border-style: dashed;"
 },
 {
   "name": "border-dotted",
   "description": "border-style: dotted;"
 },
 {
   "name": "border-none",
   "description": "border-style: none;"
 },
 {
   "name": "border-0",
   "description": "border-width: 0;"
 },
 {
   "name": "border-2",
   "description": "border-width: 2px;"
 },
 {
   "name": "border-4",
   "description": "border-width: 4px;"
 },
 {
   "name": "border-8",
   "description": "border-width: 8px;"
 },
 {
   "name": "border",
   "description": "border-width: 1px;"
 },
 {
   "name": "border-t-0",
   "description": "border-top-width: 0;"
 },
 {
   "name": "border-r-0",
   "description": "border-right-width: 0;"
 },
 {
   "name": "border-b-0",
   "description": "border-bottom-width: 0;"
 },
 {
   "name": "border-l-0",
   "description": "border-left-width: 0;"
 },
 {
   "name": "border-t-2",
   "description": "border-top-width: 2px;"
 },
 {
   "name": "border-r-2",
   "description": "border-right-width: 2px;"
 },
 {
   "name": "border-b-2",
   "description": "border-bottom-width: 2px;"
 },
 {
   "name": "border-l-2",
   "description": "border-left-width: 2px;"
 },
 {
   "name": "border-t-4",
   "description": "border-top-width: 4px;"
 },
 {
   "name": "border-r-4",
   "description": "border-right-width: 4px;"
 },
 {
   "name": "border-b-4",
   "description": "border-bottom-width: 4px;"
 },
 {
   "name": "border-l-4",
   "description": "border-left-width: 4px;"
 },
 {
   "name": "border-t-8",
   "description": "border-top-width: 8px;"
 },
 {
   "name": "border-r-8",
   "description": "border-right-width: 8px;"
 },
 {
   "name": "border-b-8",
   "description": "border-bottom-width: 8px;"
 },
 {
   "name": "border-l-8",
   "description": "border-left-width: 8px;"
 },
 {
   "name": "border-t",
   "description": "border-top-width: 1px;"
 },
 {
   "name": "border-r",
   "description": "border-right-width: 1px;"
 },
 {
   "name": "border-b",
   "description": "border-bottom-width: 1px;"
 },
 {
   "name": "border-l",
   "description": "border-left-width: 1px;"
 },
 {
   "name": "cursor-auto",
   "description": "cursor: auto;"
 },
 {
   "name": "cursor-default",
   "description": "cursor: default;"
 },
 {
   "name": "cursor-pointer",
   "description": "cursor: pointer;"
 },
 {
   "name": "cursor-wait",
   "description": "cursor: wait;"
 },
 {
   "name": "cursor-text",
   "description": "cursor: text;"
 },
 {
   "name": "cursor-move",
   "description": "cursor: move;"
 },
 {
   "name": "cursor-not-allowed",
   "description": "cursor: not-allowed;"
 },
 {
   "name": "block",
   "description": "display: block;"
 },
 {
   "name": "inline-block",
   "description": "display: inline-block;"
 },
 {
   "name": "inline",
   "description": "display: inline;"
 },
 {
   "name": "flex",
   "description": "display: flex;"
 },
 {
   "name": "inline-flex",
   "description": "display: inline-flex;"
 },
 {
   "name": "table",
   "description": "display: table;"
 },
 {
   "name": "table-row",
   "description": "display: table-row;"
 },
 {
   "name": "table-cell",
   "description": "display: table-cell;"
 },
 {
   "name": "hidden",
   "description": "display: none;"
 },
 {
   "name": "flex-row",
   "description": "flex-direction: row;"
 },
 {
   "name": "flex-row-reverse",
   "description": "flex-direction: row-reverse;"
 },
 {
   "name": "flex-col",
   "description": "flex-direction: column;"
 },
 {
   "name": "flex-col-reverse",
   "description": "flex-direction: column-reverse;"
 },
 {
   "name": "flex-wrap",
   "description": "flex-wrap: wrap;"
 },
 {
   "name": "flex-wrap-reverse",
   "description": "flex-wrap: wrap-reverse;"
 },
 {
   "name": "flex-no-wrap",
   "description": "flex-wrap: nowrap;"
 },
 {
   "name": "items-start",
   "description": "align-items: flex-start;"
 },
 {
   "name": "items-end",
   "description": "align-items: flex-end;"
 },
 {
   "name": "items-center",
   "description": "align-items: center;"
 },
 {
   "name": "items-baseline",
   "description": "align-items: baseline;"
 },
 {
   "name": "items-stretch",
   "description": "align-items: stretch;"
 },
 {
   "name": "self-auto",
   "description": "align-self: auto;"
 },
 {
   "name": "self-start",
   "description": "align-self: flex-start;"
 },
 {
   "name": "self-end",
   "description": "align-self: flex-end;"
 },
 {
   "name": "self-center",
   "description": "align-self: center;"
 },
 {
   "name": "self-stretch",
   "description": "align-self: stretch;"
 },
 {
   "name": "justify-start",
   "description": "justify-content: flex-start;"
 },
 {
   "name": "justify-end",
   "description": "justify-content: flex-end;"
 },
 {
   "name": "justify-center",
   "description": "justify-content: center;"
 },
 {
   "name": "justify-between",
   "description": "justify-content: space-between;"
 },
 {
   "name": "justify-around",
   "description": "justify-content: space-around;"
 },
 {
   "name": "content-center",
   "description": "align-content: center;"
 },
 {
   "name": "content-start",
   "description": "align-content: flex-start;"
 },
 {
   "name": "content-end",
   "description": "align-content: flex-end;"
 },
 {
   "name": "content-between",
   "description": "align-content: space-between;"
 },
 {
   "name": "content-around",
   "description": "align-content: space-around;"
 },
 {
   "name": "flex-1",
   "description": "flex: 1 1 0%;"
 },
 {
   "name": "flex-auto",
   "description": "flex: 1 1 auto;"
 },
 {
   "name": "flex-initial",
   "description": "flex: 0 1 auto;"
 },
 {
   "name": "flex-none",
   "description": "flex: none;"
 },
 {
   "name": "flex-grow-0",
   "description": "flex-grow: 0;"
 },
 {
   "name": "flex-grow",
   "description": "flex-grow: 1;"
 },
 {
   "name": "flex-shrink-0",
   "description": "flex-shrink: 0;"
 },
 {
   "name": "flex-shrink",
   "description": "flex-shrink: 1;"
 },
 {
   "name": "order-1",
   "description": "order: 1;"
 },
 {
   "name": "order-2",
   "description": "order: 2;"
 },
 {
   "name": "order-3",
   "description": "order: 3;"
 },
 {
   "name": "order-4",
   "description": "order: 4;"
 },
 {
   "name": "order-5",
   "description": "order: 5;"
 },
 {
   "name": "order-6",
   "description": "order: 6;"
 },
 {
   "name": "order-7",
   "description": "order: 7;"
 },
 {
   "name": "order-8",
   "description": "order: 8;"
 },
 {
   "name": "order-9",
   "description": "order: 9;"
 },
 {
   "name": "order-10",
   "description": "order: 10;"
 },
 {
   "name": "order-11",
   "description": "order: 11;"
 },
 {
   "name": "order-12",
   "description": "order: 12;"
 },
 {
   "name": "order-first",
   "description": "order: -9999;"
 },
 {
   "name": "order-last",
   "description": "order: 9999;"
 },
 {
   "name": "order-none",
   "description": "order: 0;"
 },
 {
   "name": "float-right",
   "description": "float: right;"
 },
 {
   "name": "float-left",
   "description": "float: left;"
 },
 {
   "name": "float-none",
   "description": "float: none;"
 },
 {
   "name": "clearfix:after",
   "description": "content: \"\"; display: table; clear: both;"
 },
 {
   "name": "font-sans",
   "description": "font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";"
 },
 {
   "name": "font-serif",
   "description": "font-family: Georgia, Cambria, \"Times New Roman\", Times, serif;"
 },
 {
   "name": "font-mono",
   "description": "font-family: Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;"
 },
 {
   "name": "font-hairline",
   "description": "font-weight: 100;"
 },
 {
   "name": "font-thin",
   "description": "font-weight: 200;"
 },
 {
   "name": "font-light",
   "description": "font-weight: 300;"
 },
 {
   "name": "font-normal",
   "description": "font-weight: 400;"
 },
 {
   "name": "font-medium",
   "description": "font-weight: 500;"
 },
 {
   "name": "font-semibold",
   "description": "font-weight: 600;"
 },
 {
   "name": "font-bold",
   "description": "font-weight: 700;"
 },
 {
   "name": "font-extrabold",
   "description": "font-weight: 800;"
 },
 {
   "name": "font-black",
   "description": "font-weight: 900;"
 },
 {
   "name": "hover:font-hairline",
   "description": "font-weight: 100;"
 },
 {
   "name": "hover:font-thin",
   "description": "font-weight: 200;"
 },
 {
   "name": "hover:font-light",
   "description": "font-weight: 300;"
 },
 {
   "name": "hover:font-normal",
   "description": "font-weight: 400;"
 },
 {
   "name": "hover:font-medium",
   "description": "font-weight: 500;"
 },
 {
   "name": "hover:font-semibold",
   "description": "font-weight: 600;"
 },
 {
   "name": "hover:font-bold",
   "description": "font-weight: 700;"
 },
 {
   "name": "hover:font-extrabold",
   "description": "font-weight: 800;"
 },
 {
   "name": "hover:font-black",
   "description": "font-weight: 900;"
 },
 {
   "name": "focus:font-hairline",
   "description": "font-weight: 100;"
 },
 {
   "name": "focus:font-thin",
   "description": "font-weight: 200;"
 },
 {
   "name": "focus:font-light",
   "description": "font-weight: 300;"
 },
 {
   "name": "focus:font-normal",
   "description": "font-weight: 400;"
 },
 {
   "name": "focus:font-medium",
   "description": "font-weight: 500;"
 },
 {
   "name": "focus:font-semibold",
   "description": "font-weight: 600;"
 },
 {
   "name": "focus:font-bold",
   "description": "font-weight: 700;"
 },
 {
   "name": "focus:font-extrabold",
   "description": "font-weight: 800;"
 },
 {
   "name": "focus:font-black",
   "description": "font-weight: 900;"
 },
 {
   "name": "h-0",
   "description": "height: 0;"
 },
 {
   "name": "h-1",
   "description": "height: 0.25rem;"
 },
 {
   "name": "h-2",
   "description": "height: 0.5rem;"
 },
 {
   "name": "h-3",
   "description": "height: 0.75rem;"
 },
 {
   "name": "h-4",
   "description": "height: 1rem;"
 },
 {
   "name": "h-5",
   "description": "height: 1.25rem;"
 },
 {
   "name": "h-6",
   "description": "height: 1.5rem;"
 },
 {
   "name": "h-8",
   "description": "height: 2rem;"
 },
 {
   "name": "h-10",
   "description": "height: 2.5rem;"
 },
 {
   "name": "h-12",
   "description": "height: 3rem;"
 },
 {
   "name": "h-16",
   "description": "height: 4rem;"
 },
 {
   "name": "h-20",
   "description": "height: 5rem;"
 },
 {
   "name": "h-24",
   "description": "height: 6rem;"
 },
 {
   "name": "h-32",
   "description": "height: 8rem;"
 },
 {
   "name": "h-40",
   "description": "height: 10rem;"
 },
 {
   "name": "h-48",
   "description": "height: 12rem;"
 },
 {
   "name": "h-56",
   "description": "height: 14rem;"
 },
 {
   "name": "h-64",
   "description": "height: 16rem;"
 },
 {
   "name": "h-auto",
   "description": "height: auto;"
 },
 {
   "name": "h-px",
   "description": "height: 1px;"
 },
 {
   "name": "h-full",
   "description": "height: 100%;"
 },
 {
   "name": "h-screen",
   "description": "height: 100vh;"
 },
 {
   "name": "leading-none",
   "description": "line-height: 1;"
 },
 {
   "name": "leading-tight",
   "description": "line-height: 1.25;"
 },
 {
   "name": "leading-snug",
   "description": "line-height: 1.375;"
 },
 {
   "name": "leading-normal",
   "description": "line-height: 1.5;"
 },
 {
   "name": "leading-relaxed",
   "description": "line-height: 1.625;"
 },
 {
   "name": "leading-loose",
   "description": "line-height: 2;"
 },
 {
   "name": "list-inside",
   "description": "list-style-position: inside;"
 },
 {
   "name": "list-outside",
   "description": "list-style-position: outside;"
 },
 {
   "name": "list-none",
   "description": "list-style-type: none;"
 },
 {
   "name": "list-disc",
   "description": "list-style-type: disc;"
 },
 {
   "name": "list-decimal",
   "description": "list-style-type: decimal;"
 },
 {
   "name": "m-0",
   "description": "margin: 0;"
 },
 {
   "name": "m-1",
   "description": "margin: 0.25rem;"
 },
 {
   "name": "m-2",
   "description": "margin: 0.5rem;"
 },
 {
   "name": "m-3",
   "description": "margin: 0.75rem;"
 },
 {
   "name": "m-4",
   "description": "margin: 1rem;"
 },
 {
   "name": "m-5",
   "description": "margin: 1.25rem;"
 },
 {
   "name": "m-6",
   "description": "margin: 1.5rem;"
 },
 {
   "name": "m-8",
   "description": "margin: 2rem;"
 },
 {
   "name": "m-10",
   "description": "margin: 2.5rem;"
 },
 {
   "name": "m-12",
   "description": "margin: 3rem;"
 },
 {
   "name": "m-16",
   "description": "margin: 4rem;"
 },
 {
   "name": "m-20",
   "description": "margin: 5rem;"
 },
 {
   "name": "m-24",
   "description": "margin: 6rem;"
 },
 {
   "name": "m-32",
   "description": "margin: 8rem;"
 },
 {
   "name": "m-40",
   "description": "margin: 10rem;"
 },
 {
   "name": "m-48",
   "description": "margin: 12rem;"
 },
 {
   "name": "m-56",
   "description": "margin: 14rem;"
 },
 {
   "name": "m-64",
   "description": "margin: 16rem;"
 },
 {
   "name": "m-auto",
   "description": "margin: auto;"
 },
 {
   "name": "m-px",
   "description": "margin: 1px;"
 },
 {
   "name": "-m-1",
   "description": "margin: -0.25rem;"
 },
 {
   "name": "-m-2",
   "description": "margin: -0.5rem;"
 },
 {
   "name": "-m-3",
   "description": "margin: -0.75rem;"
 },
 {
   "name": "-m-4",
   "description": "margin: -1rem;"
 },
 {
   "name": "-m-5",
   "description": "margin: -1.25rem;"
 },
 {
   "name": "-m-6",
   "description": "margin: -1.5rem;"
 },
 {
   "name": "-m-8",
   "description": "margin: -2rem;"
 },
 {
   "name": "-m-10",
   "description": "margin: -2.5rem;"
 },
 {
   "name": "-m-12",
   "description": "margin: -3rem;"
 },
 {
   "name": "-m-16",
   "description": "margin: -4rem;"
 },
 {
   "name": "-m-20",
   "description": "margin: -5rem;"
 },
 {
   "name": "-m-24",
   "description": "margin: -6rem;"
 },
 {
   "name": "-m-32",
   "description": "margin: -8rem;"
 },
 {
   "name": "-m-40",
   "description": "margin: -10rem;"
 },
 {
   "name": "-m-48",
   "description": "margin: -12rem;"
 },
 {
   "name": "-m-56",
   "description": "margin: -14rem;"
 },
 {
   "name": "-m-64",
   "description": "margin: -16rem;"
 },
 {
   "name": "-m-px",
   "description": "margin: -1px;"
 },
 {
   "name": "my-0",
   "description": "margin-top: 0; margin-bottom: 0;"
 },
 {
   "name": "mx-0",
   "description": "margin-left: 0; margin-right: 0;"
 },
 {
   "name": "my-1",
   "description": "margin-top: 0.25rem; margin-bottom: 0.25rem;"
 },
 {
   "name": "mx-1",
   "description": "margin-left: 0.25rem; margin-right: 0.25rem;"
 },
 {
   "name": "my-2",
   "description": "margin-top: 0.5rem; margin-bottom: 0.5rem;"
 },
 {
   "name": "mx-2",
   "description": "margin-left: 0.5rem; margin-right: 0.5rem;"
 },
 {
   "name": "my-3",
   "description": "margin-top: 0.75rem; margin-bottom: 0.75rem;"
 },
 {
   "name": "mx-3",
   "description": "margin-left: 0.75rem; margin-right: 0.75rem;"
 },
 {
   "name": "my-4",
   "description": "margin-top: 1rem; margin-bottom: 1rem;"
 },
 {
   "name": "mx-4",
   "description": "margin-left: 1rem; margin-right: 1rem;"
 },
 {
   "name": "my-5",
   "description": "margin-top: 1.25rem; margin-bottom: 1.25rem;"
 },
 {
   "name": "mx-5",
   "description": "margin-left: 1.25rem; margin-right: 1.25rem;"
 },
 {
   "name": "my-6",
   "description": "margin-top: 1.5rem; margin-bottom: 1.5rem;"
 },
 {
   "name": "mx-6",
   "description": "margin-left: 1.5rem; margin-right: 1.5rem;"
 },
 {
   "name": "my-8",
   "description": "margin-top: 2rem; margin-bottom: 2rem;"
 },
 {
   "name": "mx-8",
   "description": "margin-left: 2rem; margin-right: 2rem;"
 },
 {
   "name": "my-10",
   "description": "margin-top: 2.5rem; margin-bottom: 2.5rem;"
 },
 {
   "name": "mx-10",
   "description": "margin-left: 2.5rem; margin-right: 2.5rem;"
 },
 {
   "name": "my-12",
   "description": "margin-top: 3rem; margin-bottom: 3rem;"
 },
 {
   "name": "mx-12",
   "description": "margin-left: 3rem; margin-right: 3rem;"
 },
 {
   "name": "my-16",
   "description": "margin-top: 4rem; margin-bottom: 4rem;"
 },
 {
   "name": "mx-16",
   "description": "margin-left: 4rem; margin-right: 4rem;"
 },
 {
   "name": "my-20",
   "description": "margin-top: 5rem; margin-bottom: 5rem;"
 },
 {
   "name": "mx-20",
   "description": "margin-left: 5rem; margin-right: 5rem;"
 },
 {
   "name": "my-24",
   "description": "margin-top: 6rem; margin-bottom: 6rem;"
 },
 {
   "name": "mx-24",
   "description": "margin-left: 6rem; margin-right: 6rem;"
 },
 {
   "name": "my-32",
   "description": "margin-top: 8rem; margin-bottom: 8rem;"
 },
 {
   "name": "mx-32",
   "description": "margin-left: 8rem; margin-right: 8rem;"
 },
 {
   "name": "my-40",
   "description": "margin-top: 10rem; margin-bottom: 10rem;"
 },
 {
   "name": "mx-40",
   "description": "margin-left: 10rem; margin-right: 10rem;"
 },
 {
   "name": "my-48",
   "description": "margin-top: 12rem; margin-bottom: 12rem;"
 },
 {
   "name": "mx-48",
   "description": "margin-left: 12rem; margin-right: 12rem;"
 },
 {
   "name": "my-56",
   "description": "margin-top: 14rem; margin-bottom: 14rem;"
 },
 {
   "name": "mx-56",
   "description": "margin-left: 14rem; margin-right: 14rem;"
 },
 {
   "name": "my-64",
   "description": "margin-top: 16rem; margin-bottom: 16rem;"
 },
 {
   "name": "mx-64",
   "description": "margin-left: 16rem; margin-right: 16rem;"
 },
 {
   "name": "my-auto",
   "description": "margin-top: auto; margin-bottom: auto;"
 },
 {
   "name": "mx-auto",
   "description": "margin-left: auto; margin-right: auto;"
 },
 {
   "name": "my-px",
   "description": "margin-top: 1px; margin-bottom: 1px;"
 },
 {
   "name": "mx-px",
   "description": "margin-left: 1px; margin-right: 1px;"
 },
 {
   "name": "-my-1",
   "description": "margin-top: -0.25rem; margin-bottom: -0.25rem;"
 },
 {
   "name": "-mx-1",
   "description": "margin-left: -0.25rem; margin-right: -0.25rem;"
 },
 {
   "name": "-my-2",
   "description": "margin-top: -0.5rem; margin-bottom: -0.5rem;"
 },
 {
   "name": "-mx-2",
   "description": "margin-left: -0.5rem; margin-right: -0.5rem;"
 },
 {
   "name": "-my-3",
   "description": "margin-top: -0.75rem; margin-bottom: -0.75rem;"
 },
 {
   "name": "-mx-3",
   "description": "margin-left: -0.75rem; margin-right: -0.75rem;"
 },
 {
   "name": "-my-4",
   "description": "margin-top: -1rem; margin-bottom: -1rem;"
 },
 {
   "name": "-mx-4",
   "description": "margin-left: -1rem; margin-right: -1rem;"
 },
 {
   "name": "-my-5",
   "description": "margin-top: -1.25rem; margin-bottom: -1.25rem;"
 },
 {
   "name": "-mx-5",
   "description": "margin-left: -1.25rem; margin-right: -1.25rem;"
 },
 {
   "name": "-my-6",
   "description": "margin-top: -1.5rem; margin-bottom: -1.5rem;"
 },
 {
   "name": "-mx-6",
   "description": "margin-left: -1.5rem; margin-right: -1.5rem;"
 },
 {
   "name": "-my-8",
   "description": "margin-top: -2rem; margin-bottom: -2rem;"
 },
 {
   "name": "-mx-8",
   "description": "margin-left: -2rem; margin-right: -2rem;"
 },
 {
   "name": "-my-10",
   "description": "margin-top: -2.5rem; margin-bottom: -2.5rem;"
 },
 {
   "name": "-mx-10",
   "description": "margin-left: -2.5rem; margin-right: -2.5rem;"
 },
 {
   "name": "-my-12",
   "description": "margin-top: -3rem; margin-bottom: -3rem;"
 },
 {
   "name": "-mx-12",
   "description": "margin-left: -3rem; margin-right: -3rem;"
 },
 {
   "name": "-my-16",
   "description": "margin-top: -4rem; margin-bottom: -4rem;"
 },
 {
   "name": "-mx-16",
   "description": "margin-left: -4rem; margin-right: -4rem;"
 },
 {
   "name": "-my-20",
   "description": "margin-top: -5rem; margin-bottom: -5rem;"
 },
 {
   "name": "-mx-20",
   "description": "margin-left: -5rem; margin-right: -5rem;"
 },
 {
   "name": "-my-24",
   "description": "margin-top: -6rem; margin-bottom: -6rem;"
 },
 {
   "name": "-mx-24",
   "description": "margin-left: -6rem; margin-right: -6rem;"
 },
 {
   "name": "-my-32",
   "description": "margin-top: -8rem; margin-bottom: -8rem;"
 },
 {
   "name": "-mx-32",
   "description": "margin-left: -8rem; margin-right: -8rem;"
 },
 {
   "name": "-my-40",
   "description": "margin-top: -10rem; margin-bottom: -10rem;"
 },
 {
   "name": "-mx-40",
   "description": "margin-left: -10rem; margin-right: -10rem;"
 },
 {
   "name": "-my-48",
   "description": "margin-top: -12rem; margin-bottom: -12rem;"
 },
 {
   "name": "-mx-48",
   "description": "margin-left: -12rem; margin-right: -12rem;"
 },
 {
   "name": "-my-56",
   "description": "margin-top: -14rem; margin-bottom: -14rem;"
 },
 {
   "name": "-mx-56",
   "description": "margin-left: -14rem; margin-right: -14rem;"
 },
 {
   "name": "-my-64",
   "description": "margin-top: -16rem; margin-bottom: -16rem;"
 },
 {
   "name": "-mx-64",
   "description": "margin-left: -16rem; margin-right: -16rem;"
 },
 {
   "name": "-my-px",
   "description": "margin-top: -1px; margin-bottom: -1px;"
 },
 {
   "name": "-mx-px",
   "description": "margin-left: -1px; margin-right: -1px;"
 },
 {
   "name": "mt-0",
   "description": "margin-top: 0;"
 },
 {
   "name": "mr-0",
   "description": "margin-right: 0;"
 },
 {
   "name": "mb-0",
   "description": "margin-bottom: 0;"
 },
 {
   "name": "ml-0",
   "description": "margin-left: 0;"
 },
 {
   "name": "mt-1",
   "description": "margin-top: 0.25rem;"
 },
 {
   "name": "mr-1",
   "description": "margin-right: 0.25rem;"
 },
 {
   "name": "mb-1",
   "description": "margin-bottom: 0.25rem;"
 },
 {
   "name": "ml-1",
   "description": "margin-left: 0.25rem;"
 },
 {
   "name": "mt-2",
   "description": "margin-top: 0.5rem;"
 },
 {
   "name": "mr-2",
   "description": "margin-right: 0.5rem;"
 },
 {
   "name": "mb-2",
   "description": "margin-bottom: 0.5rem;"
 },
 {
   "name": "ml-2",
   "description": "margin-left: 0.5rem;"
 },
 {
   "name": "mt-3",
   "description": "margin-top: 0.75rem;"
 },
 {
   "name": "mr-3",
   "description": "margin-right: 0.75rem;"
 },
 {
   "name": "mb-3",
   "description": "margin-bottom: 0.75rem;"
 },
 {
   "name": "ml-3",
   "description": "margin-left: 0.75rem;"
 },
 {
   "name": "mt-4",
   "description": "margin-top: 1rem;"
 },
 {
   "name": "mr-4",
   "description": "margin-right: 1rem;"
 },
 {
   "name": "mb-4",
   "description": "margin-bottom: 1rem;"
 },
 {
   "name": "ml-4",
   "description": "margin-left: 1rem;"
 },
 {
   "name": "mt-5",
   "description": "margin-top: 1.25rem;"
 },
 {
   "name": "mr-5",
   "description": "margin-right: 1.25rem;"
 },
 {
   "name": "mb-5",
   "description": "margin-bottom: 1.25rem;"
 },
 {
   "name": "ml-5",
   "description": "margin-left: 1.25rem;"
 },
 {
   "name": "mt-6",
   "description": "margin-top: 1.5rem;"
 },
 {
   "name": "mr-6",
   "description": "margin-right: 1.5rem;"
 },
 {
   "name": "mb-6",
   "description": "margin-bottom: 1.5rem;"
 },
 {
   "name": "ml-6",
   "description": "margin-left: 1.5rem;"
 },
 {
   "name": "mt-8",
   "description": "margin-top: 2rem;"
 },
 {
   "name": "mr-8",
   "description": "margin-right: 2rem;"
 },
 {
   "name": "mb-8",
   "description": "margin-bottom: 2rem;"
 },
 {
   "name": "ml-8",
   "description": "margin-left: 2rem;"
 },
 {
   "name": "mt-10",
   "description": "margin-top: 2.5rem;"
 },
 {
   "name": "mr-10",
   "description": "margin-right: 2.5rem;"
 },
 {
   "name": "mb-10",
   "description": "margin-bottom: 2.5rem;"
 },
 {
   "name": "ml-10",
   "description": "margin-left: 2.5rem;"
 },
 {
   "name": "mt-12",
   "description": "margin-top: 3rem;"
 },
 {
   "name": "mr-12",
   "description": "margin-right: 3rem;"
 },
 {
   "name": "mb-12",
   "description": "margin-bottom: 3rem;"
 },
 {
   "name": "ml-12",
   "description": "margin-left: 3rem;"
 },
 {
   "name": "mt-16",
   "description": "margin-top: 4rem;"
 },
 {
   "name": "mr-16",
   "description": "margin-right: 4rem;"
 },
 {
   "name": "mb-16",
   "description": "margin-bottom: 4rem;"
 },
 {
   "name": "ml-16",
   "description": "margin-left: 4rem;"
 },
 {
   "name": "mt-20",
   "description": "margin-top: 5rem;"
 },
 {
   "name": "mr-20",
   "description": "margin-right: 5rem;"
 },
 {
   "name": "mb-20",
   "description": "margin-bottom: 5rem;"
 },
 {
   "name": "ml-20",
   "description": "margin-left: 5rem;"
 },
 {
   "name": "mt-24",
   "description": "margin-top: 6rem;"
 },
 {
   "name": "mr-24",
   "description": "margin-right: 6rem;"
 },
 {
   "name": "mb-24",
   "description": "margin-bottom: 6rem;"
 },
 {
   "name": "ml-24",
   "description": "margin-left: 6rem;"
 },
 {
   "name": "mt-32",
   "description": "margin-top: 8rem;"
 },
 {
   "name": "mr-32",
   "description": "margin-right: 8rem;"
 },
 {
   "name": "mb-32",
   "description": "margin-bottom: 8rem;"
 },
 {
   "name": "ml-32",
   "description": "margin-left: 8rem;"
 },
 {
   "name": "mt-40",
   "description": "margin-top: 10rem;"
 },
 {
   "name": "mr-40",
   "description": "margin-right: 10rem;"
 },
 {
   "name": "mb-40",
   "description": "margin-bottom: 10rem;"
 },
 {
   "name": "ml-40",
   "description": "margin-left: 10rem;"
 },
 {
   "name": "mt-48",
   "description": "margin-top: 12rem;"
 },
 {
   "name": "mr-48",
   "description": "margin-right: 12rem;"
 },
 {
   "name": "mb-48",
   "description": "margin-bottom: 12rem;"
 },
 {
   "name": "ml-48",
   "description": "margin-left: 12rem;"
 },
 {
   "name": "mt-56",
   "description": "margin-top: 14rem;"
 },
 {
   "name": "mr-56",
   "description": "margin-right: 14rem;"
 },
 {
   "name": "mb-56",
   "description": "margin-bottom: 14rem;"
 },
 {
   "name": "ml-56",
   "description": "margin-left: 14rem;"
 },
 {
   "name": "mt-64",
   "description": "margin-top: 16rem;"
 },
 {
   "name": "mr-64",
   "description": "margin-right: 16rem;"
 },
 {
   "name": "mb-64",
   "description": "margin-bottom: 16rem;"
 },
 {
   "name": "ml-64",
   "description": "margin-left: 16rem;"
 },
 {
   "name": "mt-auto",
   "description": "margin-top: auto;"
 },
 {
   "name": "mr-auto",
   "description": "margin-right: auto;"
 },
 {
   "name": "mb-auto",
   "description": "margin-bottom: auto;"
 },
 {
   "name": "ml-auto",
   "description": "margin-left: auto;"
 },
 {
   "name": "mt-px",
   "description": "margin-top: 1px;"
 },
 {
   "name": "mr-px",
   "description": "margin-right: 1px;"
 },
 {
   "name": "mb-px",
   "description": "margin-bottom: 1px;"
 },
 {
   "name": "ml-px",
   "description": "margin-left: 1px;"
 },
 {
   "name": "-mt-1",
   "description": "margin-top: -0.25rem;"
 },
 {
   "name": "-mr-1",
   "description": "margin-right: -0.25rem;"
 },
 {
   "name": "-mb-1",
   "description": "margin-bottom: -0.25rem;"
 },
 {
   "name": "-ml-1",
   "description": "margin-left: -0.25rem;"
 },
 {
   "name": "-mt-2",
   "description": "margin-top: -0.5rem;"
 },
 {
   "name": "-mr-2",
   "description": "margin-right: -0.5rem;"
 },
 {
   "name": "-mb-2",
   "description": "margin-bottom: -0.5rem;"
 },
 {
   "name": "-ml-2",
   "description": "margin-left: -0.5rem;"
 },
 {
   "name": "-mt-3",
   "description": "margin-top: -0.75rem;"
 },
 {
   "name": "-mr-3",
   "description": "margin-right: -0.75rem;"
 },
 {
   "name": "-mb-3",
   "description": "margin-bottom: -0.75rem;"
 },
 {
   "name": "-ml-3",
   "description": "margin-left: -0.75rem;"
 },
 {
   "name": "-mt-4",
   "description": "margin-top: -1rem;"
 },
 {
   "name": "-mr-4",
   "description": "margin-right: -1rem;"
 },
 {
   "name": "-mb-4",
   "description": "margin-bottom: -1rem;"
 },
 {
   "name": "-ml-4",
   "description": "margin-left: -1rem;"
 },
 {
   "name": "-mt-5",
   "description": "margin-top: -1.25rem;"
 },
 {
   "name": "-mr-5",
   "description": "margin-right: -1.25rem;"
 },
 {
   "name": "-mb-5",
   "description": "margin-bottom: -1.25rem;"
 },
 {
   "name": "-ml-5",
   "description": "margin-left: -1.25rem;"
 },
 {
   "name": "-mt-6",
   "description": "margin-top: -1.5rem;"
 },
 {
   "name": "-mr-6",
   "description": "margin-right: -1.5rem;"
 },
 {
   "name": "-mb-6",
   "description": "margin-bottom: -1.5rem;"
 },
 {
   "name": "-ml-6",
   "description": "margin-left: -1.5rem;"
 },
 {
   "name": "-mt-8",
   "description": "margin-top: -2rem;"
 },
 {
   "name": "-mr-8",
   "description": "margin-right: -2rem;"
 },
 {
   "name": "-mb-8",
   "description": "margin-bottom: -2rem;"
 },
 {
   "name": "-ml-8",
   "description": "margin-left: -2rem;"
 },
 {
   "name": "-mt-10",
   "description": "margin-top: -2.5rem;"
 },
 {
   "name": "-mr-10",
   "description": "margin-right: -2.5rem;"
 },
 {
   "name": "-mb-10",
   "description": "margin-bottom: -2.5rem;"
 },
 {
   "name": "-ml-10",
   "description": "margin-left: -2.5rem;"
 },
 {
   "name": "-mt-12",
   "description": "margin-top: -3rem;"
 },
 {
   "name": "-mr-12",
   "description": "margin-right: -3rem;"
 },
 {
   "name": "-mb-12",
   "description": "margin-bottom: -3rem;"
 },
 {
   "name": "-ml-12",
   "description": "margin-left: -3rem;"
 },
 {
   "name": "-mt-16",
   "description": "margin-top: -4rem;"
 },
 {
   "name": "-mr-16",
   "description": "margin-right: -4rem;"
 },
 {
   "name": "-mb-16",
   "description": "margin-bottom: -4rem;"
 },
 {
   "name": "-ml-16",
   "description": "margin-left: -4rem;"
 },
 {
   "name": "-mt-20",
   "description": "margin-top: -5rem;"
 },
 {
   "name": "-mr-20",
   "description": "margin-right: -5rem;"
 },
 {
   "name": "-mb-20",
   "description": "margin-bottom: -5rem;"
 },
 {
   "name": "-ml-20",
   "description": "margin-left: -5rem;"
 },
 {
   "name": "-mt-24",
   "description": "margin-top: -6rem;"
 },
 {
   "name": "-mr-24",
   "description": "margin-right: -6rem;"
 },
 {
   "name": "-mb-24",
   "description": "margin-bottom: -6rem;"
 },
 {
   "name": "-ml-24",
   "description": "margin-left: -6rem;"
 },
 {
   "name": "-mt-32",
   "description": "margin-top: -8rem;"
 },
 {
   "name": "-mr-32",
   "description": "margin-right: -8rem;"
 },
 {
   "name": "-mb-32",
   "description": "margin-bottom: -8rem;"
 },
 {
   "name": "-ml-32",
   "description": "margin-left: -8rem;"
 },
 {
   "name": "-mt-40",
   "description": "margin-top: -10rem;"
 },
 {
   "name": "-mr-40",
   "description": "margin-right: -10rem;"
 },
 {
   "name": "-mb-40",
   "description": "margin-bottom: -10rem;"
 },
 {
   "name": "-ml-40",
   "description": "margin-left: -10rem;"
 },
 {
   "name": "-mt-48",
   "description": "margin-top: -12rem;"
 },
 {
   "name": "-mr-48",
   "description": "margin-right: -12rem;"
 },
 {
   "name": "-mb-48",
   "description": "margin-bottom: -12rem;"
 },
 {
   "name": "-ml-48",
   "description": "margin-left: -12rem;"
 },
 {
   "name": "-mt-56",
   "description": "margin-top: -14rem;"
 },
 {
   "name": "-mr-56",
   "description": "margin-right: -14rem;"
 },
 {
   "name": "-mb-56",
   "description": "margin-bottom: -14rem;"
 },
 {
   "name": "-ml-56",
   "description": "margin-left: -14rem;"
 },
 {
   "name": "-mt-64",
   "description": "margin-top: -16rem;"
 },
 {
   "name": "-mr-64",
   "description": "margin-right: -16rem;"
 },
 {
   "name": "-mb-64",
   "description": "margin-bottom: -16rem;"
 },
 {
   "name": "-ml-64",
   "description": "margin-left: -16rem;"
 },
 {
   "name": "-mt-px",
   "description": "margin-top: -1px;"
 },
 {
   "name": "-mr-px",
   "description": "margin-right: -1px;"
 },
 {
   "name": "-mb-px",
   "description": "margin-bottom: -1px;"
 },
 {
   "name": "-ml-px",
   "description": "margin-left: -1px;"
 },
 {
   "name": "max-h-full",
   "description": "max-height: 100%;"
 },
 {
   "name": "max-h-screen",
   "description": "max-height: 100vh;"
 },
 {
   "name": "max-w-xs",
   "description": "max-width: 20rem;"
 },
 {
   "name": "max-w-sm",
   "description": "max-width: 24rem;"
 },
 {
   "name": "max-w-md",
   "description": "max-width: 28rem;"
 },
 {
   "name": "max-w-lg",
   "description": "max-width: 32rem;"
 },
 {
   "name": "max-w-xl",
   "description": "max-width: 36rem;"
 },
 {
   "name": "max-w-2xl",
   "description": "max-width: 42rem;"
 },
 {
   "name": "max-w-3xl",
   "description": "max-width: 48rem;"
 },
 {
   "name": "max-w-4xl",
   "description": "max-width: 56rem;"
 },
 {
   "name": "max-w-5xl",
   "description": "max-width: 64rem;"
 },
 {
   "name": "max-w-6xl",
   "description": "max-width: 72rem;"
 },
 {
   "name": "max-w-full",
   "description": "max-width: 100%;"
 },
 {
   "name": "min-h-0",
   "description": "min-height: 0;"
 },
 {
   "name": "min-h-full",
   "description": "min-height: 100%;"
 },
 {
   "name": "min-h-screen",
   "description": "min-height: 100vh;"
 },
 {
   "name": "min-w-0",
   "description": "min-width: 0;"
 },
 {
   "name": "min-w-full",
   "description": "min-width: 100%;"
 },
 {
   "name": "object-contain",
   "description": "object-fit: contain;"
 },
 {
   "name": "object-cover",
   "description": "object-fit: cover;"
 },
 {
   "name": "object-fill",
   "description": "object-fit: fill;"
 },
 {
   "name": "object-none",
   "description": "object-fit: none;"
 },
 {
   "name": "object-scale-down",
   "description": "object-fit: scale-down;"
 },
 {
   "name": "object-bottom",
   "description": "object-position: bottom;"
 },
 {
   "name": "object-center",
   "description": "object-position: center;"
 },
 {
   "name": "object-left",
   "description": "object-position: left;"
 },
 {
   "name": "object-left-bottom",
   "description": "object-position: left bottom;"
 },
 {
   "name": "object-left-top",
   "description": "object-position: left top;"
 },
 {
   "name": "object-right",
   "description": "object-position: right;"
 },
 {
   "name": "object-right-bottom",
   "description": "object-position: right bottom;"
 },
 {
   "name": "object-right-top",
   "description": "object-position: right top;"
 },
 {
   "name": "object-top",
   "description": "object-position: top;"
 },
 {
   "name": "opacity-0",
   "description": "opacity: 0;"
 },
 {
   "name": "opacity-25",
   "description": "opacity: 0.25;"
 },
 {
   "name": "opacity-50",
   "description": "opacity: 0.5;"
 },
 {
   "name": "opacity-75",
   "description": "opacity: 0.75;"
 },
 {
   "name": "opacity-100",
   "description": "opacity: 1;"
 },
 {
   "name": "outline-none",
   "description": "outline: 0;"
 },
 {
   "name": "focus:outline-none",
   "description": "outline: 0;"
 },
 {
   "name": "overflow-auto",
   "description": "overflow: auto;"
 },
 {
   "name": "overflow-hidden",
   "description": "overflow: hidden;"
 },
 {
   "name": "overflow-visible",
   "description": "overflow: visible;"
 },
 {
   "name": "overflow-scroll",
   "description": "overflow: scroll;"
 },
 {
   "name": "overflow-x-auto",
   "description": "overflow-x: auto;"
 },
 {
   "name": "overflow-y-auto",
   "description": "overflow-y: auto;"
 },
 {
   "name": "overflow-x-hidden",
   "description": "overflow-x: hidden;"
 },
 {
   "name": "overflow-y-hidden",
   "description": "overflow-y: hidden;"
 },
 {
   "name": "overflow-x-visible",
   "description": "overflow-x: visible;"
 },
 {
   "name": "overflow-y-visible",
   "description": "overflow-y: visible;"
 },
 {
   "name": "overflow-x-scroll",
   "description": "overflow-x: scroll;"
 },
 {
   "name": "overflow-y-scroll",
   "description": "overflow-y: scroll;"
 },
 {
   "name": "scrolling-touch",
   "description": "-webkit-overflow-scrolling: touch;"
 },
 {
   "name": "scrolling-auto",
   "description": "-webkit-overflow-scrolling: auto;"
 },
 {
   "name": "p-0",
   "description": "padding: 0;"
 },
 {
   "name": "p-1",
   "description": "padding: 0.25rem;"
 },
 {
   "name": "p-2",
   "description": "padding: 0.5rem;"
 },
 {
   "name": "p-3",
   "description": "padding: 0.75rem;"
 },
 {
   "name": "p-4",
   "description": "padding: 1rem;"
 },
 {
   "name": "p-5",
   "description": "padding: 1.25rem;"
 },
 {
   "name": "p-6",
   "description": "padding: 1.5rem;"
 },
 {
   "name": "p-8",
   "description": "padding: 2rem;"
 },
 {
   "name": "p-10",
   "description": "padding: 2.5rem;"
 },
 {
   "name": "p-12",
   "description": "padding: 3rem;"
 },
 {
   "name": "p-16",
   "description": "padding: 4rem;"
 },
 {
   "name": "p-20",
   "description": "padding: 5rem;"
 },
 {
   "name": "p-24",
   "description": "padding: 6rem;"
 },
 {
   "name": "p-32",
   "description": "padding: 8rem;"
 },
 {
   "name": "p-40",
   "description": "padding: 10rem;"
 },
 {
   "name": "p-48",
   "description": "padding: 12rem;"
 },
 {
   "name": "p-56",
   "description": "padding: 14rem;"
 },
 {
   "name": "p-64",
   "description": "padding: 16rem;"
 },
 {
   "name": "p-px",
   "description": "padding: 1px;"
 },
 {
   "name": "py-0",
   "description": "padding-top: 0; padding-bottom: 0;"
 },
 {
   "name": "px-0",
   "description": "padding-left: 0; padding-right: 0;"
 },
 {
   "name": "py-1",
   "description": "padding-top: 0.25rem; padding-bottom: 0.25rem;"
 },
 {
   "name": "px-1",
   "description": "padding-left: 0.25rem; padding-right: 0.25rem;"
 },
 {
   "name": "py-2",
   "description": "padding-top: 0.5rem; padding-bottom: 0.5rem;"
 },
 {
   "name": "px-2",
   "description": "padding-left: 0.5rem; padding-right: 0.5rem;"
 },
 {
   "name": "py-3",
   "description": "padding-top: 0.75rem; padding-bottom: 0.75rem;"
 },
 {
   "name": "px-3",
   "description": "padding-left: 0.75rem; padding-right: 0.75rem;"
 },
 {
   "name": "py-4",
   "description": "padding-top: 1rem; padding-bottom: 1rem;"
 },
 {
   "name": "px-4",
   "description": "padding-left: 1rem; padding-right: 1rem;"
 },
 {
   "name": "py-5",
   "description": "padding-top: 1.25rem; padding-bottom: 1.25rem;"
 },
 {
   "name": "px-5",
   "description": "padding-left: 1.25rem; padding-right: 1.25rem;"
 },
 {
   "name": "py-6",
   "description": "padding-top: 1.5rem; padding-bottom: 1.5rem;"
 },
 {
   "name": "px-6",
   "description": "padding-left: 1.5rem; padding-right: 1.5rem;"
 },
 {
   "name": "py-8",
   "description": "padding-top: 2rem; padding-bottom: 2rem;"
 },
 {
   "name": "px-8",
   "description": "padding-left: 2rem; padding-right: 2rem;"
 },
 {
   "name": "py-10",
   "description": "padding-top: 2.5rem; padding-bottom: 2.5rem;"
 },
 {
   "name": "px-10",
   "description": "padding-left: 2.5rem; padding-right: 2.5rem;"
 },
 {
   "name": "py-12",
   "description": "padding-top: 3rem; padding-bottom: 3rem;"
 },
 {
   "name": "px-12",
   "description": "padding-left: 3rem; padding-right: 3rem;"
 },
 {
   "name": "py-16",
   "description": "padding-top: 4rem; padding-bottom: 4rem;"
 },
 {
   "name": "px-16",
   "description": "padding-left: 4rem; padding-right: 4rem;"
 },
 {
   "name": "py-20",
   "description": "padding-top: 5rem; padding-bottom: 5rem;"
 },
 {
   "name": "px-20",
   "description": "padding-left: 5rem; padding-right: 5rem;"
 },
 {
   "name": "py-24",
   "description": "padding-top: 6rem; padding-bottom: 6rem;"
 },
 {
   "name": "px-24",
   "description": "padding-left: 6rem; padding-right: 6rem;"
 },
 {
   "name": "py-32",
   "description": "padding-top: 8rem; padding-bottom: 8rem;"
 },
 {
   "name": "px-32",
   "description": "padding-left: 8rem; padding-right: 8rem;"
 },
 {
   "name": "py-40",
   "description": "padding-top: 10rem; padding-bottom: 10rem;"
 },
 {
   "name": "px-40",
   "description": "padding-left: 10rem; padding-right: 10rem;"
 },
 {
   "name": "py-48",
   "description": "padding-top: 12rem; padding-bottom: 12rem;"
 },
 {
   "name": "px-48",
   "description": "padding-left: 12rem; padding-right: 12rem;"
 },
 {
   "name": "py-56",
   "description": "padding-top: 14rem; padding-bottom: 14rem;"
 },
 {
   "name": "px-56",
   "description": "padding-left: 14rem; padding-right: 14rem;"
 },
 {
   "name": "py-64",
   "description": "padding-top: 16rem; padding-bottom: 16rem;"
 },
 {
   "name": "px-64",
   "description": "padding-left: 16rem; padding-right: 16rem;"
 },
 {
   "name": "py-px",
   "description": "padding-top: 1px; padding-bottom: 1px;"
 },
 {
   "name": "px-px",
   "description": "padding-left: 1px; padding-right: 1px;"
 },
 {
   "name": "pt-0",
   "description": "padding-top: 0;"
 },
 {
   "name": "pr-0",
   "description": "padding-right: 0;"
 },
 {
   "name": "pb-0",
   "description": "padding-bottom: 0;"
 },
 {
   "name": "pl-0",
   "description": "padding-left: 0;"
 },
 {
   "name": "pt-1",
   "description": "padding-top: 0.25rem;"
 },
 {
   "name": "pr-1",
   "description": "padding-right: 0.25rem;"
 },
 {
   "name": "pb-1",
   "description": "padding-bottom: 0.25rem;"
 },
 {
   "name": "pl-1",
   "description": "padding-left: 0.25rem;"
 },
 {
   "name": "pt-2",
   "description": "padding-top: 0.5rem;"
 },
 {
   "name": "pr-2",
   "description": "padding-right: 0.5rem;"
 },
 {
   "name": "pb-2",
   "description": "padding-bottom: 0.5rem;"
 },
 {
   "name": "pl-2",
   "description": "padding-left: 0.5rem;"
 },
 {
   "name": "pt-3",
   "description": "padding-top: 0.75rem;"
 },
 {
   "name": "pr-3",
   "description": "padding-right: 0.75rem;"
 },
 {
   "name": "pb-3",
   "description": "padding-bottom: 0.75rem;"
 },
 {
   "name": "pl-3",
   "description": "padding-left: 0.75rem;"
 },
 {
   "name": "pt-4",
   "description": "padding-top: 1rem;"
 },
 {
   "name": "pr-4",
   "description": "padding-right: 1rem;"
 },
 {
   "name": "pb-4",
   "description": "padding-bottom: 1rem;"
 },
 {
   "name": "pl-4",
   "description": "padding-left: 1rem;"
 },
 {
   "name": "pt-5",
   "description": "padding-top: 1.25rem;"
 },
 {
   "name": "pr-5",
   "description": "padding-right: 1.25rem;"
 },
 {
   "name": "pb-5",
   "description": "padding-bottom: 1.25rem;"
 },
 {
   "name": "pl-5",
   "description": "padding-left: 1.25rem;"
 },
 {
   "name": "pt-6",
   "description": "padding-top: 1.5rem;"
 },
 {
   "name": "pr-6",
   "description": "padding-right: 1.5rem;"
 },
 {
   "name": "pb-6",
   "description": "padding-bottom: 1.5rem;"
 },
 {
   "name": "pl-6",
   "description": "padding-left: 1.5rem;"
 },
 {
   "name": "pt-8",
   "description": "padding-top: 2rem;"
 },
 {
   "name": "pr-8",
   "description": "padding-right: 2rem;"
 },
 {
   "name": "pb-8",
   "description": "padding-bottom: 2rem;"
 },
 {
   "name": "pl-8",
   "description": "padding-left: 2rem;"
 },
 {
   "name": "pt-10",
   "description": "padding-top: 2.5rem;"
 },
 {
   "name": "pr-10",
   "description": "padding-right: 2.5rem;"
 },
 {
   "name": "pb-10",
   "description": "padding-bottom: 2.5rem;"
 },
 {
   "name": "pl-10",
   "description": "padding-left: 2.5rem;"
 },
 {
   "name": "pt-12",
   "description": "padding-top: 3rem;"
 },
 {
   "name": "pr-12",
   "description": "padding-right: 3rem;"
 },
 {
   "name": "pb-12",
   "description": "padding-bottom: 3rem;"
 },
 {
   "name": "pl-12",
   "description": "padding-left: 3rem;"
 },
 {
   "name": "pt-16",
   "description": "padding-top: 4rem;"
 },
 {
   "name": "pr-16",
   "description": "padding-right: 4rem;"
 },
 {
   "name": "pb-16",
   "description": "padding-bottom: 4rem;"
 },
 {
   "name": "pl-16",
   "description": "padding-left: 4rem;"
 },
 {
   "name": "pt-20",
   "description": "padding-top: 5rem;"
 },
 {
   "name": "pr-20",
   "description": "padding-right: 5rem;"
 },
 {
   "name": "pb-20",
   "description": "padding-bottom: 5rem;"
 },
 {
   "name": "pl-20",
   "description": "padding-left: 5rem;"
 },
 {
   "name": "pt-24",
   "description": "padding-top: 6rem;"
 },
 {
   "name": "pr-24",
   "description": "padding-right: 6rem;"
 },
 {
   "name": "pb-24",
   "description": "padding-bottom: 6rem;"
 },
 {
   "name": "pl-24",
   "description": "padding-left: 6rem;"
 },
 {
   "name": "pt-32",
   "description": "padding-top: 8rem;"
 },
 {
   "name": "pr-32",
   "description": "padding-right: 8rem;"
 },
 {
   "name": "pb-32",
   "description": "padding-bottom: 8rem;"
 },
 {
   "name": "pl-32",
   "description": "padding-left: 8rem;"
 },
 {
   "name": "pt-40",
   "description": "padding-top: 10rem;"
 },
 {
   "name": "pr-40",
   "description": "padding-right: 10rem;"
 },
 {
   "name": "pb-40",
   "description": "padding-bottom: 10rem;"
 },
 {
   "name": "pl-40",
   "description": "padding-left: 10rem;"
 },
 {
   "name": "pt-48",
   "description": "padding-top: 12rem;"
 },
 {
   "name": "pr-48",
   "description": "padding-right: 12rem;"
 },
 {
   "name": "pb-48",
   "description": "padding-bottom: 12rem;"
 },
 {
   "name": "pl-48",
   "description": "padding-left: 12rem;"
 },
 {
   "name": "pt-56",
   "description": "padding-top: 14rem;"
 },
 {
   "name": "pr-56",
   "description": "padding-right: 14rem;"
 },
 {
   "name": "pb-56",
   "description": "padding-bottom: 14rem;"
 },
 {
   "name": "pl-56",
   "description": "padding-left: 14rem;"
 },
 {
   "name": "pt-64",
   "description": "padding-top: 16rem;"
 },
 {
   "name": "pr-64",
   "description": "padding-right: 16rem;"
 },
 {
   "name": "pb-64",
   "description": "padding-bottom: 16rem;"
 },
 {
   "name": "pl-64",
   "description": "padding-left: 16rem;"
 },
 {
   "name": "pt-px",
   "description": "padding-top: 1px;"
 },
 {
   "name": "pr-px",
   "description": "padding-right: 1px;"
 },
 {
   "name": "pb-px",
   "description": "padding-bottom: 1px;"
 },
 {
   "name": "pl-px",
   "description": "padding-left: 1px;"
 },
 {
   "name": "pointer-events-none",
   "description": "pointer-events: none;"
 },
 {
   "name": "pointer-events-auto",
   "description": "pointer-events: auto;"
 },
 {
   "name": "static",
   "description": "position: static;"
 },
 {
   "name": "fixed",
   "description": "position: fixed;"
 },
 {
   "name": "absolute",
   "description": "position: absolute;"
 },
 {
   "name": "relative",
   "description": "position: relative;"
 },
 {
   "name": "sticky",
   "description": "position: sticky;"
 },
 {
   "name": "inset-0",
   "description": "top: 0; right: 0; bottom: 0; left: 0;"
 },
 {
   "name": "inset-auto",
   "description": "top: auto; right: auto; bottom: auto; left: auto;"
 },
 {
   "name": "inset-y-0",
   "description": "top: 0; bottom: 0;"
 },
 {
   "name": "inset-x-0",
   "description": "right: 0; left: 0;"
 },
 {
   "name": "inset-y-auto",
   "description": "top: auto; bottom: auto;"
 },
 {
   "name": "inset-x-auto",
   "description": "right: auto; left: auto;"
 },
 {
   "name": "top-0",
   "description": "top: 0;"
 },
 {
   "name": "right-0",
   "description": "right: 0;"
 },
 {
   "name": "bottom-0",
   "description": "bottom: 0;"
 },
 {
   "name": "left-0",
   "description": "left: 0;"
 },
 {
   "name": "top-auto",
   "description": "top: auto;"
 },
 {
   "name": "right-auto",
   "description": "right: auto;"
 },
 {
   "name": "bottom-auto",
   "description": "bottom: auto;"
 },
 {
   "name": "left-auto",
   "description": "left: auto;"
 },
 {
   "name": "resize-none",
   "description": "resize: none;"
 },
 {
   "name": "resize-y",
   "description": "resize: vertical;"
 },
 {
   "name": "resize-x",
   "description": "resize: horizontal;"
 },
 {
   "name": "resize",
   "description": "resize: both;"
 },
 {
   "name": "shadow",
   "description": "box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);"
 },
 {
   "name": "shadow-md",
   "description": "box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);"
 },
 {
   "name": "shadow-lg",
   "description": "box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);"
 },
 {
   "name": "shadow-xl",
   "description": "box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);"
 },
 {
   "name": "shadow-2xl",
   "description": "box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);"
 },
 {
   "name": "shadow-inner",
   "description": "box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);"
 },
 {
   "name": "shadow-outline",
   "description": "box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);"
 },
 {
   "name": "shadow-none",
   "description": "box-shadow: none;"
 },
 {
   "name": "hover:shadow",
   "description": "box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);"
 },
 {
   "name": "hover:shadow-md",
   "description": "box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);"
 },
 {
   "name": "hover:shadow-lg",
   "description": "box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);"
 },
 {
   "name": "hover:shadow-xl",
   "description": "box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);"
 },
 {
   "name": "hover:shadow-2xl",
   "description": "box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);"
 },
 {
   "name": "hover:shadow-inner",
   "description": "box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);"
 },
 {
   "name": "hover:shadow-outline",
   "description": "box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);"
 },
 {
   "name": "hover:shadow-none",
   "description": "box-shadow: none;"
 },
 {
   "name": "focus:shadow",
   "description": "box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);"
 },
 {
   "name": "focus:shadow-md",
   "description": "box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);"
 },
 {
   "name": "focus:shadow-lg",
   "description": "box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);"
 },
 {
   "name": "focus:shadow-xl",
   "description": "box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);"
 },
 {
   "name": "focus:shadow-2xl",
   "description": "box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);"
 },
 {
   "name": "focus:shadow-inner",
   "description": "box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);"
 },
 {
   "name": "focus:shadow-outline",
   "description": "box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);"
 },
 {
   "name": "focus:shadow-none",
   "description": "box-shadow: none;"
 },
 {
   "name": "fill-current",
   "description": "fill: currentColor;"
 },
 {
   "name": "stroke-current",
   "description": "stroke: currentColor;"
 },
 {
   "name": "table-auto",
   "description": "table-layout: auto;"
 },
 {
   "name": "table-fixed",
   "description": "table-layout: fixed;"
 },
 {
   "name": "text-left",
   "description": "text-align: left;"
 },
 {
   "name": "text-center",
   "description": "text-align: center;"
 },
 {
   "name": "text-right",
   "description": "text-align: right;"
 },
 {
   "name": "text-justify",
   "description": "text-align: justify;"
 },
 {
   "name": "text-transparent",
   "description": "color: transparent;"
 },
 {
   "name": "text-black",
   "description": "color: #000;"
 },
 {
   "name": "text-white",
   "description": "color: #fff;"
 },
 {
   "name": "text-gray-100",
   "description": "color: #f7fafc;"
 },
 {
   "name": "text-gray-200",
   "description": "color: #edf2f7;"
 },
 {
   "name": "text-gray-300",
   "description": "color: #e2e8f0;"
 },
 {
   "name": "text-gray-400",
   "description": "color: #cbd5e0;"
 },
 {
   "name": "text-gray-500",
   "description": "color: #a0aec0;"
 },
 {
   "name": "text-gray-600",
   "description": "color: #718096;"
 },
 {
   "name": "text-gray-700",
   "description": "color: #4a5568;"
 },
 {
   "name": "text-gray-800",
   "description": "color: #2d3748;"
 },
 {
   "name": "text-gray-900",
   "description": "color: #1a202c;"
 },
 {
   "name": "text-red-100",
   "description": "color: #fff5f5;"
 },
 {
   "name": "text-red-200",
   "description": "color: #fed7d7;"
 },
 {
   "name": "text-red-300",
   "description": "color: #feb2b2;"
 },
 {
   "name": "text-red-400",
   "description": "color: #fc8181;"
 },
 {
   "name": "text-red-500",
   "description": "color: #f56565;"
 },
 {
   "name": "text-red-600",
   "description": "color: #e53e3e;"
 },
 {
   "name": "text-red-700",
   "description": "color: #c53030;"
 },
 {
   "name": "text-red-800",
   "description": "color: #9b2c2c;"
 },
 {
   "name": "text-red-900",
   "description": "color: #742a2a;"
 },
 {
   "name": "text-orange-100",
   "description": "color: #fffaf0;"
 },
 {
   "name": "text-orange-200",
   "description": "color: #feebc8;"
 },
 {
   "name": "text-orange-300",
   "description": "color: #fbd38d;"
 },
 {
   "name": "text-orange-400",
   "description": "color: #f6ad55;"
 },
 {
   "name": "text-orange-500",
   "description": "color: #ed8936;"
 },
 {
   "name": "text-orange-600",
   "description": "color: #dd6b20;"
 },
 {
   "name": "text-orange-700",
   "description": "color: #c05621;"
 },
 {
   "name": "text-orange-800",
   "description": "color: #9c4221;"
 },
 {
   "name": "text-orange-900",
   "description": "color: #7b341e;"
 },
 {
   "name": "text-yellow-100",
   "description": "color: #fffff0;"
 },
 {
   "name": "text-yellow-200",
   "description": "color: #fefcbf;"
 },
 {
   "name": "text-yellow-300",
   "description": "color: #faf089;"
 },
 {
   "name": "text-yellow-400",
   "description": "color: #f6e05e;"
 },
 {
   "name": "text-yellow-500",
   "description": "color: #ecc94b;"
 },
 {
   "name": "text-yellow-600",
   "description": "color: #d69e2e;"
 },
 {
   "name": "text-yellow-700",
   "description": "color: #b7791f;"
 },
 {
   "name": "text-yellow-800",
   "description": "color: #975a16;"
 },
 {
   "name": "text-yellow-900",
   "description": "color: #744210;"
 },
 {
   "name": "text-green-100",
   "description": "color: #f0fff4;"
 },
 {
   "name": "text-green-200",
   "description": "color: #c6f6d5;"
 },
 {
   "name": "text-green-300",
   "description": "color: #9ae6b4;"
 },
 {
   "name": "text-green-400",
   "description": "color: #68d391;"
 },
 {
   "name": "text-green-500",
   "description": "color: #48bb78;"
 },
 {
   "name": "text-green-600",
   "description": "color: #38a169;"
 },
 {
   "name": "text-green-700",
   "description": "color: #2f855a;"
 },
 {
   "name": "text-green-800",
   "description": "color: #276749;"
 },
 {
   "name": "text-green-900",
   "description": "color: #22543d;"
 },
 {
   "name": "text-teal-100",
   "description": "color: #e6fffa;"
 },
 {
   "name": "text-teal-200",
   "description": "color: #b2f5ea;"
 },
 {
   "name": "text-teal-300",
   "description": "color: #81e6d9;"
 },
 {
   "name": "text-teal-400",
   "description": "color: #4fd1c5;"
 },
 {
   "name": "text-teal-500",
   "description": "color: #38b2ac;"
 },
 {
   "name": "text-teal-600",
   "description": "color: #319795;"
 },
 {
   "name": "text-teal-700",
   "description": "color: #2c7a7b;"
 },
 {
   "name": "text-teal-800",
   "description": "color: #285e61;"
 },
 {
   "name": "text-teal-900",
   "description": "color: #234e52;"
 },
 {
   "name": "text-blue-100",
   "description": "color: #ebf8ff;"
 },
 {
   "name": "text-blue-200",
   "description": "color: #bee3f8;"
 },
 {
   "name": "text-blue-300",
   "description": "color: #90cdf4;"
 },
 {
   "name": "text-blue-400",
   "description": "color: #63b3ed;"
 },
 {
   "name": "text-blue-500",
   "description": "color: #4299e1;"
 },
 {
   "name": "text-blue-600",
   "description": "color: #3182ce;"
 },
 {
   "name": "text-blue-700",
   "description": "color: #2b6cb0;"
 },
 {
   "name": "text-blue-800",
   "description": "color: #2c5282;"
 },
 {
   "name": "text-blue-900",
   "description": "color: #2a4365;"
 },
 {
   "name": "text-indigo-100",
   "description": "color: #ebf4ff;"
 },
 {
   "name": "text-indigo-200",
   "description": "color: #c3dafe;"
 },
 {
   "name": "text-indigo-300",
   "description": "color: #a3bffa;"
 },
 {
   "name": "text-indigo-400",
   "description": "color: #7f9cf5;"
 },
 {
   "name": "text-indigo-500",
   "description": "color: #667eea;"
 },
 {
   "name": "text-indigo-600",
   "description": "color: #5a67d8;"
 },
 {
   "name": "text-indigo-700",
   "description": "color: #4c51bf;"
 },
 {
   "name": "text-indigo-800",
   "description": "color: #434190;"
 },
 {
   "name": "text-indigo-900",
   "description": "color: #3c366b;"
 },
 {
   "name": "text-purple-100",
   "description": "color: #faf5ff;"
 },
 {
   "name": "text-purple-200",
   "description": "color: #e9d8fd;"
 },
 {
   "name": "text-purple-300",
   "description": "color: #d6bcfa;"
 },
 {
   "name": "text-purple-400",
   "description": "color: #b794f4;"
 },
 {
   "name": "text-purple-500",
   "description": "color: #9f7aea;"
 },
 {
   "name": "text-purple-600",
   "description": "color: #805ad5;"
 },
 {
   "name": "text-purple-700",
   "description": "color: #6b46c1;"
 },
 {
   "name": "text-purple-800",
   "description": "color: #553c9a;"
 },
 {
   "name": "text-purple-900",
   "description": "color: #44337a;"
 },
 {
   "name": "text-pink-100",
   "description": "color: #fff5f7;"
 },
 {
   "name": "text-pink-200",
   "description": "color: #fed7e2;"
 },
 {
   "name": "text-pink-300",
   "description": "color: #fbb6ce;"
 },
 {
   "name": "text-pink-400",
   "description": "color: #f687b3;"
 },
 {
   "name": "text-pink-500",
   "description": "color: #ed64a6;"
 },
 {
   "name": "text-pink-600",
   "description": "color: #d53f8c;"
 },
 {
   "name": "text-pink-700",
   "description": "color: #b83280;"
 },
 {
   "name": "text-pink-800",
   "description": "color: #97266d;"
 },
 {
   "name": "text-pink-900",
   "description": "color: #702459;"
 },
 {
   "name": "hover:text-transparent",
   "description": "color: transparent;"
 },
 {
   "name": "hover:text-black",
   "description": "color: #000;"
 },
 {
   "name": "hover:text-white",
   "description": "color: #fff;"
 },
 {
   "name": "hover:text-gray-100",
   "description": "color: #f7fafc;"
 },
 {
   "name": "hover:text-gray-200",
   "description": "color: #edf2f7;"
 },
 {
   "name": "hover:text-gray-300",
   "description": "color: #e2e8f0;"
 },
 {
   "name": "hover:text-gray-400",
   "description": "color: #cbd5e0;"
 },
 {
   "name": "hover:text-gray-500",
   "description": "color: #a0aec0;"
 },
 {
   "name": "hover:text-gray-600",
   "description": "color: #718096;"
 },
 {
   "name": "hover:text-gray-700",
   "description": "color: #4a5568;"
 },
 {
   "name": "hover:text-gray-800",
   "description": "color: #2d3748;"
 },
 {
   "name": "hover:text-gray-900",
   "description": "color: #1a202c;"
 },
 {
   "name": "hover:text-red-100",
   "description": "color: #fff5f5;"
 },
 {
   "name": "hover:text-red-200",
   "description": "color: #fed7d7;"
 },
 {
   "name": "hover:text-red-300",
   "description": "color: #feb2b2;"
 },
 {
   "name": "hover:text-red-400",
   "description": "color: #fc8181;"
 },
 {
   "name": "hover:text-red-500",
   "description": "color: #f56565;"
 },
 {
   "name": "hover:text-red-600",
   "description": "color: #e53e3e;"
 },
 {
   "name": "hover:text-red-700",
   "description": "color: #c53030;"
 },
 {
   "name": "hover:text-red-800",
   "description": "color: #9b2c2c;"
 },
 {
   "name": "hover:text-red-900",
   "description": "color: #742a2a;"
 },
 {
   "name": "hover:text-orange-100",
   "description": "color: #fffaf0;"
 },
 {
   "name": "hover:text-orange-200",
   "description": "color: #feebc8;"
 },
 {
   "name": "hover:text-orange-300",
   "description": "color: #fbd38d;"
 },
 {
   "name": "hover:text-orange-400",
   "description": "color: #f6ad55;"
 },
 {
   "name": "hover:text-orange-500",
   "description": "color: #ed8936;"
 },
 {
   "name": "hover:text-orange-600",
   "description": "color: #dd6b20;"
 },
 {
   "name": "hover:text-orange-700",
   "description": "color: #c05621;"
 },
 {
   "name": "hover:text-orange-800",
   "description": "color: #9c4221;"
 },
 {
   "name": "hover:text-orange-900",
   "description": "color: #7b341e;"
 },
 {
   "name": "hover:text-yellow-100",
   "description": "color: #fffff0;"
 },
 {
   "name": "hover:text-yellow-200",
   "description": "color: #fefcbf;"
 },
 {
   "name": "hover:text-yellow-300",
   "description": "color: #faf089;"
 },
 {
   "name": "hover:text-yellow-400",
   "description": "color: #f6e05e;"
 },
 {
   "name": "hover:text-yellow-500",
   "description": "color: #ecc94b;"
 },
 {
   "name": "hover:text-yellow-600",
   "description": "color: #d69e2e;"
 },
 {
   "name": "hover:text-yellow-700",
   "description": "color: #b7791f;"
 },
 {
   "name": "hover:text-yellow-800",
   "description": "color: #975a16;"
 },
 {
   "name": "hover:text-yellow-900",
   "description": "color: #744210;"
 },
 {
   "name": "hover:text-green-100",
   "description": "color: #f0fff4;"
 },
 {
   "name": "hover:text-green-200",
   "description": "color: #c6f6d5;"
 },
 {
   "name": "hover:text-green-300",
   "description": "color: #9ae6b4;"
 },
 {
   "name": "hover:text-green-400",
   "description": "color: #68d391;"
 },
 {
   "name": "hover:text-green-500",
   "description": "color: #48bb78;"
 },
 {
   "name": "hover:text-green-600",
   "description": "color: #38a169;"
 },
 {
   "name": "hover:text-green-700",
   "description": "color: #2f855a;"
 },
 {
   "name": "hover:text-green-800",
   "description": "color: #276749;"
 },
 {
   "name": "hover:text-green-900",
   "description": "color: #22543d;"
 },
 {
   "name": "hover:text-teal-100",
   "description": "color: #e6fffa;"
 },
 {
   "name": "hover:text-teal-200",
   "description": "color: #b2f5ea;"
 },
 {
   "name": "hover:text-teal-300",
   "description": "color: #81e6d9;"
 },
 {
   "name": "hover:text-teal-400",
   "description": "color: #4fd1c5;"
 },
 {
   "name": "hover:text-teal-500",
   "description": "color: #38b2ac;"
 },
 {
   "name": "hover:text-teal-600",
   "description": "color: #319795;"
 },
 {
   "name": "hover:text-teal-700",
   "description": "color: #2c7a7b;"
 },
 {
   "name": "hover:text-teal-800",
   "description": "color: #285e61;"
 },
 {
   "name": "hover:text-teal-900",
   "description": "color: #234e52;"
 },
 {
   "name": "hover:text-blue-100",
   "description": "color: #ebf8ff;"
 },
 {
   "name": "hover:text-blue-200",
   "description": "color: #bee3f8;"
 },
 {
   "name": "hover:text-blue-300",
   "description": "color: #90cdf4;"
 },
 {
   "name": "hover:text-blue-400",
   "description": "color: #63b3ed;"
 },
 {
   "name": "hover:text-blue-500",
   "description": "color: #4299e1;"
 },
 {
   "name": "hover:text-blue-600",
   "description": "color: #3182ce;"
 },
 {
   "name": "hover:text-blue-700",
   "description": "color: #2b6cb0;"
 },
 {
   "name": "hover:text-blue-800",
   "description": "color: #2c5282;"
 },
 {
   "name": "hover:text-blue-900",
   "description": "color: #2a4365;"
 },
 {
   "name": "hover:text-indigo-100",
   "description": "color: #ebf4ff;"
 },
 {
   "name": "hover:text-indigo-200",
   "description": "color: #c3dafe;"
 },
 {
   "name": "hover:text-indigo-300",
   "description": "color: #a3bffa;"
 },
 {
   "name": "hover:text-indigo-400",
   "description": "color: #7f9cf5;"
 },
 {
   "name": "hover:text-indigo-500",
   "description": "color: #667eea;"
 },
 {
   "name": "hover:text-indigo-600",
   "description": "color: #5a67d8;"
 },
 {
   "name": "hover:text-indigo-700",
   "description": "color: #4c51bf;"
 },
 {
   "name": "hover:text-indigo-800",
   "description": "color: #434190;"
 },
 {
   "name": "hover:text-indigo-900",
   "description": "color: #3c366b;"
 },
 {
   "name": "hover:text-purple-100",
   "description": "color: #faf5ff;"
 },
 {
   "name": "hover:text-purple-200",
   "description": "color: #e9d8fd;"
 },
 {
   "name": "hover:text-purple-300",
   "description": "color: #d6bcfa;"
 },
 {
   "name": "hover:text-purple-400",
   "description": "color: #b794f4;"
 },
 {
   "name": "hover:text-purple-500",
   "description": "color: #9f7aea;"
 },
 {
   "name": "hover:text-purple-600",
   "description": "color: #805ad5;"
 },
 {
   "name": "hover:text-purple-700",
   "description": "color: #6b46c1;"
 },
 {
   "name": "hover:text-purple-800",
   "description": "color: #553c9a;"
 },
 {
   "name": "hover:text-purple-900",
   "description": "color: #44337a;"
 },
 {
   "name": "hover:text-pink-100",
   "description": "color: #fff5f7;"
 },
 {
   "name": "hover:text-pink-200",
   "description": "color: #fed7e2;"
 },
 {
   "name": "hover:text-pink-300",
   "description": "color: #fbb6ce;"
 },
 {
   "name": "hover:text-pink-400",
   "description": "color: #f687b3;"
 },
 {
   "name": "hover:text-pink-500",
   "description": "color: #ed64a6;"
 },
 {
   "name": "hover:text-pink-600",
   "description": "color: #d53f8c;"
 },
 {
   "name": "hover:text-pink-700",
   "description": "color: #b83280;"
 },
 {
   "name": "hover:text-pink-800",
   "description": "color: #97266d;"
 },
 {
   "name": "hover:text-pink-900",
   "description": "color: #702459;"
 },
 {
   "name": "focus:text-transparent",
   "description": "color: transparent;"
 },
 {
   "name": "focus:text-black",
   "description": "color: #000;"
 },
 {
   "name": "focus:text-white",
   "description": "color: #fff;"
 },
 {
   "name": "focus:text-gray-100",
   "description": "color: #f7fafc;"
 },
 {
   "name": "focus:text-gray-200",
   "description": "color: #edf2f7;"
 },
 {
   "name": "focus:text-gray-300",
   "description": "color: #e2e8f0;"
 },
 {
   "name": "focus:text-gray-400",
   "description": "color: #cbd5e0;"
 },
 {
   "name": "focus:text-gray-500",
   "description": "color: #a0aec0;"
 },
 {
   "name": "focus:text-gray-600",
   "description": "color: #718096;"
 },
 {
   "name": "focus:text-gray-700",
   "description": "color: #4a5568;"
 },
 {
   "name": "focus:text-gray-800",
   "description": "color: #2d3748;"
 },
 {
   "name": "focus:text-gray-900",
   "description": "color: #1a202c;"
 },
 {
   "name": "focus:text-red-100",
   "description": "color: #fff5f5;"
 },
 {
   "name": "focus:text-red-200",
   "description": "color: #fed7d7;"
 },
 {
   "name": "focus:text-red-300",
   "description": "color: #feb2b2;"
 },
 {
   "name": "focus:text-red-400",
   "description": "color: #fc8181;"
 },
 {
   "name": "focus:text-red-500",
   "description": "color: #f56565;"
 },
 {
   "name": "focus:text-red-600",
   "description": "color: #e53e3e;"
 },
 {
   "name": "focus:text-red-700",
   "description": "color: #c53030;"
 },
 {
   "name": "focus:text-red-800",
   "description": "color: #9b2c2c;"
 },
 {
   "name": "focus:text-red-900",
   "description": "color: #742a2a;"
 },
 {
   "name": "focus:text-orange-100",
   "description": "color: #fffaf0;"
 },
 {
   "name": "focus:text-orange-200",
   "description": "color: #feebc8;"
 },
 {
   "name": "focus:text-orange-300",
   "description": "color: #fbd38d;"
 },
 {
   "name": "focus:text-orange-400",
   "description": "color: #f6ad55;"
 },
 {
   "name": "focus:text-orange-500",
   "description": "color: #ed8936;"
 },
 {
   "name": "focus:text-orange-600",
   "description": "color: #dd6b20;"
 },
 {
   "name": "focus:text-orange-700",
   "description": "color: #c05621;"
 },
 {
   "name": "focus:text-orange-800",
   "description": "color: #9c4221;"
 },
 {
   "name": "focus:text-orange-900",
   "description": "color: #7b341e;"
 },
 {
   "name": "focus:text-yellow-100",
   "description": "color: #fffff0;"
 },
 {
   "name": "focus:text-yellow-200",
   "description": "color: #fefcbf;"
 },
 {
   "name": "focus:text-yellow-300",
   "description": "color: #faf089;"
 },
 {
   "name": "focus:text-yellow-400",
   "description": "color: #f6e05e;"
 },
 {
   "name": "focus:text-yellow-500",
   "description": "color: #ecc94b;"
 },
 {
   "name": "focus:text-yellow-600",
   "description": "color: #d69e2e;"
 },
 {
   "name": "focus:text-yellow-700",
   "description": "color: #b7791f;"
 },
 {
   "name": "focus:text-yellow-800",
   "description": "color: #975a16;"
 },
 {
   "name": "focus:text-yellow-900",
   "description": "color: #744210;"
 },
 {
   "name": "focus:text-green-100",
   "description": "color: #f0fff4;"
 },
 {
   "name": "focus:text-green-200",
   "description": "color: #c6f6d5;"
 },
 {
   "name": "focus:text-green-300",
   "description": "color: #9ae6b4;"
 },
 {
   "name": "focus:text-green-400",
   "description": "color: #68d391;"
 },
 {
   "name": "focus:text-green-500",
   "description": "color: #48bb78;"
 },
 {
   "name": "focus:text-green-600",
   "description": "color: #38a169;"
 },
 {
   "name": "focus:text-green-700",
   "description": "color: #2f855a;"
 },
 {
   "name": "focus:text-green-800",
   "description": "color: #276749;"
 },
 {
   "name": "focus:text-green-900",
   "description": "color: #22543d;"
 },
 {
   "name": "focus:text-teal-100",
   "description": "color: #e6fffa;"
 },
 {
   "name": "focus:text-teal-200",
   "description": "color: #b2f5ea;"
 },
 {
   "name": "focus:text-teal-300",
   "description": "color: #81e6d9;"
 },
 {
   "name": "focus:text-teal-400",
   "description": "color: #4fd1c5;"
 },
 {
   "name": "focus:text-teal-500",
   "description": "color: #38b2ac;"
 },
 {
   "name": "focus:text-teal-600",
   "description": "color: #319795;"
 },
 {
   "name": "focus:text-teal-700",
   "description": "color: #2c7a7b;"
 },
 {
   "name": "focus:text-teal-800",
   "description": "color: #285e61;"
 },
 {
   "name": "focus:text-teal-900",
   "description": "color: #234e52;"
 },
 {
   "name": "focus:text-blue-100",
   "description": "color: #ebf8ff;"
 },
 {
   "name": "focus:text-blue-200",
   "description": "color: #bee3f8;"
 },
 {
   "name": "focus:text-blue-300",
   "description": "color: #90cdf4;"
 },
 {
   "name": "focus:text-blue-400",
   "description": "color: #63b3ed;"
 },
 {
   "name": "focus:text-blue-500",
   "description": "color: #4299e1;"
 },
 {
   "name": "focus:text-blue-600",
   "description": "color: #3182ce;"
 },
 {
   "name": "focus:text-blue-700",
   "description": "color: #2b6cb0;"
 },
 {
   "name": "focus:text-blue-800",
   "description": "color: #2c5282;"
 },
 {
   "name": "focus:text-blue-900",
   "description": "color: #2a4365;"
 },
 {
   "name": "focus:text-indigo-100",
   "description": "color: #ebf4ff;"
 },
 {
   "name": "focus:text-indigo-200",
   "description": "color: #c3dafe;"
 },
 {
   "name": "focus:text-indigo-300",
   "description": "color: #a3bffa;"
 },
 {
   "name": "focus:text-indigo-400",
   "description": "color: #7f9cf5;"
 },
 {
   "name": "focus:text-indigo-500",
   "description": "color: #667eea;"
 },
 {
   "name": "focus:text-indigo-600",
   "description": "color: #5a67d8;"
 },
 {
   "name": "focus:text-indigo-700",
   "description": "color: #4c51bf;"
 },
 {
   "name": "focus:text-indigo-800",
   "description": "color: #434190;"
 },
 {
   "name": "focus:text-indigo-900",
   "description": "color: #3c366b;"
 },
 {
   "name": "focus:text-purple-100",
   "description": "color: #faf5ff;"
 },
 {
   "name": "focus:text-purple-200",
   "description": "color: #e9d8fd;"
 },
 {
   "name": "focus:text-purple-300",
   "description": "color: #d6bcfa;"
 },
 {
   "name": "focus:text-purple-400",
   "description": "color: #b794f4;"
 },
 {
   "name": "focus:text-purple-500",
   "description": "color: #9f7aea;"
 },
 {
   "name": "focus:text-purple-600",
   "description": "color: #805ad5;"
 },
 {
   "name": "focus:text-purple-700",
   "description": "color: #6b46c1;"
 },
 {
   "name": "focus:text-purple-800",
   "description": "color: #553c9a;"
 },
 {
   "name": "focus:text-purple-900",
   "description": "color: #44337a;"
 },
 {
   "name": "focus:text-pink-100",
   "description": "color: #fff5f7;"
 },
 {
   "name": "focus:text-pink-200",
   "description": "color: #fed7e2;"
 },
 {
   "name": "focus:text-pink-300",
   "description": "color: #fbb6ce;"
 },
 {
   "name": "focus:text-pink-400",
   "description": "color: #f687b3;"
 },
 {
   "name": "focus:text-pink-500",
   "description": "color: #ed64a6;"
 },
 {
   "name": "focus:text-pink-600",
   "description": "color: #d53f8c;"
 },
 {
   "name": "focus:text-pink-700",
   "description": "color: #b83280;"
 },
 {
   "name": "focus:text-pink-800",
   "description": "color: #97266d;"
 },
 {
   "name": "focus:text-pink-900",
   "description": "color: #702459;"
 },
 {
   "name": "text-xs",
   "description": "font-size: 0.75rem;"
 },
 {
   "name": "text-sm",
   "description": "font-size: 0.875rem;"
 },
 {
   "name": "text-base",
   "description": "font-size: 1rem;"
 },
 {
   "name": "text-lg",
   "description": "font-size: 1.125rem;"
 },
 {
   "name": "text-xl",
   "description": "font-size: 1.25rem;"
 },
 {
   "name": "text-2xl",
   "description": "font-size: 1.5rem;"
 },
 {
   "name": "text-3xl",
   "description": "font-size: 1.875rem;"
 },
 {
   "name": "text-4xl",
   "description": "font-size: 2.25rem;"
 },
 {
   "name": "text-5xl",
   "description": "font-size: 3rem;"
 },
 {
   "name": "text-6xl",
   "description": "font-size: 4rem;"
 },
 {
   "name": "italic",
   "description": "font-style: italic;"
 },
 {
   "name": "not-italic",
   "description": "font-style: normal;"
 },
 {
   "name": "uppercase",
   "description": "text-transform: uppercase;"
 },
 {
   "name": "lowercase",
   "description": "text-transform: lowercase;"
 },
 {
   "name": "capitalize",
   "description": "text-transform: capitalize;"
 },
 {
   "name": "normal-case",
   "description": "text-transform: none;"
 },
 {
   "name": "underline",
   "description": "text-decoration: underline;"
 },
 {
   "name": "line-through",
   "description": "text-decoration: line-through;"
 },
 {
   "name": "no-underline",
   "description": "text-decoration: none;"
 },
 {
   "name": "hover:underline",
   "description": "text-decoration: underline;"
 },
 {
   "name": "hover:line-through",
   "description": "text-decoration: line-through;"
 },
 {
   "name": "hover:no-underline",
   "description": "text-decoration: none;"
 },
 {
   "name": "focus:underline",
   "description": "text-decoration: underline;"
 },
 {
   "name": "focus:line-through",
   "description": "text-decoration: line-through;"
 },
 {
   "name": "focus:no-underline",
   "description": "text-decoration: none;"
 },
 {
   "name": "antialiased",
   "description": "-webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;"
 },
 {
   "name": "subpixel-antialiased",
   "description": "-webkit-font-smoothing: auto; -moz-osx-font-smoothing: auto;"
 },
 {
   "name": "tracking-tighter",
   "description": "letter-spacing: -0.05em;"
 },
 {
   "name": "tracking-tight",
   "description": "letter-spacing: -0.025em;"
 },
 {
   "name": "tracking-normal",
   "description": "letter-spacing: 0;"
 },
 {
   "name": "tracking-wide",
   "description": "letter-spacing: 0.025em;"
 },
 {
   "name": "tracking-wider",
   "description": "letter-spacing: 0.05em;"
 },
 {
   "name": "tracking-widest",
   "description": "letter-spacing: 0.1em;"
 },
 {
   "name": "select-none",
   "description": "user-select: none;"
 },
 {
   "name": "select-text",
   "description": "user-select: text;"
 },
 {
   "name": "select-all",
   "description": "user-select: all;"
 },
 {
   "name": "select-auto",
   "description": "user-select: auto;"
 },
 {
   "name": "align-baseline",
   "description": "vertical-align: baseline;"
 },
 {
   "name": "align-top",
   "description": "vertical-align: top;"
 },
 {
   "name": "align-middle",
   "description": "vertical-align: middle;"
 },
 {
   "name": "align-bottom",
   "description": "vertical-align: bottom;"
 },
 {
   "name": "align-text-top",
   "description": "vertical-align: text-top;"
 },
 {
   "name": "align-text-bottom",
   "description": "vertical-align: text-bottom;"
 },
 {
   "name": "visible",
   "description": "visibility: visible;"
 },
 {
   "name": "invisible",
   "description": "visibility: hidden;"
 },
 {
   "name": "whitespace-normal",
   "description": "white-space: normal;"
 },
 {
   "name": "whitespace-no-wrap",
   "description": "white-space: nowrap;"
 },
 {
   "name": "whitespace-pre",
   "description": "white-space: pre;"
 },
 {
   "name": "whitespace-pre-line",
   "description": "white-space: pre-line;"
 },
 {
   "name": "whitespace-pre-wrap",
   "description": "white-space: pre-wrap;"
 },
 {
   "name": "break-normal",
   "description": "overflow-wrap: normal; word-break: normal;"
 },
 {
   "name": "break-words",
   "description": "overflow-wrap: break-word;"
 },
 {
   "name": "break-all",
   "description": "word-break: break-all;"
 },
 {
   "name": "truncate",
   "description": "overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"
 },
 {
   "name": "w-0",
   "description": "width: 0;"
 },
 {
   "name": "w-1",
   "description": "width: 0.25rem;"
 },
 {
   "name": "w-2",
   "description": "width: 0.5rem;"
 },
 {
   "name": "w-3",
   "description": "width: 0.75rem;"
 },
 {
   "name": "w-4",
   "description": "width: 1rem;"
 },
 {
   "name": "w-5",
   "description": "width: 1.25rem;"
 },
 {
   "name": "w-6",
   "description": "width: 1.5rem;"
 },
 {
   "name": "w-8",
   "description": "width: 2rem;"
 },
 {
   "name": "w-10",
   "description": "width: 2.5rem;"
 },
 {
   "name": "w-12",
   "description": "width: 3rem;"
 },
 {
   "name": "w-16",
   "description": "width: 4rem;"
 },
 {
   "name": "w-20",
   "description": "width: 5rem;"
 },
 {
   "name": "w-24",
   "description": "width: 6rem;"
 },
 {
   "name": "w-32",
   "description": "width: 8rem;"
 },
 {
   "name": "w-40",
   "description": "width: 10rem;"
 },
 {
   "name": "w-48",
   "description": "width: 12rem;"
 },
 {
   "name": "w-56",
   "description": "width: 14rem;"
 },
 {
   "name": "w-64",
   "description": "width: 16rem;"
 },
 {
   "name": "w-auto",
   "description": "width: auto;"
 },
 {
   "name": "w-px",
   "description": "width: 1px;"
 },
 {
   "name": "w-1/2",
   "description": "width: 50%;"
 },
 {
   "name": "w-1/3",
   "description": "width: 33.33333%;"
 },
 {
   "name": "w-2/3",
   "description": "width: 66.66667%;"
 },
 {
   "name": "w-1/4",
   "description": "width: 25%;"
 },
 {
   "name": "w-2/4",
   "description": "width: 50%;"
 },
 {
   "name": "w-3/4",
   "description": "width: 75%;"
 },
 {
   "name": "w-1/5",
   "description": "width: 20%;"
 },
 {
   "name": "w-2/5",
   "description": "width: 40%;"
 },
 {
   "name": "w-3/5",
   "description": "width: 60%;"
 },
 {
   "name": "w-4/5",
   "description": "width: 80%;"
 },
 {
   "name": "w-1/6",
   "description": "width: 16.66667%;"
 },
 {
   "name": "w-2/6",
   "description": "width: 33.33333%;"
 },
 {
   "name": "w-3/6",
   "description": "width: 50%;"
 },
 {
   "name": "w-4/6",
   "description": "width: 66.66667%;"
 },
 {
   "name": "w-5/6",
   "description": "width: 83.33333%;"
 },
 {
   "name": "w-1/12",
   "description": "width: 8.33333%;"
 },
 {
   "name": "w-2/12",
   "description": "width: 16.66667%;"
 },
 {
   "name": "w-3/12",
   "description": "width: 25%;"
 },
 {
   "name": "w-4/12",
   "description": "width: 33.33333%;"
 },
 {
   "name": "w-5/12",
   "description": "width: 41.66667%;"
 },
 {
   "name": "w-6/12",
   "description": "width: 50%;"
 },
 {
   "name": "w-7/12",
   "description": "width: 58.33333%;"
 },
 {
   "name": "w-8/12",
   "description": "width: 66.66667%;"
 },
 {
   "name": "w-9/12",
   "description": "width: 75%;"
 },
 {
   "name": "w-10/12",
   "description": "width: 83.33333%;"
 },
 {
   "name": "w-11/12",
   "description": "width: 91.66667%;"
 },
 {
   "name": "w-full",
   "description": "width: 100%;"
 },
 {
   "name": "w-screen",
   "description": "width: 100vw;"
 },
 {
   "name": "z-0",
   "description": "z-index: 0;"
 },
 {
   "name": "z-10",
   "description": "z-index: 10;"
 },
 {
   "name": "z-20",
   "description": "z-index: 20;"
 },
 {
   "name": "z-30",
   "description": "z-index: 30;"
 },
 {
   "name": "z-40",
   "description": "z-index: 40;"
 },
 {
   "name": "z-50",
   "description": "z-index: 50;"
 },
 {
   "name": "z-auto",
   "description": "z-index: auto;"
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
      $templateCache.put('ngMdTable/table.html', '<div> <section class="loading-animation" ng-show="isLoaded"> <md-toolbar class="table-toolbar md-primary"> <div class="md-toolbar-tools"><h1>{{tableName}}</h1> <div class="center-outer"> <div class="center-inner"><md-button href="https://raw.githubusercontent.com/Alicannklc/intellij-tailwind-css/master/Tailwind%20Cheat%20Sheet%20.pdf" class="md-accent md-raised">Pdf Download</md-button><md-button href="https://github.com/Alicannklc/intellij-tailwind-css" class="md-accent md-raised">Github</md-button> <md-button href="https://alicannklc.github.io/intellij-tailwind-css/v.1.1.0" class="md-accent md-raised">V 1.1.0</md-button> <md-button href="https://plugins.jetbrains.com/plugin/12074-tailwindcss" class="md-accent md-raised">Plugin Url</md-button></div></div><span flex></span> <md-input-container class="toolbar-input" ng-show="showSearch"> <label>Search by...</label> <input ng-model="searchInput"> </md-input-container> </div> </md-toolbar> <table class="md-table" ng-show="filtered.length"> <!--Columns section--> <tr> <th ng-init="reverse = false;" ng-repeat="column in columns" style="width:{{100/columns.length | floor}}%"> <span class="pointer" ng-class="{sortationActive: lastPredicate === column.identificator}" ng-if="column.settings.sortable"> <a ng-click="reverse=!reverse;order(column.identificator, reverse)">{{column.name}}</a> <!--Sorting direction indicators--> <span> <span ng-if="showArrowUp(column.identificator, reverse)">&#x25B2;</span> <span ng-if="showArrowDown(column.identificator, reverse)">&#x25BC;</span> </span> <!--/Sorting direction indicators--> <!--Show that sorting is possible--> <span class="can-be-sorted" ng-if="(lastPredicate !== column.identificator)"> <span>&#x25B2;</span> <span>&#x25BC;</span> </span> <!--/Show that sorting is possible--> </span> <!--Non sortable column--> <span ng-if="!column.settings.sortable"> <a>{{column.name}}</a> </span> <!--/Non sortable column--> </th> </tr> <!--/Columns section--> <!--Data rows--> <tr ng-repeat="row in filtered = (data | startFrom:currentPage*pageSize | filter: searchInput | limitTo:pageSize )"> <td ng-repeat="(key, val) in row"> {{val}} </td> </tr> <!--/Data rows--> </table> <div class="no-results" ng-show="(filtered.length === 0 && searchInput)"> <h1>Sorry not found Tailwind Cheat Sheet.</h1> </div> <div class="no-results" ng-if="(filtered.length === 0 && !searchInput)"> <h1>No data to load!</h1> </div> <!--Table footer with pagination--> <footer class="table-footer" layout-wrap layout="row" ng-show="pageSize"> <div flex="33" layout-align="start center" layout="row"> <md-button ng-click="currentPage=currentPage-1" ng-disabled="currentPage === 0"> Previous </md-button> </div> <div flex="33" layout-align="center center" layout="row"> <h3>{{currentPage+1}}/{{numberOfPages()}}</h3> </div> <div flex="33" layout-align="end center" layout="row"> <md-button ng-click="currentPage=currentPage+1" ng-disabled="currentPage + 1 >= numberOfPages()"> Next </md-button> </div> </footer> <!--/Table footer with pagination--> </section> </div>');
    }
  ]);

}).call(this);
