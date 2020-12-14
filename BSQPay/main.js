var app = angular.module("myApp", []);
app.run(function ($rootScope, $http, $filter) {
  console.log("Loading application");
  grecaptcha.ready(function () {
    grecaptcha
      .execute("6Lcn0t8UAAAAAIWkxsf3jCE6nrxYFcCOCILl2zjI", { action: "homepage" })
      .then(function (Rtoken) {
        console.log("RECAPTCHA: ", Rtoken);
        var qpay = location.hash;
        qpayid = qpay.replace("#", "");
        console.log("qpayid", qpayid);
        $rootScope.url = "https://connectors.cbwpayments.com/mobile/bsq"
        $rootScope.qpayid = qpayid;
        $rootScope.amount = 0
        $rootScope.requestTime = ""
        $rootScope.id = ""
        $rootScope.payeeMobile = ""
        $rootScope.firstName = ""
        $rootScope.lastName = ""
        $rootScope.merchantMobile = ""
        $rootScope.description = ""
        $rootScope.resToken = "";
        $rootScope.target = false;
        $rootScope.disableMobile = false;
        $rootScope.active = false;
        $rootScope.Oldcustomer = false;
        $rootScope.CusfirstName = "";
        $rootScope.CuslastName = "";
        $rootScope.businessName = "";
        $rootScope.billingAddress = "";
        $rootScope.processId = "";

        var request = {};
        /* $rootScope.Recaptcha = function () {
           grecaptcha.ready(function () {
             grecaptcha
               .execute("6Lcn0t8UAAAAAIWkxsf3jCE6nrxYFcCOCILl2zjI", { action: "homepage" })
               .then(function (Rtoken) {
                 return Rtoken
               });
           });
         }
        let Rtoken = $rootScope.Recaptcha()*/
        request.id = "1";
        request.method = "Bsq.GetTxnByToken";
        request.params = {};
        request.params.api={source:"QuickPay"}
        request.params.payload = {};
        request.params.payload.source = "QuickPay"
        request.params.payload.token = $rootScope.qpayid;

        $rootScope.req = {
          method: "POST",
          url: $rootScope.url,
          headers: {
            "Content-Type": "application/json",
            "Token": Rtoken
          },
          data: request,
        };
        console.log("GetTxn Req", $rootScope.req);
        $http($rootScope.req).then(
          function (response) {
            console.log("GetTxn Res", response.data);
            var res = response.data;
            if (res.error != null) {
              $rootScope.errorFlag = true;
              $rootScope.errorMessage = res.error.message;

            } else {
              if (res.result.order && res.result.order.processId) {
                $rootScope.processId = res.result.order.processId;
              }
              if (res.result.order && res.result.order.description) {
                $rootScope.description = res.result.order.description
              }
              if (res.result.order && res.result.order.amount) {
                $rootScope.amount = res.result.order.amount / 100;
              }
              if (res.result.order && res.result.order.requestedTime) {
                $rootScope.requestTime = $filter('date')(new Date(res.result.order.requestedTime), 'short');
              }
              if (res.result.order && res.result.order.customer && res.result.order.customer.mobileNumber) {
                console.log(res.result.order.customer.mobileNumber)
                $rootScope.payeeMobile = res.result.order.customer.mobileNumber;
                $rootScope.disableMobile = true;

              }
              if (res.result.order && res.result.order.customer && res.result.order.customer.verified) {
                console.log(res.result.order.customer.firstName)
                $rootScope.Oldcustomer = true;
                $rootScope.CusfirstName = res.result.order.customer.firstName;
                $rootScope.CuslastName = res.result.order.customer.lastName;
                console.log($rootScope.CusfirstName, $rootScope.CuslastName)

              }
              if (res.result.order && !res.result.order.targeted) {
                $rootScope.target = !res.result.order.targeted
              }
              if (res.result.order && res.result.order.merchant && res.result.order.merchant.mobileNumber) {
                $rootScope.merchantMobile = res.result.order.merchant.mobileNumber;
              }
              if (res.result.order.merchant) {
                $rootScope.firstName = res.result.order.merchant.firstName
                $rootScope.lastName = res.result.order.merchant.lastName
                $rootScope.active = res.result.order.merchant.active

              }
              if (res.result.order && res.result.order.merchant && res.result.order.merchant.merchantInfo && res.result.order.merchant.merchantInfo.businessName) {
                $rootScope.businessName = res.result.order.merchant.merchantInfo.businessName
              }
              if (res.result.order && res.result.order.merchant && res.result.order.merchant.merchantInfo && res.result.order.merchant.merchantInfo.billingAddress) {
                $rootScope.billingAddress = res.result.order.merchant.merchantInfo.billingAddress
              }
              $rootScope.id = res.result.order.id;
              $rootScope.errorFlag = false;
            }
          },
          function (response) {
            console.log("testdata", response);
          }
        );
      })
  })
});

