app.controller('loginCtrl', function ($scope, $rootScope, $http, $window) {
    // Lấy dữ liệu sinh viên từ tệp "Students.js" khi controller được khởi tạo
    $http.get("./js/Students.js").then(function (response) {
        $rootScope.usernameData = response.data;
        console.log($rootScope.usernameData); // In ra dữ liệu để kiểm tra
    });

    // Hàm đăng nhập
    $scope.login = function () {
        var username = $scope.username;
        var password = $scope.password;

        // Kiểm tra username và password trong dữ liệu đã nhận được
        var matchedUser = $rootScope.usernameData.find(function (user) {
            return user.username === username && user.password === password;
        });

        if (matchedUser) {
            Swal.fire({
                icon: 'success',
                title: 'Đăng nhập thành công!',
                text: 'Quay lại trang chủ!',
                showConfirmButton: false,
                closeOnClickOutside: false,
                allowOutsideClick: false,
                timer: 1600
            });
            // Lưu thông tin của sinh viên vào $rootScope
            $rootScope.student = matchedUser;

            // Lưu ID của sinh viên vào sessionStorage nếu người dùng chọn "Remember Me"
            if ($scope.rememberMe) {
                $window.sessionStorage.setItem('rememberedUserID', matchedUser.$id);
                console.log('User information (including ID) remembered', matchedUser.$id);
            }

            // Chuyển hướng đến trang index
            window.location.href = "#!index";
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Đăng nhập thất bại !',
                text: 'Nhập lại !'
            });
        }
    };
});
