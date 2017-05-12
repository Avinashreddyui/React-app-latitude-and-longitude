var React = require('react');
var img1 = require('../../public/Assets/pinImage.png');

var Main = React.createClass({
   handleNewValues:function (position) {
       this.props.getCoords(position.coords);
   },
    handleSearch:function(e) {
        e.preventDefault();
        navigator.geolocation.getCurrentPosition(this.handleNewValues);
        },

    render:function () {
       return(
           <div>
               <img width='20px' height='20px' src={img1} onClick={this.handleSearch} />
           </div>
       );
   }
});
module.exports = Main;