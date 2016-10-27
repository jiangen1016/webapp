/**
 * Created by Administrator on 2016/10/1.
 */
myapp.controller("photoCtrl",function($scope){
    $scope.date=new Date();
    $scope.data=[
        {
            img:[
                {img:"images/q1.jpg"},
                {img:"images/q2.jpg"},
                {img:"images/q3.jpg"}
            ]
        },
        {
            img:[
                {img:"images/q4.jpg"},
                {img:"images/q5.jpg"},
                {img:"images/q6.jpg"},
                {img:"images/q7.jpg"}
            ]
        },
        {
            img:[
                {img:"images/q8.jpg"}

            ]
        },
        {
            img:[
                {img:"images/q9.jpg"},
                {img:"images/q10.jpg"}

            ]
        },
    ];
    $scope.data2=[
        {
            img:[
                {img:"images/w1.jpg"},
                {img:"images/a1.jpg"},
                {img:"images/w2.jpg"}
            ]
        },
        {
            img:[
                {img:"images/a2.jpg"},
                {img:"images/w3.jpg"}

            ]
        },
        {
            img:[
                {img:"images/a3.jpg"},
                {img:"images/w4.jpg"}

            ]
        },

    ]
})