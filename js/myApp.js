var app = angular.module('myApp', []);

app.controller('MyController', function ($scope, $http, $rootScope, $timeout, $location, $window) {
    $http.get("./js/Subjects.js").then(function (response) {
        $rootScope.monthiData = response.data;
        console.log($rootScope.monthiData); // Kiểm tra xem dữ liệu đã được nhận chưa        
    });

    $http.get("./js/Students.js").then(function (userdata) {
        $rootScope.usernameData = userdata.data;
        console.log($rootScope.usernameData); // In ra dữ liệu để kiểm tra

        $scope.checktkmk = function () {
            var username = $scope.username;
            var password = $scope.password;

            // Kiểm tra username và password trong dữ liệu đã nhận được
            var matchedUser = $rootScope.usernameData.find(function (user) {
                return user.username === username && user.password === password;
                console.log("Đây là user: ", matchedUser);
            });

            if (matchedUser) {
                Swal.fire({
                    icon: 'success',
                    title: 'Đăng nhập thành công!',
                    text: 'Quay lại trang chủ!',
                    showConfirmButton: false,
                    closeOnClickOutside: false,
                    allowOutsideClick: false,
                    timer: 1600,
                });
                // Lưu thông tin của sinh viên vào $rootScope
                $rootScope.student = matchedUser;
                $window.localStorage.setItem('student', JSON.stringify(matchedUser));


                // Lưu ID của sinh viên vào sessionStorage nếu người dùng chọn "Remember Me"
                // if ($scope.rememberMe) {
                //     $window.sessionStorage.setItem('rememberedUserID', matchedUser.$id);
                //     console.log('User information (including ID) remembered', matchedUser.$id);
                // }

                // Chuyển hướng đến trang index
                // window.location.href = "#!index";
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Đăng nhập thất bại !',
                    text: 'Nhập lại !'
                });
            }
        };


    });
});
