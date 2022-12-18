<?php

namespace App\Http\Controllers\Admin\Currency;
use App\Http\Controllers\Controller;
use App\Http\Requests\Currency\UpdateRequest;
use App\Models\Currency;

class UpdateController extends Controller
{
    public function __invoke(UpdateRequest $request, Currency $currency)
    {
        $data = $request->validated();
        $currency->update($data);
        $currency->fresh();
        //return new PostResource($post);
          return redirect()->route('admin.Currencies.show', $currency->id);
    }
}
