(function (React$1, ReactDOM, d3) {
  'use strict';

  React$1 = React$1 && Object.prototype.hasOwnProperty.call(React$1, 'default') ? React$1['default'] : React$1;
  ReactDOM = ReactDOM && Object.prototype.hasOwnProperty.call(ReactDOM, 'default') ? ReactDOM['default'] : ReactDOM;

  const BackgroundCircle = ({radius, strokeWidth}) => (
    React.createElement( 'circle', { 
          r: radius, fill: "yellow", stroke: "black", 'stroke-width': strokeWidth })
  );

  const Eyes = ({eyeOffsetX,eyeOffsetY,eyeRadius}) => (
    React.createElement( React.Fragment, null,
      React.createElement( 'circle', { 
        cx: -eyeOffsetX, cy: -eyeOffsetY, r: eyeRadius }),
      React.createElement( 'circle', { 
        cx: eyeOffsetX, cy: -eyeOffsetY, r: eyeRadius })
    )
  );

  const Mouth = ({mouthWidth, mouthRadius}) => {
    const mouthArc = d3.arc()
    .innerRadius(mouthRadius)
    .outerRadius(mouthRadius + mouthWidth)
    .startAngle(Math.PI / 2)
    .endAngle(Math.PI * 3/2);
    return React.createElement( 'path', { d: mouthArc() }) 
  };

  const FaceContainer = ({children, width, height, centerX, centerY}) => (
    React.createElement( 'svg', { width: width, height: height },
      React.createElement( 'g', { transform: `translate(${centerX},${centerY})` },
        children
      )  
  	)
    );

  const Face = ({
    width,
    height,
    centerX,
    centerY,
    strokeWidth,
    eyeOffsetX,
    eyeOffsetY,
    eyeRadius,
    mouthWidth,
    mouthRadius
    }) => (
     React.createElement( FaceContainer, {
       width: width, height: height, centerX: centerX, centerY: centerY },
       React.createElement( BackgroundCircle, { 
         radius: centerY-strokeWidth/2, strokeWidth: strokeWidth }),
       React.createElement( Eyes, {
         eyeOffsetX: eyeOffsetX, eyeOffsetY: eyeOffsetY, eyeRadius: eyeRadius }),
       React.createElement( Mouth, { 
         mouthWidth: mouthWidth, mouthRadius: mouthRadius })
     )
    );

  const width = 960;
  const height = 500;


   const App = () => (
    React$1.createElement( Face, {
      width: width, height: height, centerX: width/2, centerY: height/2, strokeWidth: 20, eyeOffsetX: 100, eyeOffsetY: 100, eyeRadius: 40, mouthWidth: 20, mouthRadius: 140 })
   );

  const rootElement = document.getElementById('root');
  ReactDOM.render(React$1.createElement( App, null ), rootElement);

}(React, ReactDOM, d3));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIkJhY2tncm91bmRDaXJjbGUuanMiLCJFeWVzLmpzIiwiTW91dGguanMiLCJGYWNlQ29udGFpbmVyLmpzIiwiRmFjZS5qcyIsImluZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBCYWNrZ3JvdW5kQ2lyY2xlID0gKHtyYWRpdXMsIHN0cm9rZVdpZHRofSkgPT4gKFxuICA8Y2lyY2xlIFxuICAgICAgICByPXtyYWRpdXN9IFxuICAgICAgICBmaWxsPVwieWVsbG93XCJcbiAgICAgICAgc3Ryb2tlPVwiYmxhY2tcIlxuICAgICAgICBzdHJva2Utd2lkdGg9e3N0cm9rZVdpZHRofVxuICAvPlxuKTsiLCJleHBvcnQgY29uc3QgRXllcyA9ICh7ZXllT2Zmc2V0WCxleWVPZmZzZXRZLGV5ZVJhZGl1c30pID0+IChcbiAgPD5cbiAgICA8Y2lyY2xlIFxuICAgICAgY3g9ey1leWVPZmZzZXRYfSBcbiAgICAgIGN5PXstZXllT2Zmc2V0WX1cbiAgICAgIHI9e2V5ZVJhZGl1c31cbiAgICAvPlxuICAgIDxjaXJjbGUgXG4gICAgICBjeD17ZXllT2Zmc2V0WH0gXG4gICAgICBjeT17LWV5ZU9mZnNldFl9XG4gICAgICByPXtleWVSYWRpdXN9XG4gICAgLz5cbiAgPC8+XG4pOyIsImltcG9ydCB7IGFyYyB9IGZyb20gJ2QzJztcblxuZXhwb3J0IGNvbnN0IE1vdXRoID0gKHttb3V0aFdpZHRoLCBtb3V0aFJhZGl1c30pID0+IHtcbiAgY29uc3QgbW91dGhBcmMgPSBhcmMoKVxuICAuaW5uZXJSYWRpdXMobW91dGhSYWRpdXMpXG4gIC5vdXRlclJhZGl1cyhtb3V0aFJhZGl1cyArIG1vdXRoV2lkdGgpXG4gIC5zdGFydEFuZ2xlKE1hdGguUEkgLyAyKVxuICAuZW5kQW5nbGUoTWF0aC5QSSAqIDMvMik7XG4gIHJldHVybiA8cGF0aCBkPXttb3V0aEFyYygpfS8+IFxufTsiLCJleHBvcnQgY29uc3QgRmFjZUNvbnRhaW5lciA9ICh7Y2hpbGRyZW4sIHdpZHRoLCBoZWlnaHQsIGNlbnRlclgsIGNlbnRlcll9KSA9PiAoXG4gIDxzdmcgd2lkdGg9e3dpZHRofSBoZWlnaHQ9e2hlaWdodH0+XG4gICAgPGcgdHJhbnNmb3JtPXtgdHJhbnNsYXRlKCR7Y2VudGVyWH0sJHtjZW50ZXJZfSlgfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2c+ICBcblx0PC9zdmc+XG4gICk7IiwiaW1wb3J0IHtCYWNrZ3JvdW5kQ2lyY2xlfSBmcm9tICcuL0JhY2tncm91bmRDaXJjbGUnXG5pbXBvcnQge0V5ZXN9IGZyb20gJy4vRXllcydcbmltcG9ydCB7TW91dGh9IGZyb20gJy4vTW91dGgnXG5pbXBvcnQge0ZhY2VDb250YWluZXJ9IGZyb20gJy4vRmFjZUNvbnRhaW5lcidcblxuZXhwb3J0IGNvbnN0IEZhY2UgPSAoe1xuICB3aWR0aCxcbiAgaGVpZ2h0LFxuICBjZW50ZXJYLFxuICBjZW50ZXJZLFxuICBzdHJva2VXaWR0aCxcbiAgZXllT2Zmc2V0WCxcbiAgZXllT2Zmc2V0WSxcbiAgZXllUmFkaXVzLFxuICBtb3V0aFdpZHRoLFxuICBtb3V0aFJhZGl1c1xuICB9KSA9PiAoXG4gICA8RmFjZUNvbnRhaW5lclxuICAgICB3aWR0aD17d2lkdGh9XG4gICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICBjZW50ZXJYPXtjZW50ZXJYfVxuICAgICBjZW50ZXJZPXtjZW50ZXJZfVxuICAgPlxuICAgICA8QmFja2dyb3VuZENpcmNsZSBcbiAgICAgICByYWRpdXM9e2NlbnRlclktc3Ryb2tlV2lkdGgvMn1cbiAgICAgICBzdHJva2VXaWR0aD17c3Ryb2tlV2lkdGh9XG4gICAgIC8+XG4gICAgIDxFeWVzXG4gICAgICAgZXllT2Zmc2V0WD17ZXllT2Zmc2V0WH1cbiAgICAgICBleWVPZmZzZXRZPXtleWVPZmZzZXRZfVxuICAgICAgIGV5ZVJhZGl1cz17ZXllUmFkaXVzfVxuICAgICAvPlxuICAgICA8TW91dGggXG4gICAgICAgbW91dGhXaWR0aD17bW91dGhXaWR0aH1cbiAgICAgICBtb3V0aFJhZGl1cz17bW91dGhSYWRpdXN9XG4gICAgIC8+XG4gICA8L0ZhY2VDb250YWluZXI+XG4gICk7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuXG5cbmltcG9ydCB7RmFjZX0gZnJvbSAnLi9GYWNlJ1xuXG5jb25zdCB3aWR0aCA9IDk2MDtcbmNvbnN0IGhlaWdodCA9IDUwMDtcblxuXG4gY29uc3QgQXBwID0gKCkgPT4gKFxuICA8RmFjZVxuICAgIHdpZHRoID0ge3dpZHRofVxuICAgIGhlaWdodCA9IHtoZWlnaHR9XG4gICAgY2VudGVyWCA9IHt3aWR0aC8yfVxuICAgIGNlbnRlclkgPSB7aGVpZ2h0LzJ9XG4gICAgc3Ryb2tlV2lkdGggPSB7MjB9XG4gICAgZXllT2Zmc2V0WCA9IHsxMDB9XG4gICAgZXllT2Zmc2V0WSA9IHsxMDB9XG4gICAgZXllUmFkaXVzID0gezQwfVxuICAgIG1vdXRoV2lkdGggPSB7MjB9XG4gICAgbW91dGhSYWRpdXMgPSB7MTQwfVxuICAgIC8+XG4gKTtcblxuY29uc3Qgcm9vdEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpO1xuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIHJvb3RFbGVtZW50KTsiXSwibmFtZXMiOlsiYXJjIiwiUmVhY3QiXSwibWFwcGluZ3MiOiI7Ozs7OztFQUFPLE1BQU0sZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxXQUFXLENBQUM7RUFDdEQsRUFBRTtFQUNGLFFBQVEsR0FBRyxNQUFPLEVBQ1YsTUFBSyxRQUFRLEVBQ2IsUUFBTyxPQUFPLEVBQ2QsZ0JBQWMsYUFBWSxDQUM5QjtFQUNKLENBQUM7O0VDUE0sTUFBTSxJQUFJLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDO0VBQ3RELEVBQUU7RUFDRixJQUFJO0VBQ0osTUFBTSxJQUFJLENBQUMsVUFBVyxFQUNoQixJQUFJLENBQUMsVUFBVyxFQUNoQixHQUFHLFdBQVU7RUFFbkIsSUFBSTtFQUNKLE1BQU0sSUFBSSxVQUFXLEVBQ2YsSUFBSSxDQUFDLFVBQVcsRUFDaEIsR0FBRyxXQUFVLENBQ2I7RUFDTixHQUFLO0VBQ0wsQ0FBQzs7RUNYTSxNQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsVUFBVSxFQUFFLFdBQVcsQ0FBQyxLQUFLO0VBQ3BELEVBQUUsTUFBTSxRQUFRLEdBQUdBLE1BQUcsRUFBRTtFQUN4QixHQUFHLFdBQVcsQ0FBQyxXQUFXLENBQUM7RUFDM0IsR0FBRyxXQUFXLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQztFQUN4QyxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztFQUMxQixHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUMzQixFQUFFLE9BQU8sK0JBQU0sR0FBRyxRQUFRLElBQUcsQ0FBRTtFQUMvQixDQUFDOztFQ1RNLE1BQU0sYUFBYSxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDO0VBQ3pFLEVBQUUsOEJBQUssT0FBTyxLQUFNLEVBQUMsUUFBUTtFQUM3QixJQUFJLDRCQUFHLFdBQVcsQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztFQUNuRCxNQUFPLFFBQVM7RUFDaEIsS0FBUTtFQUNSLEVBQU87RUFDUCxHQUFHOztFQ0RJLE1BQU0sSUFBSSxHQUFHLENBQUM7RUFDckIsRUFBRSxLQUFLO0VBQ1AsRUFBRSxNQUFNO0VBQ1IsRUFBRSxPQUFPO0VBQ1QsRUFBRSxPQUFPO0VBQ1QsRUFBRSxXQUFXO0VBQ2IsRUFBRSxVQUFVO0VBQ1osRUFBRSxVQUFVO0VBQ1osRUFBRSxTQUFTO0VBQ1gsRUFBRSxVQUFVO0VBQ1osRUFBRSxXQUFXO0VBQ2IsR0FBRztFQUNILEdBQUcscUJBQUM7RUFDSixLQUFLLE9BQU8sS0FBTSxFQUNiLFFBQVEsTUFBTyxFQUNmLFNBQVMsT0FBUSxFQUNqQixTQUFTO0VBRWQsS0FBSyxxQkFBQztFQUNOLE9BQU8sUUFBUSxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUUsRUFDOUIsYUFBYSxhQUFZO0VBRWhDLEtBQUsscUJBQUM7RUFDTixPQUFPLFlBQVksVUFBVyxFQUN2QixZQUFZLFVBQVcsRUFDdkIsV0FBVyxXQUFVO0VBRTVCLEtBQUsscUJBQUM7RUFDTixPQUFPLFlBQVksVUFBVyxFQUN2QixhQUFhLGFBQVksQ0FDekI7RUFDUCxJQUFtQjtFQUNuQixHQUFHOztFQy9CSCxNQUFNLEtBQUssR0FBRyxHQUFHLENBQUM7RUFDbEIsTUFBTSxNQUFNLEdBQUcsR0FBRyxDQUFDO0FBQ25CO0FBQ0E7RUFDQSxDQUFDLE1BQU0sR0FBRyxHQUFHO0VBQ2IsRUFBRUMsdUJBQUM7RUFDSCxJQUFJLE9BQVMsS0FBTSxFQUNmLFFBQVUsTUFBTyxFQUNqQixTQUFXLEtBQUssQ0FBQyxDQUFFLEVBQ25CLFNBQVcsTUFBTSxDQUFDLENBQUUsRUFDcEIsYUFBZSxFQUFHLEVBQ2xCLFlBQWMsR0FBSSxFQUNsQixZQUFjLEdBQUksRUFDbEIsV0FBYSxFQUFHLEVBQ2hCLFlBQWMsRUFBRyxFQUNqQixhQUFlLEtBQUksQ0FDakI7RUFDTixFQUFFLENBQUM7QUFDSDtFQUNBLE1BQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7RUFDcEQsUUFBUSxDQUFDLE1BQU0sQ0FBQ0EsdUJBQUMsU0FBRyxFQUFHLEVBQUUsV0FBVyxDQUFDOzs7OyJ9