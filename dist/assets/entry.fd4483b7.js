import{co as s}from"./index.8dc4a47e.js";const i="Backup",r="Restore",a="Start backup",n="Finish backup",d="[ {{item}} ] Backup was successful",l="[ {{item}} ] Backup failed",c="No file selected",_="Start restore",p="Finish restore",u="[ {{item}} ] Restore was successful",h="[ {{item}} ] Restore failed",m="Override",f="Leave empty if you don't need encryption",g="Encryption password",y="Wrong encryption password",w={backup:i,restore:r,start_backup:a,finish_backup:n,success_backup_item:d,failed_backup_item:l,no_file:c,start_restore:_,finish_restore:p,success_restore_item:u,failed_restore_item:h,override:m,encrypt_password_placeholder:f,encrypt_password:g,wrong_encrypt_password:y},k={paths:"Paths",protect_same_name:"Protect same name","protect_same_name-tips":"Protects same-name files from Delete or Rename"},b={internal_upload:"Internal upload",order_by:"Order by",order_bys:{created_at:"Created at",name:"Name",size:"Size",updated_at:"Updated at"},order_direction:"Order direction",order_directions:{ASC:"ASC",DESC:"DESC"},rapid_upload:"Rapid upload",refresh_token:"Refresh token",root_folder_id:"Root folder id"},v={client_id:"Client id","client_id-tips":"Keep it empty if you don't have one",client_secret:"Client secret","client_secret-tips":"Keep it empty if you don't have one",drive_type:"Drive type",drive_types:{backup:"Backup",default:"Default",resource:"Resource"},internal_upload:"Internal upload","internal_upload-tips":"If you are using Aliyun ECS is located in Beijing, you can turn it on to boost the upload speed",livp_download_format:"Livp download format",livp_download_formats:{jpeg:"Jpeg",mov:"Mov"},oauth_token_url:"Oauth token url",order_by:"Order by",order_bys:{created_at:"Created at",name:"Name",size:"Size",updated_at:"Updated at"},order_direction:"Order direction",order_directions:{ASC:"ASC",DESC:"DESC"},rapid_upload:"Rapid upload","rapid_upload-tips":"If you enable this option, the file will be uploaded to the server first, so the progress will be incorrect",refresh_token:"Refresh token",remove_way:"Remove way",remove_ways:{delete:"Delete",trash:"Trash"},root_folder_id:"Root folder id"},S={order_by:"Order by",order_bys:{created_at:"Created at",name:"Name",size:"Size",updated_at:"Updated at"},order_direction:"Order direction",order_directions:{ASC:"ASC",DESC:"DESC"},refresh_token:"Refresh token",root_folder_id:"Root folder id",share_id:"Share id",share_pwd:"Share pwd"},C={client_id:"Client id",client_secret:"Client secret",custom_crack_ua:"Custom crack ua",custom_upload_part_size:"Custom upload part size","custom_upload_part_size-tips":"0 for auto",download_api:"Download api",download_apis:{crack:"Crack",official:"Official"},order_by:"Order by",order_bys:{name:"Name",size:"Size",time:"Time"},order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},refresh_token:"Refresh token",root_folder_path:"Root folder path",upload_api:"Upload api",upload_thread:"Upload thread","upload_thread-tips":"1<=thread<=32"},P={album_id:"Album id",client_id:"Client id",client_secret:"Client secret",delete_origin:"Delete origin",refresh_token:"Refresh token",show_type:"Show type",show_types:{root:"Root",root_only_album:"Root only album",root_only_file:"Root only file"},upload_thread:"Upload thread","upload_thread-tips":"1<=thread<=32"},x={BDUSS:"BDUSS",pwd:"Pwd",root_folder_path:"Root folder path",surl:"Surl"},R={bbsid:"Bbsid",cookie:"Cookie",password:"Password",root_folder_id:"Root folder id",user_name:"User name"},A={address:"Address",cookie:"Cookie",custom_ua:"Custom ua",enable_thumb_and_folder_size:"Enable thumb and folder size",password:"Password",root_folder_path:"Root folder path",username:"Username"},T={directory_name_encryption:"Directory name encryption",directory_name_encryptions:{false:"False",true:"True"},encrypted_suffix:"Encrypted suffix","encrypted_suffix-tips":"for advanced user only! encrypted files will have this suffix",filename_encoding:"Filename encoding","filename_encoding-tips":"for advanced user only!",filename_encodings:{base32:"Base32",base32768:"Base32768",base64:"Base64"},filename_encryption:"Filename encryption",filename_encryptions:{obfuscate:"Obfuscate",off:"Off",standard:"Standard"},password:"Password","password-tips":"the main password",remote_path:"Remote path","remote_path-tips":"This is where the encrypted data stores",salt:"Salt","salt-tips":"If you don't know what is salt, treat it as a second password. Optional but recommended",show_hidden:"Show hidden","show_hidden-tips":"show hidden directories and files",thumbnail:"Thumbnail","thumbnail-tips":"enable thumbnail which pre-generated under .thumbnails folder"},D={access_key_id:"Access key id",add_filename_to_disposition:"Add filename to disposition","add_filename_to_disposition-tips":"Add filename to Content-Disposition header.",bucket:"Bucket",custom_host:"Custom host",endpoint:"Endpoint",force_path_style:"Force path style",list_object_version:"List object version",list_object_versions:{v1:"V1",v2:"V2"},placeholder:"Placeholder",region:"Region",remove_bucket:"Remove bucket","remove_bucket-tips":"Remove bucket name from path when using custom host.",root_folder_path:"Root folder path",secret_access_key:"Secret access key",session_token:"Session token",sign_url_expire:"Sign url expire"},U={client_id:"Client id","client_id-tips":"Keep it empty if you don't have one",client_secret:"Client secret","client_secret-tips":"Keep it empty if you don't have one",oauth_token_url:"Oauth token url",refresh_token:"Refresh token",root_folder_path:"Root folder path"},O={address:"Address",password:"Password",root_folder_path:"Root folder path",username:"Username"},z={password:"Password",root_folder_id:"Root folder id",username:"Username"},L={chunk_size:"Chunk size","chunk_size-tips":"chunk size while uploading (unit: MB)",client_id:"Client id",client_secret:"Client secret",order_by:"Order by","order_by-tips":"such as: folder,name,modifiedTime",order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},refresh_token:"Refresh token",root_folder_id:"Root folder id"},F={client_id:"Client id",client_secret:"Client secret",refresh_token:"Refresh token",root_folder_id:"Root folder id",show_archive:"Show archive"},q={password:"Password",root_folder_id:"Root folder id",username:"Username"},B={account:"Account",baseUrl:"BaseUrl","baseUrl-tips":"basic URL for file operation",cookie:"Cookie","cookie-tips":"about 15 days valid, ignore if shareUrl is used",password:"Password",repair_file_info:"Repair file info","repair_file_info-tips":"To use webdav, you need to enable it",root_folder_id:"Root folder id",shareUrl:"ShareUrl","shareUrl-tips":"used to get the sharing page",share_password:"Share password",type:"Type",types:{account:"Account",cookie:"Cookie",url:"Url"}},M={app_id:"App id","app_id-tips":"app id",app_secret:"App secret","app_secret-tips":"app secret",external_mode:"External mode","external_mode-tips":"external mode",root_folder_path:"Root folder path",tenant_url_prefix:"Tenant url prefix","tenant_url_prefix-tips":"tenant url prefix"},N={mkdir_perm:"Mkdir perm",recycle_bin_path:"Recycle bin path","recycle_bin_path-tips":"path to recycle bin, delete permanently if empty or keep 'delete permanently'",root_folder_path:"Root folder path",show_hidden:"Show hidden","show_hidden-tips":"show hidden directories and files",thumb_cache_folder:"Thumb cache folder",thumbnail:"Thumbnail","thumbnail-tips":"enable thumbnail"},E={access_token:"Access token",order_by:"Order by",order_bys:{size:"Size",title:"Title",updated_at:"Updated at"},order_desc:"Order desc",project_id:"Project id",root_folder_id:"Root folder id"},I={email:"Email",password:"Password",two_fa_code:"Two fa code","two_fa_code-tips":"2FA 6-digit code, filling in the 2FA code alone will not support reloading driver",two_fa_secret:"Two fa secret","two_fa_secret-tips":"2FA secret"},j={cloud_id:"Cloud id",device_info:"Device info",order_by:"Order by",order_bys:{filename:"Filename",filesize:"Filesize",lastOpTime:"LastOpTime"},order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},password:"Password",phone:"Phone",root_folder_id:"Root folder id",sms_code:"Sms code","sms_code-tips":"input 'send' send sms ",upload_thread:"Upload thread","upload_thread-tips":"1<=thread<=32"},V={cookie:"Cookie",song_limit:"Song limit","song_limit-tips":"only get 200 songs by default"},W={chunk_size:"Chunk size",client_id:"Client id",client_secret:"Client secret",custom_host:"Custom host","custom_host-tips":"Custom host for onedrive download link",is_sharepoint:"Is sharepoint",redirect_uri:"Redirect uri",refresh_token:"Refresh token",region:"Region",regions:{cn:"Cn",de:"De",global:"Global",us:"Us"},root_folder_path:"Root folder path",site_id:"Site id"},G={chunk_size:"Chunk size",client_id:"Client id",client_secret:"Client secret",custom_host:"Custom host","custom_host-tips":"Custom host for onedrive download link",email:"Email",region:"Region",regions:{cn:"Cn",de:"De",global:"Global",us:"Us"},root_folder_path:"Root folder path",tenant_id:"Tenant id"},Q={client_id:"Client id",client_secret:"Client secret",disable_media_link:"Disable media link",password:"Password",root_folder_id:"Root folder id",username:"Username"},Y={client_id:"Client id",client_secret:"Client secret",password:"Password",root_folder_id:"Root folder id",share_id:"Share id",share_pwd:"Share pwd",username:"Username"},X={cookie:"Cookie",order_by:"Order by",order_bys:{file_name:"File name",file_type:"File type",none:"None",updated_at:"Updated at"},order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},root_folder_id:"Root folder id"},H={cdn:"Cdn","cdn-tips":"If you enable this option, the download speed can be increased, but there will be some performance loss",cookie:"Cookie","cookie-tips":"Cookie can be used on multiple clients at the same time",password:"Password",phone:"Phone",root_folder_id:"Root folder id"},K={access_key_id:"Access key id",add_filename_to_disposition:"Add filename to disposition","add_filename_to_disposition-tips":"Add filename to Content-Disposition header.",bucket:"Bucket",custom_host:"Custom host",endpoint:"Endpoint",force_path_style:"Force path style",list_object_version:"List object version",list_object_versions:{v1:"V1",v2:"V2"},placeholder:"Placeholder",region:"Region",remove_bucket:"Remove bucket","remove_bucket-tips":"Remove bucket name from path when using custom host.",root_folder_path:"Root folder path",secret_access_key:"Secret access key",session_token:"Session token",sign_url_expire:"Sign url expire"},$={address:"Address",ignore_symlink_error:"Ignore symlink error",password:"Password",private_key:"Private key",root_folder_path:"Root folder path",username:"Username"},Z={address:"Address",password:"Password",root_folder_path:"Root folder path",share_name:"Share name",username:"Username"},J={address:"Address",password:"Password",repoId:"RepoId",repoPwd:"RepoPwd",root_folder_path:"Root folder path",token:"Token",username:"Username"},ee={cookie:"Cookie",order_by:"Order by",order_bys:{created:"Created",fileName:"FileName",fileSize:"FileSize",updated:"Updated"},order_direction:"Order direction",order_directions:{Asc:"Asc",Desc:"Desc"},project_id:"Project id",region:"Region",regions:{china:"China",international:"International"},root_folder_id:"Root folder id",use_s3_upload_method:"Use s3 upload method"},oe={cookie:"Cookie",download_api:"Download api",download_apis:{crack:"Crack",official:"Official"},order_by:"Order by",order_bys:{name:"Name",size:"Size",time:"Time"},order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},root_folder_path:"Root folder path"},te={captcha_token:"Captcha token",password:"Password",root_folder_id:"Root folder id",username:"Username"},se={captcha_token:"Captcha token",password:"Password",remove_way:"Remove way",remove_ways:{delete:"Delete",trash:"Trash"},root_folder_id:"Root folder id",safe_password:"Safe password",use_video_url:"Use video url",username:"Username"},ie={algorithms:"Algorithms","algorithms-tips":"sign type is algorithms,this is required",captcha_sign:"Captcha sign","captcha_sign-tips":"sign type is captcha_sign,this is required",captcha_token:"Captcha token",client_id:"Client id",client_secret:"Client secret",client_version:"Client version",device_id:"Device id",download_user_agent:"Download user agent",login_type:"Login type",login_types:{refresh_token:"Refresh token",user:"User"},package_name:"Package name",password:"Password","password-tips":"login type is user,this is required",refresh_token:"Refresh token","refresh_token-tips":"login type is refresh_token,this is required",remove_way:"Remove way",remove_ways:{delete:"Delete",trash:"Trash"},root_folder_id:"Root folder id",safe_password:"Safe password","safe_password-tips":"login type is user,this is required",sign_type:"Sign type",sign_types:{algorithms:"Algorithms",captcha_sign:"Captcha sign"},timestamp:"Timestamp","timestamp-tips":"sign type is captcha_sign,this is required",use_video_url:"Use video url",user_agent:"User agent",username:"Username","username-tips":"login type is user,this is required"},re={algorithms:"Algorithms","algorithms-tips":"sign type is algorithms,this is required",captcha_sign:"Captcha sign","captcha_sign-tips":"sign type is captcha_sign,this is required",captcha_token:"Captcha token",client_id:"Client id",client_secret:"Client secret",client_version:"Client version",device_id:"Device id",download_user_agent:"Download user agent",login_type:"Login type",login_types:{refresh_token:"Refresh token",user:"User"},package_name:"Package name",password:"Password","password-tips":"login type is user,this is required",refresh_token:"Refresh token","refresh_token-tips":"login type is refresh_token,this is required",root_folder_id:"Root folder id",sign_type:"Sign type",sign_types:{algorithms:"Algorithms",captcha_sign:"Captcha sign"},timestamp:"Timestamp","timestamp-tips":"sign type is captcha_sign,this is required",use_video_url:"Use video url",user_agent:"User agent",username:"Username","username-tips":"login type is user,this is required"},ae={captcha_token:"Captcha token",password:"Password",root_folder_id:"Root folder id",use_video_url:"Use video url",username:"Username"},ne={algorithms:"Algorithms","algorithms-tips":"sign type is algorithms,this is required",captcha_sign:"Captcha sign","captcha_sign-tips":"sign type is captcha_sign,this is required",captcha_token:"Captcha token",client_id:"Client id",client_secret:"Client secret",client_version:"Client version",device_id:"Device id",download_user_agent:"Download user agent",login_type:"Login type",login_types:{refresh_token:"Refresh token",user:"User"},package_name:"Package name",password:"Password","password-tips":"login type is user,this is required",refresh_token:"Refresh token","refresh_token-tips":"login type is refresh_token,this is required",root_folder_id:"Root folder id",sign_type:"Sign type",sign_types:{algorithms:"Algorithms",captcha_sign:"Captcha sign"},timestamp:"Timestamp","timestamp-tips":"sign type is captcha_sign,this is required",use_video_url:"Use video url",user_agent:"User agent",username:"Username","username-tips":"login type is user,this is required"},de={AUSHELLPORTAL:"AUSHELLPORTAL",apikey:"Apikey",root_folder_id:"Root folder id"},le={cookie:"Cookie",order_by:"Order by",order_bys:{file_name:"File name",file_type:"File type",none:"None",updated_at:"Updated at"},order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},root_folder_id:"Root folder id"},ce={anti_theft_chain_token:"Anti theft chain token",bucket:"Bucket",endpoint:"Endpoint",operator_name:"Operator name",operator_password:"Operator password",root_folder_path:"Root folder path",sign_url_expire:"Sign url expire"},_e={head_size:"Head size","head_size-tips":"Use head method to get file size, but it may be failed.",url_structure:"Url structure","url_structure-tips":`structure:FolderName:
  [FileName:][FileSize:][Modified:]Url`},pe={cookie:"Cookie",order_by:"Order by",order_bys:{CreatTime:"CreatTime",Name:"Name",Size:"Size",UpdateTime:"UpdateTime"},order_direction:"Order direction",order_directions:{Asc:"Asc",Desc:"Desc"},root_folder_id:"Root folder id",tf_uid:"Tf uid"},ue={max_file_size:"Max file size",min_file_size:"Min file size",num_file:"Num file",num_folder:"Num folder",root_folder_path:"Root folder path"},he={address:"Address",password:"Password",root_folder_path:"Root folder path",tls_insecure_skip_verify:"Tls insecure skip verify",username:"Username",vendor:"Vendor",vendors:{other:"Other",sharepoint:"Sharepoint"}},me={cookies:"Cookies",order_by:"Order by",order_bys:{name:"Name",size:"Size",updated_at:"Updated at"},order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},root_folder_id:"Root folder id",upload_thread:"Upload thread","upload_thread-tips":"4<=thread<=32"},fe={access_token:"Access token",family_id:"Family id","family_id-tips":"Keep it empty if you want to use your personal drive",refresh_token:"Refresh token",root_folder_id:"Root folder id",sort_rule:"Sort rule",sort_rules:{name_asc:"Name asc",name_desc:"Name desc",size_asc:"Size asc",size_desc:"Size desc",time_asc:"Time asc",time_desc:"Time desc"}},ge={client_id:"Client id",client_secret:"Client secret",order_by:"Order by",order_bys:{created:"Created",modified:"Modified",name:"Name",path:"Path",size:"Size"},order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},refresh_token:"Refresh token",root_folder_path:"Root folder path"},ye={"115 Cloud":{},"115 Share":{},"123Pan":{},"123PanLink":{},"123PanShare":{},"139Yun":{},"189Cloud":{alert:"You can try to use 189PC driver if this driver does not work."},"189CloudPC":{},"AList V2":{},"AList V3":{},Alias:{},Aliyundrive:{alert:`There may be an infinite loop bug in this driver.
Deprecated, no longer maintained and will be removed in a future version.
We recommend using the official driver AliyundriveOpen.`},AliyundriveOpen:{},AliyundriveShare:{},BaiduNetdisk:{},BaiduPhoto:{},BaiduShare:{},ChaoXingGroupDrive:{},Cloudreve:{},Crypt:{},Doge:{},Dropbox:{},FTP:{},FeijiPan:{},GoogleDrive:{},GooglePhoto:{},ILanZou:{},"IPFS API":{},Lanzou:{},Lark:{},Local:{},MediaTrack:{},Mega_nz:{},MoPan:{alert:"This network disk may store your password in clear text. Please set your password carefully"},NeteaseMusic:{},Onedrive:{},OnedriveAPP:{},PikPak:{},PikPakShare:{},Quark:{},Quqi:{},S3:{},SFTP:{},SMB:{},Seafile:{},Teambition:{},Terabox:{},Thunder:{},ThunderBrowser:{},ThunderBrowserExpert:{},ThunderExpert:{},ThunderX:{},ThunderXExpert:{},Trainbit:{},UC:{},USS:{},UrlTree:{},VTencent:{},Virtual:{},WebDav:{},WeiYun:{},WoPan:{},YandexDisk:{}},we={"115 Cloud":"115 Cloud","115 Share":"115 Share","123Pan":"123Pan","123PanLink":"123PanLink","123PanShare":"123PanShare","139Yun":"139Yun","189Cloud":"189Cloud","189CloudPC":"189CloudPC","AList V2":"AList V2","AList V3":"AList V3",Alias:"Alias",Aliyundrive:"Aliyundrive",AliyundriveOpen:"AliyundriveOpen",AliyundriveShare:"AliyundriveShare",BaiduNetdisk:"BaiduNetdisk",BaiduPhoto:"BaiduPhoto",BaiduShare:"BaiduShare",ChaoXingGroupDrive:"ChaoXingGroupDrive",Cloudreve:"Cloudreve",Crypt:"Crypt",Doge:"Doge",Dropbox:"Dropbox",FTP:"FTP",FeijiPan:"FeijiPan",GoogleDrive:"GoogleDrive",GooglePhoto:"GooglePhoto",ILanZou:"ILanZou","IPFS API":"IPFS API",Lanzou:"Lanzou",Lark:"Lark",Local:"Local",MediaTrack:"MediaTrack",Mega_nz:"Mega nz",MoPan:"MoPan",NeteaseMusic:"NeteaseMusic",Onedrive:"Onedrive",OnedriveAPP:"OnedriveAPP",PikPak:"PikPak",PikPakShare:"PikPakShare",Quark:"Quark",Quqi:"Quqi",S3:"S3",SFTP:"SFTP",SMB:"SMB",Seafile:"Seafile",Teambition:"Teambition",Terabox:"Terabox",Thunder:"Thunder",ThunderBrowser:"ThunderBrowser",ThunderBrowserExpert:"ThunderBrowserExpert",ThunderExpert:"ThunderExpert",ThunderX:"ThunderX",ThunderXExpert:"ThunderXExpert",Trainbit:"Trainbit",UC:"UC",USS:"USS",UrlTree:"UrlTree",VTencent:"VTencent",Virtual:"Virtual",WebDav:"WebDav",WeiYun:"WeiYun",WoPan:"WoPan",YandexDisk:"YandexDisk"},ke={"115 Cloud":{cookie:"Cookie","cookie-tips":"one of QR code token and cookie required",limit_rate:"Limit rate","limit_rate-tips":"limit all api request rate (1r/[limit_rate]s)",page_size:"Page size","page_size-tips":"list api per page size of 115 driver",qrcode_source:"Qrcode source","qrcode_source-tips":"select the QR code device, default linux",qrcode_sources:{android:"Android",ios:"Ios",linux:"Linux",mac:"Mac",tv:"Tv",web:"Web",windows:"Windows"},qrcode_token:"Qrcode token","qrcode_token-tips":"one of QR code token and cookie required",root_folder_id:"Root folder id"},"115 Share":{cookie:"Cookie","cookie-tips":"one of QR code token and cookie required",limit_rate:"Limit rate","limit_rate-tips":"limit all api request rate (1r/[limit_rate]s)",page_size:"Page size","page_size-tips":"list api per page size of 115 driver",qrcode_source:"Qrcode source","qrcode_source-tips":"select the QR code device, default linux",qrcode_sources:{android:"Android",ios:"Ios",linux:"Linux",mac:"Mac",tv:"Tv",web:"Web",windows:"Windows"},qrcode_token:"Qrcode token","qrcode_token-tips":"one of QR code token and cookie required",receive_code:"Receive code","receive_code-tips":"receive code of 115 share link",root_folder_id:"Root folder id",share_code:"Share code","share_code-tips":"share code of 115 share link"},"123Pan":{order_by:"Order by",order_bys:{file_name:"File name",size:"Size",update_at:"Update at"},order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},password:"Password",root_folder_id:"Root folder id",username:"Username"},"123PanLink":{origin_urls:"Origin urls","origin_urls-tips":`structure:FolderName:
  [FileSize:][Modified:]Url`,private_key:"Private key",uid:"Uid",valid_duration:"Valid duration","valid_duration-tips":"minutes"},"123PanShare":{accesstoken:"Accesstoken",order_by:"Order by",order_bys:{file_name:"File name",size:"Size",update_at:"Update at"},order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},root_folder_id:"Root folder id",sharekey:"Sharekey",sharepassword:"Sharepassword"},"139Yun":{authorization:"Authorization",cloud_id:"Cloud id",root_folder_id:"Root folder id",type:"Type",types:{family:"Family",personal:"Personal",personal_new:"Personal new"}},"189Cloud":{cookie:"Cookie","cookie-tips":"Fill in the cookie if need captcha",password:"Password",root_folder_id:"Root folder id",username:"Username"},"189CloudPC":{family_id:"Family id",family_transfer:"Family transfer",no_use_ocr:"No use ocr",order_by:"Order by",order_bys:{filename:"Filename",filesize:"Filesize",lastOpTime:"LastOpTime"},order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},password:"Password",rapid_upload:"Rapid upload",root_folder_id:"Root folder id",type:"Type",types:{family:"Family",personal:"Personal"},upload_method:"Upload method",upload_methods:{old:"Old",rapid:"Rapid",stream:"Stream"},upload_thread:"Upload thread","upload_thread-tips":"1<=thread<=32",username:"Username",validate_code:"Validate code"},"AList V2":{access_token:"Access token",password:"Password",root_folder_path:"Root folder path",url:"Url"},"AList V3":{meta_password:"Meta password",pass_ua_to_upsteam:"Pass ua to upsteam",password:"Password",root_folder_path:"Root folder path",token:"Token",url:"Url",username:"Username"},Alias:k,Aliyundrive:b,AliyundriveOpen:v,AliyundriveShare:S,BaiduNetdisk:C,BaiduPhoto:P,BaiduShare:x,ChaoXingGroupDrive:R,Cloudreve:A,Crypt:T,Doge:D,Dropbox:U,FTP:O,FeijiPan:z,GoogleDrive:L,GooglePhoto:F,ILanZou:q,"IPFS API":{endpoint:"Endpoint",gateway:"Gateway",root_folder_path:"Root folder path"},Lanzou:B,Lark:M,Local:N,MediaTrack:E,Mega_nz:I,MoPan:j,NeteaseMusic:V,Onedrive:W,OnedriveAPP:G,PikPak:Q,PikPakShare:Y,Quark:X,Quqi:H,S3:K,SFTP:$,SMB:Z,Seafile:J,Teambition:ee,Terabox:oe,Thunder:te,ThunderBrowser:se,ThunderBrowserExpert:ie,ThunderExpert:re,ThunderX:ae,ThunderXExpert:ne,Trainbit:de,UC:le,USS:ce,UrlTree:_e,VTencent:pe,Virtual:ue,WebDav:he,WeiYun:me,WoPan:fe,YandexDisk:ge,config:ye,drivers:we},be="Refresh",ve="Add",Se="Edit",Ce="Save",Pe="Update",xe="Copied",Re="Deleted successfully",Ae="Saved successfully",Te="Updated successfully",De="Choose",Ue="Confirm",Oe="Cancel",ze="Are you sure you want to delete [{{name}}]?",Le="Operations",Fe="Yes",qe="No",Be="Clear",Me="Select folder",Ne="Select folder or input path",Ee="Disable",Ie="Enable",je="OK",Ve="Back",We="Have an account?",Ge="Go to login",Qe="Close",Ye="Not currently supported",Xe="Please enter",He="Name",Ke={refresh:be,add:ve,edit:Se,delete:"Delete",save:Ce,update:Pe,copied:xe,delete_success:Re,save_success:Ae,update_success:Te,choose:De,confirm:Ue,cancel:Oe,delete_confirm:ze,operations:Le,yes:Fe,no:qe,clear:Be,choose_folder:Me,choose_or_input_path:Ne,disable:Ee,enable:Ie,ok:je,back:Ve,have_account:We,go_login:Ge,close:Qe,no_support_now:Ye,empty_input:Xe,name:He},$e={name:"Name",size:"Size",modified:"Modified"},Ze={download:"Download",failed_load_img:"Failed to load image",open_with:"Open with ...",play_with:"Play with ...",install:"Install",installing:"Installing","tr-install":"TrollStore","tr-installing":"TrollStore Installing",open_in_new_window:"Open in new window",auto_next:"Auto next"},Je={list:"List View",grid:"Grid View",image:"Image View"},eo="No images in the current folder",oo="Load more",to="No more",so="Please input password",io={more:"More",refresh:"Refresh",toggle_theme:"Toggle Theme",switch_lang:"Switch Language",toggle_markdown_toc:"Toggle Outline",toggle_checkbox:"Toggle Checkbox",rename:"Rename",input_new_name:"Input new name","only_one-tips":"Only one object can be selected to rename",move:"Move",copy:"Copy",choose_dst_folder:"Select destination folder",delete:"Delete","delete-tips":"Are you sure to delete the selected object?",copy_link:"Copy link",preview_page:"Preview page",down_link:"Download link",encode_down_link:"Encode download link",mkdir:"New Folder",input_dir_name:"Input folder name",new_file:"New File",input_filename:"Input filename",cancel_select:"Cancel Select",offline_download:"Offline download","offline_download-tips":"One URL per line",delete_policy:{delete_on_upload_succeed:"Delete on upload succeed",delete_on_upload_failed:"Delete on upload failed",delete_never:"Never delete",delete_always:"Always delete"},download:"Download",batch_download:"Batch Download",package_download:"Package Download",package_download_disabled:"Package download is disabled",send_aria2:"Send to Aria2",aria2_not_set:"Please set aria2 rpc url",send_aria2_success:"Send to aria2 successfully","pre_package_download-tips":"Using streamsaver in the browser instead of the server for package download requires the corresponding storage to support cors, and the unsupported storage will fail.","package_download-tips":"Downloading, please wait don't close the page",playlist_download:"Playlist Download",upload:"Upload",local_settings:"Local Settings",recursive_move:"Recursive Move","recursive_move_directory-tips":"Are you sure you want to move all files in the current folder and its subfolders to the specified folder?",remove_empty_directory:"Remove Empty Folder","remove_empty_directory-tips":"Are you sure to delete all its empty subfolders?",batch_rename:"Batch Rename",regex_rename:"Regex Rename",sequential_renaming:"Sequential Rename",regex_rename_preview:"Changed Files",regex_rename_preview_old_name:"Old Name",regex_rename_preview_new_name:"New Name",regular_rename:"Regular expression file renaming. Input the source file name regular expression on the first line, and input the new file name regular expression on the second line.",sequential_renaming_desc:"The new file name will have a numerical starting value appended to it, and it will be displayed sequentially by adding 1 to the starting value. Enter the new file name on the first line and the starting value on the second line."},ro={add_as_task:"Add as task","upload-tips":"Drag files here to upload, or click:",release:"Release to upload",no_files_drag:"No files were dragged in.",upload_files:"Choose Files",upload_folder:"Choose Folder",pending:"Pending",uploading:"Uploading",backending:"Uploading in the backend",success:"Success",error:"Error",back:"Back to Upload",clear_done:"Clear Done"},ao={aria2_rpc_url:"Aria2 RPC URL",aria2_rpc_secret:"Aria2 RPC secret",aria2_dir:"Aria2 download directory",show_folder_in_image_view:"Show folder in image view",show_folder_in_image_view_options:{top:"Top",bottom:"Bottom",none:"None"},global_default_layout:"Global default layout",global_default_layout_options:{list:"List View",grid:"Grid View",image:"Image View"},position_of_header_navbar:"Position of header & nav bar",position_of_header_navbar_options:{static:"Normal",sticky:"Stick to top of page",only_navbar_sticky:"Only nav bar sticky"},show_sidebar:"Show sidebar",show_sidebar_options:{none:"None",visible:"Visible"},list_item_filename_overflow:"List item filename overflow",list_item_filename_overflow_options:{ellipsis:"Ellipsis",scrollable:"Scrollable",multi_line:"Multi-line"},open_item_on_checkbox:"Open item on Checkbox",open_item_on_checkbox_options:{direct:"Direct",disable_while_checked:"Disable while checked",with_ctrl:"With Ctrl/Command hold",with_alt:"With Alt/Option hold"},select_with_mouse:"Select item with mouse while checkbox closed",select_with_mouse_options:{disabled:"Disabled",open_item_with_dblclick:"Open item with double click"}},no={current_status:"Current Status",initializing:"Initializing",fetching_struct:"Fetching folder structure",fetching_struct_failed:"Failed to fetch folder structure",downloading:"Downloading files, don't close or refresh the page",failed:"Failed to package download",success:"Download completed"},lo={powered_by:"Powered by AList",manage:"Manage"},co={search:"Search",no_result:"No result yet",scopes:{all:"All",folder:"Folder",file:"File"}},_o="Failed fetching settings: ",po="Failed get current user: ",uo={obj:$e,preview:Ze,layouts:Je,no_images:eo,load_more:oo,no_more:to,input_password:so,toolbar:io,upload:ro,local_settings:ao,package_download:no,footer:lo,search:co,fetching_settings_failed:_o,get_current_user_failed:po,"Loading storage, please wait":"Loading storage, please wait"},ho="Search index",mo="Current indexes",fo="Build indexes",go="Rebuild indexes",yo="Paths to update",wo="Max depth",ko="Update indexes",bo="Object count",vo="Last done time",So="Unknown",Co="Stop",Po="Clear",xo="Error",Ro={search_index:ho,current:mo,build:fo,rebuild:go,paths_to_update:yo,max_depth:wo,update:ko,obj_count:bo,last_done_time:vo,unknown:So,stop:Co,clear:Po,error:xo},Ao="Login to the",To="Remember me",Do="Forget password?",Uo="https://alist.nn.ci/faq/howto.html#how-to-get-password-if-i-forget-it",Oo="Clear",zo="Login",Lo="Browse as a guest",Fo="Login successfully",qo={login_to:Ao,"username-tips":"Input your username","password-tips":"Input your password","otp-tips":"Input your OTP Code",remember:To,forget:Do,forget_url:Uo,clear:Oo,login:zo,use_guest:Lo,success:Fo},Bo={dashboard:"Dashboard",settings:"Settings",site:"Site",style:"Style",preview:"Preview",global:"Global",other:"Other",users:"Users",storages:"Storages",metas:"Metas",profile:"Profile",about:"About",tasks:"Tasks",upload:"Upload",copy:"Copy","backup-restore":"Backup & Restore",home:"Home",indexes:"Indexes",sso:"Single Sign-on",docs:"Documentation",offline_download:"Offline Download",ldap:"LDAP",s3:"S3"},Mo="AList Manage",No="You are not admin user, please login with admin account.",Eo="Logout successfully",Io="Send",jo="Receive",Vo="Received messages",Wo={sidemenu:Bo,title:Mo,not_admin:No,logout_success:Eo,send:Io,receive:jo,received_msgs:Vo,"add_storage-tips":"You may need to fill in some information in the newly opened tab.","messenger-tips":"You may need to fill in some information on this tab as prompted."},Go="Path",Qo="Password",Yo="Write",Xo="Hide",Ho="Readme",Ko="Render a markdown at the bottom, support content or link",$o="Header",Zo="Render a markdown at the top, support content or link",Jo="Apply to sub folder",et="One regular expression per line",ot={path:Go,password:Qo,write:Yo,hide:Xo,readme:Ho,readme_help:Ko,header:$o,header_help:Zo,apply_sub:Jo,hide_help:et},tt="Allow indexed",st="Allow mounted",it="Announcement",rt="Aria2 secret",at="Aria2 uri",nt="Audio autoplay",dt="Audio cover",lt="Audio types",ct="Auto update index",_t="Customize body",pt="Customize head",ut="Default page size",ht="External previews",mt="Favicon",ft="Filename char mapping",gt="Forward direct link params",yt="Hide files",wt="Home container",kt={hope_container:"Hope container",max_980px:"Max 980px"},bt="Home icon",vt="Iframe previews",St="Ignore direct link params",Ct="Ignore paths",Pt="Image types",xt="Index progress",Rt="Ldap default dir",At="Ldap default permission",Tt="Ldap login enabled",Dt="Ldap login tips",Ut="Ldap manager dn",Ot="Ldap manager password",zt="Ldap server",Lt="Ldap user search base",Ft="Ldap user search filter",qt="Link expiration",Bt="Logo",Mt="Main color",Nt="Max index depth",Et="Ocr api",It="Package download",jt="Pagination type",Vt={all:"All",auto_load_more:"Auto load more",load_more:"Load more",pagination:"Pagination"},Wt="Privacy regs",Gt="Proxy ignore headers",Qt="Proxy types",Yt="Qbittorrent seedtime",Xt="Qbittorrent url",Ht="Robots txt",Kt="S3 access key id",$t="S3 buckets",Zt="S3 secret access key",Jt="Search index",es={bleve:"Bleve",database:"Database",database_non_full_text:"Database non full text",meilisearch:"Meilisearch",none:"None"},os="Settings layout",ts={list:"List",responsive:"Responsive"},ss="Sign all",is="Site title",rs="Sso application name",as="Sso auto register",ns="Sso client id",ds="Sso client secret",ls="Sso compatibility mode",cs="Sso default dir",_s="Sso default permission",ps="Sso endpoint name",us="Sso jwt public key",hs="Sso login enabled",ms="Sso login platform",fs={Casdoor:"Casdoor",Dingtalk:"Dingtalk",Github:"Github",Google:"Google",Microsoft:"Microsoft",OIDC:"OIDC"},gs="Sso oidc username key",ys="Sso organization name",ws="Text types",ks="Token",bs="Version",vs="Video autoplay",Ss="Video types",Cs="Webauthn login enabled",Ps={allow_indexed:tt,allow_mounted:st,announcement:it,aria2_secret:rt,aria2_uri:at,audio_autoplay:nt,audio_cover:dt,audio_types:lt,auto_update_index:ct,customize_body:_t,customize_head:pt,default_page_size:ut,external_previews:ht,favicon:mt,filename_char_mapping:ft,forward_direct_link_params:gt,hide_files:yt,home_container:wt,home_containers:kt,home_icon:bt,iframe_previews:vt,ignore_direct_link_params:St,ignore_paths:Ct,"ignore_paths-tips":"one path per line",image_types:Pt,index_progress:xt,ldap_default_dir:Rt,ldap_default_permission:At,ldap_login_enabled:Tt,ldap_login_tips:Dt,ldap_manager_dn:Ut,ldap_manager_password:Ot,ldap_server:zt,ldap_user_search_base:Lt,ldap_user_search_filter:Ft,link_expiration:qt,logo:Bt,main_color:Mt,max_index_depth:Nt,"max_index_depth-tips":"max depth of index",ocr_api:Et,package_download:It,pagination_type:jt,pagination_types:Vt,privacy_regs:Wt,proxy_ignore_headers:Gt,proxy_types:Qt,qbittorrent_seedtime:Yt,qbittorrent_url:Xt,robots_txt:Ht,s3_access_key_id:Kt,s3_buckets:$t,s3_secret_access_key:Zt,search_index:Jt,search_indexs:es,settings_layout:os,settings_layouts:ts,sign_all:ss,site_title:is,sso_application_name:rs,sso_auto_register:as,sso_client_id:ns,sso_client_secret:ds,sso_compatibility_mode:ls,sso_default_dir:cs,sso_default_permission:_s,sso_endpoint_name:ps,sso_jwt_public_key:us,sso_login_enabled:hs,sso_login_platform:ms,sso_login_platforms:fs,sso_oidc_username_key:gs,sso_organization_name:ys,text_types:ws,token:ks,version:bs,video_autoplay:vs,video_types:Ss,webauthn_login_enabled:Cs},xs="Aria2",Rs="Aria2 Version:",As="Set aria2",Ts="Copy Token",Ds="Reset Token",Us="Reset Token Successfully",Os="Unknown type",zs="Set qBittorrent",Ls="qBittorrent",Fs={aria2:xs,aria2_version:Rs,set_aria2:As,copy_token:Ts,reset_token:Ds,reset_token_success:Us,unknown_type:Os,set_qbit:zs,qbittorrent:Ls},qs={mount_path:"Mount Path","mount_path-tips":"The path you want to mount to, it is unique and cannot be repeated",driver:"Driver",order:"Order","order-tips":"Use to sort",status:"Status",remark:"Remark",cache_expiration:"Cache Expiration","cache_expiration-tips":"The cache expiration time for this storage(minutes)",down_proxy_url:"Download proxy URL",web_proxy:"Web proxy",webdav_policy:"WebDAV policy",proxy_range:"Proxy Range","proxy_range-tips":"Need to enable proxy",webdav_policys:{"302_redirect":"302 redirect",use_proxy_url:"use proxy URL",native_proxy:"native proxy"},order_by:"Order by",order_bys:{name:"Name",size:"Size",modified:"Modified"},order_direction:"Order direction",order_directions:{asc:"Ascending",desc:"Descending"},extract_folder:"Extract folder",extract_folders:{front:"Extract to front",back:"Extract to back"},enable_sign:"Enable sign"},Bs={start_load_success:"Start loading",load_all:"Reload All",filter_by_driver:"Filter by driver",table_layout:"Table layout"},Ms={common:qs,other:Bs},Ns="Download file to local machine",Es="Transfer downloaded file to corresponding storage",Is="Upload file to corresponding storage",js="Copy file from a storage to another storage",Vs="Completed",Ws="Running",Gs="Clear Succeeded",Qs="Retry",Ys="Retry Failed",Xs={0:"Pending",1:"Running",2:"Succeeded",3:"Canceling",4:"Canceled",5:"Errored",6:"Failing",7:"Failed",8:"WaitingRetry",9:"BeforeRetry"},Hs={offline_download:Ns,offline_download_transfer:Es,upload:Is,copy:js,done:Vs,undone:Ws,clear_succeeded:Gs,retry:Qs,retry_failed:Ys,state:Xs},Ks={see_hides:"Can see hides",access_without_password:"Access without password",offline_download:"Add offline download tasks",write:"Make dir or upload",rename:"Rename",move:"Move",copy:"Copy",delete:"Delete",webdav_read:"Webdav read",webdav_manage:"Webdav manage"},$s="Username",Zs="Password",Js="Base path",ei="Role",oi="Permission",ti="Disabled",si="Available",ii="Update Profile",ri="Update profile successfully, please re-login.",ai="Change Username",ni="Change Password",di="Confirm Password",li="The password you input twice is not the same",ci="Enable 2FA",_i="Cancel 2FA",pi="Cancel 2FA successfully",ui="Scan the QR code to save the secret key",hi="Or input the secret key manually",mi="Input the code of your 2FA app",fi="Verify",gi="So you cannot modify anything in the manage page.",yi="Single sign-on Login",wi="Connect Single sign-on Platform",ki="Disconnect Single sign-on Platform",bi="WebAuthn",vi="Add a Webauthn credential",Si="Webauthn credential successfully added!",Ci="Webauthn is not supported in your browser or you are in an unsafe origin",Pi={permissions:Ks,username:$s,password:Zs,base_path:Js,role:ei,permission:oi,disabled:ti,available:si,update_profile:ii,update_profile_success:ri,change_username:ai,change_password:ni,"change_password-tips":"Keep the password empty if you don't want to change it",confirm_password:di,"confirm_password-tips":"Repeat the password that you just input",confirm_password_not_same:li,enable_2fa:ci,cancel_2fa:_i,cancel_2fa_success:pi,"2fa_already_enabled":"2FA is already enabled",scan_qr:ui,or_manual:hi,input_code:mi,verify:fi,"guest-tips":"You are currently visiting as a guest.",modify_nothing:gi,sso_login:yi,connect_sso:wi,disconnect_sso:ki,webauthn:bi,add_webauthn:vi,add_webauthn_success:Si,webauthn_not_supported:Ci},o=Object.assign({"./br.json":w,"./drivers.json":ke,"./global.json":Ke,"./home.json":uo,"./index.json":s,"./indexes.json":Ro,"./login.json":qo,"./manage.json":Wo,"./metas.json":ot,"./settings.json":Ps,"./settings_other.json":Fs,"./storages.json":Ms,"./tasks.json":Hs,"./users.json":Pi}),xi={};for(const e in o){const t=e.split("/")[1].split(".")[0];xi[t]=o[e]}export{xi as default};
