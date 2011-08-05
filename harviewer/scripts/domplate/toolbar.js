/* See license.txt for terms of usage */

require.def("domplate/toolbar", [
    "domplate/domplate",
    "core/lib",
    "core/trace"
],

function(Domplate, Lib, Trace) { with (Domplate) {

//*************************************************************************************************

/**
 * @domplate Represents a toolbar widget.
 */
var ToolbarTempl = domplate(
/** @lends Toolbar */
{
    tag:
        DIV({"class": "toolbar", onclick: "$onClick"}),

    buttonTag:
        SPAN({"class": "$button|getClassName toolbarButton", title: "$button.tooltiptext",
            $text: "$button|hasLabel", onclick: "$button|getCommand"},
            "$button|getLabel"
        ),

    separatorTag:
        SPAN({"class": "toolbarSeparator", style: "color: gray;"}, "|"),

    hasLabel: function(button)
    {
        return button.label ? true : false;
    },

    getLabel: function(button)
    {
        return button.label ? button.label : "";
    },

    getClassName: function(button)
    {
        return button.className ? button.className : "";
    },

    getCommand: function(button)
    {
        return button.command ? button.command : function() {};
    },

    onClick: function(event)
    {
        var e = $.event.fix(event || window.event);

        // Cancel button clicks so they are not propagated further.
        Lib.cancelEvent(e);
    }
});

// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

function Toolbar()
{
    this.buttons = [];
}

Toolbar.prototype =
{
    addButton: function(button)
    {
        if (!button.tooltiptext)
            tooltiptext = "";
        this.buttons.push(button);
    },

    removeButton: function(buttonId)
    {
        for (var i=0; i<this.buttons.length; i++)
        {
            if (this.buttons[i].id == buttonId)
            {
                this.buttons.splice(i, 1);
                break;
            }
        }
    },

    addButtons: function(buttons)
    {
        for (var i=0; i<buttons.length; i++)
            this.addButton(buttons[i]);
    },

    getButton: function(buttonId)
    {
        for (var i=0; i<this.buttons.length; i++)
        {
            if (this.buttons[i].id == buttonId)
                return this.buttons[i];
        }
    },

    render: function(parentNode)
    {
        // Don't render if there are no buttons. Note that buttons can be removed
        // as part of viewer customization.
        if (!this.buttons.length)
            return;

        // Use the same parent as before if just re-rendering.
        if (this.element)
            parentNode = this.element.parentNode;

        this.element = ToolbarTempl.tag.replace({}, parentNode);
        for (var i=0; i<this.buttons.length; i++)
        {
            var button = this.buttons[i];
            var tag = button.tag ? button.tag : ToolbarTempl.buttonTag;
            tag.append({button: button}, this.element);

            if (i<this.buttons.length-1)
                ToolbarTempl.separatorTag.append({}, this.element);
        }

        return this.element;
    }
};

return Toolbar;

// ************************************************************************************************
}});
