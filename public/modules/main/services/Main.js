define(['modules/main/module'], function(module) {
    'use strict';

    module.registerFactory('Main', ['$resource', 'ApiHost', function MainFactory($resource, ApiHost) {
        var resource = $resource(ApiHost.address + '/main/:mainId', {}, {
            'query': {
                method: 'GET',
                url: ApiHost.address + '/user/get_plates',
                isArray: false
            }
        });

        return {
            query: function() {
                return resource.query();
            }
        }

    }]);

});
