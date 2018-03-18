import React from 'react';
import assign from 'domkit/appendVendorPrefix';
import insertKeyframesRule from 'domkit/insertKeyframesRule';
import PropTypes from "prop-types";

/**
 * @type {Object}
 */
let keyframes = {
  "0%": {
    transform: "rotate(0deg)"
  },
  "50%": {
    transform: "rotate(180deg)"
  },
  "100%": {
    transform: "rotate(360deg)"
  }
};

/**
 * @type {String}
 */
let animationName = insertKeyframesRule(keyframes);

class Loader extends React.Component {
  static propTypes = {
    color: PropTypes.string,
    loading: PropTypes.bool,
    margin: PropTypes.string,
    size: PropTypes.string
  };

  static defaultPropsTypes = {
    color: "#fff",
    loading: true,
    size: "15px",
    margin: "2px"
  };

  /**
   * @return {Object}
   */
  getBallStyle() {
    const { color, margin, size, verticalAlign } = this.props;
    return {
      backgroundColor: color,
      borderRadius: "100%",
      height: size,
      margin: margin,
      verticalAlign: verticalAlign,
      width: size,
    };
  }

  /**
   * @param  {Number}
   * @return {Object}
   */
  getAnimationStyle(i) {
    let animation = [
      animationName,
      "1s",
      "0s",
      "infinite",
      "cubic-bezier(.7,-.13,.22,.86)"
    ].join(" ");

    let animationFillMode = "both";

    return {
      animation: animation,
      animationFillMode: animationFillMode
    };
  }

  /**
   * @param {Number}
   * @return {Object}
   */
  getStyle(i) {
    if (i) {
      return assign(this.getBallStyle(i), {
        left: i % 2 ? -28 : 25,
        opacity: "0.8",
        position: "absolute",
        top: 0,
      });
    }

    return assign(this.getBallStyle(i), this.getAnimationStyle(i), {
      display: "inline-block",
      position: "relative"
    });
  }

  /**
   * @param  {Boolean} loading
   * @return {ReactComponent || null}
   */
  renderLoader(loading) {
    const { className, id } = this.props;
    if (loading) {
      return (
        <div id={id} className={className}>
          <div style={this.getStyle()}>
            <div style={this.getStyle(1)} />
            <div style={this.getStyle(2)} />
          </div>
        </div>
      );
    }

    return null;
  }

  render() {
    return this.renderLoader(this.props.loading);
  }
}

export default Loader;
