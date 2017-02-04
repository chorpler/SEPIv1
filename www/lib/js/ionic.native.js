(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var ng1_1 = require('./ng1');
var DEVICE_READY_TIMEOUT = 2000;
var actionsheet_1 = require('./plugins/actionsheet');
var admob_1 = require('./plugins/admob');
var android_fingerprint_auth_1 = require('./plugins/android-fingerprint-auth');
var appavailability_1 = require('./plugins/appavailability');
var apprate_1 = require('./plugins/apprate');
var appversion_1 = require('./plugins/appversion');
var badge_1 = require('./plugins/badge');
var background_geolocation_1 = require('./plugins/background-geolocation');
var backgroundmode_1 = require('./plugins/backgroundmode');
var barcodescanner_1 = require('./plugins/barcodescanner');
var base64togallery_1 = require('./plugins/base64togallery');
var batterystatus_1 = require('./plugins/batterystatus');
var brightness_1 = require('./plugins/brightness');
var ble_1 = require('./plugins/ble');
var bluetoothserial_1 = require('./plugins/bluetoothserial');
var calendar_1 = require('./plugins/calendar');
var call_number_1 = require('./plugins/call-number');
var camera_1 = require('./plugins/camera');
var camera_preview_1 = require('./plugins/camera-preview');
var card_io_1 = require('./plugins/card-io');
var clipboard_1 = require('./plugins/clipboard');
var code_push_1 = require('./plugins/code-push');
var contacts_1 = require('./plugins/contacts');
var crop_1 = require('./plugins/crop');
var datepicker_1 = require('./plugins/datepicker');
var dbmeter_1 = require('./plugins/dbmeter');
var deeplinks_1 = require('./plugins/deeplinks');
var device_1 = require('./plugins/device');
var device_feedback_1 = require('./plugins/device-feedback');
var deviceaccounts_1 = require('./plugins/deviceaccounts');
var devicemotion_1 = require('./plugins/devicemotion');
var deviceorientation_1 = require('./plugins/deviceorientation');
var diagnostic_1 = require('./plugins/diagnostic');
var dialogs_1 = require('./plugins/dialogs');
var emailcomposer_1 = require('./plugins/emailcomposer');
var estimote_beacons_1 = require('./plugins/estimote-beacons');
var facebook_1 = require('./plugins/facebook');
var file_1 = require('./plugins/file');
var file_chooser_1 = require('./plugins/file-chooser');
var file_opener_1 = require('./plugins/file-opener');
var filepath_1 = require('./plugins/filepath');
var filetransfer_1 = require('./plugins/filetransfer');
var flashlight_1 = require('./plugins/flashlight');
var geofence_1 = require('./plugins/geofence');
var geolocation_1 = require('./plugins/geolocation');
var globalization_1 = require('./plugins/globalization');
var google_plus_1 = require('./plugins/google-plus');
var googlemap_1 = require('./plugins/googlemap');
var googleanalytics_1 = require('./plugins/googleanalytics');
var hotspot_1 = require('./plugins/hotspot');
var http_1 = require('./plugins/http');
var httpd_1 = require('./plugins/httpd');
var ibeacon_1 = require('./plugins/ibeacon');
var imagepicker_1 = require('./plugins/imagepicker');
var imageresizer_1 = require('./plugins/imageresizer');
var inappbrowser_1 = require('./plugins/inappbrowser');
var inapppurchase_1 = require('./plugins/inapppurchase');
var insomnia_1 = require('./plugins/insomnia');
var instagram_1 = require('./plugins/instagram');
var is_debug_1 = require('./plugins/is-debug');
var keyboard_1 = require('./plugins/keyboard');
var launchnavigator_1 = require('./plugins/launchnavigator');
var localnotifications_1 = require('./plugins/localnotifications');
var location_accuracy_1 = require('./plugins/location-accuracy');
var media_capture_1 = require('./plugins/media-capture');
var native_audio_1 = require('./plugins/native-audio');
var native_page_transitions_1 = require('./plugins/native-page-transitions');
var nativestorage_1 = require('./plugins/nativestorage');
var market_1 = require('./plugins/market');
var media_1 = require('./plugins/media');
var mixpanel_1 = require('./plugins/mixpanel');
var music_controls_1 = require('./plugins/music-controls');
var network_1 = require('./plugins/network');
var nfc_1 = require('./plugins/nfc');
var onesignal_1 = require('./plugins/onesignal');
var photo_viewer_1 = require('./plugins/photo-viewer');
var screen_orientation_1 = require('./plugins/screen-orientation');
var pay_pal_1 = require('./plugins/pay-pal');
var pin_dialog_1 = require('./plugins/pin-dialog');
var power_management_1 = require('./plugins/power-management');
var printer_1 = require('./plugins/printer');
var push_1 = require('./plugins/push');
var safari_view_controller_1 = require('./plugins/safari-view-controller');
var screenshot_1 = require('./plugins/screenshot');
var securestorage_1 = require('./plugins/securestorage');
var shake_1 = require('./plugins/shake');
var sim_1 = require('./plugins/sim');
var sms_1 = require('./plugins/sms');
var socialsharing_1 = require('./plugins/socialsharing');
var spinnerdialog_1 = require('./plugins/spinnerdialog');
var splashscreen_1 = require('./plugins/splashscreen');
var sqlite_1 = require('./plugins/sqlite');
var statusbar_1 = require('./plugins/statusbar');
var stepcounter_1 = require('./plugins/stepcounter');
var streaming_media_1 = require('./plugins/streaming-media');
var _3dtouch_1 = require('./plugins/3dtouch');
var toast_1 = require('./plugins/toast');
var touchid_1 = require('./plugins/touchid');
var text_to_speech_1 = require('./plugins/text-to-speech');
var themeable_browser_1 = require('./plugins/themeable-browser');
var twitter_connect_1 = require('./plugins/twitter-connect');
var vibration_1 = require('./plugins/vibration');
var video_editor_1 = require('./plugins/video-editor');
var video_player_1 = require('./plugins/video-player');
var webintent_1 = require('./plugins/webintent');
var youtube_video_player_1 = require('./plugins/youtube-video-player');
var z_bar_1 = require('./plugins/z-bar');
var zip_1 = require('./plugins/zip');
__export(require('./plugins/3dtouch'));
__export(require('./plugins/actionsheet'));
__export(require('./plugins/admob'));
__export(require('./plugins/android-fingerprint-auth'));
__export(require('./plugins/appavailability'));
__export(require('./plugins/apprate'));
__export(require('./plugins/appversion'));
__export(require('./plugins/background-geolocation'));
__export(require('./plugins/backgroundmode'));
__export(require('./plugins/badge'));
__export(require('./plugins/barcodescanner'));
__export(require('./plugins/base64togallery'));
__export(require('./plugins/batterystatus'));
__export(require('./plugins/ble'));
__export(require('./plugins/bluetoothserial'));
__export(require('./plugins/brightness'));
__export(require('./plugins/calendar'));
__export(require('./plugins/call-number'));
__export(require('./plugins/camera'));
__export(require('./plugins/camera-preview'));
__export(require('./plugins/card-io'));
__export(require('./plugins/clipboard'));
__export(require('./plugins/code-push'));
__export(require('./plugins/contacts'));
__export(require('./plugins/crop'));
__export(require('./plugins/datepicker'));
__export(require('./plugins/dbmeter'));
__export(require('./plugins/deeplinks'));
__export(require('./plugins/device'));
__export(require('./plugins/device-feedback'));
__export(require('./plugins/deviceaccounts'));
__export(require('./plugins/devicemotion'));
__export(require('./plugins/deviceorientation'));
__export(require('./plugins/diagnostic'));
__export(require('./plugins/dialogs'));
__export(require('./plugins/emailcomposer'));
__export(require('./plugins/estimote-beacons'));
__export(require('./plugins/facebook'));
__export(require('./plugins/file'));
__export(require('./plugins/file-chooser'));
__export(require('./plugins/file-opener'));
__export(require('./plugins/filetransfer'));
__export(require('./plugins/filepath'));
__export(require('./plugins/flashlight'));
__export(require('./plugins/geofence'));
__export(require('./plugins/geolocation'));
__export(require('./plugins/globalization'));
__export(require('./plugins/google-plus'));
__export(require('./plugins/googleanalytics'));
__export(require('./plugins/googlemap'));
__export(require('./plugins/hotspot'));
__export(require('./plugins/http'));
__export(require('./plugins/httpd'));
__export(require('./plugins/ibeacon'));
__export(require('./plugins/imagepicker'));
__export(require('./plugins/imageresizer'));
__export(require('./plugins/inappbrowser'));
__export(require('./plugins/inapppurchase'));
__export(require('./plugins/insomnia'));
__export(require('./plugins/instagram'));
__export(require('./plugins/is-debug'));
__export(require('./plugins/keyboard'));
__export(require('./plugins/launchnavigator'));
__export(require('./plugins/localnotifications'));
__export(require('./plugins/location-accuracy'));
__export(require('./plugins/market'));
__export(require('./plugins/media'));
__export(require('./plugins/media-capture'));
__export(require('./plugins/mixpanel'));
__export(require('./plugins/music-controls'));
__export(require('./plugins/native-audio'));
__export(require('./plugins/native-page-transitions'));
__export(require('./plugins/nativestorage'));
__export(require('./plugins/network'));
__export(require('./plugins/nfc'));
__export(require('./plugins/onesignal'));
__export(require('./plugins/pay-pal'));
__export(require('./plugins/photo-viewer'));
__export(require('./plugins/pin-dialog'));
__export(require('./plugins/plugin'));
__export(require('./plugins/power-management'));
__export(require('./plugins/printer'));
__export(require('./plugins/push'));
__export(require('./plugins/safari-view-controller'));
__export(require('./plugins/screen-orientation'));
__export(require('./plugins/screenshot'));
__export(require('./plugins/securestorage'));
__export(require('./plugins/shake'));
__export(require('./plugins/sim'));
__export(require('./plugins/sms'));
__export(require('./plugins/socialsharing'));
__export(require('./plugins/spinnerdialog'));
__export(require('./plugins/splashscreen'));
__export(require('./plugins/sqlite'));
__export(require('./plugins/statusbar'));
__export(require('./plugins/stepcounter'));
__export(require('./plugins/streaming-media'));
__export(require('./plugins/text-to-speech'));
__export(require('./plugins/themeable-browser'));
__export(require('./plugins/toast'));
__export(require('./plugins/touchid'));
__export(require('./plugins/twitter-connect'));
__export(require('./plugins/vibration'));
__export(require('./plugins/video-editor'));
__export(require('./plugins/video-player'));
__export(require('./plugins/webintent'));
__export(require('./plugins/youtube-video-player'));
__export(require('./plugins/z-bar'));
__export(require('./plugins/zip'));
// Window export to use outside of a module loading system
window['IonicNative'] = {
    ActionSheet: actionsheet_1.ActionSheet,
    AdMob: admob_1.AdMob,
    AndroidFingerprintAuth: android_fingerprint_auth_1.AndroidFingerprintAuth,
    AppAvailability: appavailability_1.AppAvailability,
    AppRate: apprate_1.AppRate,
    AppVersion: appversion_1.AppVersion,
    Badge: badge_1.Badge,
    BackgroundGeolocation: background_geolocation_1.BackgroundGeolocation,
    BackgroundMode: backgroundmode_1.BackgroundMode,
    BarcodeScanner: barcodescanner_1.BarcodeScanner,
    Base64ToGallery: base64togallery_1.Base64ToGallery,
    BatteryStatus: batterystatus_1.BatteryStatus,
    Brightness: brightness_1.Brightness,
    BLE: ble_1.BLE,
    BluetoothSerial: bluetoothserial_1.BluetoothSerial,
    Calendar: calendar_1.Calendar,
    CallNumber: call_number_1.CallNumber,
    Camera: camera_1.Camera,
    CameraPreview: camera_preview_1.CameraPreview,
    CardIO: card_io_1.CardIO,
    Clipboard: clipboard_1.Clipboard,
    CodePush: code_push_1.CodePush,
    Contacts: contacts_1.Contacts,
    Crop: crop_1.Crop,
    DatePicker: datepicker_1.DatePicker,
    DBMeter: dbmeter_1.DBMeter,
    Deeplinks: deeplinks_1.Deeplinks,
    Device: device_1.Device,
    DeviceFeedback: device_feedback_1.DeviceFeedback,
    DeviceAccounts: deviceaccounts_1.DeviceAccounts,
    DeviceMotion: devicemotion_1.DeviceMotion,
    DeviceOrientation: deviceorientation_1.DeviceOrientation,
    Dialogs: dialogs_1.Dialogs,
    Diagnostic: diagnostic_1.Diagnostic,
    EmailComposer: emailcomposer_1.EmailComposer,
    EstimoteBeacons: estimote_beacons_1.EstimoteBeacons,
    Facebook: facebook_1.Facebook,
    File: file_1.File,
    FileChooser: file_chooser_1.FileChooser,
    FileOpener: file_opener_1.FileOpener,
    FilePath: filepath_1.FilePath,
    Flashlight: flashlight_1.Flashlight,
    Geofence: geofence_1.Geofence,
    Geolocation: geolocation_1.Geolocation,
    Globalization: globalization_1.Globalization,
    GooglePlus: google_plus_1.GooglePlus,
    GoogleMap: googlemap_1.GoogleMap,
    GoogleAnalytics: googleanalytics_1.GoogleAnalytics,
    Hotspot: hotspot_1.Hotspot,
    HTTP: http_1.HTTP,
    Httpd: httpd_1.Httpd,
    IBeacon: ibeacon_1.IBeacon,
    ImagePicker: imagepicker_1.ImagePicker,
    ImageResizer: imageresizer_1.ImageResizer,
    InAppBrowser: inappbrowser_1.InAppBrowser,
    InAppPurchase: inapppurchase_1.InAppPurchase,
    Insomnia: insomnia_1.Insomnia,
    Instagram: instagram_1.Instagram,
    IsDebug: is_debug_1.IsDebug,
    Keyboard: keyboard_1.Keyboard,
    LaunchNavigator: launchnavigator_1.LaunchNavigator,
    LocalNotifications: localnotifications_1.LocalNotifications,
    LocationAccuracy: location_accuracy_1.LocationAccuracy,
    Market: market_1.Market,
    MediaCapture: media_capture_1.MediaCapture,
    MediaPlugin: media_1.MediaPlugin,
    Mixpanel: mixpanel_1.Mixpanel,
    MusicControls: music_controls_1.MusicControls,
    NativeAudio: native_audio_1.NativeAudio,
    NativePageTransitions: native_page_transitions_1.NativePageTransitions,
    NativeStorage: nativestorage_1.NativeStorage,
    Network: network_1.Network,
    PayPal: pay_pal_1.PayPal,
    NFC: nfc_1.NFC,
    Printer: printer_1.Printer,
    Push: push_1.Push,
    OneSignal: onesignal_1.OneSignal,
    PhotoViewer: photo_viewer_1.PhotoViewer,
    ScreenOrientation: screen_orientation_1.ScreenOrientation,
    PinDialog: pin_dialog_1.PinDialog,
    PowerManagement: power_management_1.PowerManagement,
    SafariViewController: safari_view_controller_1.SafariViewController,
    Screenshot: screenshot_1.Screenshot,
    SecureStorage: securestorage_1.SecureStorage,
    Shake: shake_1.Shake,
    Sim: sim_1.Sim,
    SMS: sms_1.SMS,
    SocialSharing: socialsharing_1.SocialSharing,
    SpinnerDialog: spinnerdialog_1.SpinnerDialog,
    Splashscreen: splashscreen_1.Splashscreen,
    SQLite: sqlite_1.SQLite,
    StatusBar: statusbar_1.StatusBar,
    Stepcounter: stepcounter_1.Stepcounter,
    StreamingMedia: streaming_media_1.StreamingMedia,
    ThreeDeeTouch: _3dtouch_1.ThreeDeeTouch,
    Toast: toast_1.Toast,
    TouchID: touchid_1.TouchID,
    Transfer: filetransfer_1.Transfer,
    TextToSpeech: text_to_speech_1.TextToSpeech,
    ThemeableBrowser: themeable_browser_1.ThemeableBrowser,
    TwitterConnect: twitter_connect_1.TwitterConnect,
    VideoEditor: video_editor_1.VideoEditor,
    VideoPlayer: video_player_1.VideoPlayer,
    Vibration: vibration_1.Vibration,
    WebIntent: webintent_1.WebIntent,
    YoutubeVideoPlayer: youtube_video_player_1.YoutubeVideoPlayer,
    ZBar: z_bar_1.ZBar,
    Zip: zip_1.Zip
};
ng1_1.initAngular1(window['IonicNative']);
// To help developers using cordova, we listen for the device ready event and
// log an error if it didn't fire in a reasonable amount of time. Generally,
// when this happens, developers should remove and reinstall plugins, since
// an inconsistent plugin is often the culprit.
var before = Date.now();
var didFireReady = false;
document.addEventListener('deviceready', function () {
    console.log('DEVICE READY FIRED AFTER', (Date.now() - before), 'ms');
    didFireReady = true;
});
setTimeout(function () {
    if (!didFireReady && window.cordova) {
        console.warn("Native: deviceready did not fire within " + DEVICE_READY_TIMEOUT + "ms. This can happen when plugins are in an inconsistent state. Try removing plugins from plugins/ and reinstalling them.");
    }
}, DEVICE_READY_TIMEOUT);

},{"./ng1":2,"./plugins/3dtouch":3,"./plugins/actionsheet":4,"./plugins/admob":5,"./plugins/android-fingerprint-auth":6,"./plugins/appavailability":7,"./plugins/apprate":8,"./plugins/appversion":9,"./plugins/background-geolocation":10,"./plugins/backgroundmode":11,"./plugins/badge":12,"./plugins/barcodescanner":13,"./plugins/base64togallery":14,"./plugins/batterystatus":15,"./plugins/ble":16,"./plugins/bluetoothserial":17,"./plugins/brightness":18,"./plugins/calendar":19,"./plugins/call-number":20,"./plugins/camera":22,"./plugins/camera-preview":21,"./plugins/card-io":23,"./plugins/clipboard":24,"./plugins/code-push":25,"./plugins/contacts":26,"./plugins/crop":27,"./plugins/datepicker":28,"./plugins/dbmeter":29,"./plugins/deeplinks":30,"./plugins/device":32,"./plugins/device-feedback":31,"./plugins/deviceaccounts":33,"./plugins/devicemotion":34,"./plugins/deviceorientation":35,"./plugins/diagnostic":36,"./plugins/dialogs":37,"./plugins/emailcomposer":38,"./plugins/estimote-beacons":39,"./plugins/facebook":40,"./plugins/file":43,"./plugins/file-chooser":41,"./plugins/file-opener":42,"./plugins/filepath":44,"./plugins/filetransfer":45,"./plugins/flashlight":46,"./plugins/geofence":47,"./plugins/geolocation":48,"./plugins/globalization":49,"./plugins/google-plus":50,"./plugins/googleanalytics":51,"./plugins/googlemap":52,"./plugins/hotspot":53,"./plugins/http":54,"./plugins/httpd":55,"./plugins/ibeacon":56,"./plugins/imagepicker":57,"./plugins/imageresizer":58,"./plugins/inappbrowser":59,"./plugins/inapppurchase":60,"./plugins/insomnia":61,"./plugins/instagram":62,"./plugins/is-debug":63,"./plugins/keyboard":64,"./plugins/launchnavigator":65,"./plugins/localnotifications":66,"./plugins/location-accuracy":67,"./plugins/market":68,"./plugins/media":70,"./plugins/media-capture":69,"./plugins/mixpanel":71,"./plugins/music-controls":72,"./plugins/native-audio":73,"./plugins/native-page-transitions":74,"./plugins/nativestorage":75,"./plugins/network":76,"./plugins/nfc":77,"./plugins/onesignal":78,"./plugins/pay-pal":79,"./plugins/photo-viewer":80,"./plugins/pin-dialog":81,"./plugins/plugin":82,"./plugins/power-management":83,"./plugins/printer":84,"./plugins/push":85,"./plugins/safari-view-controller":86,"./plugins/screen-orientation":87,"./plugins/screenshot":88,"./plugins/securestorage":89,"./plugins/shake":90,"./plugins/sim":91,"./plugins/sms":92,"./plugins/socialsharing":93,"./plugins/spinnerdialog":94,"./plugins/splashscreen":95,"./plugins/sqlite":96,"./plugins/statusbar":97,"./plugins/stepcounter":98,"./plugins/streaming-media":99,"./plugins/text-to-speech":100,"./plugins/themeable-browser":101,"./plugins/toast":102,"./plugins/touchid":103,"./plugins/twitter-connect":104,"./plugins/vibration":105,"./plugins/video-editor":106,"./plugins/video-player":107,"./plugins/webintent":108,"./plugins/youtube-video-player":109,"./plugins/z-bar":110,"./plugins/zip":111}],2:[function(require,module,exports){
"use strict";
/**
 * Initialize the ionic.native Angular module if we're running in ng1.
 * This iterates through the list of registered plugins and dynamically
 * creates Angular 1 services of the form $cordovaSERVICE, ex: $cordovaStatusBar.
 */
function initAngular1(plugins) {
    if (window.angular) {
        var ngModule_1 = window.angular.module('ionic.native', []);
        for (var name in plugins) {
            var serviceName = '$cordova' + name;
            var cls = plugins[name];
            (function (serviceName, cls, name) {
                ngModule_1.service(serviceName, [function () {
                        var funcs = window.angular.copy(cls);
                        funcs.prototype['name'] = name;
                        return funcs;
                    }]);
            })(serviceName, cls, name);
        }
    }
}
exports.initAngular1 = initAngular1;

},{}],3:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
var Observable_1 = require('rxjs/Observable');
/**
 * @name 3DTouch
 * @description
 * @usage
 * Please do refer to the original plugin's repo for detailed usage. The usage example here might not be sufficient.
 * ```
 * import { ThreeDeeTouch } from 'ionic-native';
 *
 * // import for type completion on variables
 * import { ThreeDeeTouchQuickAction, ThreeDeeTouchForceTouch } from 'ionic-native';
 * ...
 *
 * ThreeDeeTouch.isAvailable().then(isAvailable => console.log("3D Touch available? " + isAvailable));
 *
 * ThreeDeeTouch.watchForceTouches()
 *   .subscribe(
 *     (data: ThreeDeeTouchForceTouch) => {
 *       console.log("Force touch %" + data.force);
 *       console.log("Force touch timestamp: " + data.timestamp);
 *       console.log("Force touch x: " + data.x);
 *       console.log("Force touch y: " + data.y);
 *     }
 *   );
 *
 *
 * let actions: Array<ThreeDeeTouchQuickAction> = [
 *   {
 *     type: 'checkin',
 *     title: 'Check in',
 *     subtitle: 'Quickly check in',
 *     iconType: 'Compose'
 *   },
 *   {
 *     type: 'share',
 *     title: 'Share',
 *     subtitle: 'Share like you care',
 *     iconType: 'Share'
 *   },
 *   {
 *     type: 'search',
 *     title: 'Search',
 *     iconType: 'Search'
 *   },
 *   {
 *     title: 'Show favorites',
 *     iconTemplate: 'HeartTemplate'
 *   }
 * ];
 * ThreeDeeTouch.configureQuickActions(actions);
 *
 * ThreeDeeTouch.onHomeIconPressed().subscribe(
 *  (payload) => {
 *    // returns an object that is the button you presed
 *    console.log('Pressed the ${payload.title} button')
 *    console.log(payload.type)
 *
 *  }
 * )
 * ```
 * @interfaces
 * ThreeDeeTouchQuickAction
 * ThreeDeeTouchForceTouch
 */
var ThreeDeeTouch = (function () {
    function ThreeDeeTouch() {
    }
    /**
     * You need an iPhone 6S or some future tech to use the features of this plugin, so you can check at runtime if the user's device is supported.
     * @returns {Promise<boolean>} returns a promise that resolves with a boolean that indicates whether the plugin is available or not
     */
    ThreeDeeTouch.isAvailable = function () { return; };
    /**
     * You can get a notification when the user force touches the webview. The plugin defines a Force Touch when at least 75% of the maximum force is applied to the screen. Your app will receive the x and y coordinates, so you have to figure out which UI element was touched.
     * @returns {Observable<ThreeDeeTouchForceTouch>} Returns an observable that sends a `ThreeDeeTouchForceTouch` object
     */
    ThreeDeeTouch.watchForceTouches = function () { return; };
    /**
     * setup the 3D-touch actions, takes an array of objects with the following
     * @param {string} type (optional) A type that can be used `onHomeIconPressed` callback
     * @param {string} title Title for your action
     * @param {string} subtitle (optional) A short description for your action
     * @param {string} iconType (optional) Choose between Prohibit, Contact, Home, MarkLocation, Favorite, Love, Cloud, Invitation, Confirmation, Mail, Message, Date, Time, CapturePhoto, CaptureVideo, Task, TaskCompleted, Alarm, Bookmark, Shuffle, Audio, Update
     * @param {string} iconTemplate (optional) Can be used to provide your own icon
     */
    ThreeDeeTouch.configureQuickActions = function (quickActions) { };
    /**
     * When a home icon is pressed, your app launches and this JS callback is invoked.
     * @returns {Observable<any>} returns an observable that notifies you when he user presses on the home screen icon
     */
    ThreeDeeTouch.onHomeIconPressed = function () {
        return new Observable_1.Observable(function (observer) {
            if (window.ThreeDeeTouch) {
                window.ThreeDeeTouch.onHomeIconPressed = observer.next.bind(observer);
            }
            else {
                observer.error('3dTouch plugin is not available.');
                observer.complete();
            }
        });
    };
    /**
     * Enable Link Preview.
     * UIWebView and WKWebView (the webviews powering Cordova apps) don't allow the fancy new link preview feature of iOS9.
     */
    ThreeDeeTouch.enableLinkPreview = function () { };
    /**
     * Disabled the link preview feature, if enabled.
     */
    ThreeDeeTouch.disableLinkPreview = function () { };
    __decorate([
        plugin_1.Cordova()
    ], ThreeDeeTouch, "isAvailable", null);
    __decorate([
        plugin_1.Cordova({
            observable: true
        })
    ], ThreeDeeTouch, "watchForceTouches", null);
    __decorate([
        plugin_1.Cordova({
            sync: true
        })
    ], ThreeDeeTouch, "configureQuickActions", null);
    __decorate([
        plugin_1.Cordova({
            sync: true
        })
    ], ThreeDeeTouch, "enableLinkPreview", null);
    __decorate([
        plugin_1.Cordova({
            sync: true
        })
    ], ThreeDeeTouch, "disableLinkPreview", null);
    ThreeDeeTouch = __decorate([
        plugin_1.Plugin({
            pluginName: 'ThreeDeeTouch',
            plugin: 'cordova-plugin-3dtouch',
            pluginRef: 'ThreeDeeTouch',
            repo: 'https://github.com/EddyVerbruggen/cordova-plugin-3dtouch',
            platforms: ['iOS']
        })
    ], ThreeDeeTouch);
    return ThreeDeeTouch;
}());
exports.ThreeDeeTouch = ThreeDeeTouch;

},{"./plugin":82,"rxjs/Observable":113}],4:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name Action Sheet
 * @description
 * The ActionSheet plugin shows a native list of options the user can pick.
 *
 * Requires Cordova plugin: `cordova-plugin-actionsheet`. For more info, please see the [ActionSheet plugin docs](https://github.com/EddyVerbruggen/cordova-plugin-actionsheet).
 *
 * @usage
 * ```typescript
 * import { ActionSheet } from 'ionic-native';
 *
 * let buttonLabels = ['Share via Facebook', 'Share via Twitter'];
 * ActionSheet.show({
 *   'title': 'What do you want with this image?',
 *   'buttonLabels': buttonLabels,
 *   'addCancelButtonWithLabel': 'Cancel',
 *   'addDestructiveButtonWithLabel' : 'Delete'
 * }).then((buttonIndex: number) => {
 *   console.log('Button pressed: ' + buttonIndex);
 * });
 * ```
 * @interfaces
 * ActionSheetOptions
 */
var ActionSheet = (function () {
    function ActionSheet() {
    }
    /**
     * Show a native ActionSheet component. See below for options.
     * @param options {ActionSheetOptions} Options See table below
     * @returns {Promise<any>} Returns a Promise that resolves with the index of the
     *   button pressed (1 based, so 1, 2, 3, etc.)
     */
    ActionSheet.show = function (options) { return; };
    /**
     * Progamtically hide the native ActionSheet
     * @returns {Promise<any>} Returns a Promise that resolves when the actionsheet is closed
     */
    ActionSheet.hide = function (options) { return; };
    __decorate([
        plugin_1.Cordova()
    ], ActionSheet, "show", null);
    __decorate([
        plugin_1.Cordova()
    ], ActionSheet, "hide", null);
    ActionSheet = __decorate([
        plugin_1.Plugin({
            pluginName: 'ActionSheet',
            plugin: 'cordova-plugin-actionsheet',
            pluginRef: 'plugins.actionsheet',
            repo: 'https://github.com/EddyVerbruggen/cordova-plugin-actionsheet',
            platforms: ['Android', 'iOS', 'Windows Phone 8']
        })
    ], ActionSheet);
    return ActionSheet;
}());
exports.ActionSheet = ActionSheet;

},{"./plugin":82}],5:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name AdMob
 * @description
 * Plugin for Google Ads, including AdMob / DFP (doubleclick for publisher) and mediations to other Ad networks.
 * @usage
 * ```typescript
 * import { AdMob } from 'ionic-native';
 *
 * ionViewDidLoad() {
 *   AdMob.onAdDismiss()
 *     .subscribe(() => { console.log('User dismissed ad'); });
 * }
 *
 * onClick() {
 *   AdMob.prepareInterstitial('YOUR_ADID')
 *     .then(() => { AdMob.showInterstitial(); });
 * }
 *
 * ```
 *
 * @interfaces
 * AdMobOptions
 * AdMobAdExtras
 */
var AdMob = (function () {
    function AdMob() {
    }
    /**
     * Create a banner
     * @param adIdOrOptions {string | AdMobOptions} Ad ID or Options
     * @returns {Promise<any>} Returns a Promise that resolves when the banner is created
     */
    AdMob.createBanner = function (adIdOrOptions) { return; };
    /**
     * Destroy the banner, remove it from screen.
     */
    AdMob.removeBanner = function () { };
    /**
     * Show banner at position
     * @param position {number} Position. Use `AdMob.AD_POSITION` to set values.
     */
    AdMob.showBanner = function (position) { };
    /**
     * Show banner at custom position
     * @param x {number} Offset from screen left.
     * @param y {number} Offset from screen top.
     */
    AdMob.showBannerAtXY = function (x, y) { };
    /**
     * Hide the banner, remove it from screen, but can show it later
     */
    AdMob.hideBanner = function () { };
    /**
     * Prepare interstitial banner
     * @param adIdOrOptions {string | AdMobOptions} Ad ID or Options
     * @returns {Promise<any>} Returns a Promise that resolves when interstitial is prepared
     */
    AdMob.prepareInterstitial = function (adIdOrOptions) { return; };
    /**
     * Show interstitial ad when it's ready
     */
    AdMob.showInterstitial = function () { };
    /**
     * Prepare a reward video ad
     * @param adIdOrOptions {string | AdMobOptions} Ad ID or Options
     * @returns {Promise<any>} Returns a Promise that resolves when the ad is prepared
     */
    AdMob.prepareRewardVideoAd = function (adIdOrOptions) { return; };
    /**
     * Show a reward video ad
     */
    AdMob.showRewardVideoAd = function () { };
    /**
     * Sets the values for configuration and targeting
     * @param options {AdMobOptions} Options
     * @returns {Promise<any>} Returns a Promise that resolves when the options have been set
     */
    AdMob.setOptions = function (options) { return; };
    /**
     * Get user ad settings
     * @returns {Promise<any>} Returns a promise that resolves with the ad settings
     */
    AdMob.getAdSettings = function () { return; };
    /**
     * Triggered when failed to receive Ad
     * @returns {Observable<any>}
     */
    AdMob.onAdFailLoad = function () { return; };
    /**
     * Triggered when Ad received
     * @returns {Observable<any>}
     */
    AdMob.onAdLoaded = function () { return; };
    /**
     * Triggered when Ad will be showed on screen
     * @returns {Observable<any>}
     */
    AdMob.onAdPresent = function () { return; };
    /**
     * Triggered when user click the Ad, and will jump out of your App
     * @returns {Observable<any>}
     */
    AdMob.onAdLeaveApp = function () { return; };
    /**
     * Triggered when dismiss the Ad and back to your App
     * @returns {Observable<any>}
     */
    AdMob.onAdDismiss = function () { return; };
    /**
     * @private
     */
    AdMob.AD_POSITION = {
        NO_CHANGE: 0,
        TOP_LEFT: 1,
        TOP_CENTER: 2,
        TOP_RIGHT: 3,
        LEFT: 4,
        CENTER: 5,
        RIGHT: 6,
        BOTTOM_LEFT: 7,
        BOTTOM_CENTER: 8,
        BOTTOM_RIGHT: 9,
        POS_XY: 10
    };
    __decorate([
        plugin_1.Cordova()
    ], AdMob, "createBanner", null);
    __decorate([
        plugin_1.Cordova({
            sync: true
        })
    ], AdMob, "removeBanner", null);
    __decorate([
        plugin_1.Cordova({
            sync: true
        })
    ], AdMob, "showBanner", null);
    __decorate([
        plugin_1.Cordova({
            sync: true
        })
    ], AdMob, "showBannerAtXY", null);
    __decorate([
        plugin_1.Cordova({
            sync: true
        })
    ], AdMob, "hideBanner", null);
    __decorate([
        plugin_1.Cordova()
    ], AdMob, "prepareInterstitial", null);
    __decorate([
        plugin_1.Cordova({
            sync: true
        })
    ], AdMob, "showInterstitial", null);
    __decorate([
        plugin_1.Cordova()
    ], AdMob, "prepareRewardVideoAd", null);
    __decorate([
        plugin_1.Cordova({
            sync: true
        })
    ], AdMob, "showRewardVideoAd", null);
    __decorate([
        plugin_1.Cordova()
    ], AdMob, "setOptions", null);
    __decorate([
        plugin_1.Cordova()
    ], AdMob, "getAdSettings", null);
    __decorate([
        plugin_1.Cordova({
            eventObservable: true,
            event: 'onAdFailLoad'
        })
    ], AdMob, "onAdFailLoad", null);
    __decorate([
        plugin_1.Cordova({
            eventObservable: true,
            event: 'onAdLoaded'
        })
    ], AdMob, "onAdLoaded", null);
    __decorate([
        plugin_1.Cordova({
            eventObservable: true,
            event: 'onAdPresent'
        })
    ], AdMob, "onAdPresent", null);
    __decorate([
        plugin_1.Cordova({
            eventObservable: true,
            event: 'onAdLeaveApp'
        })
    ], AdMob, "onAdLeaveApp", null);
    __decorate([
        plugin_1.Cordova({
            eventObservable: true,
            event: 'onAdDismiss'
        })
    ], AdMob, "onAdDismiss", null);
    AdMob = __decorate([
        plugin_1.Plugin({
            pluginName: 'AdMob',
            plugin: 'cordova-plugin-admobpro',
            pluginRef: 'AdMob',
            repo: 'https://github.com/floatinghotpot/cordova-admob-pro',
            platforms: ['Android', 'iOS', 'Windows Phone 8']
        })
    ], AdMob);
    return AdMob;
}());
exports.AdMob = AdMob;

},{"./plugin":82}],6:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name Android Fingerprint Auth
 * @description
 * This plugin will open a native dialog fragment prompting the user to authenticate using their fingerprint. If the device has a secure lockscreen (pattern, PIN, or password), the user may opt to authenticate using that method as a backup.
 * @usage
 * ```typescript
 * import { AndroidFingerprintAuth } from 'ionic-native';
 *
 * AndroidFingerprintAuth.isAvailable()
 *   .then((result)=> {
 *     if(result.isAvailable){
 *       // it is available
 *
 *       AndroidFingerprintAuth.show({ clientId: "myAppName", clientSecret: "so_encrypted_much_secure_very_secret" })
 *         .then(result => {
 *            if(result.withFingerprint) {
 *              console.log('Successfully authenticated with fingerprint!');
 *            } else if(result.withPassword) {
 *              console.log('Successfully authenticated with backup password!');
 *            } else console.log('Didn\'t authenticate!');
 *         })
 *         .catch(error => console.error(error));
 *
 *     } else {
 *       // fingerprint auth isn't available
 *     }
 *   })
 *   .catch(error => console.error(error));
 * ```
 * @interfaces
 * AndroidFingerprintAuthOptions
 */
var AndroidFingerprintAuth = (function () {
    function AndroidFingerprintAuth() {
    }
    /**
     * Opens a native dialog fragment to use the device hardware fingerprint scanner to authenticate against fingerprints registered for the device.
     * @param options {AndroidFingerprintAuthOptions} Options
     * @returns {Promise<any>}
     */
    AndroidFingerprintAuth.show = function (options) { return; };
    /**
     * Check if service is available
     * @returns {Promise<any>} Returns a Promise that resolves if fingerprint auth is available on the device
     */
    AndroidFingerprintAuth.isAvailable = function () { return; };
    __decorate([
        plugin_1.Cordova()
    ], AndroidFingerprintAuth, "show", null);
    __decorate([
        plugin_1.Cordova()
    ], AndroidFingerprintAuth, "isAvailable", null);
    AndroidFingerprintAuth = __decorate([
        plugin_1.Plugin({
            pluginName: 'AndroidFingerprintAuth',
            plugin: 'cordova-plugin-android-fingerprint-auth',
            pluginRef: 'FingerprintAuth',
            repo: 'https://github.com/mjwheatley/cordova-plugin-android-fingerprint-auth'
        })
    ], AndroidFingerprintAuth);
    return AndroidFingerprintAuth;
}());
exports.AndroidFingerprintAuth = AndroidFingerprintAuth;

},{"./plugin":82}],7:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name App Availability
 * @description
 * This plugin allows you to check if an app is installed on the user's device. It requires an URI Scheme (e.g. twitter://) on iOS or a Package Name (e.g com.twitter.android) on Android.
 *
 * Requires Cordova plugin: cordova-plugin-appavailability. For more info, please see the [AppAvailability plugin docs](https://github.com/ohh2ahh/AppAvailability).
 *
 * @usage
 * ```typescript
 * import { AppAvailability, Device } from 'ionic-native';
 *
 *
 * let app;
 *
 * if (Device.platform === 'iOS') {
 *   app = 'twitter://';
 * } else if (device.platform === 'Android') {
 *   app = 'com.twitter.android';
 * }
 *
 * AppAvailability.check(app)
 *   .then(
 *     (yes: string) => console.log(app + ' is available'),
 *     (no: string) => console.log(app + ' is NOT available')
 *   );
 * ```
 */
var AppAvailability = (function () {
    function AppAvailability() {
    }
    /**
     * Checks if an app is available on device
     * @param {string} app Package name on android, or URI scheme on iOS
     * @returns {Promise<boolean>}
     */
    AppAvailability.check = function (app) { return; };
    __decorate([
        plugin_1.Cordova()
    ], AppAvailability, "check", null);
    AppAvailability = __decorate([
        plugin_1.Plugin({
            pluginName: 'AppAvailability',
            plugin: 'cordova-plugin-appavailability',
            pluginRef: 'appAvailability',
            repo: 'https://github.com/ohh2ahh/AppAvailability',
            platforms: ['Android', 'iOS']
        })
    ], AppAvailability);
    return AppAvailability;
}());
exports.AppAvailability = AppAvailability;

},{"./plugin":82}],8:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name App Rate
 * @description
 * The AppRate plugin makes it easy to prompt the user to rate your app, either now, later, or never.
 *
 * Requires Cordova plugin: cordova-plugin-apprate. For more info, please see the [AppRate plugin docs](https://github.com/pushandplay/cordova-plugin-apprate).
 *
 * @usage
 * ```typescript
 * import { AppRate } from 'ionic-native';
 *
 *  AppRate.preferences.storeAppURL = {
 *    ios: '<my_app_id>',
 *    android: 'market://details?id=<package_name>',
 *  };
 *
 * AppRate.promptForRating(false);
 * ```
 *
 * @interfaces
 * AppRatePreferences
 * AppRateStoreAppUrls
 * AppRateCallbacks
 *
 */
var AppRate = (function () {
    function AppRate() {
    }
    /**
     * Prompts the user for rating
     * @param {boolean} immediately  Show the rating prompt immediately.
     */
    AppRate.promptForRating = function (immediately) { };
    ;
    __decorate([
        plugin_1.CordovaProperty
    ], AppRate, "preferences", void 0);
    __decorate([
        plugin_1.Cordova()
    ], AppRate, "promptForRating", null);
    AppRate = __decorate([
        plugin_1.Plugin({
            pluginName: 'AppRate',
            plugin: 'cordova-plugin-apprate',
            pluginRef: 'AppRate',
            repo: 'https://github.com/pushandplay/cordova-plugin-apprate',
            platforms: ['Android', 'iOS']
        })
    ], AppRate);
    return AppRate;
}());
exports.AppRate = AppRate;

},{"./plugin":82}],9:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name App Version
 * @description
 * Reads the version of your app from the target build settings.
 *
 * Requires Cordova plugin: `cordova-plugin-app-version`. For more info, please see the [Cordova App Version docs](https://github.com/whiteoctober/cordova-plugin-app-version).
 *
 * @usage
 * ```typescript
 * import { AppVersion } from 'ionic-native';
 *
 *
 *  AppVersion.getAppName();
 *  AppVersion.getPackageName();
 *  AppVersion.getVersionCode();
 *  AppVersion.getVersionNumber();
 * ```
 */
var AppVersion = (function () {
    function AppVersion() {
    }
    /**
     * Returns the name of the app
     * @returns {Promise<any>}
     */
    AppVersion.getAppName = function () { return; };
    /**
     * Returns the package name of the app
     * @returns {Promise<any>}
     */
    AppVersion.getPackageName = function () { return; };
    /**
     * Returns the build identifier of the app
     * @returns {Promise<any>}
     */
    AppVersion.getVersionCode = function () { return; };
    /**
     * Returns the version of the app
     * @returns {Promise<any>}
     */
    AppVersion.getVersionNumber = function () { return; };
    __decorate([
        plugin_1.Cordova()
    ], AppVersion, "getAppName", null);
    __decorate([
        plugin_1.Cordova()
    ], AppVersion, "getPackageName", null);
    __decorate([
        plugin_1.Cordova()
    ], AppVersion, "getVersionCode", null);
    __decorate([
        plugin_1.Cordova()
    ], AppVersion, "getVersionNumber", null);
    AppVersion = __decorate([
        plugin_1.Plugin({
            pluginName: 'AppVersion',
            plugin: 'cordova-plugin-app-version',
            pluginRef: 'cordova.getAppVersion',
            repo: 'https://github.com/whiteoctober/cordova-plugin-app-version',
            platforms: ['Android', 'iOS']
        })
    ], AppVersion);
    return AppVersion;
}());
exports.AppVersion = AppVersion;

},{"./plugin":82}],10:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name BackgroundGeolocation
 * @description
 * This plugin provides foreground and background geolocation with battery-saving "circular region monitoring" and "stop detection". For
 * more detail, please see https://github.com/mauron85/cordova-plugin-background-geolocation
 *
 * @usage
 *
 * ```typescript
 * import { BackgroundGeolocation } from 'ionic-native';
 *
 *
 * // When device is ready :
 * platform.ready().then(() => {
 *     // IMPORTANT: BackgroundGeolocation must be called within app.ts and or before Geolocation. Otherwise the platform will not ask you for background tracking permission.
 *
 *     // BackgroundGeolocation is highly configurable. See platform specific configuration options
 *     let config = {
 *             desiredAccuracy: 10,
 *             stationaryRadius: 20,
 *             distanceFilter: 30,
 *             debug: true, //  enable this hear sounds for background-geolocation life-cycle.
 *             stopOnTerminate: false, // enable this to clear background location settings when the app terminates
 *     };
 *
 *     BackgroundGeolocation.configure((location) => {
         console.log('[js] BackgroundGeolocation callback:  ' + location.latitude + ',' + location.longitude);

          // IMPORTANT:  You must execute the finish method here to inform the native plugin that you're finished,
          // and the background-task may be completed.  You must do this regardless if your HTTP request is successful or not.
          // IF YOU DON'T, ios will CRASH YOUR APP for spending too much time in the background.
          BackgroundGeolocation.finish(); // FOR IOS ONLY

 *      }, (error) => {
 *        console.log('BackgroundGeolocation error');
 *      }, config);
 *
 *     // Turn ON the background-geolocation system.  The user will be tracked whenever they suspend the app.
 *     BackgroundGeolocation.start();
 * })
 *
 * // If you wish to turn OFF background-tracking, call the #stop method.
 * BackgroundGeolocation.stop();
 *
 * ```
 * @interfaces
 * BackgroundGeolocationResponse
 * BackgroundGeolocationConfig
 */
var BackgroundGeolocation = (function () {
    function BackgroundGeolocation() {
    }
    /**
     * Configure the plugin.
     *
     * @param {Function} callback callback will be called when background location is determined.
     * @param {Function} errorCallback callback to be executed every time a geolocation error occurs.
     * @param {Config} options An object of type Config
     * @return Location object, which tries to mimic w3c Coordinates interface.
     * See http://dev.w3.org/geo/api/spec-source.html#coordinates_interface
     * Callback to be executed every time a geolocation is recorded in the background.
     */
    BackgroundGeolocation.configure = function (callback, errorCallback, options) { return; };
    /**
     * Turn ON the background-geolocation system.
     * The user will be tracked whenever they suspend the app.
     * @returns {Promise<any>}
     */
    BackgroundGeolocation.start = function () { return; };
    /**
     * Turn OFF background-tracking
     * @returns {Promise<any>}
     */
    BackgroundGeolocation.stop = function () { return; };
    /**
     * Inform the native plugin that you're finished, the background-task may be completed
     * NOTE: IOS, WP only
     */
    BackgroundGeolocation.finish = function () { };
    /**
     * Force the plugin to enter "moving" or "stationary" state
     * NOTE: IOS, WP only
     */
    BackgroundGeolocation.changePace = function (isMoving) { };
    /**
     * Setup configuration
     * @returns {Promise<any>}
     */
    BackgroundGeolocation.setConfig = function (options) { return; };
    /**
     * Returns current stationaryLocation if available. null if not
     * NOTE: IOS, WP only
     * @returns {Promise<Location>}
     */
    BackgroundGeolocation.getStationaryLocation = function () { return; };
    /**
     * Add a stationary-region listener. Whenever the devices enters "stationary-mode",
     * your #success callback will be executed with #location param containing #radius of region
     * NOTE: IOS, WP only
     * @returns {Promise<any>}
     */
    BackgroundGeolocation.onStationary = function () { return; };
    /**
     * Check if location is enabled on the device
     * @returns {Promise<number>} Returns a promise with int argument that takes values 0, 1 (true).
     * NOTE: ANDROID only
     */
    BackgroundGeolocation.isLocationEnabled = function () { return; };
    /**
     * Display app settings to change permissions
     */
    BackgroundGeolocation.showAppSettings = function () { };
    /**
     * Display device location settings
     */
    BackgroundGeolocation.showLocationSettings = function () { };
    /**
     * Method can be used to detect user changes in location services settings.
     * If user enable or disable location services then success callback will be executed.
     * In case or error (SettingNotFoundException) fail callback will be executed.
     * NOTE: ANDROID only
     * @returns {Promise<boolean>}
     */
    BackgroundGeolocation.watchLocationMode = function () { return; };
    /**
     * Stop watching for location mode changes.
     * NOTE: ANDROID only
     */
    BackgroundGeolocation.stopWatchingLocationMode = function () { };
    /**
     * Method will return all stored locations.
     * Locations are stored when:
     *  - config.stopOnTerminate is false and main activity was killed
     *    by the system
     *  or
     *  - option.debug is true
     * NOTE: ANDROID only
     * @returns {Promise<any>}
     */
    BackgroundGeolocation.getLocations = function () { return; };
    /**
  
     * Method will return locations, which has not been yet posted to server. NOTE: Locations does contain locationId.
  
     * @returns {Promise<any>}
     */
    BackgroundGeolocation.getValidLocations = function () { return; };
    /**
     * Delete stored location by given locationId.
     * NOTE: ANDROID only
     * @returns {Promise<any>}
     */
    BackgroundGeolocation.deleteLocation = function (locationId) { return; };
    /**
     * Delete all stored locations.
     * NOTE: ANDROID only
     * @returns {Promise<any>}
     */
    BackgroundGeolocation.deleteAllLocations = function () { return; };
    /**
     * Normally plugin will handle switching between BACKGROUND and FOREGROUND mode itself.
     * Calling switchMode you can override plugin behavior and force plugin to switch into other mode.
     *
     * In FOREGROUND mode plugin uses iOS local manager to receive locations and behavior is affected by option.desiredAccuracy and option.distanceFilter.
     * In BACKGROUND mode plugin uses significant changes and region monitoring to receive locations and uses option.stationaryRadius only.
  
     *
     * BackgroundGeolocation.Mode.FOREGROUND
     * BackgroundGeolocation.Mode.BACKGROUND
  
     *
     * NOTE: iOS only
     *
     * @param {number} See above.
  
     * @returns {Promise<any>}
     */
    BackgroundGeolocation.switchMode = function (modeId) { return; };
    /**
  
     * Return all logged events. Useful for plugin debugging. Parameter limit limits number of returned entries.
  
     * @see https://github.com/mauron85/cordova-plugin-background-geolocation/tree/v2.2.1#debugging for more information.
  
     *
     * @param {number} Limits the number of entries
  
     * @returns {Promise<any>}
     */
    BackgroundGeolocation.getLogEntries = function (limit) { return; };
    /**
  
     * Set location service provider @see https://github.com/mauron85/cordova-plugin-background-geolocation/wiki/Android-providers
  
     *
     * Possible values:
     *  ANDROID_DISTANCE_FILTER_PROVIDER: 0,
  
     *  ANDROID_ACTIVITY_PROVIDER: 1
  
     *
     * @enum {number}
  
     */
    BackgroundGeolocation.LocationProvider = {
        ANDROID_DISTANCE_FILTER_PROVIDER: 0,
        ANDROID_ACTIVITY_PROVIDER: 1
    };
    /**
     * Desired accuracy in meters. Possible values [0, 10, 100, 1000].
  
     * The lower the number, the more power devoted to GeoLocation resulting in higher accuracy readings.
  
     * 1000 results in lowest power drain and least accurate readings.
  
     *
     * Possible values:
     *  HIGH: 0
  
     *  MEDIUM: 10
  
     *  LOW: 100
  
     *  PASSIVE: 1000
     *
     * enum {number}
  
     */
    BackgroundGeolocation.Accuracy = {
        HIGH: 0,
        MEDIUM: 10,
        LOW: 100,
        PASSIVE: 1000
    };
    /**
  
     * Used in the switchMode function
  
     *
     * Possible values:
     *  BACKGROUND: 0
     *  FOREGROUND: 1
  
     *
     * @enum {number}
  
     */
    BackgroundGeolocation.Mode = {
        BACKGROUND: 0,
        FOREGROUND: 1
    };
    __decorate([
        plugin_1.Cordova({
            sync: true
        })
    ], BackgroundGeolocation, "configure", null);
    __decorate([
        plugin_1.Cordova()
    ], BackgroundGeolocation, "start", null);
    __decorate([
        plugin_1.Cordova()
    ], BackgroundGeolocation, "stop", null);
    __decorate([
        plugin_1.Cordova()
    ], BackgroundGeolocation, "finish", null);
    __decorate([
        plugin_1.Cordova()
    ], BackgroundGeolocation, "changePace", null);
    __decorate([
        plugin_1.Cordova({
            callbackOrder: 'reverse'
        })
    ], BackgroundGeolocation, "setConfig", null);
    __decorate([
        plugin_1.Cordova()
    ], BackgroundGeolocation, "getStationaryLocation", null);
    __decorate([
        plugin_1.Cordova()
    ], BackgroundGeolocation, "onStationary", null);
    __decorate([
        plugin_1.Cordova()
    ], BackgroundGeolocation, "isLocationEnabled", null);
    __decorate([
        plugin_1.Cordova({ sync: true })
    ], BackgroundGeolocation, "showAppSettings", null);
    __decorate([
        plugin_1.Cordova({ sync: true })
    ], BackgroundGeolocation, "showLocationSettings", null);
    __decorate([
        plugin_1.Cordova()
    ], BackgroundGeolocation, "watchLocationMode", null);
    __decorate([
        plugin_1.Cordova()
    ], BackgroundGeolocation, "stopWatchingLocationMode", null);
    __decorate([
        plugin_1.Cordova()
    ], BackgroundGeolocation, "getLocations", null);
    __decorate([
        plugin_1.Cordova()
    ], BackgroundGeolocation, "getValidLocations", null);
    __decorate([
        plugin_1.Cordova()
    ], BackgroundGeolocation, "deleteLocation", null);
    __decorate([
        plugin_1.Cordova()
    ], BackgroundGeolocation, "deleteAllLocations", null);
    __decorate([
        plugin_1.Cordova()
    ], BackgroundGeolocation, "switchMode", null);
    __decorate([
        plugin_1.Cordova()
    ], BackgroundGeolocation, "getLogEntries", null);
    BackgroundGeolocation = __decorate([
        plugin_1.Plugin({
            pluginName: 'BackgroundGeolocation',
            plugin: 'cordova-plugin-mauron85-background-geolocation',
            pluginRef: 'backgroundGeolocation',
            repo: 'https://github.com/mauron85/cordova-plugin-background-geolocation',
            platforms: ['iOS', 'Android', 'Windows Phone 8']
        })
    ], BackgroundGeolocation);
    return BackgroundGeolocation;
}());
exports.BackgroundGeolocation = BackgroundGeolocation;

},{"./plugin":82}],11:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
* @name Background Mode
* @description
* Cordova plugin to prevent the app from going to sleep while in background.
* Requires Cordova plugin: cordova-plugin-background-mode. For more info about plugin, vist: https://github.com/katzer/cordova-plugin-background-mode
*@usage
* ```typescript
* import { BackgroundMode } from 'ionic-native';
*
* BackgroundMode.enable();
* ```
 *
 * @interfaces
 * BackgroundModeConfiguration
*/
var BackgroundMode = (function () {
    function BackgroundMode() {
    }
    /**
    * Enable the background mode.
    * Once called, prevents the app from being paused while in background.
    */
    BackgroundMode.enable = function () { };
    /**
    * Disable the background mode.
    * Once the background mode has been disabled, the app will be paused when in background.
    */
    BackgroundMode.disable = function () { return; };
    /**
    * Checks if background mode is enabled or not.
    * @returns {Promise<boolean>} returns a promise that resolves with boolean that indicates if the background mode is enabled.
    */
    BackgroundMode.isEnabled = function () { return; };
    /**
    * Can be used to get the information if the background mode is active.
    * @returns {Promise<boolean>} returns a promise that resolves with boolean that indicates if the background mode is active.
    */
    BackgroundMode.isActive = function () { return; };
    /**
    * Override the default title, ticker and text.
    * Available only for Android platform.
    * @param {Configure} options List of option to configure. See table below
    */
    BackgroundMode.setDefaults = function (options) { return; };
    /**
    * Modify the displayed information.
    * Available only for Android platform.
    * @param {Configure} options Any options you want to update. See table below.
    */
    BackgroundMode.configure = function (options) { return; };
    /**
    * Called when background mode is activated.
    * @returns {Observable<any>} returns an observable that emits when background mode is activated
    */
    BackgroundMode.onactivate = function () { return; };
    ;
    /**
    * Called when background mode is deactivated.
    * @returns {Observable<any>} returns an observable that emits when background mode is deactivated
    */
    BackgroundMode.ondeactivate = function () { return; };
    ;
    /**
    * Called when background mode fails
    * @returns {Observable<any>} returns an observable that emits when background mode fails
    */
    BackgroundMode.onfailure = function () { return; };
    ;
    __decorate([
        plugin_1.Cordova({
            sync: true
        })
    ], BackgroundMode, "enable", null);
    __decorate([
        plugin_1.Cordova()
    ], BackgroundMode, "disable", null);
    __decorate([
        plugin_1.Cordova()
    ], BackgroundMode, "isEnabled", null);
    __decorate([
        plugin_1.Cordova()
    ], BackgroundMode, "isActive", null);
    __decorate([
        plugin_1.Cordova({
            platforms: ['Android']
        })
    ], BackgroundMode, "setDefaults", null);
    __decorate([
        plugin_1.Cordova({
            platforms: ['Android']
        })
    ], BackgroundMode, "configure", null);
    __decorate([
        plugin_1.CordovaFunctionOverride()
    ], BackgroundMode, "onactivate", null);
    __decorate([
        plugin_1.CordovaFunctionOverride()
    ], BackgroundMode, "ondeactivate", null);
    __decorate([
        plugin_1.CordovaFunctionOverride()
    ], BackgroundMode, "onfailure", null);
    BackgroundMode = __decorate([
        plugin_1.Plugin({
            pluginName: 'BackgroundMode',
            plugin: 'cordova-plugin-background-mode',
            pluginRef: 'cordova.plugins.backgroundMode',
            repo: 'https://github.com/katzer/cordova-plugin-background-mode',
            platforms: ['Android', 'iOS', 'Windows Phone 8']
        })
    ], BackgroundMode);
    return BackgroundMode;
}());
exports.BackgroundMode = BackgroundMode;

},{"./plugin":82}],12:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name Badge
 * @description
 * The essential purpose of badge numbers is to enable an application to inform its users that it has something for them — for example, unread messages — when the application isn’t running in the foreground.
 *
 * Requires Cordova plugin: cordova-plugin-badge. For more info, please see the [Badge plugin docs](https://github.com/katzer/cordova-plugin-badge).
 *
 * @usage
 * ```typescript
 * import { Badge } from 'ionic-native';
 *
 *
 * Badge.set(10);
 * Badge.increase();
 * Badge.clear();
 * ```
 */
var Badge = (function () {
    function Badge() {
    }
    /**
     * Clear the badge of the app icon.
     * @returns {Promise<boolean>}
     */
    Badge.clear = function () { return; };
    /**
     * Set the badge of the app icon.
     * @param {number} badgeNumber  The new badge number.
     * @returns {Promise<any>}
     */
    Badge.set = function (badgeNumber) { return; };
    /**
     * Get the badge of the app icon.
     * @returns {Promise<any>}
     */
    Badge.get = function () { return; };
    /**
     * Increase the badge number.
     * @param {number} increaseBy  Count to add to the current badge number
     * @returns {Promise<any>}
     */
    Badge.increase = function (increaseBy) { return; };
    /**
     * Decrease the badge number.
     * @param {number} decreaseBy  Count to subtract from the current badge number
     * @returns {Promise<any>}
     */
    Badge.decrease = function (decreaseBy) { return; };
    /**
     * Determine if the app has permission to show badges.
     * @returns {Promise<any>}
     */
    Badge.hasPermission = function () { return; };
    /**
     * Register permission to set badge notifications
     * @returns {Promise<any>}
     */
    Badge.registerPermission = function () { return; };
    __decorate([
        plugin_1.Cordova()
    ], Badge, "clear", null);
    __decorate([
        plugin_1.Cordova()
    ], Badge, "set", null);
    __decorate([
        plugin_1.Cordova()
    ], Badge, "get", null);
    __decorate([
        plugin_1.Cordova()
    ], Badge, "increase", null);
    __decorate([
        plugin_1.Cordova()
    ], Badge, "decrease", null);
    __decorate([
        plugin_1.Cordova()
    ], Badge, "hasPermission", null);
    __decorate([
        plugin_1.Cordova()
    ], Badge, "registerPermission", null);
    Badge = __decorate([
        plugin_1.Plugin({
            pluginName: 'Badge',
            plugin: 'cordova-plugin-badge',
            pluginRef: 'cordova.plugins.notification.badge',
            repo: 'https://github.com/katzer/cordova-plugin-badge',
            platforms: ['Android', 'iOS', 'Browser', 'Windows', 'Amazon FireOS', 'Windows Phone 8']
        })
    ], Badge);
    return Badge;
}());
exports.Badge = Badge;

},{"./plugin":82}],13:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name Barcode Scanner
 * @description
 * The Barcode Scanner Plugin opens a camera view and automatically scans a barcode, returning the data back to you.
 *
 * Requires Cordova plugin: `phonegap-plugin-barcodescanner`. For more info, please see the [BarcodeScanner plugin docs](https://github.com/phonegap/phonegap-plugin-barcodescanner).
 *
 * @usage
 * ```typescript
 * import { BarcodeScanner } from 'ionic-native';
 *
 *
 * BarcodeScanner.scan().then((barcodeData) => {
 *  // Success! Barcode data is here
 * }, (err) => {
 * 	// An error occurred
 * });
 * ```
 * @interfaces
 * BarcodeScannerOptions
 */
var BarcodeScanner = (function () {
    function BarcodeScanner() {
    }
    /**
     * Open the barcode scanner.
     * @param options {BarcodeScannerOptions} Optional options to pass to the scanner
     * @returns {Promise<any>} Returns a Promise that resolves with scanner data, or rejects with an error.
     */
    BarcodeScanner.scan = function (options) { return; };
    /**
     * Encodes data into a barcode.
     * NOTE: not well supported on Android
     * @param type {string} Type of encoding
     * @param data {any} Data to encode
     * @returns {Promise<any>}
     */
    BarcodeScanner.encode = function (type, data) { return; };
    /**
     * @private
     */
    BarcodeScanner.Encode = {
        TEXT_TYPE: 'TEXT_TYPE',
        EMAIL_TYPE: 'EMAIL_TYPE',
        PHONE_TYPE: 'PHONE_TYPE',
        SMS_TYPE: 'SMS_TYPE'
    };
    __decorate([
        plugin_1.Cordova({
            callbackOrder: 'reverse'
        })
    ], BarcodeScanner, "scan", null);
    __decorate([
        plugin_1.Cordova()
    ], BarcodeScanner, "encode", null);
    BarcodeScanner = __decorate([
        plugin_1.Plugin({
            pluginName: 'BarcodeScanner',
            plugin: 'phonegap-plugin-barcodescanner',
            pluginRef: 'cordova.plugins.barcodeScanner',
            repo: 'https://github.com/phonegap/phonegap-plugin-barcodescanner',
            platforms: ['Android', 'iOS', 'Windows Phone 8', 'Windows 10', 'Windows 8', 'BlackBerry 10', 'Browser']
        })
    ], BarcodeScanner);
    return BarcodeScanner;
}());
exports.BarcodeScanner = BarcodeScanner;

},{"./plugin":82}],14:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name Base64 To Gallery
 * @description This plugin allows you to save base64 data as a png image into the device
 * @usage
 * ```typescript
 * import { Base64ToGallery } from 'ionic-native';
 *
 *
 * Base64ToGallery.base64ToGallery(base64Data, 'img_').then(
 *   res => console.log('Saved image to gallery ', res),
 *   err => console.log('Error saving image to gallery ', err)
 * );
 * ```
 */
var Base64ToGallery = (function () {
    function Base64ToGallery() {
    }
    /**
     * Converts a base64 string to an image file in the device gallery
     * @param {string} data The actual base64 string that you want to save
     * @param {any} options (optional) An object with properties: prefix: string, mediaScanner: boolean. Prefix will be prepended to the filename. If true, mediaScanner runs Media Scanner on Android and saves to Camera Roll on iOS; if false, saves to Library folder on iOS.
     * @returns {Promise<any>} returns a promise that resolves when the image is saved.
     */
    Base64ToGallery.base64ToGallery = function (data, options) {
        return;
    };
    __decorate([
        plugin_1.Cordova({
            successIndex: 2,
            errorIndex: 3
        })
    ], Base64ToGallery, "base64ToGallery", null);
    Base64ToGallery = __decorate([
        plugin_1.Plugin({
            pluginName: 'Base64ToGallery',
            plugin: 'cordova-base64-to-gallery',
            pluginRef: 'cordova',
            repo: 'https://github.com/Nexxa/cordova-base64-to-gallery',
            platforms: ['Android', 'iOS', 'Windows Phone 8']
        })
    ], Base64ToGallery);
    return Base64ToGallery;
}());
exports.Base64ToGallery = Base64ToGallery;

},{"./plugin":82}],15:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name Battery Status
 * @description
 * Requires Cordova plugin: cordova-plugin-batterystatus. For more info, please see the [BatteryStatus plugin docs](https://github.com/apache/cordova-plugin-battery-status).
 *
 * @usage
 * ```typescript
 * import { BatteryStatus } from 'ionic-native';
 *
 *
 * // watch change in battery status
 * let subscription = BatteryStatus.onChange().subscribe(
 *  (status: StatusObject) => {
 *    console.log(status.level, status.isPlugged);
 *  }
 * );
 *
 * // stop watch
 * subscription.unsubscribe();
 *
 * ```
 * @interfaces
 * BatteryStatusResponse
 */
var BatteryStatus = (function () {
    function BatteryStatus() {
    }
    /**
     * Watch the change in battery level
     * @returns {Observable<BatteryStatusResponse>} Returns an observable that pushes a status object
     */
    BatteryStatus.onChange = function () { return; };
    /**
     * Watch when the battery level goes low
     * @returns {Observable<BatteryStatusResponse>} Returns an observable that pushes a status object
     */
    BatteryStatus.onLow = function () { return; };
    /**
     * Watch when the battery level goes to critial
     * @returns {Observable<BatteryStatusResponse>} Returns an observable that pushes a status object
     */
    BatteryStatus.onCritical = function () { return; };
    __decorate([
        plugin_1.Cordova({
            eventObservable: true,
            event: 'batterystatus'
        })
    ], BatteryStatus, "onChange", null);
    __decorate([
        plugin_1.Cordova({
            eventObservable: true,
            event: 'batterylow'
        })
    ], BatteryStatus, "onLow", null);
    __decorate([
        plugin_1.Cordova({
            eventObservable: true,
            event: 'batterycritical'
        })
    ], BatteryStatus, "onCritical", null);
    BatteryStatus = __decorate([
        plugin_1.Plugin({
            pluginName: 'BatteryStatus',
            plugin: 'cordova-plugin-battery-status',
            repo: 'https://github.com/apache/cordova-plugin-battery-status',
            platforms: ['Amazon Fire OS', 'iOS', 'Android', 'BlackBerry 10', 'Windows Phone 7', 'Windows Phone 8', 'Windows', 'Firefox OS', 'Browser']
        })
    ], BatteryStatus);
    return BatteryStatus;
}());
exports.BatteryStatus = BatteryStatus;

},{"./plugin":82}],16:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name BLE
 * @description
 * This plugin enables communication between a phone and Bluetooth Low Energy (BLE) peripherals.
 *
 * The plugin provides a simple JavaScript API for iOS and Android.
 *
 * - Scan for peripherals
 * - Connect to a peripheral
 * - Read the value of a characteristic
 * - Write new value to a characteristic
 * - Get notified when characteristic's value changes
 *
 * Advertising information is returned when scanning for peripherals. Service, characteristic, and property info is returned when connecting to a peripheral. All access is via service and characteristic UUIDs. The plugin manages handles internally.
 *
 * Simultaneous connections to multiple peripherals are supported.
 *
 * @usage
 *
 * ## Peripheral Data
 *
 * Peripheral Data is passed to the success callback when scanning and connecting. Limited data is passed when scanning.
 *
 * ```typescript
 *   {
 *       "name": "Battery Demo",
 *       "id": "20:FF:D0:FF:D1:C0",
 *       "advertising": [2,1,6,3,3,15,24,8,9,66,97,116,116,101,114,121],
 *       "rssi": -55
 *   }
 * ```
 * After connecting, the peripheral object also includes service, characteristic and descriptor information.
 *
 * ```typescript
 *   {
 *       "name": "Battery Demo",
 *       "id": "20:FF:D0:FF:D1:C0",
 *       "advertising": [2,1,6,3,3,15,24,8,9,66,97,116,116,101,114,121],
 *       "rssi": -55,
 *       "services": [
 *           "1800",
 *           "1801",
 *           "180f"
 *       ],
 *       "characteristics": [
 *           {
 *               "service": "1800",
 *               "characteristic": "2a00",
 *               "properties": [
 *                   "Read"
 *               ]
 *           },
 *           {
 *               "service": "1800",
 *               "characteristic": "2a01",
 *               "properties": [
 *                   "Read"
 *               ]
 *           },
 *           {
 *               "service": "1801",
 *               "characteristic": "2a05",
 *               "properties": [
 *                   "Read"
 *               ]
 *           },
 *           {
 *               "service": "180f",
 *               "characteristic": "2a19",
 *               "properties": [
 *                   "Read"
 *               ],
 *               "descriptors": [
 *                   {
 *                       "uuid": "2901"
 *                   },
 *                   {
 *                       "uuid": "2904"
 *                   }
 *               ]
 *           }
 *       ]
 *   }
 * ```
 *
 * ## Advertising Data
 * Bluetooth advertising data is returned in when scanning for devices. The format format varies depending on your platform. On Android advertising data will be the raw advertising bytes. iOS does not allow access to raw advertising data, so a dictionary of data is returned.
 *
 * The advertising information for both Android and iOS appears to be a combination of advertising data and scan response data.
 *
 * ### Android
 *
 * ```typescript
 *   {
 *       "name": "demo",
 *       "id": "00:1A:7D:DA:71:13",
 *       "advertising": ArrayBuffer,
 *      "rssi": -37
 *  }
 * ```
 *
 * Convert the advertising info to a Uint8Array for processing. `var adData = new Uint8Array(peripheral.advertising)`
 *
 * ### iOS
 *
 * Note that iOS uses the string value of the constants for the [Advertisement Data Retrieval Keys](https://developer.apple.com/library/ios/documentation/CoreBluetooth/Reference/CBCentralManagerDelegate_Protocol/index.html#//apple_ref/doc/constant_group/Advertisement_Data_Retrieval_Keys). This will likely change in the future.
 *
 * ```typescript
 *   {
 *       "name": "demo",
 *       "id": "D8479A4F-7517-BCD3-91B5-3302B2F81802",
 *       "advertising": {
 *           "kCBAdvDataChannel": 37,
 *           "kCBAdvDataServiceData": {
 *               "FED8": {
 *                   "byteLength": 7 // data not shown
 *               }
 *           },
 *           "kCBAdvDataLocalName": "demo",
 *           "kCBAdvDataServiceUUIDs": ["FED8"],
 *           "kCBAdvDataManufacturerData": {
 *               "byteLength": 7  // data not shown
 *           },
 *           "kCBAdvDataTxPowerLevel": 32,
 *           "kCBAdvDataIsConnectable": true
 *       },
 *       "rssi": -53
 *   }
 * ```
 *
 * ## Typed Arrays
 *
 * This plugin uses typed Arrays or ArrayBuffers for sending and receiving data.
 *
 * This means that you need convert your data to ArrayBuffers before sending and from ArrayBuffers when receiving.
 *
 * ```typescript
 *   // ASCII only
 *   function stringToBytes(string) {
 *      var array = new Uint8Array(string.length);
 *      for (var i = 0, l = string.length; i < l; i++) {
 *          array[i] = string.charCodeAt(i);
 *       }
 *       return array.buffer;
 *   }
 *
 *   // ASCII only
 *   function bytesToString(buffer) {
 *       return String.fromCharCode.apply(null, new Uint8Array(buffer));
 *   }
 * ```
 * You can read more about typed arrays in these articles on [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays) and [HTML5 Rocks](http://www.html5rocks.com/en/tutorials/webgl/typed_arrays/).
 *
 * ## UUIDs
 *
 * UUIDs are always strings and not numbers. Some 16-bit UUIDs, such as '2220' look like integers, but they're not. (The integer 2220 is 0x8AC in hex.) This isn't a problem with 128 bit UUIDs since they look like strings 82b9e6e1-593a-456f-be9b-9215160ebcac. All 16-bit UUIDs should also be passed to methods as strings.
 *
 */
var BLE = (function () {
    function BLE() {
    }
    /**
     * Scan and discover BLE peripherals for the specified amount of time.
     *
     * @usage
     * ```
     * BLE.scan([], 5).subscribe(device => {
     *   console.log(JSON.stringify(device));
     * });
     * ```
     * @param {string[]} services  List of service UUIDs to discover, or `[]` to find all devices
     * @param {number} seconds  Number of seconds to run discovery
     * @returns {Observable<any>} Returns an Observable that notifies of each peripheral that is discovered during the specified time.
     */
    BLE.scan = function (services, seconds) { return; };
    /**
     * Scan and discover BLE peripherals until `stopScan` is called.
     *
     * @usage
     * ```
     * BLE.startScan([]).subscribe(device => {
     *   console.log(JSON.stringify(device));
     * });
     *
     * setTimeout(() => {
     *   BLE.stopScan();
     * }, 5000);
     * ```
     * @param {string[]} services  List of service UUIDs to discover, or `[]` to find all devices
     * @returns {Observable<any>} Returns an Observable that notifies of each peripheral discovered.
     */
    BLE.startScan = function (services) { return; };
    /**
     * Scans for BLE devices. This function operates similarly to the `startScan` function, but allows you to specify extra options (like allowing duplicate device reports).
     * @param {string[]} services  List of service UUIDs to discover, or `[]` to find all devices
     * @param options {any}
     * @returns {Observable<any>} Returns an Observable that notifies of each peripheral discovered.
     */
    BLE.startScanWithOptions = function (services, options) { return; };
    /**
     * Stop a scan started by `startScan`.
     *
     * @usage
     * ```
     * BLE.startScan([]).subscribe(device => {
     *   console.log(JSON.stringify(device));
     * });
     * setTimeout(() => {
     *   BLE.stopScan().then(() => { console.log('scan stopped'); });
     * }, 5000);
     * ```
     * @return returns a Promise.
     */
    BLE.stopScan = function () { return; };
    /**
     * Connect to a peripheral.
     * @usage
     * ```
     *   BLE.connect('12:34:56:78:9A:BC').subscribe(peripheralData => {
     *     console.log(peripheralData);
     *   },
     *   peripheralData => {
     *     console.log('disconnected');
     *   });
     * ```
     * @param deviceId {string}  UUID or MAC address of the peripheral
     * @return Returns an Observable that notifies of connect/disconnect.
     */
    BLE.connect = function (deviceId) { return; };
    /**
     * Disconnect from a peripheral.
     * @usage
     * ```
     *   BLE.disconnect('12:34:56:78:9A:BC').then(() => {
     *     console.log('Disconnected');
     *   });
     * ```
     * @param deviceId {string}  UUID or MAC address of the peripheral
     * @return Returns a Promise
     */
    BLE.disconnect = function (deviceId) { return; };
    /**
     * Read the value of a characteristic.
     *
     * @param {string} deviceId  UUID or MAC address of the peripheral
     * @param {string} serviceUUID  UUID of the BLE service
     * @param {string} characteristicUUID  UUID of the BLE characteristic
     * @return Returns a Promise
     */
    BLE.read = function (deviceId, serviceUUID, characteristicUUID) { return; };
    ;
    /**
     * Write the value of a characteristic.
     * @usage
     * ```
     * // send 1 byte to switch a light on
     * var data = new Uint8Array(1);
     * data[0] = 1;
     * BLE.write(device_id, "FF10", "FF11", data.buffer);
     *
     * // send a 3 byte value with RGB color
     * var data = new Uint8Array(3);
     * data[0] = 0xFF;  // red
     * data[0] = 0x00; // green
     * data[0] = 0xFF; // blue
     * BLE.write(device_id, "ccc0", "ccc1", data.buffer);
     *
     * // send a 32 bit integer
     * var data = new Uint32Array(1);
     * data[0] = counterInput.value;
     * BLE.write(device_id, SERVICE, CHARACTERISTIC, data.buffer);
     *
     * ```
     * @param {string} deviceId  UUID or MAC address of the peripheral
     * @param {string} serviceUUID  UUID of the BLE service
     * @param {string} characteristicUUID  UUID of the BLE characteristic
     * @param {ArrayBuffer} value  Data to write to the characteristic, as an ArrayBuffer.
     * @return Returns a Promise
     */
    BLE.write = function (deviceId, serviceUUID, characteristicUUID, value) { return; };
    /**
     * Write the value of a characteristic without waiting for confirmation from the peripheral.
     *
     * @param {string} deviceId  UUID or MAC address of the peripheral
     * @param {string} serviceUUID  UUID of the BLE service
     * @param {string} characteristicUUID  UUID of the BLE characteristic
     * @param {ArrayBuffer} value  Data to write to the characteristic, as an ArrayBuffer.
     * @return Returns a Promise
     */
    BLE.writeWithoutResponse = function (deviceId, serviceUUID, characteristicUUID, value) { return; };
    /**
     * Register to be notified when the value of a characteristic changes.
     *
     * @usage
     * ```
     * BLE.startNotification(device_id, "FF10", "FF11").subscribe(buffer => {
     *   console.log(String.fromCharCode.apply(null, new Uint8Array(buffer));
     * });
     * ```
     *
     * @param {string} deviceId  UUID or MAC address of the peripheral
     * @param {string} serviceUUID  UUID of the BLE service
     * @param {string} characteristicUUID  UUID of the BLE characteristic
     * @return Returns an Observable that notifies of characteristic changes.
     */
    BLE.startNotification = function (deviceId, serviceUUID, characteristicUUID) { return; };
    /**
     * Stop being notified when the value of a characteristic changes.
     *
     * @param {string} deviceId  UUID or MAC address of the peripheral
     * @param {string} serviceUUID  UUID of the BLE service
     * @param {string} characteristicUUID  UUID of the BLE characteristic
     * @returns {Promise<any>}
     */
    BLE.stopNotification = function (deviceId, serviceUUID, characteristicUUID) { return; };
    /**
     * Report the connection status.
     *
     * @usage
     * ```
     * BLE.isConnected('FFCA0B09-CB1D-4DC0-A1EF-31AFD3EDFB53').then(
     *   () => { console.log('connected'); },
     *   () => { console.log('not connected'); }
     * );
     * ```
     * @param {string} deviceId  UUID or MAC address of the peripheral
     * @returns {Promise<any>}
     */
    BLE.isConnected = function (deviceId) { return; };
    /**
     * Report if bluetooth is enabled.
     *
     * @returns {Promise<void>} Returns a Promise that resolves if Bluetooth is enabled, and rejects if disabled.
     */
    BLE.isEnabled = function () { return; };
    /**
     * Open System Bluetooth settings (Android only).
     *
     * @returns {Promise<any>}
     */
    BLE.showBluetoothSettings = function () { return; };
    /**
     * Enable Bluetooth on the device (Android only).
     *
     * @returns {Promise<any>}
     */
    BLE.enable = function () { return; };
    __decorate([
        plugin_1.Cordova({
            observable: true
        })
    ], BLE, "scan", null);
    __decorate([
        plugin_1.Cordova({
            observable: true,
            clearFunction: 'stopScan',
            clearWithArgs: true
        })
    ], BLE, "startScan", null);
    __decorate([
        plugin_1.Cordova({
            observable: true,
            clearFunction: 'stopScan',
            clearWithArgs: true
        })
    ], BLE, "startScanWithOptions", null);
    __decorate([
        plugin_1.Cordova()
    ], BLE, "stopScan", null);
    __decorate([
        plugin_1.Cordova({
            observable: true,
            clearFunction: 'disconnect',
            clearWithArgs: true
        })
    ], BLE, "connect", null);
    __decorate([
        plugin_1.Cordova()
    ], BLE, "disconnect", null);
    __decorate([
        plugin_1.Cordova()
    ], BLE, "read", null);
    __decorate([
        plugin_1.Cordova()
    ], BLE, "write", null);
    __decorate([
        plugin_1.Cordova()
    ], BLE, "writeWithoutResponse", null);
    __decorate([
        plugin_1.Cordova({
            observable: true,
            clearFunction: 'stopNotification',
            clearWithArgs: true
        })
    ], BLE, "startNotification", null);
    __decorate([
        plugin_1.Cordova()
    ], BLE, "stopNotification", null);
    __decorate([
        plugin_1.Cordova()
    ], BLE, "isConnected", null);
    __decorate([
        plugin_1.Cordova()
    ], BLE, "isEnabled", null);
    __decorate([
        plugin_1.Cordova()
    ], BLE, "showBluetoothSettings", null);
    __decorate([
        plugin_1.Cordova()
    ], BLE, "enable", null);
    BLE = __decorate([
        plugin_1.Plugin({
            pluginName: 'BLE',
            plugin: 'cordova-plugin-ble-central',
            pluginRef: 'ble',
            repo: 'https://github.com/don/cordova-plugin-ble-central',
            platforms: ['iOS', 'Android']
        })
    ], BLE);
    return BLE;
}());
exports.BLE = BLE;

},{"./plugin":82}],17:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name Bluetooth Serial
 * @description This plugin enables serial communication over Bluetooth. It was written for communicating between Android or iOS and an Arduino.
 * @usage
 * ```typescript
 * import { BluetoothSerial } from 'ionic-native';
 *
 *
 * // Write a string
 * BluetoothSerial.write("hello world").then(success, failure);
 *
 * // Array of int or bytes
 * BluetoothSerial.write([186, 220, 222]).then(success, failure);
 *
 * // Typed Array
 * var data = new Uint8Array(4);
 * data[0] = 0x41;
 * data[1] = 0x42;
 * data[2] = 0x43;
 * data[3] = 0x44;
 * BluetoothSerial.write(data).then(success, failure);
 *
 * // Array Buffer
 * BluetoothSerial.write(data.buffer).then(success, failure);
 * ```
 */
var BluetoothSerial = (function () {
    function BluetoothSerial() {
    }
    /**
     * Connect to a Bluetooth device
     * @param {string} macAddress_or_uuid Identifier of the remote device
     * @returns {Observable<any>} Subscribe to connect, unsubscribe to disconnect.
     */
    BluetoothSerial.connect = function (macAddress_or_uuid) { return; };
    /**
     * Connect insecurely to a Bluetooth device
     * @param {string} macAddress Identifier of the remote device
     * @returns {Observable<any>} Subscribe to connect, unsubscribe to disconnect.
     */
    BluetoothSerial.connectInsecure = function (macAddress) { return; };
    /**
     * Writes data to the serial port
     * @param {any} data ArrayBuffer of data
     * @returns {Promise<any>} returns a promise when data has been written
     */
    BluetoothSerial.write = function (data) { return; };
    /**
     * Gets the number of bytes of data available
     * @returns {Promise<any>} returns a promise that contains the available bytes
     */
    BluetoothSerial.available = function () { return; };
    /**
     * Reads data from the buffer
     * @returns {Promise<any>} returns a promise with data from the buffer
     */
    BluetoothSerial.read = function () { return; };
    /**
     * Reads data from the buffer until it reaches a delimiter
     * @param {string} delimiter string that you want to search until
     * @returns {Promise<any>} returns a promise
     */
    BluetoothSerial.readUntil = function (delimiter) { return; };
    /**
     * Subscribe to be notified when data is received
     * @param {string} delimiter the string you want to watch for
     * @returns {Observable<any>} returns an observable.
     */
    BluetoothSerial.subscribe = function (delimiter) { return; };
    /**
     * Subscribe to be notified when data is received
     * @returns {Observable<any>} returns an observable
     */
    BluetoothSerial.subscribeRawData = function () { return; };
    /**
     * Clears data in buffer
     * @returns {Promise<any>} returns a promise when completed
     */
    BluetoothSerial.clear = function () { return; };
    /**
     * Lists bonded devices
     * @returns {Promise<any>} returns a promise
     */
    BluetoothSerial.list = function () { return; };
    /**
     * Reports if bluetooth is enabled
     * @returns {Promise<any>} returns a promise
     */
    BluetoothSerial.isEnabled = function () { return; };
    /**
     * Reports the connection status
     * @returns {Promise<any>} returns a promise
     */
    BluetoothSerial.isConnected = function () { return; };
    /**
     * Reads the RSSI from the connected peripheral
     * @returns {Promise<any>} returns a promise
     */
    BluetoothSerial.readRSSI = function () { return; };
    /**
     * Show the Bluetooth settings on the device
     * @returns {Promise<any>} returns a promise
     */
    BluetoothSerial.showBluetoothSettings = function () { return; };
    /**
     * Enable Bluetooth on the device
     * @returns {Promise<any>} returns a promise
     */
    BluetoothSerial.enable = function () { return; };
    /**
     * Discover unpaired devices
     * @returns {Promise<any>} returns a promise
     */
    BluetoothSerial.discoverUnpaired = function () { return; };
    /**
     * Subscribe to be notified on Bluetooth device discovery. Discovery process must be initiated with the `discoverUnpaired` function.
     * @returns {Observable<any>} Returns an observable
     */
    BluetoothSerial.setDeviceDiscoveredListener = function () { return; };
    /**
     * Sets the human readable device name that is broadcasted to other devices
     * @param {string} newName Desired name of device
     */
    BluetoothSerial.setName = function (newName) { };
    /**
     * Makes the device discoverable by other devices
     * @param {number} discoverableDuration Desired number of seconds device should be discoverable for
     */
    BluetoothSerial.setDiscoverable = function (discoverableDuration) { };
    __decorate([
        plugin_1.Cordova({
            platforms: ['Android', 'iOS', 'Windows Phone'],
            observable: true,
            clearFunction: 'disconnect'
        })
    ], BluetoothSerial, "connect", null);
    __decorate([
        plugin_1.Cordova({
            platforms: ['Android'],
            observable: true,
            clearFunction: 'disconnect'
        })
    ], BluetoothSerial, "connectInsecure", null);
    __decorate([
        plugin_1.Cordova({
            platforms: ['Android', 'iOS', 'Windows Phone']
        })
    ], BluetoothSerial, "write", null);
    __decorate([
        plugin_1.Cordova({
            platforms: ['Android', 'iOS', 'Windows Phone']
        })
    ], BluetoothSerial, "available", null);
    __decorate([
        plugin_1.Cordova({
            platforms: ['Android', 'iOS', 'Windows Phone']
        })
    ], BluetoothSerial, "read", null);
    __decorate([
        plugin_1.Cordova({
            platforms: ['Android', 'iOS', 'Windows Phone']
        })
    ], BluetoothSerial, "readUntil", null);
    __decorate([
        plugin_1.Cordova({
            platforms: ['Android', 'iOS', 'Windows Phone'],
            observable: true,
            clearFunction: 'unsubscribe'
        })
    ], BluetoothSerial, "subscribe", null);
    __decorate([
        plugin_1.Cordova({
            platforms: ['Android', 'iOS', 'Windows Phone'],
            observable: true,
            clearFunction: 'unsubscribeRawData'
        })
    ], BluetoothSerial, "subscribeRawData", null);
    __decorate([
        plugin_1.Cordova({
            platforms: ['Android', 'iOS', 'Windows Phone']
        })
    ], BluetoothSerial, "clear", null);
    __decorate([
        plugin_1.Cordova({
            platforms: ['Android', 'iOS', 'Windows Phone']
        })
    ], BluetoothSerial, "list", null);
    __decorate([
        plugin_1.Cordova({
            platforms: ['Android', 'iOS', 'Windows Phone']
        })
    ], BluetoothSerial, "isEnabled", null);
    __decorate([
        plugin_1.Cordova({
            platforms: ['Android', 'iOS', 'Windows Phone']
        })
    ], BluetoothSerial, "isConnected", null);
    __decorate([
        plugin_1.Cordova({
            platforms: ['Android', 'iOS', 'Windows Phone']
        })
    ], BluetoothSerial, "readRSSI", null);
    __decorate([
        plugin_1.Cordova({
            platforms: ['Android', 'iOS', 'Windows Phone']
        })
    ], BluetoothSerial, "showBluetoothSettings", null);
    __decorate([
        plugin_1.Cordova({
            platforms: ['Android', 'iOS', 'Windows Phone']
        })
    ], BluetoothSerial, "enable", null);
    __decorate([
        plugin_1.Cordova({
            platforms: ['Android', 'iOS', 'Windows Phone']
        })
    ], BluetoothSerial, "discoverUnpaired", null);
    __decorate([
        plugin_1.Cordova({
            platforms: ['Android', 'iOS', 'Windows Phone'],
            observable: true,
            clearFunction: 'clearDeviceDiscoveredListener'
        })
    ], BluetoothSerial, "setDeviceDiscoveredListener", null);
    __decorate([
        plugin_1.Cordova({
            platforms: ['Android'],
            sync: true
        })
    ], BluetoothSerial, "setName", null);
    __decorate([
        plugin_1.Cordova({
            platforms: ['Android'],
            sync: true
        })
    ], BluetoothSerial, "setDiscoverable", null);
    BluetoothSerial = __decorate([
        plugin_1.Plugin({
            pluginName: 'BluetoothSerial',
            repo: 'https://github.com/don/BluetoothSerial',
            plugin: 'cordova-plugin-bluetooth-serial',
            pluginRef: 'bluetoothSerial',
            platforms: ['Android', 'iOS', 'Windows Phone', 'Browser']
        })
    ], BluetoothSerial);
    return BluetoothSerial;
}());
exports.BluetoothSerial = BluetoothSerial;

},{"./plugin":82}],18:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name Brightness
 * @description
 * The Brightness plugin let you control the display brightness of your device.
 *
 * Requires Cordova plugin: `cordova-plugin-brightness`. For more info, please see the [Brightness plugin docs](https://github.com/mgcrea/cordova-plugin-brightness).
 *
 * @usage
 * ```typescript
 * import { Brightness } from 'ionic-native';
 *
 *
 * let brightnessValue: number = 0.8;
 * Brightness.setBrightness(brightnessValue);
 * ```
 *
 */
var Brightness = (function () {
    function Brightness() {
    }
    /**
     * Sets the brightness of the display.
     *
     * @param {value} Floating number between 0 and 1 in which case 1 means 100% brightness and 0 means 0% brightness.
     * @returns {Promise<any>} Returns a Promise that resolves if setting brightness was successful.
     */
    Brightness.setBrightness = function (value) { return; };
    /**
     * Reads the current brightness of the device display.
     *
     * @returns {Promise<any>} Returns a Promise that resolves with the
     * brightness value of the device display (floating number between 0 and 1).
     */
    Brightness.getBrightness = function () { return; };
    /**
    * Keeps the screen on. Prevents the device from setting the screen to sleep.
    */
    Brightness.setKeepScreenOn = function (value) { };
    __decorate([
        plugin_1.Cordova()
    ], Brightness, "setBrightness", null);
    __decorate([
        plugin_1.Cordova()
    ], Brightness, "getBrightness", null);
    __decorate([
        plugin_1.Cordova()
    ], Brightness, "setKeepScreenOn", null);
    Brightness = __decorate([
        plugin_1.Plugin({
            pluginName: 'Brightness',
            plugin: 'cordova-plugin-brightness',
            pluginRef: 'cordova.plugins.brightness',
            repo: 'https://github.com/mgcrea/cordova-plugin-brightness',
            platforms: ['Android', 'iOS']
        })
    ], Brightness);
    return Brightness;
}());
exports.Brightness = Brightness;

},{"./plugin":82}],19:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name Calendar
 * @description
 * This plugin allows you to add events to the Calendar of the mobile device.
 *
 * Requires Cordova plugin: `cordova-plugin-calendar`. For more info, please see the [Calendar plugin docs](https://github.com/EddyVerbruggen/Calendar-PhoneGap-Plugin).
 *
 *
 * @usage
 * ```
 * import {Calendar} from 'ionic-native';
 *
 *
 *
 * Calendar.createCalendar('MyCalendar').then(
 *   (msg) => { console.log(msg); },
 *   (err) => { console.log(err); }
 * );
 * ```
 * @interfaces
 * CalendarOptions
 */
var Calendar = (function () {
    function Calendar() {
    }
    /**
     * This function checks if we have permission to read/write from/to the calendar.
     * The promise will resolve with `true` when:
     * - You're running on iOS, or
     * - You're targetting API level lower than 23, or
     * - You're using Android < 6, or
     * - You've already granted permission
     *
     * If this returns false, you should call the `requestReadWritePermission` function
     * @returns {Promise<boolean>}
     */
    Calendar.hasReadWritePermission = function () { return; };
    /**
     * Check if we have read permission
     * @returns {Promise<boolean>}
     */
    Calendar.hasReadPermission = function () { return; };
    /**
     * Check if we have write permission
     * @returns {Promise<boolean>}
     */
    Calendar.hasWritePermission = function () { return; };
    /**
     * Request write permission
     * @returns {Promise<any>}
     */
    Calendar.requestWritePermission = function () { return; };
    /**
     * Request read permission
     * @returns {Promise<any>}
     */
    Calendar.requestReadPermission = function () { return; };
    /**
     * Requests read/write permissions
     * @returns {Promise<any>}
     */
    Calendar.requestReadWritePermission = function () { return; };
    /**
     * Create a calendar. (iOS only)
     *
     * @param {string | Object} nameOrOptions  either a string name or a options object. If string, provide the calendar name. IF an object, provide a calendar name as a string and a calendar color in hex format as a string
     * @returns {Promise<any>} Returns a Promise
     */
    Calendar.createCalendar = function (nameOrOptions) { return; };
    /**
     * Delete a calendar. (iOS only)
     * @param {string} name  Name of the calendar to delete.
     * @returns {Promise<any>} Returns a Promise
     */
    Calendar.deleteCalendar = function (name) { return; };
    /**
     * Returns the default calendar options.
     *
     * @return {CalendarOptions} Returns an object with the default calendar options
     */
    Calendar.getCalendarOptions = function () { return; };
    /**
     * Silently create an event.
     * @param {string} [title]  The event title
     * @param {string} [location]  The event location
     * @param {string} [notes]  The event notes
     * @param {Date} [startDate]  The event start date
     * @param {Date} [endDate]  The event end date
     * @returns {Promise<any>} Returns a Promise
     */
    Calendar.createEvent = function (title, location, notes, startDate, endDate) { return; };
    /**
     * Silently create an event with additional options.
     *
     * @param {string} [title]  The event title
     * @param {string} [location]  The event location
     * @param {string} [notes]  The event notes
     * @param {Date} [startDate]  The event start date
     * @param {Date} [endDate]  The event end date
     * @param {CalendarOptions} [options]  Additional options, see `getCalendarOptions`
     * @returns {Promise<any>} Returns a Promise
     */
    Calendar.createEventWithOptions = function (title, location, notes, startDate, endDate, options) { return; };
    /**
     * Interactively create an event.
     *
     * @param {string} [title]  The event title
     * @param {string} [location]  The event location
     * @param {string} [notes]  The event notes
     * @param {Date} [startDate]  The event start date
     * @param {Date} [endDate]  The event end date
     * @returns {Promise<any>} Returns a Promise
     */
    Calendar.createEventInteractively = function (title, location, notes, startDate, endDate) { return; };
    /**
     * Interactively create an event with additional options.
     *
     * @param {string} [title]  The event title
     * @param {string} [location]  The event location
     * @param {string} [notes]  The event notes
     * @param {Date} [startDate]  The event start date
     * @param {Date} [endDate]  The event end date
     * @param {CalendarOptions} [options]  Additional options, see `getCalendarOptions`
     * @returns {Promise<any>}
     */
    Calendar.createEventInteractivelyWithOptions = function (title, location, notes, startDate, endDate, options) { return; };
    // deprecated
    // @Cordova()
    // static createEventInNamedCalendar(
    //   title?: string,
    //   location?: string,
    //   notes?: string,
    //   startDate?: Date,
    //   endDate?: Date,
    //   calendarName?: string
    // ) {}
    /**
     * Find an event.
     *
     * @param {string} [title]  The event title
     * @param {string} [location]  The event location
     * @param {string} [notes]  The event notes
     * @param {Date} [startDate]  The event start date
     * @param {Date} [endDate]  The event end date
     * @returns {Promise<any>}
     */
    Calendar.findEvent = function (title, location, notes, startDate, endDate) { return; };
    /**
     * Find an event with additional options.
     * @param {string} [title]  The event title
     * @param {string} [location]  The event location
     * @param {string} [notes]  The event notes
     * @param {Date} [startDate]  The event start date
     * @param {Date} [endDate]  The event end date
     * @param {CalendarOptions} [options]  Additional options, see `getCalendarOptions`
     * @returns {Promise<any>} Returns a Promise that resolves with the event, or rejects with an error.
     */
    Calendar.findEventWithOptions = function (title, location, notes, startDate, endDate, options) { return; };
    /**
     * Find a list of events within the specified date range. (Android only)
     *
     * @param {Date} [startDate]  The start date
     * @param {Date} [endDate]  The end date
     * @returns {Promise<any>} Returns a Promise that resolves with the list of events, or rejects with an error.
     */
    Calendar.listEventsInRange = function (startDate, endDate) { return; };
    /**
     * Get a list of all calendars.
     * @returns {Promise<any>} A Promise that resolves with the list of calendars, or rejects with an error.
     */
    Calendar.listCalendars = function () { return; };
    /**
     * Get a list of all future events in the specified calendar. (iOS only)
     * @returns {Promise<any>} Returns a Promise that resolves with the list of events, or rejects with an error.
     */
    Calendar.findAllEventsInNamedCalendar = function (calendarName) { return; };
    /**
     * Modify an event. (iOS only)
     *
     * @param {string} [title]  The event title
     * @param {string} [location]  The event location
     * @param {string} [notes]  The event notes
     * @param {Date} [startDate]  The event start date
     * @param {Date} [endDate]  The event end date
     * @param {string} [newTitle]  The new event title
     * @param {string} [newLocation]  The new event location
     * @param {string} [newNotes]  The new event notes
     * @param {Date} [newStartDate]  The new event start date
     * @param {Date} [newEndDate]  The new event end date
     * @return Returns a Promise
     */
    Calendar.modifyEvent = function (title, location, notes, startDate, endDate, newTitle, newLocation, newNotes, newStartDate, newEndDate) { return; };
    /**
     * Modify an event with additional options. (iOS only)
     *
     * @param {string} [title]  The event title
     * @param {string} [location]  The event location
     * @param {string} [notes]  The event notes
     * @param {Date} [startDate]  The event start date
     * @param {Date} [endDate]  The event end date
     * @param {string} [newTitle]  The new event title
     * @param {string} [newLocation]  The new event location
     * @param {string} [newNotes]  The new event notes
     * @param {Date} [newStartDate]  The new event start date
     * @param {Date} [newEndDate]  The new event end date
     * @param {CalendarOptions} [filterOptions] Event Options, see `getCalendarOptions`
     * @param {CalendarOptions} [newOptions]  New event options, see `getCalendarOptions`
     * @return Returns a Promise
     */
    Calendar.modifyEventWithOptions = function (title, location, notes, startDate, endDate, newTitle, newLocation, newNotes, newStartDate, newEndDate, filterOptions, newOptions) { return; };
    /**
     * Delete an event.
     *
     * @param {string} [title]  The event title
     * @param {string} [location]  The event location
     * @param {string} [notes]  The event notes
     * @param {Date} [startDate]  The event start date
     * @param {Date} [endDate]  The event end date
     * @return Returns a Promise
     */
    Calendar.deleteEvent = function (title, location, notes, startDate, endDate) { return; };
    /**
     * Delete an event from the specified Calendar. (iOS only)
     *
     * @param {string} [title]  The event title
     * @param {string} [location]  The event location
     * @param {string} [notes]  The event notes
     * @param {Date} [startDate]  The event start date
     * @param {Date} [endDate]  The event end date
     * @param {string} calendarName
     * @return Returns a Promise
     */
    Calendar.deleteEventFromNamedCalendar = function (title, location, notes, startDate, endDate, calendarName) { return; };
    /**
     * Open the calendar at the specified date.
     * @param {Date} date The date you want to open the calendar on
     * @return {Promise<any>} Promise returns a promise
     */
    Calendar.openCalendar = function (date) { return; };
    __decorate([
        plugin_1.Cordova()
    ], Calendar, "hasReadWritePermission", null);
    __decorate([
        plugin_1.Cordova()
    ], Calendar, "hasReadPermission", null);
    __decorate([
        plugin_1.Cordova()
    ], Calendar, "hasWritePermission", null);
    __decorate([
        plugin_1.Cordova()
    ], Calendar, "requestWritePermission", null);
    __decorate([
        plugin_1.Cordova()
    ], Calendar, "requestReadPermission", null);
    __decorate([
        plugin_1.Cordova()
    ], Calendar, "requestReadWritePermission", null);
    __decorate([
        plugin_1.Cordova()
    ], Calendar, "createCalendar", null);
    __decorate([
        plugin_1.Cordova()
    ], Calendar, "deleteCalendar", null);
    __decorate([
        plugin_1.Cordova({
            sync: true
        })
    ], Calendar, "getCalendarOptions", null);
    __decorate([
        plugin_1.Cordova()
    ], Calendar, "createEvent", null);
    __decorate([
        plugin_1.Cordova()
    ], Calendar, "createEventWithOptions", null);
    __decorate([
        plugin_1.Cordova()
    ], Calendar, "createEventInteractively", null);
    __decorate([
        plugin_1.Cordova()
    ], Calendar, "createEventInteractivelyWithOptions", null);
    __decorate([
        plugin_1.Cordova()
    ], Calendar, "findEvent", null);
    __decorate([
        plugin_1.Cordova()
    ], Calendar, "findEventWithOptions", null);
    __decorate([
        plugin_1.Cordova({
            platforms: ['Android']
        })
    ], Calendar, "listEventsInRange", null);
    __decorate([
        plugin_1.Cordova()
    ], Calendar, "listCalendars", null);
    __decorate([
        plugin_1.Cordova({
            platforms: ['iOS']
        })
    ], Calendar, "findAllEventsInNamedCalendar", null);
    __decorate([
        plugin_1.Cordova({
            platforms: ['iOS']
        })
    ], Calendar, "modifyEvent", null);
    __decorate([
        plugin_1.Cordova({
            platforms: ['iOS']
        })
    ], Calendar, "modifyEventWithOptions", null);
    __decorate([
        plugin_1.Cordova()
    ], Calendar, "deleteEvent", null);
    __decorate([
        plugin_1.Cordova({
            platforms: ['iOS']
        })
    ], Calendar, "deleteEventFromNamedCalendar", null);
    __decorate([
        plugin_1.Cordova()
    ], Calendar, "openCalendar", null);
    Calendar = __decorate([
        plugin_1.Plugin({
            pluginName: 'Calendar',
            plugin: 'cordova-plugin-calendar',
            pluginRef: 'plugins.calendar',
            repo: 'https://github.com/EddyVerbruggen/Calendar-PhoneGap-Plugin',
            platforms: ['Android', 'iOS']
        })
    ], Calendar);
    return Calendar;
}());
exports.Calendar = Calendar;

},{"./plugin":82}],20:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name CallNumber
 * @description
 * Call a number directly from your Cordova/Ionic application.
 *
 * @usage
 * ```
 * import {CallNumber} from 'ionic-native';
 *
 * CallNumber.callNumber(18001010101, true)
 *   .then(() => console.log('Launched dialer!'))
 *   .catch(() => console.log('Error launching dialer'));
 *
 * ```
 */
var CallNumber = (function () {
    function CallNumber() {
    }
    /**
     * Calls a phone number
     * @param numberToCall {string} The phone number to call as a string
     * @param bypassAppChooser {boolean} Set to true to bypass the app chooser and go directly to dialer
     * @return {Promise<any>}
     */
    CallNumber.callNumber = function (numberToCall, bypassAppChooser) {
        return;
    };
    __decorate([
        plugin_1.Cordova({
            callbackOrder: 'reverse'
        })
    ], CallNumber, "callNumber", null);
    CallNumber = __decorate([
        plugin_1.Plugin({
            pluginName: 'CallNumber',
            plugin: 'call-number',
            pluginRef: 'plugins.CallNumber',
            repo: 'https://github.com/Rohfosho/CordovaCallNumberPlugin',
            platforms: ['iOS', 'Android']
        })
    ], CallNumber);
    return CallNumber;
}());
exports.CallNumber = CallNumber;

},{"./plugin":82}],21:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name CameraPreview
 * @description
 * Showing camera preview in HTML
 *
 * For more info, please see the [Cordova Camera Preview Plugin Docs](https://github.com/cordova-plugin-camera-preview/cordova-plugin-camera-preview).
 *
 * @usage
 * ```
 * import { CameraPreview, CameraPreviewRect } from 'ionic-native';
 *
 * // camera options (Size and location)
 * let cameraRect: CameraPreviewRect = {
 *   x: 100,
 *   y: 100,
 *   width: 200,
 *   height: 200
 * };
 *
 *
 * // start camera
 * CameraPreview.startCamera(
 *   cameraRect, // position and size of preview
 *   'front', // default camera
 *   true, // tap to take picture
 *   false, // disable drag
 *   false, // keep preview in front. Set to true (back of the screen) to apply overlaying elements
 *   1 // set the preview alpha
 * );
 *
 * // Set the handler to run every time we take a picture
 * CameraPreview.setOnPictureTakenHandler().subscribe((result) => {
 *   console.log(result);
 *   // do something with the result
 * });
 *
 *
 * // take a picture
 * CameraPreview.takePicture({
 *   maxWidth: 640,
 *   maxHeight: 640
 * });
 *
 * // Switch camera
 * CameraPreview.switchCamera();
 *
 * // set color effect to negative
 * CameraPreview.setColorEffect('negative');
 *
 * // Stop the camera preview
 * CameraPreview.stopCamera();
 *
 * ```
 *
 * @interfaces
 * CameraPreviewRect
 * CameraPreviewSize
 */
var CameraPreview = (function () {
    function CameraPreview() {
    }
    /**
     * Starts the camera preview instance.
     * @param {CameraPreviewRect} position and size of the preview window - {x: number, y: number, width: number, height: number}
     * @param {string} which camera to use - 'front' | 'back'
     * @param {boolean} enable tap to take picture
     * @param {boolean} enable preview box drag across the screen
     * @param {boolean} send preview box to the back of the webview
     * @param {number} alpha of the preview box
     */
    CameraPreview.startCamera = function (rect, defaultCamera, tapEnabled, dragEnabled, toBack, alpha) { };
    /**
     * Stops the camera preview instance.
     */
    CameraPreview.stopCamera = function () { };
    /**
     * Take the picture, the parameter size is optional
     * @param {CameraPreviewSize} optional - size of the picture to take
     */
    CameraPreview.takePicture = function (size) { };
    /**
     * Register a callback function that receives the original picture and the image captured from the preview box.
     * @returns {Observable<any>}
     */
    CameraPreview.setOnPictureTakenHandler = function () { return; };
    /**
     * Switch from the rear camera and front camera, if available.
     */
    CameraPreview.switchCamera = function () { };
    /**
     * Show the camera preview box.
     */
    CameraPreview.show = function () { };
    /**
     * Hide the camera preview box.
     */
    CameraPreview.hide = function () { };
    /**
     * Disables the camera preview
     */
    CameraPreview.disable = function () { };
    /**
     * Set camera color effect.
     */
    CameraPreview.setColorEffect = function (effect) { };
    __decorate([
        plugin_1.Cordova({
            sync: true
        })
    ], CameraPreview, "startCamera", null);
    __decorate([
        plugin_1.Cordova({
            sync: true
        })
    ], CameraPreview, "stopCamera", null);
    __decorate([
        plugin_1.Cordova({
            sync: true
        })
    ], CameraPreview, "takePicture", null);
    __decorate([
        plugin_1.Cordova({
            observable: true
        })
    ], CameraPreview, "setOnPictureTakenHandler", null);
    __decorate([
        plugin_1.Cordova({
            sync: true
        })
    ], CameraPreview, "switchCamera", null);
    __decorate([
        plugin_1.Cordova({
            sync: true
        })
    ], CameraPreview, "show", null);
    __decorate([
        plugin_1.Cordova({
            sync: true
        })
    ], CameraPreview, "hide", null);
    __decorate([
        plugin_1.Cordova({
            sync: true
        })
    ], CameraPreview, "disable", null);
    __decorate([
        plugin_1.Cordova({
            sync: true
        })
    ], CameraPreview, "setColorEffect", null);
    CameraPreview = __decorate([
        plugin_1.Plugin({
            pluginName: 'CameraPreview',
            plugin: 'cordova-plugin-camera-preview',
            pluginRef: 'cordova.plugins.camerapreview',
            repo: 'https://github.com/cordova-plugin-camera-preview/cordova-plugin-camera-preview',
            platforms: ['Android', 'iOS']
        })
    ], CameraPreview);
    return CameraPreview;
}());
exports.CameraPreview = CameraPreview;

},{"./plugin":82}],22:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name Camera
 * @description
 * Take a photo or capture video.
 *
 * Requires {@link module:driftyco/ionic-native} and the Cordova plugin: `cordova-plugin-camera`. For more info, please see the [Cordova Camera Plugin Docs](https://github.com/apache/cordova-plugin-camera).
 *
 * @usage
 * ```typescript
 * import { Camera } from 'ionic-native';
 *
 *
 * Camera.getPicture(options).then((imageData) => {
 *  // imageData is either a base64 encoded string or a file URI
 *  // If it's base64:
 *  let base64Image = 'data:image/jpeg;base64,' + imageData;
 * }, (err) => {
 *  // Handle error
 * });
 * ```
 * @interfaces
 * CameraOptions
 * CameraPopoverOptions
 */
var Camera = (function () {
    function Camera() {
    }
    /**
     * Take a picture or video, or load one from the library.
     * @param {CameraOptions?} options optional. Options that you want to pass to the camera. Encoding type, quality, etc. Platform-specific quirks are described in the [Cordova plugin docs](https://github.com/apache/cordova-plugin-camera#cameraoptions-errata-).
     * @returns {Promise<any>} Returns a Promise that resolves with Base64 encoding of the image data, or the image file URI, depending on cameraOptions, otherwise rejects with an error.
     */
    Camera.getPicture = function (options) { return; };
    /**
     * Remove intermediate image files that are kept in temporary storage after calling camera.getPicture.
     * Applies only when the value of Camera.sourceType equals Camera.PictureSourceType.CAMERA and the Camera.destinationType equals Camera.DestinationType.FILE_URI.
     * @returns {Promise<any>}
     */
    Camera.cleanup = function () { return; };
    ;
    /**
     * @private
     * @enum {number}
     */
    Camera.DestinationType = {
        /** Return base64 encoded string. DATA_URL can be very memory intensive and cause app crashes or out of memory errors. Use FILE_URI or NATIVE_URI if possible */
        DATA_URL: 0,
        /** Return file uri (content://media/external/images/media/2 for Android) */
        FILE_URI: 1,
        /** Return native uri (eg. asset-library://... for iOS) */
        NATIVE_URI: 2
    };
    /**
     * @private
     * @enum {number}
     */
    Camera.EncodingType = {
        /** Return JPEG encoded image */
        JPEG: 0,
        /** Return PNG encoded image */
        PNG: 1
    };
    /**
     * @private
     * @enum {number}
     */
    Camera.MediaType = {
        /** Allow selection of still pictures only. DEFAULT. Will return format specified via DestinationType */
        PICTURE: 0,
        /** Allow selection of video only, ONLY RETURNS URL */
        VIDEO: 1,
        /** Allow selection from all media types */
        ALLMEDIA: 2
    };
    /**
     * @private
     * @enum {number}
     */
    Camera.PictureSourceType = {
        /** Choose image from picture library (same as SAVEDPHOTOALBUM for Android) */
        PHOTOLIBRARY: 0,
        /** Take picture from camera */
        CAMERA: 1,
        /** Choose image from picture library (same as PHOTOLIBRARY for Android) */
        SAVEDPHOTOALBUM: 2
    };
    /**
     * @private
     * Matches iOS UIPopoverArrowDirection constants to specify arrow location on popover.
     * @enum {number}
     */
    Camera.PopoverArrowDirection = {
        ARROW_UP: 1,
        ARROW_DOWN: 2,
        ARROW_LEFT: 4,
        ARROW_RIGHT: 8,
        ARROW_ANY: 15
    };
    /**
     * @private
     * @enum {number}
     */
    Camera.Direction = {
        /** Use the back-facing camera */
        BACK: 0,
        /** Use the front-facing camera */
        FRONT: 1
    };
    __decorate([
        plugin_1.Cordova({
            callbackOrder: 'reverse'
        })
    ], Camera, "getPicture", null);
    __decorate([
        plugin_1.Cordova({
            platforms: ['iOS']
        })
    ], Camera, "cleanup", null);
    Camera = __decorate([
        plugin_1.Plugin({
            pluginName: 'Camera',
            plugin: 'cordova-plugin-camera',
            pluginRef: 'navigator.camera',
            repo: 'https://github.com/apache/cordova-plugin-camera',
            platforms: ['Android', 'BlackBerry', 'Browser', 'Firefox', 'FireOS', 'iOS', 'Windows', 'Windows Phone 8', 'Ubuntu']
        })
    ], Camera);
    return Camera;
}());
exports.Camera = Camera;

},{"./plugin":82}],23:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name CardIO
 * @description
 * @usage
 * ```
 * import { CardIO } from 'ionic-native';
 *
 *
 * CardIO.canScan()
 *   .then(
 *     (res: boolean) => {
 *       if(res){
 *         let options = {
 *           requireExpiry: true,
 *           requireCCV: false,
 *           requirePostalCode: false
 *         };
 *         CardIO.scan(options);
 *       }
 *     }
 *   );
 * ```
 * @interfaces
 * CardIOOptions
 * CardIOResponse
 */
var CardIO = (function () {
    function CardIO() {
    }
    /**
     * Check whether card scanning is currently available. (May vary by
     * device, OS version, network connectivity, etc.)
     *
     * @returns {Promise<boolean>}
     */
    CardIO.canScan = function () { return; };
    /**
     * Scan a credit card with card.io.
     * @param {CardIOOptions} options Options for configuring the plugin
     * @returns {Promise<any>}
     */
    CardIO.scan = function (options) { return; };
    /**
     * Retrieve the version of the card.io library. Useful when contacting support.
     * @returns {Promise<string>}
     */
    CardIO.version = function () { return; };
    __decorate([
        plugin_1.Cordova()
    ], CardIO, "canScan", null);
    __decorate([
        plugin_1.Cordova()
    ], CardIO, "scan", null);
    __decorate([
        plugin_1.Cordova()
    ], CardIO, "version", null);
    CardIO = __decorate([
        plugin_1.Plugin({
            pluginName: 'CardIO',
            plugin: 'card.io.cordova.mobilesdk',
            pluginRef: 'CardIO',
            repo: 'https://github.com/card-io/card.io-Cordova-Plugin',
            platforms: ['iOS', 'Android']
        })
    ], CardIO);
    return CardIO;
}());
exports.CardIO = CardIO;

},{"./plugin":82}],24:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name Clipboard
 * @description
 * Clipboard management plugin for Cordova that supports iOS, Android, and Windows Phone 8.
 *
 * Requires Cordova plugin: https://github.com/VersoSolutions/CordovaClipboard
 * For more info, please see the [Clipboard plugin docs](https://github.com/VersoSolutions/CordovaClipboard.git).
 *
 * @usage
 * ```typescript
 * import { Clipboard } from 'ionic-native';
 *
 *
 * Clipboard.copy('Hello world');
 *
 * Clipboard.paste().then(
 *    (resolve: string) => {
 *     alert(resolve);
 *     },
 *     (reject: string) => {
 *     alert('Error: ' + reject);
 *     }
 *     );
 * );
 * ```
 */
var Clipboard = (function () {
    function Clipboard() {
    }
    /**
     * Copies the given text
     * @param {string} text Text that gets copied on the system clipboard
     * @returns {Promise<any>} Returns a promise after the text has been copied
     */
    Clipboard.copy = function (text) { return; };
    /**
     * Pastes the text stored in clipboard
     * @returns {Promise<any>} Returns a promise after the text has been pasted
     */
    Clipboard.paste = function () { return; };
    __decorate([
        plugin_1.Cordova()
    ], Clipboard, "copy", null);
    __decorate([
        plugin_1.Cordova()
    ], Clipboard, "paste", null);
    Clipboard = __decorate([
        plugin_1.Plugin({
            pluginName: 'Clipboard',
            plugin: 'https://github.com/VersoSolutions/CordovaClipboard.git',
            pluginRef: 'cordova.plugins.clipboard',
            repo: 'https://github.com/VersoSolutions/CordovaClipboard',
            platforms: ['Amazon Fire OS', 'iOS', 'Android', 'BlackBerry 10', 'Windows Phone 7', 'Windows Phone 8', 'Windows', 'Firefox OS', 'Browser']
        })
    ], Clipboard);
    return Clipboard;
}());
exports.Clipboard = Clipboard;

},{"./plugin":82}],25:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * Defines the possible result statuses of the window.codePush.sync operation.
 */
(function (SyncStatus) {
    /**
     * The application is up to date.
     */
    SyncStatus[SyncStatus["UP_TO_DATE"] = 0] = "UP_TO_DATE";
    /**
     * An update is available, it has been downloaded, unzipped and copied to the deployment folder.
     * After the completion of the callback invoked with SyncStatus.UPDATE_INSTALLED, the application will be reloaded with the updated code and resources.
     */
    SyncStatus[SyncStatus["UPDATE_INSTALLED"] = 1] = "UPDATE_INSTALLED";
    /**
     * An optional update is available, but the user declined to install it. The update was not downloaded.
     */
    SyncStatus[SyncStatus["UPDATE_IGNORED"] = 2] = "UPDATE_IGNORED";
    /**
     * An error happened during the sync operation. This might be an error while communicating with the server, downloading or unziping the update.
     * The console logs should contain more information about what happened. No update has been applied in this case.
     */
    SyncStatus[SyncStatus["ERROR"] = 3] = "ERROR";
    /**
     * There is an ongoing sync in progress, so this attempt to sync has been aborted.
     */
    SyncStatus[SyncStatus["IN_PROGRESS"] = 4] = "IN_PROGRESS";
    /**
     * Intermediate status - the plugin is about to check for updates.
     */
    SyncStatus[SyncStatus["CHECKING_FOR_UPDATE"] = 5] = "CHECKING_FOR_UPDATE";
    /**
     * Intermediate status - a user dialog is about to be displayed. This status will be reported only if user interaction is enabled.
     */
    SyncStatus[SyncStatus["AWAITING_USER_ACTION"] = 6] = "AWAITING_USER_ACTION";
    /**
     * Intermediate status - the update package is about to be downloaded.
     */
    SyncStatus[SyncStatus["DOWNLOADING_PACKAGE"] = 7] = "DOWNLOADING_PACKAGE";
    /**
     * Intermediate status - the update package is about to be installed.
     */
    SyncStatus[SyncStatus["INSTALLING_UPDATE"] = 8] = "INSTALLING_UPDATE";
})(exports.SyncStatus || (exports.SyncStatus = {}));
var SyncStatus = exports.SyncStatus;
/**
 * Defines the available install modes for updates.
 */
(function (InstallMode) {
    /**
     * The update will be applied to the running application immediately. The application will be reloaded with the new content immediately.
     */
    InstallMode[InstallMode["IMMEDIATE"] = 0] = "IMMEDIATE";
    /**
     * The update is downloaded but not installed immediately. The new content will be available the next time the application is started.
     */
    InstallMode[InstallMode["ON_NEXT_RESTART"] = 1] = "ON_NEXT_RESTART";
    /**
     * The udpate is downloaded but not installed immediately. The new content will be available the next time the application is resumed or restarted, whichever event happends first.
     */
    InstallMode[InstallMode["ON_NEXT_RESUME"] = 2] = "ON_NEXT_RESUME";
})(exports.InstallMode || (exports.InstallMode = {}));
var InstallMode = exports.InstallMode;
/**
 * @name CodePush
 * @description
 * CodePush plugin for Cordova by Microsoft that supports iOS and Android.
 *
 * For more info, please see https://github.com/ksachdeva/ionic2-code-push-example
 *
 * @usage
 * ```typescript
 * import { CodePush } from 'ionic-native';
 *
 * // note - mostly error & completed methods of observable will not fire
 * // as syncStatus will contain the current state of the update
 * CodePush.sync().subscribe((syncStatus) => console.log(syncStatus));
 *
 * const downloadProgress = (progress) => { console.log(`Downloaded ${progress.receivedBytes} of ${progress.totalBytes}`); }
 * CodePush.sync({}, downloadProgress).subscribe((syncStatus) => console.log(syncStatus));
 *
 * ```
 */
var CodePush = (function () {
    function CodePush() {
    }
    /**
     * Get the current package information.
     *
     * @param packageSuccess Callback invoked with the currently deployed package information.
     * @param packageError Optional callback invoked in case of an error.
     * @returns {Promise<ILocalPackage>}
     */
    CodePush.getCurrentPackage = function () {
        return;
    };
    /**
     * Gets the pending package information, if any. A pending package is one that has been installed but the application still runs the old code.
     * This happends only after a package has been installed using ON_NEXT_RESTART or ON_NEXT_RESUME mode, but the application was not restarted/resumed yet.
     * @returns {Promise<ILocalPackage>}
     */
    CodePush.getPendingPackage = function () {
        return;
    };
    /**
     * Checks with the CodePush server if an update package is available for download.
     *
     * @param querySuccess Callback invoked in case of a successful response from the server.
     *                     The callback takes one RemotePackage parameter. A non-null package is a valid update.
     *                     A null package means the application is up to date for the current native application version.
     * @param queryError Optional callback invoked in case of an error.
     * @param deploymentKey Optional deployment key that overrides the config.xml setting.
     * @returns {Promise<IRemotePackage>}
     */
    CodePush.checkForUpdate = function (deploymentKey) {
        return;
    };
    /**
     * Notifies the plugin that the update operation succeeded and that the application is ready.
     * Calling this function is required on the first run after an update. On every subsequent application run, calling this function is a noop.
     * If using sync API, calling this function is not required since sync calls it internally.
     *
     * @param notifySucceeded Optional callback invoked if the plugin was successfully notified.
     * @param notifyFailed Optional callback invoked in case of an error during notifying the plugin.
     * @returns {Promise<void>}
     */
    CodePush.notifyApplicationReady = function () {
        return;
    };
    /**
     * Reloads the application. If there is a pending update package installed using ON_NEXT_RESTART or ON_NEXT_RESUME modes, the update
     * will be immediately visible to the user. Otherwise, calling this function will simply reload the current version of the application.
     * @returns {Promise<void>}
     */
    CodePush.restartApplication = function () {
        return;
    };
    /**
     * Convenience method for installing updates in one method call.
     * This method is provided for simplicity, and its behavior can be replicated by using window.codePush.checkForUpdate(), RemotePackage's download() and LocalPackage's install() methods.
     *
     * The algorithm of this method is the following:
     * - Checks for an update on the CodePush server.
     * - If an update is available
     *         - If the update is mandatory and the alertMessage is set in options, the user will be informed that the application will be updated to the latest version.
     *           The update package will then be downloaded and applied.
     *         - If the update is not mandatory and the confirmMessage is set in options, the user will be asked if they want to update to the latest version.
     *           If they decline, the syncCallback will be invoked with SyncStatus.UPDATE_IGNORED.
     *         - Otherwise, the update package will be downloaded and applied with no user interaction.
     * - If no update is available on the server, or if a previously rolled back update is available and the ignoreFailedUpdates is set to true, the syncCallback will be invoked with the SyncStatus.UP_TO_DATE.
     * - If an error occurs during checking for update, downloading or installing it, the syncCallback will be invoked with the SyncStatus.ERROR.
     *
     * @param syncCallback Optional callback to be called with the status of the sync operation.
     * @param syncOptions Optional SyncOptions parameter configuring the behavior of the sync operation.
     * @param downloadProgress Optional callback invoked during the download process. It is called several times with one DownloadProgress parameter.
     * @returns {Observable<SyncStatus>}
     *
     */
    CodePush.sync = function (syncOptions, downloadProgress) {
        return;
    };
    __decorate([
        plugin_1.Cordova()
    ], CodePush, "getCurrentPackage", null);
    __decorate([
        plugin_1.Cordova()
    ], CodePush, "getPendingPackage", null);
    __decorate([
        plugin_1.Cordova({
            callbackOrder: 'reverse'
        })
    ], CodePush, "checkForUpdate", null);
    __decorate([
        plugin_1.Cordova()
    ], CodePush, "notifyApplicationReady", null);
    __decorate([
        plugin_1.Cordova()
    ], CodePush, "restartApplication", null);
    __decorate([
        plugin_1.Cordova({
            observable: true,
            successIndex: 0,
            errorIndex: 3 // we don't need this, so we set it to a value higher than # of args
        })
    ], CodePush, "sync", null);
    CodePush = __decorate([
        plugin_1.Plugin({
            pluginName: 'CodePush',
            plugin: 'cordova-plugin-code-push',
            pluginRef: 'codePush',
            repo: 'https://github.com/Microsoft/cordova-plugin-code-push',
            platforms: ['Android', 'iOS']
        })
    ], CodePush);
    return CodePush;
}());
exports.CodePush = CodePush;

},{"./plugin":82}],26:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @private
 */
var Contact = (function () {
    function Contact() {
        this._objectInstance = navigator.contacts.create();
    }
    Contact.prototype.clone = function () {
        var newContact = new Contact();
        for (var prop in this) {
            if (prop === 'id')
                return;
            newContact[prop] = this[prop];
        }
        return newContact;
    };
    Contact.prototype.remove = function () { return; };
    Contact.prototype.save = function () {
        var _this = this;
        return plugin_1.getPromise(function (resolve, reject) {
            _this._objectInstance.save(function (contact) {
                _this._objectInstance = contact;
                resolve(_this);
            }, reject);
        });
    };
    __decorate([
        plugin_1.InstanceProperty
    ], Contact.prototype, "id", void 0);
    __decorate([
        plugin_1.InstanceProperty
    ], Contact.prototype, "displayName", void 0);
    __decorate([
        plugin_1.InstanceProperty
    ], Contact.prototype, "name", void 0);
    __decorate([
        plugin_1.InstanceProperty
    ], Contact.prototype, "nickname", void 0);
    __decorate([
        plugin_1.InstanceProperty
    ], Contact.prototype, "phoneNumbers", void 0);
    __decorate([
        plugin_1.InstanceProperty
    ], Contact.prototype, "emails", void 0);
    __decorate([
        plugin_1.InstanceProperty
    ], Contact.prototype, "addresses", void 0);
    __decorate([
        plugin_1.InstanceProperty
    ], Contact.prototype, "ims", void 0);
    __decorate([
        plugin_1.InstanceProperty
    ], Contact.prototype, "organizations", void 0);
    __decorate([
        plugin_1.InstanceProperty
    ], Contact.prototype, "birthday", void 0);
    __decorate([
        plugin_1.InstanceProperty
    ], Contact.prototype, "note", void 0);
    __decorate([
        plugin_1.InstanceProperty
    ], Contact.prototype, "photos", void 0);
    __decorate([
        plugin_1.InstanceProperty
    ], Contact.prototype, "categories", void 0);
    __decorate([
        plugin_1.InstanceProperty
    ], Contact.prototype, "urls", void 0);
    __decorate([
        plugin_1.CordovaInstance()
    ], Contact.prototype, "remove", null);
    return Contact;
}());
exports.Contact = Contact;
/**
 * @private
 */
var ContactName = (function () {
    function ContactName(formatted, familyName, givenName, middleName, honorificPrefix, honorificSuffix) {
        this.formatted = formatted;
        this.familyName = familyName;
        this.givenName = givenName;
        this.middleName = middleName;
        this.honorificPrefix = honorificPrefix;
        this.honorificSuffix = honorificSuffix;
    }
    return ContactName;
}());
exports.ContactName = ContactName;
/**
 * @private
 */
var ContactField = (function () {
    function ContactField(type, value, pref) {
        this.type = type;
        this.value = value;
        this.pref = pref;
    }
    return ContactField;
}());
exports.ContactField = ContactField;
/**
 * @private
 */
var ContactAddress = (function () {
    function ContactAddress(pref, type, formatted, streetAddress, locality, region, postalCode, country) {
        this.pref = pref;
        this.type = type;
        this.formatted = formatted;
        this.streetAddress = streetAddress;
        this.locality = locality;
        this.region = region;
        this.postalCode = postalCode;
        this.country = country;
    }
    return ContactAddress;
}());
exports.ContactAddress = ContactAddress;
/**
 * @private
 */
var ContactOrganization = (function () {
    function ContactOrganization(type, name, department, title, pref) {
        this.type = type;
        this.name = name;
        this.department = department;
        this.title = title;
        this.pref = pref;
    }
    return ContactOrganization;
}());
exports.ContactOrganization = ContactOrganization;
/**
 * @private
 */
var ContactFindOptions = (function () {
    function ContactFindOptions(filter, multiple, desiredFields, hasPhoneNumber) {
        this.filter = filter;
        this.multiple = multiple;
        this.desiredFields = desiredFields;
        this.hasPhoneNumber = hasPhoneNumber;
    }
    return ContactFindOptions;
}());
exports.ContactFindOptions = ContactFindOptions;
/**
 * @name Contacts
 * @description
 * Access and manage Contacts on the device.
 *
 * @usage
 *
 * ```typescript
 * import { Contacts, Contact, ContactField, ContactName } from 'ionic-native';
 *
 *
 * let contact: Contact = Contacts.create();
 *
 * contact.name = new ContactName(null, 'Smith', 'John');
 * contact.phoneNumbers = [new ContactField('mobile', '6471234567')];
 * contact.save().then(
 *   () => console.log('Contact saved!', contact),
 *   (error: any) => console.error('Error saving contact.', error)
 * );
 *
 * ```
 * @interfaces
 * IContactProperties
 * IContactError
 * IContactName
 * IContactField
 * IContactAddress
 * IContactOrganization
 * IContactFindOptions
 */
var Contacts = (function () {
    function Contacts() {
    }
    /**
     * Create a single contact.
     * @returns {Contact} Returns a Contact object
     */
    Contacts.create = function () {
        return new Contact();
    };
    /**
     * Search for contacts in the Contacts list.
     * @param fields {ContactFieldType[]}  Contact fields to be used as a search qualifier
     * @param options {IContactFindOptions} Optional options for the query
     * @returns {Promise<Contact[]>} Returns a Promise that resolves with the search results (an array of Contact objects)
     */
    Contacts.find = function (fields, options) {
        return plugin_1.getPromise(function (resolve, reject) {
            navigator.contacts.find(fields, function (contacts) {
                resolve(contacts.map(processContact));
            }, reject, options);
        });
    };
    /**
     * Select a single Contact.
     * @returns {Promise<Contact>} Returns a Promise that resolves with the selected Contact
     */
    Contacts.pickContact = function () {
        return plugin_1.getPromise(function (resolve, reject) {
            navigator.contacts.pickContact(function (contact) { return resolve(processContact(contact)); }, reject);
        });
    };
    Contacts = __decorate([
        plugin_1.Plugin({
            pluginName: 'Contacts',
            plugin: 'cordova-plugin-contacts',
            pluginRef: 'navigator.contacts',
            repo: 'https://github.com/apache/cordova-plugin-contacts'
        })
    ], Contacts);
    return Contacts;
}());
exports.Contacts = Contacts;
/**
 * @private
 */
function processContact(contact) {
    var newContact = new Contact();
    for (var prop in contact) {
        if (typeof contact[prop] === 'function')
            continue;
        newContact[prop] = contact[prop];
    }
    return newContact;
}

},{"./plugin":82}],27:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name Crop
 * @description Crops images
 * @usage
 * ```
 * import {Crop} from 'ionic-native';
 *
 * ...
 *
 * Crop.crop('path/to/image.jpg', {quality: 75})
 *   .then(
 *     newImage => console.log("new image path is: " + newImage),
 *     error => console.error("Error cropping image", error)
 *   );
 * ```
 */
var Crop = (function () {
    function Crop() {
    }
    /**
     * Crops an image
     * @param pathToImage
     * @param options
     * @returns {Promise<string>} Returns a promise that resolves with the new image path, or rejects if failed to crop.
     */
    Crop.crop = function (pathToImage, options) { return; };
    __decorate([
        plugin_1.Cordova({
            callbackOrder: 'reverse'
        })
    ], Crop, "crop", null);
    Crop = __decorate([
        plugin_1.Plugin({
            pluginName: 'Crop',
            plugin: 'cordova-plugin-crop',
            pluginRef: 'plugins',
            repo: 'https://github.com/jeduan/cordova-plugin-crop'
        })
    ], Crop);
    return Crop;
}());
exports.Crop = Crop;

},{"./plugin":82}],28:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name Date Picker
 * @description
 * The DatePicker plugin allows the user to fetch date or time using native dialogs.
 *
 * @usage
 * ```typescript
 * import { DatePicker } from 'ionic-native';
 *
 *
 * DatePicker.show({
 *   date: new Date(),
 *   mode: 'date'
 * }).then(
 *   date => console.log('Got date: ', date),
 *   err => console.log('Error occurred while getting date: ', err)
 * );
 * ```
 * @interfaces
 * DatePickerOptions
 */
var DatePicker = (function () {
    function DatePicker() {
    }
    /**
     * Shows the date and/or time picker dialog(s)
     * @param {DatePickerOptions} options Options for the date picker.
     * @returns {Promise<Date>} Returns a promise that resolves with the picked date and/or time, or rejects with an error.
     */
    DatePicker.show = function (options) {
        return;
    };
    /**
     * @private
     */
    DatePicker.ANDROID_THEMES = {
        THEME_TRADITIONAL: 1,
        THEME_HOLO_DARK: 2,
        THEME_HOLO_LIGHT: 3,
        THEME_DEVICE_DEFAULT_DARK: 4,
        THEME_DEVICE_DEFAULT_LIGHT: 5
    };
    __decorate([
        plugin_1.Cordova()
    ], DatePicker, "show", null);
    DatePicker = __decorate([
        plugin_1.Plugin({
            pluginName: 'DatePicker',
            plugin: 'cordova-plugin-datepicker',
            pluginRef: 'datePicker',
            repo: 'https://github.com/VitaliiBlagodir/cordova-plugin-datepicker',
            platforms: ['Android', 'iOS', 'Windows']
        })
    ], DatePicker);
    return DatePicker;
}());
exports.DatePicker = DatePicker;

},{"./plugin":82}],29:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name DB Meter
 * @description This plugin defines a global DBMeter object, which permits to get the decibel values from the microphone.
 * @usage
 * ```typescript
 * import { DBMeter } from 'ionic-native';
 *
 *
 * // Start listening
 * let subscription = DBMeter.start().subscribe(
 *   data => console.log(data)
 * );
 *
 * // Check if we are listening
 * DBMeter.isListening().then(
 *   (isListening: boolean) => console.log(isListening)
 * );
 *
 * // Stop listening
 * subscription.unsubscribe();
 *
 * // Delete DBMeter instance from memory
 * DBMeter.delete().then(
 *   () => console.log('Deleted DB Meter instance'),
 *   error => console.log('Error occurred while deleting DB Meter instance')
 * );
 * ```
 */
var DBMeter = (function () {
    function DBMeter() {
    }
    /**
     * Starts listening
     * @returns {Observable<any>} Returns an observable. Subscribe to start listening. Unsubscribe to stop listening.
     */
    DBMeter.start = function () { return; };
    /**
     * Stops listening
     * @private
     */
    DBMeter.stop = function () { return; };
    /**
     * Check if the DB Meter is listening
     * @returns {Promise<boolean>} Returns a promise that resolves with a boolean that tells us whether the DB meter is listening
     */
    DBMeter.isListening = function () { return; };
    /**
     * Delete the DB Meter instance
     * @returns {Promise<any>} Returns a promise that will resolve if the instance has been deleted, and rejects if errors occur.
     */
    DBMeter.delete = function () { return; };
    __decorate([
        plugin_1.Cordova({
            observable: true,
            clearFunction: 'stop'
        })
    ], DBMeter, "start", null);
    __decorate([
        plugin_1.Cordova()
    ], DBMeter, "stop", null);
    __decorate([
        plugin_1.Cordova()
    ], DBMeter, "isListening", null);
    __decorate([
        plugin_1.Cordova()
    ], DBMeter, "delete", null);
    DBMeter = __decorate([
        plugin_1.Plugin({
            pluginName: 'DBMeter',
            plugin: 'cordova-plugin-dbmeter',
            pluginRef: 'DBMeter',
            repo: 'https://github.com/akofman/cordova-plugin-dbmeter',
            platforms: ['iOS', 'Android']
        })
    ], DBMeter);
    return DBMeter;
}());
exports.DBMeter = DBMeter;

},{"./plugin":82}],30:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name Ionic Deeplinks
 * @description This plugin handles deeplinks on iOS and Android for both custom URL scheme links
 * and Universal App Links.
 *
 * @usage
 * ```typescript
 * import { Deeplinks } from 'ionic-native';
 *
 * Deeplinks.route({
      '/about-us': AboutPage,
      '/universal-links-test': AboutPage,
      '/products/:productId': ProductPage
    }).subscribe((match) => {
      // match.$route - the route we matched, which is the matched entry from the arguments to route()
      // match.$args - the args passed in the link
      // match.$link - the full link data
      console.log('Successfully matched route', match);
    }, (nomatch) => {
      // nomatch.$link - the full link data
      console.error('Got a deeplink that didn\'t match', nomatch);
    });
 * ```
 *
 * Alternatively, if you're using Ionic 2, there's a convenience method that takes a reference to a `NavController` and handles
 * the actual navigation for you:
 *
 * ```typescript
 * Deeplinks.routeWithNavController(this.navController, {
    '/about-us': AboutPage,
    '/products/:productId': ProductPage
  }).subscribe((match) => {
      // match.$route - the route we matched, which is the matched entry from the arguments to route()
      // match.$args - the args passed in the link
      // match.$link - the full link data
      console.log('Successfully matched route', match);
    }, (nomatch) => {
      // nomatch.$link - the full link data
      console.error('Got a deeplink that didn\'t match', nomatch);
    });
 * ```
 *
 * See the [Ionic 2 Deeplinks Demo](https://github.com/driftyco/ionic2-deeplinks-demo/blob/master/app/app.ts) for an example of how to
 * retrieve the `NavController` reference at runtime.
 *
 * @interfaces
 * DeeplinkMatch
 */
var Deeplinks = (function () {
    function Deeplinks() {
    }
    /**
     * Define a set of paths to match against incoming deeplinks.
     *
     * @param {paths} Define a set of paths to match against incoming deeplinks.
     * paths takes an object of the form { 'path': data }. If a deeplink
     * matches the path, the resulting path-data pair will be returned in the
     * promise result which you can then use to navigate in the app as you see fit.
     * @returns {Observable<DeeplinkMatch>} Returns an Observable that is called each time a deeplink comes through, and
     * errors if a deeplink comes through that does not match a given path.
     */
    Deeplinks.route = function (paths) { return; };
    /**
     *
     * This is a convenience version of `route` that takes a reference to a NavController
     * from Ionic 2, or a custom class that conforms to this protocol:
     *
     * NavController.push = function(View, Params){}
     *
     * This handler will automatically navigate when a route matches. If you need finer-grained
     * control over the behavior of a matching deeplink, use the plain `route` method.
     *
     * @param {paths} Define a set of paths to match against incoming deeplinks.
     * paths takes an object of the form { 'path': data }. If a deeplink
     * matches the path, the resulting path-data pair will be returned in the
     * promise result which you can then use to navigate in the app as you see fit.
     *
     * @returns {Observable<DeeplinkMatch>} Returns an Observable that resolves each time a deeplink comes through, and
     * errors if a deeplink comes through that does not match a given path.
     */
    Deeplinks.routeWithNavController = function (navController, paths) { return; };
    __decorate([
        plugin_1.Cordova({
            observable: true
        })
    ], Deeplinks, "route", null);
    __decorate([
        plugin_1.Cordova({
            observable: true
        })
    ], Deeplinks, "routeWithNavController", null);
    Deeplinks = __decorate([
        plugin_1.Plugin({
            pluginName: 'Deeplinks',
            plugin: 'ionic-plugin-deeplinks',
            pluginRef: 'IonicDeeplink',
            repo: 'https://github.com/driftyco/ionic-plugin-deeplinks',
            platforms: ['iOS', 'Android'],
            install: 'ionic plugin add ionic-plugin-deeplinks --variable URL_SCHEME=myapp --variable DEEPLINK_SCHEME=https --variable DEEPLINK_HOST=example.com --variable ANDROID_PATH_PREFIX=/'
        })
    ], Deeplinks);
    return Deeplinks;
}());
exports.Deeplinks = Deeplinks;

},{"./plugin":82}],31:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name DeviceFeedback
 * @description
 *
 * Plugin that lets you provide haptic or acoustic feedback on Android devices.
 *
 * @usage
 * ```
 * import { DeviceFeedback } from 'ionic-native';
 *
 * DeviceFeedback.acoustic();
 *
 * DeviceFeedback.haptic(0);
 *
 * DeviceFeedback.isFeedbackEnabled()
 *   .then((feedback) => {
 *     console.log(feedback);
 *     // {
 *     //   acoustic: true,
 *     //   haptic: true
 *     // }
 *   });
 *
 * ```
 */
var DeviceFeedback = (function () {
    function DeviceFeedback() {
    }
    /**
     * Provide sound feedback to user, nevertheless respect user's settings and current active device profile as native feedback do.
     */
    DeviceFeedback.acoustic = function () { };
    /**
     * Provide vibrate feedback to user, nevertheless respect user's tactile feedback setting as native feedback do.
     * @param type {Number} Specify type of vibration feedback. 0 for long press, 1 for virtual key, or 3 for keyboard tap.
     */
    DeviceFeedback.haptic = function (type) { };
    /**
     * Check if haptic and acoustic feedback is enabled by user settings.
     * @returns {Promise<any>}
     */
    DeviceFeedback.isFeedbackEnabled = function () { return; };
    __decorate([
        plugin_1.Cordova({ sync: true })
    ], DeviceFeedback, "acoustic", null);
    __decorate([
        plugin_1.Cordova({ sync: true })
    ], DeviceFeedback, "haptic", null);
    __decorate([
        plugin_1.Cordova()
    ], DeviceFeedback, "isFeedbackEnabled", null);
    DeviceFeedback = __decorate([
        plugin_1.Plugin({
            pluginName: 'DeviceFeedback',
            plugin: 'cordova-plugin-velda-devicefeedback',
            pluginRef: 'plugins.deviceFeedback',
            repo: 'https://github.com/VVelda/device-feedback',
            platforms: ['Android']
        })
    ], DeviceFeedback);
    return DeviceFeedback;
}());
exports.DeviceFeedback = DeviceFeedback;

},{"./plugin":82}],32:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name Device
 * @description
 * Access information about the underlying device and platform.
 *
 * @usage
 * ```typescript
 * import { Device } from 'ionic-native';
 *
 *
 * console.log('Device UUID is: ' + Device.uuid);
 * ```
 */
var Device = (function () {
    function Device() {
    }
    __decorate([
        plugin_1.CordovaProperty
    ], Device, "cordova", void 0);
    __decorate([
        plugin_1.CordovaProperty
    ], Device, "model", void 0);
    __decorate([
        plugin_1.CordovaProperty
    ], Device, "platform", void 0);
    __decorate([
        plugin_1.CordovaProperty
    ], Device, "uuid", void 0);
    __decorate([
        plugin_1.CordovaProperty
    ], Device, "version", void 0);
    __decorate([
        plugin_1.CordovaProperty
    ], Device, "manufacturer", void 0);
    __decorate([
        plugin_1.CordovaProperty
    ], Device, "isVirtual", void 0);
    __decorate([
        plugin_1.CordovaProperty
    ], Device, "serial", void 0);
    Device = __decorate([
        plugin_1.Plugin({
            pluginName: 'Device',
            plugin: 'cordova-plugin-device',
            pluginRef: 'device',
            repo: 'https://github.com/apache/cordova-plugin-device'
        })
    ], Device);
    return Device;
}());
exports.Device = Device;

},{"./plugin":82}],33:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
var DeviceAccounts = (function () {
    function DeviceAccounts() {
    }
    /**
     *  Gets all accounts registered on the Android Device
     * @returns {Promise<any>}
     */
    DeviceAccounts.get = function () { return; };
    /**
     *  Get all accounts registered on Android device for requested type
     * @returns {Promise<any>}
     */
    DeviceAccounts.getByType = function (type) { return; };
    /**
     *  Get all emails registered on Android device (accounts with 'com.google' type)
     * @returns {Promise<any>}
     */
    DeviceAccounts.getEmails = function () { return; };
    /**
     *  Get the first email registered on Android device
     * @returns {Promise<any>}
     */
    DeviceAccounts.getEmail = function () { return; };
    __decorate([
        plugin_1.Cordova()
    ], DeviceAccounts, "get", null);
    __decorate([
        plugin_1.Cordova()
    ], DeviceAccounts, "getByType", null);
    __decorate([
        plugin_1.Cordova()
    ], DeviceAccounts, "getEmails", null);
    __decorate([
        plugin_1.Cordova()
    ], DeviceAccounts, "getEmail", null);
    DeviceAccounts = __decorate([
        plugin_1.Plugin({
            pluginName: 'DeviceAccounts',
            plugin: 'https://github.com/loicknuchel/cordova-device-accounts.git',
            pluginRef: 'plugins.DeviceAccounts',
            repo: 'https://github.com/loicknuchel/cordova-device-accounts',
            platforms: ['Android']
        })
    ], DeviceAccounts);
    return DeviceAccounts;
}());
exports.DeviceAccounts = DeviceAccounts;

},{"./plugin":82}],34:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name Device Motion
 * @description
 * Requires Cordova plugin: `cordova-plugin-device-motion`. For more info, please see the [Device Motion docs](https://github.com/apache/cordova-plugin-device-motion).
 *
 * @usage
 * ```typescript
 * import { DeviceMotion } from 'ionic-native';
 *
 *
 * // Get the device current acceleration
 * DeviceMotion.getCurrentAcceleration().then(
 *   (acceleration: AccelerationData) => console.log(acceleration),
 *   (error: any) => console.log(error)
 * );
 *
 * // Watch device acceleration
 * var subscription = DeviceMotion.watchAcceleration().subscribe((acceleration: AccelerationData) => {
 *   console.log(acceleration);
 * });
 *
 * // Stop watch
 * subscription.unsubscribe();
 *
 * ```
 * @interfaces
 * DeviceMotionAccelerationData
 * DeviceMotionAccelerometerOptions
 */
var DeviceMotion = (function () {
    function DeviceMotion() {
    }
    /**
     * Get the current acceleration along the x, y, and z axes.
     * @returns {Promise<DeviceMotionAccelerationData>} Returns object with x, y, z, and timestamp properties
     */
    DeviceMotion.getCurrentAcceleration = function () { return; };
    /**
     * Watch the device acceleration. Clear the watch by unsubscribing from the observable.
     * @param {AccelerometerOptions} options list of options for the accelerometer.
     * @returns {Observable<DeviceMotionAccelerationData>} Observable returns an observable that you can subscribe to
     */
    DeviceMotion.watchAcceleration = function (options) { return; };
    __decorate([
        plugin_1.Cordova()
    ], DeviceMotion, "getCurrentAcceleration", null);
    __decorate([
        plugin_1.Cordova({
            callbackOrder: 'reverse',
            observable: true,
            clearFunction: 'clearWatch'
        })
    ], DeviceMotion, "watchAcceleration", null);
    DeviceMotion = __decorate([
        plugin_1.Plugin({
            pluginName: 'DeviceMotion',
            plugin: 'cordova-plugin-device-motion',
            pluginRef: 'navigator.accelerometer',
            repo: 'https://github.com/apache/cordova-plugin-device-motion'
        })
    ], DeviceMotion);
    return DeviceMotion;
}());
exports.DeviceMotion = DeviceMotion;

},{"./plugin":82}],35:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name Device Orientation
 * @description
 * Requires Cordova plugin: `cordova-plugin-device-orientation`. For more info, please see the [Device Orientation docs](https://github.com/apache/cordova-plugin-device-orientation).
 *
 * @usage
 * ```typescript
 * // CompassHeading is an interface for compass
 * import { DeviceOrientation, CompassHeading } from 'ionic-native';
 *
 *
 * // Get the device current compass heading
 * DeviceOrientation.getCurrentHeading().then(
 *   (data: CompassHeading) => console.log(data),
 *   (error: any) => console.log(error)
 * );
 *
 * // Watch the device compass heading change
 * var subscription = DeviceOrientation.watchHeading().subscribe(
 *   (data: CompassHeading) => console.log(data)
 * );
 *
 * // Stop watching heading change
 * subscription.unsubscribe();
 * ```
 * @interfaces
 * DeviceOrientationCompassOptions
 * DeviceOrientationCompassHeading
 */
var DeviceOrientation = (function () {
    function DeviceOrientation() {
    }
    /**
     * Get the current compass heading.
     * @returns {Promise<DeviceOrientationCompassHeading>}
     */
    DeviceOrientation.getCurrentHeading = function () { return; };
    /**
     * Get the device current heading at a regular interval
     *
     * Stop the watch by unsubscribing from the observable
     * @param {DeviceOrientationCompassOptions} options Options for compass. Frequency and Filter. Optional
     * @returns {Observable<DeviceOrientationCompassHeading>} Returns an observable that contains the compass heading
     */
    DeviceOrientation.watchHeading = function (options) { return; };
    __decorate([
        plugin_1.Cordova()
    ], DeviceOrientation, "getCurrentHeading", null);
    __decorate([
        plugin_1.Cordova({
            callbackOrder: 'reverse',
            observable: true,
            clearFunction: 'clearWatch'
        })
    ], DeviceOrientation, "watchHeading", null);
    DeviceOrientation = __decorate([
        plugin_1.Plugin({
            pluginName: 'DeviceOrientation',
            plugin: 'cordova-plugin-device-orientation',
            pluginRef: 'navigator.compass',
            repo: 'https://github.com/apache/cordova-plugin-device-orientation'
        })
    ], DeviceOrientation);
    return DeviceOrientation;
}());
exports.DeviceOrientation = DeviceOrientation;

},{"./plugin":82}],36:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name Diagnostic
 * @description
 * Checks whether device hardware features are enabled or available to the app, e.g. camera, GPS, wifi
 *
 * @usage
 * ```typescript
 * import { Diagnostic } from 'ionic-native';
 *
 * let successCallback = (isAvailable) => { console.log('Is available? ' + isAvailable); };
 * let errorCallback = (e) => console.error(e);
 *
 * Diagnostic.isCameraAvailable().then(successCallback).catch(errorCallback);
 *
 * Diagnostic.isBluetoothAvailable().then(successCallback, errorCallback);
 *
 *
 * Diagnostic.getBluetoothState()
 *   .then((state) => {
 *     if (state == Diagnostic.bluetoothStates.POWERED_ON){
 *       // do something
 *     } else {
 *       // do something else
 *     }
 *   }).catch(e => console.error(e));
 *
 * ```
 *
 */
var Diagnostic = (function () {
    function Diagnostic() {
    }
    /**
     * Checks if app is able to access device location.
     * @returns {Promise<any>}
     */
    Diagnostic.isLocationAvailable = function () { return; };
    /**
     * Checks if Wifi is connected/enabled. On iOS this returns true if the device is connected to a network by WiFi. On Android and Windows 10 Mobile this returns true if the WiFi setting is set to enabled.
     * On Android this requires permission. `<uses-permission android:name="android.permission.ACCESS_WIFI_STATE" />`
     * @returns {Promise<any>}
     */
    Diagnostic.isWifiAvailable = function () { return; };
    /**
     * Checks if the device has a camera. On Android this returns true if the device has a camera. On iOS this returns true if both the device has a camera AND the application is authorized to use it. On Windows 10 Mobile this returns true if both the device has a rear-facing camera AND the
     * application is authorized to use it.
     * @returns {Promise<any>}
     */
    Diagnostic.isCameraAvailable = function () { return; };
    /**
     * Checks if the device has Bluetooth capabilities and if so that Bluetooth is switched on (same on Android, iOS and Windows 10 Mobile)
     * On Android this requires permission <uses-permission android:name="android.permission.BLUETOOTH" />
     * @returns {Promise<any>}
     */
    Diagnostic.isBluetoothAvailable = function () { return; };
    /**
     * Displays the device location settings to allow user to enable location services/change location mode.
     */
    Diagnostic.switchToLocationSettings = function () { };
    /**
     * Displays mobile settings to allow user to enable mobile data.
     */
    Diagnostic.switchToMobileDataSettings = function () { };
    /**
     * Displays Bluetooth settings to allow user to enable Bluetooth.
     */
    Diagnostic.switchToBluetoothSettings = function () { };
    /**
     * Displays WiFi settings to allow user to enable WiFi.
     */
    Diagnostic.switchToWifiSettings = function () { };
    /**
     * Returns true if the WiFi setting is set to enabled, and is the same as `isWifiAvailable()`
     * @returns {Promise<boolean>}
     */
    Diagnostic.isWifiEnabled = function () { return; };
    /**
     * Enables/disables WiFi on the device.
     * Requires `ACCESS_WIFI_STATE` and `CHANGE_WIFI_STATE` permissions on Android
     * @param state {boolean}
     * @returns {Promise<any>}
     */
    Diagnostic.setWifiState = function (state) { return; };
    /**
     * Enables/disables Bluetooth on the device.
     * Requires `BLUETOOTH` and `BLUETOOTH_ADMIN` permissions on Android
     * @param state {boolean}
     * @returns {Promise<any>}
     */
    Diagnostic.setBluetoothState = function (state) { return; };
    /**
     * Returns true if the device setting for location is on. On Android this returns true if Location Mode is switched on. On iOS this returns true if Location Services is switched on.
     * @returns {Promise<boolean>}
     */
    Diagnostic.isLocationEnabled = function () { return; };
    /**
     * Checks if the application is authorized to use location.
     * Note for Android: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return GRANTED status as permissions are already granted at installation time.
     * @returns {Promise<any>}
     */
    Diagnostic.isLocationAuthorized = function () { return; };
    /**
     * Returns the location authorization status for the application.
     * @returns {Promise<any>}
     */
    Diagnostic.getLocationAuthorizationStatus = function () { return; };
    /**
     * Returns the location authorization status for the application.
     * Note for Android: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return GRANTED status as permissions are already granted at installation time.
     *
     * mode - (iOS-only / optional) location authorization mode: "always" or "when_in_use". If not specified, defaults to "when_in_use".
     * @returns {Promise<any>}
     */
    Diagnostic.requestLocationAuthorization = function (mode) { return; };
    /**
     * Checks if camera hardware is present on device.
     * @returns {Promise<any>}
     */
    Diagnostic.isCameraPresent = function () { return; };
    /**
     * Checks if the application is authorized to use the camera.
     * Note for Android: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return TRUE as permissions are already granted at installation time.
     * @returns {Promise<any>}
     */
    Diagnostic.isCameraAuthorized = function () { return; };
    /**
     * Returns the camera authorization status for the application.
     * @returns {Promise<any>}
     */
    Diagnostic.getCameraAuthorizationStatus = function () { return; };
    /**
     * Requests camera authorization for the application.
     * @returns {Promise<any>}
     */
    Diagnostic.requestCameraAuthorization = function () { return; };
    /**
     * Checks if the application is authorized to use the microphone.
     * @returns {Promise<boolean>}
     */
    Diagnostic.isMicrophoneAuthorized = function () { return; };
    /**
     * Returns the microphone authorization status for the application.
     * @returns {Promise<any>}
     */
    Diagnostic.getMicrophoneAuthorizationStatus = function () { return; };
    /**
     * Requests microphone authorization for the application.
     * @returns {Promise<any>}
     */
    Diagnostic.requestMicrophoneAuthorization = function () { return; };
    /**
     * Checks if the application is authorized to use contacts (address book).
     * @returns {Promise<boolean>}
     */
    Diagnostic.isContactsAuthorized = function () { return; };
    /**
     * Returns the contacts authorization status for the application.
     * @returns {Promise<any>}
     */
    Diagnostic.getContactsAuthorizationStatus = function () { return; };
    /**
     * Requests contacts authorization for the application.
     * @returns {Promise<any>}
     */
    Diagnostic.requestContactsAuthorization = function () { return; };
    /**
     * Checks if the application is authorized to use the calendar.
     *
     * Notes for Android:
     *   - This is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return TRUE as permissions are already granted at installation time.
     *
     * Notes for iOS:
     *   - This relates to Calendar Events (not Calendar Reminders)
     * @returns {Promise<boolean>}
     */
    Diagnostic.isCalendarAuthorized = function () { return; };
    /**
     * Returns the calendar authorization status for the application.
     *
     * Notes for Android:
     *   - This is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return `GRANTED` status as permissions are already granted at installation time.
     *
     * Notes for iOS:
     *   - This relates to Calendar Events (not Calendar Reminders)
     *
     * @returns {Promise<any>}
     */
    Diagnostic.getCalendarAuthorizationStatus = function () { return; };
    /**
     * Requests calendar authorization for the application.
     *
     * Notes for iOS:
     *   - Should only be called if authorization status is NOT_DETERMINED. Calling it when in any other state will have no effect and just return the current authorization status.
     *   - This relates to Calendar Events (not Calendar Reminders)
     *
     * Notes for Android:
     *   - This is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will have no effect as the permissions are already granted at installation time.
     *   - This requests permission for `READ_CALENDAR` run-time permission
     *   - Required permissions must be added to `AndroidManifest.xml` as appropriate - see Android permissions: `READ_CALENDAR`, `WRITE_CALENDAR`
     *
     * @returns {Promise<any>}
     */
    Diagnostic.requestCalendarAuthorization = function () { return; };
    /**
     * Opens settings page for this app.
     * On Android, this opens the "App Info" page in the Settings app.
     * On iOS, this opens the app settings page in the Settings app. This works only on iOS 8+ - iOS 7 and below will invoke the errorCallback.
     * @returns {Promise<any>}
     */
    Diagnostic.switchToSettings = function () { return; };
    /**
     * Returns the state of Bluetooth on the device.
     * @returns {Promise<any>}
     */
    Diagnostic.getBluetoothState = function () { return; };
    /**
     * Registers a function to be called when a change in Bluetooth state occurs.
     * @param handler
     */
    Diagnostic.registerBluetoothStateChangeHandler = function (handler) { };
    /**
     * Registers a function to be called when a change in Location state occurs.
     * @param handler
     */
    Diagnostic.registerLocationStateChangeHandler = function (handler) { };
    /**
     * Checks if high-accuracy locations are available to the app from GPS hardware.
     * Returns true if Location mode is enabled and is set to "Device only" or "High accuracy" AND if the app is authorised to use location.
     * @returns {Promise<boolean>}
     */
    Diagnostic.isGpsLocationAvailable = function () { return; };
    /**
     * Checks if location mode is set to return high-accuracy locations from GPS hardware.
     *   Returns true if Location mode is enabled and is set to either:
     *   - Device only = GPS hardware only (high accuracy)
     *   - High accuracy = GPS hardware, network triangulation and Wifi network IDs (high and low accuracy)
     * @returns {Promise<any>}
     */
    Diagnostic.isGpsLocationEnabled = function () { return; };
    /**
     * Checks if low-accuracy locations are available to the app from network triangulation/WiFi access points.
     * Returns true if Location mode is enabled and is set to "Battery saving" or "High accuracy" AND if the app is authorised to use location.
     * @returns {Promise<any>}
     */
    Diagnostic.isNetworkLocationAvailable = function () { return; };
    /**
     * Checks if location mode is set to return low-accuracy locations from network triangulation/WiFi access points.
     * Returns true if Location mode is enabled and is set to either:
     *   - Battery saving = network triangulation and Wifi network IDs (low accuracy)
     *   - High accuracy = GPS hardware, network triangulation and Wifi network IDs (high and low accuracy)
     * @returns {Promise<any>}
     */
    Diagnostic.isNetworkLocationEnabled = function () { return; };
    /**
     * Returns the current location mode setting for the device.
     * @returns {Promise<any>}
     */
    Diagnostic.getLocationMode = function () { return; };
    /**
     * Returns the current authorisation status for a given permission.
     * Note: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return GRANTED status as permissions are already granted at installation time.
     * @param permission
     * @returns {Promise<any>}
     */
    Diagnostic.getPermissionAuthorizationStatus = function (permission) { return; };
    /**
     * Returns the current authorisation status for multiple permissions.
     * Note: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return GRANTED status as permissions are already granted at installation time.
     * @param permissions
     * @returns {Promise<any>}
     */
    Diagnostic.getPermissionsAuthorizationStatus = function (permissions) { return; };
    /**
     * Requests app to be granted authorisation for a runtime permission.
     * Note: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will have no effect as the permissions are already granted at installation time.
     * @param permission
     * @returns {Promise<any>}
     */
    Diagnostic.requestRuntimePermission = function (permission) { return; };
    /**
     * Requests app to be granted authorisation for multiple runtime permissions.
     * Note: this is intended for Android 6 / API 23 and above. Calling on Android 5 / API 22 and below will always return GRANTED status as permissions are already granted at installation time.
     * @param permissions
     * @returns {Promise<any>}
     */
    Diagnostic.requestRuntimePermissions = function (permissions) { return; };
    /**
     * Indicates if the plugin is currently requesting a runtime permission via the native API.
     * Note that only one request can be made concurrently because the native API cannot handle concurrent requests,
     * so the plugin will invoke the error callback if attempting to make more than one simultaneous request.
     * Multiple permission requests should be grouped into a single call since the native API is setup to handle batch requests of multiple permission groups.
     * @returns {boolean}
     */
    Diagnostic.isRequestingPermission = function () { return; };
    /**
     * Registers a function to be called when a runtime permission request has completed.
     * Pass in a falsey value to de-register the currently registered function.
     * @param handler {Function}
     */
    Diagnostic.registerPermissionRequestCompleteHandler = function (handler) { return; };
    /**
     * Checks if the device setting for Bluetooth is switched on.
     * This requires `BLUETOOTH` permission on Android
     * @returns {Promise<boolean>}
     */
    Diagnostic.isBluetoothEnabled = function () { return; };
    /**
     * Checks if the device has Bluetooth capabilities.
     * @returns {Promise<boolean>}
     */
    Diagnostic.hasBluetoothSupport = function () { return; };
    /**
     * Checks if the device has Bluetooth Low Energy (LE) capabilities.
     * @returns {Promise<boolean>}
     */
    Diagnostic.hasBluetoothLESupport = function () { return; };
    /**
     * Checks if the device supports Bluetooth Low Energy (LE) Peripheral mode.
     * @returns {Promise<boolean>}
     */
    Diagnostic.hasBluetoothLEPeripheralSupport = function () { return; };
    /**
     * Checks if the application is authorized to use the Camera Roll in Photos app.
     * @returns {Promise<boolean>}
     */
    Diagnostic.isCameraRollAuthorized = function () { return; };
    /**
     * Returns the authorization status for the application to use the Camera Roll in Photos app.
     * @returns {Promise<boolean>}
     */
    Diagnostic.getCameraRollAuthorizationStatus = function () { return; };
    /**
     * Requests camera roll authorization for the application.
     * Should only be called if authorization status is NOT_REQUESTED.
     * Calling it when in any other state will have no effect.
     * @returns {Promise<any>}
     */
    Diagnostic.requestCameraRollAuthorization = function () { return; };
    /**
     * Checks if remote (push) notifications are enabled.
     * @returns {Promise<boolean>}
     */
    Diagnostic.isRemoteNotificationsEnabled = function () { return; };
    /**
     * Indicates if the app is registered for remote (push) notifications on the device.
     * @returns {Promise<boolean>}
     */
    Diagnostic.isRegisteredForRemoteNotifications = function () { return; };
    /**
     * Indicates the current setting of notification types for the app in the Settings app.
     * Note: on iOS 8+, if "Allow Notifications" switch is OFF, all types will be returned as disabled.
     * @returns {Promise<any>}
     */
    Diagnostic.getRemoteNotificationTypes = function () { return; };
    /**
     * Checks if the application is authorized to use reminders.
     * @returns {Promise<boolean>}
     */
    Diagnostic.isRemindersAuthorized = function () { return; };
    /**
     * Returns the reminders authorization status for the application.
     * @returns {Promise<any>}
     */
    Diagnostic.getRemindersAuthorizationStatus = function () { return; };
    /**
     * Requests reminders authorization for the application.
     * @returns {Promise<any>}
     */
    Diagnostic.requestRemindersAuthorization = function () { return; };
    /**
     * Checks if the application is authorized for background refresh.
     * @returns {Promise<boolean>}
     */
    Diagnostic.isBackgroundRefreshAuthorized = function () { return; };
    /**
     * Returns the background refresh authorization status for the application.
     * @returns {Promise<any>}
     */
    Diagnostic.getBackgroundRefreshStatus = function () { return; };
    Diagnostic.permission = {
        READ_CALENDAR: 'READ_CALENDAR',
        WRITE_CALENDAR: 'WRITE_CALENDAR',
        CAMERA: 'CAMERA',
        READ_CONTACTS: 'READ_CONTACTS',
        WRITE_CONTACTS: 'WRITE_CONTACTS',
        GET_ACCOUNTS: 'GET_ACCOUNTS',
        ACCESS_FINE_LOCATION: 'ACCESS_FINE_LOCATION',
        ACCESS_COARSE_LOCATION: 'ACCESS_COARSE_LOCATION',
        RECORD_AUDIO: 'RECORD_AUDIO',
        READ_PHONE_STATE: 'READ_PHONE_STATE',
        CALL_PHONE: 'CALL_PHONE',
        ADD_VOICEMAIL: 'ADD_VOICEMAIL',
        USE_SIP: 'USE_SIP',
        PROCESS_OUTGOING_CALLS: 'PROCESS_OUTGOING_CALLS',
        READ_CALL_LOG: 'READ_CALL_LOG',
        WRITE_CALL_LOG: 'WRITE_CALL_LOG',
        SEND_SMS: 'SEND_SMS',
        RECEIVE_SMS: 'RECEIVE_SMS',
        READ_SMS: 'READ_SMS',
        RECEIVE_WAP_PUSH: 'RECEIVE_WAP_PUSH',
        RECEIVE_MMS: 'RECEIVE_MMS',
        WRITE_EXTERNAL_STORAGE: 'WRITE_EXTERNAL_STORAGE',
        READ_EXTERNAL_STORAGE: 'READ_EXTERNAL_STORAGE',
        BODY_SENSORS: 'BODY_SENSORS'
    };
    Diagnostic.locationAuthorizationMode = {
        ALWAYS: 'always',
        WHEN_IN_USE: 'when_in_use'
    };
    Diagnostic.permissionGroups = {
        CALENDAR: ['READ_CALENDAR', 'WRITE_CALENDAR'],
        CAMERA: ['CAMERA'],
        CONTACTS: ['READ_CONTACTS', 'WRITE_CONTACTS', 'GET_ACCOUNTS'],
        LOCATION: ['ACCESS_FINE_LOCATION', 'ACCESS_COARSE_LOCATION'],
        MICROPHONE: ['RECORD_AUDIO'],
        PHONE: ['READ_PHONE_STATE', 'CALL_PHONE', 'ADD_VOICEMAIL', 'USE_SIP', 'PROCESS_OUTGOING_CALLS', 'READ_CALL_LOG', 'WRITE_CALL_LOG'],
        SENSORS: ['BODY_SENSORS'],
        SMS: ['SEND_SMS', 'RECEIVE_SMS', 'READ_SMS', 'RECEIVE_WAP_PUSH', 'RECEIVE_MMS'],
        STORAGE: ['READ_EXTERNAL_STORAGE', 'WRITE_EXTERNAL_STORAGE']
    };
    Diagnostic.locationMode = {
        HIGH_ACCURACY: 'high_accuracy',
        DEVICE_ONLY: 'device_only',
        BATTERY_SAVING: 'battery_saving',
        LOCATION_OFF: 'location_off'
    };
    Diagnostic.bluetoothState = {
        UNKNOWN: 'unknown',
        RESETTING: 'resetting',
        UNSUPPORTED: 'unsupported',
        UNAUTHORIZED: 'unauthorized',
        POWERED_OFF: 'powered_off',
        POWERED_ON: 'powered_on',
        POWERING_OFF: 'powering_off',
        POWERING_ON: 'powering_on'
    };
    __decorate([
        plugin_1.CordovaProperty
    ], Diagnostic, "permissionStatus", void 0);
    __decorate([
        plugin_1.Cordova()
    ], Diagnostic, "isLocationAvailable", null);
    __decorate([
        plugin_1.Cordova()
    ], Diagnostic, "isWifiAvailable", null);
    __decorate([
        plugin_1.Cordova()
    ], Diagnostic, "isCameraAvailable", null);
    __decorate([
        plugin_1.Cordova()
    ], Diagnostic, "isBluetoothAvailable", null);
    __decorate([
        plugin_1.Cordova({ sync: true, platforms: ['Android', 'Windows 10'] })
    ], Diagnostic, "switchToLocationSettings", null);
    __decorate([
        plugin_1.Cordova({ sync: true, platforms: ['Android', 'Windows 10'] })
    ], Diagnostic, "switchToMobileDataSettings", null);
    __decorate([
        plugin_1.Cordova({ sync: true, platforms: ['Android', 'Windows 10'] })
    ], Diagnostic, "switchToBluetoothSettings", null);
    __decorate([
        plugin_1.Cordova({ sync: true, platforms: ['Android', 'Windows 10'] })
    ], Diagnostic, "switchToWifiSettings", null);
    __decorate([
        plugin_1.Cordova({ platforms: ['Android', 'Windows 10'] })
    ], Diagnostic, "isWifiEnabled", null);
    __decorate([
        plugin_1.Cordova({ callbackOrder: 'reverse', platforms: ['Android', 'Windows 10'] })
    ], Diagnostic, "setWifiState", null);
    __decorate([
        plugin_1.Cordova({ callbackOrder: 'reverse', platforms: ['Android', 'Windows 10'] })
    ], Diagnostic, "setBluetoothState", null);
    __decorate([
        plugin_1.Cordova({ platforms: ['Android', 'iOS'] })
    ], Diagnostic, "isLocationEnabled", null);
    __decorate([
        plugin_1.Cordova()
    ], Diagnostic, "isLocationAuthorized", null);
    __decorate([
        plugin_1.Cordova({ platforms: ['Android', 'iOS'] })
    ], Diagnostic, "getLocationAuthorizationStatus", null);
    __decorate([
        plugin_1.Cordova({ platforms: ['Android', 'iOS'], callbackOrder: 'reverse' })
    ], Diagnostic, "requestLocationAuthorization", null);
    __decorate([
        plugin_1.Cordova({ platforms: ['Android', 'iOS'] })
    ], Diagnostic, "isCameraPresent", null);
    __decorate([
        plugin_1.Cordova({ platforms: ['Android', 'iOS'] })
    ], Diagnostic, "isCameraAuthorized", null);
    __decorate([
        plugin_1.Cordova({ platforms: ['Android', 'iOS'] })
    ], Diagnostic, "getCameraAuthorizationStatus", null);
    __decorate([
        plugin_1.Cordova({ platforms: ['Android', 'iOS'] })
    ], Diagnostic, "requestCameraAuthorization", null);
    __decorate([
        plugin_1.Cordova({ platforms: ['Android', 'iOS'] })
    ], Diagnostic, "isMicrophoneAuthorized", null);
    __decorate([
        plugin_1.Cordova({ platforms: ['Android', 'iOS'] })
    ], Diagnostic, "getMicrophoneAuthorizationStatus", null);
    __decorate([
        plugin_1.Cordova({ platforms: ['Android', 'iOS'] })
    ], Diagnostic, "requestMicrophoneAuthorization", null);
    __decorate([
        plugin_1.Cordova({ platforms: ['Android', 'iOS'] })
    ], Diagnostic, "isContactsAuthorized", null);
    __decorate([
        plugin_1.Cordova({ platforms: ['Android', 'iOS'] })
    ], Diagnostic, "getContactsAuthorizationStatus", null);
    __decorate([
        plugin_1.Cordova({ platforms: ['Android', 'iOS'] })
    ], Diagnostic, "requestContactsAuthorization", null);
    __decorate([
        plugin_1.Cordova({ platforms: ['Android', 'iOS'] })
    ], Diagnostic, "isCalendarAuthorized", null);
    __decorate([
        plugin_1.Cordova({ platforms: ['Android', 'iOS'] })
    ], Diagnostic, "getCalendarAuthorizationStatus", null);
    __decorate([
        plugin_1.Cordova({ platforms: ['Android', 'iOS'] })
    ], Diagnostic, "requestCalendarAuthorization", null);
    __decorate([
        plugin_1.Cordova({ platforms: ['Android', 'iOS'] })
    ], Diagnostic, "switchToSettings", null);
    __decorate([
        plugin_1.Cordova({ platforms: ['Android', 'iOS'] })
    ], Diagnostic, "getBluetoothState", null);
    __decorate([
        plugin_1.Cordova({ platforms: ['Android', 'iOS'], sync: true })
    ], Diagnostic, "registerBluetoothStateChangeHandler", null);
    __decorate([
        plugin_1.Cordova({ platforms: ['Android', 'iOS'], sync: true })
    ], Diagnostic, "registerLocationStateChangeHandler", null);
    __decorate([
        plugin_1.Cordova({ platforms: ['Android'] })
    ], Diagnostic, "isGpsLocationAvailable", null);
    __decorate([
        plugin_1.Cordova({ platforms: ['Android'] })
    ], Diagnostic, "isGpsLocationEnabled", null);
    __decorate([
        plugin_1.Cordova({ platforms: ['Android'] })
    ], Diagnostic, "isNetworkLocationAvailable", null);
    __decorate([
        plugin_1.Cordova({ platforms: ['Android'] })
    ], Diagnostic, "isNetworkLocationEnabled", null);
    __decorate([
        plugin_1.Cordova({ platforms: ['Android'] })
    ], Diagnostic, "getLocationMode", null);
    __decorate([
        plugin_1.Cordova({ platforms: ['Android'], callbackOrder: 'reverse' })
    ], Diagnostic, "getPermissionAuthorizationStatus", null);
    __decorate([
        plugin_1.Cordova({ platforms: ['Android'], callbackOrder: 'reverse' })
    ], Diagnostic, "getPermissionsAuthorizationStatus", null);
    __decorate([
        plugin_1.Cordova({ platforms: ['Android'], callbackOrder: 'reverse' })
    ], Diagnostic, "requestRuntimePermission", null);
    __decorate([
        plugin_1.Cordova({ platforms: ['Android'], callbackOrder: 'reverse' })
    ], Diagnostic, "requestRuntimePermissions", null);
    __decorate([
        plugin_1.Cordova({ sync: true })
    ], Diagnostic, "isRequestingPermission", null);
    __decorate([
        plugin_1.Cordova({ sync: true })
    ], Diagnostic, "registerPermissionRequestCompleteHandler", null);
    __decorate([
        plugin_1.Cordova({ platforms: ['Android'] })
    ], Diagnostic, "isBluetoothEnabled", null);
    __decorate([
        plugin_1.Cordova({ platforms: ['Android'] })
    ], Diagnostic, "hasBluetoothSupport", null);
    __decorate([
        plugin_1.Cordova({ platforms: ['Android'] })
    ], Diagnostic, "hasBluetoothLESupport", null);
    __decorate([
        plugin_1.Cordova({ platforms: ['Android'] })
    ], Diagnostic, "hasBluetoothLEPeripheralSupport", null);
    __decorate([
        plugin_1.Cordova({ platforms: ['iOS'] })
    ], Diagnostic, "isCameraRollAuthorized", null);
    __decorate([
        plugin_1.Cordova({ platforms: ['iOS'] })
    ], Diagnostic, "getCameraRollAuthorizationStatus", null);
    __decorate([
        plugin_1.Cordova({ platforms: ['iOS'] })
    ], Diagnostic, "requestCameraRollAuthorization", null);
    __decorate([
        plugin_1.Cordova({ platforms: ['iOS'] })
    ], Diagnostic, "isRemoteNotificationsEnabled", null);
    __decorate([
        plugin_1.Cordova({ platforms: ['iOS'] })
    ], Diagnostic, "isRegisteredForRemoteNotifications", null);
    __decorate([
        plugin_1.Cordova({ platforms: ['iOS'] })
    ], Diagnostic, "getRemoteNotificationTypes", null);
    __decorate([
        plugin_1.Cordova({ platforms: ['iOS'] })
    ], Diagnostic, "isRemindersAuthorized", null);
    __decorate([
        plugin_1.Cordova({ platforms: ['iOS'] })
    ], Diagnostic, "getRemindersAuthorizationStatus", null);
    __decorate([
        plugin_1.Cordova({ platforms: ['iOS'] })
    ], Diagnostic, "requestRemindersAuthorization", null);
    __decorate([
        plugin_1.Cordova({ platforms: ['iOS'] })
    ], Diagnostic, "isBackgroundRefreshAuthorized", null);
    __decorate([
        plugin_1.Cordova({ platforms: ['iOS'] })
    ], Diagnostic, "getBackgroundRefreshStatus", null);
    Diagnostic = __decorate([
        plugin_1.Plugin({
            pluginName: 'Diagnostic',
            plugin: 'cordova.plugins.diagnostic',
            pluginRef: 'cordova.plugins.diagnostic',
            repo: 'https://github.com/dpa99c/cordova-diagnostic-plugin'
        })
    ], Diagnostic);
    return Diagnostic;
}());
exports.Diagnostic = Diagnostic;

},{"./plugin":82}],37:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name Dialogs
 * @description
 * This plugin gives you ability to access and customize the device native dialogs.
 *
 * Requires Cordova plugin: `cordova-plugin-dialogs`. For more info, please see the [Dialogs plugin docs](https://github.com/apache/cordova-plugin-dialogs).
 *
 * @usage
 * ```typescript
 * import { Dialogs } from 'ionic-native';
 *
 *
 *
 *
 * ```
 * @interfaces
 * DialogsPromptCallback
 */
var Dialogs = (function () {
    function Dialogs() {
    }
    /**
     * Shows a custom alert or dialog box.
     * @param {string} message Dialog message.
     * @param {string} title Dialog title. (Optional, defaults to Alert)
     * @param {string} buttonName Button name. (Optional, defaults to OK)
     * @returns {Promise<any>} Returns a blank promise once the user has dismissed the alert.
     */
    Dialogs.alert = function (message, title, buttonName) {
        if (title === void 0) { title = 'Alert'; }
        if (buttonName === void 0) { buttonName = 'OK'; }
        return;
    };
    /**
     * Displays a customizable confirmation dialog box.
     * @param {string} message Dialog message.
     * @param {string} title Dialog title. (Optional, defaults to Confirm)
     * @param {Array<string>} buttonLabels Array of strings specifying button labels. (Optional, defaults to [OK,Cancel])
     * @returns {Promise<number>} Returns a promise that resolves the button index that was clicked. Note that the index use one-based indexing.
     */
    Dialogs.confirm = function (message, title, buttonLabels) {
        if (title === void 0) { title = 'Confirm'; }
        if (buttonLabels === void 0) { buttonLabels = ['OK', 'Cancel']; }
        return;
    };
    /**
     * Displays a native dialog box that is more customizable than the browser's prompt function.
     * @param {string} message Dialog message.
     * @param {string} title Dialog title. (Optional, defaults to Prompt)
     * @param {Array<string>} buttonLabels  Array of strings specifying button labels. (Optional, defaults to ["OK","Cancel"])
     * @param {string} defaultText Default textbox input value.  (Optional, Default: empty string)
     * @returns {Promise<DialogsPromptCallback>} Returns a promise that resolves an object with the button index clicked and the text entered
     */
    Dialogs.prompt = function (message, title, buttonLabels, defaultText) {
        if (title === void 0) { title = 'Prompt'; }
        if (buttonLabels === void 0) { buttonLabels = ['OK', 'Cancel']; }
        if (defaultText === void 0) { defaultText = ''; }
        return;
    };
    /**
     * The device plays a beep sound.
     * @param {numbers} times The number of times to repeat the beep.
     */
    Dialogs.beep = function (times) { };
    __decorate([
        plugin_1.Cordova({
            successIndex: 1,
            errorIndex: 4
        })
    ], Dialogs, "alert", null);
    __decorate([
        plugin_1.Cordova({
            successIndex: 1,
            errorIndex: 4
        })
    ], Dialogs, "confirm", null);
    __decorate([
        plugin_1.Cordova({
            successIndex: 1,
            errorIndex: 5
        })
    ], Dialogs, "prompt", null);
    __decorate([
        plugin_1.Cordova({
            sync: true
        })
    ], Dialogs, "beep", null);
    Dialogs = __decorate([
        plugin_1.Plugin({
            pluginName: 'Dialogs',
            plugin: 'cordova-plugin-dialogs',
            pluginRef: 'navigator.notification',
            repo: 'https://github.com/apache/cordova-plugin-dialogs.git'
        })
    ], Dialogs);
    return Dialogs;
}());
exports.Dialogs = Dialogs;

},{"./plugin":82}],38:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name Email Composer
 * @description
 *
 * Requires Cordova plugin: cordova-plugin-email-composer. For more info, please see the [Email Composer plugin docs](https://github.com/hypery2k/cordova-email-plugin).
 *
 * DISCLAIMER: This plugin is experiencing issues with the latest versions of Cordova. Use at your own risk. Functionality is not guaranteed. Please stay tuned for a more stable version.
 * A good alternative to this plugin is the social sharing plugin.
 *
 * @usage
 * ```typescript
 * import { EmailComposer } from 'ionic-native';
 *
 *
 * EmailComposer.isAvailable().then((available: boolean) =>{
 *  if(available) {
 *    //Now we know we can send
 *  }
 * });
 *
 * let email = {
 *   to: 'max@mustermann.de',
 *   cc: 'erika@mustermann.de',
 *   bcc: ['john@doe.com', 'jane@doe.com'],
 *   attachments: [
 *     'file://img/logo.png',
 *     'res://icon.png',
 *     'base64:icon.png//iVBORw0KGgoAAAANSUhEUg...',
 *     'file://README.pdf'
 *   ],
 *   subject: 'Cordova Icons',
 *   body: 'How are you? Nice greetings from Leipzig',
 *   isHtml: true
 * };
 *
 * // Send a text message using default options
 * EmailComposer.open(email);
 *
 * ```
 * @interfaces
 * EmailComposerOptions
 */
var EmailComposer = (function () {
    function EmailComposer() {
    }
    /**
     * Verifies if sending emails is supported on the device.
     *
     * @param app {string?} An optional app id or uri scheme.
     * @returns {Promise<any>} Resolves if available, rejects if not available
     */
    EmailComposer.isAvailable = function (app) {
        return new Promise(function (resolve, reject) {
            if (app) {
                cordova.plugins.email.isAvailable(app, function (isAvailable) {
                    if (isAvailable) {
                        resolve();
                    }
                    else {
                        reject();
                    }
                });
            }
            else {
                cordova.plugins.email.isAvailable(function (isAvailable) {
                    if (isAvailable) {
                        resolve();
                    }
                    else {
                        reject();
                    }
                });
            }
        });
    };
    /**
     * Adds a new mail app alias.
     *
     * @param alias {string} The alias name
     * @param packageName {string} The package name
     */
    EmailComposer.addAlias = function (alias, packageName) { };
    /**
     * Displays the email composer pre-filled with data.
     *
     * @param options {EmailComposerOptions} Email
     * @param scope {any?} An optional scope for the promise
     * @returns {Promise<any>} Resolves promise when the EmailComposer has been opened
     */
    EmailComposer.open = function (options, scope) { return; };
    __decorate([
        plugin_1.Cordova()
    ], EmailComposer, "addAlias", null);
    __decorate([
        plugin_1.Cordova({
            successIndex: 1,
            errorIndex: 3
        })
    ], EmailComposer, "open", null);
    EmailComposer = __decorate([
        plugin_1.Plugin({
            pluginName: 'EmailComposer',
            plugin: 'cordova-plugin-email',
            pluginRef: 'cordova.plugins.email',
            repo: 'https://github.com/hypery2k/cordova-email-plugin',
            platforms: ['Android', 'iOS']
        })
    ], EmailComposer);
    return EmailComposer;
}());
exports.EmailComposer = EmailComposer;

},{"./plugin":82}],39:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name EstimoteBeacons
 *
 * @description
 * This plugin enables communication between a phone and Estimote Beacons peripherals.
 *
 * @interfaces
 * EstimoteBeaconRegion
 */
var EstimoteBeacons = (function () {
    function EstimoteBeacons() {
    }
    /**
     * Ask the user for permission to use location services
     * while the app is in the foreground.
     * You need to call this function or requestAlwaysAuthorization
     * on iOS 8+.
     * Does nothing on other platforms.
     *
     * @usage
     * ```
     * EstimoteBeacons.requestWhenInUseAuthorization().then(
     *   () => { console.log('on success'); },
     *   () => { console.log('on error'); }
     * );
     * ```
     *
     * @see {@link https://community.estimote.com/hc/en-us/articles/203393036-Estimote-SDK-and-iOS-8-Location-Services|Estimote SDK and iOS 8 Location Services}
     * @returns {Promise<any>}
     */
    EstimoteBeacons.requestWhenInUseAuthorization = function () { return; };
    /**
     * Ask the user for permission to use location services
     * whenever the app is running.
     * You need to call this function or requestWhenInUseAuthorization
     * on iOS 8+.
     * Does nothing on other platforms.
     *
     * @usage
     * ```
     * EstimoteBeacons.requestAlwaysAuthorization().then(
     *   () => { console.log('on success'); },
     *   () => { console.log('on error'); }
     * );
     * ```
     *
     * @see {@link https://community.estimote.com/hc/en-us/articles/203393036-Estimote-SDK-and-iOS-8-Location-Services|Estimote SDK and iOS 8 Location Services}
     * @returns {Promise<any>}
     */
    EstimoteBeacons.requestAlwaysAuthorization = function () { return; };
    /**
     * Get the current location authorization status.
     * Implemented on iOS 8+.
     * Does nothing on other platforms.
     *
     * @usage
     * ```
     * EstimoteBeacons.authorizationStatus().then(
     *   (result) => { console.log('Location authorization status: ' + result); },
     *   (errorMessage) => { console.log('Error: ' + errorMessage); }
     * );
     * ```
     *
     * @see {@link https://community.estimote.com/hc/en-us/articles/203393036-Estimote-SDK-and-iOS-8-Location-Services|Estimote SDK and iOS 8 Location Services}
     * @returns {Promise<any>}
     */
    EstimoteBeacons.authorizationStatus = function () { return; };
    /**
     * Start advertising as a beacon.
     *
     * @usage
     * ```
     * EstimoteBeacons.startAdvertisingAsBeacon('B9407F30-F5F8-466E-AFF9-25556B57FE6D', 1, 1, 'MyRegion')
     *    .then(() => { console.log('Beacon started'); });
     * setTimeout(() => {
     *   EstimoteBeacons.stopAdvertisingAsBeacon().then((result) => { console.log('Beacon stopped'); });
     * }, 5000);
     * ```
     * @param uuid {string} UUID string the beacon should advertise (mandatory).
     * @param major {number} Major value to advertise (mandatory).
     * @param minor {number} Minor value to advertise (mandatory).
     * @param regionId {string} Identifier of the region used to advertise (mandatory).
     * @returns {Promise<any>}
     */
    EstimoteBeacons.startAdvertisingAsBeacon = function (uuid, major, minor, regionId) { return; };
    /**
     * Stop advertising as a beacon.
     *
     * @usage
     * ```
     * EstimoteBeacons.startAdvertisingAsBeacon('B9407F30-F5F8-466E-AFF9-25556B57FE6D', 1, 1, 'MyRegion')
     *    .then(() => { console.log('Beacon started'); });
     * setTimeout(() => {
     *   EstimoteBeacons.stopAdvertisingAsBeacon().then((result) => { console.log('Beacon stopped'); });
     * }, 5000);
     * ```
     * @returns {Promise<any>}
     */
    EstimoteBeacons.stopAdvertisingAsBeacon = function () { return; };
    /**
     * Enable analytics.
     *
     * @see {@link http://estimote.github.io/iOS-SDK/Classes/ESTConfig.html|Further details}
     *
     * @usage
     * ```
     * EstimoteBeacons.enableAnalytics(true).then(() => { console.log('Analytics enabled'); });
     * ```
     * @param enable {number} Boolean value to turn analytics on or off (mandatory).
     * @returns {Promise<any>}
     */
    EstimoteBeacons.enableAnalytics = function (enable) { return; };
    /**
    * Test if analytics is enabled.
    *
    * @see {@link http://estimote.github.io/iOS-SDK/Classes/ESTConfig.html|Further details}
     *
     * @usage
     * ```
     * EstimoteBeacons.isAnalyticsEnabled().then((enabled) => { console.log('Analytics enabled: ' + enabled); });
     * ```
     * @returns {Promise<any>}
     */
    EstimoteBeacons.isAnalyticsEnabled = function () { return; };
    /**
    * Test if App ID and App Token is set.
    *
    * @see {@link http://estimote.github.io/iOS-SDK/Classes/ESTConfig.html|Further details}
     *
     * @usage
     * ```
     * EstimoteBeacons.isAuthorized().then((isAuthorized) => { console.log('App ID and App Token is set: ' + isAuthorized); });
     * ```
     * @returns {Promise<any>}
     */
    EstimoteBeacons.isAuthorized = function () { return; };
    /**
    * Set App ID and App Token.
    *
    * @see {@link http://estimote.github.io/iOS-SDK/Classes/ESTConfig.html|Further details}
     *
     * @usage
     * ```
     * EstimoteBeacons.setupAppIDAndAppToken('MyAppID', 'MyAppToken').then(() => { console.log('AppID and AppToken configured!'); });
     * ```
     * @param appID {string} The App ID (mandatory).
     * @param appToken {string} The App Token (mandatory).
     * @returns {Promise<any>}
     */
    EstimoteBeacons.setupAppIDAndAppToken = function (appID, appToken) { return; };
    /**
     * Start scanning for all nearby beacons using CoreBluetooth (no region object is used).
     * Available on iOS.
     *
     * @usage
     * ```
     * EstimoteBeacons.startEstimoteBeaconDiscovery().subscribe(beacons => {
     *   console.log(JSON.stringify(beacons));
     * });
     * setTimeout(() => {
     *   EstimoteBeacons.stopEstimoteBeaconDiscovery().then(() => { console.log('scan stopped'); });
     * }, 5000);
     * ```
     * @returns {Observable<any>} Returns an Observable that notifies of each beacon discovered.
     */
    EstimoteBeacons.startEstimoteBeaconDiscovery = function () { return; };
    /**
     * Stop CoreBluetooth scan. Available on iOS.
     *
     * @usage
     * ```
     * EstimoteBeacons.startEstimoteBeaconDiscovery().subscribe(beacons => {
     *   console.log(JSON.stringify(beacons));
     * });
     * setTimeout(() => {
     *   EstimoteBeacons.stopEstimoteBeaconDiscovery().then(() => { console.log('scan stopped'); });
     * }, 5000);
     * ```
     * @returns {Promise<any>}
     */
    EstimoteBeacons.stopEstimoteBeaconDiscovery = function () { return; };
    /**
     * Start ranging beacons. Available on iOS and Android.
     *
     * @usage
     * ```
     * let region: EstimoteBeaconRegion = {} // Empty region matches all beacons.
     * EstimoteBeacons.startRangingBeaconsInRegion(region).subscribe(info => {
     *   console.log(JSON.stringify(info));
     * });
     * setTimeout(() => {
     *   EstimoteBeacons.stopRangingBeaconsInRegion(region).then(() => { console.log('scan stopped'); });
     * }, 5000);
     * ```
     * @param region {EstimoteBeaconRegion} Dictionary with region properties (mandatory).
     * @returns {Observable<any>} Returns an Observable that notifies of each beacon discovered.
     */
    EstimoteBeacons.startRangingBeaconsInRegion = function (region) { return; };
    /**
     * Stop ranging beacons. Available on iOS and Android.
     *
     * @usage
     * ```
     * let region: EstimoteBeaconRegion = {} // Empty region matches all beacons.
     * EstimoteBeacons.startRangingBeaconsInRegion(region).subscribe(info => {
     *   console.log(JSON.stringify(info));
     * });
     * setTimeout(() => {
     *   EstimoteBeacons.stopRangingBeaconsInRegion(region).then(() => { console.log('scan stopped'); });
     * }, 5000);
     * ```
     * @param region {EstimoteBeaconRegion} Dictionary with region properties (mandatory).
     * @returns {Promise<any>}
     */
    EstimoteBeacons.stopRangingBeaconsInRegion = function (region) { return; };
    /**
     * Start ranging secure beacons. Available on iOS.
     * This function has the same parameters/behaviour as
     * {@link EstimoteBeacons.startRangingBeaconsInRegion}.
     * To use secure beacons set the App ID and App Token using
     * {@link EstimoteBeacons.setupAppIDAndAppToken}.
     * @returns {Observable<any>}
     */
    EstimoteBeacons.startRangingSecureBeaconsInRegion = function (region) { return; };
    /**
     * Stop ranging secure beacons. Available on iOS.
     * This function has the same parameters/behaviour as
     * {@link EstimoteBeacons.stopRangingBeaconsInRegion}.
     * @returns {Promise<any>}
     */
    EstimoteBeacons.stopRangingSecureBeaconsInRegion = function (region) { return; };
    /**
     * Start monitoring beacons. Available on iOS and Android.
     *
     * @usage
     * ```
     * let region: EstimoteBeaconRegion = {} // Empty region matches all beacons.
     * EstimoteBeacons.startMonitoringForRegion(region).subscribe(state => {
     *   console.log('Region state: ' + JSON.stringify(state));
     * });
     * ```
     * @param region {EstimoteBeaconRegion} Dictionary with region properties (mandatory).
     * @param [notifyEntryStateOnDisplay=false] {boolean} Set to true to detect if you
     * are inside a region when the user turns display on, see
     * {@link https://developer.apple.com/library/prerelease/ios/documentation/CoreLocation/Reference/CLBeaconRegion_class/index.html#//apple_ref/occ/instp/CLBeaconRegion/notifyEntryStateOnDisplay|iOS documentation}
     * for further details (optional, defaults to false, iOS only).
     * @returns {Observable<any>} Returns an Observable that notifies of each region state discovered.
     */
    EstimoteBeacons.startMonitoringForRegion = function (region, notifyEntryStateOnDisplay) { return; };
    /**
     * Stop monitoring beacons. Available on iOS and Android.
     *
     * @usage
     * ```
     * let region: EstimoteBeaconRegion = {} // Empty region matches all beacons.
     * EstimoteBeacons.stopMonitoringForRegion(region).then(() => { console.log('monitoring is stopped'); });
     * ```
     * @param region {EstimoteBeaconRegion} Dictionary with region properties (mandatory).
     * @returns {Promise<any>}
     */
    EstimoteBeacons.stopMonitoringForRegion = function (region) { return; };
    /**
     * Start monitoring secure beacons. Available on iOS.
     * This function has the same parameters/behaviour as
     * EstimoteBeacons.startMonitoringForRegion.
     * To use secure beacons set the App ID and App Token using
     * {@link EstimoteBeacons.setupAppIDAndAppToken}.
     * @see {@link EstimoteBeacons.startMonitoringForRegion}
     * @param region {EstimoteBeaconRegion} Region
     * @param notifyEntryStateOnDisplay {boolean}
     * @returns {Observable<any>}
     */
    EstimoteBeacons.startSecureMonitoringForRegion = function (region, notifyEntryStateOnDisplay) { return; };
    /**
    * Stop monitoring secure beacons. Available on iOS.
    * This function has the same parameters/behaviour as
    * {@link EstimoteBeacons.stopMonitoringForRegion}.
    * @param region {EstimoteBeaconRegion} Region
    * @returns {Promise<any>}
    */
    EstimoteBeacons.stopSecureMonitoringForRegion = function (region) { return; };
    /**
     * Connect to Estimote Beacon. Available on Android.
     *
     * @usage
     * ```
     * EstimoteBeacons.connectToBeacon(FF:0F:F0:00:F0:00);
     * ```
     * ```
     * EstimoteBeacons.connectToBeacon({
     *     proximityUUID: '000000FF-F00F-0FF0-F000-000FF0F00000',
     *     major: 1,
     *     minor: 1
     *   });
     * ```
     * @param beacon {Beacon} Beacon to connect to.
     * @returns {Promise<any>}
     */
    EstimoteBeacons.connectToBeacon = function (beacon) { return; };
    /**
     * Disconnect from connected Estimote Beacon. Available on Android.
     *
     * @usage
     * ```
     * EstimoteBeacons.disconnectConnectedBeacon();
     * ```
     * @returns {Promise<any>}
     */
    EstimoteBeacons.disconnectConnectedBeacon = function () { return; };
    /**
     * Write proximity UUID to connected Estimote Beacon. Available on Android.
     *
     * @usage
     * ```
     * // Example that writes constant ESTIMOTE_PROXIMITY_UUID
     * EstimoteBeacons.writeConnectedProximityUUID(ESTIMOTE_PROXIMITY_UUID);
     *
     * @param uuid {string} String to write as new UUID
     * @returns {Promise<any>}
     */
    EstimoteBeacons.writeConnectedProximityUUID = function (uuid) { return; };
    /**
     * Write major to connected Estimote Beacon. Available on Android.
     *
     * @usage
     * ```
     * // Example that writes 1
     * EstimoteBeacons.writeConnectedMajor(1);
     *
     * @param major {number} number to write as new major
     * @returns {Promise<any>}
     */
    EstimoteBeacons.writeConnectedMajor = function (major) { return; };
    /**
     * Write minor to connected Estimote Beacon. Available on Android.
     *
     * @usage
     * ```
     * // Example that writes 1
     * EstimoteBeacons.writeConnectedMinor(1);
     *
     * @param minor {number} number to write as new minor
     * @returns {Promise<any>}
     */
    EstimoteBeacons.writeConnectedMinor = function (minor) { return; };
    /** Proximity value */
    EstimoteBeacons.ProximityUnknown = 0;
    /** Proximity value */
    EstimoteBeacons.ProximityImmediate = 1;
    /** Proximity value */
    EstimoteBeacons.ProximityNear = 2;
    /** Proximity value */
    EstimoteBeacons.ProximityFar = 3;
    /** Beacon colour */
    EstimoteBeacons.BeaconColorUnknown = 0;
    /** Beacon colour */
    EstimoteBeacons.BeaconColorMintCocktail = 1;
    /** Beacon colour */
    EstimoteBeacons.BeaconColorIcyMarshmallow = 2;
    /** Beacon colour */
    EstimoteBeacons.BeaconColorBlueberryPie = 3;
    /**
     * Beacon colour.
     */
    EstimoteBeacons.BeaconColorSweetBeetroot = 4;
    /** Beacon colour */
    EstimoteBeacons.BeaconColorCandyFloss = 5;
    /** Beacon colour */
    EstimoteBeacons.BeaconColorLemonTart = 6;
    /** Beacon colour */
    EstimoteBeacons.BeaconColorVanillaJello = 7;
    /** Beacon colour */
    EstimoteBeacons.BeaconColorLiquoriceSwirl = 8;
    /** Beacon colour */
    EstimoteBeacons.BeaconColorWhite = 9;
    /** Beacon colour */
    EstimoteBeacons.BeaconColorTransparent = 10;
    /** Region state */
    EstimoteBeacons.RegionStateUnknown = 'unknown';
    /** Region state */
    EstimoteBeacons.RegionStateOutside = 'outside';
    /** Region state */
    EstimoteBeacons.RegionStateInside = 'inside';
    __decorate([
        plugin_1.Cordova()
    ], EstimoteBeacons, "requestWhenInUseAuthorization", null);
    __decorate([
        plugin_1.Cordova()
    ], EstimoteBeacons, "requestAlwaysAuthorization", null);
    __decorate([
        plugin_1.Cordova()
    ], EstimoteBeacons, "authorizationStatus", null);
    __decorate([
        plugin_1.Cordova({
            clearFunction: 'stopAdvertisingAsBeacon'
        })
    ], EstimoteBeacons, "startAdvertisingAsBeacon", null);
    __decorate([
        plugin_1.Cordova()
    ], EstimoteBeacons, "stopAdvertisingAsBeacon", null);
    __decorate([
        plugin_1.Cordova()
    ], EstimoteBeacons, "enableAnalytics", null);
    __decorate([
        plugin_1.Cordova()
    ], EstimoteBeacons, "isAnalyticsEnabled", null);
    __decorate([
        plugin_1.Cordova()
    ], EstimoteBeacons, "isAuthorized", null);
    __decorate([
        plugin_1.Cordova()
    ], EstimoteBeacons, "setupAppIDAndAppToken", null);
    __decorate([
        plugin_1.Cordova({
            observable: true,
            clearFunction: 'stopEstimoteBeaconDiscovery'
        })
    ], EstimoteBeacons, "startEstimoteBeaconDiscovery", null);
    __decorate([
        plugin_1.Cordova()
    ], EstimoteBeacons, "stopEstimoteBeaconDiscovery", null);
    __decorate([
        plugin_1.Cordova({
            observable: true,
            clearFunction: 'stopRangingBeaconsInRegion',
            clearWithArgs: true
        })
    ], EstimoteBeacons, "startRangingBeaconsInRegion", null);
    __decorate([
        plugin_1.Cordova()
    ], EstimoteBeacons, "stopRangingBeaconsInRegion", null);
    __decorate([
        plugin_1.Cordova({
            observable: true,
            clearFunction: 'stopRangingSecureBeaconsInRegion',
            clearWithArgs: true
        })
    ], EstimoteBeacons, "startRangingSecureBeaconsInRegion", null);
    __decorate([
        plugin_1.Cordova()
    ], EstimoteBeacons, "stopRangingSecureBeaconsInRegion", null);
    __decorate([
        plugin_1.Cordova({
            observable: true,
            clearFunction: 'stopMonitoringForRegion',
            clearWithArgs: true,
            successIndex: 1,
            errorIndex: 2
        })
    ], EstimoteBeacons, "startMonitoringForRegion", null);
    __decorate([
        plugin_1.Cordova()
    ], EstimoteBeacons, "stopMonitoringForRegion", null);
    __decorate([
        plugin_1.Cordova({
            observable: true,
            clearFunction: 'stopSecureMonitoringForRegion',
            clearWithArgs: true,
            successIndex: 1,
            errorIndex: 2
        })
    ], EstimoteBeacons, "startSecureMonitoringForRegion", null);
    __decorate([
        plugin_1.Cordova()
    ], EstimoteBeacons, "stopSecureMonitoringForRegion", null);
    __decorate([
        plugin_1.Cordova()
    ], EstimoteBeacons, "connectToBeacon", null);
    __decorate([
        plugin_1.Cordova()
    ], EstimoteBeacons, "disconnectConnectedBeacon", null);
    __decorate([
        plugin_1.Cordova()
    ], EstimoteBeacons, "writeConnectedProximityUUID", null);
    __decorate([
        plugin_1.Cordova()
    ], EstimoteBeacons, "writeConnectedMajor", null);
    __decorate([
        plugin_1.Cordova()
    ], EstimoteBeacons, "writeConnectedMinor", null);
    EstimoteBeacons = __decorate([
        plugin_1.Plugin({
            pluginName: 'EstimoteBeacons',
            plugin: 'cordova-plugin-estimote',
            pluginRef: 'estimote.beacons',
            repo: 'https://github.com/evothings/phonegap-estimotebeacons',
            platforms: ['iOS', 'Android']
        })
    ], EstimoteBeacons);
    return EstimoteBeacons;
}());
exports.EstimoteBeacons = EstimoteBeacons;

},{"./plugin":82}],40:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name Facebook
 * @description
 * Use the Facebook Connect plugin to obtain access to the native FB application on iOS and Android.
 *
 * Requires Cordova plugin: `cordova-plugin-facebook4`. For more info, please see the [Facebook Connect](https://github.com/jeduan/cordova-plugin-facebook4).
 *
 * #### Installation
 *
 *  To use the FB plugin, you first have to create a new Facebook App inside of the Facebook developer portal at [https://developers.facebook.com/apps](https://developers.facebook.com/apps).
 *
 * [![fb-getstarted-1](/img/docs/native/Facebook/1.png)](https://developers.facebook.com/apps/)
 *
 * Retrieve the `App ID` and `App Name`.
 *
 * [![fb-getstarted-2](/img/docs/native/Facebook/2.png)](https://developers.facebook.com/apps/)
 *
 * Then type in the following command in your Terminal, where APP_ID and APP_NAME are the values from the Facebook Developer portal.
 *
 * ```bash
 *  ionic plugin add cordova-plugin-facebook4 --save --variable APP_ID="123456789" --variable APP_NAME="myApplication"
 * ```
 *
 * After, you'll need to add the native platforms you'll be using to your app in the Facebook Developer portal under your app's Settings:
 *
 * [![fb-getstarted-3](/img/docs/native/Facebook/3.png)](https://developers.facebook.com/apps/)
 *
 * Click `'Add Platform'`.
 *
 * [![fb-getstarted-4](/img/docs/native/Facebook/4.png)](https://developers.facebook.com/apps/)
 *
 * At this point you'll need to open your project's [`config.xml`](https://cordova.apache.org/docs/en/latest/config_ref/index.html) file, found in the root directory of your project.
 *
 * Take note of the `id` for the next step:
 * ```
 * <widget id="com.mycompany.testapp" version="0.0.1" xmlns="http://www.w3.org/ns/widgets" xmlns:cdv="http://cordova.apache.org/ns/1.0">
 * ```
 *
 * You can also edit the `id` to whatever you'd like it to be.
 *
 * #### iOS Install
 * Under 'Bundle ID', add the `id` from your `config.xml` file:
 *
 * [![fb-getstarted-5](/img/docs/native/Facebook/5.png)](https://developers.facebook.com/apps/)
 *
 *
 * #### Android Install
 * Under 'Google Play Package Name', add the `id` from your `config.xml` file:
 *
 * [![fb-getstarted-6](/img/docs/native/Facebook/6.png)](https://developers.facebook.com/apps/)
 *
 *
 * And that's it! You can now make calls to Facebook using the plugin.
 *
 * ## Events
 *
 * App events allow you to understand the makeup of users engaging with your app, measure the performance of your Facebook mobile app ads, and reach specific sets of your users with Facebook mobile app ads.
 *
 * - [iOS] [https://developers.facebook.com/docs/ios/app-events](https://developers.facebook.com/docs/ios/app-events)
 * - [Android] [https://developers.facebook.com/docs/android/app-events](https://developers.facebook.com/docs/android/app-events)
 * - [JS] Does not have an Events API, so the plugin functions are empty and will return an automatic success
 *
 * Activation events are automatically tracked for you in the plugin.
 *
 * Events are listed on the [insights page](https://www.facebook.com/insights/).
 *
 * For tracking events, see `logEvent` and `logPurchase`.
 *
 * @usage
 * ```typescript
 * import { Facebook } from 'ionic-native';
 *
 *
 *
 * ```
 *
 */
var Facebook = (function () {
    function Facebook() {
    }
    /**
     * Browser wrapper
     * @param {number} appId Your Facebook AppID from their dashboard
     * @param {string} version The version of API you may want to use. Optional
     * @returns {Promise<any>}
     */
    Facebook.browserInit = function (appId, version) {
        return;
    };
    /**
     * Login to Facebook to authenticate this app.
     *
     * ```typescript
     * {
     *   status: "connected",
     *   authResponse: {
     *     session_key: true,
     *     accessToken: "kgkh3g42kh4g23kh4g2kh34g2kg4k2h4gkh3g4k2h4gk23h4gk2h34gk234gk2h34AndSoOn",
     *     expiresIn: 5183979,
     *     sig: "...",
     *     secret: "...",
     *     userID: "634565435"
     *   }
     * }
     * ```
     *
     * @param {string[]}  permissions List of [permissions](https://developers.facebook.com/docs/facebook-login/permissions) this app has upon logging in.
     * @returns {Promise<FacebookLoginResponse>} Returns a Promise that resolves with a status object if login succeeds, and rejects if login fails.
     */
    Facebook.login = function (permissions) { return; };
    /**
     * Logout of Facebook.
     *
     * For more info see the [Facebook docs](https://developers.facebook.com/docs/reference/javascript/FB.logout)
     * @returns {Promise<any>} Returns a Promise that resolves on a successful logout, and rejects if logout fails.
     */
    Facebook.logout = function () { return; };
    /**
     * Determine if a user is logged in to Facebook and has authenticated your app.  There are three possible states for a user:
     *
     * 1) the user is logged into Facebook and has authenticated your application (connected)
     * 2) the user is logged into Facebook but has not authenticated your application (not_authorized)
     * 3) the user is either not logged into Facebook or explicitly logged out of your application so it doesn't attempt to connect to Facebook and thus, we don't know if they've authenticated your application or not (unknown)
     *
     * Resolves with a response like:
     *
     * ```
     * {
     *   authResponse: {
     *     userID: "12345678912345",
     *     accessToken: "kgkh3g42kh4g23kh4g2kh34g2kg4k2h4gkh3g4k2h4gk23h4gk2h34gk234gk2h34AndSoOn",
     *     session_Key: true,
     *     expiresIn: "5183738",
     *     sig: "..."
     *   },
     *   status: "connected"
     * }
     * ```
     *
     * For more information see the [Facebook docs](https://developers.facebook.com/docs/reference/javascript/FB.getLoginStatus)
     *
     * @returns {Promise<any>} Returns a Promise that resolves with a status, or rejects with an error
     */
    Facebook.getLoginStatus = function () { return; };
    /**
     * Get a Facebook access token for using Facebook services.
     *
     * @returns {Promise<string>} Returns a Promise that resolves with an access token, or rejects with an error
     */
    Facebook.getAccessToken = function () { return; };
    /**
     * Show one of various Facebook dialogs. Example of options for a Share dialog:
     *
     * ```
     * {
     *   method: "share",
     *   href: "http://example.com",
     *   caption: "Such caption, very feed.",
     *   description: "Much description",
     *   picture: 'http://example.com/image.png'
     * }
     * ```
     *
     * For more options see the [Cordova plugin docs](https://github.com/jeduan/cordova-plugin-facebook4#show-a-dialog) and the [Facebook docs](https://developers.facebook.com/docs/javascript/reference/FB.ui)
     * @param {Object} options The dialog options
     * @returns {Promise<any>} Returns a Promise that resolves with success data, or rejects with an error
     */
    Facebook.showDialog = function (options) { return; };
    /**
     * Make a call to Facebook Graph API. Can take additional permissions beyond those granted on login.
     *
     * For more information see:
     *
     *  Calling the Graph API - https://developers.facebook.com/docs/javascript/reference/FB.api
     *  Graph Explorer - https://developers.facebook.com/tools/explorer
     *  Graph API - https://developers.facebook.com/docs/graph-api
     *
     * @param {string}  requestPath Graph API endpoint you want to call
     * @param {string[]}  permissions List of [permissions](https://developers.facebook.com/docs/facebook-login/permissions) for this request.
     * @returns {Promise<any>} Returns a Promise that resolves with the result of the request, or rejects with an error
     */
    Facebook.api = function (requestPath, permissions) { return; };
    /**
     * Log an event.  For more information see the Events section above.
     *
     * @param {string}  name Name of the event
     * @param {Object}  [params] An object containing extra data to log with the event
     * @param {number}  [valueToSum] any value to be added to added to a sum on each event
     * @returns {Promise<any>}
     */
    Facebook.logEvent = function (name, params, valueToSum) { return; };
    /**
     * Log a purchase. For more information see the Events section above.
     *
     * @param {number}  value Value of the purchase.
     * @param {string}  currency The currency, as an [ISO 4217 currency code](http://en.wikipedia.org/wiki/ISO_4217)
     * @returns {Promise<any>}
     */
    Facebook.logPurchase = function (value, currency) { return; };
    /**
     * Open App Invite dialog. Does not require login.
     *
     * For more information see:
     *
     *   the App Invites Overview - https://developers.facebook.com/docs/app-invites/overview
     *   the App Links docs - https://developers.facebook.com/docs/applinks
     *
     *
     * @param {Object}  options An object containing an [App Link](https://developers.facebook.com/docs/applinks) URL to your app and an optional image URL.
     *   url: [App Link](https://developers.facebook.com/docs/applinks) to your app
     *   picture: image to be displayed in the App Invite dialog
     *
     * @returns {Promise<any>} Returns a Promise that resolves with the result data, or rejects with an error
     */
    Facebook.appInvite = function (options) { return; };
    __decorate([
        plugin_1.Cordova()
    ], Facebook, "browserInit", null);
    __decorate([
        plugin_1.Cordova()
    ], Facebook, "login", null);
    __decorate([
        plugin_1.Cordova()
    ], Facebook, "logout", null);
    __decorate([
        plugin_1.Cordova()
    ], Facebook, "getLoginStatus", null);
    __decorate([
        plugin_1.Cordova()
    ], Facebook, "getAccessToken", null);
    __decorate([
        plugin_1.Cordova()
    ], Facebook, "showDialog", null);
    __decorate([
        plugin_1.Cordova()
    ], Facebook, "api", null);
    __decorate([
        plugin_1.Cordova()
    ], Facebook, "logEvent", null);
    __decorate([
        plugin_1.Cordova()
    ], Facebook, "logPurchase", null);
    __decorate([
        plugin_1.Cordova()
    ], Facebook, "appInvite", null);
    Facebook = __decorate([
        plugin_1.Plugin({
            pluginName: 'Facebook',
            plugin: 'cordova-plugin-facebook4',
            pluginRef: 'facebookConnectPlugin',
            repo: 'https://github.com/jeduan/cordova-plugin-facebook4',
            install: 'ionic plugin add cordova-plugin-facebook4 --variable APP_ID="123456789" --variable APP_NAME="myApplication"'
        })
    ], Facebook);
    return Facebook;
}());
exports.Facebook = Facebook;

},{"./plugin":82}],41:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name FileChooser
 * @description
 *
 * Opens the file picker on Android for the user to select a file, returns a file URI.
 *
 * @usage
 * ```
 * import {FileChooser} from 'ionic-native';
 *
 * FileChooser.open()
 *   .then(uri => console.log(uri);
 *   .catch(e => console.log(e);
 *
 * ```
 */
var FileChooser = (function () {
    function FileChooser() {
    }
    /**
     * Open a file
     * @returns {Promise<string>}
     */
    FileChooser.open = function () { return; };
    __decorate([
        plugin_1.Cordova()
    ], FileChooser, "open", null);
    FileChooser = __decorate([
        plugin_1.Plugin({
            pluginName: 'FileChooser',
            plugin: 'http://github.com/don/cordova-filechooser.git',
            pluginRef: 'fileChooser',
            repo: 'https://github.com/don/cordova-filechooser',
            platforms: ['Android']
        })
    ], FileChooser);
    return FileChooser;
}());
exports.FileChooser = FileChooser;

},{"./plugin":82}],42:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name FileOpener
 * @description
 * This plugin will open a file on your device file system with its default application.
 *
 * @usage
 * ```
 * import {FileOpener} from 'ionic-native';
 *
 *
 *
 * ```
 */
var FileOpener = (function () {
    function FileOpener() {
    }
    /**
     * Open an file
     * @param filePath {string} File Path
     * @param fileMIMEType {string} File MIME Type
     * @returns {Promise<any>}
     */
    FileOpener.open = function (filePath, fileMIMEType) { return; };
    /**
     * Uninstalls a package
     * @param packageId {string}  Package ID
     * @returns {Promise<any>}
     */
    FileOpener.uninstall = function (packageId) { return; };
    /**
     * Check if an app is already installed
     * @param packageId {string} Package ID
     * @returns {Promise<any>}
     */
    FileOpener.appIsInstalled = function (packageId) { return; };
    __decorate([
        plugin_1.Cordova({
            callbackStyle: 'object',
            successName: 'success',
            errorName: 'error'
        })
    ], FileOpener, "open", null);
    __decorate([
        plugin_1.Cordova({
            callbackStyle: 'object',
            successName: 'success',
            errorName: 'error'
        })
    ], FileOpener, "uninstall", null);
    __decorate([
        plugin_1.Cordova({
            callbackStyle: 'object',
            successName: 'success',
            errorName: 'error'
        })
    ], FileOpener, "appIsInstalled", null);
    FileOpener = __decorate([
        plugin_1.Plugin({
            pluginName: 'FileOpener',
            plugin: 'cordova-plugin-file-opener2',
            pluginRef: 'cordova.plugins.fileOpener2',
            repo: 'https://github.com/pwlin/cordova-plugin-file-opener2'
        })
    ], FileOpener);
    return FileOpener;
}());
exports.FileOpener = FileOpener;

},{"./plugin":82}],43:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name File
 * @description
 * This plugin implements a File API allowing read/write access to files residing on the device.
 *
 * The File class implements static convenience functions to access files and directories.
 *
 * Example:
 * ```
 * import { File } from 'ionic-native';
 *
 * declare var cordova: any;
 * const fs:string = cordova.file.dataDirectory;
 * File.checkDir(this.fs, 'mydir').then(_ => console.log('yay')).catch(err => console.log('boooh'));
 * ```
 *
 *  This plugin is based on several specs, including : The HTML5 File API http://www.w3.org/TR/FileAPI/
 *  The (now-defunct) Directories and System extensions Latest: http://www.w3.org/TR/2012/WD-file-system-api-20120417/
 *  Although most of the plugin code was written when an earlier spec was current: http://www.w3.org/TR/2011/WD-file-system-api-20110419/
 *  It also implements the FileWriter spec : http://dev.w3.org/2009/dap/file-system/file-writer.html
 */
var File = (function () {
    function File() {
    }
    /**
     * Get free disk space
     * @returns {Promise<number>} Returns a promise that resolves with the remaining free disk space
     */
    File.getFreeDiskSpace = function () {
        return new Promise(function (resolve, reject) {
            if (!cordova || !cordova.exec) {
                plugin_1.pluginWarn({
                    pluginName: 'File',
                    plugin: 'cordova-plugin-file'
                });
                reject({ error: 'plugin_not_installed' });
            }
            else {
                cordova.exec(resolve, reject, 'File', 'getFreeDiskSpace', []);
            }
        });
    };
    /**
     * Check if a directory exists in a certain path, directory.
     *
     * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystems above
     * @param {string} dir Name of directory to check
     * @returns {Promise<boolean|FileError>} Returns a Promise that resolves to true if the directory exists or rejects with an error.
     */
    File.checkDir = function (path, dir) {
        if ((/^\//.test(dir))) {
            var err = new FileError(5);
            err.message = 'directory cannot start with \/';
            return Promise.reject(err);
        }
        var fullpath = path + dir;
        return File.resolveDirectoryUrl(fullpath)
            .then(function () {
            return true;
        });
    };
    /**
     * Creates a new directory in the specific path.
     * The replace boolean value determines whether to replace an existing directory with the same name.
     * If an existing directory exists and the replace value is false, the promise will fail and return an error.
     *
     * @param {string} path  Base FileSystem. Please refer to the iOS and Android filesystems above
     * @param {string} dirName Name of directory to create
     * @param {boolean} replace If true, replaces file with same name. If false returns error
     * @returns {Promise<DirectoryEntry|FileError>} Returns a Promise that resolves with a DirectoryEntry or rejects with an error.
     */
    File.createDir = function (path, dirName, replace) {
        if ((/^\//.test(dirName))) {
            var err = new FileError(5);
            err.message = 'directory cannot start with \/';
            return Promise.reject(err);
        }
        var options = {
            create: true
        };
        if (!replace) {
            options.exclusive = true;
        }
        return File.resolveDirectoryUrl(path)
            .then(function (fse) {
            return File.getDirectory(fse, dirName, options);
        });
    };
    /**
     * Remove a directory at a given path.
     *
     * @param {string} path The path to the directory
     * @param {string} dirName The directory name
     * @returns {Promise<RemoveResult|FileError>} Returns a Promise that resolves to a RemoveResult or rejects with an error.
     */
    File.removeDir = function (path, dirName) {
        if ((/^\//.test(dirName))) {
            var err = new FileError(5);
            err.message = 'directory cannot start with \/';
            return Promise.reject(err);
        }
        return File.resolveDirectoryUrl(path)
            .then(function (fse) {
            return File.getDirectory(fse, dirName, { create: false });
        })
            .then(function (de) {
            return File.remove(de);
        });
    };
    /**
     * Move a directory to a given path.
     *
     * @param {string} path The source path to the directory
     * @param {string} dirName The source directory name
     * @param {string} newPath The destionation path to the directory
     * @param {string} newDirName The destination directory name
     * @returns {Promise<DirectoryEntry|Entry|FileError>} Returns a Promise that resolves to the new DirectoryEntry object or rejects with an error.
     */
    File.moveDir = function (path, dirName, newPath, newDirName) {
        var _this = this;
        newDirName = newDirName || dirName;
        if ((/^\//.test(newDirName))) {
            var err = new FileError(5);
            err.message = 'directory cannot start with \/';
            return Promise.reject(err);
        }
        return this.resolveDirectoryUrl(path)
            .then(function (fse) {
            return _this.getDirectory(fse, dirName, { create: false });
        })
            .then(function (srcde) {
            return _this.resolveDirectoryUrl(newPath)
                .then(function (deste) {
                return File.move(srcde, deste, newDirName);
            });
        });
    };
    /**
     * Copy a directory in various methods. If destination directory exists, will fail to copy.
     *
     * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystems above
     * @param {string} dirName Name of directory to copy
     * @param {string} newPath Base FileSystem of new location
     * @param {string} newDirName New name of directory to copy to (leave blank to remain the same)
     * @returns {Promise<Entry|FileError>} Returns a Promise that resolves to the new Entry object or rejects with an error.
     */
    File.copyDir = function (path, dirName, newPath, newDirName) {
        var _this = this;
        if ((/^\//.test(newDirName))) {
            var err = new FileError(5);
            err.message = 'directory cannot start with \/';
            return Promise.reject(err);
        }
        return this.resolveDirectoryUrl(path)
            .then(function (fse) {
            return _this.getDirectory(fse, dirName, { create: false });
        })
            .then(function (srcde) {
            return _this.resolveDirectoryUrl(newPath)
                .then(function (deste) {
                return File.copy(srcde, deste, newDirName);
            });
        });
    };
    /**
     * List files and directory from a given path.
     *
     * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystems above
     * @param {string} dirName Name of directory
     * @returns {Promise<Entry[]>} Returns a Promise that resolves to an array of Entry objects or rejects with an error.
     */
    File.listDir = function (path, dirName) {
        if ((/^\//.test(dirName))) {
            var err = new FileError(5);
            err.message = 'directory cannot start with \/';
            return Promise.reject(err);
        }
        return File.resolveDirectoryUrl(path)
            .then(function (fse) {
            return File.getDirectory(fse, dirName, { create: false, exclusive: false });
        })
            .then(function (de) {
            var reader = de.createReader();
            return File.readEntries(reader);
        });
    };
    /**
     * Removes all files and the directory from a desired location.
     *
     * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystems above
     * @param {string} dirName Name of directory
     * @returns {Promise<RemoveResult>} Returns a Promise that resolves with a RemoveResult or rejects with an error.
     */
    File.removeRecursively = function (path, dirName) {
        if ((/^\//.test(dirName))) {
            var err = new FileError(5);
            err.message = 'directory cannot start with \/';
            return Promise.reject(err);
        }
        return File.resolveDirectoryUrl(path)
            .then(function (fse) {
            return File.getDirectory(fse, dirName, { create: false });
        })
            .then(function (de) {
            return File.rimraf(de);
        });
    };
    /**
     * Check if a file exists in a certain path, directory.
     *
     * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystems above
     * @param {string} file Name of file to check
     * @returns {Promise<boolean|FileError>} Returns a Promise that resolves with a boolean or rejects with an error.
     */
    File.checkFile = function (path, file) {
        if ((/^\//.test(file))) {
            var err = new FileError(5);
            err.message = 'file cannot start with \/';
            return Promise.reject(err);
        }
        return File.resolveLocalFilesystemUrl(path + file)
            .then(function (fse) {
            if (fse.isFile) {
                return true;
            }
            else {
                var err = new FileError(13);
                err.message = 'input is not a file';
                return Promise.reject(err);
            }
        });
    };
    /**
     * Creates a new file in the specific path.
     * The replace boolean value determines whether to replace an existing file with the same name.
     * If an existing file exists and the replace value is false, the promise will fail and return an error.
     *
     * @param {string} path  Base FileSystem. Please refer to the iOS and Android filesystems above
     * @param {string} fileName Name of file to create
     * @param {boolean} replace If true, replaces file with same name. If false returns error
     * @returns {Promise<FileEntry|FileError>} Returns a Promise that resolves to a FileEntry or rejects with an error.
     */
    File.createFile = function (path, fileName, replace) {
        if ((/^\//.test(fileName))) {
            var err = new FileError(5);
            err.message = 'file-name cannot start with \/';
            return Promise.reject(err);
        }
        var options = {
            create: true
        };
        if (!replace) {
            options.exclusive = true;
        }
        return File.resolveDirectoryUrl(path)
            .then(function (fse) {
            return File.getFile(fse, fileName, options);
        });
    };
    /**
     * Removes a file from a desired location.
     *
     * @param {string} path  Base FileSystem. Please refer to the iOS and Android filesystems above
     * @param {string} fileName Name of file to remove
     * @returns {Promise<RemoveResult|FileError>} Returns a Promise that resolves to a RemoveResult or rejects with an error.
     */
    File.removeFile = function (path, fileName) {
        if ((/^\//.test(fileName))) {
            var err = new FileError(5);
            err.message = 'file-name cannot start with \/';
            return Promise.reject(err);
        }
        return File.resolveDirectoryUrl(path)
            .then(function (fse) {
            return File.getFile(fse, fileName, { create: false });
        })
            .then(function (fe) {
            return File.remove(fe);
        });
    };
    /** Write a new file to the desired location.
     *
     * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystems above
     * @param {string} fileName path relative to base path
     * @param {string | Blob} text content or blob to write
     * @param {WriteOptions} options replace file if set to true. See WriteOptions for more information.
     * @returns {Promise<any>} Returns a Promise that resolves to updated file entry or rejects with an error.
     */
    File.writeFile = function (path, fileName, text, options) {
        if (options === void 0) { options = {}; }
        if ((/^\//.test(fileName))) {
            var err = new FileError(5);
            err.message = 'file-name cannot start with \/';
            return Promise.reject(err);
        }
        var getFileOpts = {
            create: !options.append,
            exclusive: !options.replace
        };
        return File.resolveDirectoryUrl(path)
            .then(function (fse) {
            return File.getFile(fse, fileName, getFileOpts);
        })
            .then(function (fe) {
            return File.writeFileEntry(fe, text, options);
        });
    };
    /** Write content to FileEntry.
     *
     * @private
     * @param {FileEntry} fe file entry object
     * @param {string | Blob} text content or blob to write
     * @param {WriteOptions} options replace file if set to true. See WriteOptions for more information.
     * @returns {Promise<FileEntry>} Returns a Promise that resolves to updated file entry or rejects with an error.
     */
    File.writeFileEntry = function (fe, text, options) {
        return File.createWriter(fe)
            .then(function (writer) {
            if (options.append) {
                writer.seek(writer.length);
            }
            if (options.truncate) {
                writer.truncate(options.truncate);
            }
            return File.write(writer, text);
        })
            .then(function () { return fe; });
    };
    /** Write to an existing file.
     *
     * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystems above
     * @param {string} fileName path relative to base path
     * @param {string | Blob} text content or blob to write
     * @returns {Promise<void>} Returns a Promise that resolves or rejects with an error.
     */
    File.writeExistingFile = function (path, fileName, text) {
        return File.writeFile(path, fileName, text, { create: false });
    };
    /**
     * Read the contents of a file as text.
     *
     * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystems above
     * @param {string} file Name of file, relative to path.
     * @returns {Promise<string|FileError>} Returns a Promise that resolves with the contents of the file as string or rejects with an error.
     */
    File.readAsText = function (path, file) {
        if ((/^\//.test(file))) {
            var err = new FileError(5);
            err.message = 'file-name cannot start with \/';
            return Promise.reject(err);
        }
        return File.resolveDirectoryUrl(path)
            .then(function (fse) {
            return File.getFile(fse, file, { create: false });
        })
            .then(function (fe) {
            var reader = new FileReader();
            return new Promise(function (resolve, reject) {
                reader.onloadend = function () {
                    if (reader.result !== undefined || reader.result !== null) {
                        resolve(reader.result);
                    }
                    else if (reader.error !== undefined || reader.error !== null) {
                        reject(reader.error);
                    }
                    else {
                        reject({ code: null, message: 'READER_ONLOADEND_ERR' });
                    }
                };
                fe.file(function (file) {
                    reader.readAsText(file);
                }, function (error) {
                    reject(error);
                });
            });
        });
    };
    /**
     * Read file and return data as a base64 encoded data url.
     * A data url is of the form:
     *      data:[<mediatype>][;base64],<data>
  
     * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystems above
     * @param {string} file Name of file, relative to path.
     * @returns {Promise<string|FileError>} Returns a Promise that resolves with the contents of the file as data URL or rejects with an error.
     */
    File.readAsDataURL = function (path, file) {
        if ((/^\//.test(file))) {
            var err = new FileError(5);
            err.message = 'file-name cannot start with \/';
            return Promise.reject(err);
        }
        return File.resolveDirectoryUrl(path)
            .then(function (fse) {
            return File.getFile(fse, file, { create: false });
        })
            .then(function (fe) {
            var reader = new FileReader();
            return new Promise(function (resolve, reject) {
                reader.onloadend = function () {
                    if (reader.result !== undefined || reader.result !== null) {
                        resolve(reader.result);
                    }
                    else if (reader.error !== undefined || reader.error !== null) {
                        reject(reader.error);
                    }
                    else {
                        reject({ code: null, message: 'READER_ONLOADEND_ERR' });
                    }
                };
                fe.file(function (file) {
                    reader.readAsDataURL(file);
                }, function (error) {
                    reject(error);
                });
            });
        });
    };
    /**
     * Read file and return data as a binary data.
  
     * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystems above
     * @param {string} file Name of file, relative to path.
     * @returns {Promise<string|FileError>} Returns a Promise that resolves with the contents of the file as string rejects with an error.
     */
    File.readAsBinaryString = function (path, file) {
        if ((/^\//.test(file))) {
            var err = new FileError(5);
            err.message = 'file-name cannot start with \/';
            return Promise.reject(err);
        }
        return File.resolveDirectoryUrl(path)
            .then(function (fse) {
            return File.getFile(fse, file, { create: false });
        })
            .then(function (fe) {
            var reader = new FileReader();
            return new Promise(function (resolve, reject) {
                reader.onloadend = function () {
                    if (reader.result !== undefined || reader.result !== null) {
                        resolve(reader.result);
                    }
                    else if (reader.error !== undefined || reader.error !== null) {
                        reject(reader.error);
                    }
                    else {
                        reject({ code: null, message: 'READER_ONLOADEND_ERR' });
                    }
                };
                fe.file(function (file) {
                    reader.readAsBinaryString(file);
                }, function (error) {
                    reject(error);
                });
            });
        });
    };
    /**
     * Read file and return data as an ArrayBuffer.
  
     * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystems above
     * @param {string} file Name of file, relative to path.
     * @returns {Promise<ArrayBuffer|FileError>} Returns a Promise that resolves with the contents of the file as ArrayBuffer or rejects with an error.
     */
    File.readAsArrayBuffer = function (path, file) {
        if ((/^\//.test(file))) {
            var err = new FileError(5);
            err.message = 'file-name cannot start with \/';
            return Promise.reject(err);
        }
        return File.resolveDirectoryUrl(path)
            .then(function (fse) {
            return File.getFile(fse, file, { create: false });
        })
            .then(function (fe) {
            var reader = new FileReader();
            return new Promise(function (resolve, reject) {
                reader.onloadend = function () {
                    if (reader.result !== undefined || reader.result !== null) {
                        resolve(reader.result);
                    }
                    else if (reader.error !== undefined || reader.error !== null) {
                        reject(reader.error);
                    }
                    else {
                        reject({ code: null, message: 'READER_ONLOADEND_ERR' });
                    }
                };
                fe.file(function (file) {
                    reader.readAsArrayBuffer(file);
                }, function (error) {
                    reject(error);
                });
            });
        });
    };
    /**
     * Move a file to a given path.
     *
     * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystems above
     * @param {string} fileName Name of file to move
     * @param {string} newPath Base FileSystem of new location
     * @param {string} newFileName New name of file to move to (leave blank to remain the same)
     * @returns {Promise<Entry|FileError>} Returns a Promise that resolves to the new Entry or rejects with an error.
     */
    File.moveFile = function (path, fileName, newPath, newFileName) {
        var _this = this;
        newFileName = newFileName || fileName;
        if ((/^\//.test(newFileName))) {
            var err = new FileError(5);
            err.message = 'file name cannot start with \/';
            return Promise.reject(err);
        }
        return this.resolveDirectoryUrl(path)
            .then(function (fse) {
            return _this.getFile(fse, fileName, { create: false });
        })
            .then(function (srcfe) {
            return _this.resolveDirectoryUrl(newPath)
                .then(function (deste) {
                return File.move(srcfe, deste, newFileName);
            });
        });
    };
    /**
     * Copy a file in various methods. If file exists, will fail to copy.
     *
     * @param {string} path Base FileSystem. Please refer to the iOS and Android filesystems above
     * @param {string} fileName Name of file to copy
     * @param {string} newPath Base FileSystem of new location
     * @param {string} newFileName New name of file to copy to (leave blank to remain the same)
     * @returns {Promise<Entry|FileError>} Returns a Promise that resolves to an Entry or rejects with an error.
     */
    File.copyFile = function (path, fileName, newPath, newFileName) {
        var _this = this;
        newFileName = newFileName || fileName;
        if ((/^\//.test(newFileName))) {
            var err = new FileError(5);
            err.message = 'file name cannot start with \/';
            return Promise.reject(err);
        }
        return this.resolveDirectoryUrl(path)
            .then(function (fse) {
            return _this.getFile(fse, fileName, { create: false });
        })
            .then(function (srcfe) {
            return _this.resolveDirectoryUrl(newPath)
                .then(function (deste) {
                return File.copy(srcfe, deste, newFileName);
            });
        });
    };
    // these private methods help avoid cascading error handling
    // in the public ones, primarily simply wrapping callback
    // operations to return Promises that can then be chained.
    /**
     * @private
     */
    File.fillErrorMessage = function (err) {
        err.message = File.cordovaFileError[err.code];
    };
    /**
     * Resolves a local file system URL
     * @param fileUrl {string} file system url
     * @returns {Promise<Entry>}
     */
    File.resolveLocalFilesystemUrl = function (fileUrl) {
        return new Promise(function (resolve, reject) {
            try {
                window.resolveLocalFileSystemURL(fileUrl, function (entry) {
                    resolve(entry);
                }, function (err) {
                    File.fillErrorMessage(err);
                    reject(err);
                });
            }
            catch (xc) {
                File.fillErrorMessage(xc);
                reject(xc);
            }
        });
    };
    /**
     * Resolves a local directory url
     * @param directoryUrl {string} directory system url
     * @returns {Promise<DirectoryEntry>}
     */
    File.resolveDirectoryUrl = function (directoryUrl) {
        return File.resolveLocalFilesystemUrl(directoryUrl)
            .then(function (de) {
            if (de.isDirectory) {
                return de;
            }
            else {
                var err = new FileError(13);
                err.message = 'input is not a directory';
                return Promise.reject(err);
            }
        });
    };
    /**
     * Get a directory
     * @param directoryEntry {DirectoryEntry} Directory entry, obtained by resolveDirectoryUrl method
     * @param directoryName {string} Directory name
     * @param flags {Flags} Options
     * @returns {Promise<DirectoryEntry>}
     */
    File.getDirectory = function (directoryEntry, directoryName, flags) {
        return new Promise(function (resolve, reject) {
            try {
                directoryEntry.getDirectory(directoryName, flags, function (de) {
                    resolve(de);
                }, function (err) {
                    File.fillErrorMessage(err);
                    reject(err);
                });
            }
            catch (xc) {
                File.fillErrorMessage(xc);
                reject(xc);
            }
        });
    };
    /**
     * Get a file
     * @param directoryEntry {DirectoryEntry} Directory entry, obtained by resolveDirectoryUrl method
     * @param fileName {string} File name
     * @param flags {Flags} Options
     * @returns {Promise<FileEntry>}
     */
    File.getFile = function (directoryEntry, fileName, flags) {
        return new Promise(function (resolve, reject) {
            try {
                directoryEntry.getFile(fileName, flags, resolve, function (err) {
                    File.fillErrorMessage(err);
                    reject(err);
                });
            }
            catch (xc) {
                File.fillErrorMessage(xc);
                reject(xc);
            }
        });
    };
    /**
     * @private
     */
    File.remove = function (fe) {
        return new Promise(function (resolve, reject) {
            fe.remove(function () {
                resolve({ success: true, fileRemoved: fe });
            }, function (err) {
                File.fillErrorMessage(err);
                reject(err);
            });
        });
    };
    /**
     * @private
     */
    File.move = function (srce, destdir, newName) {
        return new Promise(function (resolve, reject) {
            srce.moveTo(destdir, newName, function (deste) {
                resolve(deste);
            }, function (err) {
                File.fillErrorMessage(err);
                reject(err);
            });
        });
    };
    /**
     * @private
     */
    File.copy = function (srce, destdir, newName) {
        return new Promise(function (resolve, reject) {
            srce.copyTo(destdir, newName, function (deste) {
                resolve(deste);
            }, function (err) {
                File.fillErrorMessage(err);
                reject(err);
            });
        });
    };
    /**
     * @private
     */
    File.readEntries = function (dr) {
        return new Promise(function (resolve, reject) {
            dr.readEntries(function (entries) {
                resolve(entries);
            }, function (err) {
                File.fillErrorMessage(err);
                reject(err);
            });
        });
    };
    /**
     * @private
     */
    File.rimraf = function (de) {
        return new Promise(function (resolve, reject) {
            de.removeRecursively(function () {
                resolve({ success: true, fileRemoved: de });
            }, function (err) {
                File.fillErrorMessage(err);
                reject(err);
            });
        });
    };
    /**
     * @private
     */
    File.createWriter = function (fe) {
        return new Promise(function (resolve, reject) {
            fe.createWriter(function (writer) {
                resolve(writer);
            }, function (err) {
                File.fillErrorMessage(err);
                reject(err);
            });
        });
    };
    /**
     * @private
     */
    File.write = function (writer, gu) {
        if (gu instanceof Blob) {
            return this.writeFileInChunks(writer, gu);
        }
        return new Promise(function (resolve, reject) {
            writer.onwriteend = function (evt) {
                if (writer.error) {
                    reject(writer.error);
                }
                else {
                    resolve(evt);
                }
            };
            writer.write(gu);
        });
    };
    /**
     * @private
     */
    File.writeFileInChunks = function (writer, file) {
        var BLOCK_SIZE = 1024 * 1024;
        var writtenSize = 0;
        function writeNextChunk() {
            var size = Math.min(BLOCK_SIZE, file.size - writtenSize);
            var chunk = file.slice(writtenSize, writtenSize + size);
            writtenSize += size;
            writer.write(chunk);
        }
        return new Promise(function (resolve, reject) {
            writer.onerror = reject;
            writer.onwrite = function () {
                if (writtenSize < file.size) {
                    writeNextChunk();
                }
                else {
                    resolve();
                }
            };
            writeNextChunk();
        });
    };
    File.cordovaFileError = {
        1: 'NOT_FOUND_ERR',
        2: 'SECURITY_ERR',
        3: 'ABORT_ERR',
        4: 'NOT_READABLE_ERR',
        5: 'ENCODING_ERR',
        6: 'NO_MODIFICATION_ALLOWED_ERR',
        7: 'INVALID_STATE_ERR',
        8: 'SYNTAX_ERR',
        9: 'INVALID_MODIFICATION_ERR',
        10: 'QUOTA_EXCEEDED_ERR',
        11: 'TYPE_MISMATCH_ERR',
        12: 'PATH_EXISTS_ERR',
        13: 'WRONG_ENTRY_TYPE',
        14: 'DIR_READ_ERR',
    };
    File = __decorate([
        plugin_1.Plugin({
            pluginName: 'File',
            plugin: 'cordova-plugin-file',
            pluginRef: 'cordova.file',
            repo: 'https://github.com/apache/cordova-plugin-file'
        })
    ], File);
    return File;
}());
exports.File = File;

},{"./plugin":82}],44:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name FilePath
 * @description
 *
 * This plugin allows you to resolve the native filesystem path for Android content URIs and is based on code in the aFileChooser library.
 *
 * @usage
 * ```
 * import {FilePath} from 'ionic-native';
 *
 * FilePath.resolveNativePath(path)
 *   .then(filePath => console.log(filePath);
 *   .catch(err => console.log(err);
 *
 * ```
 */
var FilePath = (function () {
    function FilePath() {
    }
    /**
     * Resolve native path for given content URL/path.
     * @param {String} path  Content URL/path.
     * @returns {Promise<string>}
     */
    FilePath.resolveNativePath = function (path) { return; };
    __decorate([
        plugin_1.Cordova()
    ], FilePath, "resolveNativePath", null);
    FilePath = __decorate([
        plugin_1.Plugin({
            pluginName: 'FilePath',
            plugin: 'cordova-plugin-filepath',
            pluginRef: 'window.FilePath',
            repo: 'https://github.com/hiddentao/cordova-plugin-filepath',
            platforms: ['Android']
        })
    ], FilePath);
    return FilePath;
}());
exports.FilePath = FilePath;

},{"./plugin":82}],45:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name Transfer
 *
 * @description
 * This plugin allows you to upload and download files.
 *
 * @usage
 * ```typescript
 * import { Transfer } from 'ionic-native';
 *
 *
 * // Create instance:
 * const fileTransfer = new Transfer();
 *
 * // Upload a file:
 * fileTransfer.upload(..).then(..).catch(..);
 *
 * // Download a file:
 * fileTransfer.download(..).then(..).catch(..);
 *
 * // Abort active transfer:
 * fileTransfer.abort();
 *
 * E.g
 *
 * upload(){
 *   const fileTransfer = new Transfer();
 *   var options: any;
 *
 *   options = {
 *      fileKey: 'file',
 *      fileName: 'name.jpg',
 *      headers: {}
 *      .....
 *   }
 *   fileTransfer.upload("<file path>", "<api endpoint>", options)
 *    .then((data) => {
 *      // success
 *    }, (err) => {
 *      // error
 *    })
 * }
 *
 * // Cordova
 * declare var cordova: any;
 *
 * download() {
 *   const fileTransfer = new Transfer();
 *   let url = 'http://www.example.com/file.pdf';
 *   fileTransfer.download(url, cordova.file.dataDirectory + 'file.pdf').then((entry) => {
 *     console.log('download complete: ' + entry.toURL());
 *   }, (error) => {
 *     // handle error
 *   });
 * }
 *
 * ```
 *
 * Note: You will not see your documents using a file explorer on your device. Use adb:
 *
 * ```
 * adb shell
 * run-as com.your.app
 * cd files
 * ls
 * ```
 * @interfaces
 * FileUploadOptions
 * FileUploadResult
 * FileTransferError
 */
var Transfer = (function () {
    function Transfer() {
        this._objectInstance = new FileTransfer();
    }
    /**
     * Sends a file to a server.
     *
     * @param {string} fileUrl  Filesystem URL representing the file on the device or a data URI. For backwards compatibility, this can also be the full path of the file on the device.
     * @param {string} url  URL of the server to receive the file, as encoded by encodeURI().
     * @param {FileUploadOptions} options  Optional parameters.
     * @param {boolean} trustAllHosts  Optional parameter, defaults to false. If set to true, it accepts all security certificates. This is useful since Android rejects self-signed security certificates. Not recommended for production use. Supported on Android and iOS.
     * @returns {Promise<FileUploadResult>} Returns a Promise that resolves to a FileUploadResult and rejects with FileTransferError.
     */
    Transfer.prototype.upload = function (fileUrl, url, options, trustAllHosts) {
        return;
    };
    /**
     * Downloads a file from server.
     *
     * @param {string} source  URL of the server to download the file, as encoded by encodeURI().
     * @param {stirng} target  Filesystem url representing the file on the device. For backwards compatibility, this can also be the full path of the file on the device.
     * @param {boolean} trustAllHosts  Optional parameter, defaults to false. If set to true, it accepts all security certificates. This is useful because Android rejects self-signed security certificates. Not recommended for production use. Supported on Android and iOS.
     * @param {object} Optional parameters, currently only supports headers (such as Authorization (Basic Authentication), etc).
     * @returns {Promise<any>} Returns a Promise that resolves to a FileEntry object.
     */
    Transfer.prototype.download = function (source, target, trustAllHosts, options) {
        return;
    };
    /**
     * Registers a listener that gets called whenever a new chunk of data is transferred.
     * @param {function} Listener that takes a progress event.
     */
    Transfer.prototype.onProgress = function (listener) {
        this._objectInstance.onprogress = listener;
    };
    /**
     * Aborts an in-progress transfer. The onerror callback is passed a FileTransferError
     * object which has an error code of FileTransferError.ABORT_ERR.
     */
    Transfer.prototype.abort = function () { };
    /**
     * Error code rejected from upload with FileTransferError
     * Defined in FileTransferError.
     *      FILE_NOT_FOUND_ERR: 1   Return when file was not found
     *      INVALID_URL_ERR: 2,     Return when url was invalid
     *      CONNECTION_ERR: 3,      Return on connection error
     *      ABORT_ERR: 4,           Return on aborting
     *      NOT_MODIFIED_ERR: 5     Return on "304 Not Modified" HTTP response
     * @enum {number}
     */
    Transfer.FileTransferErrorCode = {
        FILE_NOT_FOUND_ERR: 1,
        INVALID_URL_ERR: 2,
        CONNECTION_ERR: 3,
        ABORT_ERR: 4,
        NOT_MODIFIED_ERR: 5
    };
    __decorate([
        plugin_1.CordovaInstance({
            successIndex: 2,
            errorIndex: 3
        })
    ], Transfer.prototype, "upload", null);
    __decorate([
        plugin_1.CordovaInstance({
            successIndex: 2,
            errorIndex: 3
        })
    ], Transfer.prototype, "download", null);
    __decorate([
        plugin_1.CordovaInstance({
            sync: true
        })
    ], Transfer.prototype, "abort", null);
    Transfer = __decorate([
        plugin_1.Plugin({
            pluginName: 'FileTransfer',
            plugin: 'cordova-plugin-file-transfer',
            pluginRef: 'FileTransfer',
            repo: 'https://github.com/apache/cordova-plugin-file-transfer'
        })
    ], Transfer);
    return Transfer;
}());
exports.Transfer = Transfer;

},{"./plugin":82}],46:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name Flashlight
 * @description This plugin allows you to switch the flashlight / torch of the device on and off.
 *
 * Requires Cordova plugin: `cordova-plugin-flashlight`. For more info, please see the [Flashlight plugin docs](https://github.com/EddyVerbruggen/Flashlight-PhoneGap-Plugin).
 *
 * @usage
 * ```typescript
 * import { Flashlight } from 'ionic-native';
 *
 *
 *
 * ```
 */
var Flashlight = (function () {
    function Flashlight() {
    }
    /**
     * Checks if the flashlight is available
     * @returns {Promise<boolean>} Returns a promise that resolves with a boolean stating if the flashlight is available.
     */
    Flashlight.available = function () { return; };
    /**
     * Switches the flashlight on
     * @returns {Promise<boolean>}
     */
    Flashlight.switchOn = function () { return; };
    /**
     * Switches the flashlight off
     * @returns {Promise<boolean>}
     */
    Flashlight.switchOff = function () { return; };
    /**
     * Toggles the flashlight
     * @returns {Promise<any>}
     */
    Flashlight.toggle = function () { return; };
    /**
     * Checks if the flashlight is turned on.
     * @returns {boolean}
     */
    Flashlight.isSwitchedOn = function () { return; };
    __decorate([
        plugin_1.Cordova()
    ], Flashlight, "available", null);
    __decorate([
        plugin_1.Cordova()
    ], Flashlight, "switchOn", null);
    __decorate([
        plugin_1.Cordova()
    ], Flashlight, "switchOff", null);
    __decorate([
        plugin_1.Cordova()
    ], Flashlight, "toggle", null);
    __decorate([
        plugin_1.Cordova({
            sync: true
        })
    ], Flashlight, "isSwitchedOn", null);
    Flashlight = __decorate([
        plugin_1.Plugin({
            pluginName: 'Flashlight',
            plugin: 'cordova-plugin-flashlight',
            pluginRef: 'window.plugins.flashlight',
            repo: 'https://github.com/EddyVerbruggen/Flashlight-PhoneGap-Plugin.git'
        })
    ], Flashlight);
    return Flashlight;
}());
exports.Flashlight = Flashlight;

},{"./plugin":82}],47:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
var Observable_1 = require('rxjs/Observable');
/**
 * @name Geofence
 * @description Monitors circular geofences around latitude/longitude coordinates, and sends a notification to the user when the boundary of a geofence is crossed. Notifications can be sent when the user enters and/or exits a geofence.
 * Geofences persist after device reboot. Geofences will be monitored even when the app is not running.
 * @usage
 * ```
 * import { Geofence } from 'ionic-native';
 * import { Platform } from  'ionic-angular'
 * ...
 *
 * constructor(private platform: Platform) {
 *   this.platform.ready().then(() => {
         // initialize the plugin
 *       Geofence.initialize().then(
 *         // resolved promise does not return a value
 *         () => console.log('Geofence Plugin Ready'),
 *         (err) => console.log(err)
 *       )
 *   })
 * }
 *
 * private addGeofence() {
 *   //options describing geofence
 *   let fence = {
 *     id: "69ca1b88-6fbe-4e80-a4d4-ff4d3748acdb", //any unique ID
 *     latitude:       37.285951, //center of geofence radius
 *     longitude:      -121.936650,
 *     radius:         100, //radius to edge of geofence
 *     transitionType: 3, //see 'Transition Types' below
 *     notification: { //notification settings
 *         id:             1, //any unique ID
 *         title:          "You crossed a fence", //notification title
 *         text:           "You just arrived to Gliwice city center.", //notification body
 *         openAppOnClick: true //open app when notification is tapped
 *     }
 *   }
 *
 *   Geofence.addOrUpdate(fence).then(
 *      () => console.log('Geofence added'),
 *      (err) => console.log('Geofence failed to add')
 *    );
 * }
 *
 * ```
 * ### Transition Types ###
 * Transition type specifies whether the geofence should trigger when the user enters and/or leaves the geofence.
 *
 * #### Supported values ####
 * - 1: Enter
 * - 2: Leave
 * - 3: Both
 *
 * ### Defining a Geofence ###
 * Geofences are defined by an object that is passed to `addOrUpdate()`. Object properties are:
 * - id: Any unique ID for the geofence. This ID is used to remove and update a geofence
 * - latitude: Latitude coordinate of the center of the geofence radius
 * - longitude: Latitude coordinate of the center of the geofence radius
 * - radius: Radius from the center to the edge of the geofence
 * - transitionType: Type of geofence transition to monitor for. See 'Transition Types' above
 * - notification: Object. Options for defining the notification sent when a geofence is crossed
 *   - id: Any unique ID
 *   - title: Notification title
 *   - text: Notification body
 *   - openAppOnClick: Boolean. Whether to open the app when the notification is tapped by the user
 *
 * ### Troubleshooting ###
 * #### I get compile errors when I run `ionic build ios` or `ionic run ios`. ####
 * This could be caused by the Cordova project directory in `/platforms/ios` not being named correctly.
 * Try running `ionic platform rm <platform>` then run `ionic platform add <platform>` to recreate the
 * platform directories.
 */
var Geofence = (function () {
    function Geofence() {
    }
    /**
     * Initializes the plugin. User will be prompted to allow the app to use location and notifications.
     *
     * @returns {Promise<void>}
     */
    Geofence.initialize = function () { return; };
    ;
    /**
     * Adds a new geofence or array of geofences. For geofence object, see above.
     *
     * @returns {Promise<void>}
     */
    Geofence.addOrUpdate = function (geofences) { return; };
    ;
    /**
     * Removes a geofence or array of geofences. `geofenceID` corresponds to one or more IDs specified when the
     * geofence was created.
     *
     * @returns {Promise<void>}
     */
    Geofence.remove = function (geofenceId) { return; };
    ;
    /**
     * Removes all geofences.
     *
     * @returns {Promise<void>}
     */
    Geofence.removeAll = function () { return; };
    ;
    /**
     * Returns an array of geofences currently being monitored.
     *
     * @returns {Promise<Array<string>>}
     */
    Geofence.getWatched = function () { return; };
    ;
    /**
     * Called when a geofence is crossed in the direction specified by `TransitType`.
     *
     * @returns {Observable<any>}
     */
    Geofence.onTransitionReceived = function () {
        return new Observable_1.Observable(function (observer) {
            window && window.geofence && (window.geofence.onTransitionReceived = observer.next.bind(observer));
            return function () { return window.geofence.onTransitionReceived = function () { }; };
        });
    };
    /**
     * Called when the user clicks a geofence notification. iOS and Android only.
     *
     * @returns {Observable<any>}
     */
    Geofence.onNotificationClicked = function () {
        return new Observable_1.Observable(function (observer) {
            window && window.geofence && (window.geofence.onNotificationClicked = observer.next.bind(observer));
            return function () { return window.geofence.onNotificationClicked = function () { }; };
        });
    };
    Geofence.TransitionType = {
        ENTER: 1,
        EXIT: 2,
        BOTH: 3
    };
    __decorate([
        plugin_1.Cordova()
    ], Geofence, "initialize", null);
    __decorate([
        plugin_1.Cordova()
    ], Geofence, "addOrUpdate", null);
    __decorate([
        plugin_1.Cordova()
    ], Geofence, "remove", null);
    __decorate([
        plugin_1.Cordova()
    ], Geofence, "removeAll", null);
    __decorate([
        plugin_1.Cordova()
    ], Geofence, "getWatched", null);
    Geofence = __decorate([
        plugin_1.Plugin({
            pluginName: 'Geofence',
            plugin: 'cordova-plugin-geofence',
            pluginRef: 'geofence',
            repo: 'https://github.com/cowbell/cordova-plugin-geofence/',
            platforms: ['Android', 'iOS', 'Windows Phone 8', 'Windows Phone']
        })
    ], Geofence);
    return Geofence;
}());
exports.Geofence = Geofence;

},{"./plugin":82,"rxjs/Observable":113}],48:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
var Observable_1 = require('rxjs/Observable');
/**
 * @name Geolocation
 * @description
 * This plugin provides information about the device's location, such as latitude and longitude. Common sources of location information include Global Positioning System (GPS) and location inferred from network signals such as IP address, RFID, WiFi and Bluetooth MAC addresses, and GSM/CDMA cell IDs.
 *
 *  This API is based on the W3C Geolocation API Specification, and only executes on devices that don't already provide an implementation.
 *
 * @usage
 *
 * ```typescript
 * import { Geolocation } from 'ionic-native';
 *
 *
 * Geolocation.getCurrentPosition().then((resp) => {
 *  // resp.coords.latitude
 *  // resp.coords.longitude
 * }).catch((error) => {
 *   console.log('Error getting location', error);
 * });
 *
 * let watch = Geolocation.watchPosition();
 * watch.subscribe((data) => {
 *  // data can be a set of coordinates, or an error (if an error occurred).
 *  // data.coords.latitude
 *  // data.coords.longitude
 * });
 * ```
 * @interfaces
 * Coordinates
 * Geoposition
 * PositionError
 * GeolocationOptions
 */
var Geolocation = (function () {
    function Geolocation() {
    }
    /**
     * Get the device's current position.
     *
     * @param {GeolocationOptions} options  The [geolocation options](https://developer.mozilla.org/en-US/docs/Web/API/PositionOptions).
     * @returns {Promise<Geoposition>} Returns a Promise that resolves with the [position](https://developer.mozilla.org/en-US/docs/Web/API/Position) of the device, or rejects with an error.
     */
    Geolocation.getCurrentPosition = function (options) { return; };
    /**
     * Watch the current device's position.  Clear the watch by unsubscribing from
     * Observable changes.
     *
     * ```typescript
     * var subscription = Geolocation.watchPosition()
     *                               .filter((p) => p.code === undefined) //Filter Out Errors
     *                               .subscribe(position => {
     *   console.log(position.coords.longitude + ' ' + position.coords.latitude);
     * });
     *
     * // To stop notifications
     * subscription.unsubscribe();
     * ```
     *
     * @param {GeolocationOptions} options  The [geolocation options](https://developer.mozilla.org/en-US/docs/Web/API/PositionOptions).
     * @returns {Observable<Geoposition>} Returns an Observable that notifies with the [position](https://developer.mozilla.org/en-US/docs/Web/API/Position) of the device, or errors.
     */
    Geolocation.watchPosition = function (options) {
        return new Observable_1.Observable(function (observer) {
            var watchId = navigator.geolocation.watchPosition(observer.next.bind(observer), observer.next.bind(observer), options);
            return function () { return navigator.geolocation.clearWatch(watchId); };
        });
    };
    __decorate([
        plugin_1.Cordova({
            callbackOrder: 'reverse'
        })
    ], Geolocation, "getCurrentPosition", null);
    Geolocation = __decorate([
        plugin_1.Plugin({
            pluginName: 'Geolocation',
            plugin: 'cordova-plugin-geolocation',
            pluginRef: 'navigator.geolocation',
            repo: 'https://github.com/apache/cordova-plugin-geolocation'
        })
    ], Geolocation);
    return Geolocation;
}());
exports.Geolocation = Geolocation;

},{"./plugin":82,"rxjs/Observable":113}],49:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name Globalization
 * @description
 * @usage
 * ```typescript
 * import { Globalization } from 'ionic-native';
 *
 *
 * ```
 */
var Globalization = (function () {
    function Globalization() {
    }
    /**
     * Returns the BCP-47 compliant language identifier tag to the successCallback with a properties object as a parameter. That object should have a value property with a String value.
     * @returns {Promise<{value: string}>}
     */
    Globalization.getPreferredLanguage = function () { return; };
    /**
     * Returns the BCP 47 compliant locale identifier string to the successCallback with a properties object as a parameter.
     * @returns {Promise<{value: string}>}
     */
    Globalization.getLocaleName = function () { return; };
    /**
     * Converts date to string
     * @param {Date} date Date you wish to convert
     * @param options Options for the converted date. Length, selector.
     * @returns {Promise<{value: string}>} Returns a promise when the date has been converted.
     */
    Globalization.dateToString = function (date, options) { return; };
    /**
     * Parses a date formatted as a string, according to the client's user preferences and calendar using the time zone of the client, and returns the corresponding date object.
     * @param {string} dateString Date as a string to be converted
     * @param options Options for the converted date. Length, selector.
     * @returns {Promise<{ year: number, month: number, day: number, hour: number, minute: number, second: number, millisecond: number }>} Returns a promise when the date has been converted.
     */
    Globalization.stringToDate = function (dateString, options) { return; };
    /**
     * Returns a pattern string to format and parse dates according to the client's user preferences.
     * @param options Object with the format length and selector
     * @returns {Promise<{pattern: string}>} Returns a promise.
     */
    Globalization.getDatePattern = function (options) { return; };
    /**
     * Returns an array of the names of the months or days of the week, depending on the client's user preferences and calendar.
     * @param options Object with type (narrow or wide) and item (month or days).
     * @returns {Promise<{value: Array<string>}>} Returns a promise.
     */
    Globalization.getDateNames = function (options) { return; };
    /**
     * Indicates whether daylight savings time is in effect for a given date using the client's time zone and calendar.
     * @param {data} date Date to process
     * @returns {Promise<{dst: string}>} reutrns a promise with the value
     */
    Globalization.isDayLightSavingsTime = function (date) { return; };
    /**
     * Returns the first day of the week according to the client's user preferences and calendar.
     * @returns {Promise<{value: string}>} returns a promise with the value
     */
    Globalization.getFirstDayOfWeek = function () { return; };
    /**
     * Returns a number formatted as a string according to the client's user preferences.
     * @param numberToConvert {Number} The number to convert
     * @param options {Object} Object with property `type` that can be set to: decimal, percent, or currency.
     */
    Globalization.numberToString = function (numberToConvert, options) { return; };
    /**
     *
     * @param {string} stringToConvert String you want to conver to a number
     * @param options  The type of number you want to return. Can be decimal, percent, or currency.
     * @returns {Promise<{ value: number | string }>} Returns a promise with the value.
     */
    Globalization.stringToNumber = function (stringToConvert, options) { return; };
    /**
     * Returns a pattern string to format and parse numbers according to the client's user preferences.
     * @param options Can be decimal, percent, or currency.
     * @returns {Promise<{ pattern: string, symbol: string, fraction: number, rounding: number, positive: string, negative: string, decimal: string, grouping: string }>}
     */
    Globalization.getNumberPattern = function (options) { return; };
    /**
     * Returns a pattern string to format and parse currency values according to the client's user preferences and ISO 4217 currency code.
     * @param {string} currencyCode Currency Code.A
     * @returns {Promise<{ pattern: string, code: string, fraction: number, rounding: number, decimal: number, grouping: string }>}
     */
    Globalization.getCurrencyPattern = function (currencyCode) { return; };
    __decorate([
        plugin_1.Cordova()
    ], Globalization, "getPreferredLanguage", null);
    __decorate([
        plugin_1.Cordova()
    ], Globalization, "getLocaleName", null);
    __decorate([
        plugin_1.Cordova({
            successIndex: 1,
            errorIndex: 2
        })
    ], Globalization, "dateToString", null);
    __decorate([
        plugin_1.Cordova({
            successIndex: 1,
            errorIndex: 2
        })
    ], Globalization, "stringToDate", null);
    __decorate([
        plugin_1.Cordova({
            callbackOrder: 'reverse'
        })
    ], Globalization, "getDatePattern", null);
    __decorate([
        plugin_1.Cordova({
            callbackOrder: 'reverse'
        })
    ], Globalization, "getDateNames", null);
    __decorate([
        plugin_1.Cordova()
    ], Globalization, "isDayLightSavingsTime", null);
    __decorate([
        plugin_1.Cordova()
    ], Globalization, "getFirstDayOfWeek", null);
    __decorate([
        plugin_1.Cordova({
            successIndex: 1,
            errorIndex: 2
        })
    ], Globalization, "numberToString", null);
    __decorate([
        plugin_1.Cordova({
            successIndex: 1,
            errorIndex: 2
        })
    ], Globalization, "stringToNumber", null);
    __decorate([
        plugin_1.Cordova({
            callbackOrder: 'reverse'
        })
    ], Globalization, "getNumberPattern", null);
    __decorate([
        plugin_1.Cordova()
    ], Globalization, "getCurrencyPattern", null);
    Globalization = __decorate([
        plugin_1.Plugin({
            pluginName: 'Globalization',
            plugin: 'cordova-plugin-globalization',
            pluginRef: 'navigator.globalization',
            repo: 'https://github.com/apache/cordova-plugin-globalization'
        })
    ], Globalization);
    return Globalization;
}());
exports.Globalization = Globalization;

},{"./plugin":82}],50:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name Google Plus
 * @description
 * @usage
 * ```typescript
 * import { GooglePlus } from 'ionic-native';
 *
 *
 * ```
 */
var GooglePlus = (function () {
    function GooglePlus() {
    }
    /**
     * The login function walks the user through the Google Auth process.
     * @param options
     * @returns {Promise<any>}
     */
    GooglePlus.login = function (options) { return; };
    /**
     * You can call trySilentLogin to check if they're already signed in to the app and sign them in silently if they are.
     * @param options
     * @returns {Promise<any>}
     */
    GooglePlus.trySilentLogin = function (options) { return; };
    /**
     * This will clear the OAuth2 token.
     * @returns {Promise<any>}
     */
    GooglePlus.logout = function () { return; };
    /**
     * This will clear the OAuth2 token, forget which account was used to login, and disconnect that account from the app. This will require the user to allow the app access again next time they sign in. Be aware that this effect is not always instantaneous. It can take time to completely disconnect.
     * @returns {Promise<any>}
     */
    GooglePlus.disconnect = function () { return; };
    __decorate([
        plugin_1.Cordova()
    ], GooglePlus, "login", null);
    __decorate([
        plugin_1.Cordova()
    ], GooglePlus, "trySilentLogin", null);
    __decorate([
        plugin_1.Cordova()
    ], GooglePlus, "logout", null);
    __decorate([
        plugin_1.Cordova()
    ], GooglePlus, "disconnect", null);
    GooglePlus = __decorate([
        plugin_1.Plugin({
            pluginName: 'GooglePlus',
            plugin: 'cordova-plugin-googleplus',
            pluginRef: 'window.plugins.googleplus',
            repo: 'https://github.com/EddyVerbruggen/cordova-plugin-googleplus',
            platforms: ['Web', 'Android', 'iOS'],
            install: 'ionic plugin add cordova-plugin-googleplus --variable REVERSED_CLIENT_ID=myreversedclientid'
        })
    ], GooglePlus);
    return GooglePlus;
}());
exports.GooglePlus = GooglePlus;

},{"./plugin":82}],51:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name Google Analytics
 * @description
 * This plugin connects to Google's native Universal Analytics SDK
 * Prerequisites:
 * - A Cordova 3.0+ project for iOS and/or Android
 * - A Mobile App property through the Google Analytics Admin Console
 * - (Android) Google Play Services SDK installed via [Android SDK Manager](https://developer.android.com/sdk/installing/adding-packages.html)
 */
var GoogleAnalytics = (function () {
    function GoogleAnalytics() {
    }
    /**
     * In your 'deviceready' handler, set up your Analytics tracker.
     * https://developers.google.com/analytics/devguides/collection/analyticsjs/
     * @param {string}  id  Your Google Analytics Mobile App property
     * @param {number} interval Optional dispatch period in seconds. Defaults to 30.
     * @returns {Promise<any>}
     */
    GoogleAnalytics.startTrackerWithId = function (id, interval) { return; };
    /**
     * Enabling Advertising Features in Google Analytics allows you to take advantage of Remarketing, Demographics & Interests reports, and more
     * @param allow {boolean}
     * @returns {Promise<any>}
     */
    GoogleAnalytics.setAllowIDFACollection = function (allow) { return; };
    /**
     * Set a UserId
     * https://developers.google.com/analytics/devguides/collection/analyticsjs/user-id
     * @param {string} id User ID
     * @returns {Promise<any>}
     */
    GoogleAnalytics.setUserId = function (id) { return; };
    /**
     * Set a anonymize Ip address
     * @param anonymize {boolean} Set to true to anonymize the IP Address
     * @returns {Promise<any>}
     */
    GoogleAnalytics.setAnonymizeIp = function (anonymize) { return; };
    /**
     * Sets the app version
     * @param appVersion {string} App version
     * @returns {Promise<any>}
     */
    GoogleAnalytics.setAppVersion = function (appVersion) { return; };
    /**
     * Set OptOut
     * @param optout {boolean}
     * @returns {Promise<any>}
     */
    GoogleAnalytics.setOptOut = function (optout) { return; };
    /**
     * Enable verbose logging
     * @returns {Promise<any>}
     */
    GoogleAnalytics.debugMode = function () { return; };
    /**
     * Track custom metric
     * @param key {string}
     * @param value {any}
     * @returns {Promise<any>}
     */
    GoogleAnalytics.trackMetric = function (key, value) { return; };
    /**
     * Track a screen
     * https://developers.google.com/analytics/devguides/collection/analyticsjs/screens
     *
     * @param title {string} Screen title
     * @param campaignUrl {string} Campaign url for measuring referrals
     * @param newSession {boolean} Set to true to create a new session
     * @returns {Promise<any>}
     */
    GoogleAnalytics.trackView = function (title, campaignUrl, newSession) { return; };
    /**
     * Add a Custom Dimension
     * https://developers.google.com/analytics/devguides/platform/customdimsmets
     * @param key {string}
     * @param value {string}
     * @returns {Promise<any>}
     */
    GoogleAnalytics.addCustomDimension = function (key, value) { return; };
    /**
     * Track an event
     * https://developers.google.com/analytics/devguides/collection/analyticsjs/events
     * @param category {string}
     * @param action {string}
     * @param label {string}
     * @param value {number}
     * @param newSession {boolean} Set to true to create a new session
     * @returns {Promise<any>}
     */
    GoogleAnalytics.trackEvent = function (category, action, label, value, newSession) { return; };
    /**
     * Track an exception
     * @param description {string}
     * @param fatal {boolean}
     * @returns {Promise<any>}
     */
    GoogleAnalytics.trackException = function (description, fatal) { return; };
    /**
     * Track User Timing (App Speed)
     * @param category {string}
     * @param intervalInMilliseconds {number}
     * @param variable {string}
     * @param label {string}
     * @returns {Promise<any>}
     */
    GoogleAnalytics.trackTiming = function (category, intervalInMilliseconds, variable, label) { return; };
    /**
     * Add a Transaction (Ecommerce)
     * https://developers.google.com/analytics/devguides/collection/analyticsjs/ecommerce#addTrans
     * @param id {string}
     * @param affiliation {string}
     * @param revenue {number}
     * @param tax {number}
     * @param shipping {number}
     * @param currencyCode {string}
     * @returns {Promise<any>}
     */
    GoogleAnalytics.addTransaction = function (id, affiliation, revenue, tax, shipping, currencyCode) { return; };
    /**
     * Add a Transaction Item (Ecommerce)
     * https://developers.google.com/analytics/devguides/collection/analyticsjs/ecommerce#addItem
     * @param {string}  id
     * @param {string}  name
     * @param {string}  sku
     * @param {string}  category
     * @param {number}  price
     * @param {number}  quantity
     * @param {string}  currencyCode
     * @returns {Promise<any>}
     */
    GoogleAnalytics.addTransactionItem = function (id, name, sku, category, price, quantity, currencyCode) { return; };
    /**
     * Enable/disable automatic reporting of uncaught exceptions
     * @param shouldEnable {boolean}
     * @returns {Promise<any>}
     */
    GoogleAnalytics.enableUncaughtExceptionReporting = function (shouldEnable) { return; };
    __decorate([
        plugin_1.Cordova()
    ], GoogleAnalytics, "startTrackerWithId", null);
    __decorate([
        plugin_1.Cordova()
    ], GoogleAnalytics, "setAllowIDFACollection", null);
    __decorate([
        plugin_1.Cordova()
    ], GoogleAnalytics, "setUserId", null);
    __decorate([
        plugin_1.Cordova()
    ], GoogleAnalytics, "setAnonymizeIp", null);
    __decorate([
        plugin_1.Cordova()
    ], GoogleAnalytics, "setAppVersion", null);
    __decorate([
        plugin_1.Cordova()
    ], GoogleAnalytics, "setOptOut", null);
    __decorate([
        plugin_1.Cordova()
    ], GoogleAnalytics, "debugMode", null);
    __decorate([
        plugin_1.Cordova({
            successIndex: 2,
            errorIndex: 3
        })
    ], GoogleAnalytics, "trackMetric", null);
    __decorate([
        plugin_1.Cordova({
            successIndex: 3,
            errorIndex: 4
        })
    ], GoogleAnalytics, "trackView", null);
    __decorate([
        plugin_1.Cordova()
    ], GoogleAnalytics, "addCustomDimension", null);
    __decorate([
        plugin_1.Cordova({
            successIndex: 5,
            errorIndex: 6
        })
    ], GoogleAnalytics, "trackEvent", null);
    __decorate([
        plugin_1.Cordova()
    ], GoogleAnalytics, "trackException", null);
    __decorate([
        plugin_1.Cordova()
    ], GoogleAnalytics, "trackTiming", null);
    __decorate([
        plugin_1.Cordova()
    ], GoogleAnalytics, "addTransaction", null);
    __decorate([
        plugin_1.Cordova()
    ], GoogleAnalytics, "addTransactionItem", null);
    __decorate([
        plugin_1.Cordova()
    ], GoogleAnalytics, "enableUncaughtExceptionReporting", null);
    GoogleAnalytics = __decorate([
        plugin_1.Plugin({
            pluginName: 'GoogleAnalytics',
            plugin: 'cordova-plugin-google-analytics',
            pluginRef: 'ga',
            repo: 'https://github.com/danwilson/google-analytics-plugin',
            platforms: ['Android', 'iOS', 'Browser']
        })
    ], GoogleAnalytics);
    return GoogleAnalytics;
}());
exports.GoogleAnalytics = GoogleAnalytics;

},{"./plugin":82}],52:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
var Observable_1 = require('rxjs/Observable');
/**
 * @private
 * You can listen to these events where appropriate
 */
exports.GoogleMapsEvent = {
    MAP_CLICK: 'click',
    MAP_LONG_CLICK: 'long_click',
    MY_LOCATION_CHANGE: 'my_location_change',
    MY_LOCATION_BUTTON_CLICK: 'my_location_button_click',
    INDOOR_BUILDING_FOCUSED: 'indoor_building_focused',
    INDOOR_LEVEL_ACTIVATED: 'indoor_level_activated',
    CAMERA_CHANGE: 'camera_change',
    CAMERA_IDLE: 'camera_idle',
    MAP_READY: 'map_ready',
    MAP_LOADED: 'map_loaded',
    MAP_WILL_MOVE: 'will_move',
    MAP_CLOSE: 'map_close',
    MARKER_CLICK: 'click',
    OVERLAY_CLICK: 'overlay_click',
    INFO_CLICK: 'info_click',
    MARKER_DRAG: 'drag',
    MARKER_DRAG_START: 'drag_start',
    MARKER_DRAG_END: 'drag_end'
};
/**
 * @private
 */
exports.GoogleMapsAnimation = {
    BOUNCE: 'BOUNCE',
    DROP: 'DROP'
};
/**
 * @name Google Maps
 * @description This plugin uses the native Google Maps SDK
 * @usage
 * ```
 * import {
 *  GoogleMap,
 *  GoogleMapsEvent,
 *  GoogleMapsLatLng,
 *  CameraPosition,
 *  GoogleMapsMarkerOptions,
 *  GoogleMapsMarker
 * } from 'ionic-native';
 *
 * export class MapPage {
 *  constructor() {}
 *
 * // Load map only after view is initialize
 * ngAfterViewInit() {
 *  this.loadMap();
 * }
 *
 * loadMap() {
 *  // make sure to create following structure in your view.html file
 *  // <ion-content>
 *  //  <div #map id="map"></div>
 *  // </ion-content>
 *
 *  // create a new map by passing HTMLElement
 *  let element: HTMLElement = document.getElementById('map');
 *
 *  let map = new GoogleMap(element);
 *
 *  // listen to MAP_READY event
 *  map.one(GoogleMapsEvent.MAP_READY).then(() => console.log('Map is ready!'));
 *
 *  // create LatLng object
 *  let ionic: GoogleMapsLatLng = new GoogleMapsLatLng(43.0741904,-89.3809802);
 *
 *  // create CameraPosition
 *  let position: CameraPosition = {
 *    target: ionic,
 *    zoom: 18,
 *    tilt: 30
 *  };
 *
 *  // move the map's camera to position
 *  map.moveCamera(position);
 *
 *  // create new marker
 *  let markerOptions: GoogleMapsMarkerOptions = {
 *    position: ionic,
 *    title: 'Ionic'
 *  };
 *
 *  map.addMarker(markerOptions)
 *    .then((marker: GoogleMapsMarker) => {
 *       marker.showInfoWindow();
 *     });
 *  }
 *
 * }
 * ```
 */
var GoogleMap = (function () {
    function GoogleMap(element, options) {
        if (!!plugin_1.getPlugin('plugin.google.maps.Map')) {
            if (typeof element === 'string') {
                element = document.getElementById(element);
            }
            this._objectInstance = plugin.google.maps.Map.getMap(element, options);
        }
        else {
            plugin_1.pluginWarn({
                pluginName: 'GoogleMap',
                plugin: 'plugin.google.maps.Map'
            });
        }
    }
    /**
     * Checks if a map object has been created and is available.
     *
     * @returns {Promise<boolean>}
     */
    GoogleMap.isAvailable = function () { return; };
    /**
     * Listen to a map event.
     *
     * @returns {Observable<any>}
     */
    GoogleMap.prototype.on = function (event) {
        var _this = this;
        if (!this._objectInstance) {
            return new Observable_1.Observable(function (observer) {
                observer.error({ error: 'plugin_not_installed' });
            });
        }
        return new Observable_1.Observable(function (observer) {
            _this._objectInstance.on(event, observer.next.bind(observer));
            return function () { return _this._objectInstance.off(event); };
        });
    };
    /**
     * Listen to a map event only once.
     *
     * @returns {Promise<any>}
     */
    GoogleMap.prototype.one = function (event) {
        var _this = this;
        if (!this._objectInstance) {
            return Promise.reject({ error: 'plugin_not_installed' });
        }
        return new Promise(function (resolve) { return _this._objectInstance.one(event, resolve); });
    };
    GoogleMap.prototype.setDebuggable = function (isDebuggable) { };
    GoogleMap.prototype.setClickable = function (isClickable) { };
    /**
     * Get the position of the camera.
     *
     * @returns {Promise<CameraPosition>}
     */
    GoogleMap.prototype.getCameraPosition = function () { return; };
    /**
     * Get the location of the user.
     *
     * @returns {Promise<MyLocation>}
     */
    GoogleMap.prototype.getMyLocation = function (options) { return; };
    /**
     * Get the visible region.
     *
     * @returns {Promise<VisibleRegion>}
     */
    GoogleMap.prototype.getVisibleRegion = function () { return; };
    GoogleMap.prototype.showDialog = function () { };
    GoogleMap.prototype.closeDialog = function () { };
    GoogleMap.prototype.getLicenseInfo = function () { return; };
    GoogleMap.prototype.setCenter = function (latLng) { };
    GoogleMap.prototype.setZoom = function (zoomLevel) { };
    GoogleMap.prototype.setMapTypeId = function (typeId) { };
    GoogleMap.prototype.setTilt = function (tiltLevel) { };
    /**
     * @returns {Promise<any>}
     */
    GoogleMap.prototype.animateCamera = function (animateCameraOptions) { return; };
    /**
     * @returns {Promise<any>}
     */
    GoogleMap.prototype.moveCamera = function (cameraPosition) { return; };
    GoogleMap.prototype.setMyLocationEnabled = function (enabled) { };
    GoogleMap.prototype.setIndoorEnabled = function (enabled) { };
    GoogleMap.prototype.setTrafficEnabled = function (enabled) { };
    GoogleMap.prototype.setCompassEnabled = function (enabled) { };
    GoogleMap.prototype.setAllGesturesEnabled = function (enabled) { };
    /**
     * @returns {Promise<GoogleMapsMarker | any>}
     */
    GoogleMap.prototype.addMarker = function (options) {
        var _this = this;
        if (!this._objectInstance) {
            return Promise.reject({ error: 'plugin_not_installed' });
        }
        return new Promise(function (resolve, reject) {
            _this._objectInstance.addMarker(options, function (marker) {
                if (marker) {
                    resolve(new GoogleMapsMarker(marker));
                }
                else {
                    reject();
                }
            });
        });
    };
    /**
     * @returns {Promise<GoogleMapsCircle | any>}
     */
    GoogleMap.prototype.addCircle = function (options) {
        var _this = this;
        if (!this._objectInstance) {
            return Promise.reject({ error: 'plugin_not_installed' });
        }
        return new Promise(function (resolve, reject) {
            _this._objectInstance.addCircle(options, function (circle) {
                if (circle) {
                    resolve(new GoogleMapsCircle(circle));
                }
                else {
                    reject();
                }
            });
        });
    };
    /**
     * @returns {Promise<GoogleMapsPolygon | any>}
     */
    GoogleMap.prototype.addPolygon = function (options) {
        var _this = this;
        if (!this._objectInstance) {
            return Promise.reject({ error: 'plugin_not_installed' });
        }
        return new Promise(function (resolve, reject) {
            _this._objectInstance.addPolygon(options, function (polygon) {
                if (polygon) {
                    resolve(new GoogleMapsPolygon(polygon));
                }
                else {
                    reject();
                }
            });
        });
    };
    /**
     * @returns {Promise<GoogleMapsPolyline | any>}
     */
    GoogleMap.prototype.addPolyline = function (options) {
        var _this = this;
        if (!this._objectInstance) {
            return Promise.reject({ error: 'plugin_not_installed' });
        }
        return new Promise(function (resolve, reject) {
            _this._objectInstance.addPolyline(options, function (polyline) {
                if (polyline) {
                    resolve(new GoogleMapsPolyline(polyline));
                }
                else {
                    reject();
                }
            });
        });
    };
    /**
     * @returns {Promise<GoogleMapsTileOverlay | any>}
     */
    GoogleMap.prototype.addTileOverlay = function (options) {
        var _this = this;
        if (!this._objectInstance) {
            return Promise.reject({ error: 'plugin_not_installed' });
        }
        return new Promise(function (resolve, reject) {
            _this._objectInstance.addTileOverlay(options, function (tileOverlay) {
                if (tileOverlay) {
                    resolve(new GoogleMapsTileOverlay(tileOverlay));
                }
                else {
                    reject();
                }
            });
        });
    };
    /**
     * @returns {Promise<GoogleMapsGroundOverlay | any>}
     */
    GoogleMap.prototype.addGroundOverlay = function (options) {
        var _this = this;
        if (!this._objectInstance) {
            return Promise.reject({ error: 'plugin_not_installed' });
        }
        return new Promise(function (resolve, reject) {
            _this._objectInstance.addGroundOverlay(options, function (groundOverlay) {
                if (groundOverlay) {
                    resolve(new GoogleMapsGroundOverlay(groundOverlay));
                }
                else {
                    reject();
                }
            });
        });
    };
    /**
     * @returns {Promise<GoogleMapsKmlOverlay | any>}
     */
    GoogleMap.prototype.addKmlOverlay = function (options) {
        var _this = this;
        if (!this._objectInstance) {
            return Promise.reject({ error: 'plugin_not_installed' });
        }
        return new Promise(function (resolve, reject) {
            _this._objectInstance.addKmlOverlay(options, function (kmlOverlay) {
                if (kmlOverlay) {
                    resolve(new GoogleMapsKmlOverlay(kmlOverlay));
                }
                else {
                    reject();
                }
            });
        });
    };
    GoogleMap.prototype.setDiv = function (domNode) { };
    GoogleMap.prototype.setVisible = function (visible) { };
    GoogleMap.prototype.setOptions = function (options) { };
    GoogleMap.prototype.setBackgroundColor = function (backgroundColor) { };
    GoogleMap.prototype.setPadding = function (top, right, bottom, left) { };
    GoogleMap.prototype.clear = function () { };
    GoogleMap.prototype.refreshLayout = function () { };
    /**
     * @returns {Promise<any>}
     */
    GoogleMap.prototype.fromLatLngToPoint = function (latLng, point) { return; };
    /**
     * @returns {Promise<GoogleMapsLatLng>}
     */
    GoogleMap.prototype.fromPointToLatLng = function (point, latLng) { return; };
    /**
     * @returns {Promise<any>}
     */
    GoogleMap.prototype.toDataURL = function () { return; };
    GoogleMap.prototype.remove = function () { };
    GoogleMap.prototype.panBy = function () { };
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMap.prototype, "setDebuggable", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMap.prototype, "setClickable", null);
    __decorate([
        plugin_1.CordovaInstance()
    ], GoogleMap.prototype, "getCameraPosition", null);
    __decorate([
        plugin_1.CordovaInstance()
    ], GoogleMap.prototype, "getMyLocation", null);
    __decorate([
        plugin_1.CordovaInstance()
    ], GoogleMap.prototype, "getVisibleRegion", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMap.prototype, "showDialog", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMap.prototype, "closeDialog", null);
    __decorate([
        plugin_1.CordovaInstance()
    ], GoogleMap.prototype, "getLicenseInfo", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMap.prototype, "setCenter", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMap.prototype, "setZoom", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMap.prototype, "setMapTypeId", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMap.prototype, "setTilt", null);
    __decorate([
        plugin_1.CordovaInstance()
    ], GoogleMap.prototype, "animateCamera", null);
    __decorate([
        plugin_1.CordovaInstance()
    ], GoogleMap.prototype, "moveCamera", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMap.prototype, "setMyLocationEnabled", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMap.prototype, "setIndoorEnabled", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMap.prototype, "setTrafficEnabled", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMap.prototype, "setCompassEnabled", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMap.prototype, "setAllGesturesEnabled", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMap.prototype, "setDiv", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMap.prototype, "setVisible", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMap.prototype, "setOptions", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMap.prototype, "setBackgroundColor", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMap.prototype, "setPadding", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMap.prototype, "clear", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMap.prototype, "refreshLayout", null);
    __decorate([
        plugin_1.CordovaInstance()
    ], GoogleMap.prototype, "fromLatLngToPoint", null);
    __decorate([
        plugin_1.CordovaInstance()
    ], GoogleMap.prototype, "fromPointToLatLng", null);
    __decorate([
        plugin_1.CordovaInstance()
    ], GoogleMap.prototype, "toDataURL", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMap.prototype, "remove", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMap.prototype, "panBy", null);
    __decorate([
        plugin_1.Cordova()
    ], GoogleMap, "isAvailable", null);
    GoogleMap = __decorate([
        plugin_1.Plugin({
            pluginName: 'GoogleMap',
            pluginRef: 'plugin.google.maps.Map',
            plugin: 'cordova-plugin-googlemaps',
            repo: 'https://github.com/mapsplugin/cordova-plugin-googlemaps',
            install: 'ionic plugin add cordova-plugin-googlemaps --variable API_KEY_FOR_ANDROID="YOUR_ANDROID_API_KEY_IS_HERE" --variable API_KEY_FOR_IOS="YOUR_IOS_API_KEY_IS_HERE"'
        })
    ], GoogleMap);
    return GoogleMap;
}());
exports.GoogleMap = GoogleMap;
/**
 * @private
 */
var GoogleMapsMarker = (function () {
    function GoogleMapsMarker(_objectInstance) {
        this._objectInstance = _objectInstance;
    }
    GoogleMapsMarker.prototype.addEventListener = function (event) {
        var _this = this;
        return new Observable_1.Observable(function (observer) {
            _this._objectInstance.addEventListener(event, observer.next.bind(observer));
            return function () { return _this._objectInstance.removeEventListener(event, observer.next.bind(observer)); };
        });
    };
    /**
     * Gets a value
     * @param key
     */
    GoogleMapsMarker.prototype.get = function (key) { return; };
    /**
     * Sets a value
     * @param key
     * @param value
     */
    GoogleMapsMarker.prototype.set = function (key, value) { };
    /**
     * Return true if the marker is visible
     */
    GoogleMapsMarker.prototype.isVisible = function () { return; };
    /**
     * Set false if you want to hide the marker.
     * @param visible
     */
    GoogleMapsMarker.prototype.setVisible = function (visible) { };
    /**
     * Return the marker hash code.
     * @return {string} Marker hash code
     */
    GoogleMapsMarker.prototype.getHashCode = function () { return; };
    /**
     * Remove the marker completely.
     */
    GoogleMapsMarker.prototype.remove = function () { };
    /**
     * Change the marker opacity.
     * @param alpha {number} Opacity
     */
    GoogleMapsMarker.prototype.setOpacity = function (alpha) { };
    /**
     * Return the marker opacity.
     * @return {number} Opacity
     */
    GoogleMapsMarker.prototype.getOpacity = function () { return; };
    /**
     * iOS only, Plugin Version >= 1.3.3 Higher zIndex value overlays will be drawn on top of lower zIndex value tile layers and overlays. (You're able to run this on Android, but it will have no effect)
     * @return {number}
     */
    GoogleMapsMarker.prototype.setZIndex = function () { return; };
    /**
     * Change the info window anchor. This defaults to 50% from the left of the image and at the bottom of the image.
     * @param x {number}
     * @param y {number}
     */
    GoogleMapsMarker.prototype.setIconAnchor = function (x, y) { };
    /**
     * Change the info window anchor. This defaults to 50% from the left of the image and at the top of the image.
     * @param x {number}
     * @param y {number}
     */
    GoogleMapsMarker.prototype.setInfoWindowAnchor = function (x, y) { };
    /**
     * 	Set true if you allows all users to drag the marker.
     * @param draggable {boolean}
     */
    GoogleMapsMarker.prototype.setDraggable = function (draggable) { };
    /**
     * Return true if the marker drag is enabled.
     * @return {boolean}
     */
    GoogleMapsMarker.prototype.isDraggable = function () { return; };
    /**
     * Set true if you want to be flat marker.
     * @param flat {boolean}
     */
    GoogleMapsMarker.prototype.setFlat = function (flat) { return; };
    /**
     * Change icon url and/or size
     * @param icon
     */
    GoogleMapsMarker.prototype.setIcon = function (icon) { return; };
    /**
     * Change title of the infoWindow.
     * @param title {string}
     */
    GoogleMapsMarker.prototype.setTitle = function (title) { };
    /**
     * Return the title strings.
     * @return {string}
     */
    GoogleMapsMarker.prototype.getTitle = function () { return; };
    /**
     * Change snippet of the infoWindow.
     * @param snippet {string}
     */
    GoogleMapsMarker.prototype.setSnippet = function (snippet) { };
    /**
     * Return the snippet strings.
     * @return {string}
     */
    GoogleMapsMarker.prototype.getSnippet = function () { return; };
    /**
     * Set the marker rotation angle.
     * @param rotation {number}
     */
    GoogleMapsMarker.prototype.setRotation = function (rotation) { };
    /**
     * Return the marker rotation angle.
     * @return {number}
     */
    GoogleMapsMarker.prototype.getRotation = function () { return; };
    /**
     * Show the infoWindow of the marker.
     * @return {number}
     */
    GoogleMapsMarker.prototype.showInfoWindow = function () { return; };
    /**
     * Hide the infoWindow of the marker.
     * @return {number}
     */
    GoogleMapsMarker.prototype.hideInfoWindow = function () { return; };
    /**
     * Set the marker position.
     * @param latLng {GoogleMapLatLng}
     */
    GoogleMapsMarker.prototype.setPosition = function (latLng) { return; };
    /**
     * Return the marker position.
     * @return {Promise<GoogleMapLatLng>}
     */
    GoogleMapsMarker.prototype.getPosition = function () { return; };
    /**
     * Return the map instance.
     * @return {GoogleMap}
     */
    GoogleMapsMarker.prototype.getMap = function () { return; };
    /**
     * Specify the animation either `DROP` or `BOUNCE`
     * @param animation {string}
     */
    GoogleMapsMarker.prototype.setAnimation = function (animation) { };
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsMarker.prototype, "get", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsMarker.prototype, "set", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsMarker.prototype, "isVisible", null);
    __decorate([
        plugin_1.CordovaInstance()
    ], GoogleMapsMarker.prototype, "setVisible", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsMarker.prototype, "getHashCode", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsMarker.prototype, "remove", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsMarker.prototype, "setOpacity", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsMarker.prototype, "getOpacity", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsMarker.prototype, "setZIndex", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsMarker.prototype, "setIconAnchor", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsMarker.prototype, "setInfoWindowAnchor", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsMarker.prototype, "setDraggable", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsMarker.prototype, "isDraggable", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsMarker.prototype, "setFlat", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsMarker.prototype, "setIcon", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsMarker.prototype, "setTitle", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsMarker.prototype, "getTitle", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsMarker.prototype, "setSnippet", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsMarker.prototype, "getSnippet", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsMarker.prototype, "setRotation", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsMarker.prototype, "getRotation", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsMarker.prototype, "showInfoWindow", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsMarker.prototype, "hideInfoWindow", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsMarker.prototype, "setPosition", null);
    __decorate([
        plugin_1.CordovaInstance()
    ], GoogleMapsMarker.prototype, "getPosition", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsMarker.prototype, "getMap", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsMarker.prototype, "setAnimation", null);
    return GoogleMapsMarker;
}());
exports.GoogleMapsMarker = GoogleMapsMarker;
/**
 * @private
 */
var GoogleMapsCircle = (function () {
    function GoogleMapsCircle(_objectInstance) {
        this._objectInstance = _objectInstance;
    }
    GoogleMapsCircle.prototype.addEventListener = function (event) {
        var _this = this;
        return new Observable_1.Observable(function (observer) {
            _this._objectInstance.addEventListener(event, observer.next.bind(observer));
            return function () { return _this._objectInstance.removeEventListener(event, observer.next.bind(observer)); };
        });
    };
    GoogleMapsCircle.prototype.getCenter = function () { return; };
    GoogleMapsCircle.prototype.getRadius = function () { return; };
    GoogleMapsCircle.prototype.getStrokeColor = function () { return; };
    GoogleMapsCircle.prototype.getVisible = function () { return; };
    GoogleMapsCircle.prototype.getZIndex = function () { return; };
    GoogleMapsCircle.prototype.remove = function () { };
    GoogleMapsCircle.prototype.setCenter = function (latLng) { };
    GoogleMapsCircle.prototype.setFillColor = function (fillColor) { };
    GoogleMapsCircle.prototype.setStrokeColor = function (strokeColor) { };
    GoogleMapsCircle.prototype.setStrokeWidth = function (strokeWidth) { };
    GoogleMapsCircle.prototype.setVisible = function (visible) { };
    GoogleMapsCircle.prototype.setZIndex = function (zIndex) { };
    GoogleMapsCircle.prototype.setRadius = function (radius) { };
    GoogleMapsCircle.prototype.getMap = function () { return; };
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsCircle.prototype, "getCenter", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsCircle.prototype, "getRadius", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsCircle.prototype, "getStrokeColor", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsCircle.prototype, "getVisible", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsCircle.prototype, "getZIndex", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsCircle.prototype, "remove", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsCircle.prototype, "setCenter", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsCircle.prototype, "setFillColor", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsCircle.prototype, "setStrokeColor", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsCircle.prototype, "setStrokeWidth", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsCircle.prototype, "setVisible", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsCircle.prototype, "setZIndex", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsCircle.prototype, "setRadius", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsCircle.prototype, "getMap", null);
    return GoogleMapsCircle;
}());
exports.GoogleMapsCircle = GoogleMapsCircle;
/**
 * @private
 */
var GoogleMapsPolyline = (function () {
    function GoogleMapsPolyline(_objectInstance) {
        this._objectInstance = _objectInstance;
    }
    GoogleMapsPolyline.prototype.addEventListener = function (event) {
        var _this = this;
        return new Observable_1.Observable(function (observer) {
            _this._objectInstance.addEventListener(event, observer.next.bind(observer));
            return function () { return _this._objectInstance.removeEventListener(event, observer.next.bind(observer)); };
        });
    };
    GoogleMapsPolyline.prototype.getPoints = function () { return; };
    GoogleMapsPolyline.prototype.getCOlor = function () { return; };
    GoogleMapsPolyline.prototype.getWidth = function () { return; };
    GoogleMapsPolyline.prototype.getGeodesic = function () { return; };
    GoogleMapsPolyline.prototype.getZIndex = function () { return; };
    GoogleMapsPolyline.prototype.remove = function () { };
    GoogleMapsPolyline.prototype.setPoints = function (points) { };
    GoogleMapsPolyline.prototype.setColor = function (color) { };
    GoogleMapsPolyline.prototype.setWidth = function (width) { };
    GoogleMapsPolyline.prototype.setVisible = function (visible) { };
    GoogleMapsPolyline.prototype.setZIndex = function (zIndex) { };
    GoogleMapsPolyline.prototype.setGeoDesic = function (geoDesic) { };
    GoogleMapsPolyline.prototype.getMap = function () { return; };
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsPolyline.prototype, "getPoints", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsPolyline.prototype, "getCOlor", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsPolyline.prototype, "getWidth", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsPolyline.prototype, "getGeodesic", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsPolyline.prototype, "getZIndex", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsPolyline.prototype, "remove", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsPolyline.prototype, "setPoints", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsPolyline.prototype, "setColor", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsPolyline.prototype, "setWidth", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsPolyline.prototype, "setVisible", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsPolyline.prototype, "setZIndex", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsPolyline.prototype, "setGeoDesic", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsPolyline.prototype, "getMap", null);
    return GoogleMapsPolyline;
}());
exports.GoogleMapsPolyline = GoogleMapsPolyline;
/**
 * @private
 */
var GoogleMapsPolygon = (function () {
    function GoogleMapsPolygon(_objectInstance) {
        this._objectInstance = _objectInstance;
    }
    GoogleMapsPolygon.prototype.addEventListener = function (event) {
        var _this = this;
        return new Observable_1.Observable(function (observer) {
            _this._objectInstance.addEventListener(event, observer.next.bind(observer));
            return function () { return _this._objectInstance.removeEventListener(event, observer.next.bind(observer)); };
        });
    };
    GoogleMapsPolygon.prototype.getPoints = function () { return; };
    GoogleMapsPolygon.prototype.getStrokeColor = function () { return; };
    GoogleMapsPolygon.prototype.getFillColor = function () { return; };
    GoogleMapsPolygon.prototype.getStrokeWidth = function () { return; };
    GoogleMapsPolygon.prototype.getGeodesic = function () { return; };
    GoogleMapsPolygon.prototype.getVisible = function () { return; };
    GoogleMapsPolygon.prototype.getZIndex = function () { return; };
    GoogleMapsPolygon.prototype.remove = function () { };
    GoogleMapsPolygon.prototype.setPoints = function (points) { };
    GoogleMapsPolygon.prototype.setStrokeColor = function (strokeColor) { };
    GoogleMapsPolygon.prototype.setFillColor = function (fillColor) { };
    GoogleMapsPolygon.prototype.setStrokeWidth = function (strokeWidth) { };
    GoogleMapsPolygon.prototype.setVisible = function (visible) { };
    GoogleMapsPolygon.prototype.setZIndex = function (zIndex) { };
    GoogleMapsPolygon.prototype.setGeodesic = function (geodesic) { };
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsPolygon.prototype, "getPoints", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsPolygon.prototype, "getStrokeColor", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsPolygon.prototype, "getFillColor", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsPolygon.prototype, "getStrokeWidth", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsPolygon.prototype, "getGeodesic", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsPolygon.prototype, "getVisible", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsPolygon.prototype, "getZIndex", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsPolygon.prototype, "remove", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsPolygon.prototype, "setPoints", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsPolygon.prototype, "setStrokeColor", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsPolygon.prototype, "setFillColor", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsPolygon.prototype, "setStrokeWidth", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsPolygon.prototype, "setVisible", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsPolygon.prototype, "setZIndex", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsPolygon.prototype, "setGeodesic", null);
    return GoogleMapsPolygon;
}());
exports.GoogleMapsPolygon = GoogleMapsPolygon;
/**
 * @private
 */
var GoogleMapsTileOverlay = (function () {
    function GoogleMapsTileOverlay(_objectInstance) {
        this._objectInstance = _objectInstance;
    }
    GoogleMapsTileOverlay.prototype.getVisible = function () { return; };
    GoogleMapsTileOverlay.prototype.setVisible = function (visible) { };
    GoogleMapsTileOverlay.prototype.getFadeIn = function () { return; };
    GoogleMapsTileOverlay.prototype.setFadeIn = function (fadeIn) { };
    GoogleMapsTileOverlay.prototype.getZIndex = function () { return; };
    GoogleMapsTileOverlay.prototype.setZIndex = function (zIndex) { };
    GoogleMapsTileOverlay.prototype.getOpacity = function () { return; };
    GoogleMapsTileOverlay.prototype.setOpacity = function (opacity) { };
    GoogleMapsTileOverlay.prototype.clearTileCache = function () { };
    GoogleMapsTileOverlay.prototype.remove = function () { };
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsTileOverlay.prototype, "getVisible", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsTileOverlay.prototype, "setVisible", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsTileOverlay.prototype, "getFadeIn", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsTileOverlay.prototype, "setFadeIn", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsTileOverlay.prototype, "getZIndex", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsTileOverlay.prototype, "setZIndex", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsTileOverlay.prototype, "getOpacity", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsTileOverlay.prototype, "setOpacity", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsTileOverlay.prototype, "clearTileCache", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsTileOverlay.prototype, "remove", null);
    return GoogleMapsTileOverlay;
}());
exports.GoogleMapsTileOverlay = GoogleMapsTileOverlay;
/**
 * @private
 */
var GoogleMapsGroundOverlay = (function () {
    function GoogleMapsGroundOverlay(_objectInstance) {
        this._objectInstance = _objectInstance;
    }
    GoogleMapsGroundOverlay.prototype.setBearing = function (bearing) { };
    GoogleMapsGroundOverlay.prototype.getBearing = function () { return; };
    GoogleMapsGroundOverlay.prototype.setOpacity = function (opacity) { };
    GoogleMapsGroundOverlay.prototype.getOpacity = function () { return; };
    GoogleMapsGroundOverlay.prototype.setVisible = function (visible) { };
    GoogleMapsGroundOverlay.prototype.getVisible = function () { return; };
    GoogleMapsGroundOverlay.prototype.setImage = function (image) { };
    ;
    GoogleMapsGroundOverlay.prototype.remove = function () { };
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsGroundOverlay.prototype, "setBearing", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsGroundOverlay.prototype, "getBearing", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsGroundOverlay.prototype, "setOpacity", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsGroundOverlay.prototype, "getOpacity", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsGroundOverlay.prototype, "setVisible", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsGroundOverlay.prototype, "getVisible", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsGroundOverlay.prototype, "setImage", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsGroundOverlay.prototype, "remove", null);
    return GoogleMapsGroundOverlay;
}());
exports.GoogleMapsGroundOverlay = GoogleMapsGroundOverlay;
/**
 * @private
 */
var GoogleMapsKmlOverlay = (function () {
    function GoogleMapsKmlOverlay(_objectInstance) {
        this._objectInstance = _objectInstance;
    }
    GoogleMapsKmlOverlay.prototype.remove = function () { };
    GoogleMapsKmlOverlay.prototype.getOverlays = function () { return; };
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsKmlOverlay.prototype, "remove", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsKmlOverlay.prototype, "getOverlays", null);
    return GoogleMapsKmlOverlay;
}());
exports.GoogleMapsKmlOverlay = GoogleMapsKmlOverlay;
/**
 * @private
 */
var GoogleMapsLatLngBounds = (function () {
    function GoogleMapsLatLngBounds(southwestOrArrayOfLatLng, northeast) {
        var args = !!northeast ? [southwestOrArrayOfLatLng, northeast] : southwestOrArrayOfLatLng;
        this._objectInstance = new plugin.google.maps.LatLngBounds(args);
    }
    Object.defineProperty(GoogleMapsLatLngBounds.prototype, "northeast", {
        get: function () { return; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GoogleMapsLatLngBounds.prototype, "southwest", {
        get: function () { return; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GoogleMapsLatLngBounds.prototype, "type", {
        get: function () { return; },
        enumerable: true,
        configurable: true
    });
    GoogleMapsLatLngBounds.prototype.toString = function () { return; };
    GoogleMapsLatLngBounds.prototype.toUrlValue = function (precision) { return; };
    GoogleMapsLatLngBounds.prototype.extend = function (LatLng) { };
    GoogleMapsLatLngBounds.prototype.contains = function (LatLng) { return; };
    GoogleMapsLatLngBounds.prototype.getCenter = function () { return; };
    __decorate([
        plugin_1.InstanceProperty
    ], GoogleMapsLatLngBounds.prototype, "northeast", null);
    __decorate([
        plugin_1.InstanceProperty
    ], GoogleMapsLatLngBounds.prototype, "southwest", null);
    __decorate([
        plugin_1.InstanceProperty
    ], GoogleMapsLatLngBounds.prototype, "type", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsLatLngBounds.prototype, "toString", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsLatLngBounds.prototype, "toUrlValue", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsLatLngBounds.prototype, "extend", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsLatLngBounds.prototype, "contains", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], GoogleMapsLatLngBounds.prototype, "getCenter", null);
    return GoogleMapsLatLngBounds;
}());
exports.GoogleMapsLatLngBounds = GoogleMapsLatLngBounds;
/**
 * @private
 */
var GoogleMapsLatLng = (function () {
    function GoogleMapsLatLng(lat, lng) {
        this.lat = lat;
        this.lng = lng;
    }
    GoogleMapsLatLng.prototype.equals = function (other) {
        return this.lat === other.lat && this.lng === other.lng;
    };
    GoogleMapsLatLng.prototype.toString = function () {
        return this.lat + ',' + this.lng;
    };
    GoogleMapsLatLng.prototype.toUrlValue = function (precision) {
        precision = precision || 6;
        return this.lat.toFixed(precision) + ',' + this.lng.toFixed(precision);
    };
    return GoogleMapsLatLng;
}());
exports.GoogleMapsLatLng = GoogleMapsLatLng;
/**
 * @private
 */
var Geocoder = (function () {
    function Geocoder() {
    }
    /**
     * Converts position to address and vice versa
     * @param {GeocoderRequest} request Request object with either an address or a position
     * @returns {Promise<GeocoderResult[]>}
     */
    Geocoder.geocode = function (request) {
        return new Promise(function (resolve, reject) {
            if (!plugin || !plugin.google || !plugin.google.maps || !plugin.google.maps.Geocoder) {
                plugin_1.pluginWarn({
                    pluginName: 'GoogleMap',
                    plugin: 'plugin.google.maps.Map'
                });
                reject({ error: 'plugin_not_installed' });
            }
            else {
                plugin.google.maps.Geocoder.geocode(request, resolve);
            }
        });
    };
    return Geocoder;
}());
exports.Geocoder = Geocoder;

},{"./plugin":82,"rxjs/Observable":113}],53:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name Hotspot
 * @description
 * @usage
 * ```typescript
 * import { Hotspot, Network } from 'ionic-native';
 *
 *
 * Hotspot.scanWifi().then((networks: Array<Network>) => {
 *     console.log(networks);
 * });
 *
 * ```
 * @interfaces
 * HotspotConnectionInfo
 * HotspotNetwork
 * HotspotNetworkConfig
 * HotspotDevice
 */
var Hotspot = (function () {
    function Hotspot() {
    }
    /**
     * @returns {Promise<boolean>}
     */
    Hotspot.isAvailable = function () { return; };
    /**
     * @returns {Promise<boolean>}
     */
    Hotspot.toggleWifi = function () { return; };
    /**
     * Configures and starts hotspot with SSID and Password
     *
     * @param {string}    SSID        - SSID of your new Access Point
     * @param {string}    mode        - encryption mode (Open, WEP, WPA, WPA_PSK)
     * @param {string}    password    - password for your new Access Point
     *
     * @returns {Promise<void>}        - Promise to call once hotspot is started, or reject upon failure
     */
    Hotspot.createHotspot = function (ssid, mode, password) { return; };
    /**
     * Turns on Access Point
     *
     * @returns {Promise<boolean>} - true if AP is started
     */
    Hotspot.startHotspot = function () { return; };
    /**
     * Configures hotspot with SSID and Password
     *
     * @param {string}    SSID        - SSID of your new Access Point
     * @param {string}    mode        - encryption mode (Open, WEP, WPA, WPA_PSK)
     * @param {string}    password    - password for your new Access Point
     *
     * @returns {Promise<void>}        - Promise to call when hotspot is configured, or reject upon failure
     */
    Hotspot.configureHotspot = function (ssid, mode, password) { return; };
    /**
     * Turns off Access Point
     *
     * @returns {Promise<boolean>} - Promise to turn off the hotspot, true on success, false on failure
     */
    Hotspot.stopHotspot = function () { return; };
    /**
     * Checks if hotspot is enabled
     *
     * @returns {Promise<void>}    - Promise that hotspot is enabled, rejected if it is not enabled
     */
    Hotspot.isHotspotEnabled = function () { return; };
    /**
     * @returns {Promise<Array<HotspotDevice>>}
     */
    Hotspot.getAllHotspotDevices = function () { return; };
    /**
     * Connect to a WiFi network
     *
     * @param {string}    ssid
     *      SSID to connect
     * @param {string}    password
     *      password to use
     *
     * @returns {Promise<void>}
     *      Promise that connection to the WiFi network was successfull, rejected if unsuccessful
     */
    Hotspot.connectToWifi = function (ssid, password) { return; };
    /**
     * Connect to a WiFi network
     *
     * @param {string}   ssid
     *      SSID to connect
     * @param {string}   password
     *      Password to use
     * @param {string}   authentication
     *      Authentication modes to use (LEAP, SHARED, OPEN)
     * @param {string[]} encryption
     *      Encryption modes to use (CCMP, TKIP, WEP104, WEP40)
     *
     * @returns {Promise<void>}
     *      Promise that connection to the WiFi network was successfull, rejected if unsuccessful
     */
    Hotspot.connectToWifiAuthEncrypt = function (ssid, password, authentication, encryption) { return; };
    /**
     * Add a WiFi network
     *
     * @param {string}    ssid
     *      SSID of network
     * @param {string}    mode
     *      Authentication mode of (Open, WEP, WPA, WPA_PSK)
     * @param {string}    password
     *      Password for network
     *
     * @returns {Promise<void>}
     *      Promise that adding the WiFi network was successfull, rejected if unsuccessful
     */
    Hotspot.addWifiNetwork = function (ssid, mode, password) { return; };
    /**
     * Remove a WiFi network
     *
     * @param {string}    ssid
     *      SSID of network
     *
     * @returns {Promise<void>}
     *      Promise that removing the WiFi network was successfull, rejected if unsuccessful
     */
    Hotspot.removeWifiNetwork = function (ssid) { return; };
    /**
     * @returns {Promise<boolean>}
     */
    Hotspot.isConnectedToInternet = function () { return; };
    /**
     * @returns {Promise<boolean>}
     */
    Hotspot.isConnectedToInternetViaWifi = function () { return; };
    /**
     * @returns {Promise<boolean>}
     */
    Hotspot.isWifiOn = function () { return; };
    /**
     * @returns {Promise<boolean>}
     */
    Hotspot.isWifiSupported = function () { return; };
    /**
     * @returns {Promise<boolean>}
     */
    Hotspot.isWifiDirectSupported = function () { return; };
    /**
     * @returns {Promise<Array<HotspotNetwork>>}
     */
    Hotspot.scanWifi = function () { return; };
    /**
     * @returns {Promise<Array<HotspotNetwork>>}
     */
    Hotspot.scanWifiByLevel = function () { return; };
    /**
     * @returns {Promise<any>}
     */
    Hotspot.startWifiPeriodicallyScan = function (interval, duration) { return; };
    /**
     * @returns {Promise<any>}
     */
    Hotspot.stopWifiPeriodicallyScan = function () { return; };
    /**
     * @returns {Promise<HotspotNetworkConfig>}
     */
    Hotspot.getNetConfig = function () { return; };
    /**
     * @returns {Promise<HotspotConnectionInfo>}
     */
    Hotspot.getConnectionInfo = function () { return; };
    /**
     * @returns {Promise<string>}
     */
    Hotspot.pingHost = function (ip) { return; };
    /**
     * Gets MAC Address associated with IP Address from ARP File
     *
     * @param {string}        ip  - IP Address that you want the MAC Address of
     *
     * @returns {Promise<string>}  - A Promise for the MAC Address
     */
    Hotspot.getMacAddressOfHost = function (ip) { return; };
    /**
     * Checks if IP is live using DNS
     *
     * @param {string}        ip  - IP Address you want to test
     *
     * @returns {Promise<boolean>} - A Promise for whether the IP Address is reachable
     */
    Hotspot.isDnsLive = function (ip) { return; };
    /**
     * Checks if IP is live using socket And PORT
     *
     * @param {string}        ip  - IP Address you want to test
     *
     * @returns {Promise<boolean>} - A Promise for whether the IP Address is reachable
     */
    Hotspot.isPortLive = function (ip) { return; };
    /**
     * Checks if device is rooted
     *
     * @returns {Promise<boolean>} - A Promise for whether the device is rooted
     */
    Hotspot.isRooted = function () { return; };
    __decorate([
        plugin_1.Cordova()
    ], Hotspot, "isAvailable", null);
    __decorate([
        plugin_1.Cordova()
    ], Hotspot, "toggleWifi", null);
    __decorate([
        plugin_1.Cordova()
    ], Hotspot, "createHotspot", null);
    __decorate([
        plugin_1.Cordova()
    ], Hotspot, "startHotspot", null);
    __decorate([
        plugin_1.Cordova()
    ], Hotspot, "configureHotspot", null);
    __decorate([
        plugin_1.Cordova()
    ], Hotspot, "stopHotspot", null);
    __decorate([
        plugin_1.Cordova()
    ], Hotspot, "isHotspotEnabled", null);
    __decorate([
        plugin_1.Cordova()
    ], Hotspot, "getAllHotspotDevices", null);
    __decorate([
        plugin_1.Cordova()
    ], Hotspot, "connectToWifi", null);
    __decorate([
        plugin_1.Cordova()
    ], Hotspot, "connectToWifiAuthEncrypt", null);
    __decorate([
        plugin_1.Cordova()
    ], Hotspot, "addWifiNetwork", null);
    __decorate([
        plugin_1.Cordova()
    ], Hotspot, "removeWifiNetwork", null);
    __decorate([
        plugin_1.Cordova()
    ], Hotspot, "isConnectedToInternet", null);
    __decorate([
        plugin_1.Cordova()
    ], Hotspot, "isConnectedToInternetViaWifi", null);
    __decorate([
        plugin_1.Cordova()
    ], Hotspot, "isWifiOn", null);
    __decorate([
        plugin_1.Cordova()
    ], Hotspot, "isWifiSupported", null);
    __decorate([
        plugin_1.Cordova()
    ], Hotspot, "isWifiDirectSupported", null);
    __decorate([
        plugin_1.Cordova()
    ], Hotspot, "scanWifi", null);
    __decorate([
        plugin_1.Cordova()
    ], Hotspot, "scanWifiByLevel", null);
    __decorate([
        plugin_1.Cordova()
    ], Hotspot, "startWifiPeriodicallyScan", null);
    __decorate([
        plugin_1.Cordova()
    ], Hotspot, "stopWifiPeriodicallyScan", null);
    __decorate([
        plugin_1.Cordova()
    ], Hotspot, "getNetConfig", null);
    __decorate([
        plugin_1.Cordova()
    ], Hotspot, "getConnectionInfo", null);
    __decorate([
        plugin_1.Cordova()
    ], Hotspot, "pingHost", null);
    __decorate([
        plugin_1.Cordova()
    ], Hotspot, "getMacAddressOfHost", null);
    __decorate([
        plugin_1.Cordova()
    ], Hotspot, "isDnsLive", null);
    __decorate([
        plugin_1.Cordova()
    ], Hotspot, "isPortLive", null);
    __decorate([
        plugin_1.Cordova()
    ], Hotspot, "isRooted", null);
    Hotspot = __decorate([
        plugin_1.Plugin({
            pluginName: 'Hotspot',
            plugin: 'cordova-plugin-hotspot',
            pluginRef: 'cordova.plugins.hotspot',
            repo: 'https://github.com/hypery2k/cordova-hotspot-plugin',
            platforms: ['Android']
        })
    ], Hotspot);
    return Hotspot;
}());
exports.Hotspot = Hotspot;

},{"./plugin":82}],54:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name HTTP
 * @description
 * Cordova / Phonegap plugin for communicating with HTTP servers. Supports iOS and Android.
 *
 * Advantages over Javascript requests:
 * - Background threading - all requests are done in a background thread
 * - SSL Pinning
 *
 * @usage
 * ```
 * import { HTTP } from 'ionic-native';
 *
 * HTTP.get('http://ionic.io', {}, {})
 *   .then(data => {
 *
 *     console.log(data.status);
 *     console.log(data.data); // data received by server
 *     console.log(data.headers);
 *
 *   })
 *   .catch(error => {
 *
 *     console.log(error.status);
 *     console.log(error.error); // error message as string
 *     console.log(error.headers);
 *
 *   });
 *
 * ```
 * @interfaces
 * HTTPResponse
 */
var HTTP = (function () {
    function HTTP() {
    }
    /**
     * This returns an object representing a basic HTTP Authorization header of the form.
     * @param username {string} Username
     * @param password {string} Password
     * @returns {Object} an object representing a basic HTTP Authorization header of the form {'Authorization': 'Basic base64encodedusernameandpassword'}
     */
    HTTP.getBasicAuthHeader = function (username, password) { return; };
    /**
     * This sets up all future requests to use Basic HTTP authentication with the given username and password.
     * @param username {string} Username
     * @param password {string} Password
     */
    HTTP.useBasicAuth = function (username, password) { };
    /**
     * Set a header for all future requests. Takes a header and a value.
     * @param header {string} The name of the header
     * @param value {string} The value of the header
     */
    HTTP.setHeader = function (header, value) { };
    /**
     * Enable or disable SSL Pinning. This defaults to false.
     *
     * To use SSL pinning you must include at least one .cer SSL certificate in your app project. You can pin to your server certificate or to one of the issuing CA certificates. For ios include your certificate in the root level of your bundle (just add the .cer file to your project/target at the root level). For android include your certificate in your project's platforms/android/assets folder. In both cases all .cer files found will be loaded automatically. If you only have a .pem certificate see this stackoverflow answer. You want to convert it to a DER encoded certificate with a .cer extension.
     *
     * As an alternative, you can store your .cer files in the www/certificates folder.
     * @param enable {boolean} Set to true to enable
     * @returns {Promise<void>} returns a promise that will resolve on success, and reject on failure
     */
    HTTP.enableSSLPinning = function (enable) { return; };
    /**
     * Accept all SSL certificates. Or disabled accepting all certificates. Defaults to false.
     * @param accept {boolean} Set to true to accept
     * @returns {Promise<void>} returns a promise that will resolve on success, and reject on failure
     */
    HTTP.acceptAllCerts = function (accept) { return; };
    /**
     * Whether or not to validate the domain name in the certificate. This defaults to true.
     * @param validate {boolean} Set to true to validate
     * @returns {Promise<void>} returns a promise that will resolve on success, and reject on failure
     */
    HTTP.validateDomainName = function (validate) { return; };
    /**
     * Make a POST request
     * @param url {string} The url to send the request to
     * @param body {Object} The body of the request
     * @param headers {Object} The headers to set for this request
     * @returns {Promise<HTTPResponse>} returns a promise that resolve on success, and reject on failure
     */
    HTTP.post = function (url, body, headers) { return; };
    /**
     *
     * @param url {string} The url to send the request to
     * @param parameters {Object} Parameters to send with the request
     * @param headers {Object} The headers to set for this request
     * @returns {Promise<HTTPResponse>} returns a promise that resolve on success, and reject on failure
     */
    HTTP.get = function (url, parameters, headers) { return; };
    /**
     *
     * @param url {string} The url to send the request to
     * @param body {Object} The body of the request
     * @param headers {Object} The headers to set for this request
     * @param filePath {string} The local path of the file to upload
     * @param name {string} The name of the parameter to pass the file along as
     * @returns {Promise<HTTPResponse>} returns a promise that resolve on success, and reject on failure
     */
    HTTP.uploadFile = function (url, body, headers, filePath, name) { return; };
    /**
     *
     * @param url {string} The url to send the request to
     * @param body {Object} The body of the request
     * @param headers {Object} The headers to set for this request
     * @param filePath {string} The path to donwload the file to, including the file name.
     * @returns {Promise<HTTPResponse>} returns a promise that resolve on success, and reject on failure
     */
    HTTP.downloadFile = function (url, body, headers, filePath) { return; };
    __decorate([
        plugin_1.Cordova({ sync: true })
    ], HTTP, "getBasicAuthHeader", null);
    __decorate([
        plugin_1.Cordova({ sync: true })
    ], HTTP, "useBasicAuth", null);
    __decorate([
        plugin_1.Cordova({ sync: true })
    ], HTTP, "setHeader", null);
    __decorate([
        plugin_1.Cordova()
    ], HTTP, "enableSSLPinning", null);
    __decorate([
        plugin_1.Cordova()
    ], HTTP, "acceptAllCerts", null);
    __decorate([
        plugin_1.Cordova()
    ], HTTP, "validateDomainName", null);
    __decorate([
        plugin_1.Cordova()
    ], HTTP, "post", null);
    __decorate([
        plugin_1.Cordova()
    ], HTTP, "get", null);
    __decorate([
        plugin_1.Cordova()
    ], HTTP, "uploadFile", null);
    __decorate([
        plugin_1.Cordova()
    ], HTTP, "downloadFile", null);
    HTTP = __decorate([
        plugin_1.Plugin({
            pluginName: 'HTTP',
            plugin: 'cordova-plugin-http',
            pluginRef: 'cordovaHTTP',
            repo: 'https://github.com/wymsee/cordova-HTTP',
            platforms: ['Android', 'iOS']
        })
    ], HTTP);
    return HTTP;
}());
exports.HTTP = HTTP;

},{"./plugin":82}],55:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name Httpd
 * @description
 * Embedded httpd for Cordova apps. Light weight HTTP server.
 * @usage
 * ```typescript
 * import {Httpd, HttpdOptions} from 'ionic-native';
 *
 * let options: HttpdOptions = {
 *      www_root: 'httpd_root', // relative path to app's www directory
 *      port: 80,
 *      localhost_only: false
 *  };
 *
 * Httpd.startServer(options).subscribe((data) => {
 *  console.log('Server is live');
 * });
 *
 * ```
 * @interfaces
 * HttpdOptions
 */
var Httpd = (function () {
    function Httpd() {
    }
    /**
     * Starts a web server.
     * @param options {HttpdOptions}
     * @returns {Observable<string>} Returns an Observable. Subscribe to receive the URL for your web server (if succeeded). Unsubscribe to stop the server.
     */
    Httpd.startServer = function (options) { return; };
    /**
     * Gets the URL of the running server
     * @returns {Promise<string>} Returns a promise that resolves with the URL of the web server.
     */
    Httpd.getUrl = function () { return; };
    /**
     * Get the local path of the running webserver
     * @returns {Promise<string>} Returns a promise that resolves with the local path of the web server.
      */
    Httpd.getLocalPath = function () { return; };
    __decorate([
        plugin_1.Cordova({
            observable: true,
            clearFunction: 'stopServer'
        })
    ], Httpd, "startServer", null);
    __decorate([
        plugin_1.Cordova()
    ], Httpd, "getUrl", null);
    __decorate([
        plugin_1.Cordova()
    ], Httpd, "getLocalPath", null);
    Httpd = __decorate([
        plugin_1.Plugin({
            pluginName: 'Httpd',
            plugin: 'https://github.com/floatinghotpot/cordova-httpd.git',
            pluginRef: 'cordova.plugins.CorHttpd',
            repo: 'https://github.com/floatinghotpot/cordova-httpd',
            platforms: ['iOS', 'Android']
        })
    ], Httpd);
    return Httpd;
}());
exports.Httpd = Httpd;

},{"./plugin":82}],56:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
var Observable_1 = require('rxjs/Observable');
/**
 * @name IBeacon
 * @description
 * This plugin provides functions for working with iBeacons.
 *
 *  The plugin's API closely mimics the one exposed through the [CLLocationManager](https://developer.apple.com/library/ios/documentation/CoreLocation/Reference/CLLocationManager_Class/index.html) introduced in iOS 7.
 *
 * @usage
 *
 * ```typescript
 * import { IBeacon } from 'ionic-native';
 *
 *
 * // Request permission to use location on iOS
 * IBeacon.requestAlwaysAuthorization();
 * // create a new delegate and register it with the native layer
 * let delegate = IBeacon.IBeaconDelegate();
 *
 * // Subscribe to some of the delegate's event handlers
 * delegate.didRangeBeaconsInRegion()
 *   .subscribe(
 *     data => console.log('didRangeBeaconsInRegion: ', data),
 *     error => console.error();
 *   );
 * delegate.didStartMonitoringForRegion()
 *   .subscribe(
 *     data => console.log('didStartMonitoringForRegion: ', data),
 *     error => console.error();
 *   );
 * delegate.didEnterRegion()
 *   .subscribe(
 *     data => {
 *       console.log('didEnterRegion: ', data);
 *     }
 *   );
 *
 * let beaconRegion = IBeacon.BeaconRegion('deskBeacon','F7826DA6-ASDF-ASDF-8024-BC5B71E0893E');
 *
 * IBeacon.startMonitoringForRegion(beaconRegion)
 *   .then(
 *     () => console.log('Native layer recieved the request to monitoring'),
 *     error => console.error('Native layer failed to begin monitoring: ', error)
 *   );
 * ```
 * @interfaces
 * Beacon
 * BeaconRegion
 * CircularRegion
 * IBeaconPluginResult
 * IBeaconDelegate
 *
 */
var IBeacon = (function () {
    function IBeacon() {
    }
    /**
     * Instances of this class are delegates between the {@link LocationManager} and
     * the code that consumes the messages generated on in the native layer.
     *
     * @returns {IBeaconDelegate} An instance of the type {@type Delegate}.
     */
    IBeacon.Delegate = function () {
        var delegate = new cordova.plugins.locationManager.Delegate();
        delegate.didChangeAuthorizationStatus = function (pluginResult) {
            return new Observable_1.Observable(function (observer) {
                var cb = function (data) { return observer.next(data); };
                return delegate.didChangeAuthorizationStatus = cb;
            });
        };
        delegate.didDetermineStateForRegion = function (pluginResult) {
            return new Observable_1.Observable(function (observer) {
                var cb = function (data) { return observer.next(data); };
                return delegate.didDetermineStateForRegion = cb;
            });
        };
        delegate.didEnterRegion = function (pluginResult) {
            return new Observable_1.Observable(function (observer) {
                var cb = function (data) { return observer.next(data); };
                return delegate.didEnterRegion = cb;
            });
        };
        delegate.didExitRegion = function (pluginResult) {
            return new Observable_1.Observable(function (observer) {
                var cb = function (data) { return observer.next(data); };
                return delegate.didExitRegion = cb;
            });
        };
        delegate.didRangeBeaconsInRegion = function (pluginResult) {
            return new Observable_1.Observable(function (observer) {
                var cb = function (data) { return observer.next(data); };
                return delegate.didRangeBeaconsInRegion = cb;
            });
        };
        delegate.didStartMonitoringForRegion = function (pluginResult) {
            return new Observable_1.Observable(function (observer) {
                var cb = function (data) { return observer.next(data); };
                return delegate.didStartMonitoringForRegion = cb;
            });
        };
        delegate.monitoringDidFailForRegionWithError = function (pluginResult) {
            return new Observable_1.Observable(function (observer) {
                var cb = function (data) { return observer.next(data); };
                return delegate.monitoringDidFailForRegionWithError = cb;
            });
        };
        delegate.peripheralManagerDidStartAdvertising = function (pluginResult) {
            return new Observable_1.Observable(function (observer) {
                var cb = function (data) { return observer.next(data); };
                return delegate.peripheralManagerDidStartAdvertising = cb;
            });
        };
        delegate.peripheralManagerDidUpdateState = function (pluginResult) {
            return new Observable_1.Observable(function (observer) {
                var cb = function (data) { return observer.next(data); };
                return delegate.peripheralManagerDidUpdateState = cb;
            });
        };
        cordova.plugins.locationManager.setDelegate(delegate);
        return delegate;
    };
    /**
     * Creates a new BeaconRegion
     *
     * @param {String} identifier @see {CLRegion}
     * @param {String} uuid The proximity ID of the beacon being targeted.
     * This value must not be blank nor invalid as a UUID.
     * @param {Number} major The major value that you use to identify one or more beacons.
     * @param {Number} minor The minor value that you use to identify a specific beacon.
     * @param {BOOL} notifyEntryStateOnDisplay
     *
     * @returns {BeaconRegion} Returns the BeaconRegion that was created
     */
    IBeacon.BeaconRegion = function (identifer, uuid, major, minor, notifyEntryStateOnDisplay) {
        return new cordova.plugins.locationManager.BeaconRegion(identifer, uuid, major, minor, notifyEntryStateOnDisplay);
    };
    /**
     * @returns {IBeaconDelegate} Returns the IBeaconDelegate
     */
    IBeacon.getDelegate = function () { return; };
    /**
     * @param {IBeaconDelegate} delegate An instance of a delegate to register with the native layer.
     *
     * @returns {IBeaconDelegate} Returns the IBeaconDelegate
     */
    IBeacon.setDelegate = function (delegate) { return; };
    /**
     * Signals the native layer that the client side is ready to consume messages.
     * Readiness here means that it has a {IBeaconDelegate} set by the consumer javascript
     * code.
     *
     * The {LocationManager.setDelegate()} will implicitly call this method as well,
     * therefore the only case when you have to call this manually is if you don't
     * wish to specify a {IBeaconDelegate} of yours.
     *
     * The purpose of this signaling mechanism is to make the events work when the
     * app is being woken up by the Operating System to give it a chance to handle
     * region monitoring events for example.
     *
     * If you don't set a {IBeaconDelegate} and don't call this method manually, an error
     * message get emitted in the native runtime and the DOM as well after a certain
     * period of time.
     *
     * @returns {Promise<void>} Returns a promise which is resolved as soon as the
     * native layer acknowledged the request and started to send events.
     */
    IBeacon.onDomDelegateReady = function () { return; };
    /**
     * Determines if bluetooth is switched on, according to the native layer.
     * @returns {Promise<boolean>} Returns a promise which is resolved with a {Boolean}
     * indicating whether bluetooth is active.
     */
    IBeacon.isBluetoothEnabled = function () { return; };
    /**
     * Enables Bluetooth using the native Layer. (ANDROID ONLY)
     *
     * @returns {Promise<void>} Returns a promise which is resolved when Bluetooth
     * could be enabled. If not, the promise will be rejected with an error.
     */
    IBeacon.enableBluetooth = function () { return; };
    /**
     * Disables Bluetooth using the native Layer. (ANDROID ONLY)
     *
     * @returns {Promise<void>} Returns a promise which is resolved when Bluetooth
     * could be enabled. If not, the promise will be rejected with an error.
     */
    IBeacon.disableBluetooth = function () { return; };
    /**
     * Start monitoring the specified region.
     *
     * If a region of the same type with the same identifier is already being
     * monitored for this application,
     * it will be removed from monitoring. For circular regions, the region
     * monitoring service will prioritize
     * regions by their size, favoring smaller regions over larger regions.
     *
     * This is done asynchronously and may not be immediately reflected in monitoredRegions.
     *
     * @param {Region} region An instance of {Region} which will be monitored
     * by the operating system.
     *
     * @returns {Promise<string>} Returns a promise which is resolved as soon as the
     * native layer acknowledged the dispatch of the monitoring request.
     */
    IBeacon.startMonitoringForRegion = function (region) { return; };
    /**
     * Stop monitoring the specified region.  It is valid to call
     * stopMonitoringForRegion: for a region that was registered for monitoring
     * with a different location manager object, during this or previous
     * launches of your application.
     *
     * This is done asynchronously and may not be immediately reflected in monitoredRegions.
     *
     * @param {Region} region An instance of {Region} which will be monitored
     * by the operating system.
     *
     * @returns {Promise<void>} Returns a promise which is resolved as soon as the
     * native layer acknowledged the dispatch of the request to stop monitoring.
     */
    IBeacon.stopMonitoringForRegion = function (region) { return; };
    /**
     * Request state the for specified region. When result is ready
     * didDetermineStateForRegion is triggered. This can be any region,
     * also those which is not currently monitored.
     *
     * This is done asynchronously and may not be immediately reflected in monitoredRegions.
     *
     * @param {Region} region An instance of {Region} which will be monitored
     * by the operating system.
     *
     * @returns {Promise<void>} Returns a promise which is resolved as soon as the
     * native layer acknowledged the dispatch of the request to stop monitoring.
     */
    IBeacon.requestStateForRegion = function (region) { return; };
    /**
     * Start ranging the specified beacon region.
     *
     * If a region of the same type with the same identifier is already being
     * monitored for this application, it will be removed from monitoring.
     *
     * This is done asynchronously and may not be immediately reflected in rangedRegions.
     *
     * @param {Region} region An instance of {BeaconRegion} which will be monitored
     * by the operating system.
     *
     * @returns {Promise<void>} Returns a promise which is resolved as soon as the
     * native layer acknowledged the dispatch of the monitoring request.
     */
    IBeacon.startRangingBeaconsInRegion = function (region) { return; };
    /**
     * Stop ranging the specified region.  It is valid to call
     * stopMonitoringForRegion: for a region that was registered for ranging
     * with a different location manager object, during this or previous
     * launches of your application.
     *
     * This is done asynchronously and may not be immediately reflected in rangedRegions.
     *
     * @param {Region} region An instance of {BeaconRegion} which will be monitored
     * by the operating system.
     *
     * @returns {Promise<void>} Returns a promise which is resolved as soon as the
     * native layer acknowledged the dispatch of the request to stop monitoring.
     */
    IBeacon.stopRangingBeaconsInRegion = function (region) { return; };
    /**
     * Queries the native layer to determine the current authorization in effect.
     *
     * @returns {Promise<any>} Returns a promise which is resolved with the
     * requested authorization status.
     */
    IBeacon.getAuthorizationStatus = function () { return; };
    /**
     * For iOS 8 and above only. The permission model has changed by Apple in iOS 8, making it necessary for apps to
     * explicitly request permissions via methods like these:
     * <a href="https://developer.apple.com/library/prerelease/iOS/documentation/CoreLocation/Reference/CLLocationManager_Class/index.html#//apple_ref/occ/instm/CLLocationManager/requestWhenInUseAuthorization">requestWhenInUseAuthorization</a>
     * <a href="https://developer.apple.com/library/prerelease/iOS/documentation/CoreLocation/Reference/CLLocationManager_Class/index.html#//apple_ref/occ/instm/CLLocationManager/requestAlwaysAuthorization">requestAlwaysAuthorization</a>
     *
     * If you are using this plugin on Android devices only, you will never have to use this, nor {@code requestAlwaysAuthorization}
     * @returns {Promise<void>} Returns a promise that is resolved when the request dialog is shown.
     */
    IBeacon.requestWhenInUseAuthorization = function () { return; };
    /**
     * See the docuemntation of {@code requestWhenInUseAuthorization} for further details.
     *
     * @returns {Promise<void>} Returns a promise which is resolved when the native layer
     * shows the request dialog.
     */
    IBeacon.requestAlwaysAuthorization = function () { return; };
    /**
     *
     * @returns {Promise<Region[]>} Returns a promise which is resolved with an {Array}
     * of {Region} instances that are being monitored by the native layer.
     */
    IBeacon.getMonitoredRegions = function () { return; };
    /**
     *
     * @returns {Promise<Region[]>} Returns a promise which is resolved with an {Array}
     * of {Region} instances that are being ranged by the native layer.
     */
    IBeacon.getRangedRegions = function () { return; };
    /**
     * Determines if ranging is available or not, according to the native layer.
     * @returns {Promise<boolean>} Returns a promise which is resolved with a {Boolean}
     * indicating whether ranging is available or not.
     */
    IBeacon.isRangingAvailable = function () { return; };
    /**
     * Determines if region type is supported or not, according to the native layer.
     *
     * @param {Region} region An instance of {Region} which will be checked
     * by the operating system.
     *
     * @returns {Promise<boolean>} Returns a promise which is resolved with a {Boolean}
     * indicating whether the region type is supported or not.
     */
    IBeacon.isMonitoringAvailableForClass = function (region) { return; };
    /**
     * Start advertising the specified region.
     *
     * If a region a different identifier is already being advertised for
     * this application, it will be replaced with the new identifier.
     *
     * This call will accept a valid beacon even when no BlueTooth is available,
     * and will start when BlueTooth is powered on. See {IBeaconDelegate.}
     *
     * @param {Region} region An instance of {Region} which will be advertised
     * by the operating system.
     * @param {Integer} measuredPower: Optional parameter, if left empty, the device will
     * use it's own default value.
     *
     * @returns {Promise<void>} Returns a promise which is resolved as soon as the
     * native layer acknowledged the dispatch of the advertising request.
     */
    IBeacon.startAdvertising = function (region, measuredPower) { return; };
    /**
     * Stop advertising as a beacon.
     *
     * This is done asynchronously and may not be immediately reflected in isAdvertising.
     *
     * @returns {Promise<void>} Returns a promise which is resolved as soon as the
     * native layer acknowledged the dispatch of the request to stop advertising.
     */
    IBeacon.stopAdvertising = function (region) { return; };
    /**
     * Determines if advertising is available or not, according to the native layer.
     * @returns {Promise<void>} Returns a promise which is resolved with a {Boolean}
     * indicating whether advertising is available or not.
     */
    IBeacon.isAdvertisingAvailable = function () { return; };
    /**
     * Determines if advertising is currently active, according to the native layer.
     * @returns {Promise<void>} Returns a promise which is resolved with a {Boolean}
     * indicating whether advertising is active.
     */
    IBeacon.isAdvertising = function () { return; };
    /**
     * Disables debug logging in the native layer. Use this method if you want
     * to prevent this plugin from writing to the device logs.
     *
     * @returns {Promise<void>} Returns a promise which is resolved as soon as the
     * native layer has set the logging level accordingly.
     */
    IBeacon.disableDebugLogs = function () { return; };
    /**
     * Enables the posting of debug notifications in the native layer. Use this method if you want
     * to allow the plugin the posting local notifications.
     * This can be very helpful when debugging how to apps behave when launched into the background.
     *
     * @returns {Promise<void>} Returns a promise which is resolved as soon as the
     * native layer has set the flag to enabled.
     */
    IBeacon.enableDebugNotifications = function () { return; };
    /**
     * Disables the posting of debug notifications in the native layer. Use this method if you want
     * to prevent the plugin from posting local notifications.
     *
     * @returns {Promise<void>} Returns a promise which is resolved as soon as the
     * native layer has set the flag to disabled.
     */
    IBeacon.disableDebugNotifications = function () { return; };
    /**
     * Enables debug logging in the native layer. Use this method if you want
     * a debug the inner workings of this plugin.
     *
     * @returns {Promise<void>} Returns a promise which is resolved as soon as the
     * native layer has set the logging level accordingly.
     */
    IBeacon.enableDebugLogs = function () { return; };
    /**
     * Appends the provided [message] to the device logs.
     * Note: If debug logging is turned off, this won't do anything.
     *
     * @param {String} message The message to append to the device logs.
     *
     * @returns {Promise<void>} Returns a promise which is resolved with the log
     * message received by the native layer for appending. The returned message
     * is expected to be equivalent to the one provided in the original call.
     */
    IBeacon.appendToDeviceLog = function (message) { return; };
    __decorate([
        plugin_1.Cordova()
    ], IBeacon, "getDelegate", null);
    __decorate([
        plugin_1.Cordova()
    ], IBeacon, "setDelegate", null);
    __decorate([
        plugin_1.Cordova({ otherPromise: true })
    ], IBeacon, "onDomDelegateReady", null);
    __decorate([
        plugin_1.Cordova({ otherPromise: true })
    ], IBeacon, "isBluetoothEnabled", null);
    __decorate([
        plugin_1.Cordova({ otherPromise: true })
    ], IBeacon, "enableBluetooth", null);
    __decorate([
        plugin_1.Cordova({ otherPromise: true })
    ], IBeacon, "disableBluetooth", null);
    __decorate([
        plugin_1.Cordova({ otherPromise: true })
    ], IBeacon, "startMonitoringForRegion", null);
    __decorate([
        plugin_1.Cordova({ otherPromise: true })
    ], IBeacon, "stopMonitoringForRegion", null);
    __decorate([
        plugin_1.Cordova({ otherPromise: true })
    ], IBeacon, "requestStateForRegion", null);
    __decorate([
        plugin_1.Cordova({ otherPromise: true })
    ], IBeacon, "startRangingBeaconsInRegion", null);
    __decorate([
        plugin_1.Cordova({ otherPromise: true })
    ], IBeacon, "stopRangingBeaconsInRegion", null);
    __decorate([
        plugin_1.Cordova({ otherPromise: true })
    ], IBeacon, "getAuthorizationStatus", null);
    __decorate([
        plugin_1.Cordova({ otherPromise: true })
    ], IBeacon, "requestWhenInUseAuthorization", null);
    __decorate([
        plugin_1.Cordova({ otherPromise: true })
    ], IBeacon, "requestAlwaysAuthorization", null);
    __decorate([
        plugin_1.Cordova({ otherPromise: true })
    ], IBeacon, "getMonitoredRegions", null);
    __decorate([
        plugin_1.Cordova({ otherPromise: true })
    ], IBeacon, "getRangedRegions", null);
    __decorate([
        plugin_1.Cordova({ otherPromise: true })
    ], IBeacon, "isRangingAvailable", null);
    __decorate([
        plugin_1.Cordova({ otherPromise: true })
    ], IBeacon, "isMonitoringAvailableForClass", null);
    __decorate([
        plugin_1.Cordova({ otherPromise: true })
    ], IBeacon, "startAdvertising", null);
    __decorate([
        plugin_1.Cordova({ otherPromise: true })
    ], IBeacon, "stopAdvertising", null);
    __decorate([
        plugin_1.Cordova({ otherPromise: true })
    ], IBeacon, "isAdvertisingAvailable", null);
    __decorate([
        plugin_1.Cordova({ otherPromise: true })
    ], IBeacon, "isAdvertising", null);
    __decorate([
        plugin_1.Cordova({ otherPromise: true })
    ], IBeacon, "disableDebugLogs", null);
    __decorate([
        plugin_1.Cordova({ otherPromise: true })
    ], IBeacon, "enableDebugNotifications", null);
    __decorate([
        plugin_1.Cordova({ otherPromise: true })
    ], IBeacon, "disableDebugNotifications", null);
    __decorate([
        plugin_1.Cordova({ otherPromise: true })
    ], IBeacon, "enableDebugLogs", null);
    __decorate([
        plugin_1.Cordova({ otherPromise: true })
    ], IBeacon, "appendToDeviceLog", null);
    IBeacon = __decorate([
        plugin_1.Plugin({
            pluginName: 'IBeacon',
            plugin: 'cordova-plugin-ibeacon',
            pluginRef: 'cordova.plugins.locationManager',
            repo: 'https://github.com/petermetz/cordova-plugin-ibeacon',
            platforms: ['Android', 'iOS']
        })
    ], IBeacon);
    return IBeacon;
}());
exports.IBeacon = IBeacon;

},{"./plugin":82,"rxjs/Observable":113}],57:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name Image Picker
 * @description
 * Cordova Plugin For Multiple Image Selection
 *
 * Requires Cordova plugin: `cordova-plugin-image-picker`.
 * For more info, please see the https://github.com/wymsee/cordova-imagePicker
 *
 * @usage
 * ```typescript
 * import { ImagePicker } from 'ionic-native';
 *
 *
 *
 * ImagePicker.getPictures(options).then((results) => {
 *   for (var i = 0; i < results.length; i++) {
 *       console.log('Image URI: ' + results[i]);
 *   }
 * }, (err) => { });
 * ```
 * @interfaces
 * ImagePickerOptions
 */
var ImagePicker = (function () {
    function ImagePicker() {
    }
    /**
     * Pick pictures from the library.
     * @param {ImagePickerOptions} options
     * @returns {Promise<any>} Returns a Promise that resolves the image file URI
     * otherwise rejects with an error.
     */
    ImagePicker.getPictures = function (options) { return; };
    /**
     * Check if we have permission to read images
     * @returns {Promise<boolean>} Returns a promise that resolves with a boolean that indicates whether we have permission
     */
    ImagePicker.hasReadPermission = function () { return; };
    /**
     * Request permission to read images
     * @returns {Promise<any>}
     */
    ImagePicker.requestReadPermission = function () { return; };
    __decorate([
        plugin_1.Cordova({
            callbackOrder: 'reverse'
        })
    ], ImagePicker, "getPictures", null);
    __decorate([
        plugin_1.Cordova({
            platforms: ['Android']
        })
    ], ImagePicker, "hasReadPermission", null);
    __decorate([
        plugin_1.Cordova({
            platforms: ['Android']
        })
    ], ImagePicker, "requestReadPermission", null);
    ImagePicker = __decorate([
        plugin_1.Plugin({
            pluginName: 'ImagePicker',
            plugin: 'https://github.com/Telerik-Verified-Plugins/ImagePicker',
            pluginRef: 'window.imagePicker',
            repo: 'https://github.com/Telerik-Verified-Plugins/ImagePicker'
        })
    ], ImagePicker);
    return ImagePicker;
}());
exports.ImagePicker = ImagePicker;

},{"./plugin":82}],58:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name ImageResizer
 * @description
 * Cordova Plugin For Image Resize
 *
 * Requires plugin `info.protonet.imageresizer` - use the Ionic CLI and type in the following command:
 * `ionic plugin add https://github.com/protonet/cordova-plugin-image-resizer.git`
 *
 * For more info, please see the https://github.com/protonet/cordova-plugin-image-resizer
 *
 * @usage
 * ```typescript
 * import { ImageResizer, ImageResizerOptions } from 'ionic-native';
 *
 * let options = {
 *  uri: uri,
 *  folderName: 'Protonet',
 *  quality: 90,
 *  width: 1280,
 *  height: 1280
 * } as ImageResizerOptions;
 *
 * ImageResizer
 * .resize(options)
 * .then(
 *  (filePath: string) => { console.log('FilePath', filePath); },
 *  () => { console.log('Error occured'); }
 * )
 * ```
 * @interfaces
 * ImageResizerOptions
 */
var ImageResizer = (function () {
    function ImageResizer() {
    }
    /**
     * @returns {Promise<any>}
     */
    ImageResizer.resize = function (options) { return; };
    __decorate([
        plugin_1.Cordova()
    ], ImageResizer, "resize", null);
    ImageResizer = __decorate([
        plugin_1.Plugin({
            pluginName: 'ImageResizer',
            plugin: 'https://github.com/protonet/cordova-plugin-image-resizer.git',
            pluginRef: 'ImageResizer',
            repo: 'https://github.com/protonet/cordova-plugin-image-resizer'
        })
    ], ImageResizer);
    return ImageResizer;
}());
exports.ImageResizer = ImageResizer;

},{"./plugin":82}],59:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
var Observable_1 = require('rxjs/Observable');
/**
 * @name InAppBrowser
 * @description Launches in app Browser
 * @usage
 * ```typescript
 * import {InAppBrowser} from 'ionic-native';
 *
 *
 * ...
 *
 *
 * let browser = new InAppBrowser('https://ionic.io', '_system');
 * browser.executeScript(...);
 * browser.insertCSS(...);
 * browser.close();
 * ```
 * @interfaces
 * InAppBrowserEvent
 */
var InAppBrowser = (function () {
    /**
     * Opens a URL in a new InAppBrowser instance, the current browser instance, or the system browser.
     * @param  url     The URL to load.
     * @param  target  The target in which to load the URL, an optional parameter that defaults to _self.
     * @param  options Options for the InAppBrowser. Optional, defaulting to: location=yes.
     *                 The options string must not contain any blank space, and each feature's
     *                 name/value pairs must be separated by a comma. Feature names are case insensitive.
     */
    function InAppBrowser(url, target, options) {
        try {
            this._objectInstance = cordova.InAppBrowser.open(url, target, options);
        }
        catch (e) {
            window.open(url);
            console.warn('Native: InAppBrowser is not installed or you are running on a browser. Falling back to window.open, all instance methods will NOT work.');
        }
    }
    /**
     * @private
     */
    InAppBrowser.open = function (url, target, options) {
        console.warn('Native: Your current usage of the InAppBrowser plugin is deprecated as of ionic-native@1.3.8. Please check the Ionic Native docs for the latest usage details.');
    };
    /**
     * Displays an InAppBrowser window that was opened hidden. Calling this has no effect
     * if the InAppBrowser was already visible.
     */
    InAppBrowser.prototype.show = function () { };
    /**
     * Closes the InAppBrowser window.
     */
    InAppBrowser.prototype.close = function () { };
    /**
     * Injects JavaScript code into the InAppBrowser window.
     * @param script    Details of the script to run, specifying either a file or code key.
     * @returns {Promise<any>}
     */
    InAppBrowser.prototype.executeScript = function (script) { return; };
    /**
     * Injects CSS into the InAppBrowser window.
     * @param {Object}       Details of the script to run, specifying either a file or code key.
     * @returns {Promise<any>}
     */
    InAppBrowser.prototype.insertCss = function (css) { return; };
    /**
     * A method that allows you to listen to events happening in the browser.
     * @param {string} name of the event
     * @returns {Observable<InAppBrowserEvent>} Returns back an observable that will listen to the event on subscribe, and will stop listening to the event on unsubscribe.
     */
    InAppBrowser.prototype.on = function (event) {
        var _this = this;
        return new Observable_1.Observable(function (observer) {
            _this._objectInstance.addEventListener(event, observer.next.bind(observer));
            return function () { return _this._objectInstance.removeEventListener(event, observer.next.bind(observer)); };
        });
    };
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], InAppBrowser.prototype, "show", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], InAppBrowser.prototype, "close", null);
    __decorate([
        plugin_1.CordovaInstance()
    ], InAppBrowser.prototype, "executeScript", null);
    __decorate([
        plugin_1.CordovaInstance()
    ], InAppBrowser.prototype, "insertCss", null);
    InAppBrowser = __decorate([
        plugin_1.Plugin({
            pluginName: 'InAppBrowser',
            plugin: 'cordova-plugin-inappbrowser',
            pluginRef: 'cordova.InAppBrowser',
            repo: 'https://github.com/apache/cordova-plugin-inappbrowser'
        })
    ], InAppBrowser);
    return InAppBrowser;
}());
exports.InAppBrowser = InAppBrowser;

},{"./plugin":82,"rxjs/Observable":113}],60:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name InAppPurchase
 * @description
 * A lightweight Cordova plugin for in app purchases on iOS/Android.
 *
 * @usage
 * ```ts
 * import {InAppPurchase} from 'ionic-native';
 *
 * InAppPurchase
 *  .getProducts(['com.yourapp.prod1', 'com.yourapp.prod2', ...])
 *  .then((products) => {
 *    console.log(products);
 *     //  [{ productId: 'com.yourapp.prod1', 'title': '...', description: '...', price: '...' }, ...]
 *  })
 *  .catch((err) => {
 *    console.log(err);
 *  });
 *
 *
 * InAppPurchase
 *   .buy('com.yourapp.prod1')
 *   .then((data)=> {
 *     console.log(data);
 *     // {
 *     //   transactionId: ...
 *     //   receipt: ...
 *     //   signature: ...
 *     // }
 *   })
 *   .catch((err)=> {
 *     console.log(err);
 *   });
 *
 * ```
 *
 * @advanced
 *
 * ```ts
 * // fist buy the product...
 * InAppPurchase
 *   .buy('com.yourapp.consumable_prod1')
 *   .then(data => InAppPurchase.consume(data.productType, data.receipt, data.signature))
 *   .then(() => console.log('product was successfully consumed!'))
 *   .catch( err=> console.log(err))
 * ```
 *
 *
 */
var InAppPurchase = (function () {
    function InAppPurchase() {
    }
    /**
     * Retrieves a list of full product data from Apple/Google. This method must be called before making purchases.
     * @param {array<string>} productId an array of product ids.
     * @returns {Promise<any>} Returns a Promise that resolves with an array of objects.
     */
    InAppPurchase.getProducts = function (productId) { return; };
    /**
     * Buy a product that matches the productId.
     * @param {string} productId A string that matches the product you want to buy.
     * @returns {Promise<{transactionId: string, receipt: string, signature: string, productType: string}>} Returns a Promise that resolves with the transaction details.
     */
    InAppPurchase.buy = function (productId) { return; };
    /**
     * Same as buy, but for subscription based products.
     * @param {string} productId A string that matches the product you want to subscribe to.
     * @returns {Promise<{transactionId: string, receipt: string, signature: string, productType: string}>} Returns a Promise that resolves with the transaction details.
     */
    InAppPurchase.subscribe = function (productId) { return; };
    /**
     * Call this function after purchasing a "consumable" product to mark it as consumed. On Android, you must consume products that you want to let the user purchase multiple times. If you will not consume the product after a purchase, the next time you will attempt to purchase it you will get the error message:
     * @param {string} productType
     * @param {string} receipt
     * @param {string} signature
     * @returns {Promise<any>}
     */
    InAppPurchase.consume = function (productType, receipt, signature) { return; };
    /**
     * Restore all purchases from the store
     * @returns {Promise<any>} Returns a promise with an array of purchases.
     */
    InAppPurchase.restorePurchases = function () { return; };
    /**
     * Get the receipt.
     * @returns {Promise<string>} Returns a promise that contains the string for the receipt
     */
    InAppPurchase.getReceipt = function () { return; };
    __decorate([
        plugin_1.Cordova({
            otherPromise: true
        })
    ], InAppPurchase, "getProducts", null);
    __decorate([
        plugin_1.Cordova({
            otherPromise: true
        })
    ], InAppPurchase, "buy", null);
    __decorate([
        plugin_1.Cordova({
            otherPromise: true
        })
    ], InAppPurchase, "subscribe", null);
    __decorate([
        plugin_1.Cordova({
            otherPromise: true
        })
    ], InAppPurchase, "consume", null);
    __decorate([
        plugin_1.Cordova({
            otherPromise: true
        })
    ], InAppPurchase, "restorePurchases", null);
    __decorate([
        plugin_1.Cordova({
            otherPromise: true,
            platforms: ['iOS']
        })
    ], InAppPurchase, "getReceipt", null);
    InAppPurchase = __decorate([
        plugin_1.Plugin({
            pluginName: 'InAppPurchase',
            plugin: 'cordova-plugin-inapppurchase',
            pluginRef: 'inAppPurchase',
            platforms: ['Android', 'iOS'],
            repo: 'https://github.com/AlexDisler/cordova-plugin-inapppurchase'
        })
    ], InAppPurchase);
    return InAppPurchase;
}());
exports.InAppPurchase = InAppPurchase;

},{"./plugin":82}],61:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name Insomnia
 * @description
 * Prevent the screen of the mobile device from falling asleep.
 *
 * @usage
 * ```typescript
 * import { Insomnia } from 'ionic-native';
 *
 *
 * Insomnia.keepAwake()
 *   .then(
 *     () => console.log('success'),
 *     () => console.log('error')
 *   );
 *
 * Insomnia.allowSleepAgain()
 *   .then(
 *     () => console.log('success'),
 *     () => console.log('error')
 *   );
 * ```
 *
 */
var Insomnia = (function () {
    function Insomnia() {
    }
    /**
     * Keeps awake the application
     * @returns {Promise<any>}
     */
    Insomnia.keepAwake = function () { return; };
    /**
     * Allows the application to sleep again
     * @returns {Promise<any>}
     */
    Insomnia.allowSleepAgain = function () { return; };
    __decorate([
        plugin_1.Cordova()
    ], Insomnia, "keepAwake", null);
    __decorate([
        plugin_1.Cordova()
    ], Insomnia, "allowSleepAgain", null);
    Insomnia = __decorate([
        plugin_1.Plugin({
            pluginName: 'Insomnia',
            plugin: 'https://github.com/EddyVerbruggen/Insomnia-PhoneGap-Plugin.git',
            pluginRef: 'plugins.insomnia',
            repo: 'https://github.com/EddyVerbruggen/Insomnia-PhoneGap-Plugin',
            platforms: ['Android', 'iOS', 'Windows Phone 8']
        })
    ], Insomnia);
    return Insomnia;
}());
exports.Insomnia = Insomnia;

},{"./plugin":82}],62:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name Instagram
 * @description Share a photo with the instagram app
 *
 * @usage
 * ```
 * import {Instagram} from 'ionic-native';
 *
 * Instagram.share('data:image/png;uhduhf3hfif33', 'Caption')
 *   .then(() => console.log('Shared!'))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
var Instagram = (function () {
    function Instagram() {
    }
    /**
     * Detect if the Instagram application is installed on the device.
     *
     * @returns {Promise<boolean|string>} Returns a promise that returns a boolean value if installed, or the app version on android
     */
    Instagram.isInstalled = function () { return; };
    /**
     * Share an image on Instagram
     * Note: Instagram app stopped accepting pre-filled captions on both iOS and Android. As a work-around, the caption is copied to the clipboard. You have to inform your users to paste the caption.
     *
     * @param canvasIdOrDataUrl The canvas element id or the dataURL of the image to share
     * @param caption The caption of the image
     * @returns {Promise<any>} Returns a promise that resolves if the image was shared
     */
    Instagram.share = function (canvasIdOrDataUrl, caption) { return; };
    /**
     * Share a library asset or video
     * @param assetLocalIdentifier A local fileURI
     * @returns {Promise<any>} Returns a promise that resolves if the image was shared
     */
    Instagram.shareAsset = function (assetLocalIdentifier) { return; };
    __decorate([
        plugin_1.Cordova({
            callbackStyle: 'node'
        })
    ], Instagram, "isInstalled", null);
    __decorate([
        plugin_1.Cordova({
            callbackStyle: 'node'
        })
    ], Instagram, "share", null);
    __decorate([
        plugin_1.Cordova({
            callbackOrder: 'reverse'
        })
    ], Instagram, "shareAsset", null);
    Instagram = __decorate([
        plugin_1.Plugin({
            pluginName: 'Instagram',
            plugin: 'cordova-instagram-plugin',
            pluginRef: 'Instagram',
            repo: 'https://github.com/vstirbu/InstagramPlugin'
        })
    ], Instagram);
    return Instagram;
}());
exports.Instagram = Instagram;

},{"./plugin":82}],63:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name IsDebug
 * @description
 * Detect if the app is running in debug mode or not.
 * Debug mode is when the app is built and installed locally via xcode / eclipse / the cordova cli etc, compared to release mode when the app was downloaded from the app / play store via an end user.
 *
 * @usage
 * ```
 * import {IsDebug} from 'ionic-native';
 *
 * IsDebug.getIsDebug()
 *   .then((isDebug: boolean) => console.log('Is debug:', isDebug))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
var IsDebug = (function () {
    function IsDebug() {
    }
    /**
     * Determine if an app was installed via xcode / eclipse / the ionic CLI etc
     * @returns {Promise<boolean>} Returns a promise that resolves with true if the app was installed via xcode / eclipse / the ionic CLI etc. It will resolve to false if the app was downloaded from the app / play store by the end user.
     */
    IsDebug.getIsDebug = function () {
        return;
    };
    __decorate([
        plugin_1.Cordova()
    ], IsDebug, "getIsDebug", null);
    IsDebug = __decorate([
        plugin_1.Plugin({
            pluginName: 'IsDebug',
            plugin: 'cordova-plugin-is-debug',
            pluginRef: 'cordova.plugins.IsDebug',
            repo: 'https://github.com/mattlewis92/cordova-plugin-is-debug'
        })
    ], IsDebug);
    return IsDebug;
}());
exports.IsDebug = IsDebug;

},{"./plugin":82}],64:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name Keyboard
 * @description
 * @usage
 * ```typescript
 * import { Keyboard } from 'ionic-native';
 *
 *
 *
 * ```
 */
var Keyboard = (function () {
    function Keyboard() {
    }
    /**
     * Hide the keyboard accessory bar with the next, previous and done buttons.
     * @param hide {boolean}
     */
    Keyboard.hideKeyboardAccessoryBar = function (hide) { };
    /**
     * Force keyboard to be shown.
     */
    Keyboard.show = function () { };
    /**
     * Close the keyboard if open.
     */
    Keyboard.close = function () { };
    /**
     * Prevents the native UIScrollView from moving when an input is focused.
     * @param disable
     */
    Keyboard.disableScroll = function (disable) { };
    /**
     * Creates an observable that notifies you when the keyboard is shown. Unsubscribe to observable to cancel event watch.
     * @returns {Observable<any>}
     */
    Keyboard.onKeyboardShow = function () { return; };
    /**
     * Creates an observable that notifies you when the keyboard is hidden. Unsubscribe to observable to cancel event watch.
     * @returns {Observable<any>}
     */
    Keyboard.onKeyboardHide = function () { return; };
    __decorate([
        plugin_1.Cordova({ sync: true })
    ], Keyboard, "hideKeyboardAccessoryBar", null);
    __decorate([
        plugin_1.Cordova({
            sync: true,
            platforms: ['Android', 'BlackBerry 10', 'Windows']
        })
    ], Keyboard, "show", null);
    __decorate([
        plugin_1.Cordova({
            sync: true,
            platforms: ['iOS', 'Android', 'BlackBerry 10', 'Windows']
        })
    ], Keyboard, "close", null);
    __decorate([
        plugin_1.Cordova({
            sync: true,
            platforms: ['iOS', 'Windows']
        })
    ], Keyboard, "disableScroll", null);
    __decorate([
        plugin_1.Cordova({
            eventObservable: true,
            event: 'native.keyboardshow',
            platforms: ['iOS', 'Android', 'BlackBerry 10', 'Windows']
        })
    ], Keyboard, "onKeyboardShow", null);
    __decorate([
        plugin_1.Cordova({
            eventObservable: true,
            event: 'native.keyboardhide',
            platforms: ['iOS', 'Android', 'BlackBerry 10', 'Windows']
        })
    ], Keyboard, "onKeyboardHide", null);
    Keyboard = __decorate([
        plugin_1.Plugin({
            pluginName: 'Keyboard',
            plugin: 'ionic-plugin-keyboard',
            pluginRef: 'cordova.plugins.Keyboard',
            repo: 'https://github.com/driftyco/ionic-plugin-keyboard'
        })
    ], Keyboard);
    return Keyboard;
}());
exports.Keyboard = Keyboard;

},{"./plugin":82}],65:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name Launch Navigator
 * @description
 * Requires Cordova plugin: uk.co.workingedge.phonegap.plugin.launchnavigator. For more info, please see the [LaunchNavigator plugin docs](https://github.com/dpa99c/phonegap-launch-navigator).
 *
 * @usage
 * Please refer to the plugin's repo for detailed usage. This docs page only explains the Native wrapper.
 *
 * ```typescript
 * import { LaunchNavigator, LaunchNavigatorOptions } from 'ionic-native';
 *
 * let options: LaunchNavigatorOptions = {
 *   start: 'London, ON',
 *   app: LaunchNavigator.APPS.UBER
 * };
 *
 * LaunchNavigator.navigate('Toronto, ON', options)
 *   .then(
 *     success => console.log('Launched navigator'),
 *     error => console.log('Error launching navigator', error)
 *   );
 * ```
 * @interfaces
 * LaunchNavigatorOptions
 */
var LaunchNavigator = (function () {
    function LaunchNavigator() {
    }
    /**
     * Launches navigator app
     * @param destination {string|number[]} Location name or coordinates (as string or array)
     * @param options {LaunchNavigatorOptions}
     * @returns {Promise<any>}
     */
    LaunchNavigator.navigate = function (destination, options) { return; };
    /**
     * Determines if the given app is installed and available on the current device.
     * @param app {string}
     * @returns {Promise<any>}
     */
    LaunchNavigator.isAppAvailable = function (app) { return; };
    /**
     * Returns a list indicating which apps are installed and available on the current device.
     * @returns {Promise<string[]>}
     */
    LaunchNavigator.availableApps = function () { return; };
    /**
     * Returns the display name of the specified app.
     * @param app {string}
     * @returns {string}
     */
    LaunchNavigator.getAppDisplayName = function (app) { return; };
    /**
     * Returns list of supported apps on a given platform.
     * @param platform {string}
     * @returns {string[]}
     */
    LaunchNavigator.getAppsForPlatform = function (platform) { return; };
    /**
     * Indicates if an app on a given platform supports specification of transport mode.
     * @param app {string} specified as a string, you can use one of the constants, e.g `LaunchNavigator.APP.GOOGLE_MAPS`
     * @param platform {string}
     * @returns {boolean}
     */
    LaunchNavigator.supportsTransportMode = function (app, platform) { return; };
    /**
     * Returns the list of transport modes supported by an app on a given platform.
     * @param app {string}
     * @param platform {string}
     * @returns {string[]}
     */
    LaunchNavigator.getTransportModes = function (app, platform) { return; };
    /**
     * Indicates if an app on a given platform supports specification of launch mode.
     * Note that currently only Google Maps on Android does.
     * @param app {string}
     * @param platform {string}
     * @returns {boolean}
     */
    LaunchNavigator.supportsLaunchMode = function (app, platform) { return; };
    /**
     * Indicates if an app on a given platform supports specification of start location.
     * @param app {string}
     * @param platform {string}
     * @returns {boolean}
     */
    LaunchNavigator.supportsStart = function (app, platform) { return; };
    /**
     * @param app {string}
     * @param platform {string}
     * @returns {boolean}
     */
    LaunchNavigator.supportsStartName = function (app, platform) { return; };
    /**
     * @param app {string}
     * @param platform {string}
     * @returns {boolean}
     */
    LaunchNavigator.supportsDestName = function (app, platform) { return; };
    /**
     * @param destination {string | number[]}
     * @param options {LaunchNavigatorOptions}
     */
    LaunchNavigator.userSelect = function (destination, options) { };
    LaunchNavigator.APP = {
        USER_SELECT: 'user_select',
        APPLE_MAPS: 'apple_maps',
        GOOGLE_MAPS: 'google_maps',
        WAZE: 'waze',
        CITYMAPPER: 'citymapper',
        NAVIGON: 'navigon',
        TRANSIT_APP: 'transit_app',
        YANDEX: 'yandex',
        UBER: 'uber',
        TOMTOM: 'tomtom',
        BING_MAPS: 'bing_maps',
        SYGIC: 'sygic',
        HERE_MAPS: 'here_maps',
        MOOVIT: 'moovit'
    };
    LaunchNavigator.TRANSPORT_MODE = {
        DRIVING: 'driving',
        WALKING: 'walking',
        BICYCLING: 'bicycling',
        TRANSIT: 'transit'
    };
    __decorate([
        plugin_1.Cordova({
            successIndex: 1,
            errorIndex: 2
        })
    ], LaunchNavigator, "navigate", null);
    __decorate([
        plugin_1.Cordova()
    ], LaunchNavigator, "isAppAvailable", null);
    __decorate([
        plugin_1.Cordova()
    ], LaunchNavigator, "availableApps", null);
    __decorate([
        plugin_1.Cordova({ sync: true })
    ], LaunchNavigator, "getAppDisplayName", null);
    __decorate([
        plugin_1.Cordova({ sync: true })
    ], LaunchNavigator, "getAppsForPlatform", null);
    __decorate([
        plugin_1.Cordova({ sync: true })
    ], LaunchNavigator, "supportsTransportMode", null);
    __decorate([
        plugin_1.Cordova({ sync: true })
    ], LaunchNavigator, "getTransportModes", null);
    __decorate([
        plugin_1.Cordova({ sync: true })
    ], LaunchNavigator, "supportsLaunchMode", null);
    __decorate([
        plugin_1.Cordova({ sync: true })
    ], LaunchNavigator, "supportsStart", null);
    __decorate([
        plugin_1.Cordova({ sync: true })
    ], LaunchNavigator, "supportsStartName", null);
    __decorate([
        plugin_1.Cordova({ sync: true })
    ], LaunchNavigator, "supportsDestName", null);
    __decorate([
        plugin_1.Cordova({ sync: true })
    ], LaunchNavigator, "userSelect", null);
    LaunchNavigator = __decorate([
        plugin_1.Plugin({
            pluginName: 'LaunchNavigator',
            plugin: 'uk.co.workingedge.phonegap.plugin.launchnavigator',
            pluginRef: 'launchnavigator',
            repo: 'https://github.com/dpa99c/phonegap-launch-navigator.git'
        })
    ], LaunchNavigator);
    return LaunchNavigator;
}());
exports.LaunchNavigator = LaunchNavigator;

},{"./plugin":82}],66:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name Local Notifications
 * @description
 * This plugin allows you to display local notifications on the device
 *
 * @usage
 * ```typescript
 * import { LocalNotifications } from 'ionic-native';
 *
 *
 * // Schedule a single notification
 * LocalNotifications.schedule({
 *   id: 1,
 *   text: 'Single ILocalNotification',
 *   sound: isAndroid? 'file://sound.mp3': 'file://beep.caf',
 *   data: { secret: key }
 * });
 *
 *
 * // Schedule multiple notifications
 * LocalNotifications.schedule([{
 *    id: 1,
 *    text: 'Multi ILocalNotification 1',
 *    sound: isAndroid ? 'file://sound.mp3': 'file://beep.caf',
 *    data: { secret:key }
 *   },{
 *    id: 2,
 *    title: 'Local ILocalNotification Example',
 *    text: 'Multi ILocalNotification 2',
 *    icon: 'http://example.com/icon.png'
 * }]);
 *
 *
 * // Schedule delayed notification
 * LocalNotifications.schedule({
 *    text: 'Delayed ILocalNotification',
 *    at: new Date(new Date().getTime() + 3600),
 *    led: 'FF0000',
 *    sound: null
 * });
 * ```
 * @interfaces
 * ILocalNotification
 */
var LocalNotifications = (function () {
    function LocalNotifications() {
    }
    /**
     * Schedules a single or multiple notifications
     * @param options {Notification | Array<ILocalNotification>} optional
     */
    LocalNotifications.schedule = function (options) { };
    /**
     * Updates a previously scheduled notification. Must include the id in the options parameter.
     * @param options {ILocalNotification} optional
     */
    LocalNotifications.update = function (options) { };
    /**
     * Clears single or multiple notifications
     * @param notificationId {any} A single notification id, or an array of notification ids.
     * @returns {Promise<any>} Returns a promise when the notification had been cleared
     */
    LocalNotifications.clear = function (notificationId) { return; };
    /**
     * Clears all notifications
     * @returns {Promise<any>} Returns a promise when all notifications have cleared
     */
    LocalNotifications.clearAll = function () { return; };
    /**
     * Cancels single or multiple notifications
     * @param notificationId {any} A single notification id, or an array of notification ids.
     * @returns {Promise<any>} Returns a promise when the notification is canceled
     */
    LocalNotifications.cancel = function (notificationId) { return; };
    /**
     * Cancels all notifications
     * @returns {Promise<any>} Returns a promise when all notifications are canceled
     */
    LocalNotifications.cancelAll = function () { return; };
    /**
     * Checks presence of a notification
     * @param notificationId {number}
     * @returns {Promise<boolean>}
     */
    LocalNotifications.isPresent = function (notificationId) { return; };
    /**
     * Checks is a notification is scheduled
     * @param notificationId {number}
     * @returns {Promise<boolean>}
     */
    LocalNotifications.isScheduled = function (notificationId) { return; };
    /**
     * Checks if a notification is triggered
     * @param notificationId {number}
     * @returns {Promise<boolean>}
     */
    LocalNotifications.isTriggered = function (notificationId) { return; };
    /**
     * Get all the notification ids
     * @returns {Promise<Array<number>>}
     */
    LocalNotifications.getAllIds = function () { return; };
    /**
     * Get the ids of triggered notifications
     * @returns {Promise<Array<number>>}
     */
    LocalNotifications.getTriggeredIds = function () { return; };
    /**
     * Get the ids of scheduled notifications
     * @returns {Promise<Array<number>>} Returns a promise
     */
    LocalNotifications.getScheduledIds = function () { return; };
    /**
     * Get a notification object
     * @param notificationId {any} The id of the notification to get
     * @returns {Promise<ILocalNotification>}
     */
    LocalNotifications.get = function (notificationId) { return; };
    /**
     * Get a scheduled notification object
     * @param notificationId {any} The id of the notification to get
     * @returns {Promise<ILocalNotification>}
     */
    LocalNotifications.getScheduled = function (notificationId) { return; };
    /**
     * Get a triggered notification object
     * @param notificationId The id of the notification to get
     * @returns {Promise<ILocalNotification>}
     */
    LocalNotifications.getTriggered = function (notificationId) { return; };
    /**
     * Get all notification objects
     * @returns {Promise<Array<ILocalNotification>>}
     */
    LocalNotifications.getAll = function () { return; };
    /**
     * Get all scheduled notification objects
     * @returns {Promise<Array<ILocalNotification>>}
     */
    LocalNotifications.getAllScheduled = function () { return; };
    /**
     * Get all triggered notification objects
     * @returns {Promise<Array<ILocalNotification>>}
     */
    LocalNotifications.getAllTriggered = function () { return; };
    /**
     * Register permission to show notifications if not already granted.
     * @returns {Promise<boolean>}
     */
    LocalNotifications.registerPermission = function () { return; };
    /**
     * Informs if the app has the permission to show notifications.
     * @returns {Promise<boolean>}
     */
    LocalNotifications.hasPermission = function () { return; };
    /**
     * Sets a callback for a specific event
     * @param eventName The name of the event. Available events: schedule, trigger, click, update, clear, clearall, cancel, cancelall
     * @param callback Call back function. All events return notification and state parameter. clear and clearall return state parameter only.
     */
    LocalNotifications.on = function (eventName, callback) { };
    __decorate([
        plugin_1.Cordova({
            sync: true
        })
    ], LocalNotifications, "schedule", null);
    __decorate([
        plugin_1.Cordova({
            sync: true
        })
    ], LocalNotifications, "update", null);
    __decorate([
        plugin_1.Cordova()
    ], LocalNotifications, "clear", null);
    __decorate([
        plugin_1.Cordova({
            successIndex: 0,
            errorIndex: 2
        })
    ], LocalNotifications, "clearAll", null);
    __decorate([
        plugin_1.Cordova()
    ], LocalNotifications, "cancel", null);
    __decorate([
        plugin_1.Cordova({
            successIndex: 0,
            errorIndex: 2
        })
    ], LocalNotifications, "cancelAll", null);
    __decorate([
        plugin_1.Cordova()
    ], LocalNotifications, "isPresent", null);
    __decorate([
        plugin_1.Cordova()
    ], LocalNotifications, "isScheduled", null);
    __decorate([
        plugin_1.Cordova()
    ], LocalNotifications, "isTriggered", null);
    __decorate([
        plugin_1.Cordova()
    ], LocalNotifications, "getAllIds", null);
    __decorate([
        plugin_1.Cordova()
    ], LocalNotifications, "getTriggeredIds", null);
    __decorate([
        plugin_1.Cordova()
    ], LocalNotifications, "getScheduledIds", null);
    __decorate([
        plugin_1.Cordova()
    ], LocalNotifications, "get", null);
    __decorate([
        plugin_1.Cordova()
    ], LocalNotifications, "getScheduled", null);
    __decorate([
        plugin_1.Cordova()
    ], LocalNotifications, "getTriggered", null);
    __decorate([
        plugin_1.Cordova()
    ], LocalNotifications, "getAll", null);
    __decorate([
        plugin_1.Cordova()
    ], LocalNotifications, "getAllScheduled", null);
    __decorate([
        plugin_1.Cordova()
    ], LocalNotifications, "getAllTriggered", null);
    __decorate([
        plugin_1.Cordova()
    ], LocalNotifications, "registerPermission", null);
    __decorate([
        plugin_1.Cordova()
    ], LocalNotifications, "hasPermission", null);
    __decorate([
        plugin_1.Cordova({
            sync: true
        })
    ], LocalNotifications, "on", null);
    LocalNotifications = __decorate([
        plugin_1.Plugin({
            pluginName: 'LocalNotifications',
            plugin: 'de.appplant.cordova.plugin.local-notification',
            pluginRef: 'cordova.plugins.notification.local',
            repo: 'https://github.com/katzer/cordova-plugin-local-notifications'
        })
    ], LocalNotifications);
    return LocalNotifications;
}());
exports.LocalNotifications = LocalNotifications;

},{"./plugin":82}],67:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name LocationAccuracy
 * @description
 * This Cordova/Phonegap plugin for Android and iOS to request enabling/changing of Location Services by triggering a native dialog from within the app, avoiding the need for the user to leave your app to change location settings manually.
 *
 * @usage
 * ```
 * import { LocationAccuracy } from 'ionic-native';
 *
 * LocationAccuracy.canRequest().then((canRequest: boolean) => {
 *
 *   if(canRequest) {
 *     // the accuracy option will be ignored by iOS
 *     LocationAccuracy.request(LocationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(
 *       () => console.log('Request successful'),
 *       error => console.log('Error requesting location permissions', error)
 *     );
 *   }
 *
 * });
 *
 * ```
 */
var LocationAccuracy = (function () {
    function LocationAccuracy() {
    }
    /**
     * Indicates if you can request accurate location
     * @returns {Promise<boolean>} Returns a promise that resovles with a boolean that indicates if you can request accurate location
     */
    LocationAccuracy.canRequest = function () { return; };
    /**
     * Indicates if a request is currently in progress
     * @returns {Promise<boolean>} Returns a promise that resolves with a boolean that indicates if a request is currently in progress
     */
    LocationAccuracy.isRequesting = function () { return; };
    /**
     * Requests accurate location
     * @param accuracy {number} Accuracy, from 0 to 4. You can use the static properties of this class that start with REQUEST_PRIORITY_
     * @returns {Promise<any>} Returns a promise that resolves on success and rejects if an error occurred
     */
    LocationAccuracy.request = function (accuracy) { return; };
    LocationAccuracy.REQUEST_PRIORITY_NO_POWER = 0;
    LocationAccuracy.REQUEST_PRIORITY_LOW_POWER = 1;
    LocationAccuracy.REQUEST_PRIORITY_BALANCED_POWER_ACCURACY = 2;
    LocationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY = 3;
    LocationAccuracy.SUCCESS_SETTINGS_SATISFIED = 0;
    LocationAccuracy.SUCCESS_USER_AGREED = 1;
    LocationAccuracy.ERROR_ALREADY_REQUESTING = -1;
    LocationAccuracy.ERROR_INVALID_ACTION = 0;
    LocationAccuracy.ERROR_INVALID_ACCURACY = 1;
    LocationAccuracy.ERROR_EXCEPTION = 1;
    LocationAccuracy.ERROR_CANNOT_CHANGE_ACCURACY = 3;
    LocationAccuracy.ERROR_USER_DISAGREED = 4;
    LocationAccuracy.ERROR_GOOGLE_API_CONNECTION_FAILED = 4;
    __decorate([
        plugin_1.Cordova()
    ], LocationAccuracy, "canRequest", null);
    __decorate([
        plugin_1.Cordova()
    ], LocationAccuracy, "isRequesting", null);
    __decorate([
        plugin_1.Cordova({ callbackOrder: 'reverse' })
    ], LocationAccuracy, "request", null);
    LocationAccuracy = __decorate([
        plugin_1.Plugin({
            pluginName: 'LocationAccuracy',
            plugin: 'cordova-plugin-request-location-accuracy',
            pluginRef: 'cordova.plugins.locationAccuracy',
            repo: 'https://github.com/dpa99c/cordova-plugin-request-location-accuracy'
        })
    ], LocationAccuracy);
    return LocationAccuracy;
}());
exports.LocationAccuracy = LocationAccuracy;

},{"./plugin":82}],68:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name Market
 * @description
 * Opens an app's page in the market place (Google Play, App Store)
 *
 * @usage
 * ```
 * import {Market} from 'ionic-native';
 *
 * Market.open('your.package.name');
 *
 * ```
 */
var Market = (function () {
    function Market() {
    }
    /**
     * Opens an app in Google Play / App Store
     * @param appId {string} Package name
     * @param callbacks {Object} Optional callbacks in the format {success?: Function, failure?: Function}
     */
    Market.open = function (appId, callbacks) { };
    __decorate([
        plugin_1.Cordova({ sync: true })
    ], Market, "open", null);
    Market = __decorate([
        plugin_1.Plugin({
            pluginName: 'Market',
            plugin: 'cordova-plugin-market',
            pluginRef: 'cordova.plugins.market',
            repo: 'https://github.com/xmartlabs/cordova-plugin-market'
        })
    ], Market);
    return Market;
}());
exports.Market = Market;

},{"./plugin":82}],69:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name Media Capture
 * @description
 * @usage
 * ```typescript
 * import { MediaCapture, MediaFile, CaptureError, CaptureImageOptions } from 'ionic-native';
 *
 *
 * let options: CaptureImageOptions = { limit: 3 };
 * MediaCapture.captureImage(options)
 *   .then(
 *     (data: MediaFile[]) => console.log(data),
 *     (err: CaptureError) => console.error(err)
 *   );
 *
 * ```
 * @interfaces
 * MediaFile
 * MediaFileData
 * CaptureError
 * CaptureAudioOptions
 * CaptureImageOptions
 * CaptureVideoOptions
 * ConfigurationData
 */
var MediaCapture = (function () {
    function MediaCapture() {
    }
    /**
     * Start the audio recorder application and return information about captured audio clip files.
     * @param options
     * @returns {Promise<MediaFile[]>}
     */
    MediaCapture.captureAudio = function (options) { return; };
    /**
     * Start the camera application and return information about captured image files.
     * @param options
     * @returns {Promise<MediaFile[]>}
     */
    MediaCapture.captureImage = function (options) { return; };
    /**
     * Start the video recorder application and return information about captured video clip files.
     * @param options
     * @returns {Promise<MediaFile[]>}
     */
    MediaCapture.captureVideo = function (options) { return; };
    /**
     * is fired if the capture call is successful
     * @returns {Observable<MediaFile[]>}
     */
    MediaCapture.onPendingCaptureResult = function () { return; };
    /**
     * is fired if the capture call is unsuccessful
     * @returns {Observable<CaptureError>}
     */
    MediaCapture.onPendingCaptureError = function () { return; };
    __decorate([
        plugin_1.CordovaProperty
    ], MediaCapture, "supportedImageModes", void 0);
    __decorate([
        plugin_1.CordovaProperty
    ], MediaCapture, "supportedAudioModes", void 0);
    __decorate([
        plugin_1.CordovaProperty
    ], MediaCapture, "supportedVideoModes", void 0);
    __decorate([
        plugin_1.Cordova({
            callbackOrder: 'reverse'
        })
    ], MediaCapture, "captureAudio", null);
    __decorate([
        plugin_1.Cordova({
            callbackOrder: 'reverse'
        })
    ], MediaCapture, "captureImage", null);
    __decorate([
        plugin_1.Cordova({
            callbackOrder: 'reverse'
        })
    ], MediaCapture, "captureVideo", null);
    __decorate([
        plugin_1.Cordova({
            eventObservable: true,
            event: 'pendingcaptureresult'
        })
    ], MediaCapture, "onPendingCaptureResult", null);
    __decorate([
        plugin_1.Cordova({
            eventObservable: true,
            event: 'pendingcaptureerror'
        })
    ], MediaCapture, "onPendingCaptureError", null);
    MediaCapture = __decorate([
        plugin_1.Plugin({
            pluginName: 'MediaCapture',
            plugin: 'cordova-plugin-media-capture',
            pluginRef: 'navigator.device.capture',
            repo: 'https://github.com/apache/cordova-plugin-media-capture'
        })
    ], MediaCapture);
    return MediaCapture;
}());
exports.MediaCapture = MediaCapture;

},{"./plugin":82}],70:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name MediaPlugin
 * @description
 * @usage
 * ```typescript
 * import { MediaPlugin } from 'ionic-native';
 *
 *
 *
 * // Create a MediaPlugin instance.  Expects path to file or url as argument
 * var file = new MediaPlugin('path/to/file.mp3');
 *
 * // Catch the Success & Error Output
 * // Platform Quirks
 * // iOS calls success on completion of playback only
 * // Android calls success on completion of playback AND on release()
 * file.init.then(() => {
 *   console.log('Playback Finished');
 * }, (err) => {
 *   console.log('somthing went wrong! error code: ' + err.code + ' message: ' + err.message);
 * });
 *
 * // play the file
 * file.play();
 *
 * // pause the file
 * file.pause();
 *
 * // get current playback position
 * file.getCurrentPosition().then((position) => {
 *   console.log(position);
 * });
 *
 * // get file duration
 * file.getDuration().then((duration) => {
 *   console.log(position);
 * });
 *
 * // skip to 10 seconds (expects int value in ms)
 * file.seekTo(10000);
 *
 * // stop playing the file
 * file.stop();
 *
 * // release the native audio resource
 * // Platform Quirks:
 * // iOS simply create a new instance and the old one will be overwritten
 * // Android you must call release() to destroy instances of media when you are done
 * file.release();
 *
 * // Recording to a file
 * var newFile = new MediaPlugin('path/to/file.mp3');
 * newFile.startRecord();
 *
 * newFile.stopRecord();
 *
 *
 *
 * ```
 */
var MediaPlugin = (function () {
    // Methods
    /**
     * Open a media file
     * @param src {string} A URI containing the audio content.
     * @param onStatusUpdate {Function} A callback function to be invoked when the status of the file changes
     */
    function MediaPlugin(src, onStatusUpdate) {
        var _this = this;
        if (!!plugin_1.getPlugin('Media')) {
            this.init = new Promise(function (resolve, reject) {
                _this._objectInstance = new Media(src, resolve, reject, onStatusUpdate);
            });
        }
        else {
            plugin_1.pluginWarn({
                pluginName: 'MediaPlugin',
                plugin: 'cordova-plugin-media'
            });
        }
    }
    /**
     * Get the current amplitude of the current recording.
     * @returns {Promise<any>} Returns a promise with the amplitude of the current recording
     */
    MediaPlugin.prototype.getCurrentAmplitude = function () { return; };
    /**
     * Get the current position within an audio file. Also updates the Media object's position parameter.
     * @returns {Promise<any>} Returns a promise with the position of the current recording
     */
    MediaPlugin.prototype.getCurrentPosition = function () { return; };
    /**
     * Get the duration of an audio file in seconds. If the duration is unknown, it returns a value of -1.
     * @returns {number} Returns a promise with the duration of the current recording
     */
    MediaPlugin.prototype.getDuration = function () { return; };
    /**
     * Starts or resumes playing an audio file.
     */
    MediaPlugin.prototype.play = function (iosOptions) { };
    /**
     * Pauses playing an audio file.
     */
    MediaPlugin.prototype.pause = function () { };
    /**
     * Releases the underlying operating system's audio resources. This is particularly important for Android, since there are a finite amount of OpenCore instances for media playback. Applications should call the release function for any Media resource that is no longer needed.
     */
    MediaPlugin.prototype.release = function () { };
    /**
     * Sets the current position within an audio file.
     * @param {number} milliseconds The time position you want to set for the current audio file
     */
    MediaPlugin.prototype.seekTo = function (milliseconds) { };
    /**
     * Set the volume for an audio file.
     * @param volume {number} The volume to set for playback. The value must be within the range of 0.0 to 1.0.
     */
    MediaPlugin.prototype.setVolume = function (volume) { };
    /**
     * Starts recording an audio file.
     */
    MediaPlugin.prototype.startRecord = function () { };
    /**
     * Stops recording
     */
    MediaPlugin.prototype.stopRecord = function () { };
    /**
     * Stops playing an audio file.
     */
    MediaPlugin.prototype.stop = function () { };
    // Constants
    /**
     * @private
     */
    MediaPlugin.MEDIA_NONE = 0;
    /**
     * @private
     */
    MediaPlugin.MEDIA_STARTING = 1;
    /**
     * @private
     */
    MediaPlugin.MEDIA_RUNNING = 2;
    /**
     * @private
     */
    MediaPlugin.MEDIA_PAUSED = 3;
    /**
     * @private
     */
    MediaPlugin.MEDIA_STOPPED = 4;
    // error codes
    /**
     * @private
     */
    MediaPlugin.MEDIA_ERR_ABORTED = 1;
    /**
     * @private
     */
    MediaPlugin.MEDIA_ERR_NETWORK = 2;
    /**
     * @private
     */
    MediaPlugin.MEDIA_ERR_DECODE = 3;
    /**
     * @private
     */
    MediaPlugin.MEDIA_ERR_NONE_SUPPORTED = 4;
    __decorate([
        plugin_1.CordovaInstance()
    ], MediaPlugin.prototype, "getCurrentAmplitude", null);
    __decorate([
        plugin_1.CordovaInstance()
    ], MediaPlugin.prototype, "getCurrentPosition", null);
    __decorate([
        plugin_1.CordovaInstance({
            sync: true
        })
    ], MediaPlugin.prototype, "getDuration", null);
    __decorate([
        plugin_1.CordovaInstance({
            sync: true
        })
    ], MediaPlugin.prototype, "play", null);
    __decorate([
        plugin_1.CordovaInstance({
            sync: true
        })
    ], MediaPlugin.prototype, "pause", null);
    __decorate([
        plugin_1.CordovaInstance({
            sync: true
        })
    ], MediaPlugin.prototype, "release", null);
    __decorate([
        plugin_1.CordovaInstance({
            sync: true
        })
    ], MediaPlugin.prototype, "seekTo", null);
    __decorate([
        plugin_1.CordovaInstance({
            sync: true
        })
    ], MediaPlugin.prototype, "setVolume", null);
    __decorate([
        plugin_1.CordovaInstance({
            sync: true
        })
    ], MediaPlugin.prototype, "startRecord", null);
    __decorate([
        plugin_1.CordovaInstance({
            sync: true
        })
    ], MediaPlugin.prototype, "stopRecord", null);
    __decorate([
        plugin_1.CordovaInstance({
            sync: true
        })
    ], MediaPlugin.prototype, "stop", null);
    MediaPlugin = __decorate([
        plugin_1.Plugin({
            pluginName: 'MediaPlugin',
            repo: 'https://github.com/apache/cordova-plugin-media',
            plugin: 'cordova-plugin-media',
            pluginRef: 'Media'
        })
    ], MediaPlugin);
    return MediaPlugin;
}());
exports.MediaPlugin = MediaPlugin;

},{"./plugin":82}],71:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name Mixpanel
 * @description
 * Cordova Plugin that wraps Mixpanel SDK for Android and iOS
 *
 * @usage
 * ```
 * import {Mixpanel} from 'ionic-native';
 *
 * Mixpanel.init(token)
 *   .then(onSuccess)
 *   .catch(onError);
 *
 * ```
 * @classes
 * MixpanelPeople
 */
var Mixpanel = (function () {
    function Mixpanel() {
    }
    /**
     *
     * @param aliasId {string}
     * @param originalId {string}
     * @returns {Promise<any>}
     */
    Mixpanel.alias = function (aliasId, originalId) { return; };
    /**
     *
     * @returns {Promise<any>}
     */
    Mixpanel.distinctId = function () { return; };
    /**
     * @returns {Promise<any>}
     */
    Mixpanel.flush = function () { return; };
    /**
     *
     * @param distinctId {string}
     * @returns {Promise<any>}
     */
    Mixpanel.identify = function (distinctId) { return; };
    /**
     *
     * @param token {string}
     * @returns {Promise<any>}
     */
    Mixpanel.init = function (token) { return; };
    /**
     *
     * @param superProperties {any}
     * @returns {Promise<any>}
     */
    Mixpanel.registerSuperProperties = function (superProperties) { return; };
    /**
     *
     * @returns {Promise<any>}
     */
    Mixpanel.reset = function () { return; };
    /**
     *
     * @param eventName {string}
     * @param eventProperties {any} optional
     * @returns {Promise<any>}
     */
    Mixpanel.track = function (eventName, eventProperties) { return; };
    /**
     *
     * @returns {Promise<any>}
     */
    Mixpanel.showSurvey = function () { return; };
    Object.defineProperty(Mixpanel, "people", {
        /**
         *
         * @returns {MixpanelPeople}
         */
        get: function () {
            return MixpanelPeople;
        },
        enumerable: true,
        configurable: true
    });
    ;
    __decorate([
        plugin_1.Cordova()
    ], Mixpanel, "alias", null);
    __decorate([
        plugin_1.Cordova()
    ], Mixpanel, "distinctId", null);
    __decorate([
        plugin_1.Cordova()
    ], Mixpanel, "flush", null);
    __decorate([
        plugin_1.Cordova()
    ], Mixpanel, "identify", null);
    __decorate([
        plugin_1.Cordova()
    ], Mixpanel, "init", null);
    __decorate([
        plugin_1.Cordova()
    ], Mixpanel, "registerSuperProperties", null);
    __decorate([
        plugin_1.Cordova()
    ], Mixpanel, "reset", null);
    __decorate([
        plugin_1.Cordova()
    ], Mixpanel, "track", null);
    __decorate([
        plugin_1.Cordova()
    ], Mixpanel, "showSurvey", null);
    Mixpanel = __decorate([
        plugin_1.Plugin({
            pluginName: 'Mixpanel',
            plugin: 'cordova-plugin-mixpanel',
            pluginRef: 'mixpanel',
            repo: 'https://github.com/samzilverberg/cordova-mixpanel-plugin'
        })
    ], Mixpanel);
    return Mixpanel;
}());
exports.Mixpanel = Mixpanel;
/**
 * @private
 */
var MixpanelPeople = (function () {
    function MixpanelPeople() {
    }
    /**
     *
     * @param distinctId {string}
     * @return {Promise<any>}
     */
    MixpanelPeople.identify = function (distinctId) { return; };
    /**
     *
     * @param peopleProperties {string}
     * @return {Promise<any>}
     */
    MixpanelPeople.increment = function (peopleProperties) { return; };
    /**
     *
     * @param pushId
     * @return {Promise<any>}
     */
    MixpanelPeople.setPushId = function (pushId) { return; };
    /**
     *
     * @param peopleProperties
     * @return {Promise<any>}
     */
    MixpanelPeople.set = function (peopleProperties) { return; };
    /**
     *
     * @param peopleProperties
     * @return {Promise<any>}
     */
    MixpanelPeople.setOnce = function (peopleProperties) { return; };
    /**
     * @private
     */
    MixpanelPeople.plugin = 'cordova-plugin-mixpanel';
    /**
     * @private
     */
    MixpanelPeople.pluginRef = 'mixpanel.people';
    __decorate([
        plugin_1.Cordova()
    ], MixpanelPeople, "identify", null);
    __decorate([
        plugin_1.Cordova()
    ], MixpanelPeople, "increment", null);
    __decorate([
        plugin_1.Cordova()
    ], MixpanelPeople, "setPushId", null);
    __decorate([
        plugin_1.Cordova()
    ], MixpanelPeople, "set", null);
    __decorate([
        plugin_1.Cordova()
    ], MixpanelPeople, "setOnce", null);
    return MixpanelPeople;
}());
exports.MixpanelPeople = MixpanelPeople;

},{"./plugin":82}],72:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name MusicControls
 * @description
 * Music controls for Cordova applications.
 * Display a 'media' notification with play/pause, previous, next buttons, allowing the user to control the play.
 * Handle also headset event (plug, unplug, headset button).
 *
 * @usage
 * ```
 * import {MusicControls} from 'ionic-native';
 *
 * MusicControls.create({
 *   track       : 'Time is Running Out',        // optional, default : ''
 *   artist      : 'Muse',                       // optional, default : ''
 *   cover       : 'albums/absolution.jpg',      // optional, default : nothing
 *   // cover can be a local path (use fullpath 'file:///storage/emulated/...', or only 'my_image.jpg' if my_image.jpg is in the www folder of your app)
 *   //           or a remote url ('http://...', 'https://...', 'ftp://...')
 *   isPlaying   : true,                         // optional, default : true
 *   dismissable : true,                         // optional, default : false
 *
 *   // hide previous/next/close buttons:
 *   hasPrev   : false,      // show previous button, optional, default: true
 *   hasNext   : false,      // show next button, optional, default: true
 *   hasClose  : true,       // show close button, optional, default: false
 *
 *   // Android only, optional
 *   // text displayed in the status bar when the notification (and the ticker) are updated
 *   ticker    : 'Now playing "Time is Running Out"'
 *  });
 *
 *  MusicControls.subscribe().subscribe(action => {
 *
 *    switch(action) {
 *        case 'music-controls-next':
 *            // Do something
 *            break;
 *        case 'music-controls-previous':
 *            // Do something
 *            break;
 *        case 'music-controls-pause':
 *            // Do something
 *            break;
 *        case 'music-controls-play':
 *            // Do something
 *            break;
 *        case 'music-controls-destroy':
 *            // Do something
 *            break;
 *
 *        // Headset events (Android only)
 *        case 'music-controls-media-button' :
 *            // Do something
 *            break;
 *        case 'music-controls-headset-unplugged':
 *            // Do something
 *            break;
 *        case 'music-controls-headset-plugged':
 *            // Do something
 *            break;
 *        default:
 *            break;
 *    }
 *
 *  });
 *
 *  MusicControls.listen(); // activates the observable above
 *
 *  MusicControls.updateIsPlaying(true);
 *
 *
 * ```
 * @interfaces
 * MusicControlsOptions
 */
var MusicControls = (function () {
    function MusicControls() {
    }
    /**
     * Create the media controls
     * @param options {MusicControlsOptions}
     * @returns {Promise<any>}
     */
    MusicControls.create = function (options) { return; };
    /**
     * Destroy the media controller
     * @returns {Promise<any>}
     */
    MusicControls.destroy = function () { return; };
    /**
     * Subscribe to the events of the media controller
     * @returns {Observable<any>}
     */
    MusicControls.subscribe = function () { return; };
    /**
     * Start listening for events, this enables the Observable from the subscribe method
     */
    MusicControls.listen = function () { };
    /**
     * Toggle play/pause:
     * @param isPlaying {boolean}
     */
    MusicControls.updateIsPlaying = function (isPlaying) { };
    __decorate([
        plugin_1.Cordova()
    ], MusicControls, "create", null);
    __decorate([
        plugin_1.Cordova()
    ], MusicControls, "destroy", null);
    __decorate([
        plugin_1.Cordova({
            observable: true
        })
    ], MusicControls, "subscribe", null);
    __decorate([
        plugin_1.Cordova({ sync: true })
    ], MusicControls, "listen", null);
    __decorate([
        plugin_1.Cordova({ sync: true })
    ], MusicControls, "updateIsPlaying", null);
    MusicControls = __decorate([
        plugin_1.Plugin({
            pluginName: 'MusicControls',
            plugin: 'cordova-plugin-music-controls',
            pluginRef: 'MusicControls',
            repo: 'https://github.com/homerours/cordova-music-controls-plugin'
        })
    ], MusicControls);
    return MusicControls;
}());
exports.MusicControls = MusicControls;

},{"./plugin":82}],73:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name NativeAudio
 * @description Native Audio Playback
 * @usage
 * ```typescript
 * import {NativeAudio} from 'ionic-native';
 *
 * NativeAudio.preloadSimple('uniqueId1', 'path/to/file.mp3').then(onSuccess, onError);
 * NativeAudio.preloadComplex('uniqueId2', 'path/to/file2.mp3', 1, 1, 0).then(onSuccess, onError);
 *
 * NativeAudio.play('uniqueId1').then(onSuccess, onError);
 *
 * // can optionally pass a callback to be called when the file is done playing
 * NativeAudio.play('uniqueId1', () => console.log('uniqueId1 is done playing'));
 *
 * NativeAudio.loop('uniqueId2').then(onSuccess, onError);
 *
 * NativeAudio.setVolumeForComplexAsset('uniqueId2', 0.6).then(onSuccess,onError);
 *
 * NativeAudio.stop('uniqueId1').then(onSuccess,onError);
 *
 * NativeAudio.unload('uniqueId1').then(onSuccess,onError);
 *
 * ```
 */
var NativeAudio = (function () {
    function NativeAudio() {
    }
    /**
     * Loads an audio file into memory. Optimized for short clips / single shots (up to five seconds). Cannot be stopped / looped.
     * @param id {string} unique ID for the audio file
     * @param assetPath {string}  the relative path or absolute URL (inluding http://) to the audio asset.
     * @returns {Promise<any>}
     */
    NativeAudio.preloadSimple = function (id, assetPath) { return; };
    /**
     * Loads an audio file into memory. Optimized for background music / ambient sound. Uses highlevel native APIs with a larger footprint. (iOS: AVAudioPlayer). Can be stopped / looped and used with multiple voices. Can be faded in and out using the delay parameter.
     * @param id {string} unique ID for the audio file
     * @param assetPath {string}  the relative path or absolute URL (inluding http://) to the audio asset.
     * @param volume {number} the volume of the preloaded sound (0.1 to 1.0)
     * @param voices {number} the number of multichannel voices available
     * @param delay {number}
     * @returns {Promise<any>}
     */
    NativeAudio.preloadComplex = function (id, assetPath, volume, voices, delay) { return; };
    /**
     * Plays an audio asset
     * @param id {string} unique ID for the audio file
     * @param completeCallback {Function} optional. Callback to be invoked when audio is done playing
     * @returns {Promise<any>}
     */
    NativeAudio.play = function (id, completeCallback) { return; };
    /**
     * Stops playing an audio
     * @param id {string} unique ID for the audio file
     * @returns {Promise<any>}
     */
    NativeAudio.stop = function (id) { return; };
    /**
     * Loops an audio asset infinitely, this only works for complex assets
     * @param id {string} unique ID for the audio file
     * @return {Promise<any>}
     */
    NativeAudio.loop = function (id) { return; };
    /**
     * Unloads an audio file from memory
     * @param id {string} unique ID for the audio file
     * @returns {Promise<any>}
     */
    NativeAudio.unload = function (id) { return; };
    /**
     * Changes the volume for preloaded complex assets.
     * @param id {string} unique ID for the audio file
     * @param volume {number} the volume of the audio asset (0.1 to 1.0)
     * @returns {Promise<any>}
     */
    NativeAudio.setVolumeForComplexAsset = function (id, volume) { return; };
    __decorate([
        plugin_1.Cordova()
    ], NativeAudio, "preloadSimple", null);
    __decorate([
        plugin_1.Cordova()
    ], NativeAudio, "preloadComplex", null);
    __decorate([
        plugin_1.Cordova({
            successIndex: 1,
            errorIndex: 2
        })
    ], NativeAudio, "play", null);
    __decorate([
        plugin_1.Cordova()
    ], NativeAudio, "stop", null);
    __decorate([
        plugin_1.Cordova()
    ], NativeAudio, "loop", null);
    __decorate([
        plugin_1.Cordova()
    ], NativeAudio, "unload", null);
    __decorate([
        plugin_1.Cordova()
    ], NativeAudio, "setVolumeForComplexAsset", null);
    NativeAudio = __decorate([
        plugin_1.Plugin({
            pluginName: 'NativeAudio',
            plugin: 'cordova-plugin-nativeaudio',
            pluginRef: 'plugins.NativeAudio',
            repo: 'https://github.com/floatinghotpot/cordova-plugin-nativeaudio'
        })
    ], NativeAudio);
    return NativeAudio;
}());
exports.NativeAudio = NativeAudio;

},{"./plugin":82}],74:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name NativePageTransitions
 * @description
 * The Native Page Transitions plugin uses native hardware acceleration to animate your transitions between views. You have complete control over the type of transition, the duration, and direction.
 *
 * @usage
 * ```
 * import {NativePageTransitions, NativeTransitionOptions} from 'ionic-native';
 *
 * let options: NativeTransitionOptions = {
 *    direction: 'up',
 *    duration: 500,
 *    slowdownfactor: 3,
 *    slidePixels: 20,
 *    iosdelay: 100,
 *    androiddelay: 150,
 *    winphonedelay: 250,
 *    fixedPixelsTop: 0,
 *    fixedPixelsBottom: 60
 *  };
 *
 * NativePageTransitions.slide(options)
 *   .then(onSuccess)
 *   .catch(onError);
 *
 * ```
 */
var NativePageTransitions = (function () {
    function NativePageTransitions() {
    }
    /**
     * Perform a slide animation
     * @param options {NativeTransitionOptions} Options for the transition
     * @returns {Promise<any>}
     */
    NativePageTransitions.slide = function (options) { return; };
    /**
     * Perform a flip animation
     * @param options {NativeTransitionOptions} Options for the transition
     * @returns {Promise<any>}
     */
    NativePageTransitions.flip = function (options) { return; };
    /**
     * Perform a fade animation
     * @param options {NativeTransitionOptions} Options for the transition
     * @returns {Promise<any>}
     */
    NativePageTransitions.fade = function (options) { return; };
    /**
     * Perform a slide animation
     * @param options {NativeTransitionOptions} Options for the transition
     * @returns {Promise<any>}
     */
    NativePageTransitions.drawer = function (options) { return; };
    /**
     * Perform a slide animation
     * @param options {NativeTransitionOptions} Options for the transition
     * @returns {Promise<any>}
     */
    NativePageTransitions.curl = function (options) { return; };
    __decorate([
        plugin_1.Cordova()
    ], NativePageTransitions, "slide", null);
    __decorate([
        plugin_1.Cordova()
    ], NativePageTransitions, "flip", null);
    __decorate([
        plugin_1.Cordova({ platforms: ['iOS', 'Android'] })
    ], NativePageTransitions, "fade", null);
    __decorate([
        plugin_1.Cordova({ platforms: ['iOS', 'Android'] })
    ], NativePageTransitions, "drawer", null);
    __decorate([
        plugin_1.Cordova({ platforms: ['iOS'] })
    ], NativePageTransitions, "curl", null);
    NativePageTransitions = __decorate([
        plugin_1.Plugin({
            pluginName: 'NativePageTransitions',
            plugin: 'com.telerik.plugins.nativepagetransitions',
            pluginRef: 'plugins.nativepagetransitions',
            repo: 'https://github.com/Telerik-Verified-Plugins/NativePageTransitions',
            platforms: ['iOS', 'Android', 'Windows Phone']
        })
    ], NativePageTransitions);
    return NativePageTransitions;
}());
exports.NativePageTransitions = NativePageTransitions;

},{"./plugin":82}],75:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name NativeStorage
 * @description Native storage of variables in Android and iOS
 *
 * @usage
 * ```typescript
 * import { NativeStorage } from 'ionic-native';
 *
 * NativeStorage.setItem('myitem', {property: 'value', anotherProperty: 'anotherValue'})
 *   .then(
 *     () => console.log('Stored item!'),
 *     error => console.error('Error storing item', error)
 *   );
 *
 * NativeStorage.getItem('myitem')
 *   .then(
 *     data => console.log(data),
 *     error => console.error(error)
 *   );
 * ```
 */
var NativeStorage = (function () {
    function NativeStorage() {
    }
    /**
     * Stores a value
     * @param reference {string}
     * @param value
     * @returns {Promise<any>}
     */
    NativeStorage.setItem = function (reference, value) { return; };
    /**
     * Gets a stored item
     * @param reference {string}
     * @returns {Promise<any>}
     */
    NativeStorage.getItem = function (reference) { return; };
    /**
     * Removes a single stored item
     * @param reference {string}
     * @returns {Promise<any>}
     */
    NativeStorage.remove = function (reference) { return; };
    /**
     * Removes all stored values.
     * @returns {Promise<any>}
     */
    NativeStorage.clear = function () { return; };
    __decorate([
        plugin_1.Cordova()
    ], NativeStorage, "setItem", null);
    __decorate([
        plugin_1.Cordova()
    ], NativeStorage, "getItem", null);
    __decorate([
        plugin_1.Cordova()
    ], NativeStorage, "remove", null);
    __decorate([
        plugin_1.Cordova()
    ], NativeStorage, "clear", null);
    NativeStorage = __decorate([
        plugin_1.Plugin({
            pluginName: 'NativeStorage',
            plugin: 'cordova-plugin-nativestorage',
            pluginRef: 'NativeStorage',
            repo: 'https://github.com/TheCocoaProject/cordova-plugin-nativestorage'
        })
    ], NativeStorage);
    return NativeStorage;
}());
exports.NativeStorage = NativeStorage;

},{"./plugin":82}],76:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name Network
 * @description
 * Requires Cordova plugin: cordova-plugin-network-information. For more info, please see the [Network plugin docs](https://github.com/apache/cordova-plugin-network-information).
 *
 * @usage
 * ```typescript
 * import { Network } from 'ionic-native';
 *
 * // watch network for a disconnect
 * let disconnectSubscription = Network.onDisconnect().subscribe(() => {
 *   console.log('network was disconnected :-(');
 * });
 *
 * // stop disconnect watch
 * disconnectSubscription.unsubscribe();
 *
 *
 * // watch network for a connection
 * let connectSubscription = Network.onConnect().subscribe(() => {
 *   console.log('network connected!');

 *   // We just got a connection but we need to wait briefly
 *
   // before we determine the connection type.  Might need to wait

 *   // prior to doing any api requests as well.
 *   setTimeout(() => {
 *     if (Network.connection === 'wifi') {
 *       console.log('we got a wifi connection, woohoo!');
 *     }
 *   }, 3000);
 * });
 *
 * // stop connect watch
 * connectSubscription.unsubscribe();
 *
 * ```
 * @advanced
 * The `connection` property will return one of the following connection types: `unknown`, `ethernet`, `wifi`, `2g`, `3g`, `4g`, `cellular`, `none`
 */
var Network = (function () {
    function Network() {
    }
    /**
     * Returns an observable to watch connection changes
     * @return {Observable<any>}
     */
    Network.onchange = function () { return; };
    /**
     * Returns an observable to watch connection type changes
     * @return {Observable<any>}
     */
    Network.ontypechange = function () { return; };
    /**
     * Get notified when the device goes offline
     * @returns {Observable<any>} Returns an observable.
     */
    Network.onDisconnect = function () { return; };
    /**
     * Get notified when the device goes online
     * @returns {Observable<any>} Returns an observable.
     */
    Network.onConnect = function () { return; };
    __decorate([
        plugin_1.CordovaProperty
    ], Network, "type", void 0);
    __decorate([
        plugin_1.CordovaProperty
    ], Network, "downlinkMax", void 0);
    __decorate([
        plugin_1.CordovaFunctionOverride()
    ], Network, "onchange", null);
    __decorate([
        plugin_1.CordovaFunctionOverride()
    ], Network, "ontypechange", null);
    __decorate([
        plugin_1.Cordova({
            eventObservable: true,
            event: 'offline'
        })
    ], Network, "onDisconnect", null);
    __decorate([
        plugin_1.Cordova({
            eventObservable: true,
            event: 'online'
        })
    ], Network, "onConnect", null);
    Network = __decorate([
        plugin_1.Plugin({
            pluginName: 'Network',
            plugin: 'cordova-plugin-network-information',
            repo: 'https://github.com/apache/cordova-plugin-network-information',
            platforms: ['Amazon Fire OS', 'iOS', 'Android', 'BlackBerry 10', 'Windows Phone 7', 'Windows Phone 8', 'Windows', 'Firefox OS', 'Browser'],
            pluginRef: 'navigator.connection'
        })
    ], Network);
    return Network;
}());
exports.Network = Network;

},{"./plugin":82}],77:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name NFC
 * @description
 * The NFC plugin allows you to read and write NFC tags. You can also beam to, and receive from, other NFC enabled devices.
 *
 * Use to
 * - read data from NFC tags
 * - write data to NFC tags
 * - send data to other NFC enabled devices
 * - receive data from NFC devices
 *
 * This plugin uses NDEF (NFC Data Exchange Format) for maximum compatibilty between NFC devices, tag types, and operating systems.
 *
 * @usage
 * ```
 * import {NFC, Ndef} from 'ionic-native';
 *
 * let message = Ndef.textRecord('Hello world');
 * NFC.share([message]).then(onSuccess).catch(onError);
 *
 * ```
 */
var NFC = (function () {
    function NFC() {
    }
    /**
     * Registers an event listener for any NDEF tag.
     * @param onSuccess
     * @param onFailure
     * @returns {Observable<any>}
     */
    NFC.addNdefListener = function (onSuccess, onFailure) { return; };
    /**
     * Registers an event listener for tags matching any tag type.
     * @param mimeType
     * @param onSuccess
     * @param onFailure
     * @returns {Observable<any>}
     */
    NFC.addTagDiscoveredListener = function (mimeType, onSuccess, onFailure) { return; };
    /**
     * Registers an event listener for NDEF tags matching a specified MIME type.
     * @param onSuccess
     * @param onFailure
     * @returns {Observable<any>}
     */
    NFC.addMimeTypeListener = function (onSuccess, onFailure) { return; };
    /**
     * Registers an event listener for formatable NDEF tags.
     * @param onSuccess
     * @param onFailure
     * @returns {Observable<any>}
     */
    NFC.addNdefFormatableListener = function (onSuccess, onFailure) { return; };
    /**
     * Qrites an NdefMessage to a NFC tag.
     * @param message {any[]}
     * @returns {Promise<any>}
     */
    NFC.write = function (message) { return; };
    /**
     * Makes a NFC tag read only. **Warning** this is permanent.
     * @returns {Promise<any>}
     */
    NFC.makeReadyOnly = function () { return; };
    /**
     * Shares an NDEF Message via peer-to-peer.
     * @param message An array of NDEF Records.
     * @returns {Promise<any>}
     */
    NFC.share = function (message) { return; };
    /**
     * Stop sharing NDEF data via peer-to-peer.
     * @returns {Promise<any>}
     */
    NFC.unshare = function () { return; };
    /**
     * Erase a NDEF tag
     */
    NFC.erase = function () { return; };
    /**
     * Send a file to another device via NFC handover.
     * @param uris A URI as a String, or an array of URIs.
     * @returns {Promise<any>}
     */
    NFC.handover = function (uris) { return; };
    /**
     * Stop sharing NDEF data via NFC handover.
     * @returns {Promise<any>}
     */
    NFC.stopHandover = function () { return; };
    /**
     * Show the NFC settings on the device.
     * @returns {Promise<any>}
     */
    NFC.showSettings = function () { return; };
    /**
     * Check if NFC is available and enabled on this device.
     * @returns {Promise<any>}
     */
    NFC.enabled = function () { return; };
    __decorate([
        plugin_1.Cordova({
            observable: true,
            successIndex: 0,
            errorIndex: 3,
            clearFunction: 'removeNdefListener',
            clearWithArgs: true
        })
    ], NFC, "addNdefListener", null);
    __decorate([
        plugin_1.Cordova({
            observable: true,
            successIndex: 1,
            errorIndex: 4,
            clearFunction: 'removeTagDiscoveredListener',
            clearWithArgs: true
        })
    ], NFC, "addTagDiscoveredListener", null);
    __decorate([
        plugin_1.Cordova({
            observable: true,
            successIndex: 0,
            errorIndex: 3,
            clearFunction: 'removeMimeTypeListener',
            clearWithArgs: true
        })
    ], NFC, "addMimeTypeListener", null);
    __decorate([
        plugin_1.Cordova({
            observable: true,
            successIndex: 0,
            errorIndex: 3
        })
    ], NFC, "addNdefFormatableListener", null);
    __decorate([
        plugin_1.Cordova()
    ], NFC, "write", null);
    __decorate([
        plugin_1.Cordova()
    ], NFC, "makeReadyOnly", null);
    __decorate([
        plugin_1.Cordova()
    ], NFC, "share", null);
    __decorate([
        plugin_1.Cordova()
    ], NFC, "unshare", null);
    __decorate([
        plugin_1.Cordova()
    ], NFC, "erase", null);
    __decorate([
        plugin_1.Cordova()
    ], NFC, "handover", null);
    __decorate([
        plugin_1.Cordova()
    ], NFC, "stopHandover", null);
    __decorate([
        plugin_1.Cordova()
    ], NFC, "showSettings", null);
    __decorate([
        plugin_1.Cordova()
    ], NFC, "enabled", null);
    NFC = __decorate([
        plugin_1.Plugin({
            pluginName: 'NFC',
            plugin: 'phonegap-nfc',
            pluginRef: 'nfc',
            repo: 'https://github.com/chariotsolutions/phonegap-nfc'
        })
    ], NFC);
    return NFC;
}());
exports.NFC = NFC;
/**
 * @private
 */
var Ndef = (function () {
    function Ndef() {
    }
    Ndef.uriRecord = function (uri) { return; };
    Ndef.textRecord = function (text) { return; };
    Ndef.mimeMediaRecord = function (mimeType, payload) { return; };
    Ndef.androidApplicationRecord = function (packageName) { return; };
    /**
     * @private
     */
    Ndef.pluginName = 'NFC';
    /**
     * @private
     */
    Ndef.plugin = 'phonegap-nfc';
    /**
     * @private
     */
    Ndef.pluginRef = 'ndef';
    __decorate([
        plugin_1.Cordova({ sync: true })
    ], Ndef, "uriRecord", null);
    __decorate([
        plugin_1.Cordova({ sync: true })
    ], Ndef, "textRecord", null);
    __decorate([
        plugin_1.Cordova({ sync: true })
    ], Ndef, "mimeMediaRecord", null);
    __decorate([
        plugin_1.Cordova({ sync: true })
    ], Ndef, "androidApplicationRecord", null);
    return Ndef;
}());
exports.Ndef = Ndef;

},{"./plugin":82}],78:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name OneSignal
 * @description
 * The OneSignal plugin is an client implementation for using the [OneSignal](https://onesignal.com/) Service.
 * OneSignal is a simple implementation for delivering push notifications.
 *
 * Requires Cordova plugin: `onesignal-cordova-plugin`. For more info, please see the [OneSignal Cordova Docs](https://documentation.onesignal.com/docs/phonegap-sdk-installation).
 *
 * @usage
 * ```typescript
 * import { OneSignal } from 'ionic-native';
 *
 * OneSignal.startInit('b2f7f966-d8cc-11e4-bed1-df8f05be55ba', '703322744261');
 *
 * OneSignal.inFocusDisplaying(OneSignal.OSInFocusDisplayOption.InAppAlert);
 *
 * OneSignal.handleNotificationReceived().subscribe(() => {
 *  // do something when notification is received
 * });
 *
 * OneSignal.handleNotificationOpened().subscribe(() => {
 *   // do something when a notification is opened
 * });
 *
 * OneSignal.endInit();
 * ```
 * @interfaces
 * OneSignalNotification
 */
var OneSignal = (function () {
    function OneSignal() {
    }
    /**
     * Start the initialization process. Once you are done configuring OneSignal, call the endInit function.
     *
     * @param {string} appId Your AppId from your OneSignal app
     * @param {string} googleProjectNumber The Google Project Number (which you can get from the Google Developer Portal) and the autoRegister option.
     * @returns {any}
     */
    OneSignal.startInit = function (appId, googleProjectNumber) { return; };
    /**
     * Callback to run when a notification is received
     * @return {Observable<any>}
     */
    OneSignal.handleNotificationReceived = function () { return; };
    /**
     * Callback to run when a notification is opened
     * @return {Observable<any>}
     */
    OneSignal.handleNotificationOpened = function () { return; };
    /**
     *
     * @param settings
     * @returns {any}
     */
    OneSignal.iOSSettings = function (settings) { return; };
    /**
     * @returns {any}
     */
    OneSignal.endInit = function () { return; };
    /**
     * Retrieve a list of tags that have been set on the user from the OneSignal server.
     *
     * @returns {Promise<any>} Returns a Promise that resolves when tags are recieved.
     */
    OneSignal.getTags = function () { return; };
    /**
     * Lets you retrieve the OneSignal user id and device token.
     * Your handler is called after the device is successfully registered with OneSignal.
     *
     * @returns {Promise<any>} Returns a Promise that reolves if the device was successfully registered.
     * It returns a JSON with `userId`and `pushToken`.
     */
    OneSignal.getIds = function () { return; };
    /**
     * Tag a user based on an app event of your choosing so later you can create segments on [onesignal.com](https://onesignal.com/) to target these users.
     * Recommend using sendTags over sendTag if you need to set more than one tag on a user at a time.
     *
     * @param {string} Key of your choosing to create or update.
     * @param {string} Value to set on the key. NOTE: Passing in a blank String deletes the key, you can also call deleteTag.
     */
    OneSignal.sendTag = function (key, value) { };
    /**
     * Tag a user based on an app event of your choosing so later you can create segments on [onesignal.com](https://onesignal.com/) to target these users.
     * Recommend using sendTags over sendTag if you need to set more than one tag on a user at a time.
     *
     * @param {string} Pass a json object with key/value pairs like: {key: "value", key2: "value2"}
     */
    OneSignal.sendTags = function (json) { };
    /**
     * Deletes a tag that was previously set on a user with `sendTag` or `sendTags`. Use `deleteTags` if you need to delete more than one.
     *
     * @param {string} Key to remove.
     */
    OneSignal.deleteTag = function (key) { };
    /**
     * Deletes tags that were previously set on a user with `sendTag` or `sendTags`.
     *
     * @param {Array<string>} Keys to remove.
     */
    OneSignal.deleteTags = function (keys) { };
    /**
     * Call this when you would like to prompt an iOS user to accept push notifications with the default system prompt.
     * Only use if you passed false to autoRegister when calling init.
     */
    OneSignal.registerForPushNotifications = function () { };
    /**
    * Warning:
    * Only applies to Android and Amazon. You can call this from your UI from a button press for example to give your user's options for your notifications.
    *
    * By default OneSignal always vibrates the device when a notification is displayed unless the device is in a total silent mode.
    * Passing false means that the device will only vibrate lightly when the device is in it's vibrate only mode.
    *
    * @param {boolean} false to disable vibrate, true to re-enable it.
    */
    OneSignal.enableVibrate = function (enable) { };
    /**
    * Warning:
    * Only applies to Android and Amazon. You can call this from your UI from a button press for example to give your user's options for your notifications.
    *
    * By default OneSignal plays the system's default notification sound when the device's notification system volume is turned on.
    * Passing false means that the device will only vibrate unless the device is set to a total silent mode.
    *
    * @param {boolean} false to disable sound, true to re-enable it.
    */
    OneSignal.enableSound = function (enable) { };
    /**
    *
    * Setting to control how OneSignal notifications will be shown when one is received while your app is in focus. By default this is set to inAppAlert, which can be helpful during development.
    *
    * @param {number} displayOption Options are 0 = None, 1 = InAppAlert, and 2 = Notification.
    */
    OneSignal.inFocusDisplaying = function (displayOption) { };
    /**
    * You can call this method with false to opt users out of receiving all notifications through OneSignal.
    * You can pass true later to opt users back into notifications.
    *
    * @param {boolean} enable
    */
    OneSignal.setSubscription = function (enable) { };
    /**
    *
    * @param {notificationObj} Parameters see POST [documentation](https://documentation.onesignal.com/v2.0/docs/notifications-create-notification)
    * @returns {Promise<any>} Returns a Promise that resolves if the notification was send successfully.
    */
    OneSignal.postNotification = function (notificationObj) { return; };
    /**
    * Prompts the user for location permission to allow geotagging based on the "Location radius" filter on the OneSignal dashboard.
    */
    OneSignal.promptLocation = function () { };
    /**
     *
     * @param email {string}
     */
    OneSignal.syncHashedEmail = function (email) { };
    /**
    * Enable logging to help debug if you run into an issue setting up OneSignal.
    * The logging levels are as follows: 0 = None, 1= Fatal, 2 = Errors, 3 = Warnings, 4 = Info, 5 = Debug, 6 = Verbose
  
    * The higher the value the more information is shown.
    *
    * @param {loglevel} contains two properties: logLevel (for console logging) and visualLevel (for dialog messages)
    */
    OneSignal.setLogLevel = function (logLevel) { };
    /**
     * constants to use in inFocusDisplaying()
     */
    OneSignal.OSInFocusDisplayOption = {
        None: 0,
        InAppAlert: 1,
        Notification: 2
    };
    __decorate([
        plugin_1.Cordova({ sync: true })
    ], OneSignal, "startInit", null);
    __decorate([
        plugin_1.Cordova({
            observable: true
        })
    ], OneSignal, "handleNotificationReceived", null);
    __decorate([
        plugin_1.Cordova({
            observable: true
        })
    ], OneSignal, "handleNotificationOpened", null);
    __decorate([
        plugin_1.Cordova({ sync: true })
    ], OneSignal, "iOSSettings", null);
    __decorate([
        plugin_1.Cordova({ sync: true })
    ], OneSignal, "endInit", null);
    __decorate([
        plugin_1.Cordova()
    ], OneSignal, "getTags", null);
    __decorate([
        plugin_1.Cordova()
    ], OneSignal, "getIds", null);
    __decorate([
        plugin_1.Cordova({ sync: true })
    ], OneSignal, "sendTag", null);
    __decorate([
        plugin_1.Cordova({ sync: true })
    ], OneSignal, "sendTags", null);
    __decorate([
        plugin_1.Cordova({ sync: true })
    ], OneSignal, "deleteTag", null);
    __decorate([
        plugin_1.Cordova({ sync: true })
    ], OneSignal, "deleteTags", null);
    __decorate([
        plugin_1.Cordova({ sync: true })
    ], OneSignal, "registerForPushNotifications", null);
    __decorate([
        plugin_1.Cordova({ sync: true })
    ], OneSignal, "enableVibrate", null);
    __decorate([
        plugin_1.Cordova({ sync: true })
    ], OneSignal, "enableSound", null);
    __decorate([
        plugin_1.Cordova({ sync: true })
    ], OneSignal, "inFocusDisplaying", null);
    __decorate([
        plugin_1.Cordova({ sync: true })
    ], OneSignal, "setSubscription", null);
    __decorate([
        plugin_1.Cordova()
    ], OneSignal, "postNotification", null);
    __decorate([
        plugin_1.Cordova({ sync: true })
    ], OneSignal, "promptLocation", null);
    __decorate([
        plugin_1.Cordova({ sync: true })
    ], OneSignal, "syncHashedEmail", null);
    __decorate([
        plugin_1.Cordova({ sync: true })
    ], OneSignal, "setLogLevel", null);
    OneSignal = __decorate([
        plugin_1.Plugin({
            pluginName: 'OneSignal',
            plugin: 'onesignal-cordova-plugin',
            pluginRef: 'plugins.OneSignal',
            repo: 'https://github.com/OneSignal/OneSignal-Cordova-SDK'
        })
    ], OneSignal);
    return OneSignal;
}());
exports.OneSignal = OneSignal;

},{"./plugin":82}],79:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name PayPal
 * @description
 * PayPal plugin for Cordova/Ionic Applications
 *
 * @usage
 * ```
 * import {PayPal, PayPalPayment, PayPalConfiguration} from "ionic-native";
 *
 * PayPal.init({
 *   "PayPalEnvironmentProduction": "YOUR_PRODUCTION_CLIENT_ID",
 *   "PayPalEnvironmentSandbox": "YOUR_SANDBOX_CLIENT_ID"
 * }).then(() => {
 *   // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
 *   PayPal.prepareToRender('PayPalEnvironmentSandbox', new PayPalConfiguration({
 *     // Only needed if you get an "Internal Service Error" after PayPal login!
 *     //payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
 *   })).then(() => {
 *     let payment = new PayPalPayment('3.33', 'USD', 'Description', 'sale');
 *     PayPal.renderSinglePaymentUI(payment).then(() => {
 *       // Successfully paid
 *
 *       // Example sandbox response
 *       //
 *       // {
 *       //   "client": {
 *       //     "environment": "sandbox",
 *       //     "product_name": "PayPal iOS SDK",
 *       //     "paypal_sdk_version": "2.16.0",
 *       //     "platform": "iOS"
 *       //   },
 *       //   "response_type": "payment",
 *       //   "response": {
 *       //     "id": "PAY-1AB23456CD789012EF34GHIJ",
 *       //     "state": "approved",
 *       //     "create_time": "2016-10-03T13:33:33Z",
 *       //     "intent": "sale"
 *       //   }
 *       // }
 *     }, () => {
 *       // Error or render dialog closed without being successful
 *     });
 *   }, () => {
 *     // Error in configuration
 *   });
 * }, () => {
 *   // Error in initialization, maybe PayPal isn't supported or something else
 * });
 * ```
 * @interfaces
 * PayPalEnvironment
 * PayPalConfigurationOptions
 * @classes
 * PayPalPayment
 * PayPalItem
 * PayPalPaymentDetails
 * PayPalShippingAddress
 */
var PayPal = (function () {
    function PayPal() {
    }
    /**
     * Retrieve the version of the PayPal iOS SDK library. Useful when contacting support.
     * @returns {Promise<string>}
     */
    PayPal.version = function () { return; };
    /**
     * You must preconnect to PayPal to prepare the device for processing payments.
     * This improves the user experience, by making the presentation of the
     * UI faster. The preconnect is valid for a limited time, so
     * the recommended time to preconnect is on page load.
     *
     * @param {PayPalEnvironment} clientIdsForEnvironments: set of client ids for environments
     * @returns {Promise<any>}
     */
    PayPal.init = function (clientIdsForEnvironments) { return; };
    /**
     * You must preconnect to PayPal to prepare the device for processing payments.
     * This improves the user experience, by making the presentation of the UI faster.
     * The preconnect is valid for a limited time, so the recommended time to preconnect is on page load.
     *
     * @param {String} environment: available options are "PayPalEnvironmentNoNetwork", "PayPalEnvironmentProduction" and "PayPalEnvironmentSandbox"
     * @param {PayPalConfiguration} configuration: PayPalConfiguration object, for Future Payments merchantName, merchantPrivacyPolicyURL and merchantUserAgreementURL must be set be set
     * @returns {Promise<any>}
     */
    PayPal.prepareToRender = function (environment, configuration) { return; };
    /**
     * Start PayPal UI to collect payment from the user.
     * See https://developer.paypal.com/webapps/developer/docs/integration/mobile/ios-integration-guide/
     * for more documentation of the params.
     *
     * @param {PayPalPayment} payment PayPalPayment object
     * @returns {Promise<any>}
     */
    PayPal.renderSinglePaymentUI = function (payment) { return; };
    /**
     * Once a user has consented to future payments, when the user subsequently initiates a PayPal payment
     * from their device to be completed by your server, PayPal uses a Correlation ID to verify that the
     * payment is originating from a valid, user-consented device+application.
     * This helps reduce fraud and decrease declines.
     * This method MUST be called prior to initiating a pre-consented payment (a "future payment") from a mobile device.
     * Pass the result to your server, to include in the payment request sent to PayPal.
     * Do not otherwise cache or store this value.
     * @returns {Promise<any>}
     */
    PayPal.clientMetadataID = function () { return; };
    /**
     * Please Read Docs on Future Payments at https://github.com/paypal/PayPal-iOS-SDK#future-payments
     * @returns {Promise<any>}
     */
    PayPal.renderFuturePaymentUI = function () { return; };
    /**
     * Please Read Docs on Profile Sharing at https://github.com/paypal/PayPal-iOS-SDK#profile-sharing
     *
     * @param {Array<string>} scopes scopes Set of requested scope-values. Accepted scopes are: openid, profile, address, email, phone, futurepayments and paypalattributes
     * See https://developer.paypal.com/docs/integration/direct/identity/attributes/ for more details
     * @returns {Promise<any>}
     */
    PayPal.renderProfileSharingUI = function (scopes) { return; };
    __decorate([
        plugin_1.Cordova()
    ], PayPal, "version", null);
    __decorate([
        plugin_1.Cordova()
    ], PayPal, "init", null);
    __decorate([
        plugin_1.Cordova()
    ], PayPal, "prepareToRender", null);
    __decorate([
        plugin_1.Cordova()
    ], PayPal, "renderSinglePaymentUI", null);
    __decorate([
        plugin_1.Cordova()
    ], PayPal, "clientMetadataID", null);
    __decorate([
        plugin_1.Cordova()
    ], PayPal, "renderFuturePaymentUI", null);
    __decorate([
        plugin_1.Cordova()
    ], PayPal, "renderProfileSharingUI", null);
    PayPal = __decorate([
        plugin_1.Plugin({
            pluginName: 'PayPal',
            plugin: 'com.paypal.cordova.mobilesdk',
            pluginRef: 'PayPalMobile',
            repo: 'https://github.com/paypal/PayPal-Cordova-Plugin'
        })
    ], PayPal);
    return PayPal;
}());
exports.PayPal = PayPal;
/**
 * @private
 */
var PayPalPayment = (function () {
    function PayPalPayment(amount, currency, shortDescription, intent, details) {
        /**
         * Optional Build Notation code ("BN code"), obtained from partnerprogram@paypal.com,
         * for your tracking purposes.
         */
        this.bnCode = 'PhoneGap_SP';
        this.amount = amount;
        this.currency = currency;
        this.shortDescription = shortDescription;
        this.intent = intent;
        this.details = details;
    }
    return PayPalPayment;
}());
exports.PayPalPayment = PayPalPayment;
/**
 * @private
 */
var PayPalItem = (function () {
    /**
     * The PayPalItem class defines an optional itemization for a payment.
     * @see https://developer.paypal.com/docs/api/#item-object for more details.
     * @param {String} name: Name of the item. 127 characters max
     * @param {Number} quantity: Number of units. 10 characters max.
     * @param {String} price: Unit price for this item 10 characters max.
     * May be negative for "coupon" etc
     * @param {String} currency: ISO standard currency code.
     * @param {String} sku: The stock keeping unit for this item. 50 characters max (optional)
     */
    function PayPalItem(name, quantity, price, currency, sku) {
        this.name = name;
        this.quantity = quantity;
        this.price = price;
        this.currency = currency;
        this.sku = sku;
    }
    return PayPalItem;
}());
exports.PayPalItem = PayPalItem;
/**
 * @private
 */
var PayPalPaymentDetails = (function () {
    /**
     * The PayPalPaymentDetails class defines optional amount details.
     * @param {String} subtotal: Sub-total (amount) of items being paid for. 10 characters max with support for 2 decimal places.
     * @param {String} shipping: Amount charged for shipping. 10 characters max with support for 2 decimal places.
     * @param {String} tax: Amount charged for tax. 10 characters max with support for 2 decimal places.
     */
    function PayPalPaymentDetails(subtotal, shipping, tax) {
        this.subtotal = subtotal;
        this.shipping = shipping;
        this.tax = tax;
    }
    return PayPalPaymentDetails;
}());
exports.PayPalPaymentDetails = PayPalPaymentDetails;
/**
 * @private
 */
var PayPalConfiguration = (function () {
    /**
     * You use a PayPalConfiguration object to configure many aspects of how the SDK behaves.
     * see defaults for options available
     */
    function PayPalConfiguration(options) {
        var defaults = {
            defaultUserEmail: null,
            defaultUserPhoneCountryCode: null,
            defaultUserPhoneNumber: null,
            merchantName: null,
            merchantPrivacyPolicyURL: null,
            merchantUserAgreementURL: null,
            acceptCreditCards: true,
            payPalShippingAddressOption: 0,
            rememberUser: true,
            languageOrLocale: null,
            disableBlurWhenBackgrounding: false,
            presentingInPopover: false,
            forceDefaultsInSandbox: false,
            sandboxUserPassword: null,
            sandboxUserPin: null
        };
        if (options && typeof options === 'object') {
            for (var i in options) {
                if (defaults.hasOwnProperty(i)) {
                    defaults[i] = options[i];
                }
            }
        }
        return defaults;
    }
    return PayPalConfiguration;
}());
exports.PayPalConfiguration = PayPalConfiguration;
/**
 * @private
 */
var PayPalShippingAddress = (function () {
    /**
     * See the documentation of the individual properties for more detail.
     * @param {String} recipientName: Name of the recipient at this address. 50 characters max.
     * @param {String} line1: Line 1 of the address (e.g., Number, street, etc). 100 characters max.
     * @param {String} line2: Line 2 of the address (e.g., Suite, apt #, etc). 100 characters max. Optional.
     * @param {String} city: City name. 50 characters max.
     * @param {String} state: 2-letter code for US states, and the equivalent for other countries. 100 characters max. Required in certain countries.
     * @param {String} postalCode: ZIP code or equivalent is usually required for countries that have them. 20 characters max. Required in certain countries.
     * @param {String} countryCode: 2-letter country code. 2 characters max.
     */
    function PayPalShippingAddress(recipientName, line1, line2, city, state, postalCode, countryCode) {
        this.recipientName = recipientName;
        this.line1 = line1;
        this.line2 = line2;
        this.city = city;
        this.state = state;
        this.postalCode = postalCode;
        this.countryCode = countryCode;
    }
    return PayPalShippingAddress;
}());
exports.PayPalShippingAddress = PayPalShippingAddress;

},{"./plugin":82}],80:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name Photo Viewer
 * @description This plugin can display your image in full screen with the ability to pan, zoom, and share the image.
 * @usage
 * ```typescript
 * import { PhotoViewer } from 'ionic-native';
 *
 * PhotoViewer.show('https://mysite.com/path/to/image.jpg');
 *
 * PhotoViewer.show('https://mysite.com/path/to/image.jpg', 'My image title', {share: false});
 * ```
 */
var PhotoViewer = (function () {
    function PhotoViewer() {
    }
    /**
     * Shows an image in full screen
     * @param url {string} URL or path to image
     * @param title {string}
     * @param options {any}
     */
    PhotoViewer.show = function (url, title, options) { };
    __decorate([
        plugin_1.Cordova({ sync: true })
    ], PhotoViewer, "show", null);
    PhotoViewer = __decorate([
        plugin_1.Plugin({
            pluginName: 'PhotoViewer',
            plugin: 'com-sarriaroman-photoviewer',
            pluginRef: 'PhotoViewer',
            repo: 'https://github.com/sarriaroman/photoviewer'
        })
    ], PhotoViewer);
    return PhotoViewer;
}());
exports.PhotoViewer = PhotoViewer;

},{"./plugin":82}],81:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name Pin Dialog
 * @description
 *
 * @usage
 * ```typescript
 * import { PinDialog } from 'ionic-native';
 *
 *
 * PinDialog.prompt('Enter your PIN', 'Verify PIN', ['OK', 'Cancel'])
 *   .then(
 *     (result: any) => {
 *       if (result.buttonIndex == 1) console.log('User clicked OK, value is: ', result.input1);
 *       else if(result.buttonIndex == 2) console.log('User cancelled');
 *     }
 *   );
 * ```
 */
var PinDialog = (function () {
    function PinDialog() {
    }
    /**
     * Show pin dialog
     * @param {string} message Message to show the user
     * @param {string} title Title of the dialog
     * @param {string[]} buttons Buttons to show
     * @returns {Promise<{ buttonIndex: number, input1: string }>}
     */
    PinDialog.prompt = function (message, title, buttons) { return; };
    __decorate([
        plugin_1.Cordova({
            successIndex: 1
        })
    ], PinDialog, "prompt", null);
    PinDialog = __decorate([
        plugin_1.Plugin({
            pluginName: 'PinDialog',
            plugin: 'cordova-plugin-pin-dialog',
            pluginRef: 'plugins.pinDialog',
            repo: 'https://github.com/Paldom/PinDialog'
        })
    ], PinDialog);
    return PinDialog;
}());
exports.PinDialog = PinDialog;

},{"./plugin":82}],82:[function(require,module,exports){
"use strict";
var util_1 = require('../util');
var Observable_1 = require('rxjs/Observable');
/**
 * @private
 * @param pluginRef
 * @returns {null|*}
 */
exports.getPlugin = function (pluginRef) {
    return util_1.get(window, pluginRef);
};
/**
 * @private
 * @param pluginObj
 * @param method
 */
exports.pluginWarn = function (pluginObj, method) {
    var pluginName = pluginObj.pluginName, plugin = pluginObj.plugin;
    if (method) {
        console.warn('Native: tried calling ' + pluginName + '.' + method + ', but the ' + pluginName + ' plugin is not installed.');
    }
    else {
        console.warn('Native: tried accessing the ' + pluginName + ' plugin but it\'s not installed.');
    }
    console.warn('Install the ' + pluginName + ' plugin: \'ionic plugin add ' + plugin + '\'');
};
/**
 * @private
 * @param pluginName
 * @param method
 */
exports.cordovaWarn = function (pluginName, method) {
    if (method) {
        console.warn('Native: tried calling ' + pluginName + '.' + method + ', but Cordova is not available. Make sure to include cordova.js or run in a device/simulator');
    }
    else {
        console.warn('Native: tried accessing the ' + pluginName + ' plugin but Cordova is not available. Make sure to include cordova.js or run in a device/simulator');
    }
};
function setIndex(args, opts, resolve, reject) {
    if (opts === void 0) { opts = {}; }
    // ignore resolve and reject in case sync
    if (opts.sync) {
        return args;
    }
    // If the plugin method expects myMethod(success, err, options)
    if (opts.callbackOrder === 'reverse') {
        // Get those arguments in the order [resolve, reject, ...restOfArgs]
        args.unshift(reject);
        args.unshift(resolve);
    }
    else if (opts.callbackStyle === 'node') {
        args.push(function (err, result) {
            if (err) {
                reject(err);
            }
            else {
                resolve(result);
            }
        });
    }
    else if (opts.callbackStyle === 'object' && opts.successName && opts.errorName) {
        var obj = {};
        obj[opts.successName] = resolve;
        obj[opts.errorName] = reject;
        args.push(obj);
    }
    else if (typeof opts.successIndex !== 'undefined' || typeof opts.errorIndex !== 'undefined') {
        var setSuccessIndex = function () {
            // If we've specified a success/error index
            if (opts.successIndex > args.length) {
                args[opts.successIndex] = resolve;
            }
            else {
                args.splice(opts.successIndex, 0, resolve);
            }
        };
        var setErrorIndex = function () {
            // We don't want that the reject cb gets spliced into the position of an optional argument that has not been defined and thus causing non expected behaviour.
            if (opts.errorIndex > args.length) {
                args[opts.errorIndex] = reject; // insert the reject fn at the correct specific index
            }
            else {
                args.splice(opts.errorIndex, 0, reject); // otherwise just splice it into the array
            }
        };
        if (opts.successIndex > opts.errorIndex) {
            setErrorIndex();
            setSuccessIndex();
        }
        else {
            setSuccessIndex();
            setErrorIndex();
        }
    }
    else {
        // Otherwise, let's tack them on to the end of the argument list
        // which is 90% of cases
        args.push(resolve);
        args.push(reject);
    }
    return args;
}
function callCordovaPlugin(pluginObj, methodName, args, opts, resolve, reject) {
    if (opts === void 0) { opts = {}; }
    // Try to figure out where the success/error callbacks need to be bound
    // to our promise resolve/reject handlers.
    args = setIndex(args, opts, resolve, reject);
    var pluginInstance = exports.getPlugin(pluginObj.pluginRef);
    if (!pluginInstance) {
        // Do this check in here in the case that the Web API for this plugin is available (for example, Geolocation).
        if (!window.cordova) {
            exports.cordovaWarn(pluginObj.pluginName, methodName);
            return {
                error: 'cordova_not_available'
            };
        }
        exports.pluginWarn(pluginObj, methodName);
        return {
            error: 'plugin_not_installed'
        };
    }
    // TODO: Illegal invocation needs window context
    return util_1.get(window, pluginObj.pluginRef)[methodName].apply(pluginInstance, args);
}
/**
 * @private
 */
function getPromise(cb) {
    var tryNativePromise = function () {
        if (window.Promise) {
            return new Promise(function (resolve, reject) {
                cb(resolve, reject);
            });
        }
        else {
            console.error('No Promise support or polyfill found. To enable Ionic Native support, please add the es6-promise polyfill before this script, or run with a library like Angular 1/2 or on a recent browser.');
        }
    };
    if (window.angular) {
        var injector = window.angular.element(document.querySelector('[ng-app]') || document.body).injector();
        if (injector) {
            var $q = injector.get('$q');
            return $q(function (resolve, reject) {
                cb(resolve, reject);
            });
        }
        else {
            console.warn('Angular 1 was detected but $q couldn\'t be retrieved. This is usually when the app is not bootstrapped on the html or body tag. Falling back to native promises which won\'t trigger an automatic digest when promises resolve.');
            return tryNativePromise();
        }
    }
    else {
        return tryNativePromise();
    }
}
exports.getPromise = getPromise;
function wrapPromise(pluginObj, methodName, args, opts) {
    if (opts === void 0) { opts = {}; }
    var pluginResult, rej;
    var p = getPromise(function (resolve, reject) {
        pluginResult = callCordovaPlugin(pluginObj, methodName, args, opts, resolve, reject);
        rej = reject;
    });
    // Angular throws an error on unhandled rejection, but in this case we have already printed
    // a warning that Cordova is undefined or the plugin is uninstalled, so there is no reason
    // to error
    if (pluginResult && pluginResult.error) {
        p.catch(function () { });
        rej(pluginResult.error);
    }
    return p;
}
function wrapOtherPromise(pluginObj, methodName, args, opts) {
    if (opts === void 0) { opts = {}; }
    return getPromise(function (resolve, reject) {
        var pluginResult = callCordovaPlugin(pluginObj, methodName, args, opts);
        if (pluginResult && pluginResult.error) {
            reject(pluginResult.error);
        }
        pluginResult.then(resolve).catch(reject);
    });
}
function wrapObservable(pluginObj, methodName, args, opts) {
    if (opts === void 0) { opts = {}; }
    return new Observable_1.Observable(function (observer) {
        var pluginResult = callCordovaPlugin(pluginObj, methodName, args, opts, observer.next.bind(observer), observer.error.bind(observer));
        if (pluginResult && pluginResult.error) {
            observer.error(pluginResult.error);
        }
        return function () {
            try {
                if (opts.clearFunction) {
                    if (opts.clearWithArgs) {
                        return callCordovaPlugin(pluginObj, opts.clearFunction, args, opts, observer.next.bind(observer), observer.error.bind(observer));
                    }
                    return util_1.get(window, pluginObj.pluginRef)[opts.clearFunction].call(pluginObj, pluginResult);
                }
            }
            catch (e) {
                console.warn('Unable to clear the previous observable watch for', pluginObj.pluginName, methodName);
                console.error(e);
            }
        };
    });
}
function callInstance(pluginObj, methodName, args, opts, resolve, reject) {
    if (opts === void 0) { opts = {}; }
    args = setIndex(args, opts, resolve, reject);
    return pluginObj._objectInstance[methodName].apply(pluginObj._objectInstance, args);
}
function wrapInstance(pluginObj, methodName, opts) {
    if (opts === void 0) { opts = {}; }
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        if (opts.sync) {
            // Sync doesn't wrap the plugin with a promise or observable, it returns the result as-is
            return callInstance(pluginObj, methodName, args, opts);
        }
        else if (opts.observable) {
            return new Observable_1.Observable(function (observer) {
                var pluginResult = callInstance(pluginObj, methodName, args, opts, observer.next.bind(observer), observer.error.bind(observer));
                return function () {
                    try {
                        if (opts.clearWithArgs) {
                            return pluginObj._objectInstance[opts.clearFunction].apply(pluginObj._objectInstance, args);
                        }
                        return pluginObj._objectInstance[opts.clearFunction].call(pluginObj, pluginResult);
                    }
                    catch (e) {
                        console.warn('Unable to clear the previous observable watch for', pluginObj.pluginName, methodName);
                        console.error(e);
                    }
                };
            });
        }
        else if (opts.otherPromise) {
            return getPromise(function (resolve, reject) {
                var result = callInstance(pluginObj, methodName, args, opts, resolve, reject);
                result.then(resolve, reject);
            });
        }
        else {
            return getPromise(function (resolve, reject) {
                callInstance(pluginObj, methodName, args, opts, resolve, reject);
            });
        }
    };
}
/**
 * Wrap the event with an observable
 * @param event
 * @returns {Observable}
 */
function wrapEventObservable(event) {
    return new Observable_1.Observable(function (observer) {
        window.addEventListener(event, observer.next.bind(observer), false);
        return function () { return window.removeEventListener(event, observer.next.bind(observer), false); };
    });
}
/**
 * Certain plugins expect the user to override methods in the plugin. For example,
 * window.cordova.plugins.backgroundMode.onactivate = function() { ... }.
 *
 * Unfortunately, this is brittle and would be better wrapped as an Observable. overrideFunction
 * does just this.
 */
function overrideFunction(pluginObj, methodName, args, opts) {
    if (opts === void 0) { opts = {}; }
    return new Observable_1.Observable(function (observer) {
        var pluginInstance = exports.getPlugin(pluginObj.pluginRef);
        if (!pluginInstance) {
            // Do this check in here in the case that the Web API for this plugin is available (for example, Geolocation).
            if (!window.cordova) {
                exports.cordovaWarn(pluginObj.pluginName, methodName);
                observer.error({
                    error: 'cordova_not_available'
                });
            }
            exports.pluginWarn(pluginObj, methodName);
            observer.error({
                error: 'plugin_not_installed'
            });
            return;
        }
        var method = pluginInstance[methodName];
        if (!method) {
            observer.error({
                error: 'no_such_method'
            });
            observer.complete();
            return;
        }
        pluginInstance[methodName] = observer.next.bind(observer);
    });
}
/**
 * @private
 * @param pluginObj
 * @param methodName
 * @param opts
 * @returns {function(...[any]): (undefined|*|Observable|*|*)}
 */
exports.wrap = function (pluginObj, methodName, opts) {
    if (opts === void 0) { opts = {}; }
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        if (opts.sync) {
            // Sync doesn't wrap the plugin with a promise or observable, it returns the result as-is
            return callCordovaPlugin(pluginObj, methodName, args, opts);
        }
        else if (opts.observable) {
            return wrapObservable(pluginObj, methodName, args, opts);
        }
        else if (opts.eventObservable && opts.event) {
            return wrapEventObservable(opts.event);
        }
        else if (opts.otherPromise) {
            return wrapOtherPromise(pluginObj, methodName, args, opts);
        }
        else {
            return wrapPromise(pluginObj, methodName, args, opts);
        }
    };
};
/**
 * @private
 *
 * Class decorator specifying Plugin metadata. Required for all plugins.
 *
 * @usage
 * ```typescript
 * @Plugin({
 *  pluginName: 'MyPlugin',
 *  plugin: 'cordova-plugin-myplugin',
 *  pluginRef: 'window.myplugin'
 *  })
 *  export class MyPlugin {
 *
 *    // Plugin wrappers, properties, and functions go here ...
 *
 *  }
 * ```
 */
function Plugin(config) {
    return function (cls) {
        // Add these fields to the class
        for (var k in config) {
            cls[k] = config[k];
        }
        cls['installed'] = function (printWarning) {
            return !!exports.getPlugin(config.pluginRef);
        };
        cls['getPlugin'] = function () {
            return exports.getPlugin(config.pluginRef);
        };
        cls['checkInstall'] = function () {
            var pluginInstance = exports.getPlugin(config.pluginRef);
            if (!pluginInstance) {
                exports.pluginWarn(cls);
                return false;
            }
            return true;
        };
        return cls;
    };
}
exports.Plugin = Plugin;
/**
 * @private
 *
 * Wrap a stub function in a call to a Cordova plugin, checking if both Cordova
 * and the required plugin are installed.
 */
function Cordova(opts) {
    if (opts === void 0) { opts = {}; }
    return function (target, methodName, descriptor) {
        return {
            value: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i - 0] = arguments[_i];
                }
                return exports.wrap(this, methodName, opts).apply(this, args);
            }
        };
    };
}
exports.Cordova = Cordova;
/**
 * @private
 *
 * Wrap an instance method
 */
function CordovaInstance(opts) {
    if (opts === void 0) { opts = {}; }
    return function (target, methodName) {
        return {
            value: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i - 0] = arguments[_i];
                }
                return wrapInstance(this, methodName, opts).apply(this, args);
            }
        };
    };
}
exports.CordovaInstance = CordovaInstance;
/**
 * @private
 *
 *
 * Before calling the original method, ensure Cordova and the plugin are installed.
 */
function CordovaProperty(target, key) {
    var exists = function () {
        var pluginInstance = exports.getPlugin(target.pluginRef);
        if (!pluginInstance) {
            exports.pluginWarn(target, key);
            return false;
        }
        return true;
    };
    Object.defineProperty(target, key, {
        get: function () {
            if (exists()) {
                return exports.getPlugin(target.pluginRef)[key];
            }
            else {
                return {};
            }
        },
        set: function (value) {
            if (exists()) {
                exports.getPlugin(target.pluginRef)[key] = value;
            }
        }
    });
}
exports.CordovaProperty = CordovaProperty;
/**
 * @private
 * @param target
 * @param key
 * @constructor
 */
function InstanceProperty(target, key) {
    Object.defineProperty(target, key, {
        get: function () {
            return this._objectInstance[key];
        },
        set: function (value) {
            this._objectInstance[key] = value;
        }
    });
}
exports.InstanceProperty = InstanceProperty;
/**
 * @private
 *
 * Wrap a stub function in a call to a Cordova plugin, checking if both Cordova
 * and the required plugin are installed.
 */
function CordovaFunctionOverride(opts) {
    if (opts === void 0) { opts = {}; }
    return function (target, methodName, descriptor) {
        return {
            value: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i - 0] = arguments[_i];
                }
                return overrideFunction(this, methodName, opts);
            }
        };
    };
}
exports.CordovaFunctionOverride = CordovaFunctionOverride;

},{"../util":112,"rxjs/Observable":113}],83:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name PowerManagement
 * @description
 * The PowerManagement plugin offers access to the devices power-management functionality.
 * It should be used for applications which keep running for a long time without any user interaction.
 *
 * @usage
 * ```
 * import {PowerManagement} from 'ionic-native';
 *
 * PowerManagement.acquire()
 *   .then(onSuccess)
 *   .catch(onError);
 *
 * ```
 */
var PowerManagement = (function () {
    function PowerManagement() {
    }
    /**
     * Acquire a wakelock by calling this.
     * @returns {Promise<any>}
     */
    PowerManagement.acquire = function () { return; };
    /**
     * This acquires a partial wakelock, allowing the screen to be dimmed.
     * @returns {Promise<any>}
     */
    PowerManagement.dim = function () { return; };
    /**
     * Release the wakelock. It's important to do this when you're finished with the wakelock, to avoid unnecessary battery drain.
     * @returns {Promise<any>}
     */
    PowerManagement.release = function () { return; };
    /**
     * By default, the plugin will automatically release a wakelock when your app is paused (e.g. when the screen is turned off, or the user switches to another app).
     * It will reacquire the wakelock upon app resume. If you would prefer to disable this behaviour, you can use this function.
     * @param set {boolean}
     * @returns {Promise<any>}
     */
    PowerManagement.setReleaseOnPause = function (set) { return; };
    __decorate([
        plugin_1.Cordova()
    ], PowerManagement, "acquire", null);
    __decorate([
        plugin_1.Cordova()
    ], PowerManagement, "dim", null);
    __decorate([
        plugin_1.Cordova()
    ], PowerManagement, "release", null);
    __decorate([
        plugin_1.Cordova()
    ], PowerManagement, "setReleaseOnPause", null);
    PowerManagement = __decorate([
        plugin_1.Plugin({
            pluginName: 'PowerManagement',
            plugin: 'cordova-plugin-powermanagement-orig',
            pluginRef: 'powerManagement',
            repo: 'https://github.com/Viras-/cordova-plugin-powermanagement'
        })
    ], PowerManagement);
    return PowerManagement;
}());
exports.PowerManagement = PowerManagement;

},{"./plugin":82}],84:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name Printer
 * @description Prints documents or HTML rendered content
 * @usage
 * ```typescript
 * import {Printer, PrintOptions} from 'ionic-native';
 *
 * Printer.isAvailable().then(onSuccess, onError);
 *
 * let options: PrintOptions = {
 *      name: 'MyDocument',
 *      printerId: 'printer007',
 *      duplex: true,
 *      landscape: true,
 *      grayscale: true
 *    };
 *
 * Printer.print(content, options).then(onSuccess, onError);
 * ```
 * @interfaces
 * PrintOptions
 */
var Printer = (function () {
    function Printer() {
    }
    /**
     * Checks whether to device is capable of printing.
     * @returns {Promise<boolean>}
     */
    Printer.isAvailable = function () { return; };
    /**
     * Sends content to the printer.
     * @param content {string | HTMLElement} The content to print. Can be a URL or an HTML string. If a HTML DOM Object is provided, its innerHtml property value will be used.
     * @param options {PrintOptions} optional. The options to pass to the printer
     * @returns {Promise<any>}
     */
    Printer.print = function (content, options) { return; };
    __decorate([
        plugin_1.Cordova()
    ], Printer, "isAvailable", null);
    __decorate([
        plugin_1.Cordova()
    ], Printer, "print", null);
    Printer = __decorate([
        plugin_1.Plugin({
            pluginName: 'Printer',
            plugin: 'de.appplant.cordova.plugin.printer',
            pluginRef: 'cordova.plugins.printer',
            repo: 'https://github.com/katzer/cordova-plugin-printer.git',
            platforms: ['Android', 'iOS']
        })
    ], Printer);
    return Printer;
}());
exports.Printer = Printer;

},{"./plugin":82}],85:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name Push
 * @description
 * Register and receive push notifications.
 *
 * Requires Cordova plugin: `phonegap-plugin-push`. For more info, please see the [Push plugin docs](https://github.com/phonegap/phonegap-plugin-push).
 *
 * For TypeScript users, see the [Push plugin docs about using TypeScript for custom notifications](https://github.com/phonegap/phonegap-plugin-push/blob/master/docs/TYPESCRIPT.md).
 *
 * @usage
 * ```typescript
 * import { Push } from 'ionic-native';
 * ```
 */
var Push = (function () {
    function Push() {
    }
    /**
     * Initialize the plugin on the native side.
     *
     * ```
     * var push = Push.init({
     *    android: {
     *        senderID: '12345679'
     *    },
     *    ios: {
     *        alert: 'true',
     *        badge: true,
     *        sound: 'false'
     *    },
     *    windows: {}
     * });
     * ```
     *
     * @param {PushOptions} options  The Push [options](https://github.com/phonegap/phonegap-plugin-push/blob/master/docs/API.md#parameters).
     * @returns {PushNotification}  Returns a new [PushNotification](https://github.com/phonegap/phonegap-plugin-push/blob/master/docs/API.md#pushonevent-callback) object.
     */
    Push.init = function (options) { return; };
    /**
     * Check whether the push notification permission has been granted.
     * @return {Promise<{isEnabled: boolean}>} Returns a Promise that resolves with an object with one property: isEnabled, a boolean that indicates if permission has been granted.
     */
    Push.hasPermission = function () { return; };
    __decorate([
        plugin_1.Cordova({
            sync: true
        })
    ], Push, "init", null);
    __decorate([
        plugin_1.Cordova()
    ], Push, "hasPermission", null);
    Push = __decorate([
        plugin_1.Plugin({
            pluginName: 'Push',
            plugin: 'phonegap-plugin-push',
            pluginRef: 'PushNotification',
            repo: 'https://github.com/phonegap/phonegap-plugin-push',
            install: 'ionic plugin add phonegap-plugin-push --variable SENDER_ID=XXXXXXXXX'
        })
    ], Push);
    return Push;
}());
exports.Push = Push;

},{"./plugin":82}],86:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name SafariViewController
 * @description
 * @usage
 * ```
 * import { SafariViewController } from 'ionic-native';
 *
 *
 * SafariViewController.isAvailable()
 *   .then(
 *     (available: boolean) => {
 *       if(available){
 *
 *         SafariViewController.show({
 *           url: 'http://ionic.io',
 *           hidden: false,
 *           animated: false,
 *           transition: 'curl',
 *           enterReaderModeIfAvailable: true,
 *           tintColor: '#ff0000'
 *         })
 *         .then(
 *           (result: any) => {
 *             if(result.event === 'opened') console.log('Opened');
 *             else if(result.event === 'loaded') console.log('Loaded');
 *             else if(result.event === 'closed') console.log('Closed');
 *           },
 *           (error: any) => console.error(error)
 *         );
 *
 *       } else {
 *         // use fallback browser, example InAppBrowser
 *       }
 *     }
 *   );
 * ```
 * @interfaces
 * SafariViewControllerOptions
 */
var SafariViewController = (function () {
    function SafariViewController() {
    }
    /**
     * Checks if SafariViewController is available
     * @returns {Promise<boolean>}
     */
    SafariViewController.isAvailable = function () { return; };
    /**
     * Shows Safari View Controller
     * @param options {SafariViewControllerOptions} optional
     * @returns {Promise<any>}
     */
    SafariViewController.show = function (options) { return; };
    /**
     * Hides Safari View Controller
     */
    SafariViewController.hide = function () { };
    /**
     * Tries to connect to the  Chrome's custom tabs service. you must call this method before calling any of the other methods listed below.
     * @returns {Promise<any>}
     */
    SafariViewController.connectToService = function () { return; };
    /**
     * Call this method whenever there's a chance the user will open an external url.
     * @returns {Promise<any>}
     */
    SafariViewController.warmUp = function () { return; };
    /**
     * For even better performance optimization, call this methods if there's more than a 50% chance the user will open a certain URL.
     * @param url{string}
     * @returns {Promise<any>}
     */
    SafariViewController.mayLaunchUrl = function (url) { return; };
    __decorate([
        plugin_1.Cordova()
    ], SafariViewController, "isAvailable", null);
    __decorate([
        plugin_1.Cordova()
    ], SafariViewController, "show", null);
    __decorate([
        plugin_1.Cordova()
    ], SafariViewController, "hide", null);
    __decorate([
        plugin_1.Cordova()
    ], SafariViewController, "connectToService", null);
    __decorate([
        plugin_1.Cordova()
    ], SafariViewController, "warmUp", null);
    __decorate([
        plugin_1.Cordova()
    ], SafariViewController, "mayLaunchUrl", null);
    SafariViewController = __decorate([
        plugin_1.Plugin({
            pluginName: 'SafariViewController',
            plugin: 'cordova-plugin-safariviewcontroller',
            pluginRef: 'SafariViewController',
            platforms: ['iOS', 'Android'],
            repo: 'https://github.com/EddyVerbruggen/cordova-plugin-safariviewcontroller'
        })
    ], SafariViewController);
    return SafariViewController;
}());
exports.SafariViewController = SafariViewController;

},{"./plugin":82}],87:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name Screen Orientation
 * @description
 * Cordova plugin to set/lock the screen orientation in a common way for iOS, Android, WP8 and Blackberry 10.
 * This plugin is based on an early version of Screen Orientation API so the api does not currently match the current spec.
 *
 * Requires Cordova plugin: `cordova-plugin-screen-orientation`. For more info, please see the [Screen Orientation plugin docs](https://github.com/apache/cordova-plugin-screen-orientation).
 *
 * @usage
 * ```typescript
 * import { ScreenOrientation } from 'ionic-native';
 *
 *
 * // set to either landscape
 * ScreenOrientation.lockOrientation('landscape');
 *
 * // allow user rotate
 * ScreenOrientation.unlockOrientation();
 * ```
 *
 * @advanced
 *
 * Accepted orientation values:
 *
 * | Value                         | Description                                                                  |
 * |-------------------------------|------------------------------------------------------------------------------|
 * | portrait-primary              | The orientation is in the primary portrait mode.                             |
 * | portrait-secondary            | The orientation is in the secondary portrait mode.                           |
 * | landscape-primary             | The orientation is in the primary landscape mode.                            |
 * | landscape-secondary           | The orientation is in the secondary landscape mode.                          |
 * | portrait                      | The orientation is either portrait-primary or portrait-secondary (sensor).   |
 * | landscape                     | The orientation is either landscape-primary or landscape-secondary (sensor). |
 *
 */
var ScreenOrientation = (function () {
    function ScreenOrientation() {
    }
    /**
     * Lock the orientation to the passed value.
     * See below for accepted values
     * @param orientation {string} The orientation which should be locked. Accepted values see table below.
     */
    ScreenOrientation.lockOrientation = function (orientation) { };
    /**
     * Unlock and allow all orientations.
     */
    ScreenOrientation.unlockOrientation = function () { };
    __decorate([
        plugin_1.Cordova({ sync: true })
    ], ScreenOrientation, "lockOrientation", null);
    __decorate([
        plugin_1.Cordova({ sync: true })
    ], ScreenOrientation, "unlockOrientation", null);
    __decorate([
        plugin_1.CordovaProperty
    ], ScreenOrientation, "orientation", void 0);
    ScreenOrientation = __decorate([
        plugin_1.Plugin({
            pluginName: 'ScreenOrientation',
            plugin: 'cordova-plugin-screen-orientation',
            pluginRef: 'window.screen',
            repo: 'https://github.com/apache/cordova-plugin-screen-orientation',
            platforms: ['Android', 'iOS', 'Windows Phone 8']
        })
    ], ScreenOrientation);
    return ScreenOrientation;
}());
exports.ScreenOrientation = ScreenOrientation;

},{"./plugin":82}],88:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name Screenshot
 * @description Captures a screen shot
 * @usage
 * ```typescript
 * import {Screenshot} from 'ionic-native';
 *
 * // Take a screenshot and save to file
 * Screenshot.save('jpg', 80, 'myscreenshot.jpg').then(onSuccess, onError);
 *
 * // Take a screenshot and get temporary file URI
 * Screenshot.URI(80).then(onSuccess, onError);
 * ```
 */
var Screenshot = (function () {
    function Screenshot() {
    }
    /**
     *  Takes screenshot and saves the image
     *
     * @param {string} format. Format can take the value of either 'jpg' or 'png'
     * On ios, only 'jpg' format is supported
     * @param {number} quality. Determines the quality of the screenshot.
     *        Default quality is set to 100.
     * @param {string} filename. Name of the file as stored on the storage
     * @returns {Promise<any>}
     */
    Screenshot.save = function (format, quality, filename) {
        return new Promise(function (resolve, reject) {
            navigator.screenshot.save(function (error, result) {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(result);
                }
            }, format, quality, filename);
        });
    };
    /**
     *  Takes screenshot and returns the image as an URI
     *
     * @param {number} quality. Determines the quality of the screenshot.
     *        Default quality is set to 100.
     * @returns {Promise<any>}
     */
    Screenshot.URI = function (quality) {
        return new Promise(function (resolve, reject) {
            navigator.screenshot.URI(function (error, result) {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(result);
                }
            }, quality);
        });
    };
    Screenshot = __decorate([
        plugin_1.Plugin({
            pluginName: 'Screenshot',
            plugin: 'https://github.com/gitawego/cordova-screenshot.git',
            pluginRef: 'navigator.screenshot',
            repo: 'https://github.com/gitawego/cordova-screenshot.git'
        })
    ], Screenshot);
    return Screenshot;
}());
exports.Screenshot = Screenshot;

},{"./plugin":82}],89:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name Secure Storage
 * @description
 * This plugin gets, sets and removes key,value pairs from a device's secure storage.
 *
 * Requires Cordova plugin: `cordova-plugin-secure-storage`. For more info, please see the [Cordova Secure Storage docs](https://github.com/Crypho/cordova-plugin-secure-storage).
 *
 * @usage
 *
 * ```typescript
 * import { SecureStorage } from 'ionic-native';
 *
 * let secureStorage: SecureStorage = new SecureStorage();
 * secureStorage.create('my_store_name')
 *  .then(
 *    () => console.log('Storage is ready!'),
 *    error => console.log(error)
 * );
 *
 * secureStorage.get('myitem')
 *  .then(
 *    data => console.log(data),
 *    error => console.log(error)
 * );
 *
 * secureStorage.set('myitem', 'myvalue')
 *  .then(
 *    data => console.log(data),
 *    error => console.log(error)
 * );
 *
 * secureStorage.remove('myitem')
 * .then(
 *    data => console.log(data),
 *    error => console.log(error)
 * );
 * ```
 */
var SecureStorage = (function () {
    function SecureStorage() {
    }
    /**
     * Creates a namespaced storage.
     * @param store {string}
     * @returns {Promise<any>}
     */
    SecureStorage.prototype.create = function (store) {
        var _this = this;
        return new Promise(function (res, rej) {
            _this._objectInstance = new cordova.plugins.SecureStorage(res, rej, store);
        });
    };
    /**
     * Gets a stored item
     * @param reference {string}
     * @returns {Promise<any>}
     */
    SecureStorage.prototype.get = function (reference) { return; };
    /**
     * Stores a value
     * @param reference {string}
     * @param value {string}
     * @returns {Promise<any>}
     */
    SecureStorage.prototype.set = function (reference, value) { return; };
    /**
     * Removes a single stored item
     * @param reference {string}
     * @returns {Promise<any>}
     */
    SecureStorage.prototype.remove = function (reference) { return; };
    __decorate([
        plugin_1.CordovaInstance({
            callbackOrder: 'reverse'
        })
    ], SecureStorage.prototype, "get", null);
    __decorate([
        plugin_1.CordovaInstance({
            callbackOrder: 'reverse'
        })
    ], SecureStorage.prototype, "set", null);
    __decorate([
        plugin_1.CordovaInstance({
            callbackOrder: 'reverse'
        })
    ], SecureStorage.prototype, "remove", null);
    SecureStorage = __decorate([
        plugin_1.Plugin({
            pluginName: 'SecureStorage',
            plugin: 'cordova-plugin-secure-storage',
            pluginRef: 'plugins.securestorage',
            repo: 'https://github.com/Crypho/cordova-plugin-secure-storage',
            platforms: ['Android', 'iOS', 'Windows Phone', 'Browser']
        })
    ], SecureStorage);
    return SecureStorage;
}());
exports.SecureStorage = SecureStorage;

},{"./plugin":82}],90:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name Shake
 * @description Handles shake gesture
 * @usage
 * ```typescript
 * import {Shake} from 'ionic-native';
 *
 * let watch = Shake.startWatch(60).subscribe(() => {
 *   // do something
 *   });
 *
 * watch.unsubscribe();
 * ```
 */
var Shake = (function () {
    function Shake() {
    }
    /**
     * Watch for shake gesture
     * @param sensitivity {number} Optional sensitivity parameter. Defaults to 40
     * @returns {Observable<any>}
     */
    Shake.startWatch = function (sensitivity) { return; };
    __decorate([
        plugin_1.Cordova({
            observable: true,
            clearFunction: 'stopWatch',
            successIndex: 0,
            errorIndex: 2
        })
    ], Shake, "startWatch", null);
    Shake = __decorate([
        plugin_1.Plugin({
            pluginName: 'Shake',
            plugin: 'cordova-plugin-shake',
            pluginRef: 'shake',
            repo: 'https://github.com/leecrossley/cordova-plugin-shake'
        })
    ], Shake);
    return Shake;
}());
exports.Shake = Shake;

},{"./plugin":82}],91:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name Sim
 * @description
 * Gets info from the Sim card like the carrier name, mcc, mnc and country code and other system dependent info.
 *
 * Requires Cordova plugin: `cordova-plugin-sim`. For more info, please see the [Cordova Sim docs](https://github.com/pbakondy/cordova-plugin-sim).
 *
 * @usage
 * ```typescript
 * import { Sim } from 'ionic-native';
 *
 *
 * Sim.getSimInfo().then(
 *   (info) => console.log('Sim info: ', info),
 *   (err) => console.log('Unable to get sim info: ', err)
 * );
 * ```
 */
var Sim = (function () {
    function Sim() {
    }
    /**
     * Returns info from the SIM card.
     * @returns {Promise<any>}
     */
    Sim.getSimInfo = function () { return; };
    __decorate([
        plugin_1.Cordova()
    ], Sim, "getSimInfo", null);
    Sim = __decorate([
        plugin_1.Plugin({
            pluginName: 'Sim',
            plugin: 'cordova-plugin-sim',
            pluginRef: 'plugins.sim',
            repo: 'https://github.com/pbakondy/cordova-plugin-sim',
            platforms: ['Android', 'iOS', 'Windows Phone']
        })
    ], Sim);
    return Sim;
}());
exports.Sim = Sim;

},{"./plugin":82}],92:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name SMS
 * @description
 *
 * Requires Cordova plugin: cordova-plugin-sms. For more info, please see the [SMS plugin docs](https://github.com/cordova-sms/cordova-sms-plugin).
 *
 * @usage
 * ```typescript
 * import { SMS } from 'ionic-native';
 *
 *
 * // Send a text message using default options
 * SMS.send('416123456', 'Hello world!');
 * ```
 * @interfaces
 * SmsOptions
 * SmsOptionsAndroid
 */
var SMS = (function () {
    function SMS() {
    }
    /**
     * Sends sms to a number
     * @param phoneNumber {string|Array<string>} Phone number
     * @param message {string} Message
     * @param options {SmsOptions} Options
     * @returns {Promise<any>} Resolves promise when the SMS has been sent
     */
    SMS.send = function (phoneNumber, message, options) { return; };
    /**
     * This function lets you know if the app has permission to send SMS
     * @return {Promise<boolean>} returns a promise that resolves with a boolean that indicates if we have permission
     */
    SMS.hasPermission = function () { return; };
    __decorate([
        plugin_1.Cordova({
            successIndex: 3,
            errorIndex: 4
        })
    ], SMS, "send", null);
    __decorate([
        plugin_1.Cordova({
            platforms: ['Android']
        })
    ], SMS, "hasPermission", null);
    SMS = __decorate([
        plugin_1.Plugin({
            pluginName: 'SMS',
            plugin: 'cordova-sms-plugin',
            pluginRef: 'sms',
            repo: 'https://github.com/cordova-sms/cordova-sms-plugin',
            platforms: ['Android', 'iOS', 'Windows Phone 8']
        })
    ], SMS);
    return SMS;
}());
exports.SMS = SMS;

},{"./plugin":82}],93:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name Social Sharing
 * @description
 * Share text, files, images, and links via social networks, sms, and email.
 * @usage
 * ```typescript
 * import { SocialSharing } from 'ionic-native';
 *
 * // Check if sharing via email is supported
 * SocialSharing.canShareViaEmail().then(() => {
 *   // Sharing via email is possible
 * }).catch(() => {
 *   // Sharing via email is not possible
 * });
 *
 * // Share via email
 * SocialSharing.shareViaEmail('Body', 'Subject', 'recipient@example.org').then(() => {
 *   // Success!
 * }).catch(() => {
 *   // Error!
 * });
 * ```
 */
var SocialSharing = (function () {
    function SocialSharing() {
    }
    /**
     * Shares using the share sheet
     * @param message {string} The message you would like to share.
     * @param subject {string} The subject
     * @param file {string|string[]} URL(s) to file(s) or image(s), local path(s) to file(s) or image(s), or base64 data of an image. Only the first file/image will be used on Windows Phone.
     * @param url {string} A URL to share
     * @returns {Promise<any>}
     */
    SocialSharing.share = function (message, subject, file, url) { return; };
    /**
     * Shares using the share sheet with additional options and returns a result object or an error message (requires plugin version 5.1.0+)
     * @param options {object} The options object with the message, subject, files, url and chooserTitle properties.
     * @returns {Promise<any>}
     */
    SocialSharing.shareWithOptions = function (options) { return; };
    /**
     * Checks if you can share via a specific app.
     * @param appName {string} App name or package name. Examples: instagram or com.apple.social.facebook
     * @param message {string}
     * @param subject {string}
     * @param image {string}
     * @param url {string}
     * @returns {Promise<any>}
     */
    SocialSharing.canShareVia = function (appName, message, subject, image, url) { return; };
    /**
     * Shares directly to Twitter
     * @param message {string}
     * @param image {string}
     * @param url {string}
     * @returns {Promise<any>}
     */
    SocialSharing.shareViaTwitter = function (message, image, url) { return; };
    /**
     * Shares directly to Facebook
     * @param message {string}
     * @param image {string}
     * @param url {string}
     * @returns {Promise<any>}
     */
    SocialSharing.shareViaFacebook = function (message, image, url) { return; };
    /**
     * Shares directly to Facebook with a paste message hint
     * @param message {string}
     * @param image {string}
     * @param url {string}
     * @param pasteMessageHint {string}
     * @returns {Promise<any>}
     */
    SocialSharing.shareViaFacebookWithPasteMessageHint = function (message, image, url, pasteMessageHint) { return; };
    /**
     * Shares directly to Instagram
     * @param message {string}
     * @param image {string}
     * @returns {Promise<any>}
     */
    SocialSharing.shareViaInstagram = function (message, image) { return; };
    /**
     * Shares directly to WhatsApp
     * @param message {string}
     * @param image {string}
     * @param url {string}
     * @returns {Promise<any>}
     */
    SocialSharing.shareViaWhatsApp = function (message, image, url) { return; };
    /**
     * Shares directly to a WhatsApp Contact
     * @param receiver {string} Pass phone number on Android, and Addressbook ID (abid) on iOS
     * @param message {string} Message to send
     * @param image {string} Image to send (does not work on iOS
     * @param url {string} Link to send
     * @returns {Promise<any>}
     */
    SocialSharing.shareViaWhatsAppToReceiver = function (receiver, message, image, url) { return; };
    /**
     * Share via SMS
     * @param messge {string} message to send
     * @param phoneNumber {string} Number or multiple numbers seperated by commas
     * @returns {Promise<any>}
     */
    SocialSharing.shareViaSMS = function (messge, phoneNumber) { return; };
    /**
     * Checks if you can share via email
     * @returns {Promise<any>}
     */
    SocialSharing.canShareViaEmail = function () { return; };
    /**
     * Share via Email
     * @param message {string}
     * @param subject {string}
     * @param to {string[]}
     * @param cc {string[]} Optional
     * @param bcc {string[]} Optional
     * @param files {string|string[]} Optional URL or local path to file(s) to attach
     * @returns {Promise<any>}
     */
    SocialSharing.shareViaEmail = function (message, subject, to, cc, bcc, files) { return; };
    /**
     * Share via AppName
     * @param appName {string} App name or package name. Examples: instagram or com.apple.social.facebook
     * @param message {string}
     * @param subject {string}
     * @param image {string}
     * @param url {string}
     * @returns {Promise<any>}
     */
    SocialSharing.shareVia = function (appName, message, subject, image, url) { return; };
    __decorate([
        plugin_1.Cordova()
    ], SocialSharing, "share", null);
    __decorate([
        plugin_1.Cordova({
            platforms: ['iOS', 'Android']
        })
    ], SocialSharing, "shareWithOptions", null);
    __decorate([
        plugin_1.Cordova({
            successIndex: 5,
            errorIndex: 6,
            platforms: ['iOS', 'Android']
        })
    ], SocialSharing, "canShareVia", null);
    __decorate([
        plugin_1.Cordova({
            successIndex: 3,
            errorIndex: 4,
            platforms: ['iOS', 'Android']
        })
    ], SocialSharing, "shareViaTwitter", null);
    __decorate([
        plugin_1.Cordova({
            successIndex: 3,
            errorIndex: 4,
            platforms: ['iOS', 'Android']
        })
    ], SocialSharing, "shareViaFacebook", null);
    __decorate([
        plugin_1.Cordova({
            successIndex: 4,
            errorIndex: 5,
            platforms: ['iOS', 'Android']
        })
    ], SocialSharing, "shareViaFacebookWithPasteMessageHint", null);
    __decorate([
        plugin_1.Cordova({
            platforms: ['iOS', 'Android']
        })
    ], SocialSharing, "shareViaInstagram", null);
    __decorate([
        plugin_1.Cordova({
            successIndex: 3,
            errorIndex: 4,
            platforms: ['iOS', 'Android']
        })
    ], SocialSharing, "shareViaWhatsApp", null);
    __decorate([
        plugin_1.Cordova({
            successIndex: 4,
            errorIndex: 5,
            platforms: ['iOS', 'Android']
        })
    ], SocialSharing, "shareViaWhatsAppToReceiver", null);
    __decorate([
        plugin_1.Cordova({
            platforms: ['iOS', 'Android']
        })
    ], SocialSharing, "shareViaSMS", null);
    __decorate([
        plugin_1.Cordova({
            platforms: ['iOS', 'Android']
        })
    ], SocialSharing, "canShareViaEmail", null);
    __decorate([
        plugin_1.Cordova({
            platforms: ['iOS', 'Android'],
            successIndex: 6,
            errorIndex: 7
        })
    ], SocialSharing, "shareViaEmail", null);
    __decorate([
        plugin_1.Cordova({
            successIndex: 5,
            errorIndex: 6,
            platforms: ['iOS', 'Android']
        })
    ], SocialSharing, "shareVia", null);
    SocialSharing = __decorate([
        plugin_1.Plugin({
            pluginName: 'SocialSharing',
            plugin: 'cordova-plugin-x-socialsharing',
            pluginRef: 'plugins.socialsharing',
            repo: 'https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin',
            platforms: ['iOS', 'Android', 'Windows Phone']
        })
    ], SocialSharing);
    return SocialSharing;
}());
exports.SocialSharing = SocialSharing;

},{"./plugin":82}],94:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name Spinner Dialog
 * @description
 * @usage
 * ```typescript
 * import { SpinnerDialog } from 'ionic-native';
 *
 *
 * SpinnerDialog.show();
 *
 * SpinnerDialog.hide();
 * ```
 * @interfaces
 * SpinnerDialogIOSOptions
 */
var SpinnerDialog = (function () {
    function SpinnerDialog() {
    }
    /**
     * Shows the spinner dialog
     * @param title {string} Spinner title (shows on Android only)
     * @param message {string} Spinner message
     * @param cancelCallback {boolean|function} Set to true to set spinner not cancelable. Or provide a function to call when the user cancels the spinner.
     * @param iOSOptions {object} Options for iOS only
     */
    SpinnerDialog.show = function (title, message, cancelCallback, iOSOptions) { };
    /**
     * Hides the spinner dialog if visible
     */
    SpinnerDialog.hide = function () { };
    __decorate([
        plugin_1.Cordova({
            sync: true
        })
    ], SpinnerDialog, "show", null);
    __decorate([
        plugin_1.Cordova({
            sync: true
        })
    ], SpinnerDialog, "hide", null);
    SpinnerDialog = __decorate([
        plugin_1.Plugin({
            pluginName: 'SpinnerDialog',
            plugin: 'cordova-plugin-spinner-dialog',
            pluginRef: 'window.plugins.spinnerDialog',
            repo: 'https://github.com/Paldom/SpinnerDialog',
            platforms: ['Android', 'iOS', 'Windows Phone 8']
        })
    ], SpinnerDialog);
    return SpinnerDialog;
}());
exports.SpinnerDialog = SpinnerDialog;

},{"./plugin":82}],95:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name Splashscreen
 * @description This plugin displays and hides a splash screen during application launch. The methods below allows showing and hiding the splashscreen after the app has loaded.
 * @usage
 * ```typescript
 * import { Splashscreen } from 'ionic-native';
 *
 *
 * Splashscreen.show();
 *
 * Splashscreen.hide();
 * ```
 */
var Splashscreen = (function () {
    function Splashscreen() {
    }
    /**
     * Shows the splashscreen
     */
    Splashscreen.show = function () { };
    /**
     * Hides the splashscreen
     */
    Splashscreen.hide = function () { };
    __decorate([
        plugin_1.Cordova({
            sync: true
        })
    ], Splashscreen, "show", null);
    __decorate([
        plugin_1.Cordova({
            sync: true
        })
    ], Splashscreen, "hide", null);
    Splashscreen = __decorate([
        plugin_1.Plugin({
            pluginName: 'Splashscreen',
            plugin: 'cordova-plugin-splashscreen',
            pluginRef: 'navigator.splashscreen',
            repo: 'https://github.com/apache/cordova-plugin-splashscreen'
        })
    ], Splashscreen);
    return Splashscreen;
}());
exports.Splashscreen = Splashscreen;

},{"./plugin":82}],96:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name SQLite
 *
 * @description
 * Access SQLite databases on the device.
 *
 * @usage
 *
 * ```typescript
 * import { SQLite } from 'ionic-native';
 *
 * // OPTION A: Use static constructor
 * SQLite.openDatabase({
 *   name: 'data.db',
 *   location: 'default'
 * })
 *   .then((db: SQLite) => {
 *
 *     db.executeSql('create table danceMoves(name VARCHAR(32))').then(() => {}).catch(() => {});
 *
 *   })
 *   .catch(error => console.error('Error opening database', error);
 *
 *
 * // OPTION B: Create a new instance of SQLite
 * let db = new SQLite();
 * db.openDatabase({
 *   name: 'data.db',
 *   location: 'default' // the location field is required
 * }).then(() => {
 *   db.executeSql('create table danceMoves(name VARCHAR(32))', {}).then(() => {
 *
 *   }, (err) => {
 *     console.error('Unable to execute sql: ', err);
 *   });
 * }, (err) => {
 *   console.error('Unable to open database: ', err);
 * });
 * ```
 *
 */
var SQLite = (function () {
    function SQLite() {
    }
    SQLite.openDatabase = function (config) {
        return new SQLite().openDatabase(config);
    };
    /**
     * Open or create a SQLite database file.
     *
     * See the plugin docs for an explanation of all options: https://github.com/litehelpers/Cordova-sqlite-storage#opening-a-database
     *
     * @param config the config for opening the database.
     */
    SQLite.prototype.openDatabase = function (config) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (typeof sqlitePlugin !== 'undefined') {
                sqlitePlugin.openDatabase(config, function (db) {
                    _this._objectInstance = db;
                    resolve(db);
                }, function (error) {
                    console.warn(error);
                    reject(error);
                });
            }
            else {
                plugin_1.pluginWarn({
                    pluginName: 'SQLite',
                    plugin: 'cordova-sqlite-storage'
                });
            }
        });
    };
    SQLite.prototype.addTransaction = function (transaction) { };
    /**
     * @param fn {any}
     * @returns {Promise<any>}
     */
    SQLite.prototype.transaction = function (fn) { return; };
    /**
     * @param fn {any}
     * @returns {Promise<any>}
     */
    SQLite.prototype.readTransaction = function (fn) { return; };
    SQLite.prototype.startNextTransaction = function () { };
    /**
     * @returns {Promise<any>}
     */
    SQLite.prototype.close = function () { return; };
    SQLite.prototype.start = function () { };
    /**
     * Execute SQL on the opened database. Note, you must call `openDatabase` first, and
     * ensure it resolved and successfully opened the database.
     */
    SQLite.prototype.executeSql = function (statement, params) { return; };
    /**
     * @param sql
     * @param values
     * @returns {Promise<any>}
     */
    SQLite.prototype.addStatement = function (sql, values) { return; };
    /**
     * @param sqlStatements {any}
     * @returns {Promise<any>}
     */
    SQLite.prototype.sqlBatch = function (sqlStatements) { return; };
    SQLite.prototype.abortallPendingTransactions = function () { };
    /**
     @param handler
     @param response
     */
    SQLite.prototype.handleStatementSuccess = function (handler, response) { };
    /**
     * @param handler
     * @param response
     */
    SQLite.prototype.handleStatementFailure = function (handler, response) { };
    SQLite.prototype.run = function () { };
    /**
     * @param txFailure
     */
    SQLite.prototype.abort = function (txFailure) { };
    SQLite.prototype.finish = function () { };
    /**
     * @param sqlerror
     */
    SQLite.prototype.abortFromQ = function (sqlerror) { };
    /**
     * @returns {Promise<any>}
     */
    SQLite.echoTest = function () { return; };
    /**
     * @param first
     * @returns {Promise<any>}
     */
    SQLite.deleteDatabase = function (first) { return; };
    __decorate([
        plugin_1.InstanceProperty
    ], SQLite.prototype, "databaseFeatures", void 0);
    __decorate([
        plugin_1.CordovaInstance({
            sync: true
        })
    ], SQLite.prototype, "addTransaction", null);
    __decorate([
        plugin_1.CordovaInstance({
            successIndex: 2,
            errorIndex: 1
        })
    ], SQLite.prototype, "transaction", null);
    __decorate([
        plugin_1.CordovaInstance()
    ], SQLite.prototype, "readTransaction", null);
    __decorate([
        plugin_1.CordovaInstance({
            sync: true
        })
    ], SQLite.prototype, "startNextTransaction", null);
    __decorate([
        plugin_1.CordovaInstance()
    ], SQLite.prototype, "close", null);
    __decorate([
        plugin_1.CordovaInstance({
            sync: true
        })
    ], SQLite.prototype, "start", null);
    __decorate([
        plugin_1.CordovaInstance()
    ], SQLite.prototype, "executeSql", null);
    __decorate([
        plugin_1.CordovaInstance()
    ], SQLite.prototype, "addStatement", null);
    __decorate([
        plugin_1.CordovaInstance()
    ], SQLite.prototype, "sqlBatch", null);
    __decorate([
        plugin_1.CordovaInstance({
            sync: true
        })
    ], SQLite.prototype, "abortallPendingTransactions", null);
    __decorate([
        plugin_1.CordovaInstance({
            sync: true
        })
    ], SQLite.prototype, "handleStatementSuccess", null);
    __decorate([
        plugin_1.CordovaInstance({
            sync: true
        })
    ], SQLite.prototype, "handleStatementFailure", null);
    __decorate([
        plugin_1.CordovaInstance({
            sync: true
        })
    ], SQLite.prototype, "run", null);
    __decorate([
        plugin_1.CordovaInstance({
            sync: true
        })
    ], SQLite.prototype, "abort", null);
    __decorate([
        plugin_1.CordovaInstance({
            sync: true
        })
    ], SQLite.prototype, "finish", null);
    __decorate([
        plugin_1.CordovaInstance({
            sync: true
        })
    ], SQLite.prototype, "abortFromQ", null);
    __decorate([
        plugin_1.Cordova()
    ], SQLite, "echoTest", null);
    __decorate([
        plugin_1.Cordova()
    ], SQLite, "deleteDatabase", null);
    SQLite = __decorate([
        plugin_1.Plugin({
            pluginName: 'SQLite',
            pluginRef: 'sqlitePlugin',
            plugin: 'cordova-sqlite-storage',
            repo: 'https://github.com/litehelpers/Cordova-sqlite-storage'
        })
    ], SQLite);
    return SQLite;
}());
exports.SQLite = SQLite;

},{"./plugin":82}],97:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name Status Bar
 * @description
 * Manage the appearance of the native status bar.
 *
 * Requires Cordova plugin: `cordova-plugin-statusbar`. For more info, please see the [StatusBar plugin docs](https://github.com/apache/cordova-plugin-statusbar).
 *
 * @usage
 * ```typescript
 * import { StatusBar } from 'ionic-native';
 *
 *
 * StatusBar.overlaysWebView(true); // let status bar overlay webview
 *
 * StatusBar.backgroundColorByHexString('#ffffff'); // set status bar to white
 * ```
 *
 */
var StatusBar = (function () {
    function StatusBar() {
    }
    /**
     * Set whether the status bar overlays the main app view. The default
     * is true.
     *
     * @param {boolean} doesOverlay  Whether the status bar overlays the main app view.
     */
    StatusBar.overlaysWebView = function (doesOverlay) { };
    ;
    /**
     * Use the default statusbar (dark text, for light backgrounds).
     */
    StatusBar.styleDefault = function () { };
    ;
    /**
     * Use the lightContent statusbar (light text, for dark backgrounds).
     */
    StatusBar.styleLightContent = function () { };
    ;
    /**
     * Use the blackTranslucent statusbar (light text, for dark backgrounds).
     */
    StatusBar.styleBlackTranslucent = function () { };
    ;
    /**
     * Use the blackOpaque statusbar (light text, for dark backgrounds).
     */
    StatusBar.styleBlackOpaque = function () { };
    ;
    /**
     * Set the status bar to a specific named color. Valid options:
     * black, darkGray, lightGray, white, gray, red, green, blue, cyan, yellow, magenta, orange, purple, brown.
     *
     * iOS note: you must call StatusBar.overlaysWebView(false) to enable color changing.
     *
     * @param {string} colorName  The name of the color (from above)
     */
    StatusBar.backgroundColorByName = function (colorName) { };
    ;
    /**
     * Set the status bar to a specific hex color (CSS shorthand supported!).
     *
     * iOS note: you must call StatusBar.overlaysWebView(false) to enable color changing.
     *
     * @param {string} hexString  The hex value of the color.
     */
    StatusBar.backgroundColorByHexString = function (hexString) { };
    ;
    /**
     * Hide the StatusBar
     */
    StatusBar.hide = function () { };
    ;
    /**
    * Show the StatusBar
    */
    StatusBar.show = function () { };
    ;
    __decorate([
        plugin_1.Cordova({
            sync: true
        })
    ], StatusBar, "overlaysWebView", null);
    __decorate([
        plugin_1.Cordova({
            sync: true
        })
    ], StatusBar, "styleDefault", null);
    __decorate([
        plugin_1.Cordova({
            sync: true
        })
    ], StatusBar, "styleLightContent", null);
    __decorate([
        plugin_1.Cordova({
            sync: true
        })
    ], StatusBar, "styleBlackTranslucent", null);
    __decorate([
        plugin_1.Cordova({
            sync: true
        })
    ], StatusBar, "styleBlackOpaque", null);
    __decorate([
        plugin_1.Cordova({
            sync: true
        })
    ], StatusBar, "backgroundColorByName", null);
    __decorate([
        plugin_1.Cordova({
            sync: true
        })
    ], StatusBar, "backgroundColorByHexString", null);
    __decorate([
        plugin_1.Cordova({
            sync: true
        })
    ], StatusBar, "hide", null);
    __decorate([
        plugin_1.Cordova({
            sync: true
        })
    ], StatusBar, "show", null);
    __decorate([
        plugin_1.CordovaProperty
    ], StatusBar, "isVisible", void 0);
    StatusBar = __decorate([
        plugin_1.Plugin({
            pluginName: 'StatusBar',
            plugin: 'cordova-plugin-statusbar',
            pluginRef: 'StatusBar',
            repo: 'https://github.com/apache/cordova-plugin-statusbar',
            platforms: ['iOS', 'Android', 'Windows Phone 8', 'Windows 8', 'Windows 10']
        })
    ], StatusBar);
    return StatusBar;
}());
exports.StatusBar = StatusBar;

},{"./plugin":82}],98:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name Stepcounter
 * @description
 * Cordova plugin for using device's stepcounter on Android (API > 19)
 *
 * Use to
 * - start and stop stepcounter service
 * - read device's stepcounter data
 *
 * @usage
 * ```
 * import { Stepcounter } from 'ionic-native';
 *
 * let startingOffset = 0;
 * Stepcounter.start(startingOffset).then(onSuccess => console.log('stepcounter-start success', onSuccess), onFailure => console.log('stepcounter-start error', onFailure));
 *
 * Stepcounter.getHistory().then(historyObj => console.log('stepcounter-history success', historyObj), onFailure => console.log('stepcounter-history error', onFailure));
 *
 * ```
 */
var Stepcounter = (function () {
    function Stepcounter() {
    }
    /**
     * Start the step counter
     *
     * @param startingOffset {number} will be added to the total steps counted in this session
     * @returns {Promise<any | number>} Returns a Promise that resolves on success or rejects on failure
     */
    Stepcounter.start = function (startingOffset) { return; };
    /**
     * Stop the step counter
     * @returns {Promise<any | number>} Returns a Promise that resolves on success with the amount of steps since the start command has been called, or rejects on failure
     */
    Stepcounter.stop = function () { return; };
    /**
     * Get the amount of steps for today (or -1 if it no data given)
     * @returns {Promise<any | number>} Returns a Promise that resolves on success with the amount of steps today, or rejects on failure
     */
    Stepcounter.getTodayStepCount = function () { return; };
    /**
     * Get the amount of steps since the start command has been called
     * @returns {Promise<any | number>} Returns a Promise that resolves on success with the amount of steps since the start command has been called, or rejects on failure
     */
    Stepcounter.getStepCount = function () { return; };
    /**
     * Returns true/false if Android device is running >API level 19 && has the step counter API available
     * @returns {Promise<any | boolean>} Returns a Promise that resolves on success, or rejects on failure
     */
    Stepcounter.deviceCanCountSteps = function () { return; };
    /**
     * Get the step history (JavaScript object)
     * @returns {Promise<any>} Returns a Promise that resolves on success, or rejects on failure
     */
    Stepcounter.getHistory = function () { return; };
    __decorate([
        plugin_1.Cordova()
    ], Stepcounter, "start", null);
    __decorate([
        plugin_1.Cordova()
    ], Stepcounter, "stop", null);
    __decorate([
        plugin_1.Cordova()
    ], Stepcounter, "getTodayStepCount", null);
    __decorate([
        plugin_1.Cordova()
    ], Stepcounter, "getStepCount", null);
    __decorate([
        plugin_1.Cordova()
    ], Stepcounter, "deviceCanCountSteps", null);
    __decorate([
        plugin_1.Cordova()
    ], Stepcounter, "getHistory", null);
    Stepcounter = __decorate([
        plugin_1.Plugin({
            pluginName: 'Stepcounter',
            plugin: 'https://github.com/texh/cordova-plugin-stepcounter',
            pluginRef: 'stepcounter',
            repo: 'https://github.com/texh/cordova-plugin-stepcounter',
            platforms: ['Android']
        })
    ], Stepcounter);
    return Stepcounter;
}());
exports.Stepcounter = Stepcounter;

},{"./plugin":82}],99:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name StreamingMedia
 * @description
 * This plugin allows you to stream audio and video in a fullscreen, native player on iOS and Android.
 *
 * @usage
 * ```
 * import {StreamingMedia, StreamingVideoOptions} from 'ionic-native';
 *
 * let options: StreamingVideoOptions = {
 *   successCallback: () => { console.log('Video played') },
 *   errorCallback: (e) => { console.log('Error streaming') },
 *   orientation: 'landscape'
 * };
 *
 * StreamingMedia.('https://path/to/video/stream', options);
 *
 * ```
 * @interfaces
 * StreamingVideoOptions
 * StreamingAudioOptions
 */
var StreamingMedia = (function () {
    function StreamingMedia() {
    }
    /**
     * Streams a video
     * @param videoUrl {string} The URL of the video
     * @param options {StreamingVideoOptions} Options
     */
    StreamingMedia.playVideo = function (videoUrl, options) { };
    /**
     * Streams an audio
     * @param audioUrl {string} The URL of the audio stream
     * @param options {StreamingAudioOptions} Options
     */
    StreamingMedia.playAudio = function (audioUrl, options) { };
    /**
     * Stops streaming audio
     */
    StreamingMedia.stopAudio = function () { };
    /**
     * Pauses streaming audio
     */
    StreamingMedia.pauseAudio = function () { };
    /**
     * Resumes streaming audio
     */
    StreamingMedia.resumeAudio = function () { };
    __decorate([
        plugin_1.Cordova({ sync: true })
    ], StreamingMedia, "playVideo", null);
    __decorate([
        plugin_1.Cordova({ sync: true })
    ], StreamingMedia, "playAudio", null);
    __decorate([
        plugin_1.Cordova({ sync: true })
    ], StreamingMedia, "stopAudio", null);
    __decorate([
        plugin_1.Cordova({ sync: true, platforms: ['iOS'] })
    ], StreamingMedia, "pauseAudio", null);
    __decorate([
        plugin_1.Cordova({ sync: true, platforms: ['iOS'] })
    ], StreamingMedia, "resumeAudio", null);
    StreamingMedia = __decorate([
        plugin_1.Plugin({
            pluginName: 'StreamingMedia',
            plugin: 'cordova-plugin-streaming-media',
            pluginRef: 'plugins.streamingMedia',
            repo: 'https://github.com/nchutchind/cordova-plugin-streaming-media',
            platforms: ['Android', 'iOS']
        })
    ], StreamingMedia);
    return StreamingMedia;
}());
exports.StreamingMedia = StreamingMedia;

},{"./plugin":82}],100:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name TextToSpeech
 * @description
 * Text to Speech plugin
 *
 * @usage
 * ```
 * import {TextToSpeech} from 'ionic-native';
 *
 * TextToSpeech.speak('Hello World')
 *   .then(() => console.log('Success'))
 *   .catch((reason: any) => console.log(reason));
 *
 * ```
 * @interfaces
 * TTSOptions
 */
var TextToSpeech = (function () {
    function TextToSpeech() {
    }
    /**
     * This function speaks
     * @param options {string | TTSOptions} Text to speak or TTSOptions
     * @return {Promise<any>} Returns a promise that resolves when the speaking finishes
     */
    TextToSpeech.speak = function (options) {
        return;
    };
    __decorate([
        plugin_1.Cordova({
            successIndex: 1,
            errorIndex: 2
        })
    ], TextToSpeech, "speak", null);
    TextToSpeech = __decorate([
        plugin_1.Plugin({
            pluginName: 'TextToSpeech',
            plugin: 'cordova-plugin-tts',
            pluginRef: 'TTS',
            repo: 'https://github.com/vilic/cordova-plugin-tts'
        })
    ], TextToSpeech);
    return TextToSpeech;
}());
exports.TextToSpeech = TextToSpeech;

},{"./plugin":82}],101:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
var Observable_1 = require('rxjs/Observable');
/**
 * @name ThemeableBrowser
 * @description
 * In-app browser that allows styling.
 *
 * @usage
 * ```
 * import { ThemeableBrowser } from 'ionic-native';
 *
 * // can add options from the original InAppBrowser in a JavaScript object form (not string)
 * // This options object also takes additional parameters introduced by the ThemeableBrowser plugin
 * // This example only shows the additional parameters for ThemeableBrowser
 * // Note that that `image` and `imagePressed` values refer to resources that are stored in your app
 * let options = {
 *      statusbar: {
 *          color: '#ffffffff'
 *      },
 *      toolbar: {
 *          height: 44,
 *          color: '#f0f0f0ff'
 *      },
 *      title: {
 *          color: '#003264ff',
 *          showPageTitle: true
 *      },
 *      backButton: {
 *          image: 'back',
 *          imagePressed: 'back_pressed',
 *          align: 'left',
 *          event: 'backPressed'
 *      },
 *      forwardButton: {
 *          image: 'forward',
 *          imagePressed: 'forward_pressed',
 *          align: 'left',
 *          event: 'forwardPressed'
 *      },
 *      closeButton: {
 *          image: 'close',
 *          imagePressed: 'close_pressed',
 *          align: 'left',
 *          event: 'closePressed'
 *      },
 *      customButtons: [
 *          {
 *              image: 'share',
 *              imagePressed: 'share_pressed',
 *              align: 'right',
 *              event: 'sharePressed'
 *          }
 *      ],
 *      menu: {
 *          image: 'menu',
 *          imagePressed: 'menu_pressed',
 *          title: 'Test',
 *          cancel: 'Cancel',
 *          align: 'right',
 *          items: [
 *              {
 *                  event: 'helloPressed',
 *                  label: 'Hello World!'
 *              },
 *              {
 *                  event: 'testPressed',
 *                  label: 'Test!'
 *              }
 *          ]
 *      },
 *      backButtonCanClose: true
 * };
 *
 * let browser = new ThemeableBrowser('https://ionic.io', '_blank', options);
 *
 * ```
 * We suggest that you refer to the plugin's repository for additional information on usage that may not be covered here.
 * @interfaces
 * ThemeableBrowserButton
 * ThemeableBrowserOptions
 */
var ThemeableBrowser = (function () {
    function ThemeableBrowser(url, target, styleOptions) {
        try {
            this._objectInstance = cordova.ThemeableBrowser.open(url, target, styleOptions);
        }
        catch (e) {
            window.open(url);
            console.warn('Native: ThemeableBrowser is not installed or you are running on a browser. Falling back to window.open, all instance methods will NOT work.');
        }
    }
    /**
     * Displays an browser window that was opened hidden. Calling this has no effect
     * if the browser was already visible.
     */
    ThemeableBrowser.prototype.show = function () { };
    /**
     * Closes the browser window.
     */
    ThemeableBrowser.prototype.close = function () { };
    /**
     * Reloads the current page
     */
    ThemeableBrowser.prototype.reload = function () { };
    /**
     * Injects JavaScript code into the browser window.
     * @param script    Details of the script to run, specifying either a file or code key.
     * @returns {Promise<any>}
     */
    ThemeableBrowser.prototype.executeScript = function (script) { return; };
    /**
     * Injects CSS into the browser window.
     * @param css       Details of the script to run, specifying either a file or code key.
     * @returns {Promise<any>}
     */
    ThemeableBrowser.prototype.insertCss = function (css) { return; };
    /**
     * A method that allows you to listen to events happening in the browser.
     * Available events are: `ThemeableBrowserError`, `ThemeableBrowserWarning`, `critical`, `loadfail`, `unexpected`, `undefined`
     * @param event Event name
     * @returns {Observable<InAppBrowserEvent>} Returns back an observable that will listen to the event on subscribe, and will stop listening to the event on unsubscribe.
     */
    ThemeableBrowser.prototype.on = function (event) {
        var _this = this;
        return new Observable_1.Observable(function (observer) {
            _this._objectInstance.addEventListener(event, observer.next.bind(observer));
            return function () { return _this._objectInstance.removeEventListener(event, observer.next.bind(observer)); };
        });
    };
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], ThemeableBrowser.prototype, "show", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], ThemeableBrowser.prototype, "close", null);
    __decorate([
        plugin_1.CordovaInstance({ sync: true })
    ], ThemeableBrowser.prototype, "reload", null);
    __decorate([
        plugin_1.CordovaInstance()
    ], ThemeableBrowser.prototype, "executeScript", null);
    __decorate([
        plugin_1.CordovaInstance()
    ], ThemeableBrowser.prototype, "insertCss", null);
    ThemeableBrowser = __decorate([
        plugin_1.Plugin({
            pluginName: 'ThemeableBrowser',
            plugin: 'cordova-plugin-themeablebrowser',
            pluginRef: 'cordova.ThemeableBrowser',
            repo: 'https://github.com/initialxy/cordova-plugin-themeablebrowser'
        })
    ], ThemeableBrowser);
    return ThemeableBrowser;
}());
exports.ThemeableBrowser = ThemeableBrowser;

},{"./plugin":82,"rxjs/Observable":113}],102:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name Toast
 * @description
 * This plugin allows you to show a native Toast (a little text popup) on iOS, Android and WP8. It's great for showing a non intrusive native notification which is guaranteed always in the viewport of the browser.
 *
 * Requires Cordova plugin: `cordova-plugin-x-toast`. For more info, please see the [Toast plugin docs](https://github.com/EddyVerbruggen/Toast-PhoneGap-Plugin).
 *
 * @usage
 * ```typescript
 * import { Toast } from 'ionic-native';
 *
 *
 * Toast.show("I'm a toast", '5000', 'center').subscribe(
 *   toast => {
 *     console.log(toast);
 *   }
 * );
 * ```
 * @interfaces
 * ToastOptions
 */
var Toast = (function () {
    function Toast() {
    }
    /**
     * Show a native toast for the given duration at the specified position.
     *
     * @param {string} message  The message to display.
     * @param {string} duration  Duration to show the toast, either 'short', 'long' or any number of milliseconds: '1500'.
     * @param {string} position  Where to position the toast, either 'top', 'center', or 'bottom'.
     * @returns {Observable<any>}  Returns an Observable that notifies first on success and then when tapped, rejects on error.
     */
    Toast.show = function (message, duration, position) { return; };
    /**
     * Manually hide any currently visible toast.
     * @returns {Promise<any>} Returns a Promise that resolves on success.
     */
    Toast.hide = function () { return; };
    /**
     * Show a native toast with the given options.
     *
     * @param {Object} options  Options for showing a toast. Available options:
     *   message  The message to display.
     *   duration  Duration to show the toast, either 'short', 'long' or any number of milliseconds: '1500'.
     *   position  Where to position the toast, either 'top', 'center', or 'bottom'.
     *   addPixelsY  Offset in pixels to move the toast up or down from its specified position.
     *
     * @returns {Observable<any>}  Returns an Observable that notifies first on success and then when tapped, rejects on error.
     */
    Toast.showWithOptions = function (options) { return; };
    /**
     * Shorthand for `show(message, 'short', 'top')`.
     * @param message {string}
     * @returns {Observable<any>}  Returns an Observable that notifies first on success and then when tapped, rejects on error.
     */
    Toast.showShortTop = function (message) { return; };
    /**
     * Shorthand for `show(message, 'short', 'center')`.
     * @param message {string}
     * @returns {Observable<any>}  Returns an Observable that notifies first on success and then when tapped, rejects on error.
     */
    Toast.showShortCenter = function (message) { return; };
    /**
     * Shorthand for `show(message, 'short', 'bottom')`.
     * @param message {string}
     * @returns {Observable<any>}  Returns an Observable that notifies first on success and then when tapped, rejects on error.
     */
    Toast.showShortBottom = function (message) { return; };
    /**
     * Shorthand for `show(message, 'long', 'top')`.
     * @param message {string}
     * @returns {Observable<any>}  Returns an Observable that notifies first on success and then when tapped, rejects on error.
     */
    Toast.showLongTop = function (message) { return; };
    /**
     * Shorthand for `show(message, 'long', 'center')`.
     * @param message {string}
     * @returns {Observable<any>}  Returns an Observable that notifies first on success and then when tapped, rejects on error.
     */
    Toast.showLongCenter = function (message) { return; };
    /**
     * Shorthand for `show(message, 'long', 'bottom')`.
     * @param message {string}
     * @returns {Observable<any>}  Returns an Observable that notifies first on success and then when tapped, rejects on error.
     */
    Toast.showLongBottom = function (message) { return; };
    __decorate([
        plugin_1.Cordova({
            observable: true,
            clearFunction: 'hide'
        })
    ], Toast, "show", null);
    __decorate([
        plugin_1.Cordova()
    ], Toast, "hide", null);
    __decorate([
        plugin_1.Cordova({
            observable: true,
            clearFunction: 'hide'
        })
    ], Toast, "showWithOptions", null);
    __decorate([
        plugin_1.Cordova({
            observable: true,
            clearFunction: 'hide'
        })
    ], Toast, "showShortTop", null);
    __decorate([
        plugin_1.Cordova({
            observable: true,
            clearFunction: 'hide'
        })
    ], Toast, "showShortCenter", null);
    __decorate([
        plugin_1.Cordova({
            observable: true,
            clearFunction: 'hide'
        })
    ], Toast, "showShortBottom", null);
    __decorate([
        plugin_1.Cordova({
            observable: true,
            clearFunction: 'hide'
        })
    ], Toast, "showLongTop", null);
    __decorate([
        plugin_1.Cordova({
            observable: true,
            clearFunction: 'hide'
        })
    ], Toast, "showLongCenter", null);
    __decorate([
        plugin_1.Cordova({
            observable: true,
            clearFunction: 'hide'
        })
    ], Toast, "showLongBottom", null);
    Toast = __decorate([
        plugin_1.Plugin({
            pluginName: 'Toast',
            plugin: 'cordova-plugin-x-toast',
            pluginRef: 'plugins.toast',
            repo: 'https://github.com/EddyVerbruggen/Toast-PhoneGap-Plugin',
            platforms: ['Android', 'iOS', 'Windows Phone 8']
        })
    ], Toast);
    return Toast;
}());
exports.Toast = Toast;

},{"./plugin":82}],103:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name TouchID
 * @description
 * Scan the fingerprint of a user with the TouchID sensor.
 *
 * Requires Cordova plugin: `cordova-plugin-touch-id`. For more info, please see the [TouchID plugin docs](https://github.com/EddyVerbruggen/cordova-plugin-touch-id).
 *
 * @usage
 * ### Import Touch ID Plugin into Project
 * ```typescript
 * import { TouchID } from 'ionic-native';
 * ```
 * ### Check for Touch ID Availability
 * ```typescript
 * TouchID.isAvailable()
 *   .then(
 *     res => console.log('TouchID is available!'),
 *     err => console.error('TouchID is not available', err)
 *   );
 * ```
 * ### Invoke Touch ID w/ Custom Message
 *
 * ```typescript
 * TouchID.verifyFingerprint('Scan your fingerprint please')
 *   .then(
 *     res => console.log('Ok', res),
 *     err => console.error('Error', err)
 *   );
 * ```
 *
 * ### Error Codes
 *
 * The plugin will reject for various reasons. Your app will most likely need to respond to the cases differently.
 *
 * Here is a list of some of the error codes:
 *
 *  -  `-1` - Fingerprint scan failed more than 3 times
 *  -  `-2` or `-128` - User tapped the 'Cancel' button
 *  -  `-3` - User tapped the 'Enter Passcode' or 'Enter Password' button
 *  -  `-4` - The scan was cancelled by the system (Home button for example)
 *  -  `-6` - TouchID is not Available
 *  -  `-8` - TouchID is locked out from too many tries
 */
var TouchID = (function () {
    function TouchID() {
    }
    /**
     * Checks Whether TouchID is available or not.
     *
     * @returns {Promise<any>} Returns a Promise that resolves if yes, rejects if no.
     */
    TouchID.isAvailable = function () { return; };
    /**
     * Show TouchID dialog and wait for a fingerprint scan. If user taps 'Enter Password' button, brings up standard system passcode screen.
     *
     * @param {string} message  The message to display
     * @returns {Promise<any>} Returns a Promise the resolves if the fingerprint scan was successful, rejects with an error code (see above).
     */
    TouchID.verifyFingerprint = function (message) { return; };
    /**
     * Show TouchID dialog and wait for a fingerprint scan. If user taps 'Enter Password' button, rejects with code '-3' (see above).
     *
     * @param {string} message  The message to display
     * @returns {Promise<any>} Returns a Promise the resolves if the fingerprint scan was successful, rejects with an error code (see above).
     */
    TouchID.verifyFingerprintWithCustomPasswordFallback = function (message) { return; };
    /**
     * Show TouchID dialog with custom 'Enter Password' message and wait for a fingerprint scan. If user taps 'Enter Password' button, rejects with code '-3' (see above).
     *
     * @param {string} message  The message to display
     * @param {string} enterPasswordLabel  Custom text for the 'Enter Password' button
     * @returns {Promise<any>} Returns a Promise the resolves if the fingerprint scan was successful, rejects with an error code (see above).
     */
    TouchID.verifyFingerprintWithCustomPasswordFallbackAndEnterPasswordLabel = function (message, enterPasswordLabel) { return; };
    __decorate([
        plugin_1.Cordova()
    ], TouchID, "isAvailable", null);
    __decorate([
        plugin_1.Cordova()
    ], TouchID, "verifyFingerprint", null);
    __decorate([
        plugin_1.Cordova()
    ], TouchID, "verifyFingerprintWithCustomPasswordFallback", null);
    __decorate([
        plugin_1.Cordova()
    ], TouchID, "verifyFingerprintWithCustomPasswordFallbackAndEnterPasswordLabel", null);
    TouchID = __decorate([
        plugin_1.Plugin({
            pluginName: 'TouchID',
            plugin: 'cordova-plugin-touch-id',
            pluginRef: 'plugins.touchid',
            repo: 'https://github.com/EddyVerbruggen/cordova-plugin-touch-id',
            platforms: ['iOS']
        })
    ], TouchID);
    return TouchID;
}());
exports.TouchID = TouchID;

},{"./plugin":82}],104:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name Twitter Connect
 * @description
 * Plugin to use Twitter Single Sign On
 * Uses Twitter's Fabric SDK
 * ```typescript
 * import {TwitterConnect} from 'ionic-native';
 *
 * function onSuccess(response) {
 *   console.log(response);
 *
 *   // Will console log something like:
 *   // {
 *   //   userName: 'myuser',
 *   //   userId: '12358102',
 *   //   secret: 'tokenSecret'
 *   //   token: 'accessTokenHere'
 *   // }
 * }
 *
 * TwitterConnect.login().then(onSuccess, onError);
 *
 * TwitterConnect.logout().then(onLogoutSuccess, onLogoutError);
 * ```
 * @interfaces
 * TwitterConnectResponse
 */
var TwitterConnect = (function () {
    function TwitterConnect() {
    }
    /**
     * Logs in
     * @returns {Promise<TwitterConnectResponse>} returns a promise that resolves if logged in and rejects if failed to login
     */
    TwitterConnect.login = function () { return; };
    /**
     * Logs out
     * @returns {Promise<any>} returns a promise that resolves if logged out and rejects if failed to logout
     */
    TwitterConnect.logout = function () { return; };
    /**
     * Returns user's profile information
     * @returns {Promise<any>} returns a promise that resolves if user profile is successfully retrieved and rejects if request fails
     */
    TwitterConnect.showUser = function () { return; };
    __decorate([
        plugin_1.Cordova()
    ], TwitterConnect, "login", null);
    __decorate([
        plugin_1.Cordova()
    ], TwitterConnect, "logout", null);
    __decorate([
        plugin_1.Cordova()
    ], TwitterConnect, "showUser", null);
    TwitterConnect = __decorate([
        plugin_1.Plugin({
            pluginName: 'TwitterConnect',
            plugin: 'twitter-connect-plugin',
            pluginRef: 'TwitterConnect',
            repo: 'https://github.com/ManifestWebDesign/twitter-connect-plugin',
            install: 'ionic plugin add twitter-connect-plugin --variable FABRIC_KEY=fabric_API_key'
        })
    ], TwitterConnect);
    return TwitterConnect;
}());
exports.TwitterConnect = TwitterConnect;

},{"./plugin":82}],105:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name Vibration
 * @description Vibrates the device
 * @usage
 * ```typescript
 * import { Vibration } from 'ionic-native';
 *
 *
 * // Vibrate the device for a second
 * // Duration is ignored on iOS.
 * Vibration.vibrate(1000);
 *
 * // Vibrate 2 seconds
 * // Pause for 1 second
 * // Vibrate for 2 seconds
 * // Patterns work on Android and Windows only
 * Vibration.vibrate([2000,1000,2000]);
 *
 * // Stop any current vibrations immediately
 * // Works on Android and Windows only
 * Vibration.vibrate(0);
 * ```
 */
var Vibration = (function () {
    function Vibration() {
    }
    /**
     * Vibrates the device for given amount of time.
     * @param time {number|Array<number>} Milliseconds to vibrate the device. If passed an array of numbers, it will define a vibration pattern. Pass 0 to stop any vibration immediately.
     */
    Vibration.vibrate = function (time) { };
    __decorate([
        plugin_1.Cordova({
            sync: true
        })
    ], Vibration, "vibrate", null);
    Vibration = __decorate([
        plugin_1.Plugin({
            pluginName: 'Vibration',
            plugin: 'cordova-plugin-vibration',
            pluginRef: 'navigator',
            repo: 'https://github.com/apache/cordova-plugin-vibration',
            platforms: ['Android', 'iOS', 'Windows 8.1 Phone', 'Windows 8.1', 'Windows 10']
        })
    ], Vibration);
    return Vibration;
}());
exports.Vibration = Vibration;

},{"./plugin":82}],106:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name VideoEditor
 * @description Edit videos using native device APIs
 *
 * @usage
 * ```
 * import {VideoEditor} from 'ionic-native';
 *
 * VideoEditor.transcodeVideo({
 *   fileUri: '/path/to/input.mov',
 *   outputFileName: 'output.mp4',
 *   outputFileType: VideoEditor.OutputFileType.MPEG4
 * })
 * .then((fileUri: string) => console.log('video transcode success', fileUri))
 * .catch((error: any) => console.log('video transcode error', error));
 *
 * ```
 * @interfaces
 * TranscodeOptions
 * TrimOptions
 * CreateThumbnailOptions
 * GetVideoInfoOptions
 * VideoInfo
 */
var VideoEditor = (function () {
    function VideoEditor() {
    }
    /**
     * Transcode a video
     * @param options {TranscodeOptions} Options
     * @returns {Promise<string>} Returns a promise that resolves to the path of the transcoded video
     */
    VideoEditor.transcodeVideo = function (options) { return; };
    /**
     * Trim a video
     * @param options {TrimOptions} Options
     * @returns {Promise<string>} Returns a promise that resolves to the path of the trimmed video
     */
    VideoEditor.trim = function (options) { return; };
    /**
     * Create a JPEG thumbnail from a video
     * @param options {CreateThumbnailOptions} Options
     * @returns {Promise<string>} Returns a promise that resolves to the path to the jpeg image on the device
     */
    VideoEditor.createThumbnail = function (options) { return; };
    /**
     * Get info on a video (width, height, orientation, duration, size, & bitrate)
     * @param options {GetVideoInfoOptions} Options
     * @returns {Promise<VideoInfo>} Returns a promise that resolves to an object containing info on the video
     */
    VideoEditor.getVideoInfo = function (options) { return; };
    VideoEditor.OptimizeForNetworkUse = {
        NO: 0,
        YES: 1
    };
    VideoEditor.OutputFileType = {
        M4V: 0,
        MPEG4: 1,
        M4A: 2,
        QUICK_TIME: 3
    };
    __decorate([
        plugin_1.Cordova({
            callbackOrder: 'reverse'
        })
    ], VideoEditor, "transcodeVideo", null);
    __decorate([
        plugin_1.Cordova({
            callbackOrder: 'reverse',
            platforms: ['iOS']
        })
    ], VideoEditor, "trim", null);
    __decorate([
        plugin_1.Cordova({
            callbackOrder: 'reverse'
        })
    ], VideoEditor, "createThumbnail", null);
    __decorate([
        plugin_1.Cordova({
            callbackOrder: 'reverse'
        })
    ], VideoEditor, "getVideoInfo", null);
    VideoEditor = __decorate([
        plugin_1.Plugin({
            pluginName: 'VideoEditor',
            plugin: 'cordova-plugin-video-editor',
            pluginRef: 'VideoEditor',
            repo: 'https://github.com/jbavari/cordova-plugin-video-editor',
            platforms: ['Android', 'iOS', 'Windows Phone 8']
        })
    ], VideoEditor);
    return VideoEditor;
}());
exports.VideoEditor = VideoEditor;

},{"./plugin":82}],107:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name VideoPlayer
 * @description
 * A Codova plugin that simply allows you to immediately play a video in fullscreen mode.
 *
 * Requires Cordova plugin: `com.moust.cordova.videoplayer`. For more info, please see the [VideoPlayer plugin docs](https://github.com/moust/cordova-plugin-videoplayer).
 *
 * @usage
 * ```typescript
 * import { VideoPlayer } from 'ionic-native';
 *
 *
 * // Playing a video.
 * VideoPlayer.play("file:///android_asset/www/movie.mp4").then(() => {
 *  console.log('video completed');
 * }).catch(err => {
 *  console.log(err);
 * });
 *
 * ```
 * @interfaces
 * VideoOptions
 */
var VideoPlayer = (function () {
    function VideoPlayer() {
    }
    /**
     * Plays the video from the passed url.
     * @param fileUrl {string} File url to the video.
     * @param options {VideoOptions?} Optional video playback settings. See options above.
     * @returns {Promise<any>} Resolves promise when the video was played successfully.
     */
    VideoPlayer.play = function (fileUrl, options) { return; };
    /**
     * Stops the video playback immediatly.
     */
    VideoPlayer.close = function () { };
    __decorate([
        plugin_1.Cordova()
    ], VideoPlayer, "play", null);
    __decorate([
        plugin_1.Cordova({ sync: true })
    ], VideoPlayer, "close", null);
    VideoPlayer = __decorate([
        plugin_1.Plugin({
            pluginName: 'VideoPlayer',
            plugin: 'cordova-plugin-videoplayer',
            pluginRef: 'VideoPlayer',
            repo: 'https://github.com/moust/cordova-plugin-videoplayer',
            platforms: ['Android']
        })
    ], VideoPlayer);
    return VideoPlayer;
}());
exports.VideoPlayer = VideoPlayer;

},{"./plugin":82}],108:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name WebIntent
 * @description
 * @usage
 * For usage information please refer to the plugin's Github repo.
 *
 * ```typescript
 * import {WebIntent} from 'ionic-native';
 *
 * WebIntent.startActivity(options).then(onSuccess, onError);
 *
 * ```
 */
var WebIntent = (function () {
    function WebIntent() {
    }
    /**
     * @param options {Object} { action: any, url: string, type?: string }
     * @returns {Promise<any>}
     */
    WebIntent.startActivity = function (options) { return; };
    /**
     * @param extra {any}
     * @returns {Promise<any>}
     */
    WebIntent.hasExtra = function (extra) { return; };
    /**
     * @param extra {any}
     * @returns {Promise<any>}
     */
    WebIntent.getExtra = function (extra) { return; };
    /**
     * @returns {Promise<any>}
     */
    WebIntent.getUri = function () { return; };
    ;
    /**
     * @returns {Promise<string>}
     */
    WebIntent.onNewIntent = function () { return; };
    ;
    /**
     * @param options {Object} { action: string, extras?: { option: boolean } }
     * @returns {Promise<any>}
     */
    WebIntent.sendBroadcast = function (options) { return; };
    __decorate([
        plugin_1.CordovaProperty
    ], WebIntent, "ACTION_VIEW", void 0);
    __decorate([
        plugin_1.CordovaProperty
    ], WebIntent, "EXTRA_TEXT", void 0);
    __decorate([
        plugin_1.Cordova()
    ], WebIntent, "startActivity", null);
    __decorate([
        plugin_1.Cordova()
    ], WebIntent, "hasExtra", null);
    __decorate([
        plugin_1.Cordova()
    ], WebIntent, "getExtra", null);
    __decorate([
        plugin_1.Cordova()
    ], WebIntent, "getUri", null);
    __decorate([
        plugin_1.Cordova()
    ], WebIntent, "onNewIntent", null);
    __decorate([
        plugin_1.Cordova()
    ], WebIntent, "sendBroadcast", null);
    WebIntent = __decorate([
        plugin_1.Plugin({
            pluginName: 'WebIntent',
            plugin: 'https://github.com/Initsogar/cordova-webintent.git',
            pluginRef: 'window.plugins.webintent',
            repo: 'https://github.com/Initsogar/cordova-webintent.git',
            platforms: ['Android']
        })
    ], WebIntent);
    return WebIntent;
}());
exports.WebIntent = WebIntent;

},{"./plugin":82}],109:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name YoutubeVideoPlayer
 * @description
 * Plays YouTube videos in Native YouTube App
 *
 * @usage
 * ```
 * import {YoutubeVideoPlayer} from 'ionic-native';
 *
 * YoutubeVideoPlayer.openVideo('myvideoid');
 *
 * ```
 */
var YoutubeVideoPlayer = (function () {
    function YoutubeVideoPlayer() {
    }
    /**
     * Plays a YouTube video
     * @param videoId {string} Video ID
     */
    YoutubeVideoPlayer.openVideo = function (videoId) { };
    __decorate([
        plugin_1.Cordova({ sync: true })
    ], YoutubeVideoPlayer, "openVideo", null);
    YoutubeVideoPlayer = __decorate([
        plugin_1.Plugin({
            pluginName: 'YoutubeVideoPlayer',
            plugin: 'https://github.com/Glitchbone/CordovaYoutubeVideoPlayer.git',
            pluginRef: 'YoutubeVideoPlayer',
            repo: 'https://github.com/Glitchbone/CordovaYoutubeVideoPlayer',
            platforms: ['Android', 'iOS']
        })
    ], YoutubeVideoPlayer);
    return YoutubeVideoPlayer;
}());
exports.YoutubeVideoPlayer = YoutubeVideoPlayer;

},{"./plugin":82}],110:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name ZBar
 * @description
 * The ZBar Scanner Plugin allows you to scan 2d barcodes.
 *
 * Requires Cordova plugin: `cordova-plugin-cszbar`. For more info, please see the [zBar plugin docs](https://github.com/tjwoon/csZBar).
 *
 * @usage
 * ```
 * import { ZBar } from 'ionic-native';
 *
 * let zBarOptions = {
 *       flash: "off",
 *       drawSight: false
 *     };
 *
 * ZBar.scan(zBarOptions)
 *    .then(result => {
 *       console.log(result); // Scanned code
 *    })
 *    .catch(error => {
 *       console.log(error); // Error message
 *    });
 *
 * ```
 *
 * @interfaces
 * ZBarOptions
 */
var ZBar = (function () {
    function ZBar() {
    }
    /**
     * Open the scanner
     * @param options { ZBarOptions } Scan options
     * @returns {Promise<any>} Returns a Promise that resolves with the scanned string, or rejects with an error.
     */
    ZBar.scan = function (options) { return; };
    __decorate([
        plugin_1.Cordova()
    ], ZBar, "scan", null);
    ZBar = __decorate([
        plugin_1.Plugin({
            pluginName: 'ZBar',
            plugin: 'cordova-plugin-cszbar',
            pluginRef: 'cloudSky.zBar',
            repo: 'https://github.com/tjwoon/csZBar',
            platforms: ['Android', 'iOS']
        })
    ], ZBar);
    return ZBar;
}());
exports.ZBar = ZBar;

},{"./plugin":82}],111:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var plugin_1 = require('./plugin');
/**
 * @name Zip
 * @description
 * A Cordova plugin to unzip files in Android and iOS.
 *
 * @usage
 * ```
 * import {Zip} from 'ionic-native';
 *
 * Zip.unzip('path/to/source.zip', 'path/to/dest', (progress) => console.log('Unzipping, ' + Math.round((progress.loaded / progress.total) * 100) + '%'))
 *  .then((result) => {
 *    if(result === 0) console.log('SUCCESS');
 *    if(result === -1) console.log('FAILED');
 *  });
 *
 * ```
 */
var Zip = (function () {
    function Zip() {
    }
    /**
     * Extracts files from a ZIP archive
     * @param sourceZip {string} Source ZIP file
     * @param destUrl {string} Destination folder
     * @param onProgress {Function} optional callback to be called on progress update
     * @returns {Promise<number>} returns a promise that resolves with a number. 0 is success, -1 is error
     */
    Zip.unzip = function (sourceZip, destUrl, onProgress) { return; };
    __decorate([
        plugin_1.Cordova({
            successIndex: 2,
            errorIndex: 4
        })
    ], Zip, "unzip", null);
    Zip = __decorate([
        plugin_1.Plugin({
            pluginName: 'Zip',
            plugin: 'cordova-plugin-zip',
            pluginRef: 'zip',
            repo: 'https://github.com/MobileChromeApps/cordova-plugin-zip',
        })
    ], Zip);
    return Zip;
}());
exports.Zip = Zip;

},{"./plugin":82}],112:[function(require,module,exports){
"use strict";
function get(obj, path) {
    for (var i = 0, path = path.split('.'), len = path.length; i < len; i++) {
        if (!obj) {
            return null;
        }
        obj = obj[path[i]];
    }
    return obj;
}
exports.get = get;
;

},{}],113:[function(require,module,exports){
"use strict";
var root_1 = require('./util/root');
var toSubscriber_1 = require('./util/toSubscriber');
var observable_1 = require('./symbol/observable');
/**
 * A representation of any set of values over any amount of time. This the most basic building block
 * of RxJS.
 *
 * @class Observable<T>
 */
var Observable = (function () {
    /**
     * @constructor
     * @param {Function} subscribe the function that is  called when the Observable is
     * initially subscribed to. This function is given a Subscriber, to which new values
     * can be `next`ed, or an `error` method can be called to raise an error, or
     * `complete` can be called to notify of a successful completion.
     */
    function Observable(subscribe) {
        this._isScalar = false;
        if (subscribe) {
            this._subscribe = subscribe;
        }
    }
    /**
     * Creates a new Observable, with this Observable as the source, and the passed
     * operator defined as the new observable's operator.
     * @method lift
     * @param {Operator} operator the operator defining the operation to take on the observable
     * @return {Observable} a new observable with the Operator applied
     */
    Observable.prototype.lift = function (operator) {
        var observable = new Observable();
        observable.source = this;
        observable.operator = operator;
        return observable;
    };
    Observable.prototype.subscribe = function (observerOrNext, error, complete) {
        var operator = this.operator;
        var sink = toSubscriber_1.toSubscriber(observerOrNext, error, complete);
        if (operator) {
            operator.call(sink, this);
        }
        else {
            sink.add(this._subscribe(sink));
        }
        if (sink.syncErrorThrowable) {
            sink.syncErrorThrowable = false;
            if (sink.syncErrorThrown) {
                throw sink.syncErrorValue;
            }
        }
        return sink;
    };
    /**
     * @method forEach
     * @param {Function} next a handler for each value emitted by the observable
     * @param {PromiseConstructor} [PromiseCtor] a constructor function used to instantiate the Promise
     * @return {Promise} a promise that either resolves on observable completion or
     *  rejects with the handled error
     */
    Observable.prototype.forEach = function (next, PromiseCtor) {
        var _this = this;
        if (!PromiseCtor) {
            if (root_1.root.Rx && root_1.root.Rx.config && root_1.root.Rx.config.Promise) {
                PromiseCtor = root_1.root.Rx.config.Promise;
            }
            else if (root_1.root.Promise) {
                PromiseCtor = root_1.root.Promise;
            }
        }
        if (!PromiseCtor) {
            throw new Error('no Promise impl found');
        }
        return new PromiseCtor(function (resolve, reject) {
            var subscription = _this.subscribe(function (value) {
                if (subscription) {
                    // if there is a subscription, then we can surmise
                    // the next handling is asynchronous. Any errors thrown
                    // need to be rejected explicitly and unsubscribe must be
                    // called manually
                    try {
                        next(value);
                    }
                    catch (err) {
                        reject(err);
                        subscription.unsubscribe();
                    }
                }
                else {
                    // if there is NO subscription, then we're getting a nexted
                    // value synchronously during subscription. We can just call it.
                    // If it errors, Observable's `subscribe` will ensure the
                    // unsubscription logic is called, then synchronously rethrow the error.
                    // After that, Promise will trap the error and send it
                    // down the rejection path.
                    next(value);
                }
            }, reject, resolve);
        });
    };
    Observable.prototype._subscribe = function (subscriber) {
        return this.source.subscribe(subscriber);
    };
    /**
     * An interop point defined by the es7-observable spec https://github.com/zenparsing/es-observable
     * @method Symbol.observable
     * @return {Observable} this instance of the observable
     */
    Observable.prototype[observable_1.$$observable] = function () {
        return this;
    };
    // HACK: Since TypeScript inherits static properties too, we have to
    // fight against TypeScript here so Subject can have a different static create signature
    /**
     * Creates a new cold Observable by calling the Observable constructor
     * @static true
     * @owner Observable
     * @method create
     * @param {Function} subscribe? the subscriber function to be passed to the Observable constructor
     * @return {Observable} a new cold observable
     */
    Observable.create = function (subscribe) {
        return new Observable(subscribe);
    };
    return Observable;
}());
exports.Observable = Observable;

},{"./symbol/observable":117,"./util/root":124,"./util/toSubscriber":125}],114:[function(require,module,exports){
"use strict";
exports.empty = {
    closed: true,
    next: function (value) { },
    error: function (err) { throw err; },
    complete: function () { }
};

},{}],115:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var isFunction_1 = require('./util/isFunction');
var Subscription_1 = require('./Subscription');
var Observer_1 = require('./Observer');
var rxSubscriber_1 = require('./symbol/rxSubscriber');
/**
 * Implements the {@link Observer} interface and extends the
 * {@link Subscription} class. While the {@link Observer} is the public API for
 * consuming the values of an {@link Observable}, all Observers get converted to
 * a Subscriber, in order to provide Subscription-like capabilities such as
 * `unsubscribe`. Subscriber is a common type in RxJS, and crucial for
 * implementing operators, but it is rarely used as a public API.
 *
 * @class Subscriber<T>
 */
var Subscriber = (function (_super) {
    __extends(Subscriber, _super);
    /**
     * @param {Observer|function(value: T): void} [destinationOrNext] A partially
     * defined Observer or a `next` callback function.
     * @param {function(e: ?any): void} [error] The `error` callback of an
     * Observer.
     * @param {function(): void} [complete] The `complete` callback of an
     * Observer.
     */
    function Subscriber(destinationOrNext, error, complete) {
        _super.call(this);
        this.syncErrorValue = null;
        this.syncErrorThrown = false;
        this.syncErrorThrowable = false;
        this.isStopped = false;
        switch (arguments.length) {
            case 0:
                this.destination = Observer_1.empty;
                break;
            case 1:
                if (!destinationOrNext) {
                    this.destination = Observer_1.empty;
                    break;
                }
                if (typeof destinationOrNext === 'object') {
                    if (destinationOrNext instanceof Subscriber) {
                        this.destination = destinationOrNext;
                        this.destination.add(this);
                    }
                    else {
                        this.syncErrorThrowable = true;
                        this.destination = new SafeSubscriber(this, destinationOrNext);
                    }
                    break;
                }
            default:
                this.syncErrorThrowable = true;
                this.destination = new SafeSubscriber(this, destinationOrNext, error, complete);
                break;
        }
    }
    Subscriber.prototype[rxSubscriber_1.$$rxSubscriber] = function () { return this; };
    /**
     * A static factory for a Subscriber, given a (potentially partial) definition
     * of an Observer.
     * @param {function(x: ?T): void} [next] The `next` callback of an Observer.
     * @param {function(e: ?any): void} [error] The `error` callback of an
     * Observer.
     * @param {function(): void} [complete] The `complete` callback of an
     * Observer.
     * @return {Subscriber<T>} A Subscriber wrapping the (partially defined)
     * Observer represented by the given arguments.
     */
    Subscriber.create = function (next, error, complete) {
        var subscriber = new Subscriber(next, error, complete);
        subscriber.syncErrorThrowable = false;
        return subscriber;
    };
    /**
     * The {@link Observer} callback to receive notifications of type `next` from
     * the Observable, with a value. The Observable may call this method 0 or more
     * times.
     * @param {T} [value] The `next` value.
     * @return {void}
     */
    Subscriber.prototype.next = function (value) {
        if (!this.isStopped) {
            this._next(value);
        }
    };
    /**
     * The {@link Observer} callback to receive notifications of type `error` from
     * the Observable, with an attached {@link Error}. Notifies the Observer that
     * the Observable has experienced an error condition.
     * @param {any} [err] The `error` exception.
     * @return {void}
     */
    Subscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            this.isStopped = true;
            this._error(err);
        }
    };
    /**
     * The {@link Observer} callback to receive a valueless notification of type
     * `complete` from the Observable. Notifies the Observer that the Observable
     * has finished sending push-based notifications.
     * @return {void}
     */
    Subscriber.prototype.complete = function () {
        if (!this.isStopped) {
            this.isStopped = true;
            this._complete();
        }
    };
    Subscriber.prototype.unsubscribe = function () {
        if (this.closed) {
            return;
        }
        this.isStopped = true;
        _super.prototype.unsubscribe.call(this);
    };
    Subscriber.prototype._next = function (value) {
        this.destination.next(value);
    };
    Subscriber.prototype._error = function (err) {
        this.destination.error(err);
        this.unsubscribe();
    };
    Subscriber.prototype._complete = function () {
        this.destination.complete();
        this.unsubscribe();
    };
    return Subscriber;
}(Subscription_1.Subscription));
exports.Subscriber = Subscriber;
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SafeSubscriber = (function (_super) {
    __extends(SafeSubscriber, _super);
    function SafeSubscriber(_parent, observerOrNext, error, complete) {
        _super.call(this);
        this._parent = _parent;
        var next;
        var context = this;
        if (isFunction_1.isFunction(observerOrNext)) {
            next = observerOrNext;
        }
        else if (observerOrNext) {
            context = observerOrNext;
            next = observerOrNext.next;
            error = observerOrNext.error;
            complete = observerOrNext.complete;
            if (isFunction_1.isFunction(context.unsubscribe)) {
                this.add(context.unsubscribe.bind(context));
            }
            context.unsubscribe = this.unsubscribe.bind(this);
        }
        this._context = context;
        this._next = next;
        this._error = error;
        this._complete = complete;
    }
    SafeSubscriber.prototype.next = function (value) {
        if (!this.isStopped && this._next) {
            var _parent = this._parent;
            if (!_parent.syncErrorThrowable) {
                this.__tryOrUnsub(this._next, value);
            }
            else if (this.__tryOrSetError(_parent, this._next, value)) {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            var _parent = this._parent;
            if (this._error) {
                if (!_parent.syncErrorThrowable) {
                    this.__tryOrUnsub(this._error, err);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parent, this._error, err);
                    this.unsubscribe();
                }
            }
            else if (!_parent.syncErrorThrowable) {
                this.unsubscribe();
                throw err;
            }
            else {
                _parent.syncErrorValue = err;
                _parent.syncErrorThrown = true;
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.complete = function () {
        if (!this.isStopped) {
            var _parent = this._parent;
            if (this._complete) {
                if (!_parent.syncErrorThrowable) {
                    this.__tryOrUnsub(this._complete);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parent, this._complete);
                    this.unsubscribe();
                }
            }
            else {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            this.unsubscribe();
            throw err;
        }
    };
    SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            parent.syncErrorValue = err;
            parent.syncErrorThrown = true;
            return true;
        }
        return false;
    };
    SafeSubscriber.prototype._unsubscribe = function () {
        var _parent = this._parent;
        this._context = null;
        this._parent = null;
        _parent.unsubscribe();
    };
    return SafeSubscriber;
}(Subscriber));

},{"./Observer":114,"./Subscription":116,"./symbol/rxSubscriber":118,"./util/isFunction":122}],116:[function(require,module,exports){
"use strict";
var isArray_1 = require('./util/isArray');
var isObject_1 = require('./util/isObject');
var isFunction_1 = require('./util/isFunction');
var tryCatch_1 = require('./util/tryCatch');
var errorObject_1 = require('./util/errorObject');
var UnsubscriptionError_1 = require('./util/UnsubscriptionError');
/**
 * Represents a disposable resource, such as the execution of an Observable. A
 * Subscription has one important method, `unsubscribe`, that takes no argument
 * and just disposes the resource held by the subscription.
 *
 * Additionally, subscriptions may be grouped together through the `add()`
 * method, which will attach a child Subscription to the current Subscription.
 * When a Subscription is unsubscribed, all its children (and its grandchildren)
 * will be unsubscribed as well.
 *
 * @class Subscription
 */
var Subscription = (function () {
    /**
     * @param {function(): void} [unsubscribe] A function describing how to
     * perform the disposal of resources when the `unsubscribe` method is called.
     */
    function Subscription(unsubscribe) {
        /**
         * A flag to indicate whether this Subscription has already been unsubscribed.
         * @type {boolean}
         */
        this.closed = false;
        if (unsubscribe) {
            this._unsubscribe = unsubscribe;
        }
    }
    /**
     * Disposes the resources held by the subscription. May, for instance, cancel
     * an ongoing Observable execution or cancel any other type of work that
     * started when the Subscription was created.
     * @return {void}
     */
    Subscription.prototype.unsubscribe = function () {
        var hasErrors = false;
        var errors;
        if (this.closed) {
            return;
        }
        this.closed = true;
        var _a = this, _unsubscribe = _a._unsubscribe, _subscriptions = _a._subscriptions;
        this._subscriptions = null;
        if (isFunction_1.isFunction(_unsubscribe)) {
            var trial = tryCatch_1.tryCatch(_unsubscribe).call(this);
            if (trial === errorObject_1.errorObject) {
                hasErrors = true;
                (errors = errors || []).push(errorObject_1.errorObject.e);
            }
        }
        if (isArray_1.isArray(_subscriptions)) {
            var index = -1;
            var len = _subscriptions.length;
            while (++index < len) {
                var sub = _subscriptions[index];
                if (isObject_1.isObject(sub)) {
                    var trial = tryCatch_1.tryCatch(sub.unsubscribe).call(sub);
                    if (trial === errorObject_1.errorObject) {
                        hasErrors = true;
                        errors = errors || [];
                        var err = errorObject_1.errorObject.e;
                        if (err instanceof UnsubscriptionError_1.UnsubscriptionError) {
                            errors = errors.concat(err.errors);
                        }
                        else {
                            errors.push(err);
                        }
                    }
                }
            }
        }
        if (hasErrors) {
            throw new UnsubscriptionError_1.UnsubscriptionError(errors);
        }
    };
    /**
     * Adds a tear down to be called during the unsubscribe() of this
     * Subscription.
     *
     * If the tear down being added is a subscription that is already
     * unsubscribed, is the same reference `add` is being called on, or is
     * `Subscription.EMPTY`, it will not be added.
     *
     * If this subscription is already in an `closed` state, the passed
     * tear down logic will be executed immediately.
     *
     * @param {TeardownLogic} teardown The additional logic to execute on
     * teardown.
     * @return {Subscription} Returns the Subscription used or created to be
     * added to the inner subscriptions list. This Subscription can be used with
     * `remove()` to remove the passed teardown logic from the inner subscriptions
     * list.
     */
    Subscription.prototype.add = function (teardown) {
        if (!teardown || (teardown === Subscription.EMPTY)) {
            return Subscription.EMPTY;
        }
        if (teardown === this) {
            return this;
        }
        var sub = teardown;
        switch (typeof teardown) {
            case 'function':
                sub = new Subscription(teardown);
            case 'object':
                if (sub.closed || typeof sub.unsubscribe !== 'function') {
                    break;
                }
                else if (this.closed) {
                    sub.unsubscribe();
                }
                else {
                    (this._subscriptions || (this._subscriptions = [])).push(sub);
                }
                break;
            default:
                throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
        }
        return sub;
    };
    /**
     * Removes a Subscription from the internal list of subscriptions that will
     * unsubscribe during the unsubscribe process of this Subscription.
     * @param {Subscription} subscription The subscription to remove.
     * @return {void}
     */
    Subscription.prototype.remove = function (subscription) {
        // HACK: This might be redundant because of the logic in `add()`
        if (subscription == null || (subscription === this) || (subscription === Subscription.EMPTY)) {
            return;
        }
        var subscriptions = this._subscriptions;
        if (subscriptions) {
            var subscriptionIndex = subscriptions.indexOf(subscription);
            if (subscriptionIndex !== -1) {
                subscriptions.splice(subscriptionIndex, 1);
            }
        }
    };
    Subscription.EMPTY = (function (empty) {
        empty.closed = true;
        return empty;
    }(new Subscription()));
    return Subscription;
}());
exports.Subscription = Subscription;

},{"./util/UnsubscriptionError":119,"./util/errorObject":120,"./util/isArray":121,"./util/isFunction":122,"./util/isObject":123,"./util/tryCatch":126}],117:[function(require,module,exports){
"use strict";
var root_1 = require('../util/root');
function getSymbolObservable(context) {
    var $$observable;
    var Symbol = context.Symbol;
    if (typeof Symbol === 'function') {
        if (Symbol.observable) {
            $$observable = Symbol.observable;
        }
        else {
            $$observable = Symbol('observable');
            Symbol.observable = $$observable;
        }
    }
    else {
        $$observable = '@@observable';
    }
    return $$observable;
}
exports.getSymbolObservable = getSymbolObservable;
exports.$$observable = getSymbolObservable(root_1.root);

},{"../util/root":124}],118:[function(require,module,exports){
"use strict";
var root_1 = require('../util/root');
var Symbol = root_1.root.Symbol;
exports.$$rxSubscriber = (typeof Symbol === 'function' && typeof Symbol.for === 'function') ?
    Symbol.for('rxSubscriber') : '@@rxSubscriber';

},{"../util/root":124}],119:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * An error thrown when one or more errors have occurred during the
 * `unsubscribe` of a {@link Subscription}.
 */
var UnsubscriptionError = (function (_super) {
    __extends(UnsubscriptionError, _super);
    function UnsubscriptionError(errors) {
        _super.call(this);
        this.errors = errors;
        var err = Error.call(this, errors ?
            errors.length + " errors occurred during unsubscription:\n  " + errors.map(function (err, i) { return ((i + 1) + ") " + err.toString()); }).join('\n  ') : '');
        this.name = err.name = 'UnsubscriptionError';
        this.stack = err.stack;
        this.message = err.message;
    }
    return UnsubscriptionError;
}(Error));
exports.UnsubscriptionError = UnsubscriptionError;

},{}],120:[function(require,module,exports){
"use strict";
// typeof any so that it we don't have to cast when comparing a result to the error object
exports.errorObject = { e: {} };

},{}],121:[function(require,module,exports){
"use strict";
exports.isArray = Array.isArray || (function (x) { return x && typeof x.length === 'number'; });

},{}],122:[function(require,module,exports){
"use strict";
function isFunction(x) {
    return typeof x === 'function';
}
exports.isFunction = isFunction;

},{}],123:[function(require,module,exports){
"use strict";
function isObject(x) {
    return x != null && typeof x === 'object';
}
exports.isObject = isObject;

},{}],124:[function(require,module,exports){
(function (global){
"use strict";
/**
 * window: browser in DOM main thread
 * self: browser in WebWorker
 * global: Node.js/other
 */
exports.root = (typeof window == 'object' && window.window === window && window
    || typeof self == 'object' && self.self === self && self
    || typeof global == 'object' && global.global === global && global);
if (!exports.root) {
    throw new Error('RxJS could not find any global context (window, self, global)');
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],125:[function(require,module,exports){
"use strict";
var Subscriber_1 = require('../Subscriber');
var rxSubscriber_1 = require('../symbol/rxSubscriber');
var Observer_1 = require('../Observer');
function toSubscriber(nextOrObserver, error, complete) {
    if (nextOrObserver) {
        if (nextOrObserver instanceof Subscriber_1.Subscriber) {
            return nextOrObserver;
        }
        if (nextOrObserver[rxSubscriber_1.$$rxSubscriber]) {
            return nextOrObserver[rxSubscriber_1.$$rxSubscriber]();
        }
    }
    if (!nextOrObserver && !error && !complete) {
        return new Subscriber_1.Subscriber(Observer_1.empty);
    }
    return new Subscriber_1.Subscriber(nextOrObserver, error, complete);
}
exports.toSubscriber = toSubscriber;

},{"../Observer":114,"../Subscriber":115,"../symbol/rxSubscriber":118}],126:[function(require,module,exports){
"use strict";
var errorObject_1 = require('./errorObject');
var tryCatchTarget;
function tryCatcher() {
    try {
        return tryCatchTarget.apply(this, arguments);
    }
    catch (e) {
        errorObject_1.errorObject.e = e;
        return errorObject_1.errorObject;
    }
}
function tryCatch(fn) {
    tryCatchTarget = fn;
    return tryCatcher;
}
exports.tryCatch = tryCatch;
;

},{"./errorObject":120}]},{},[1]);
