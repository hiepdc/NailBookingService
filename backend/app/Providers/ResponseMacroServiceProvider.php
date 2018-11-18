<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Response;

class ResponseMacroServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        Response::macro('success', function ($data, $message = 'successfully') {
            return Response::json([
                'success' => true,
                'message' => $message,
                'data' => $data,
                'status_code' => 200,
            ]);
        });
        Response::macro('error', function ($message, $status = 400) {
            return Response::json([
                'success' => false,
                'message' => [$message],
//                'errors' => [
//                    'message' => $status . ' error',
//                ],
                'status_code' => $status,
            ], $status);
        });
        Response::macro('exception', function ($message, $status = 400) {
            return Response::json([
                'success' => false,
                'message' => [$message],
//                'errors' => [
//                    'message' => $status . ' error',
//                ],
                'status_code' => $status,
            ], $status);
        });
        Response::macro('notFound', function ($message, $status = 404) {
            return Response::json([
                'success' => false,
                'data' => null,
                'message' => [$message],
//                'errors' => [
//                    'message' => $status . ' error',
//                ],
                'status_code' => $status,
            ], $status);
        });
        Response::macro('validationError', function ($errors) {
            return Response::json([
                'success' => false,
                'message' => '422 Unprocessable Entity',
//                'errors' => [
//                    'message' => $errors . ' error',
//                ],
                'status_code' => 422,
            ], 422);
        });
    }

    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}