window.CMB2=window.CMB2||{},function(e,t,$,i,a){"use strict";var r,n=e.cmb2_l10,o=e.setTimeout,d=function(e){return $(t.getElementById(e))},c={idNumber:!1,repeatEls:'input:not([type="button"],[id^=filelist]),select,textarea,.cmb2-media-status',noEmpty:'input:not([type="button"]):not([type="radio"]):not([type="checkbox"]),textarea',repeatUpdate:'input:not([type="button"]),select,textarea,label',styleBreakPoint:450,mediaHandlers:{},defaults:{time_picker:n.defaults.time_picker,date_picker:n.defaults.date_picker,color_picker:n.defaults.color_picker||{}},media:{frames:{}}};i.metabox=function(){return i.$metabox?i.$metabox:(i.$metabox=$(".cmb2-wrap > .cmb2-metabox"),i.$metabox)},i.init=function(){r=$(t),$.extend(i,c),i.trigger("cmb_pre_init");var a=i.metabox(),l=a.find(".cmb-repeatable-group");i.initPickers(a.find('input[type="text"].cmb2-timepicker'),a.find('input[type="text"].cmb2-datepicker'),a.find('input[type="text"].cmb2-colorpicker')),$('<p><span class="button cmb-multicheck-toggle">'+n.strings.check_toggle+"</span></p>").insertBefore(".cmb2-checkbox-list:not(.no-select-all)"),i.makeListSortable(),a.on("change",".cmb2_upload_file",function(){i.media.field=$(this).attr("id"),d(i.media.field+"_id").val("")}).on("click",".cmb-multicheck-toggle",i.toggleCheckBoxes).on("click",".cmb2-upload-button",i.handleMedia).on("click",".cmb-attach-list li, .cmb2-media-status .img-status img, .cmb2-media-status .file-status > span",i.handleFileClick).on("click",".cmb2-remove-file-button",i.handleRemoveMedia).on("click",".cmb-add-group-row",i.addGroupRow).on("click",".cmb-add-row-button",i.addAjaxRow).on("click",".cmb-remove-group-row",i.removeGroupRow).on("click",".cmb-remove-row-button",i.removeAjaxRow).on("keyup paste focusout",".cmb2-oembed",i.maybeOembed).on("cmb2_remove_row",".cmb-repeatable-group",i.resetTitlesAndIterator).on("click",".cmbhandle, .cmbhandle + .cmbhandle-title",i.toggleHandle),l.length&&l.filter(".sortable").each(function(){$(this).find(".button.cmb-remove-group-row").before('<a class="button cmb-shift-rows move-up alignleft" href="#"><span class="'+n.up_arrow_class+'"></span></a> <a class="button cmb-shift-rows move-down alignleft" href="#"><span class="'+n.down_arrow_class+'"></span></a>')}).on("click",".cmb-shift-rows",i.shiftRows).on("cmb2_add_row",i.emptyValue),o(i.resizeoEmbeds,500),$(e).on("resize",i.resizeoEmbeds),i.trigger("cmb_init")},i.resetTitlesAndIterator=function(e){e.group&&$(".cmb-repeatable-group").each(function(){var e=$(this);e.find(".cmb-repeatable-grouping").each(function(t){var i=$(this);i.data("iterator",t),i.find(".cmb-group-title h4").text(e.find(".cmb-add-group-row").data("grouptitle").replace("{#}",t+1))})})},i.toggleHandle=function(e){e.preventDefault(),i.trigger("postbox-toggled",$(this).parent(".postbox").toggleClass("closed"))},i.toggleCheckBoxes=function(e){e.preventDefault();var t=$(this),i=t.closest(".cmb-td").find("input[type=checkbox]:not([disabled])");t.data("checked")?(i.prop("checked",!1),t.data("checked",!1)):(i.prop("checked",!0),t.data("checked",!0))},i.handleMedia=function(e){e.preventDefault();var t=$(this);i.attach_id=!t.hasClass("cmb2-upload-list")&&t.closest(".cmb-td").find(".cmb2-upload-file-id").val(),i.attach_id="0"!==i.attach_id&&i.attach_id,i._handleMedia(t.prev("input.cmb2-upload-file").attr("id"),t.hasClass("cmb2-upload-list"))},i.handleFileClick=function(e){e.preventDefault();var t=$(this),a=t.closest(".cmb-td"),r=a.find(".cmb2-upload-button").hasClass("cmb2-upload-list");i.attach_id=r?t.find('input[type="hidden"]').data("id"):a.find(".cmb2-upload-file-id").val(),i.attach_id&&i._handleMedia(a.find("input.cmb2-upload-file").attr("id"),r,i.attach_id)},i._handleMedia=function(e,t){if(wp){var a=i.media;a.field=e,a.$field=d(a.field),a.fieldData=a.$field.data(),a.previewSize=a.fieldData.previewsize,a.fieldName=a.$field.attr("name"),a.isList=t;var r,o;if(a.field in a.frames)return void a.frames[a.field].open();a.frames[a.field]=wp.media({title:i.metabox().find("label[for="+a.field+"]").text(),library:a.fieldData.queryargs||{},button:{text:n.strings[t?"upload_files":"upload_file"]},multiple:!!t&&"add"}),i.trigger("cmb_media_modal_init",a),i.mediaHandlers.list=function(e,t){o=e.toJSON(),a.$field.val(o.url),d(a.field+"_id").val(o.id);var i=[];return $(o).each(function(){if(this.type&&"image"===this.type){var e=a.previewSize[0]?a.previewSize[0]:50,t=a.previewSize[1]?a.previewSize[1]:50;r='<li class="img-status"><img width="'+e+'" height="'+t+'" src="'+this.url+'" class="attachment-'+e+"px"+t+'px" alt="'+this.filename+'"><p><a href="#" class="cmb2-remove-file-button" rel="'+a.field+"["+this.id+']">'+n.strings.remove_image+'</a></p><input type="hidden" id="filelist-'+this.id+'" data-id="'+this.id+'" name="'+a.fieldName+"["+this.id+']" value="'+this.url+'"></li>'}else r='<li class="file-status"><span>'+n.strings.file+" <strong>"+this.filename+'</strong></span>&nbsp;&nbsp; (<a href="'+this.url+'" target="_blank" rel="external">'+n.strings.download+'</a> / <a href="#" class="cmb2-remove-file-button" rel="'+a.field+"["+this.id+']">'+n.strings.remove_file+'</a>)<input type="hidden" id="filelist-'+this.id+'" data-id="'+this.id+'" name="'+a.fieldName+"["+this.id+']" value="'+this.url+'"></li>';i.push(r)}),t?i:void $(i).each(function(){a.$field.siblings(".cmb2-media-status").slideDown().append(this)})},i.mediaHandlers.single=function(e){if(o=e.first().toJSON(),a.$field.val(o.url),d(a.field+"_id").val(o.id),o.type&&"image"===o.type){var t=a.previewSize[0]?a.previewSize[0]:350;r='<div class="img-status"><img width="'+t+'px" style="max-width: '+t+'px; width: 100%; height: auto;" src="'+o.url+'" alt="'+o.filename+'" title="'+o.filename+'" /><p><a href="#" class="cmb2-remove-file-button" rel="'+a.field+'">'+n.strings.remove_image+"</a></p></div>"}else r='<div class="file-status"><span>'+n.strings.file+" <strong>"+o.filename+'</strong></span>&nbsp;&nbsp; (<a href="'+o.url+'" target="_blank" rel="external">'+n.strings.download+'</a> / <a href="#" class="cmb2-remove-file-button" rel="'+a.field+'">'+n.strings.remove_file+"</a>)</div>";a.$field.siblings(".cmb2-media-status").slideDown().html(r)},i.mediaHandlers.selectFile=function(){var e=a.frames[a.field].state().get("selection"),r=t?"list":"single";i.attach_id&&t?$('[data-id="'+i.attach_id+'"]').parents("li").replaceWith(i.mediaHandlers.list(e,!0)):i.mediaHandlers[r](e),i.trigger("cmb_media_modal_select",e,a)},i.mediaHandlers.openModal=function(){var e,t=a.frames[a.field].state().get("selection");i.attach_id?(e=wp.media.attachment(i.attach_id),e.fetch(),t.set(e?[e]:[])):t.reset(),i.trigger("cmb_media_modal_open",t,a)},a.frames[a.field].on("select",i.mediaHandlers.selectFile).on("open",i.mediaHandlers.openModal),a.frames[a.field].open()}},i.handleRemoveMedia=function(e){e.preventDefault();var t=$(this);return t.is(".cmb-attach-list .cmb2-remove-file-button")?(t.parents("li").remove(),!1):(i.media.field=t.attr("rel"),i.metabox().find("input#"+i.media.field).val(""),i.metabox().find("input#"+i.media.field+"_id").val(""),t.parents(".cmb2-media-status").html(""),!1)},i.cleanRow=function(e,t,a){var r=e.find(i.repeatUpdate);if(a){var n=e.find("[id]").not(i.repeatUpdate);e.find(".cmb-repeat-table .cmb-repeat-row:not(:first-child)").remove(),n.length&&n.each(function(){var a=$(this),r=a.attr("id"),n=r.replace("_"+t,"_"+i.idNumber),o=e.find('[data-selector="'+r+'"]');a.attr("id",n),o.length&&o.attr("data-selector",n).data("selector",n)})}return r.filter(":checked").prop("checked",!1),r.filter(":selected").prop("selected",!1),e.find("h3.cmb-group-title").length&&e.find("h3.cmb-group-title").text(e.data("title").replace("{#}",i.idNumber+1)),r.each(function(){i.elReplacements($(this),t)}),i},i.elReplacements=function(e,t){var a,r,n=e.attr("for"),o=e.val(),d=e.prop("type"),c=("radio"===d||"checkbox"===d)&&o,l={};if(n)l={for:n.replace("_"+t,"_"+i.idNumber)};else{var s=e.attr("name"),p=s?s.replace("["+t+"]","["+i.idNumber+"]"):"";r=e.attr("id"),a=r?r.replace("_"+t,"_"+i.idNumber):"",l={id:a,name:p,"data-iterator":i.idNumber}}return(void 0!==typeof o&&o||c)&&(l.value=c||""),"TEXTAREA"===e.prop("tagName")&&e.html(""),c&&e.removeAttr("checked"),e.removeClass("hasDatepicker").attr(l).val(c||""),e},i.newRowHousekeeping=function(e){var t=e.find(".wp-picker-container"),a=e.find(".cmb2-media-status");return t.length&&t.each(function(){var e=$(this).parent();e.html(e.find('input[type="text"].cmb2-colorpicker').attr("style",""))}),a.length&&a.empty(),i},i.afterRowInsert=function(e){i.initPickers(e.find('input[type="text"].cmb2-timepicker'),e.find('input[type="text"].cmb2-datepicker'),e.find('input[type="text"].cmb2-colorpicker'))},i.updateNameAttr=function(){var e=$(this),t=e.attr("name");if(void 0!==t){var i=parseInt(e.parents(".cmb-repeatable-grouping").data("iterator"),10),a=i-1,r=t.replace("["+i+"]","["+a+"]");e.attr("name",r)}},i.emptyValue=function(e,t){$(i.noEmpty,t).val("")},i.addGroupRow=function(e){e.preventDefault();var t=$(this);i.triggerElement(t,"cmb2_add_group_row_start",t);var a=d(t.data("selector")),r=a.find(".cmb-repeatable-grouping").last(),n=parseInt(r.data("iterator"),10);i.idNumber=parseInt(n,10)+1;for(var o=r.clone();a.find('.cmb-repeatable-grouping[data-iterator="'+i.idNumber+'"]').length>0;)i.idNumber++;i.newRowHousekeeping(o.data("title",t.data("grouptitle"))).cleanRow(o,n,!0),o.find(".cmb-add-row-button").prop("disabled",!1);var c=$('<div class="postbox cmb-row cmb-repeatable-grouping" data-iterator="'+i.idNumber+'">'+o.html()+"</div>");r.after(c),i.afterRowInsert(c),a.find(".cmb-repeatable-grouping").length<=1?a.find(".cmb-remove-group-row").prop("disabled",!0):a.find(".cmb-remove-group-row").prop("disabled",!1),i.triggerElement(a,{type:"cmb2_add_row",group:!0},c)},i.addAjaxRow=function(e){e.preventDefault();var t=$(this),a=d(t.data("selector")),r=a.find(".empty-row"),n=parseInt(r.find("[data-iterator]").data("iterator"),10);i.idNumber=parseInt(n,10)+1;var o=r.clone();i.newRowHousekeeping(o).cleanRow(o,n),r.removeClass("empty-row hidden").addClass("cmb-repeat-row"),r.after(o),i.afterRowInsert(o),i.triggerElement(a,{type:"cmb2_add_row",group:!1},o),a.find(".cmb-remove-row-button").removeClass("button-disabled")},i.removeGroupRow=function(e){e.preventDefault();var t=$(this),a=d(t.data("selector")),r=t.parents(".cmb-repeatable-grouping"),n=a.find(".cmb-repeatable-grouping").length;2>n||(i.triggerElement(a,"cmb2_remove_group_row_start",t),r.nextAll(".cmb-repeatable-grouping").find(i.repeatEls).each(i.updateNameAttr),r.remove(),2>=n?a.find(".cmb-remove-group-row").prop("disabled",!0):a.find(".cmb-remove-group-row").prop("disabled",!1),i.triggerElement(a,{type:"cmb2_remove_row",group:!0}))},i.removeAjaxRow=function(e){e.preventDefault();var t=$(this);if(!t.hasClass("button-disabled")){var a=t.parents(".cmb-row"),r=t.parents(".cmb-repeat-table"),n=r.find(".cmb-row").length;n>2?(a.hasClass("empty-row")&&a.prev().addClass("empty-row").removeClass("cmb-repeat-row"),t.parents(".cmb-repeat-table .cmb-row").remove(),3===n&&r.find(".cmb-remove-row-button").addClass("button-disabled"),i.triggerElement(r,{type:"cmb2_remove_row",group:!1})):t.addClass("button-disabled")}},i.shiftRows=function(e){e.preventDefault();var t=$(this),a=t.parents(".cmb-repeatable-grouping"),r=t.hasClass("move-up")?a.prev(".cmb-repeatable-grouping"):a.next(".cmb-repeatable-grouping");if(i.triggerElement(t,"cmb2_shift_rows_enter",t,a,r),r.length){i.triggerElement(t,"cmb2_shift_rows_start",t,a,r);var n=[];a.find(i.repeatEls).each(function(){var e,t=$(this),i=t.attr("type");e=t.hasClass("cmb2-media-status")?t.html():"checkbox"===i||"radio"===i?t.is(":checked"):"select"===t.prop("tagName")?t.is(":selected"):t.val(),n.push({val:e,$:t})}),r.find(i.repeatEls).each(function(e){var t,i=$(this),a=i.attr("type");if(i.hasClass("cmb2-media-status")){var r=i.closest(".cmb-repeatable-grouping").attr("data-iterator"),o=n[e].$.closest(".cmb-repeatable-grouping").attr("data-iterator");t=i.html(),i.html(n[e].val),n[e].$.html(t),n[e].$.find("input").each(function(){var e=$(this).attr("name");e=e.replace("["+r+"]","["+o+"]"),$(this).attr("name",e)}),i.find("input").each(function(){var e=$(this).attr("name");e=e.replace("["+o+"]","["+r+"]"),$(this).attr("name",e)})}else"checkbox"===a?(n[e].$.prop("checked",i.is(":checked")),i.prop("checked",n[e].val)):"radio"===a?(i.is(":checked")&&n[e].$.attr("data-checked","true"),n[e].$.is(":checked")&&i.attr("data-checked","true")):"select"===i.prop("tagName")?(n[e].$.prop("selected",i.is(":selected")),i.prop("selected",n[e].val)):(n[e].$.val(i.val()),i.val(n[e].val))}),a.find("input[data-checked=true]").prop("checked",!0).removeAttr("data-checked"),r.find("input[data-checked=true]").prop("checked",!0).removeAttr("data-checked"),a.find('input[type="text"].cmb2-colorpicker').trigger("change"),r.find('input[type="text"].cmb2-colorpicker').trigger("change"),i.triggerElement(t,"cmb2_shift_rows_complete",t,a,r)}},i.initPickers=function(e,t,a){i.initDateTimePickers(e,"timepicker","time_picker"),i.initDateTimePickers(t,"datepicker","date_picker"),i.initColorPickers(a)},i.initDateTimePickers=function(e,t,a){e.length&&e[t]("destroy").each(function(){var e=$(this),r=e.data(t)||{},n=$.extend({},i.defaults[a],r);e[t](i.datePickerSetupOpts(r,n,t))})},i.datePickerSetupOpts=function(e,t,a){var r=$.extend({},t);return t.beforeShow=function(e,t){"timepicker"===a&&i.addTimePickerClasses(t.dpDiv),d("ui-datepicker-div").addClass("cmb2-element"),"function"==typeof r.beforeShow&&r.beforeShow(e,t)},"timepicker"===a&&(t.onChangeMonthYear=function(e,t,a,n){i.addTimePickerClasses(a.dpDiv),"function"==typeof r.onChangeMonthYear&&r.onChangeMonthYear(e,t,a,n)}),t.onClose=function(e,t){d("ui-datepicker-div").removeClass("cmb2-element").hide(),"function"==typeof r.onClose&&r.onClose(e,t)},t},i.addTimePickerClasses=function(e){var t=i.addTimePickerClasses;t.count=t.count||0,o(function(){e.find(".ui-priority-secondary").length?(e.find(".ui-priority-secondary").addClass("button-secondary"),e.find(".ui-priority-primary").addClass("button-primary"),t.count=0):t.count<5&&(t.count++,t(e))},10)},i.initColorPickers=function(e){e.length&&("object"==typeof jQuery.wp&&"function"==typeof jQuery.wp.wpColorPicker?e.each(function(){var e=$(this),t=e.data("colorpicker")||{};e.wpColorPicker($.extend({},i.defaults.color_picker,t))}):e.each(function(e){$(this).after('<div id="picker-'+e+'" style="z-index: 1000; background: #EEE; border: 1px solid #CCC; position: absolute; display: block;"></div>'),d("picker-"+e).hide().farbtastic($(this))}).focus(function(){$(this).next().show()}).blur(function(){$(this).next().hide()}))},i.makeListSortable=function(){var e=i.metabox().find(".cmb2-media-status.cmb-attach-list");e.length&&e.sortable({cursor:"move"}).disableSelection()},i.maybeOembed=function(e){var t=$(this);({focusout:function(){o(function(){i.spinner(".postbox .cmb2-metabox",!0)},2e3)},keyup:function(){var a=function(t,i){return e.which<=i&&e.which>=t};(a(48,90)||a(96,111)||a(8,9)||187===e.which||190===e.which)&&i.doAjax(t,e)},paste:function(){o(function(){i.doAjax(t)},100)}})[e.type]()},i.resizeoEmbeds=function(){i.metabox().each(function(){var e=$(this),t=e.parents(".inside"),a=e.parents(".inner-sidebar").length||e.parents("#side-sortables").length,r=a,n=!1;if(!t.length)return!0;var o=t.width();i.styleBreakPoint>o&&(r=!0,n=i.styleBreakPoint-62>o),o=r?o:Math.round(.82*t.width()*.97);var d=o-30;if(!r||a||n||(d-=75),d>639)return!0;var c=e.find(".cmb-type-oembed .embed-status"),l=c.children().not(".cmb2-remove-wrapper");return!l.length||void l.each(function(){var e=$(this),t=e.width(),i=e.height(),a=d;e.parents(".cmb-repeat-row").length&&!r&&(a=d-91,a=785>o?a-15:a);var n=Math.round(a*i/t);e.width(a).height(n)})})},i.log=function(){n.script_debug&&console&&"function"==typeof console.log&&console.log.apply(console,arguments)},i.spinner=function(e,t){t?$(".cmb-spinner",e).hide():$(".cmb-spinner",e).show()},i.doAjax=function(e){var t=e.val();if(!(t.length<6)){var a=e.attr("id"),r=e.closest(".cmb-td"),d=r.find(".embed-status"),c=r.find(".embed_wrap"),l=d.find(":first-child"),s=d.length&&l.length?l.width():e.width();i.log("oembed_url",t,a),i.spinner(r),c.html(""),o(function(){$(".cmb2-oembed:focus").val()===t&&$.ajax({type:"post",dataType:"json",url:n.ajaxurl,data:{action:"cmb2_oembed_handler",oembed_url:t,oembed_width:s>300?s:300,field_id:a,object_id:e.data("objectid"),object_type:e.data("objecttype"),cmb2_ajax_nonce:n.ajax_nonce},success:function(e){i.log(e),i.spinner(r,!0),c.html(e.data)}})},500)}},i.trigger=function(e){var t=Array.prototype.slice.call(arguments,1);t.push(i),r.trigger(e,t)},i.triggerElement=function(e,t){var a=Array.prototype.slice.call(arguments,2);a.push(i),e.trigger(t,a)},$(i.init)}(window,document,jQuery,window.CMB2),window.CMB2=window.CMB2||{},window.CMB2.wysiwyg=window.CMB2.wysiwyg||{},function(e,t,$,i,a){"use strict";function r(){0===c.length?l.forEach(function(e){l.splice(l.indexOf(e),1),i.init.apply(i,e)}):e.setTimeout(r,100)}function n(){c.forEach(function(e){c.splice(c.indexOf(e),1),i.destroy(e)})}function o(e){var t=e.groupid,i=e.fieldid;return s[t]&&s[t][i]||(s[t]=s[t]||{},s[t][i]={template:wp.template("cmb2-wysiwyg-"+t+"-"+i),defaults:{mce:$.extend({},tinyMCEPreInit.mceInit["cmb2_i_"+t+i]),qt:$.extend({},tinyMCEPreInit.qtInit["cmb2_i_"+t+i])}},delete tinyMCEPreInit.mceInit["cmb2_i_"+t+i],delete tinyMCEPreInit.qtInit["cmb2_i_"+t+i]),s[t][i]}function d(e){var t,i,a,r=new RegExp("cmb2_n_"+e.groupid+e.fieldid,"g"),n=new RegExp("cmb2_i_"+e.groupid+e.fieldid,"g");if(void 0===tinyMCEPreInit.mceInit[e.id]){i=$.extend({},e.defaults.mce);for(t in i)"string"==typeof i[t]&&(i[t]=i[t].replace(n,e.id).replace(r,e.name));tinyMCEPreInit.mceInit[e.id]=i}if(void 0===tinyMCEPreInit.qtInit[e.id]){a=$.extend({},e.defaults.qt);for(t in a)"string"==typeof a[t]&&(a[t]=a[t].replace(n,e.id).replace(r,e.name));tinyMCEPreInit.qtInit[e.id]=a}}var c=[],l=[],s=i.all={};i.initAll=function(){var t,a,r;$(".cmb2-wysiwyg-placeholder").each(function(){t=$(this),a=t.data(),a.groupid&&(a.id=t.attr("id"),a.name=t.attr("name"),a.value=t.val(),i.init(t,a,!1),r=!0)}),!0===r&&e.QTags._buttonsInit()},i.addRow=function(e,t){i.initRow(t)},i.destroyRowEditors=function(e,t){i.destroy(t.parents(".cmb-repeatable-grouping").find(".wp-editor-area").attr("id"))},i.shiftStart=function(e,t,a,r){a.add(r).find(".wp-editor-wrap textarea").each(function(){i.destroy($(this).attr("id"))})},i.shiftComplete=function(e,t,a,r){a.add(r).each(function(){i.initRow($(this))})},i.initRow=function(t){var a,n;t.find(".cmb2-wysiwyg-inner-wrap").each(function(){a=$(this),n=a.data(),n.iterator=t.data("iterator"),n.fieldid=n.id,n.id=n.groupid+"_"+n.iterator+"_"+n.fieldid,n.name=n.groupid+"["+n.iterator+"]["+n.fieldid+"]",n.value=a.find(".wp-editor-area").length?a.find(".wp-editor-area").val():"",0===c.length?i.init(a,n):(l.push([a,n]),e.setTimeout(r,100))})},i.init=function(i,a,r){return!!a.groupid&&($.extend(a,o(a)),d(a),i.replaceWith(a.template(a)),e.tinyMCE.init(tinyMCEPreInit.mceInit[a.id]),e.quicktags(tinyMCEPreInit.qtInit[a.id]),$(t.getElementById(a.id)).parents(".wp-editor-wrap").removeClass("html-active").addClass("tmce-active"),void(!1!==r&&e.QTags._buttonsInit()))},i.destroy=function(t){var i=tinyMCE.get(t);null!==i&&void 0!==i?(i.destroy(),void 0===tinyMCEPreInit.mceInit[t]&&delete tinyMCEPreInit.mceInit[t],void 0===tinyMCEPreInit.qtInit[t]&&delete tinyMCEPreInit.qtInit[t]):-1===c.indexOf(t)&&(c.push(t),e.setTimeout(n,100))},$(t).on("cmb_init",i.initAll).on("cmb2_add_row",i.addRow).on("cmb2_remove_group_row_start",i.destroyRowEditors).on("cmb2_shift_rows_start",i.shiftStart).on("cmb2_shift_rows_complete",i.shiftComplete)}(window,document,jQuery,window.CMB2.wysiwyg);