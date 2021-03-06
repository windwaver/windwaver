(function (React, ReactDOM) {
  'use strict';

  var React__default = 'default' in React ? React['default'] : React;
  ReactDOM = ReactDOM && Object.prototype.hasOwnProperty.call(ReactDOM, 'default') ? ReactDOM['default'] : ReactDOM;

  const width = 960;
  const height = 500;
  const circleRadius = 30;
  const initialMousePosition = {x: width / 2, y: height / 2};



  const App = () => {
    const [mousePosition, setMousePosition]=React.useState(initialMousePosition);
    const handleMouseMove = React.useCallback(event => {
    const { clientX, clientY} = event;
    setMousePosition({x: clientX, y: clientY});
  },[setMousePosition]);
    return (
      React__default.createElement( 'svg', { width: width, height: height, onMouseMove: handleMouseMove },
        React__default.createElement( 'circle', {
          cx: mousePosition.x, cy: mousePosition.y, r: circleRadius })
      )
    );
  };

  const rootElement = document.getElementById('root');
  ReactDOM.render(React__default.createElement( App, null ), rootElement);

}(React, ReactDOM));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VDYWxsYmFja30gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5cbmNvbnN0IHdpZHRoID0gOTYwO1xuY29uc3QgaGVpZ2h0ID0gNTAwO1xuY29uc3QgY2lyY2xlUmFkaXVzID0gMzA7XG5jb25zdCBpbml0aWFsTW91c2VQb3NpdGlvbiA9IHt4OiB3aWR0aCAvIDIsIHk6IGhlaWdodCAvIDJ9O1xuXG5cblxuY29uc3QgQXBwID0gKCkgPT4ge1xuICBjb25zdCBbbW91c2VQb3NpdGlvbiwgc2V0TW91c2VQb3NpdGlvbl09dXNlU3RhdGUoaW5pdGlhbE1vdXNlUG9zaXRpb24pO1xuICBjb25zdCBoYW5kbGVNb3VzZU1vdmUgPSB1c2VDYWxsYmFjayhldmVudCA9PiB7XG4gIGNvbnN0IHsgY2xpZW50WCwgY2xpZW50WX0gPSBldmVudDtcbiAgc2V0TW91c2VQb3NpdGlvbih7eDogY2xpZW50WCwgeTogY2xpZW50WX0pXG59LFtzZXRNb3VzZVBvc2l0aW9uXSk7XG4gIHJldHVybiAoXG4gICAgPHN2ZyB3aWR0aD17d2lkdGh9IGhlaWdodD17aGVpZ2h0fSBvbk1vdXNlTW92ZT17aGFuZGxlTW91c2VNb3ZlfT5cbiAgICAgIDxjaXJjbGVcbiAgICAgICAgY3g9e21vdXNlUG9zaXRpb24ueH1cbiAgICAgICAgY3k9e21vdXNlUG9zaXRpb24ueX1cbiAgICAgICAgcj17Y2lyY2xlUmFkaXVzfVxuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKTtcbn07XG5cbmNvbnN0IHJvb3RFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKTtcblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCByb290RWxlbWVudCk7Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlQ2FsbGJhY2siLCJSZWFjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0VBR0EsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDO0VBQ2xCLE1BQU0sTUFBTSxHQUFHLEdBQUcsQ0FBQztFQUNuQixNQUFNLFlBQVksR0FBRyxFQUFFLENBQUM7RUFDeEIsTUFBTSxvQkFBb0IsR0FBRyxDQUFDLENBQUMsRUFBRSxLQUFLLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDM0Q7QUFDQTtBQUNBO0VBQ0EsTUFBTSxHQUFHLEdBQUcsTUFBTTtFQUNsQixFQUFFLE1BQU0sQ0FBQyxhQUFhLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQ0EsY0FBUSxDQUFDLG9CQUFvQixDQUFDLENBQUM7RUFDekUsRUFBRSxNQUFNLGVBQWUsR0FBR0MsaUJBQVcsQ0FBQyxLQUFLLElBQUk7RUFDL0MsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxHQUFHLEtBQUssQ0FBQztFQUNwQyxFQUFFLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsT0FBTyxDQUFDLEVBQUM7RUFDNUMsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO0VBQ3RCLEVBQUU7RUFDRixJQUFJQyx1Q0FBSyxPQUFPLEtBQU0sRUFBQyxRQUFRLE1BQU8sRUFBQyxhQUFhO0VBQ3BELE1BQU1BO0VBQ04sUUFBUSxJQUFJLGFBQWEsQ0FBQyxDQUFFLEVBQ3BCLElBQUksYUFBYSxDQUFDLENBQUUsRUFDcEIsR0FBRyxjQUFhLENBQ2hCO0VBQ1IsS0FBVTtFQUNWLElBQUk7RUFDSixDQUFDLENBQUM7QUFDRjtFQUNBLE1BQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7RUFDcEQsUUFBUSxDQUFDLE1BQU0sQ0FBQ0EsOEJBQUMsU0FBRyxFQUFHLEVBQUUsV0FBVyxDQUFDOzs7OyJ9