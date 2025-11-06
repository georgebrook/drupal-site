/******/ (() => { // webpackBootstrap
/*!***************************************************!*\
  !*** ./components/molecules/button/src/button.js ***!
  \***************************************************/
(function (Drupal, $) {
  Drupal.behaviors.myCustomBehavior = {
    attach: function (context, settings) {
      $('.my-element', context).once('myCustomBehavior').each(function () {
        var el = $(this);
        el.css('background-color', 'yellow');
        el.click(function () {
          alert('Clickedssss!');
        });
      });
    }
  };
})(Drupal, jQuery);
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9sZWN1bGVzL2J1dHRvbi9idXR0b24uanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLENBQUMsVUFBVUEsTUFBTSxFQUFFQyxDQUFDLEVBQUU7RUFDcEJELE1BQU0sQ0FBQ0UsU0FBUyxDQUFDQyxnQkFBZ0IsR0FBRztJQUNsQ0MsTUFBTSxFQUFFLFNBQUFBLENBQVVDLE9BQU8sRUFBRUMsUUFBUSxFQUFFO01BQ25DTCxDQUFDLENBQUMsYUFBYSxFQUFFSSxPQUFPLENBQUMsQ0FBQ0UsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUNDLElBQUksQ0FBQyxZQUFZO1FBQ2xFLElBQUlDLEVBQUUsR0FBR1IsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUNoQlEsRUFBRSxDQUFDQyxHQUFHLENBQUMsa0JBQWtCLEVBQUUsUUFBUSxDQUFDO1FBQ3BDRCxFQUFFLENBQUNFLEtBQUssQ0FBQyxZQUFZO1VBQ25CQyxLQUFLLENBQUMsY0FBYyxDQUFDO1FBQ3ZCLENBQUMsQ0FBQztNQUNKLENBQUMsQ0FBQztJQUNKO0VBQ0YsQ0FBQztBQUNILENBQUMsRUFBRVosTUFBTSxFQUFFYSxNQUFNLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL215dGhlbWUvLi9jb21wb25lbnRzL21vbGVjdWxlcy9idXR0b24vc3JjL2J1dHRvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKERydXBhbCwgJCkge1xuICBEcnVwYWwuYmVoYXZpb3JzLm15Q3VzdG9tQmVoYXZpb3IgPSB7XG4gICAgYXR0YWNoOiBmdW5jdGlvbiAoY29udGV4dCwgc2V0dGluZ3MpIHtcbiAgICAgICQoJy5teS1lbGVtZW50JywgY29udGV4dCkub25jZSgnbXlDdXN0b21CZWhhdmlvcicpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZWwgPSAkKHRoaXMpO1xuICAgICAgICBlbC5jc3MoJ2JhY2tncm91bmQtY29sb3InLCAneWVsbG93Jyk7XG4gICAgICAgIGVsLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBhbGVydCgnQ2xpY2tlZHNzc3MhJyk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xufSkoRHJ1cGFsLCBqUXVlcnkpO1xuIl0sIm5hbWVzIjpbIkRydXBhbCIsIiQiLCJiZWhhdmlvcnMiLCJteUN1c3RvbUJlaGF2aW9yIiwiYXR0YWNoIiwiY29udGV4dCIsInNldHRpbmdzIiwib25jZSIsImVhY2giLCJlbCIsImNzcyIsImNsaWNrIiwiYWxlcnQiLCJqUXVlcnkiXSwic291cmNlUm9vdCI6IiJ9