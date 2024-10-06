app.controller('viewtestCtrl', function ($scope, $timeout, $location, $rootScope, $anchorScroll, $routeParams) {

    // scroll();
    $rootScope.subjects.forEach(ar => {
        if (ar.Id == $routeParams.id) {
            $scope.subject = angular.copy(ar);
            return;
        }
    });
    // scroll top
    function scroll() {
        $location.hash('top'); // Scroll to the top of the page
        $anchorScroll(); // Scroll to the anchored element
    }
    
    $scope.test = function() {
        if ($rootScope.student == null) {
            Swal.fire({
                icon: 'error',
                title: 'Bạn chưa đăng nhập!',
                text: 'Hãy quay lại sau khi đăng nhập!'
            });
        } else {
            Swal.fire({
                title: 'Bắt đầu thi?',
                text: "Bạn đã sẳn sàng!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Có! Bắt đầu thi.',
                cancelButtonText: 'Chưa'
            }).then((result) => {
                if (result.value) {
                    window.location.href = "#!test/" + $scope.subject.Id;
                }
            })
        }
    }




});


