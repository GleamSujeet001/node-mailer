const nodemailer = require('nodemailer');
require('dotenv').config();

// Create a transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

const sendEmail = (to, subject, userName = '', messageContent = '', isAdminEmail = false) => {
  const htmlContent = isAdminEmail ? `

<table border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout:fixed;background-color:#f9f9f9" id="bodyTable">
   <tbody>
      <tr>
         <td style="padding:20px;" align="center" valign="top" id="bodyCell">
            <table border="0" cellpadding="0" cellspacing="0" width="100%" class="wrapperBody" style="max-width:600px">
               <tbody>
                  <tr>
                     <td align="center" valign="top">
                        <table border="0" cellpadding="0" cellspacing="0" width="100%" class="tableCard" style="background-color:#fff;border-color:#e5e5e5;border-style:solid;border-width:0 1px 1px 1px;">
                           <tbody>
                              <tr>
                                 <td style="background-color:#f36f21;font-size:1px;line-height:3px" height="3">&nbsp;</td>
                              </tr>
                              <tr>
                                 <td style="padding-top: 60px; padding-bottom: 20px;" align="center" valign="middle" class="emailLogo">
                                    <a href="https://www.starlinediamonds.com/" style="text-decoration:none" target="_blank">
                                    <img alt="" border="0" src="https://media.licdn.com/dms/image/v2/C560BAQFiouVI82losg/company-logo_200_200/company-logo_200_200/0/1647942150559/starline_diamonds_logo?e=2147483647&v=beta&t=ZYNIchwfM61LedKocLg1PmMTG7zC5InJsEqPdyO9H08" style="width:100%;max-width:150px;height:auto;display:block" width="150">
                                    </a>
                                 </td>
                              </tr>
                              <tr>
                                 <td style="padding-bottom: 5px; padding-left: 20px; padding-right: 20px;" align="center" valign="top" class="mainTitle">
                                    <h2 class="text" style="color:#000;font-family:Poppins,Helvetica,Arial,sans-serif;font-size:28px;font-weight:500;font-style:normal;letter-spacing:normal;line-height:36px;text-transform:none;text-align:center;padding:0;margin:0">New Contact Form Submission</h2>
                                 </td>
                              </tr>
                              <tr>
                                 <td style="padding-bottom: 30px; padding-left: 20px; padding-right: 20px;" align="center" valign="top" class="subTitle">
                                    <h4 class="text" style="color:#999;font-family:Poppins,Helvetica,Arial,sans-serif;font-size:16px;font-weight:500;font-style:normal;letter-spacing:normal;line-height:24px;text-transform:none;text-align:center;padding:0;margin:0">Contact Form Details</h4>
                                 </td>
                              </tr>
                              <tr>
                                 <td style="padding-left:20px;padding-right:20px" align="center" valign="top" class="containtTable ui-sortable">
                                    <table border="0" cellpadding="0" cellspacing="0" width="100%" class="tableDescription">
                                       <tbody>
                                          <tr>
                                             <td align="center" valign="top" class="description">
                                                <p class="text" style="color:#666;font-family:'Open Sans',Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;font-style:normal;letter-spacing:normal;line-height:22px;text-transform:none;text-align:center;padding:0;margin:0">${messageContent}</p>
                                             </td>
                                          </tr>
                                          <table border="0" cellpadding="0" cellspacing="0" width="100%" class="space">
                                             <tbody>
                                             </tbody>
                                          </table>
                                          <table border="0" cellpadding="0" cellspacing="0" width="100%" class="wrapperFooter" style="max-width:600px">
                                             <tbody>
                                                <tr>
                                                   <td align="center" valign="top">
                                                      <table border="0" cellpadding="0" cellspacing="0" width="100%" class="footer">
                                                         <tbody>
                                                            <tr>
                                                               <td style="padding-top:10px;padding-bottom:10px;padding-left:10px;padding-right:10px" align="center" valign="top" class="socialLinks">
                                                                  <a href="#facebook-link" style="display:inline-block" target="_blank" class="facebook">
                                                                  <img alt="" border="0" src="http://email.aumfusion.com/vespro/img/social/light/facebook.png" style="height:auto;width:100%;max-width:40px;margin-left:2px;margin-right:2px" width="40">
                                                                  </a>
                                                                  <a href="#twitter-link" style="display: inline-block;" target="_blank" class="twitter">
                                                                  <img alt="" border="0" src="http://email.aumfusion.com/vespro/img/social/light/twitter.png" style="height:auto;width:100%;max-width:40px;margin-left:2px;margin-right:2px" width="40">
                                                                  </a>
                                                                  <a href="#instagram-link" style="display: inline-block;" target="_blank" class="instagram">
                                                                  <img alt="" border="0" src="http://email.aumfusion.com/vespro/img/social/light/instagram.png" style="height:auto;width:100%;max-width:40px;margin-left:2px;margin-right:2px" width="40">
                                                                  </a>
                                                                  <a href="#linkdin-link" style="display: inline-block;" target="_blank" class="linkdin">
                                                                  <img alt="" border="0" src="http://email.aumfusion.com/vespro/img/social/light/linkdin.png" style="height:auto;width:100%;max-width:40px;margin-left:2px;margin-right:2px" width="40">
                                                                  </a>
                                                               </td>
                                                            </tr>
                                                            <tr>
                                                               <td style="padding: 10px 10px 5px;" align="center" valign="top" class="brandInfo">
                                                                  <p class="text" style="color:#bbb;font-family:'Open Sans',Helvetica,Arial,sans-serif;font-size:12px;font-weight:400;font-style:normal;letter-spacing:normal;line-height:20px;text-transform:none;text-align:center;padding:0;margin:0">©&nbsp;LD House, Level 3, FP 129/Plot 1, Ghod Dod Road, Surat 395 001. Gujarat, India.</p>
                                                               </td>
                                                            </tr>
                                                            <tr>
                                                               <td style="padding-top:10px;padding-bottom:10px;padding-left:10px;padding-right:10px" align="center" valign="top" class="appLinks">
                                                                  <a href="#Play-Store-Link" style="display: inline-block;" target="_blank" class="play-store">
                                                                  <img alt="" border="0" src="http://email.aumfusion.com/vespro/img/app/play-store.png" style="height:auto;margin:5px;width:100%;max-width:120px" width="120">
                                                                  </a>
                                                                  <a href="#App-Store-Link" style="display: inline-block;" target="_blank" class="app-store">
                                                                  <img alt="" border="0" src="http://email.aumfusion.com/vespro/img/app/app-store.png" style="height:auto;margin:5px;width:100%;max-width:120px" width="120">
                                                                  </a>
                                                               </td>
                                                            </tr>
                                                         </tbody>
                                                      </table>
                                                   </td>
                                                </tr>
                                             </tbody>
                                          </table>
                                       </tbody>
                                    </table>
                                 </td>
                              </tr>
                           </tbody>
                        </table>
                     </td>
                  </tr>
               </tbody>
            </table>
         </td>
      </tr>
   </tbody>
</table>
` : `
<!-- User Email Template -->
<table border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout:fixed;background-color:#f9f9f9" id="bodyTable">
   <tbody>
      <tr>
         <td style="padding:20px;" align="center" valign="top" id="bodyCell">
            <table border="0" cellpadding="0" cellspacing="0" width="100%" class="wrapperBody" style="max-width:600px">
               <tbody>
                  <tr>
                     <td align="center" valign="top">
                        <table border="0" cellpadding="0" cellspacing="0" width="100%" class="tableCard" style="background-color:#fff;border-color:#e5e5e5;border-style:solid;border-width:0 1px 1px 1px;">
                           <tbody>
                              <tr>
                                 <td style="background-color:#f36f21;font-size:1px;line-height:3px" height="3">&nbsp;</td>
                              </tr>
                              <tr>
                                 <td style="padding-top: 60px; padding-bottom: 20px;" align="center" valign="middle" class="emailLogo">
                                    <a href="https://www.starlinediamonds.com/" style="text-decoration:none" target="_blank">
                                    <img alt="" border="0" src="https://media.licdn.com/dms/image/v2/C560BAQFiouVI82losg/company-logo_200_200/company-logo_200_200/0/1647942150559/starline_diamonds_logo?e=2147483647&v=beta&t=ZYNIchwfM61LedKocLg1PmMTG7zC5InJsEqPdyO9H08" style="width:100%;max-width:150px;height:auto;display:block" width="150">
                                    </a>
                                 </td>
                              </tr>
                              <tr>
                                 <td style="padding-bottom: 5px; padding-left: 20px; padding-right: 20px;" align="center" valign="top" class="mainTitle">
                                    <h2 class="text" style="color:#000;font-family:Poppins,Helvetica,Arial,sans-serif;font-size:28px;font-weight:500;font-style:normal;letter-spacing:normal;line-height:36px;text-transform:none;text-align:center;padding:0;margin:0">Hi ${userName}</h2>
                                 </td>
                              </tr>
                              <tr>
                                 <td style="padding-bottom: 30px; padding-left: 20px; padding-right: 20px;" align="center" valign="top" class="subTitle">
                                    <h4 class="text" style="color:#999;font-family:Poppins,Helvetica,Arial,sans-serif;font-size:16px;font-weight:500;font-style:normal;letter-spacing:normal;line-height:24px;text-transform:none;text-align:center;padding:0;margin:0">Thank You for Contacting Us</h4>
                                 </td>
                              </tr>
                              <tr>
                                 <td style="padding-left:20px;padding-right:20px" align="center" valign="top" class="containtTable ui-sortable">
                                    <table border="0" cellpadding="0" cellspacing="0" width="100%" class="tableDescription">
                                       <tbody>
                                          <tr>
                                             <td  align="center" valign="top" class="description">
                                                <p class="text" style="color:#666;font-family:'Open Sans',Helvetica,Arial,sans-serif;font-size:14px;font-weight:400;font-style:normal;letter-spacing:normal;line-height:22px;text-transform:none;text-align:center;padding:0;margin:0">${messageContent}</p>
                                             </td>
                                          </tr>
                                          <table border="0" cellpadding="0" cellspacing="0" width="100%" class="space">
                                             <tbody>
                                             </tbody>
                                          </table>
                                          <table border="0" cellpadding="0" cellspacing="0" width="100%" class="wrapperFooter" style="max-width:600px">
                                             <tbody>
                                                <tr>
                                                   <td align="center" valign="top">
                                                      <table border="0" cellpadding="0" cellspacing="0" width="100%" class="footer">
                                                         <tbody>
                                                            <tr>
                                                               <td style="padding-top:10px;padding-bottom:10px;padding-left:10px;padding-right:10px" align="center" valign="top" class="socialLinks">
                                                                  <a href="#facebook-link" style="display:inline-block" target="_blank" class="facebook">
                                                                  <img alt="" border="0" src="http://email.aumfusion.com/vespro/img/social/light/facebook.png" style="height:auto;width:100%;max-width:40px;margin-left:2px;margin-right:2px" width="40">
                                                                  </a>
                                                                  <a href="#twitter-link" style="display: inline-block;" target="_blank" class="twitter">
                                                                  <img alt="" border="0" src="http://email.aumfusion.com/vespro/img/social/light/twitter.png" style="height:auto;width:100%;max-width:40px;margin-left:2px;margin-right:2px" width="40">
                                                                  </a>
                                                                  <a href="#instagram-link" style="display: inline-block;" target="_blank" class="instagram">
                                                                  <img alt="" border="0" src="http://email.aumfusion.com/vespro/img/social/light/instagram.png" style="height:auto;width:100%;max-width:40px;margin-left:2px;margin-right:2px" width="40">
                                                                  </a>
                                                                  <a href="#linkdin-link" style="display: inline-block;" target="_blank" class="linkdin">
                                                                  <img alt="" border="0" src="http://email.aumfusion.com/vespro/img/social/light/linkdin.png" style="height:auto;width:100%;max-width:40px;margin-left:2px;margin-right:2px" width="40">
                                                                  </a>
                                                               </td>
                                                            </tr>
                                                            <tr>
                                                               <td style="padding: 10px 10px 5px;" align="center" valign="top" class="brandInfo">
                                                                  <p class="text" style="color:#bbb;font-family:'Open Sans',Helvetica,Arial,sans-serif;font-size:12px;font-weight:400;font-style:normal;letter-spacing:normal;line-height:20px;text-transform:none;text-align:center;padding:0;margin:0">©&nbsp;LD House, Level 3, FP 129/Plot 1, Ghod Dod Road, Surat 395 001. Gujarat, India.</p>
                                                               </td>
                                                            </tr>
                                                            <tr>
                                                               <td style="padding-top:10px;padding-bottom:10px;padding-left:10px;padding-right:10px" align="center" valign="top" class="appLinks">
                                                                  <a href="#Play-Store-Link" style="display: inline-block;" target="_blank" class="play-store">
                                                                  <img alt="" border="0" src="http://email.aumfusion.com/vespro/img/app/play-store.png" style="height:auto;margin:5px;width:100%;max-width:120px" width="120">
                                                                  </a>
                                                                  <a href="#App-Store-Link" style="display: inline-block;" target="_blank" class="app-store">
                                                                  <img alt="" border="0" src="http://email.aumfusion.com/vespro/img/app/app-store.png" style="height:auto;margin:5px;width:100%;max-width:120px" width="120">
                                                                  </a>
                                                               </td>
                                                            </tr>
                                                         </tbody>
                                                      </table>
                                                   </td>
                                                </tr>
                                             </tbody>
                                          </table>
                                       </tbody>
                                    </table>
                                 </td>
                              </tr>
                           </tbody>
                        </table>
                     </td>
                  </tr>
               </tbody>
            </table>
         </td>
      </tr>
   </tbody>
</table>
  `;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject,
    html: htmlContent,
  };

  return transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
