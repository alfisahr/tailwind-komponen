'use strict';

var _extends = require('@babel/runtime/helpers/extends');
var React = require('react');
var PropTypes = require('prop-types');
var styled = require('styled-components');
var polished = require('polished');
var nanoid$1 = require('nanoid');

const SECONDARY_COLOR = "#CED4DA";
const SECONDARY_TEXT_COLOR = "#000";
const PRIMARY_COLOR = "#0a58ca";
const PRIMARY_TEXT_COLOR = "#fff";
const DANGER_COLOR = "#dc3545";
const DANGER_TEXT_COLOR = "#FFF";
const DISABLED_OPACITY = 0.65;

const colorStyles = p => {
  let color = SECONDARY_TEXT_COLOR,
    backgroundColor = SECONDARY_COLOR;
  if (p.variant === "primary") {
    color = PRIMARY_TEXT_COLOR;
    backgroundColor = PRIMARY_COLOR;
  } else if (p.variant === "danger") {
    color = DANGER_TEXT_COLOR;
    backgroundColor = DANGER_COLOR;
  }
  return styled.css(["color:", ";background-color:", ";border-color:", ";&:focus-visible{border-color:", ";box-shadow:0 0 0 0.2rem ", ";}"], color, backgroundColor, backgroundColor, color, polished.transparentize(0.45, backgroundColor));
};
const StyledButton = styled("button").withConfig({
  shouldForwardProp: p => !["isFullWidth"].includes(p)
}).withConfig({
  displayName: "styles__StyledButton",
  componentId: "sc-19x7vti-0"
})(["cursor:pointer;display:", ";width:", ";font-weight:400;text-align:center;vertical-align:middle;user-select:none;border:1px solid transparent;padding:", ";font-size:", ";line-height:1.5;border-radius:0;transition:all 0.15s ease-in-out;&:focus{outline:0;}&:disabled{cursor:inherit;opacity:", ";}", ""], p => p.isFullWidth ? "block" : "inline-block", p => p.isFullWidth && "100%", p => {
  if (p.size === "large") {
    return "0.5rem 1rem";
  } else if (p.size === "small") {
    return "0.25rem 0.5rem";
  }
  return "0.4rem 0.75rem";
}, p => {
  if (p.size === "large") {
    return "1.25rem";
  } else if (p.size === "small") {
    return "0.875rem";
  }
  return "1rem";
}, DISABLED_OPACITY, colorStyles);

const Button = /*#__PURE__*/React.forwardRef((_ref, ref) => {
  let {
    children,
    variant,
    size,
    isFullWidth,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement(StyledButton, _extends({
    ref: ref,
    variant: variant,
    size: size,
    isFullWidth: isFullWidth,
    type: "button"
  }, props), children);
});
Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary", "danger"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  isFullWidth: PropTypes.bool
};
Button.defaultProps = {
  variant: "secondary",
  size: "medium",
  isFullWidth: false
};
Button.displayName = "Button";

const nanoid = nanoid$1.customAlphabet("1234567890abcdef", 10);
const useUniqueID = () => {
  const [id] = React.useState(nanoid());
  return id;
};

const FieldContext = /*#__PURE__*/React.createContext(undefined);

const StyledLabel = styled.label.withConfig({
  displayName: "styles__StyledLabel",
  componentId: "sc-oi3aou-0"
})(["font-weight:500;margin-bottom:0.4rem;"]);
const StyledInput = styled.input.withConfig({
  displayName: "styles__StyledInput",
  componentId: "sc-oi3aou-1"
})(["display:block;width:100%;padding:0.5rem 0.4rem;font-size:1rem;line-height:1.5;color:", ";background-color:transparent;border:1px solid ", ";appearance:none;border-radius:0;transition:all 0.15s ease-in-out;&:focus{outline:none;border-color:", ";box-shadow:0 0 0 0.2rem ", ";}&:disabled{background-color:", ";opacity:", ";}"], SECONDARY_TEXT_COLOR, SECONDARY_COLOR, PRIMARY_COLOR, polished.transparentize(0.75, PRIMARY_COLOR), SECONDARY_COLOR, DISABLED_OPACITY);
const StyledTextarea = styled("textarea").withConfig({
  shouldForwardProp: p => !["isResizable"].includes(p)
}).attrs({
  as: "textarea"
}).withConfig({
  displayName: "styles__StyledTextarea",
  componentId: "sc-oi3aou-2"
})(["resize:", ";"], props => !props.isResizable && "none");

const Label = /*#__PURE__*/React.forwardRef((props, ref) => {
  const id = React.useContext(FieldContext);
  return /*#__PURE__*/React.createElement(StyledLabel, _extends({
    ref: ref,
    htmlFor: id
  }, props));
});
Label.displayName = "Field.Label";

const Input = /*#__PURE__*/React.forwardRef((props, ref) => {
  const id = React.useContext(FieldContext);
  return /*#__PURE__*/React.createElement(StyledInput, _extends({
    ref: ref,
    id: id
  }, props));
});
Input.displayName = "Field.Input";

const Textarea = /*#__PURE__*/React.forwardRef((_ref, ref) => {
  let {
    isResizable,
    ...props
  } = _ref;
  const id = React.useContext(FieldContext);
  return /*#__PURE__*/React.createElement(StyledTextarea, _extends({
    ref: ref,
    id: id,
    isResizable: isResizable
  }, props));
});
Textarea.displayName = "Field.Textarea";
Textarea.defaultProps = {
  isResizable: true
};
Textarea.propTypes = {
  isResizable: PropTypes.bool
};

const Field = _ref => {
  let {
    children
  } = _ref;
  const id = useUniqueID();
  return /*#__PURE__*/React.createElement(FieldContext.Provider, {
    value: id
  }, children);
};
Field.Label = Label;
Field.Input = Input;
Field.Textarea = Textarea;

exports.Button = Button;
exports.Field = Field;
