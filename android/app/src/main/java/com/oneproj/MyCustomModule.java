package com.oneproj;

import android.content.Intent;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class MyCustomModule extends ReactContextBaseJavaModule {
    private  static ReactApplicationContext reactApplicationContext;
    MyCustomModule(ReactApplicationContext context){
        super(context);
        reactApplicationContext = context;
    }
    
    @NonNull
    @Override
    public String getName() {
        return "CUSTOM_SCREEN";
    }

    @ReactMethod
    public  void goToNextScreen(){
        Intent intent = new Intent(reactApplicationContext,DemoActivity.class);
        getCurrentActivity().startActivity(intent);
    }
}
