IMCE Watermark
http://drupal.org/project/imce_watermark

SUMMARY:
IMCE Watermark is a module for adding watermark fo IMCE image uploading.

REQUIREMENTS:
1. http://drupal.org/project/imce
2. Also you can use http://drupal.org/project/imagecache_actions module (it's not required!).
  2.1. For drupal 6 - imagecache;
  2.2. For drupal 7 - core image module.

INSTALLATION:
Install as usual, see http://drupal.org/documentation/install/modules-themes/modules-7 for further information.

UPGRADING:
No action necessary when upgrading from Drupal 6 to 7.

CONFIGURATION:
1. Visit module configuration page at /admin/config/media/imce/imce_watermark (/admin/settings/imce/imce_watermark for Drupal 6);
2. Select "Manual script watermark" for adding watermark via script:
  2.1. Upload new file for watermarking;
  2.2. Set parameters for this image: vertical/horizontal positions, margins and alpha level values.
3. If imagecache_actions enabled:
  3.1. Add image style (imagecache preset for Drupal 6), that have effect "Overlay (watermark)";
  3.2. Now it's accessible within IMCE watermark settings.
4. User with role permission: "imce watermark control" can control watermarking.

CONTACTS:
  Nikit - http://nikiit.ru/en/contact
