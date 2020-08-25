import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
const DEFAULT_COLOR = 'red';

class RadialChart extends Component {
  state = {};
  componentDidMount() {
    // For initial animation
    setTimeout(() => {
      this.setState({ setStrokeLength: true });
    },1000);
  }
  render() {
    const { setStrokeLength } = this.state;
    const {
      className,
      radius,
      progress,
      strokeWidth,
      dimension,
      color,

    } = this.props;

    const circleRadius = Math.min(radius, 85);
    const circumference = 2 * 3.14 * circleRadius;
    const strokeLength = setStrokeLength ? (circumference / 100) * progress : 0;
    return (
      <div
        className={classNames('radial-chart', className, {
          'no-progress': strokeLength === 0,
        })}
      >
        <svg viewBox="0 0 180 180" width={dimension} height={dimension}>
          <circle
            className="radial-chart-total"
            stroke={'grey'}
            strokeWidth={strokeWidth}
            fill="none"
            cx="90"
            cy="90"
            r={circleRadius}
          />
          <circle
            className="radial-chart-progress"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeDasharray={`${strokeLength},${circumference}`}
            strokeLinecap="round"
            fill="none"
            cx="90"
            cy="90"
            transform ="rotate(-90, 90,90)"
            r={circleRadius}

          />
          <text
            x="50%"
            y="40%"
            textAnchor="middle"
            dy=".3em"
            fill="white"
            className="caps"
          >
            Accuracy
          </text>

          <text
            x="50%"
            y="60%"
            textAnchor="middle"
            fill="white"
            dy=".3em"
            fontSize="30"
            className="bold"
          >
            {progress}
          </text>
          <text x="65%" y="60%" textAnchor="middle" fill="grey" dy=".3em" className="bold" fontSize="15">
            %
          </text>
        </svg>
      </div>
    );
  }
}
RadialChart.defaultProps = {
  radius: 80,
  progress: 50,
  strokeWidth: 5,
  dimension: 180,
  color: DEFAULT_COLOR,
};
RadialChart.propTypes = {
  className: PropTypes.string,
  radius: PropTypes.number,
  strokeWidth: PropTypes.number,
  color: PropTypes.string,
  progress: PropTypes.number,
  dimension: PropTypes.number,
};
export default RadialChart;
