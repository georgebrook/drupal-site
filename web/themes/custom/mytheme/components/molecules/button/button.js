/******/ (() => { // webpackBootstrap
/*!***************************************************!*\
  !*** ./components/molecules/button/src/button.js ***!
  \***************************************************/
(function (Drupal, $) {
  Drupal.behaviors.myCustomBehavior = {
    attach: function (context) {
      $(".my-element", context).once("myCustomBehavior").each(function () {
        var el = $(this);
        el.css("background-color", "yellow");
        el.click(function () {
          alert("Clickedssss!");
        });
      });
    }
  };
})(Drupal, jQuery);
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9sZWN1bGVzL2J1dHRvbi9idXR0b24uanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLENBQUMsVUFBVUEsTUFBTSxFQUFFQyxDQUFDLEVBQUU7RUFDcEJELE1BQU0sQ0FBQ0UsU0FBUyxDQUFDQyxnQkFBZ0IsR0FBRztJQUNsQ0MsTUFBTSxFQUFFLFNBQUFBLENBQVVDLE9BQU8sRUFBRTtNQUN6QkosQ0FBQyxDQUFDLGFBQWEsRUFBRUksT0FBTyxDQUFDLENBQ3RCQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FDeEJDLElBQUksQ0FBQyxZQUFZO1FBQ2hCLElBQUlDLEVBQUUsR0FBR1AsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUNoQk8sRUFBRSxDQUFDQyxHQUFHLENBQUMsa0JBQWtCLEVBQUUsUUFBUSxDQUFDO1FBQ3BDRCxFQUFFLENBQUNFLEtBQUssQ0FBQyxZQUFZO1VBQ25CQyxLQUFLLENBQUMsY0FBYyxDQUFDO1FBQ3ZCLENBQUMsQ0FBQztNQUNKLENBQUMsQ0FBQztJQUNOO0VBQ0YsQ0FBQztBQUNILENBQUMsRUFBRVgsTUFBTSxFQUFFWSxNQUFNLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL215dGhlbWUvLi9jb21wb25lbnRzL21vbGVjdWxlcy9idXR0b24vc3JjL2J1dHRvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKERydXBhbCwgJCkge1xuICBEcnVwYWwuYmVoYXZpb3JzLm15Q3VzdG9tQmVoYXZpb3IgPSB7XG4gICAgYXR0YWNoOiBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgJChcIi5teS1lbGVtZW50XCIsIGNvbnRleHQpXG4gICAgICAgIC5vbmNlKFwibXlDdXN0b21CZWhhdmlvclwiKVxuICAgICAgICAuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdmFyIGVsID0gJCh0aGlzKTtcbiAgICAgICAgICBlbC5jc3MoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsIFwieWVsbG93XCIpO1xuICAgICAgICAgIGVsLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGFsZXJ0KFwiQ2xpY2tlZHNzc3MhXCIpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9LFxuICB9O1xufSkoRHJ1cGFsLCBqUXVlcnkpO1xuIl0sIm5hbWVzIjpbIkRydXBhbCIsIiQiLCJiZWhhdmlvcnMiLCJteUN1c3RvbUJlaGF2aW9yIiwiYXR0YWNoIiwiY29udGV4dCIsIm9uY2UiLCJlYWNoIiwiZWwiLCJjc3MiLCJjbGljayIsImFsZXJ0IiwialF1ZXJ5Il0sInNvdXJjZVJvb3QiOiIifQ==