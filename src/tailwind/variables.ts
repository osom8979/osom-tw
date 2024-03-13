import {hexToRgb} from './colors';
import type {OsomTheme} from './themes/interface';

export const osom_font_sans = '--osom-font-sans';
export const osom_font_serif = '--osom-font-serif';
export const osom_font_mono = '--osom-font-mono';
export const osom_color_base_100 = '--osom-color-base-100';
export const osom_color_base_200 = '--osom-color-base-200';
export const osom_color_base_300 = '--osom-color-base-300';
export const osom_color_base_content = '--osom-color-base-content';
export const osom_color_primary = '--osom-color-primary';
export const osom_color_primary_content = '--osom-color-primary-content';
export const osom_color_secondary = '--osom-color-secondary';
export const osom_color_secondary_content = '--osom-color-secondary-content';
export const osom_color_accent = '--osom-color-accent';
export const osom_color_accent_content = '--osom-color-accent-content';
export const osom_color_neutral = '--osom-color-neutral';
export const osom_color_neutral_content = '--osom-color-neutral-content';
export const osom_color_info = '--osom-color-info';
export const osom_color_info_content = '--osom-color-info-content';
export const osom_color_success = '--osom-color-success';
export const osom_color_success_content = '--osom-color-success-content';
export const osom_color_warning = '--osom-color-warning';
export const osom_color_warning_content = '--osom-color-warning-content';
export const osom_color_error = '--osom-color-error';
export const osom_color_error_content = '--osom-color-error-content';
export const osom_size_cell = '--osom-size-cell';
export const osom_rounded_box = '--osom-rounded-box';
export const osom_rounded_btn = '--osom-rounded-btn';
export const osom_rounded_badge = '--osom-rounded-badge';

export function convertFallbackVariables(theme: OsomTheme) {
  return {
    [osom_font_sans]: theme.fontSans,
    [osom_font_serif]: theme.fontSerif,
    [osom_font_mono]: theme.fontMono,
    [osom_color_base_100]: hexToRgb(theme.colorBase100),
    [osom_color_base_200]: hexToRgb(theme.colorBase200),
    [osom_color_base_300]: hexToRgb(theme.colorBase300),
    [osom_color_base_content]: hexToRgb(theme.colorBaseContent),
    [osom_color_primary]: hexToRgb(theme.colorPrimary),
    [osom_color_primary_content]: hexToRgb(theme.colorPrimaryContent),
    [osom_color_secondary]: hexToRgb(theme.colorSecondary),
    [osom_color_secondary_content]: hexToRgb(theme.colorSecondaryContent),
    [osom_color_accent]: hexToRgb(theme.colorAccent),
    [osom_color_accent_content]: hexToRgb(theme.colorAccentContent),
    [osom_color_neutral]: hexToRgb(theme.colorNeutral),
    [osom_color_neutral_content]: hexToRgb(theme.colorNeutralContent),
    [osom_color_info]: hexToRgb(theme.colorInfo),
    [osom_color_info_content]: hexToRgb(theme.colorInfoContent),
    [osom_color_success]: hexToRgb(theme.colorSuccess),
    [osom_color_success_content]: hexToRgb(theme.colorSuccessContent),
    [osom_color_warning]: hexToRgb(theme.colorWarning),
    [osom_color_warning_content]: hexToRgb(theme.colorWarningContent),
    [osom_color_error]: hexToRgb(theme.colorError),
    [osom_color_error_content]: hexToRgb(theme.colorErrorContent),
    [osom_size_cell]: theme.sizeCell,
    [osom_rounded_box]: theme.roundedBox,
    [osom_rounded_btn]: theme.roundedBtn,
    [osom_rounded_badge]: theme.roundedBadge,
  };
}
