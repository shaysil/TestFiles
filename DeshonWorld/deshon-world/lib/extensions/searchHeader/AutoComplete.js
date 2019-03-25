var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
var _this = this;
import React from 'react';
import PropTypes from 'prop-types';
import deburr from 'lodash/deburr';
import Autosuggest from 'react-autosuggest';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import { withStyles } from '@material-ui/core/styles';
var suggestions = [
    { label: 'Afghanistan' },
    { label: 'Aland Islands' },
    { label: 'Albania' },
    { label: 'Algeria' },
    { label: 'American Samoa' },
    { label: 'Andorra' },
    { label: 'Angola' },
    { label: 'Anguilla' },
    { label: 'Antarctica' },
    { label: 'Antigua and Barbuda' },
    { label: 'Argentina' },
    { label: 'Armenia' },
    { label: 'Aruba' },
    { label: 'Australia' },
    { label: 'Austria' },
    { label: 'Azerbaijan' },
    { label: 'Bahamas' },
    { label: 'Bahrain' },
    { label: 'Bangladesh' },
    { label: 'Barbados' },
    { label: 'Belarus' },
    { label: 'Belgium' },
    { label: 'Belize' },
    { label: 'Benin' },
    { label: 'Bermuda' },
    { label: 'Bhutan' },
    { label: 'Bolivia, Plurinational State of' },
    { label: 'Bonaire, Sint Eustatius and Saba' },
    { label: 'Bosnia and Herzegovina' },
    { label: 'Botswana' },
    { label: 'Bouvet Island' },
    { label: 'Brazil' },
    { label: 'British Indian Ocean Territory' },
    { label: 'Brunei Darussalam' },
];
function renderInputComponent(inputProps) {
    var classes = inputProps.classes, _a = inputProps.inputRef, inputRef = _a === void 0 ? function () { } : _a, ref = inputProps.ref, other = __rest(inputProps, ["classes", "inputRef", "ref"]);
    return fullWidth;
    InputProps = {};
    {
        inputRef: (function (node) {
            ref(node);
            inputRef(node);
        },
            classes);
        {
            input: classes.input,
            ;
        }
    }
}
{
    other;
}
/>;
;
function renderSuggestion(suggestion, _a) {
    var query = _a.query, isHighlighted = _a.isHighlighted;
    var matches = match(suggestion.label, query);
    var parts = parse(suggestion.label, matches);
    return selected = { isHighlighted: isHighlighted };
    component = "div" >
        { parts: .map(function (part, index) {
                return part.highlight ? key = {} : style = {};
            }, { fontWeight: 500 }) } >
        { part: .text }
        < /span>;
    key = {};
    style = {};
    {
        fontWeight: 300;
    }
}
 >
    { part: .text }
    < /strong>;
/div>
    < /MenuItem>;
;
function getSuggestions(value) {
    var inputValue = deburr(value.trim()).toLowerCase();
    var inputLength = inputValue.length;
    var count = 0;
    return inputLength === 0
        ? []
        : suggestions.filter(function (suggestion) {
            var keep = count < 5 && suggestion.label.slice(0, inputLength).toLowerCase() === inputValue;
            if (keep) {
                count += 1;
            }
            return keep;
        });
}
function getSuggestionValue(suggestion) {
    return suggestion.label;
}
var styles = function (theme) { return ({
    root: {
        height: 250,
        flexGrow: 1,
    },
    container: {
        position: 'relative',
    },
    suggestionsContainerOpen: {
        position: 'absolute',
        zIndex: 1,
        marginTop: theme.spacing.unit,
        left: 0,
        right: 0,
    },
    suggestion: {
        display: 'block',
    },
    suggestionsList: {
        margin: 0,
        padding: 0,
        listStyleType: 'none',
    },
    divider: {
        height: theme.spacing.unit * 2,
    },
}); };
var IntegrationAutosuggest = (function (_super) {
    __extends(IntegrationAutosuggest, _super);
    function IntegrationAutosuggest() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            single: '',
            popper: '',
            suggestions: [],
        };
        _this.handleSuggestionsFetchRequested = function (_a) {
            var value = _a.value;
            _this.setState({
                suggestions: getSuggestions(value),
            });
        };
        _this.handleSuggestionsClearRequested = function () {
            _this.setState({
                suggestions: [],
            });
        };
        _this.handleChange = function (name) { return function (event, _a) {
            var newValue = _a.newValue;
            _this.setState((_b = {},
                _b[name] = newValue,
                _b));
            var _b;
        }; };
        _this.theme = {};
        return _this;
    }
    IntegrationAutosuggest.prototype.render = function () {
        var classes = this.props.classes;
        var autosuggestProps = {
            renderInputComponent: renderInputComponent,
            suggestions: this.state.suggestions,
            onSuggestionsFetchRequested: this.handleSuggestionsFetchRequested,
            onSuggestionsClearRequested: this.handleSuggestionsClearRequested,
            getSuggestionValue: getSuggestionValue,
            renderSuggestion: renderSuggestion,
        };
        return className = { classes: .root } >
            __assign({}, autosuggestProps);
        inputProps = {};
        {
            classes,
                placeholder;
            'Search a country (start with a)',
                value;
            this.state.single,
                onChange;
            this.handleChange('single'),
            ;
        }
    };
    return IntegrationAutosuggest;
}(React.Component));
{
    container: classes.container,
        suggestionsContainerOpen;
    classes.suggestionsContainerOpen,
        suggestionsList;
    classes.suggestionsList,
        suggestion;
    classes.suggestion,
    ;
}
renderSuggestionsContainer = { options: function () { return (__assign({}, options.containerProps)); }, square:  >
        { options: .children }
        < /Paper>
}
    /  >
    className;
{
    classes.divider;
}
/>
    < Autosuggest;
{
    autosuggestProps;
}
inputProps = {};
{
    classes,
        label;
    'Label',
        placeholder;
    'With Popper',
        value;
    this.state.popper,
        onChange;
    this.handleChange('popper'),
        inputRef;
    (function (node) {
        _this.popperNode = node;
    },
        InputLabelProps);
    {
        shrink: true,
        ;
    }
}
theme = {};
{
    suggestionsList: classes.suggestionsList,
        suggestion;
    classes.suggestion,
    ;
}
renderSuggestionsContainer = { options: function () { return anchorEl = { this: .popperNode }; }, open: open };
{
    options.containerProps;
}
style = {};
{
    width: this.popperNode ? this.popperNode.clientWidth : null;
}
    >
        { options: .children }
    < /Paper>
    < /Popper>;
/>
    < /div>;
;
IntegrationAutosuggest.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(IntegrationAutosuggest);
//# sourceMappingURL=AutoComplete.js.map