<?php
/**
 * @file
 * zoho_forms.features.node_export_features.inc
 */

/**
 * Implements hook_node_export_features_default().
 */
function zoho_forms_node_export_features_default() {
  $node_export = array(
  'code_string' => 'array(
  (object) array(
      \'vid\' => \'95\',
      \'uid\' => \'2\',
      \'title\' => \'Thank you for requesting a demo!\',
      \'log\' => \'\',
      \'status\' => \'1\',
      \'comment\' => \'1\',
      \'promote\' => \'0\',
      \'sticky\' => \'0\',
      \'vuuid\' => \'a0d3ba4f-54e7-4f56-84e7-98ab2d2c4e2e\',
      \'nid\' => \'95\',
      \'type\' => \'page\',
      \'language\' => \'und\',
      \'created\' => \'1405032660\',
      \'changed\' => \'1409341637\',
      \'tnid\' => \'0\',
      \'translate\' => \'0\',
      \'uuid\' => \'0a958be5-8701-4eb8-9249-885f100a4c3f\',
      \'revision_timestamp\' => \'1409341637\',
      \'revision_uid\' => \'2\',
      \'body\' => array(
        \'und\' => array(
          array(
            \'value\' => "<h1>Thank you for requesting a demo!</h1>\\r\\n\\r\\n<p><br />\\r\\nWe will be in touch shortly.....</p>\\r\\n\\r\\n<ul>\\r\\n\\t<li>If urgent, please call us at +1.408.725.2942.</li>\\r\\n</ul>\\r\\n\\r\\n<p>&nbsp;</p>\\r\\n\\r\\n<p>In the meantime, please:</p>\\r\\n\\r\\n<ul>\\r\\n\\t<li>Check out more information on our website</li>\\r\\n\\t<li>Sign up for our Newsletter</li>\\r\\n\\t<li>Don\'t forget to follow us on LinkedIn, Twitter, and Facebook!</li>\\r\\n</ul>\\r\\n\\r\\n<p>&nbsp;</p>\\r\\n\\r\\n<p>And thank you for your interest!</p>\\r\\n",
            \'summary\' => \'\',
            \'format\' => \'full_html\',
            \'safe_value\' => "<h1>Thank you for requesting a demo!</h1>\\n<p>\\nWe will be in touch shortly.....</p>\\n<ul><li>If urgent, please call us at +1.408.725.2942.</li>\\n</ul><p> </p>\\n<p>In the meantime, please:</p>\\n<ul><li>Check out more information on our website</li>\\n<li>Sign up for our Newsletter</li>\\n<li>Don\'t forget to follow us on LinkedIn, Twitter, and Facebook!</li>\\n</ul><p> </p>\\n<p>And thank you for your interest!</p>\\n",
            \'safe_summary\' => \'\',
          ),
        ),
      ),
      \'metatags\' => array(),
      \'rdf_mapping\' => array(
        \'rdftype\' => array(
          \'sioc:Item\',
          \'foaf:Document\',
        ),
        \'title\' => array(
          \'predicates\' => array(
            \'dc:title\',
          ),
        ),
        \'created\' => array(
          \'predicates\' => array(
            \'dc:date\',
            \'dc:created\',
          ),
          \'datatype\' => \'xsd:dateTime\',
          \'callback\' => \'date_iso8601\',
        ),
        \'changed\' => array(
          \'predicates\' => array(
            \'dc:modified\',
          ),
          \'datatype\' => \'xsd:dateTime\',
          \'callback\' => \'date_iso8601\',
        ),
        \'body\' => array(
          \'predicates\' => array(
            \'content:encoded\',
          ),
        ),
        \'uid\' => array(
          \'predicates\' => array(
            \'sioc:has_creator\',
          ),
          \'type\' => \'rel\',
        ),
        \'name\' => array(
          \'predicates\' => array(
            \'foaf:name\',
          ),
        ),
        \'comment_count\' => array(
          \'predicates\' => array(
            \'sioc:num_replies\',
          ),
          \'datatype\' => \'xsd:integer\',
        ),
        \'last_activity\' => array(
          \'predicates\' => array(
            \'sioc:last_activity_date\',
          ),
          \'datatype\' => \'xsd:dateTime\',
          \'callback\' => \'date_iso8601\',
        ),
      ),
      \'cid\' => \'0\',
      \'last_comment_timestamp\' => \'1405032660\',
      \'last_comment_name\' => NULL,
      \'last_comment_uid\' => \'2\',
      \'comment_count\' => \'0\',
      \'nodeblock\' => array(
        \'nid\' => \'95\',
        \'enabled\' => \'1\',
        \'machine_name\' => \'95\',
        \'block_title\' => \'Thank you for requesting a demo!\',
        \'view_mode\' => \'full\',
        \'node_link\' => \'0\',
        \'comment_link\' => \'0\',
        \'translation_fallback\' => \'0\',
      ),
      \'name\' => \'holly\',
      \'picture\' => \'0\',
      \'data\' => \'a:5:{s:16:"ckeditor_default";s:1:"t";s:20:"ckeditor_show_toggle";s:1:"t";s:14:"ckeditor_width";s:4:"100%";s:13:"ckeditor_lang";s:2:"en";s:18:"ckeditor_auto_lang";s:1:"t";}\',
      \'path\' => array(
        \'pid\' => \'99\',
        \'source\' => \'node/95\',
        \'alias\' => \'thank-you-requesting-demo\',
        \'language\' => \'und\',
      ),
      \'menu\' => NULL,
      \'node_export_drupal_version\' => \'7\',
    ),
  (object) array(
      \'vid\' => \'93\',
      \'uid\' => \'2\',
      \'title\' => \'Thank you for submitting a question\',
      \'log\' => \'\',
      \'status\' => \'1\',
      \'comment\' => \'1\',
      \'promote\' => \'0\',
      \'sticky\' => \'0\',
      \'vuuid\' => \'e9c285e8-d3ab-4618-94c3-97abd65c51cc\',
      \'nid\' => \'93\',
      \'type\' => \'page\',
      \'language\' => \'und\',
      \'created\' => \'1405032397\',
      \'changed\' => \'1409341558\',
      \'tnid\' => \'0\',
      \'translate\' => \'0\',
      \'uuid\' => \'28215602-2f3f-428f-a88f-147adbbc37ac\',
      \'revision_timestamp\' => \'1409341558\',
      \'revision_uid\' => \'2\',
      \'body\' => array(
        \'und\' => array(
          array(
            \'value\' => "<h1>Thank you for emailing us!</h1>\\r\\n\\r\\n<p>We will be in touch shortly.....</p>\\r\\n\\r\\n<ul>\\r\\n\\t<li>If urgent, please call us at&nbsp;+1.408.725.2942.</li>\\r\\n</ul>\\r\\n\\r\\n<p>In the meantime, please:</p>\\r\\n\\r\\n<ul>\\r\\n\\t<li>Check out more information on our website</li>\\r\\n\\t<li>Sign up for our Newsletter</li>\\r\\n\\t<li>Don\'t forget to follow us on LinkedIn, Twitter, and Facebook!</li>\\r\\n</ul>\\r\\n\\r\\n<p>And thank you for your interest!</p>\\r\\n",
            \'summary\' => \'\',
            \'format\' => \'full_html\',
            \'safe_value\' => "<h1>Thank you for emailing us!</h1>\\n<p>We will be in touch shortly.....</p>\\n<ul><li>If urgent, please call us at +1.408.725.2942.</li>\\n</ul><p>In the meantime, please:</p>\\n<ul><li>Check out more information on our website</li>\\n<li>Sign up for our Newsletter</li>\\n<li>Don\'t forget to follow us on LinkedIn, Twitter, and Facebook!</li>\\n</ul><p>And thank you for your interest!</p>\\n",
            \'safe_summary\' => \'\',
          ),
        ),
      ),
      \'metatags\' => array(),
      \'rdf_mapping\' => array(
        \'rdftype\' => array(
          \'sioc:Item\',
          \'foaf:Document\',
        ),
        \'title\' => array(
          \'predicates\' => array(
            \'dc:title\',
          ),
        ),
        \'created\' => array(
          \'predicates\' => array(
            \'dc:date\',
            \'dc:created\',
          ),
          \'datatype\' => \'xsd:dateTime\',
          \'callback\' => \'date_iso8601\',
        ),
        \'changed\' => array(
          \'predicates\' => array(
            \'dc:modified\',
          ),
          \'datatype\' => \'xsd:dateTime\',
          \'callback\' => \'date_iso8601\',
        ),
        \'body\' => array(
          \'predicates\' => array(
            \'content:encoded\',
          ),
        ),
        \'uid\' => array(
          \'predicates\' => array(
            \'sioc:has_creator\',
          ),
          \'type\' => \'rel\',
        ),
        \'name\' => array(
          \'predicates\' => array(
            \'foaf:name\',
          ),
        ),
        \'comment_count\' => array(
          \'predicates\' => array(
            \'sioc:num_replies\',
          ),
          \'datatype\' => \'xsd:integer\',
        ),
        \'last_activity\' => array(
          \'predicates\' => array(
            \'sioc:last_activity_date\',
          ),
          \'datatype\' => \'xsd:dateTime\',
          \'callback\' => \'date_iso8601\',
        ),
      ),
      \'cid\' => \'0\',
      \'last_comment_timestamp\' => \'1405032397\',
      \'last_comment_name\' => NULL,
      \'last_comment_uid\' => \'2\',
      \'comment_count\' => \'0\',
      \'nodeblock\' => array(
        \'nid\' => \'93\',
        \'enabled\' => \'1\',
        \'machine_name\' => \'93\',
        \'block_title\' => \'Thank you for submitting a question\',
        \'view_mode\' => \'full\',
        \'node_link\' => \'0\',
        \'comment_link\' => \'0\',
        \'translation_fallback\' => \'0\',
      ),
      \'name\' => \'holly\',
      \'picture\' => \'0\',
      \'data\' => \'a:5:{s:16:"ckeditor_default";s:1:"t";s:20:"ckeditor_show_toggle";s:1:"t";s:14:"ckeditor_width";s:4:"100%";s:13:"ckeditor_lang";s:2:"en";s:18:"ckeditor_auto_lang";s:1:"t";}\',
      \'path\' => array(
        \'pid\' => \'97\',
        \'source\' => \'node/93\',
        \'alias\' => \'thank-you-submitting-question\',
        \'language\' => \'und\',
      ),
      \'menu\' => NULL,
      \'node_export_drupal_version\' => \'7\',
    ),
  (object) array(
      \'vid\' => \'94\',
      \'uid\' => \'2\',
      \'title\' => \'Thank you for requesting our Newsletter\',
      \'log\' => \'\',
      \'status\' => \'1\',
      \'comment\' => \'1\',
      \'promote\' => \'0\',
      \'sticky\' => \'0\',
      \'vuuid\' => \'a8f69e63-2508-4e08-86a6-269d0158541f\',
      \'nid\' => \'94\',
      \'type\' => \'page\',
      \'language\' => \'und\',
      \'created\' => \'1405032536\',
      \'changed\' => \'1409341483\',
      \'tnid\' => \'0\',
      \'translate\' => \'0\',
      \'uuid\' => \'7f6b9ada-a291-4443-b06b-8f353a74af31\',
      \'revision_timestamp\' => \'1409341483\',
      \'revision_uid\' => \'2\',
      \'body\' => array(
        \'und\' => array(
          array(
            \'value\' => "<h1>Thank you for requesting our Newsletter!</h1>\\r\\n\\r\\n<p>We will be in touch shortly.....</p>\\r\\n\\r\\n<ul>\\r\\n\\t<li>If urgent, please call us at +1.408.725.2942.</li>\\r\\n</ul>\\r\\n\\r\\n<p>&nbsp;</p>\\r\\n\\r\\n<p>In the meantime, please check out more information on our website....​</p>\\r\\n\\r\\n<p>Don\'t forget to follow us on LinkedIn, Twitter, and Facebook!</p>\\r\\n\\r\\n<p>And thank you for your interest!</p>\\r\\n",
            \'summary\' => \'\',
            \'format\' => \'full_html\',
            \'safe_value\' => "<h1>Thank you for requesting our Newsletter!</h1>\\n<p>We will be in touch shortly.....</p>\\n<ul><li>If urgent, please call us at +1.408.725.2942.</li>\\n</ul><p> </p>\\n<p>In the meantime, please check out more information on our website....​</p>\\n<p>Don\'t forget to follow us on LinkedIn, Twitter, and Facebook!</p>\\n<p>And thank you for your interest!</p>\\n",
            \'safe_summary\' => \'\',
          ),
        ),
      ),
      \'metatags\' => array(),
      \'rdf_mapping\' => array(
        \'rdftype\' => array(
          \'sioc:Item\',
          \'foaf:Document\',
        ),
        \'title\' => array(
          \'predicates\' => array(
            \'dc:title\',
          ),
        ),
        \'created\' => array(
          \'predicates\' => array(
            \'dc:date\',
            \'dc:created\',
          ),
          \'datatype\' => \'xsd:dateTime\',
          \'callback\' => \'date_iso8601\',
        ),
        \'changed\' => array(
          \'predicates\' => array(
            \'dc:modified\',
          ),
          \'datatype\' => \'xsd:dateTime\',
          \'callback\' => \'date_iso8601\',
        ),
        \'body\' => array(
          \'predicates\' => array(
            \'content:encoded\',
          ),
        ),
        \'uid\' => array(
          \'predicates\' => array(
            \'sioc:has_creator\',
          ),
          \'type\' => \'rel\',
        ),
        \'name\' => array(
          \'predicates\' => array(
            \'foaf:name\',
          ),
        ),
        \'comment_count\' => array(
          \'predicates\' => array(
            \'sioc:num_replies\',
          ),
          \'datatype\' => \'xsd:integer\',
        ),
        \'last_activity\' => array(
          \'predicates\' => array(
            \'sioc:last_activity_date\',
          ),
          \'datatype\' => \'xsd:dateTime\',
          \'callback\' => \'date_iso8601\',
        ),
      ),
      \'cid\' => \'0\',
      \'last_comment_timestamp\' => \'1405032536\',
      \'last_comment_name\' => NULL,
      \'last_comment_uid\' => \'2\',
      \'comment_count\' => \'0\',
      \'nodeblock\' => array(
        \'nid\' => \'94\',
        \'enabled\' => \'1\',
        \'machine_name\' => \'94\',
        \'block_title\' => \'Thank you for requesting our Newsletter\',
        \'view_mode\' => \'full\',
        \'node_link\' => \'0\',
        \'comment_link\' => \'0\',
        \'translation_fallback\' => \'0\',
      ),
      \'name\' => \'holly\',
      \'picture\' => \'0\',
      \'data\' => \'a:5:{s:16:"ckeditor_default";s:1:"t";s:20:"ckeditor_show_toggle";s:1:"t";s:14:"ckeditor_width";s:4:"100%";s:13:"ckeditor_lang";s:2:"en";s:18:"ckeditor_auto_lang";s:1:"t";}\',
      \'path\' => array(
        \'pid\' => \'98\',
        \'source\' => \'node/94\',
        \'alias\' => \'thank-you-requesting-our-newsletter\',
        \'language\' => \'und\',
      ),
      \'menu\' => NULL,
      \'node_export_drupal_version\' => \'7\',
    ),
  (object) array(
      \'vid\' => \'22\',
      \'uid\' => \'2\',
      \'title\' => \'Email Us\',
      \'log\' => \'\',
      \'status\' => \'1\',
      \'comment\' => \'1\',
      \'promote\' => \'0\',
      \'sticky\' => \'0\',
      \'vuuid\' => \'038d6506-e292-4595-88f6-cc250811b459\',
      \'nid\' => \'22\',
      \'type\' => \'page\',
      \'language\' => \'und\',
      \'created\' => \'1402983710\',
      \'changed\' => \'1409255396\',
      \'tnid\' => \'0\',
      \'translate\' => \'0\',
      \'uuid\' => \'a3a7fcba-3051-41fc-82a5-e33a7439cc08\',
      \'revision_timestamp\' => \'1409255396\',
      \'revision_uid\' => \'2\',
      \'body\' => array(
        \'und\' => array(
          array(
            \'value\' => "<h1>Have a question? Comments? Feedback?</h1>\\r\\n\\r\\n<div align=\\"center\\" id=\\"crmWebToEntityForm\\">&nbsp;</div>\\r\\n<meta content=\\"text/html;charset = UTF-8\\" http-equiv=\\"content-type\\" />\\r\\n<form accept-charset=\\"UTF-8\\" action=\\"https://crm.zoho.com/crm/WebToLeadForm\\" method=\\"POST\\" name=\\"WebToLeads763020000001993013\\" onsubmit=\\"javascript:document.charset=&quot;UTF-8&quot;; return checkMandatery()\\"><input name=\\"xnQsjsdp\\" style=\\"display:none;\\" type=\\"text\\" value=\\"pQ3YVhBzWz1thYo@kRl79w$$\\" /> <input id=\\"zc_gad\\" name=\\"zc_gad\\" type=\\"hidden\\" value=\\"\\" /> <input name=\\"xmIwtLD\\" style=\\"display:none;\\" type=\\"text\\" value=\\"wIVwvlbIgJAQUtWiv7CE1YhtUVzz56G-\\" /> <input name=\\"actionType\\" style=\\"display:none;\\" type=\\"text\\" value=\\"TGVhZHM=\\" /> <input name=\\"returnURL\\" style=\\"display:none;\\" type=\\"text\\" value=\\"http://tapanalytics.com/thank-you-submitting-question\\" /><br />\\r\\n&nbsp;\\r\\n<table border=\\"0\\" cellpadding=\\"6\\" cellspacing=\\"0\\" style=\\"background-color:white;color:black\\" width=\\"600\\">\\r\\n\\t<tbody>\\r\\n\\t\\t<tr>\\r\\n\\t\\t\\t<td align=\\"left\\" colspan=\\"2\\" style=\\"color:black;font-family:Arial;font-size:14px;\\">&nbsp;</td>\\r\\n\\t\\t</tr>\\r\\n\\t\\t<tr>\\r\\n\\t\\t\\t<td align=\\"left\\" nowrap=\\"nowrap\\" style=\\"font-size:12px;font-family:Arial;width:200px;\\">First Name<span style=\\"color:red;\\">*</span></td>\\r\\n\\t\\t\\t<td style=\\"width:250px;\\"><input maxlength=\\"40\\" name=\\"First Name\\" style=\\"width:250px;\\" type=\\"text\\" /></td>\\r\\n\\t\\t</tr>\\r\\n\\t\\t<tr>\\r\\n\\t\\t\\t<td align=\\"left\\" nowrap=\\"nowrap\\" style=\\"font-size:12px;font-family:Arial;width:200px;\\">Last Name<span style=\\"color:red;\\">*</span></td>\\r\\n\\t\\t\\t<td style=\\"width:250px;\\"><input maxlength=\\"80\\" name=\\"Last Name\\" style=\\"width:250px;\\" type=\\"text\\" /></td>\\r\\n\\t\\t</tr>\\r\\n\\t\\t<tr>\\r\\n\\t\\t\\t<td align=\\"left\\" nowrap=\\"nowrap\\" style=\\"font-size:12px;font-family:Arial;width:200px;\\">Email<span style=\\"color:red;\\">*</span></td>\\r\\n\\t\\t\\t<td style=\\"width:250px;\\"><input maxlength=\\"100\\" name=\\"Email\\" style=\\"width:250px;\\" type=\\"text\\" /></td>\\r\\n\\t\\t</tr>\\r\\n\\t\\t<tr>\\r\\n\\t\\t\\t<td align=\\"left\\" nowrap=\\"nowrap\\" style=\\"font-size:12px;font-family:Arial;width:200px;\\">Company</td>\\r\\n\\t\\t\\t<td style=\\"width:250px;\\"><input maxlength=\\"100\\" name=\\"Company\\" style=\\"width:250px;\\" type=\\"text\\" /></td>\\r\\n\\t\\t</tr>\\r\\n\\t\\t<tr>\\r\\n\\t\\t\\t<td align=\\"left\\" nowrap=\\"nowrap\\" style=\\"font-size:12px;font-family:Arial;width:200px;\\">Phone</td>\\r\\n\\t\\t\\t<td style=\\"width:250px;\\"><input maxlength=\\"30\\" name=\\"Phone\\" style=\\"width:250px;\\" type=\\"text\\" /></td>\\r\\n\\t\\t</tr>\\r\\n\\t\\t<tr>\\r\\n\\t\\t\\t<td align=\\"left\\" nowrap=\\"nowrap\\" style=\\"font-size:12px;font-family:Arial;width:200px;\\">Description</td>\\r\\n\\t\\t\\t<td style=\\"width:250px;\\"><textarea height=\\"250\\" maxlength=\\"1000\\" name=\\"Description\\" style=\\"width:250px;\\" width=\\"250\\"></textarea></td>\\r\\n\\t\\t</tr>\\r\\n\\t\\t<tr style=\\"display:none;\\">\\r\\n\\t\\t\\t<td align=\\"left\\" nowrap=\\"nowrap\\" style=\\"font-size:12px;font-family:Arial;width:200px;\\" width=\\"50%\\">Lead Source</td>\\r\\n\\t\\t\\t<td style=\\"width:250px;\\"><select name=\\"Lead Source\\" style=\\"width:250px;\\"><option value=\\"-None-\\">-None-</option><option value=\\"Free Trial\\">Free Trial</option><option value=\\"Demo Request\\">Demo Request</option><option selected=\\"selected\\" value=\\"Website Question Form\\">Website Question Form</option><option value=\\"LinkedIn Ads\\">LinkedIn Ads</option><option value=\\"LinkedIn Research\\">LinkedIn Research</option><option value=\\"Google\\">Google</option><option value=\\"Other Advertisement\\">Other Advertisement</option><option value=\\"Cold Call\\">Cold Call</option><option value=\\"Web Research\\">Web Research</option><option value=\\"Employee Referral\\">Employee Referral</option><option value=\\"External Referral\\">External Referral</option><option value=\\"Partner Referral\\">Partner Referral</option><option value=\\"Public Relations\\">Public Relations</option><option value=\\"Trade Show\\">Trade Show</option><option value=\\"OnlineStore\\">OnlineStore</option><option value=\\"Internal Submission\\">Internal Submission</option><option value=\\"ClickFuel\\">ClickFuel</option><option value=\\"Newsletter\\">Newsletter</option> </select></td>\\r\\n\\t\\t</tr>\\r\\n\\t\\t<tr>\\r\\n\\t\\t\\t<td align=\\"center\\" colspan=\\"2\\" style=\\"padding-top: 15px;\\"><input style=\\"font-size:12px;color:black\\" type=\\"submit\\" value=\\"Submit\\" /> <input style=\\"font-size:12px;color:black\\" type=\\"reset\\" value=\\"Reset\\" /></td>\\r\\n\\t\\t</tr>\\r\\n\\t</tbody>\\r\\n</table>\\r\\n<script> var mndFileds=new Array(\'First Name\',\'Last Name\',\'Email\');var fldLangVal=new Array(\'First Name\',\'Last Name\',\'Email\');function reloadImg(){if(document.getElementById(\'imgid\').src.indexOf(\'&d\') !== -1 ){document.getElementById(\'imgid\').src=document.getElementById(\'imgid\').src.substring(0,document.getElementById(\'imgid\').src.indexOf(\'&d\'))+\'&d\'+new Date().getTime();}else{document.getElementById(\'imgid\').src = document.getElementById(\'imgid\').src+\'&d\'+new Date().getTime();}}function checkMandatery(){for(i=0;i<mndFileds.length;i++){ var fieldObj=document.forms[\'WebToLeads763020000001993013\'][mndFileds[i]];if(fieldObj) {if(((fieldObj.value).replace(/^\\\\s+|\\\\s+$/g, \'\')).length==0){alert(fldLangVal[i] +\' cannot be empty\'); fieldObj.focus(); return false;}else if(fieldObj.nodeName==\'SELECT\'){if(fieldObj.options[fieldObj.selectedIndex].value==\'-None-\'){alert(fldLangVal[i] +\' cannot be none\'); fieldObj.focus(); return false;}} else if(fieldObj.type ==\'checkbox\'){ if (fieldObj.checked == false){     alert(\'Please accept  \'+fldLangVal[i]); fieldObj.focus();return false;}}}}}</script></form>\\r\\n",
            \'summary\' => \'\',
            \'format\' => \'full_html\',
            \'safe_value\' => "<h1>Have a question? Comments? Feedback?</h1>\\n<div align=\\"center\\" id=\\"crmWebToEntityForm\\"> </div>\\n<p><meta content=\\"text/html;charset = UTF-8\\" http-equiv=\\"content-type\\" /></p>\\n<form accept-charset=\\"UTF-8\\" action=\\"https://crm.zoho.com/crm/WebToLeadForm\\" method=\\"POST\\" name=\\"WebToLeads763020000001993013\\" onsubmit=\\"javascript:document.charset=&quot;UTF-8&quot;; return checkMandatery()\\" id=\\"WebToLeads763020000001993013\\"><input name=\\"xnQsjsdp\\" style=\\"display:none;\\" type=\\"text\\" value=\\"pQ3YVhBzWz1thYo@kRl79w$$\\" /><input id=\\"zc_gad\\" name=\\"zc_gad\\" type=\\"hidden\\" value=\\"\\" /><input name=\\"xmIwtLD\\" style=\\"display:none;\\" type=\\"text\\" value=\\"wIVwvlbIgJAQUtWiv7CE1YhtUVzz56G-\\" /><input name=\\"actionType\\" style=\\"display:none;\\" type=\\"text\\" value=\\"TGVhZHM=\\" /><input name=\\"returnURL\\" style=\\"display:none;\\" type=\\"text\\" value=\\"http://tapanalytics.com/thank-you-submitting-question\\" /><br />\\n \\n<table border=\\"0\\" cellpadding=\\"6\\" cellspacing=\\"0\\" style=\\"background-color:white;color:black\\" width=\\"600\\"><tbody><tr><td align=\\"left\\" colspan=\\"2\\" style=\\"color:black;font-family:Arial;font-size:14px;\\"> </td>\\n</tr><tr><td align=\\"left\\" nowrap=\\"nowrap\\" style=\\"font-size:12px;font-family:Arial;width:200px;\\">First Name<span style=\\"color:red;\\">*</span></td>\\n<td style=\\"width:250px;\\"><input maxlength=\\"40\\" name=\\"First Name\\" style=\\"width:250px;\\" type=\\"text\\" /></td>\\n</tr><tr><td align=\\"left\\" nowrap=\\"nowrap\\" style=\\"font-size:12px;font-family:Arial;width:200px;\\">Last Name<span style=\\"color:red;\\">*</span></td>\\n<td style=\\"width:250px;\\"><input maxlength=\\"80\\" name=\\"Last Name\\" style=\\"width:250px;\\" type=\\"text\\" /></td>\\n</tr><tr><td align=\\"left\\" nowrap=\\"nowrap\\" style=\\"font-size:12px;font-family:Arial;width:200px;\\">Email<span style=\\"color:red;\\">*</span></td>\\n<td style=\\"width:250px;\\"><input maxlength=\\"100\\" name=\\"Email\\" style=\\"width:250px;\\" type=\\"text\\" /></td>\\n</tr><tr><td align=\\"left\\" nowrap=\\"nowrap\\" style=\\"font-size:12px;font-family:Arial;width:200px;\\">Company</td>\\n<td style=\\"width:250px;\\"><input maxlength=\\"100\\" name=\\"Company\\" style=\\"width:250px;\\" type=\\"text\\" /></td>\\n</tr><tr><td align=\\"left\\" nowrap=\\"nowrap\\" style=\\"font-size:12px;font-family:Arial;width:200px;\\">Phone</td>\\n<td style=\\"width:250px;\\"><input maxlength=\\"30\\" name=\\"Phone\\" style=\\"width:250px;\\" type=\\"text\\" /></td>\\n</tr><tr><td align=\\"left\\" nowrap=\\"nowrap\\" style=\\"font-size:12px;font-family:Arial;width:200px;\\">Description</td>\\n<td style=\\"width:250px;\\"><textarea height=\\"250\\" maxlength=\\"1000\\" name=\\"Description\\" style=\\"width:250px;\\" width=\\"250\\"></textarea></td>\\n</tr><tr style=\\"display:none;\\"><td align=\\"left\\" nowrap=\\"nowrap\\" style=\\"font-size:12px;font-family:Arial;width:200px;\\" width=\\"50%\\">Lead Source</td>\\n<td style=\\"width:250px;\\">\\n<select name=\\"Lead Source\\" style=\\"width:250px;\\"><option value=\\"-None-\\">-None-</option><option value=\\"Free Trial\\">Free Trial</option><option value=\\"Demo Request\\">Demo Request</option><option selected=\\"selected\\" value=\\"Website Question Form\\">Website Question Form</option><option value=\\"LinkedIn Ads\\">LinkedIn Ads</option><option value=\\"LinkedIn Research\\">LinkedIn Research</option><option value=\\"Google\\">Google</option><option value=\\"Other Advertisement\\">Other Advertisement</option><option value=\\"Cold Call\\">Cold Call</option><option value=\\"Web Research\\">Web Research</option><option value=\\"Employee Referral\\">Employee Referral</option><option value=\\"External Referral\\">External Referral</option><option value=\\"Partner Referral\\">Partner Referral</option><option value=\\"Public Relations\\">Public Relations</option><option value=\\"Trade Show\\">Trade Show</option><option value=\\"OnlineStore\\">OnlineStore</option><option value=\\"Internal Submission\\">Internal Submission</option><option value=\\"ClickFuel\\">ClickFuel</option><option value=\\"Newsletter\\">Newsletter</option></select></td>\\n</tr><tr><td align=\\"center\\" colspan=\\"2\\" style=\\"padding-top: 15px;\\"><input style=\\"font-size:12px;color:black\\" type=\\"submit\\" value=\\"Submit\\" /><input style=\\"font-size:12px;color:black\\" type=\\"reset\\" value=\\"Reset\\" /></td>\\n</tr></tbody></table><script>\\n<!--//--><![CDATA[// ><!--\\n var mndFileds=new Array(\'First Name\',\'Last Name\',\'Email\');var fldLangVal=new Array(\'First Name\',\'Last Name\',\'Email\');function reloadImg(){if(document.getElementById(\'imgid\').src.indexOf(\'&d\') !== -1 ){document.getElementById(\'imgid\').src=document.getElementById(\'imgid\').src.substring(0,document.getElementById(\'imgid\').src.indexOf(\'&d\'))+\'&d\'+new Date().getTime();}else{document.getElementById(\'imgid\').src = document.getElementById(\'imgid\').src+\'&d\'+new Date().getTime();}}function checkMandatery(){for(i=0;i<mndFileds.length;i++){ var fieldObj=document.forms[\'WebToLeads763020000001993013\'][mndFileds[i]];if(fieldObj) {if(((fieldObj.value).replace(/^\\\\s+|\\\\s+$/g, \'\')).length==0){alert(fldLangVal[i] +\' cannot be empty\'); fieldObj.focus(); return false;}else if(fieldObj.nodeName==\'SELECT\'){if(fieldObj.options[fieldObj.selectedIndex].value==\'-None-\'){alert(fldLangVal[i] +\' cannot be none\'); fieldObj.focus(); return false;}} else if(fieldObj.type ==\'checkbox\'){ if (fieldObj.checked == false){     alert(\'Please accept  \'+fldLangVal[i]); fieldObj.focus();return false;}}}}}\\n//--><!]]>\\n</script></form>\\n",
            \'safe_summary\' => \'\',
          ),
        ),
      ),
      \'metatags\' => array(),
      \'rdf_mapping\' => array(
        \'rdftype\' => array(
          \'sioc:Item\',
          \'foaf:Document\',
        ),
        \'title\' => array(
          \'predicates\' => array(
            \'dc:title\',
          ),
        ),
        \'created\' => array(
          \'predicates\' => array(
            \'dc:date\',
            \'dc:created\',
          ),
          \'datatype\' => \'xsd:dateTime\',
          \'callback\' => \'date_iso8601\',
        ),
        \'changed\' => array(
          \'predicates\' => array(
            \'dc:modified\',
          ),
          \'datatype\' => \'xsd:dateTime\',
          \'callback\' => \'date_iso8601\',
        ),
        \'body\' => array(
          \'predicates\' => array(
            \'content:encoded\',
          ),
        ),
        \'uid\' => array(
          \'predicates\' => array(
            \'sioc:has_creator\',
          ),
          \'type\' => \'rel\',
        ),
        \'name\' => array(
          \'predicates\' => array(
            \'foaf:name\',
          ),
        ),
        \'comment_count\' => array(
          \'predicates\' => array(
            \'sioc:num_replies\',
          ),
          \'datatype\' => \'xsd:integer\',
        ),
        \'last_activity\' => array(
          \'predicates\' => array(
            \'sioc:last_activity_date\',
          ),
          \'datatype\' => \'xsd:dateTime\',
          \'callback\' => \'date_iso8601\',
        ),
      ),
      \'cid\' => \'0\',
      \'last_comment_timestamp\' => \'1402983710\',
      \'last_comment_name\' => NULL,
      \'last_comment_uid\' => \'2\',
      \'comment_count\' => \'0\',
      \'nodeblock\' => array(
        \'nid\' => \'22\',
        \'enabled\' => \'1\',
        \'machine_name\' => \'22\',
        \'block_title\' => \'Email Us\',
        \'view_mode\' => \'full\',
        \'node_link\' => \'0\',
        \'comment_link\' => \'0\',
        \'translation_fallback\' => \'0\',
      ),
      \'name\' => \'holly\',
      \'picture\' => \'0\',
      \'data\' => \'a:5:{s:16:"ckeditor_default";s:1:"t";s:20:"ckeditor_show_toggle";s:1:"t";s:14:"ckeditor_width";s:4:"100%";s:13:"ckeditor_lang";s:2:"en";s:18:"ckeditor_auto_lang";s:1:"t";}\',
      \'path\' => array(
        \'pid\' => \'25\',
        \'source\' => \'node/22\',
        \'alias\' => \'contact-us-0\',
        \'language\' => \'und\',
      ),
      \'menu\' => array(
        \'link_title\' => \'Email Us\',
        \'mlid\' => 0,
        \'plid\' => \'356\',
        \'menu_name\' => \'main-menu\',
        \'weight\' => \'-47\',
        \'options\' => array(),
        \'module\' => \'menu\',
        \'expanded\' => \'0\',
        \'hidden\' => \'0\',
        \'has_children\' => \'0\',
        \'customized\' => 0,
        \'parent_depth_limit\' => 8,
        \'description\' => \'\',
        \'enabled\' => 1,
      ),
      \'node_export_drupal_version\' => \'7\',
    ),
  (object) array(
      \'vid\' => \'67\',
      \'uid\' => \'2\',
      \'title\' => \'Request a Demo\',
      \'log\' => \'\',
      \'status\' => \'1\',
      \'comment\' => \'1\',
      \'promote\' => \'0\',
      \'sticky\' => \'0\',
      \'vuuid\' => \'b2ea3719-693c-414e-8999-9631e8c6b5f7\',
      \'nid\' => \'67\',
      \'type\' => \'page\',
      \'language\' => \'und\',
      \'created\' => \'1403755888\',
      \'changed\' => \'1409337145\',
      \'tnid\' => \'0\',
      \'translate\' => \'0\',
      \'uuid\' => \'b94dc7d5-b961-4759-880a-085548b90a2d\',
      \'revision_timestamp\' => \'1409337145\',
      \'revision_uid\' => \'2\',
      \'body\' => array(
        \'und\' => array(
          array(
            \'value\' => "<h1>We will be&nbsp;happy to give you a demo!</h1>\\r\\n\\r\\n<p>Explore TapAnalytics&nbsp;easy&nbsp;set-up, dashboards, and reporting.</p>\\r\\n\\r\\n<p>We can even \\"Demo Your Data!\\" In other words, we build your trial TapAnalytics for you and with you.</p>\\r\\n<meta content=\\"text/html;charset = UTF-8\\" http-equiv=\\"content-type\\" />\\r\\n<form accept-charset=\\"UTF-8\\" action=\\"https://crm.zoho.com/crm/WebToLeadForm\\" method=\\"POST\\" name=\\"WebToLeads763020000000057128\\" onsubmit=\\"javascript:document.charset=&quot;UTF-8&quot;; return checkMandatery()\\"><input name=\\"xnQsjsdp\\" style=\\"display:none;\\" type=\\"text\\" value=\\"pQ3YVhBzWz1thYo@kRl79w$$\\" /> <input id=\\"zc_gad\\" name=\\"zc_gad\\" type=\\"hidden\\" value=\\"\\" /> <input name=\\"xmIwtLD\\" style=\\"display:none;\\" type=\\"text\\" value=\\"wIVwvlbIgJBBY23ty43Jf7wSAMS7sfrS\\" /> <input name=\\"actionType\\" style=\\"display:none;\\" type=\\"text\\" value=\\"TGVhZHM=\\" /> <input name=\\"returnURL\\" style=\\"display:none;\\" type=\\"text\\" value=\\"http://tapanalytics.com/thank-you-requesting-demo\\" /><br />\\r\\n&nbsp;\\r\\n<table border=\\"0\\" cellpadding=\\"6\\" cellspacing=\\"0\\" style=\\"background-color:white;color:black\\" width=\\"600\\">\\r\\n\\t<tbody>\\r\\n\\t\\t<tr>\\r\\n\\t\\t\\t<td align=\\"left\\" colspan=\\"2\\" style=\\"color:black;font-family:Arial;font-size:14px;\\">&nbsp;</td>\\r\\n\\t\\t</tr>\\r\\n\\t\\t<tr>\\r\\n\\t\\t\\t<td align=\\"left\\" nowrap=\\"nowrap\\" style=\\"font-size:12px;font-family:Arial;width:200px;\\">First Name<span style=\\"color:red;\\">*</span></td>\\r\\n\\t\\t\\t<td style=\\"width:250px;\\"><input maxlength=\\"40\\" name=\\"First Name\\" style=\\"width:250px;\\" type=\\"text\\" /></td>\\r\\n\\t\\t</tr>\\r\\n\\t\\t<tr>\\r\\n\\t\\t\\t<td align=\\"left\\" nowrap=\\"nowrap\\" style=\\"font-size:12px;font-family:Arial;width:200px;\\">Last Name<span style=\\"color:red;\\">*</span></td>\\r\\n\\t\\t\\t<td style=\\"width:250px;\\"><input maxlength=\\"80\\" name=\\"Last Name\\" style=\\"width:250px;\\" type=\\"text\\" /></td>\\r\\n\\t\\t</tr>\\r\\n\\t\\t<tr>\\r\\n\\t\\t\\t<td align=\\"left\\" nowrap=\\"nowrap\\" style=\\"font-size:12px;font-family:Arial;width:200px;\\">Email<span style=\\"color:red;\\">*</span></td>\\r\\n\\t\\t\\t<td style=\\"width:250px;\\"><input maxlength=\\"100\\" name=\\"Email\\" style=\\"width:250px;\\" type=\\"text\\" /></td>\\r\\n\\t\\t</tr>\\r\\n\\t\\t<tr>\\r\\n\\t\\t\\t<td align=\\"left\\" nowrap=\\"nowrap\\" style=\\"font-size:12px;font-family:Arial;width:200px;\\">Company</td>\\r\\n\\t\\t\\t<td style=\\"width:250px;\\"><input maxlength=\\"100\\" name=\\"Company\\" style=\\"width:250px;\\" type=\\"text\\" /></td>\\r\\n\\t\\t</tr>\\r\\n\\t\\t<tr>\\r\\n\\t\\t\\t<td align=\\"left\\" nowrap=\\"nowrap\\" style=\\"font-size:12px;font-family:Arial;width:200px;\\">Phone</td>\\r\\n\\t\\t\\t<td style=\\"width:250px;\\"><input maxlength=\\"30\\" name=\\"Phone\\" style=\\"width:250px;\\" type=\\"text\\" /></td>\\r\\n\\t\\t</tr>\\r\\n\\t\\t<tr>\\r\\n\\t\\t\\t<td align=\\"left\\" nowrap=\\"nowrap\\" style=\\"font-size:12px;font-family:Arial;width:200px;\\">Website</td>\\r\\n\\t\\t\\t<td style=\\"width:250px;\\"><input maxlength=\\"255\\" name=\\"Website\\" style=\\"width:250px;\\" type=\\"text\\" /></td>\\r\\n\\t\\t</tr>\\r\\n\\t\\t<tr style=\\"display:none;\\">\\r\\n\\t\\t\\t<td align=\\"left\\" nowrap=\\"nowrap\\" style=\\"font-size:12px;font-family:Arial;width:200px;\\" width=\\"50%\\">Lead Source</td>\\r\\n\\t\\t\\t<td style=\\"width:250px;\\"><select name=\\"Lead Source\\" style=\\"width:250px;\\"><option value=\\"-None-\\">-None-</option><option value=\\"Free Trial\\">Free Trial</option><option selected=\\"selected\\" value=\\"Demo Request\\">Demo Request</option><option value=\\"Website Question Form\\">Website Question Form</option><option value=\\"LinkedIn Ads\\">LinkedIn Ads</option><option value=\\"LinkedIn Research\\">LinkedIn Research</option><option value=\\"Google\\">Google</option><option value=\\"Other Advertisement\\">Other Advertisement</option><option value=\\"Cold Call\\">Cold Call</option><option value=\\"Web Research\\">Web Research</option><option value=\\"Employee Referral\\">Employee Referral</option><option value=\\"External Referral\\">External Referral</option><option value=\\"Partner Referral\\">Partner Referral</option><option value=\\"Public Relations\\">Public Relations</option><option value=\\"Trade Show\\">Trade Show</option><option value=\\"OnlineStore\\">OnlineStore</option><option value=\\"Internal Submission\\">Internal Submission</option><option value=\\"ClickFuel\\">ClickFuel</option><option value=\\"Newsletter\\">Newsletter</option> </select></td>\\r\\n\\t\\t</tr>\\r\\n\\t\\t<tr>\\r\\n\\t\\t\\t<td align=\\"center\\" colspan=\\"2\\" style=\\"padding-top: 15px;\\"><input style=\\"font-size:12px;color:black\\" type=\\"submit\\" value=\\"Submit\\" /> <input style=\\"font-size:12px;color:black\\" type=\\"reset\\" value=\\"Reset\\" /></td>\\r\\n\\t\\t</tr>\\r\\n\\t</tbody>\\r\\n</table>\\r\\n<script> var mndFileds=new Array(\'First Name\',\'Last Name\',\'Email\');var fldLangVal=new Array(\'First Name\',\'Last Name\',\'Email\');function reloadImg(){if(document.getElementById(\'imgid\').src.indexOf(\'&d\') !== -1 ){document.getElementById(\'imgid\').src=document.getElementById(\'imgid\').src.substring(0,document.getElementById(\'imgid\').src.indexOf(\'&d\'))+\'&d\'+new Date().getTime();}else{document.getElementById(\'imgid\').src = document.getElementById(\'imgid\').src+\'&d\'+new Date().getTime();}}function checkMandatery(){for(i=0;i<mndFileds.length;i++){ var fieldObj=document.forms[\'WebToLeads763020000000057128\'][mndFileds[i]];if(fieldObj) {if(((fieldObj.value).replace(/^\\\\s+|\\\\s+$/g, \'\')).length==0){alert(fldLangVal[i] +\' cannot be empty\'); fieldObj.focus(); return false;}else if(fieldObj.nodeName==\'SELECT\'){if(fieldObj.options[fieldObj.selectedIndex].value==\'-None-\'){alert(fldLangVal[i] +\' cannot be none\'); fieldObj.focus(); return false;}} else if(fieldObj.type ==\'checkbox\'){ if (fieldObj.checked == false){     alert(\'Please accept  \'+fldLangVal[i]); fieldObj.focus();return false;}}}}}</script></form>\\r\\n\\r\\n<form accept-charset=\\"UTF-8\\" action=\\"https://crm.zoho.com/crm/WebToLeadForm\\" method=\\"POST\\" name=\\"WebToLeads763020000000057128\\" onsubmit=\\"javascript:document.charset=&quot;UTF-8&quot;; return checkMandatery()\\"><br />\\r\\n<script> var mndFileds=new Array(\'First Name\',\'Last Name\',\'Email\');var fldLangVal=new Array(\'First Name\',\'Last Name\',\'Email\');function reloadImg(){if(document.getElementById(\'imgid\').src.indexOf(\'&d\') !== -1 ){document.getElementById(\'imgid\').src=document.getElementById(\'imgid\').src.substring(0,document.getElementById(\'imgid\').src.indexOf(\'&d\'))+\'&d\'+new Date().getTime();}else{document.getElementById(\'imgid\').src = document.getElementById(\'imgid\').src+\'&d\'+new Date().getTime();}}function checkMandatery(){for(i=0;i<mndFileds.length;i++){ var fieldObj=document.forms[\'WebToLeads763020000000057128\'][mndFileds[i]];if(fieldObj) {if(((fieldObj.value).replace(/^\\\\s+|\\\\s+$/g, \'\')).length==0){alert(fldLangVal[i] +\' cannot be empty\'); fieldObj.focus(); return false;}else if(fieldObj.nodeName==\'SELECT\'){if(fieldObj.options[fieldObj.selectedIndex].value==\'-None-\'){alert(fldLangVal[i] +\' cannot be none\'); fieldObj.focus(); return false;}} else if(fieldObj.type ==\'checkbox\'){ if (fieldObj.checked == false){     alert(\'Please accept  \'+fldLangVal[i]); fieldObj.focus();return false;}}}}}</script></form>\\r\\n",
            \'summary\' => \'\',
            \'format\' => \'full_html\',
            \'safe_value\' => "<h1>We will be happy to give you a demo!</h1>\\n<p>Explore TapAnalytics easy set-up, dashboards, and reporting.</p>\\n<p>We can even \\"Demo Your Data!\\" In other words, we build your trial TapAnalytics for you and with you.</p>\\n<p><meta content=\\"text/html;charset = UTF-8\\" http-equiv=\\"content-type\\" /></p>\\n<form accept-charset=\\"UTF-8\\" action=\\"https://crm.zoho.com/crm/WebToLeadForm\\" method=\\"POST\\" name=\\"WebToLeads763020000000057128\\" onsubmit=\\"javascript:document.charset=&quot;UTF-8&quot;; return checkMandatery()\\" id=\\"WebToLeads763020000000057128\\"><input name=\\"xnQsjsdp\\" style=\\"display:none;\\" type=\\"text\\" value=\\"pQ3YVhBzWz1thYo@kRl79w$$\\" /><input id=\\"zc_gad\\" name=\\"zc_gad\\" type=\\"hidden\\" value=\\"\\" /><input name=\\"xmIwtLD\\" style=\\"display:none;\\" type=\\"text\\" value=\\"wIVwvlbIgJBBY23ty43Jf7wSAMS7sfrS\\" /><input name=\\"actionType\\" style=\\"display:none;\\" type=\\"text\\" value=\\"TGVhZHM=\\" /><input name=\\"returnURL\\" style=\\"display:none;\\" type=\\"text\\" value=\\"http://tapanalytics.com/thank-you-requesting-demo\\" /><br />\\n \\n<table border=\\"0\\" cellpadding=\\"6\\" cellspacing=\\"0\\" style=\\"background-color:white;color:black\\" width=\\"600\\"><tbody><tr><td align=\\"left\\" colspan=\\"2\\" style=\\"color:black;font-family:Arial;font-size:14px;\\"> </td>\\n</tr><tr><td align=\\"left\\" nowrap=\\"nowrap\\" style=\\"font-size:12px;font-family:Arial;width:200px;\\">First Name<span style=\\"color:red;\\">*</span></td>\\n<td style=\\"width:250px;\\"><input maxlength=\\"40\\" name=\\"First Name\\" style=\\"width:250px;\\" type=\\"text\\" /></td>\\n</tr><tr><td align=\\"left\\" nowrap=\\"nowrap\\" style=\\"font-size:12px;font-family:Arial;width:200px;\\">Last Name<span style=\\"color:red;\\">*</span></td>\\n<td style=\\"width:250px;\\"><input maxlength=\\"80\\" name=\\"Last Name\\" style=\\"width:250px;\\" type=\\"text\\" /></td>\\n</tr><tr><td align=\\"left\\" nowrap=\\"nowrap\\" style=\\"font-size:12px;font-family:Arial;width:200px;\\">Email<span style=\\"color:red;\\">*</span></td>\\n<td style=\\"width:250px;\\"><input maxlength=\\"100\\" name=\\"Email\\" style=\\"width:250px;\\" type=\\"text\\" /></td>\\n</tr><tr><td align=\\"left\\" nowrap=\\"nowrap\\" style=\\"font-size:12px;font-family:Arial;width:200px;\\">Company</td>\\n<td style=\\"width:250px;\\"><input maxlength=\\"100\\" name=\\"Company\\" style=\\"width:250px;\\" type=\\"text\\" /></td>\\n</tr><tr><td align=\\"left\\" nowrap=\\"nowrap\\" style=\\"font-size:12px;font-family:Arial;width:200px;\\">Phone</td>\\n<td style=\\"width:250px;\\"><input maxlength=\\"30\\" name=\\"Phone\\" style=\\"width:250px;\\" type=\\"text\\" /></td>\\n</tr><tr><td align=\\"left\\" nowrap=\\"nowrap\\" style=\\"font-size:12px;font-family:Arial;width:200px;\\">Website</td>\\n<td style=\\"width:250px;\\"><input maxlength=\\"255\\" name=\\"Website\\" style=\\"width:250px;\\" type=\\"text\\" /></td>\\n</tr><tr style=\\"display:none;\\"><td align=\\"left\\" nowrap=\\"nowrap\\" style=\\"font-size:12px;font-family:Arial;width:200px;\\" width=\\"50%\\">Lead Source</td>\\n<td style=\\"width:250px;\\">\\n<select name=\\"Lead Source\\" style=\\"width:250px;\\"><option value=\\"-None-\\">-None-</option><option value=\\"Free Trial\\">Free Trial</option><option selected=\\"selected\\" value=\\"Demo Request\\">Demo Request</option><option value=\\"Website Question Form\\">Website Question Form</option><option value=\\"LinkedIn Ads\\">LinkedIn Ads</option><option value=\\"LinkedIn Research\\">LinkedIn Research</option><option value=\\"Google\\">Google</option><option value=\\"Other Advertisement\\">Other Advertisement</option><option value=\\"Cold Call\\">Cold Call</option><option value=\\"Web Research\\">Web Research</option><option value=\\"Employee Referral\\">Employee Referral</option><option value=\\"External Referral\\">External Referral</option><option value=\\"Partner Referral\\">Partner Referral</option><option value=\\"Public Relations\\">Public Relations</option><option value=\\"Trade Show\\">Trade Show</option><option value=\\"OnlineStore\\">OnlineStore</option><option value=\\"Internal Submission\\">Internal Submission</option><option value=\\"ClickFuel\\">ClickFuel</option><option value=\\"Newsletter\\">Newsletter</option></select></td>\\n</tr><tr><td align=\\"center\\" colspan=\\"2\\" style=\\"padding-top: 15px;\\"><input style=\\"font-size:12px;color:black\\" type=\\"submit\\" value=\\"Submit\\" /><input style=\\"font-size:12px;color:black\\" type=\\"reset\\" value=\\"Reset\\" /></td>\\n</tr></tbody></table><script>\\n<!--//--><![CDATA[// ><!--\\n var mndFileds=new Array(\'First Name\',\'Last Name\',\'Email\');var fldLangVal=new Array(\'First Name\',\'Last Name\',\'Email\');function reloadImg(){if(document.getElementById(\'imgid\').src.indexOf(\'&d\') !== -1 ){document.getElementById(\'imgid\').src=document.getElementById(\'imgid\').src.substring(0,document.getElementById(\'imgid\').src.indexOf(\'&d\'))+\'&d\'+new Date().getTime();}else{document.getElementById(\'imgid\').src = document.getElementById(\'imgid\').src+\'&d\'+new Date().getTime();}}function checkMandatery(){for(i=0;i<mndFileds.length;i++){ var fieldObj=document.forms[\'WebToLeads763020000000057128\'][mndFileds[i]];if(fieldObj) {if(((fieldObj.value).replace(/^\\\\s+|\\\\s+$/g, \'\')).length==0){alert(fldLangVal[i] +\' cannot be empty\'); fieldObj.focus(); return false;}else if(fieldObj.nodeName==\'SELECT\'){if(fieldObj.options[fieldObj.selectedIndex].value==\'-None-\'){alert(fldLangVal[i] +\' cannot be none\'); fieldObj.focus(); return false;}} else if(fieldObj.type ==\'checkbox\'){ if (fieldObj.checked == false){     alert(\'Please accept  \'+fldLangVal[i]); fieldObj.focus();return false;}}}}}\\n//--><!]]>\\n</script></form>\\n<form accept-charset=\\"UTF-8\\" action=\\"https://crm.zoho.com/crm/WebToLeadForm\\" method=\\"POST\\" name=\\"WebToLeads763020000000057128\\" onsubmit=\\"javascript:document.charset=&quot;UTF-8&quot;; return checkMandatery()\\" id=\\"WebToLeads763020000000057128\\">\\n<script>\\n<!--//--><![CDATA[// ><!--\\n var mndFileds=new Array(\'First Name\',\'Last Name\',\'Email\');var fldLangVal=new Array(\'First Name\',\'Last Name\',\'Email\');function reloadImg(){if(document.getElementById(\'imgid\').src.indexOf(\'&d\') !== -1 ){document.getElementById(\'imgid\').src=document.getElementById(\'imgid\').src.substring(0,document.getElementById(\'imgid\').src.indexOf(\'&d\'))+\'&d\'+new Date().getTime();}else{document.getElementById(\'imgid\').src = document.getElementById(\'imgid\').src+\'&d\'+new Date().getTime();}}function checkMandatery(){for(i=0;i<mndFileds.length;i++){ var fieldObj=document.forms[\'WebToLeads763020000000057128\'][mndFileds[i]];if(fieldObj) {if(((fieldObj.value).replace(/^\\\\s+|\\\\s+$/g, \'\')).length==0){alert(fldLangVal[i] +\' cannot be empty\'); fieldObj.focus(); return false;}else if(fieldObj.nodeName==\'SELECT\'){if(fieldObj.options[fieldObj.selectedIndex].value==\'-None-\'){alert(fldLangVal[i] +\' cannot be none\'); fieldObj.focus(); return false;}} else if(fieldObj.type ==\'checkbox\'){ if (fieldObj.checked == false){     alert(\'Please accept  \'+fldLangVal[i]); fieldObj.focus();return false;}}}}}\\n//--><!]]>\\n</script></form>\\n",
            \'safe_summary\' => \'\',
          ),
        ),
      ),
      \'metatags\' => array(),
      \'rdf_mapping\' => array(
        \'rdftype\' => array(
          \'sioc:Item\',
          \'foaf:Document\',
        ),
        \'title\' => array(
          \'predicates\' => array(
            \'dc:title\',
          ),
        ),
        \'created\' => array(
          \'predicates\' => array(
            \'dc:date\',
            \'dc:created\',
          ),
          \'datatype\' => \'xsd:dateTime\',
          \'callback\' => \'date_iso8601\',
        ),
        \'changed\' => array(
          \'predicates\' => array(
            \'dc:modified\',
          ),
          \'datatype\' => \'xsd:dateTime\',
          \'callback\' => \'date_iso8601\',
        ),
        \'body\' => array(
          \'predicates\' => array(
            \'content:encoded\',
          ),
        ),
        \'uid\' => array(
          \'predicates\' => array(
            \'sioc:has_creator\',
          ),
          \'type\' => \'rel\',
        ),
        \'name\' => array(
          \'predicates\' => array(
            \'foaf:name\',
          ),
        ),
        \'comment_count\' => array(
          \'predicates\' => array(
            \'sioc:num_replies\',
          ),
          \'datatype\' => \'xsd:integer\',
        ),
        \'last_activity\' => array(
          \'predicates\' => array(
            \'sioc:last_activity_date\',
          ),
          \'datatype\' => \'xsd:dateTime\',
          \'callback\' => \'date_iso8601\',
        ),
      ),
      \'cid\' => \'0\',
      \'last_comment_timestamp\' => \'1403755888\',
      \'last_comment_name\' => NULL,
      \'last_comment_uid\' => \'2\',
      \'comment_count\' => \'0\',
      \'nodeblock\' => array(
        \'nid\' => \'67\',
        \'enabled\' => \'1\',
        \'machine_name\' => \'67\',
        \'block_title\' => \'Request a Demo\',
        \'view_mode\' => \'full\',
        \'node_link\' => \'0\',
        \'comment_link\' => \'0\',
        \'translation_fallback\' => \'0\',
      ),
      \'name\' => \'holly\',
      \'picture\' => \'0\',
      \'data\' => \'a:5:{s:16:"ckeditor_default";s:1:"t";s:20:"ckeditor_show_toggle";s:1:"t";s:14:"ckeditor_width";s:4:"100%";s:13:"ckeditor_lang";s:2:"en";s:18:"ckeditor_auto_lang";s:1:"t";}\',
      \'path\' => array(
        \'pid\' => \'71\',
        \'source\' => \'node/67\',
        \'alias\' => \'request-demo\',
        \'language\' => \'und\',
      ),
      \'menu\' => NULL,
      \'node_export_drupal_version\' => \'7\',
    ),
  (object) array(
      \'vid\' => \'68\',
      \'uid\' => \'2\',
      \'title\' => \'Newsletter Signup\',
      \'log\' => \'\',
      \'status\' => \'1\',
      \'comment\' => \'1\',
      \'promote\' => \'0\',
      \'sticky\' => \'0\',
      \'vuuid\' => \'1eac3fc3-e310-4d85-b373-3e9a7c15e730\',
      \'nid\' => \'68\',
      \'type\' => \'page\',
      \'language\' => \'und\',
      \'created\' => \'1403756234\',
      \'changed\' => \'1409341412\',
      \'tnid\' => \'0\',
      \'translate\' => \'0\',
      \'uuid\' => \'eaa90a44-fced-41f7-9a66-2941535cffab\',
      \'revision_timestamp\' => \'1409341412\',
      \'revision_uid\' => \'2\',
      \'body\' => array(
        \'und\' => array(
          array(
            \'value\' => "<h1>Please sign up to receive our Newsletter!</h1>\\r\\n<meta content=\\"text/html;charset = UTF-8\\" http-equiv=\\"content-type\\" />\\r\\n<form accept-charset=\\"UTF-8\\" action=\\"https://crm.zoho.com/crm/WebToLeadForm\\" method=\\"POST\\" name=\\"WebToLeads763020000001993025\\" onsubmit=\\"javascript:document.charset=&quot;UTF-8&quot;; return checkMandatery()\\"><input name=\\"xnQsjsdp\\" style=\\"display:none;\\" type=\\"text\\" value=\\"pQ3YVhBzWz1thYo@kRl79w$$\\" /> <input id=\\"zc_gad\\" name=\\"zc_gad\\" type=\\"hidden\\" value=\\"\\" /> <input name=\\"xmIwtLD\\" style=\\"display:none;\\" type=\\"text\\" value=\\"wIVwvlbIgJAQUtWiv7CE1ZzqDFmW6s90\\" /> <input name=\\"actionType\\" style=\\"display:none;\\" type=\\"text\\" value=\\"TGVhZHM=\\" /> <input name=\\"returnURL\\" style=\\"display:none;\\" type=\\"text\\" value=\\"http://tapanalytics.com/thank-you-requesting-our-newsletter\\" />\\r\\n<table border=\\"0\\" cellpadding=\\"6\\" cellspacing=\\"0\\" style=\\"background-color:white;color:black\\" width=\\"600\\">\\r\\n\\t<tbody>\\r\\n\\t\\t<tr>\\r\\n\\t\\t\\t<td align=\\"left\\" colspan=\\"2\\" style=\\"color:black;font-family:Arial;font-size:14px;\\">&nbsp;</td>\\r\\n\\t\\t</tr>\\r\\n\\t\\t<tr>\\r\\n\\t\\t\\t<td align=\\"left\\" nowrap=\\"nowrap\\" style=\\"font-size:12px;font-family:Arial;width:200px;\\">First Name<span style=\\"color:red;\\">*</span></td>\\r\\n\\t\\t\\t<td style=\\"width:250px;\\"><input maxlength=\\"40\\" name=\\"First Name\\" style=\\"width:250px;\\" type=\\"text\\" /></td>\\r\\n\\t\\t</tr>\\r\\n\\t\\t<tr>\\r\\n\\t\\t\\t<td align=\\"left\\" nowrap=\\"nowrap\\" style=\\"font-size:12px;font-family:Arial;width:200px;\\">Last Name<span style=\\"color:red;\\">*</span></td>\\r\\n\\t\\t\\t<td style=\\"width:250px;\\"><input maxlength=\\"80\\" name=\\"Last Name\\" style=\\"width:250px;\\" type=\\"text\\" /></td>\\r\\n\\t\\t</tr>\\r\\n\\t\\t<tr>\\r\\n\\t\\t\\t<td align=\\"left\\" nowrap=\\"nowrap\\" style=\\"font-size:12px;font-family:Arial;width:200px;\\">Email<span style=\\"color:red;\\">*</span></td>\\r\\n\\t\\t\\t<td style=\\"width:250px;\\"><input maxlength=\\"100\\" name=\\"Email\\" style=\\"width:250px;\\" type=\\"text\\" /></td>\\r\\n\\t\\t</tr>\\r\\n\\t\\t<tr>\\r\\n\\t\\t\\t<td align=\\"left\\" nowrap=\\"nowrap\\" style=\\"font-size:12px;font-family:Arial;width:200px;\\">Company</td>\\r\\n\\t\\t\\t<td style=\\"width:250px;\\"><input maxlength=\\"100\\" name=\\"Company\\" style=\\"width:250px;\\" type=\\"text\\" /></td>\\r\\n\\t\\t</tr>\\r\\n\\t\\t<tr>\\r\\n\\t\\t\\t<td align=\\"left\\" nowrap=\\"nowrap\\" style=\\"font-size:12px;font-family:Arial;width:200px;\\">Phone</td>\\r\\n\\t\\t\\t<td style=\\"width:250px;\\"><input maxlength=\\"30\\" name=\\"Phone\\" style=\\"width:250px;\\" type=\\"text\\" /></td>\\r\\n\\t\\t</tr>\\r\\n\\t\\t<tr style=\\"display:none;\\">\\r\\n\\t\\t\\t<td align=\\"left\\" nowrap=\\"nowrap\\" style=\\"font-size:12px;font-family:Arial;width:200px;\\" width=\\"50%\\">Lead Source</td>\\r\\n\\t\\t\\t<td style=\\"width:250px;\\"><select name=\\"Lead Source\\" style=\\"width:250px;\\"><option value=\\"-None-\\">-None-</option><option value=\\"Free Trial\\">Free Trial</option><option value=\\"Demo Request\\">Demo Request</option><option value=\\"Website Question Form\\">Website Question Form</option><option value=\\"LinkedIn Ads\\">LinkedIn Ads</option><option value=\\"LinkedIn Research\\">LinkedIn Research</option><option value=\\"Google\\">Google</option><option value=\\"Other Advertisement\\">Other Advertisement</option><option value=\\"Cold Call\\">Cold Call</option><option value=\\"Web Research\\">Web Research</option><option value=\\"Employee Referral\\">Employee Referral</option><option value=\\"External Referral\\">External Referral</option><option value=\\"Partner Referral\\">Partner Referral</option><option value=\\"Public Relations\\">Public Relations</option><option value=\\"Trade Show\\">Trade Show</option><option value=\\"OnlineStore\\">OnlineStore</option><option value=\\"Internal Submission\\">Internal Submission</option><option value=\\"ClickFuel\\">ClickFuel</option><option selected=\\"selected\\" value=\\"Newsletter\\">Newsletter</option> </select></td>\\r\\n\\t\\t</tr>\\r\\n\\t\\t<tr>\\r\\n\\t\\t\\t<td align=\\"center\\" colspan=\\"2\\" style=\\"padding-top: 15px;\\"><input style=\\"font-size:12px;color:black\\" type=\\"submit\\" value=\\"Submit\\" /> <input style=\\"font-size:12px;color:black\\" type=\\"reset\\" value=\\"Reset\\" /></td>\\r\\n\\t\\t</tr>\\r\\n\\t</tbody>\\r\\n</table>\\r\\n<script> var mndFileds=new Array(\'First Name\',\'Last Name\',\'Email\');var fldLangVal=new Array(\'First Name\',\'Last Name\',\'Email\');function reloadImg(){if(document.getElementById(\'imgid\').src.indexOf(\'&d\') !== -1 ){document.getElementById(\'imgid\').src=document.getElementById(\'imgid\').src.substring(0,document.getElementById(\'imgid\').src.indexOf(\'&d\'))+\'&d\'+new Date().getTime();}else{document.getElementById(\'imgid\').src = document.getElementById(\'imgid\').src+\'&d\'+new Date().getTime();}}function checkMandatery(){for(i=0;i<mndFileds.length;i++){ var fieldObj=document.forms[\'WebToLeads763020000001993025\'][mndFileds[i]];if(fieldObj) {if(((fieldObj.value).replace(/^\\\\s+|\\\\s+$/g, \'\')).length==0){alert(fldLangVal[i] +\' cannot be empty\'); fieldObj.focus(); return false;}else if(fieldObj.nodeName==\'SELECT\'){if(fieldObj.options[fieldObj.selectedIndex].value==\'-None-\'){alert(fldLangVal[i] +\' cannot be none\'); fieldObj.focus(); return false;}} else if(fieldObj.type ==\'checkbox\'){ if (fieldObj.checked == false){     alert(\'Please accept  \'+fldLangVal[i]); fieldObj.focus();return false;}}}}}</script></form>\\r\\n\\r\\n<form accept-charset=\\"UTF-8\\" action=\\"https://crm.zoho.com/crm/WebToLeadForm\\" method=\\"POST\\" name=\\"WebToLeads763020000001993025\\" onsubmit=\\"javascript:document.charset=&quot;UTF-8&quot;; return checkMandatery()\\"><br />\\r\\n<script> var mndFileds=new Array(\'First Name\',\'Last Name\',\'Email\');var fldLangVal=new Array(\'First Name\',\'Last Name\',\'Email\');function reloadImg(){if(document.getElementById(\'imgid\').src.indexOf(\'&d\') !== -1 ){document.getElementById(\'imgid\').src=document.getElementById(\'imgid\').src.substring(0,document.getElementById(\'imgid\').src.indexOf(\'&d\'))+\'&d\'+new Date().getTime();}else{document.getElementById(\'imgid\').src = document.getElementById(\'imgid\').src+\'&d\'+new Date().getTime();}}function checkMandatery(){for(i=0;i<mndFileds.length;i++){ var fieldObj=document.forms[\'WebToLeads763020000001993025\'][mndFileds[i]];if(fieldObj) {if(((fieldObj.value).replace(/^\\\\s+|\\\\s+$/g, \'\')).length==0){alert(fldLangVal[i] +\' cannot be empty\'); fieldObj.focus(); return false;}else if(fieldObj.nodeName==\'SELECT\'){if(fieldObj.options[fieldObj.selectedIndex].value==\'-None-\'){alert(fldLangVal[i] +\' cannot be none\'); fieldObj.focus(); return false;}} else if(fieldObj.type ==\'checkbox\'){ if (fieldObj.checked == false){     alert(\'Please accept  \'+fldLangVal[i]); fieldObj.focus();return false;}}}}}</script></form>\\r\\n",
            \'summary\' => \'\',
            \'format\' => \'full_html\',
            \'safe_value\' => "<h1>Please sign up to receive our Newsletter!</h1>\\n<p><meta content=\\"text/html;charset = UTF-8\\" http-equiv=\\"content-type\\" /></p>\\n<form accept-charset=\\"UTF-8\\" action=\\"https://crm.zoho.com/crm/WebToLeadForm\\" method=\\"POST\\" name=\\"WebToLeads763020000001993025\\" onsubmit=\\"javascript:document.charset=&quot;UTF-8&quot;; return checkMandatery()\\" id=\\"WebToLeads763020000001993025\\"><input name=\\"xnQsjsdp\\" style=\\"display:none;\\" type=\\"text\\" value=\\"pQ3YVhBzWz1thYo@kRl79w$$\\" /><input id=\\"zc_gad\\" name=\\"zc_gad\\" type=\\"hidden\\" value=\\"\\" /><input name=\\"xmIwtLD\\" style=\\"display:none;\\" type=\\"text\\" value=\\"wIVwvlbIgJAQUtWiv7CE1ZzqDFmW6s90\\" /><input name=\\"actionType\\" style=\\"display:none;\\" type=\\"text\\" value=\\"TGVhZHM=\\" /><input name=\\"returnURL\\" style=\\"display:none;\\" type=\\"text\\" value=\\"http://tapanalytics.com/thank-you-requesting-our-newsletter\\" /><table border=\\"0\\" cellpadding=\\"6\\" cellspacing=\\"0\\" style=\\"background-color:white;color:black\\" width=\\"600\\"><tbody><tr><td align=\\"left\\" colspan=\\"2\\" style=\\"color:black;font-family:Arial;font-size:14px;\\"> </td>\\n</tr><tr><td align=\\"left\\" nowrap=\\"nowrap\\" style=\\"font-size:12px;font-family:Arial;width:200px;\\">First Name<span style=\\"color:red;\\">*</span></td>\\n<td style=\\"width:250px;\\"><input maxlength=\\"40\\" name=\\"First Name\\" style=\\"width:250px;\\" type=\\"text\\" /></td>\\n</tr><tr><td align=\\"left\\" nowrap=\\"nowrap\\" style=\\"font-size:12px;font-family:Arial;width:200px;\\">Last Name<span style=\\"color:red;\\">*</span></td>\\n<td style=\\"width:250px;\\"><input maxlength=\\"80\\" name=\\"Last Name\\" style=\\"width:250px;\\" type=\\"text\\" /></td>\\n</tr><tr><td align=\\"left\\" nowrap=\\"nowrap\\" style=\\"font-size:12px;font-family:Arial;width:200px;\\">Email<span style=\\"color:red;\\">*</span></td>\\n<td style=\\"width:250px;\\"><input maxlength=\\"100\\" name=\\"Email\\" style=\\"width:250px;\\" type=\\"text\\" /></td>\\n</tr><tr><td align=\\"left\\" nowrap=\\"nowrap\\" style=\\"font-size:12px;font-family:Arial;width:200px;\\">Company</td>\\n<td style=\\"width:250px;\\"><input maxlength=\\"100\\" name=\\"Company\\" style=\\"width:250px;\\" type=\\"text\\" /></td>\\n</tr><tr><td align=\\"left\\" nowrap=\\"nowrap\\" style=\\"font-size:12px;font-family:Arial;width:200px;\\">Phone</td>\\n<td style=\\"width:250px;\\"><input maxlength=\\"30\\" name=\\"Phone\\" style=\\"width:250px;\\" type=\\"text\\" /></td>\\n</tr><tr style=\\"display:none;\\"><td align=\\"left\\" nowrap=\\"nowrap\\" style=\\"font-size:12px;font-family:Arial;width:200px;\\" width=\\"50%\\">Lead Source</td>\\n<td style=\\"width:250px;\\">\\n<select name=\\"Lead Source\\" style=\\"width:250px;\\"><option value=\\"-None-\\">-None-</option><option value=\\"Free Trial\\">Free Trial</option><option value=\\"Demo Request\\">Demo Request</option><option value=\\"Website Question Form\\">Website Question Form</option><option value=\\"LinkedIn Ads\\">LinkedIn Ads</option><option value=\\"LinkedIn Research\\">LinkedIn Research</option><option value=\\"Google\\">Google</option><option value=\\"Other Advertisement\\">Other Advertisement</option><option value=\\"Cold Call\\">Cold Call</option><option value=\\"Web Research\\">Web Research</option><option value=\\"Employee Referral\\">Employee Referral</option><option value=\\"External Referral\\">External Referral</option><option value=\\"Partner Referral\\">Partner Referral</option><option value=\\"Public Relations\\">Public Relations</option><option value=\\"Trade Show\\">Trade Show</option><option value=\\"OnlineStore\\">OnlineStore</option><option value=\\"Internal Submission\\">Internal Submission</option><option value=\\"ClickFuel\\">ClickFuel</option><option selected=\\"selected\\" value=\\"Newsletter\\">Newsletter</option></select></td>\\n</tr><tr><td align=\\"center\\" colspan=\\"2\\" style=\\"padding-top: 15px;\\"><input style=\\"font-size:12px;color:black\\" type=\\"submit\\" value=\\"Submit\\" /><input style=\\"font-size:12px;color:black\\" type=\\"reset\\" value=\\"Reset\\" /></td>\\n</tr></tbody></table><script>\\n<!--//--><![CDATA[// ><!--\\n var mndFileds=new Array(\'First Name\',\'Last Name\',\'Email\');var fldLangVal=new Array(\'First Name\',\'Last Name\',\'Email\');function reloadImg(){if(document.getElementById(\'imgid\').src.indexOf(\'&d\') !== -1 ){document.getElementById(\'imgid\').src=document.getElementById(\'imgid\').src.substring(0,document.getElementById(\'imgid\').src.indexOf(\'&d\'))+\'&d\'+new Date().getTime();}else{document.getElementById(\'imgid\').src = document.getElementById(\'imgid\').src+\'&d\'+new Date().getTime();}}function checkMandatery(){for(i=0;i<mndFileds.length;i++){ var fieldObj=document.forms[\'WebToLeads763020000001993025\'][mndFileds[i]];if(fieldObj) {if(((fieldObj.value).replace(/^\\\\s+|\\\\s+$/g, \'\')).length==0){alert(fldLangVal[i] +\' cannot be empty\'); fieldObj.focus(); return false;}else if(fieldObj.nodeName==\'SELECT\'){if(fieldObj.options[fieldObj.selectedIndex].value==\'-None-\'){alert(fldLangVal[i] +\' cannot be none\'); fieldObj.focus(); return false;}} else if(fieldObj.type ==\'checkbox\'){ if (fieldObj.checked == false){     alert(\'Please accept  \'+fldLangVal[i]); fieldObj.focus();return false;}}}}}\\n//--><!]]>\\n</script></form>\\n<form accept-charset=\\"UTF-8\\" action=\\"https://crm.zoho.com/crm/WebToLeadForm\\" method=\\"POST\\" name=\\"WebToLeads763020000001993025\\" onsubmit=\\"javascript:document.charset=&quot;UTF-8&quot;; return checkMandatery()\\" id=\\"WebToLeads763020000001993025\\">\\n<script>\\n<!--//--><![CDATA[// ><!--\\n var mndFileds=new Array(\'First Name\',\'Last Name\',\'Email\');var fldLangVal=new Array(\'First Name\',\'Last Name\',\'Email\');function reloadImg(){if(document.getElementById(\'imgid\').src.indexOf(\'&d\') !== -1 ){document.getElementById(\'imgid\').src=document.getElementById(\'imgid\').src.substring(0,document.getElementById(\'imgid\').src.indexOf(\'&d\'))+\'&d\'+new Date().getTime();}else{document.getElementById(\'imgid\').src = document.getElementById(\'imgid\').src+\'&d\'+new Date().getTime();}}function checkMandatery(){for(i=0;i<mndFileds.length;i++){ var fieldObj=document.forms[\'WebToLeads763020000001993025\'][mndFileds[i]];if(fieldObj) {if(((fieldObj.value).replace(/^\\\\s+|\\\\s+$/g, \'\')).length==0){alert(fldLangVal[i] +\' cannot be empty\'); fieldObj.focus(); return false;}else if(fieldObj.nodeName==\'SELECT\'){if(fieldObj.options[fieldObj.selectedIndex].value==\'-None-\'){alert(fldLangVal[i] +\' cannot be none\'); fieldObj.focus(); return false;}} else if(fieldObj.type ==\'checkbox\'){ if (fieldObj.checked == false){     alert(\'Please accept  \'+fldLangVal[i]); fieldObj.focus();return false;}}}}}\\n//--><!]]>\\n</script></form>\\n",
            \'safe_summary\' => \'\',
          ),
        ),
      ),
      \'metatags\' => array(),
      \'rdf_mapping\' => array(
        \'rdftype\' => array(
          \'sioc:Item\',
          \'foaf:Document\',
        ),
        \'title\' => array(
          \'predicates\' => array(
            \'dc:title\',
          ),
        ),
        \'created\' => array(
          \'predicates\' => array(
            \'dc:date\',
            \'dc:created\',
          ),
          \'datatype\' => \'xsd:dateTime\',
          \'callback\' => \'date_iso8601\',
        ),
        \'changed\' => array(
          \'predicates\' => array(
            \'dc:modified\',
          ),
          \'datatype\' => \'xsd:dateTime\',
          \'callback\' => \'date_iso8601\',
        ),
        \'body\' => array(
          \'predicates\' => array(
            \'content:encoded\',
          ),
        ),
        \'uid\' => array(
          \'predicates\' => array(
            \'sioc:has_creator\',
          ),
          \'type\' => \'rel\',
        ),
        \'name\' => array(
          \'predicates\' => array(
            \'foaf:name\',
          ),
        ),
        \'comment_count\' => array(
          \'predicates\' => array(
            \'sioc:num_replies\',
          ),
          \'datatype\' => \'xsd:integer\',
        ),
        \'last_activity\' => array(
          \'predicates\' => array(
            \'sioc:last_activity_date\',
          ),
          \'datatype\' => \'xsd:dateTime\',
          \'callback\' => \'date_iso8601\',
        ),
      ),
      \'cid\' => \'0\',
      \'last_comment_timestamp\' => \'1403756234\',
      \'last_comment_name\' => NULL,
      \'last_comment_uid\' => \'2\',
      \'comment_count\' => \'0\',
      \'nodeblock\' => array(
        \'nid\' => \'68\',
        \'enabled\' => \'1\',
        \'machine_name\' => \'68\',
        \'block_title\' => \'Newsletter Signup\',
        \'view_mode\' => \'full\',
        \'node_link\' => \'0\',
        \'comment_link\' => \'0\',
        \'translation_fallback\' => \'0\',
      ),
      \'name\' => \'holly\',
      \'picture\' => \'0\',
      \'data\' => \'a:5:{s:16:"ckeditor_default";s:1:"t";s:20:"ckeditor_show_toggle";s:1:"t";s:14:"ckeditor_width";s:4:"100%";s:13:"ckeditor_lang";s:2:"en";s:18:"ckeditor_auto_lang";s:1:"t";}\',
      \'path\' => array(
        \'pid\' => \'72\',
        \'source\' => \'node/68\',
        \'alias\' => \'newsletter-signup\',
        \'language\' => \'und\',
      ),
      \'menu\' => NULL,
      \'node_export_drupal_version\' => \'7\',
    ),
)',
);
  return $node_export;
}
