(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \****************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/***/ }),

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "@import \"https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700\";\r\n\r\nbody {\r\n  font-family: 'Poppins', sans-serif;\r\n  background-image: url(/project-angular/assets/img/recordplayer-neon1.jpg);\r\n  background-repeat: no-repeat;\r\n  background-attachment: fixed;\r\n  background-position: center;\r\n}\r\n\r\np {\r\n  font-family: 'Poppins', sans-serif;\r\n  font-size: 1.1em;\r\n  font-weight: 300;\r\n  line-height: 1.7em;\r\n  color: #999;\r\n}\r\n\r\na,\r\na:hover,\r\na:focus {\r\n  color: inherit;\r\n  text-decoration: none;\r\n  transition: all 0.3s;\r\n}\r\n\r\n.navbar {\r\n  padding: 15px 10px;\r\n  background: #fff;\r\n  border: none;\r\n  border-radius: 0;\r\n  margin-bottom: 40px;\r\n  margin-top: 40px;\r\n  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.navbar-btn {\r\n  box-shadow: none;\r\n  outline: none !important;\r\n  border: none;\r\n}\r\n\r\n.line {\r\n  width: 100%;\r\n  height: 1px;\r\n  border-bottom: 1px dashed #ddd;\r\n  margin: 40px 0;\r\n}\r\n\r\n/* ---------------------------------------------------\r\n    SIDEBAR STYLE\r\n----------------------------------------------------- */\r\n\r\n#sidebar {\r\n  width: 250px;\r\n  position: fixed;\r\n  top: 0;\r\n  left: -250px;\r\n  height: 100vh;\r\n  z-index: 999;\r\n  background: #000000;\r\n  color: #fff;\r\n  transition: all 0.3s;\r\n  overflow-y: scroll;\r\n  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n#sidebar.active {\r\n  left: 0;\r\n}\r\n\r\n#dismiss {\r\n  width: 35px;\r\n  height: 35px;\r\n  line-height: 35px;\r\n  text-align: center;\r\n  background: #000000;\r\n  position: absolute;\r\n  top: 10px;\r\n  right: 10px;\r\n  cursor: pointer;\r\n  transition: all 0.3s;\r\n}\r\n\r\n#dismiss:hover {\r\n  background: #fff;\r\n  color: #000000;\r\n}\r\n\r\n.overlay {\r\n  display: none;\r\n  position: fixed;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  background: rgba(0, 0, 0, 0.7);\r\n  z-index: 998;\r\n  opacity: 0;\r\n  transition: all 0.5s ease-in-out;\r\n}\r\n\r\n.overlay.active {\r\n  display: block;\r\n  opacity: 1;\r\n}\r\n\r\n#sidebar .sidebar-header {\r\n  padding: 20px;\r\n  background: #000000;\r\n}\r\n\r\n#sidebar ul.components {\r\n  padding: 20px 0;\r\n  border-bottom: 1px solid #47748b;\r\n}\r\n\r\n#sidebar ul p {\r\n  color: #fff;\r\n  padding: 10px;\r\n}\r\n\r\n#sidebar ul li a {\r\n  padding: 10px;\r\n  font-size: 1.1em;\r\n  display: block;\r\n}\r\n\r\n#sidebar ul li a:hover {\r\n  color: #000000;\r\n  background: #fff;\r\n}\r\n\r\n#sidebar ul li.active>a,\r\na[aria-expanded=\"true\"] {\r\n  color: #fff;\r\n  background: #6d7fcc;\r\n}\r\n\r\na[data-toggle=\"collapse\"] {\r\n  position: relative;\r\n}\r\n\r\n.dropdown-toggle::after {\r\n  display: block;\r\n  position: absolute;\r\n  top: 50%;\r\n  right: 20px;\r\n  transform: translateY(-50%);\r\n}\r\n\r\nul ul a {\r\n  font-size: 0.9em !important;\r\n  padding-left: 30px !important;\r\n  background: #6d7fcc;\r\n}\r\n\r\nul.CTAs {\r\n  padding: 20px;\r\n}\r\n\r\nul.CTAs a {\r\n  text-align: center;\r\n  font-size: 0.9em !important;\r\n  display: block;\r\n  border-radius: 5px;\r\n  margin-bottom: 5px;\r\n}\r\n\r\na.download {\r\n  background: #fff;\r\n  color: #000000;\r\n}\r\n\r\na.article,\r\na.article:hover {\r\n  background: #6d7fcc !important;\r\n  color: #fff !important;\r\n}\r\n\r\n/* ---------------------------------------------------\r\n    CONTENT STYLE\r\n----------------------------------------------------- */\r\n\r\n/* #content {\r\n  width: 100%;\r\n  padding: 20px;\r\n  min-height: 100vh;\r\n  transition: all 0.3s;\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n} */\r\n\r\n#searchActive {\r\n  margin-left: -150px;\r\n}\r\n\r\n#checkBox {\r\n  text-align: right;\r\n  color: #fff;\r\n  text-shadow: 2px 2px 2px #000;\r\n}\r\n\r\nh1 {\r\n  color: #fff;\r\n  text-shadow: 2px 2px 2px #000;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZFQUE2RTs7QUFFN0U7RUFDRSxrQ0FBa0M7RUFDbEMseUVBQXlFO0VBQ3pFLDRCQUE0QjtFQUM1Qiw0QkFBNEI7RUFDNUIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFFQTs7O0VBR0UsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQiwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsd0JBQXdCO0VBQ3hCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsOEJBQThCO0VBQzlCLGNBQWM7QUFDaEI7O0FBRUE7O3VEQUV1RDs7QUFFdkQ7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLE1BQU07RUFDTixZQUFZO0VBQ1osYUFBYTtFQUNiLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0UsT0FBTztBQUNUOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7RUFDWCxlQUFlO0VBR2Ysb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLFlBQVk7RUFDWixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLFlBQVk7RUFDWixVQUFVO0VBQ1YsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsY0FBYztFQUNkLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7O0VBRUUsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFdBQVc7RUFDWCwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsNkJBQTZCO0VBQzdCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQiwyQkFBMkI7RUFDM0IsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTs7RUFFRSw4QkFBOEI7RUFDOUIsc0JBQXNCO0FBQ3hCOztBQUVBOzt1REFFdUQ7O0FBRXZEOzs7Ozs7OztHQVFHOztBQUdIO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsNkJBQTZCO0FBQy9CIiwiZmlsZSI6InNyYy9zdHlsZXMuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Qb3BwaW5zOjMwMCw0MDAsNTAwLDYwMCw3MDBcIjtcclxuXHJcbmJvZHkge1xyXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9wcm9qZWN0LWFuZ3VsYXIvYXNzZXRzL2ltZy9yZWNvcmRwbGF5ZXItbmVvbjEuanBnKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG59XHJcblxyXG5wIHtcclxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMS4xZW07XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBsaW5lLWhlaWdodDogMS43ZW07XHJcbiAgY29sb3I6ICM5OTk7XHJcbn1cclxuXHJcbmEsXHJcbmE6aG92ZXIsXHJcbmE6Zm9jdXMge1xyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxufVxyXG5cclxuLm5hdmJhciB7XHJcbiAgcGFkZGluZzogMTVweCAxMHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gIGJveC1zaGFkb3c6IDFweCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG5cclxuLm5hdmJhci1idG4ge1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLmxpbmUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMXB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgI2RkZDtcclxuICBtYXJnaW46IDQwcHggMDtcclxufVxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICBTSURFQkFSIFNUWUxFXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG4jc2lkZWJhciB7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogLTI1MHB4O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgei1pbmRleDogOTk5O1xyXG4gIGJhY2tncm91bmQ6ICMwMDAwMDA7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gIGJveC1zaGFkb3c6IDNweCAzcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxufVxyXG5cclxuI3NpZGViYXIuYWN0aXZlIHtcclxuICBsZWZ0OiAwO1xyXG59XHJcblxyXG4jZGlzbWlzcyB7XHJcbiAgd2lkdGg6IDM1cHg7XHJcbiAgaGVpZ2h0OiAzNXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAzNXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDEwcHg7XHJcbiAgcmlnaHQ6IDEwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbn1cclxuXHJcbiNkaXNtaXNzOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG59XHJcblxyXG4ub3ZlcmxheSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpO1xyXG4gIHotaW5kZXg6IDk5ODtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4ub3ZlcmxheS5hY3RpdmUge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbiNzaWRlYmFyIC5zaWRlYmFyLWhlYWRlciB7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xyXG59XHJcblxyXG4jc2lkZWJhciB1bC5jb21wb25lbnRzIHtcclxuICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM0Nzc0OGI7XHJcbn1cclxuXHJcbiNzaWRlYmFyIHVsIHAge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbiNzaWRlYmFyIHVsIGxpIGEge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAxLjFlbTtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuI3NpZGViYXIgdWwgbGkgYTpob3ZlciB7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxufVxyXG5cclxuI3NpZGViYXIgdWwgbGkuYWN0aXZlPmEsXHJcbmFbYXJpYS1leHBhbmRlZD1cInRydWVcIl0ge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQ6ICM2ZDdmY2M7XHJcbn1cclxuXHJcbmFbZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIHJpZ2h0OiAyMHB4O1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxufVxyXG5cclxudWwgdWwgYSB7XHJcbiAgZm9udC1zaXplOiAwLjllbSAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmctbGVmdDogMzBweCAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQ6ICM2ZDdmY2M7XHJcbn1cclxuXHJcbnVsLkNUQXMge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbnVsLkNUQXMgYSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMC45ZW0gIWltcG9ydGFudDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG5hLmRvd25sb2FkIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG59XHJcblxyXG5hLmFydGljbGUsXHJcbmEuYXJ0aWNsZTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogIzZkN2ZjYyAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgQ09OVEVOVCBTVFlMRVxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuLyogI2NvbnRlbnQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICByaWdodDogMDtcclxufSAqL1xyXG5cclxuXHJcbiNzZWFyY2hBY3RpdmUge1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTUwcHg7XHJcbn1cclxuXHJcbiNjaGVja0JveCB7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggMnB4ICMwMDA7XHJcbn1cclxuXHJcbmgxIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICB0ZXh0LXNoYWRvdzogMnB4IDJweCAycHggIzAwMDtcclxufVxyXG4iXX0= */", '', '']]

/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../../postcss-loader/src??embedded!./bootstrap.min.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/bootstrap/dist/css/bootstrap.min.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!./styles.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ 3:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/bootstrap/dist/css/bootstrap.min.css ./src/styles.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! D:\zaro-projekt\AllCRUD\project-angular\node_modules\bootstrap\dist\css\bootstrap.min.css */"./node_modules/bootstrap/dist/css/bootstrap.min.css");
module.exports = __webpack_require__(/*! D:\zaro-projekt\AllCRUD\project-angular\src\styles.css */"./src/styles.css");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles-es2015.js.map