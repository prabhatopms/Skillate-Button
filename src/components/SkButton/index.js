import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import FAIcon from '../FAIcon';

import * as buttonStyle from './button.js';
import { MiniLoader } from '../Loader';
import { hasPermission } from 'utils/hasPermission';

const propTypes = {
  category: PropTypes.string,
  isSuccess: PropTypes.bool,
  iconAlign: PropTypes.string,
  iconName: PropTypes.string,
  iconColor: PropTypes.string,
  iconType: PropTypes.string,
  href: PropTypes.string,
  width: PropTypes.string,
  minWidth: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  isDanger: PropTypes.bool,
  innerRef: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func,
    PropTypes.string
  ]),
  className: PropTypes.string
};

const defaultProps = {
  category: 'secondary-white',
  iconAlign: 'left',
  width: 'auto',
  iconType: 'far'
};

class SkButton extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    if (this.props.disabled) {
      e.preventDefault();
      return;
    }
    if (this.props.onClick) {
      this.props.onClick(e);
    }
  }

  render() {
    let {
      category,
      loading,
      iconAlign,
      iconName,
      width,
      minWidth,
      isSuccess,
      tag: Tag,
      innerRef,
      className,
      disabled,
      isDanger,
      iconColor,
      iconType,
      height,
      style,
      permission,
      ...attributes
    } = this.props;
    if (permission && !hasPermission(permission)) return null;

    let classes = classNames(className, buttonStyle.btn, {
      [buttonStyle.btn_primary]: category === 'primary' && !disabled,
      [buttonStyle.btn_secondary_white]:
        category === 'secondary-white' && !disabled,
      [buttonStyle.btn_secondary_grey]:
        category === 'secondary-grey' && !disabled,
      [buttonStyle.btn_borderless]: category === 'borderless' && !disabled,
      [buttonStyle.btn_skeleton]: category === 'skeleton' && !disabled,
      [buttonStyle.btn_loader]: loading && !disabled,
      [buttonStyle.disabled]: disabled
    });

    let ContainerClasses = classNames({
      [buttonStyle.alignContainer]: iconName,
      [buttonStyle.alignContainerTextOnly]: !iconName,
      [buttonStyle.color_danger]: isDanger,
      [buttonStyle.color_success]: isSuccess
    });

    let loaderColor = category === 'primary' ? 'white' : 'grey';
    let fixedWidth = attributes.children ? false : true;

    const renderText = [
      <React.Fragment key="text">
        {attributes.children && (
          <div className={buttonStyle.iconTextJustify}>
            {loading && !iconName && <MiniLoader color={loaderColor} />}
            {!loading && attributes.children}
            {loading && iconName && attributes.children}
          </div>
        )}
      </React.Fragment>
    ];

    if (iconAlign && iconName) {
      const renderIcon = (
        <React.Fragment key="icon">
          {(loading || iconName) && (
            <div className={buttonStyle.iconTextJustify}>
              {loading && <MiniLoader color={loaderColor} />}
              {!loading && iconName && (
                <FAIcon
                  size="1x"
                  name={iconName}
                  color={iconColor}
                  fixedWidth={fixedWidth}
                  type={iconType}
                />
              )}
            </div>
          )}
        </React.Fragment>
      );
      const padding = <div key="padding" className={buttonStyle.padding} />;
      if (iconAlign === 'right' && attributes.children) {
        renderText.push(padding);
        renderText.push(renderIcon);
      } else {
        if (iconAlign === 'left' && attributes.children) {
          renderText.unshift(padding);
          renderText.unshift(renderIcon);
        } else {
          renderText.push(renderIcon);
        }
      }
    }
    if (attributes.href) {
      return (
        <Link
          {...attributes}
          className={classes}
          style={{ width: width, minWidth: minWidth, ...style }}
          to={attributes.href}
          disabled={disabled}
        >
          <div className={ContainerClasses}>{renderText}</div>
        </Link>
      );
    }

    return (
      <button
        {...attributes}
        className={classes}
        style={{
          width: width,
          minWidth: minWidth,
          height: height,
          alignItems: 'center',
          ...style
        }}
        ref={innerRef}
        onClick={this.onClick}
        disabled={disabled}
      >
        <div className={ContainerClasses}>{renderText}</div>
      </button>
    );
  }
}

SkButton.propTypes = propTypes;
SkButton.defaultProps = defaultProps;

export default SkButton;
