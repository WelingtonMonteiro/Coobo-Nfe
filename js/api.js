var urlApi = "https://accounts-api.azurewebsites.net";
(function (window) {
    var req = {
        url: {
            services: urlApi + '/api/'
        },
        _ajaxConfig: function _ajaxConfig(config, _success, _error, contentType) {
            var defaultConfig = {
                type: "GET",
                contentType: (contentType || "application/json; charset=utf-8"),
                success: function success(response) {
                    req.defaultSuccessCallback(response);
                    _success && _success(response);
                },
                error: function error(err) {
                    req.defaultErrorCallback(err);
                    _error && _error(err);
                }
            };
            $.extend(true, defaultConfig, config);
            return defaultConfig;
        },
        defaultErrorCallback: function defaultErrorCallback(err) {
            //aki vc pode colocar qqr coisa q queira executar qnd der erro
        },

        defaultSuccessCallback: function defaultSuccessCallback(response) {
            ////aki vc pode colocar qqr coisa q queira executar qnd der sucesso
        },

        get: function get(url, success, error, contentType) {
            var config = req._ajaxConfig({url: url}, success, error, contentType);
            $.ajax(config);
            return url;
        },

        post: function post(url, data, success, error, contentType) {

            var type = 'POST';
            var config = req._ajaxConfig({url: url, type: type, data: data}, success, error, contentType);
            $.ajax(config);
            return url;
        }
    };

    window.Req = req;
    window.Api = {
        Login: {
            login: apiLogin,
            signin: apiSignin
        },
        Client: {
            find: function find(id, success, error) {
                req.get(req.url.services + 'clientId=' + id, success, error);
            },
            create: function create(client, success, error) {
                req.post(req.url.services + 'newClient', client, success, error);
            }
        },
        Products: {
            find: function find(id, success, error) {
                req.get(req.url.services + 'productId=' + id, success, error);
            },
            create: function create(client, success, error) {
                req.post(req.url.services + 'newProduct', client, success, error);
            }
        }
    };

    function apiLogin(success, error) {
        return error();
        var Objectlogin = "grant_type=password&username=" + $("#emailLogin").val() + "&password=" + $("#password").val();

        req.post(req.url.services + 'login', Objectlogin, success, error, 'application/x-www-form-urlencoded');

    }

    function apiOgranization(success, error) {
        var numberEmployeers = $('#combobox').find('option:selected').val();

        var objectEmployees = {
            "Name": $("#company").val(),
            "LogoPath": "~/Images/Logo/coobete.png",
            "Country": "Brasil",
            "State": "Rio de Janeiro",
            "City": "Rio de Janeiro",
            "Address": "Rua Osorio de Almeida, 67 - Urca",
            "NumberOfEmployees": numberEmployeers
        };

        req.post(req.url.services + 'organization/create', objectEmployees, sucesso, error);
    }

    function apiSignin(success, error) {

        return success();
        var users = {
            "firstName": $("#name").val(),
            "lastName": $("#lastName").val(),
            "email": $("#email").val(),
            "phoneNumber": "12999999999",
            "mobilePhoneNumber": "12999999999",
            "username": $("#email").val(),
            "avatar": "/img/default.png",
            "password": $("#psw1").val(),
            "confirmPassword": $("#psw2").val(),
            "organization": 1,
            "jobtitle": 1,
            "department": 1,
            "languagePreference": "pt-BR",
            "notificationSettings": ""
        };
        var user = {
            "FirstName": "Rafael",
            "LastName": "Barbosa",
            "Email": "rafael.barbosalaaalal@coobo.com.br",
            "PhoneNumber": "2654234",
            "MobilePhoneNumber": "994526785",
            "Username": "rafael.barbosalaaalal@coobo.com.br",
            "Avatar": "~/avatar/viadaum.jpeg",
            "Password": "123456",
            "ConfirmPassword": "123456",
            "Organization": 1,
            "LanguagePreference": "en-US",
            "NotificationSettings": "Uma vez por dia"
        }


            req.post(req.url.services + 'useraccounts/create', users, success, error);




    }
})(window);