import React, {Component} from "react";
import Button from '@mui/material/Button';
import PropTypes from "prop-types";

class GDSEButton extends Component{
    static propTypes= {
        onClick: PropTypes.func,
        children:PropTypes.node,
        variant:PropTypes.string,
        className:PropTypes.any,
        label:PropTypes.string,
        size:PropTypes.string,
        disable:PropTypes.string,
        color:PropTypes.bool,
        type:PropTypes.string,
        endIcon:PropTypes.string,
        startIcon:PropTypes.string
    }

    static defaultProps={
        className:"",
        color:"primary",
        label:"",
        size:"medium",
        variant:"contained",
        disable:false,
        type:"button"
    }

    handButtonClick=(event)=>{
        const {onClick, disabled}=this.props;
        if (disabled) return;
        onClick && onClick({event});
    }

    renderChildren=(label,children)=>{
        if (label) return label;
        if (children) return children;
    }

    render() {
        const {
            children,
            label,
            className,
            color,
            size,
            type,
            variant,
            disable,
            startIcon,
            endIcon,
            style,
        }=this.props;

        return (
            <Button
                className={className}
                size={size}
                endIcon={endIcon}
                variant={variant}
                disabled={disable}
                color={color}
                type={type}
                onClick={this.handButtonClick}
                style={style}
            >
                {this.renderChildren(label,children)}
            </Button>
        )
    }
}

export default GDSEButton;