app.controller("MainCtrl", [
  "$scope",
  "$rootScope",
  "$http",
  function PhoneListController($scope, $rootScope, $http) {
    $scope.mobileNumber = "";
    $scope.otpFlag = true;
    $scope.invalidOtp = false;
    $scope.localErrorFlag = false;
    $scope.card = {};
    $scope.generatePassword = false;
    $scope.disableFlag = false;
    $scope.amountt = 0;
    $scope.receipt = false;
    $scope.createAccount = false;
    $scope.months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"]
    $scope.years = []
    $scope.year = ""
    $scope.month = ""
    $scope.invalidExp = false
    $scope.init = function () {
      var year = new Date().getFullYear()
      this.years = []
      for (var i = 0; i < 20; i++) {
        this.years.push(year + i)
      }
    }

    $scope.init();
    $scope.keyPress = function (event) {
      const pattern = /[0-9]/;

      let inputChar = String.fromCharCode(event.charCode);
      if (event.keyCode != 8 && !pattern.test(inputChar)) {
        event.preventDefault();
      }
    }
    $scope.keyPressName = function (event) {
      const pattern = /[a-zA-Z0-9\-'._\ ]/;

      let inputChar = String.fromCharCode(event.charCode);
      if (event.keyCode != 8 && !pattern.test(inputChar)) {
        event.preventDefault();
      }
    }
    $scope.keyPressPass = function (event) {
      const pattern = /[a-zA-Z0-9\!@#$%^&*()\ ]/;

      let inputChar = String.fromCharCode(event.charCode);
      if (event.keyCode != 8 && !pattern.test(inputChar)) {
        event.preventDefault();
      }
    }
    // $scope.keyPressAmount = function (event) {
    //   const pattern = /^\d*\.?\d{0,2}$/

    //   let inputChar = String.fromCharCode(event.charCode);
    //   if (event.keyCode != 8 && !pattern.test(inputChar)) {
    //     event.preventDefault();
    //   }
    // }
    $("#amt").on("keypress", function () {
      var valid = /^\d{0,7}(\.\d{0,2})?$/.test(this.value),
        val = this.value;

      if (!valid) {
        console.log("Invalid input!");
        this.value = val.substring(0, val.length - 1);
        event.preventDefault();
      }
    });
    $scope.checkMonth = function () {
      if (this.year == new Date().getFullYear()) {
        /* this.months=[]
      for (var i = m; i < 12; i++) {
       let s=(i+1).toString()
       if(s.length==1){
         s="0"+s
       }
       this.months.push(s)
     }*/
        let m = new Date().getMonth()
        if (this.month <= m) {
          $scope.invalidExp = true
        } else {
          $scope.invalidExp = false
        }
      } else {
        $scope.invalidExp = false
      }
    }
    $scope.Recaptcha = function () {
      grecaptcha.ready(function () {
        grecaptcha
          .execute("6Lcn0t8UAAAAAIWkxsf3jCE6nrxYFcCOCILl2zjI", { action: "homepage" })
          .then(function (Rtoken) {
            return Rtoken
          });
      });
    }
    $scope.quickpay = function () {
      grecaptcha.ready(function () {
        grecaptcha
          .execute("6Lcn0t8UAAAAAIWkxsf3jCE6nrxYFcCOCILl2zjI", { action: "homepage" })
          .then(function (Rtoken) {
            console.log("RECAPTCHA: ", Rtoken);
            $scope.used1 = true;
            // let Rtoken = $scope.Recaptcha()
            // console.log("RECAPTCHA: ", Rtoken);
            console.log("Mobile: ", $scope.mobileNumber)
            console.log("amount: ", parseFloat($scope.amountt))

            var request = {};
            request.id = "1";
            request.method = "Bsq.QuickPay";
            request.params = {};
            request.params.payload = {};
            request.params.payload.source = "QuickPay";
            request.params.payload.quickPayId = $rootScope.qpayid;
            if ($scope.mobileNumber == "" || !$scope.mobileNumber || $scope.mobileNumber == undefined) {
              request.params.payload.mobileNumber = $rootScope.payeeMobile;
              request.params.api={source:"QuickPay",credential:"Basic "+btoa($rootScope.payeeMobile+":"+"********")}
            } else {
              request.params.payload.mobileNumber = $scope.mobileNumber;
              request.params.api={source:"QuickPay",credential:"Basic "+btoa($scope.mobileNumber+":"+"********")}
            }
            $scope.req = {
              method: "POST",
              url: $rootScope.url,
              headers: {
                "Content-Type": "application/json",
                "Token": Rtoken
              },
              data: request,
            };
            console.log("quickpay req:", $scope.req)
            $http($scope.req).then(
              function (response) {
                console.log("quickpay res", response.data);
                var res = response.data;
                if (res.error != null) {
                  $rootScope.errorFlag = true;
                  $rootScope.errorMessage = res.error.message;
                } else {
                  console.log("ttt", res.result.token)
                  if (res.result.token != undefined || res.result.token != null) {
                    $rootScope.resToken = res.result.token;
                  }
                  $rootScope.errorFlag = false;
                  $scope.otpFlag = true;
                  $scope.disableFlag = true
                  $scope.disableMobile = true
                }
                $scope.used1 = false;
              },
              function (response) {
                console.log("testdata", response);
              }
            );
          })
      })
    };

    $scope.password = "";
    $scope.confirmpassword = "";
    $scope.otp = "";
    $scope.email = "";
    $scope.share = false
    $scope.matched = false;
    $scope.matchPassMes = "";
    $scope.iscustomer = false;
    $scope.cardType = "";

    $scope.checkPass = function () {
      if (!$scope.generatePassword) {
        if ($scope.password != $scope.confirmpassword) {
          $scope.matched = false;
          $scope.matchPassMes = "Password Mismatch";
        } else {
          $scope.matched = true;
          $scope.matchPassMes = "Passwords Match";
        }
      }
    }
    $scope.quickpaycomplete = function () {
      grecaptcha.ready(function () {
        grecaptcha
          .execute("6Lcn0t8UAAAAAIWkxsf3jCE6nrxYFcCOCILl2zjI", { action: "homepage" })
          .then(function (Rtoken) {
            console.log("RECAPTCHA: ", Rtoken);
            $scope.used1 = true;
            $scope.used2 = true;
            // let Rtoken = $scope.Recaptcha()
            // console.log("Recaptcha", Rtoken);
            console.log("resTolen", $rootScope.resToken);
            console.log("payeeMobile", $rootScope.payeeMobile);
            console.log('createAccount', $scope.createAccount);

            $scope.card.expiryDate = $scope.year + $scope.month
            var request = {};
            request.id = "1";
            request.method = "Bsq.QuickPayComplete";
            request.params = {};
            request.params.payload = {};
            request.params.payload.source = "QuickPay";
            request.params.payload.quickPayId = $rootScope.qpayid;
            request.params.payload.card = {};
            // request.params.payload.card.cardDetails =$scope.card.cardNumber.toString() + "|" + $scope.card.expiryDate.toString() + "|" + $scope.card.cvv.toString();
            var cardDetails =
              $scope.card.cardNumber.toString() +
              "|" +
              $scope.card.expiryDate.toString() +
              "|" +
              $scope.card.cvv.toString();

            //Encrypting Card Details
            let publicKey = " -----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAx4nOlyRs+7V7OQxKz5vH\nYOV/6Tc97oRJ/NQJ2lb9PP0ZXc5Yl8z+ig83o3xVgy9NeTv4gNUaAUzLx6LasMuX\n6ftwCMcDBKCFsBtbhg5NL6q+XiaMixo96Wo1MWfWhSXK8hBlAWKgJcG8pRJJbnIY\n7UGCGp4484VuRCA7FS7/8MZgQbpz5BTaKMD+SpFWxjMKPxQkOmaE3Ehv7k5rI+dO\ncIpt+PsOcRfKPCHu53UepmgHWQRWaSYBGP6OvdXlaZHnVwX9svu1TyXkAaRpkw1s\nMfDAfE5FR7VONNj+FgxH5un7VFABRSFTaAF2BrNmW4g4cZf5wbvXxdJc2ZIuXLAo\niQIDAQAB\n-----END PUBLIC KEY-----"
            let RSAEncrypt = new JSEncrypt();
            RSAEncrypt.setPublicKey(publicKey);
            let encryptedPass = RSAEncrypt.encrypt(cardDetails);
            request.params.payload.card.cardDetails = encryptedPass
            request.params.payload.card.source = "QuickPayJS"
            request.params.payload.card.firstName = $scope.card.firstName;
            request.params.payload.card.lastName = $scope.card.lastName;
            request.params.payload.card.nickName = $scope.card.firstName + ":" + $scope.card.lastName;
            request.params.payload.card.address = {};
            request.params.payload.card.address.zipCode = $scope.card.zipCode.toString();
            if ($scope.amountt == 0.0 || $scope.amountt == 0) {
              request.params.payload.amount = $rootScope.amount;
            } else {
              request.params.payload.amount = parseFloat($scope.amountt);
            }
            request.params.payload.createAccount = $scope.createAccount;
            request.params.payload.mobileNumber = $rootScope.payeeMobile;
            if ($scope.mobileNumber == "" || !$scope.mobileNumber || $scope.mobileNumber == undefined) {
              request.params.payload.mobileNumber = $rootScope.payeeMobile;
              request.params.api={source:"QuickPay",credential:"Basic "+btoa($rootScope.payeeMobile+":"+"********")}
            } else {
              //non customer and donar create account 
              request.params.payload.mobileNumber = $scope.mobileNumber;
              request.params.api={source:"QuickPay",credential:"Basic "+btoa($scope.mobileNumber+":"+"********")}
            }
            if ($scope.createAccount) {
              request.params.payload.token = $rootScope.resToken;

              request.params.payload.otp = $scope.otp;
              request.params.payload.generatePassword = $scope.generatePassword;
              request.params.payload.password = $scope.password;
            }

            $scope.req = {
              method: "POST",
              url: $rootScope.url,
              headers: {
                "Content-Type": "application/json",
                'Token': Rtoken
              },
              data: request,
            };
            console.log("quickpay complete req:", $scope.req)

            $http($scope.req).then(
              function (response) {
                console.log("quickpaycomplete res", response.data);
                var res = response.data;
                if (res.error != null) {
                  if (res.error.message == "Invalid Otp") {
                    $scope.invalidOtp = true;
                    $rootScope.errorMessage = res.error.message;
                  } else if (res.error.message == "Mobile number cannot be null" || res.error.message.includes('Invalid Amount') || res.error.message == "Saving card details failed") {
                    console.log('comes')
                    $scope.localErrorFlag = true;
                    $rootScope.localErrorMsg = res.error.message;
                  } else {
                    $rootScope.errorFlag = true;
                    $rootScope.errorMessage = res.error.message;
                  }
                } else {
                  $rootScope.errorFlag = true;
                  if (res.result.status == "Failed")
                    $rootScope.errorMessage = "Payment Processing Failed";
                  else {
                    $scope.receipt = true;
                    $scope.successMessage = "Payment Initiated Successfully";
                    if(res.result.cardType)
                    $scope.cardType=res.result.cardType
                  };
                }
                $scope.used1 = false;
                $scope.used2 = false;
              },
              function (response) {
                console.log("testdata", response);
              }
            );
          });
      });
    };
    $scope.sendmail = function () {
      grecaptcha.ready(function () {
        grecaptcha
          .execute("6Lcn0t8UAAAAAIWkxsf3jCE6nrxYFcCOCILl2zjI", { action: "homepage" })
          .then(function (Rtoken) {
            console.log("RECAPTCHA: ", Rtoken);
            $scope.used2 = true;
            // let Rtoken = $scope.Recaptcha()
            // console.log("Recaptcha", Rtoken);
            $scope.share = true
            var request = {};
            request.id = "1";
            request.method = "Bsq.EmailReceipt";
            request.params = {};
            if ($scope.mobileNumber == "" || !$scope.mobileNumber || $scope.mobileNumber == undefined) {
              request.params.api={source:"QuickPay",credential:"Basic "+btoa($rootScope.payeeMobile+":"+"********")}
            } else {
              request.params.api={source:"QuickPay",credential:"Basic "+btoa($scope.mobileNumber+":"+"********")}
            }
            request.params.payload = {};
            request.params.payload.id = $rootScope.qpayid;
            request.params.payload.email = $scope.email
            request.params.payload.source = "QuickPay"
            request.params.payload.mobileNumber = $rootScope.merchantMobile
            request.params.payload.merchantName = $rootScope.firstName + " " + $rootScope.lastName
            request.params.payload.businessName = $rootScope.businessName
            request.params.payload.billingAddress = $rootScope.billingAddress
            request.params.payload.description = $rootScope.description;

            request.params.payload.cardNumber = $scope.card.cardNumber.toString()
            if ($scope.amountt == 0.0 || $scope.amountt == 0) {
              request.params.payload.amount = $rootScope.amount * 100;
            } else {
              request.params.payload.amount = parseFloat($scope.amountt) * 100;
            }
            $scope.req = {
              method: "POST",
              url: $rootScope.url,
              headers: {
                "Content-Type": "application/json",
                "Token": Rtoken
              },
              data: request,
            };
            console.log("sendmail req:", $scope.req)
            $http($scope.req).then(
              function (response) {
                console.log("sendmail res", response.data);
                var res = response.data;
                if (res.error != null) {
                  $rootScope.errorFlag = true;
                  $rootScope.errorMessage = res.error.message;
                } else {
                  $scope.share = true
                }
                $scope.used3 = false;
              },
              function (response) {
                console.log("testdata", response);
              }
            );
          })
      })
    }
    $scope.resendotp = function () {
      grecaptcha.ready(function () {
        grecaptcha
          .execute("6Lcn0t8UAAAAAIWkxsf3jCE6nrxYFcCOCILl2zjI", { action: "homepage" })
          .then(function (Rtoken) {
            console.log("RECAPTCHA: ", Rtoken);
            // let Rtoken = $scope.Recaptcha()
            // console.log("Recaptcha", Rtoken);
            var request = {};
            request.id = "1";
            request.method = "Bsq.ResendOtp";
            request.params = {};
            if ($scope.mobileNumber == "" || !$scope.mobileNumber || $scope.mobileNumber == undefined) {
              request.params.api={source:"QuickPay",credential:"Basic "+btoa($rootScope.payeeMobile+":"+"********")}
            } else {
              request.params.api={source:"QuickPay",credential:"Basic "+btoa($scope.mobileNumber+":"+"********")}
            }
            request.params.payload = {};
            request.params.payload.source = "QuickPay";
            request.params.payload.quickPayId = $rootScope.qpayid;
            request.params.payload.resendSource = "QuickPayResendOTP";
            request.params.payload.mobileNumber = $scope.mobileNumber;
            $scope.req = {
              method: "POST",
              url: $rootScope.url,
              headers: {
                "Content-Type": "application/json",
                "Token": Rtoken
              },
              data: request,
            };
            console.log("resendotp req:", $scope.req)
            $http($scope.req).then(
              function (response) {
                console.log("resendotp res", response.data);
                var res = response.data;
                if (res.error != null) {
                  $rootScope.invalidOtp = true;
                  $rootScope.errorMessage = res.error.message;
                } else {
                  if (res.result.token != undefined || res.result.token != null) {
                    $rootScope.resToken = res.result.token;
                  }
                }
              },
              function (response) {
                console.log("testdata", response);
              }
            );
          })
      })
    }
    $scope.checkCustomer = function () {
      grecaptcha.ready(function () {
        grecaptcha
          .execute("6Lcn0t8UAAAAAIWkxsf3jCE6nrxYFcCOCILl2zjI", { action: "homepage" })
          .then(function (Rtoken) {
            console.log("RECAPTCHA: ", Rtoken);
            // let Rtoken = $scope.Recaptcha()
            // console.log("Recaptcha", Rtoken);
            var request = {};
            request.id = "1";
            request.method = "Bsq.CheckCustomer";
            request.params = {};
            if ($scope.mobileNumber == "" || !$scope.mobileNumber || $scope.mobileNumber == undefined) {
              request.params.api={source:"QuickPay",credential:"Basic "+btoa($rootScope.payeeMobile+":"+"********")}
            } else {
              request.params.api={source:"QuickPay",credential:"Basic "+btoa($scope.mobileNumber+":"+"********")}
            }
            request.params.payload = {};
            request.params.payload.source = "QuickPay";
            request.params.payload.mobileNumber = $scope.mobileNumber;

            $scope.req = {
              method: "POST",
              url: $rootScope.url,
              headers: {
                "Content-Type": "application/json",
                "Token": Rtoken
              },
              data: request,
            };
            console.log("SearchCustomer req:", $scope.req)
            $http($scope.req).then(
              function (response) {
                console.log("SearchCustomer res", response.data);
                var res = response.data;
                $scope.customerFound = null
                $scope.iscustomer = false;

                if (res.result || res.result != null) {
                  if (res['result']['customer']) {
                    $scope.customerFound = res['result']['customer']
                    $scope.createAccount = false
                    $scope.iscustomer = true;
                  }
                }

              },
              function (response) {
                console.log("testdata", response);
              }
            );
          })
      })
    }
  },
]);
