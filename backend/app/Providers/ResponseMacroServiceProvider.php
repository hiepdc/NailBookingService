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
                'data' => $data
            ]);
        });

        Response::macro('error', function ($message, $status = 400) {
            return Response::json([
                'success' => false,
                'errors' => [
                    'message' => $message,
                    'status_code' => $status
                ]
            ], $status);
        });
        Response::macro('message', function ($message, $status) {
            return Response::json([
                'success' => true,
                'errors' => [
                    'message' => $message,
                    'status_code' => $status
                ]
            ], $status);
        });

        Response::macro('exception', function ($message, $status) {
            return Response::json([
                'success' => false,
                'errors' => [
                    'message' => $message,
                    'status_code' => $status
                ]
            ], $status);
        });

        Response::macro('notFound', function ($message = 'Record not found') {
            return Response::json([
                'success' => false,
                'errors' => [
                    'message' => $message,
                    'status_code' => 404
                ]
            ], 404);
        });

        Response::macro('validationError', function ($errors) {
            return Response::json([
                'success' => false,
                'errors' => [
                    'message' => $errors . ' error',
                ],
//                'status_code' => 422,
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
