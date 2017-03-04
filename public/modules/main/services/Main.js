define(['modules/main/module'], function (module) {
    'use strict';

    module.registerFactory('Main', ['$resource', 'ApiHost', function MainFactory($resource, ApiHost) {
        var resource = $resource(ApiHost.address + '/posts/:postId', {}, {
            'getAllPosts': {
                method: 'GET',
                url: ApiHost.address + '/posts',
                isArray: true
            },
            'getPostById': {
                method: 'GET',
                url: ApiHost.address + '/posts/:id',
                isArray: false
            }
        });

        return {
            getAllPosts: function () {
                return resource.query();
            },
            getPostById: function (id) {
                return resource.getPostById({ id: id });
            }
        }

    }]);

});
