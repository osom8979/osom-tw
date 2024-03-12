import type {OsomTheme} from './interface';

export const DEFAULT_FONT_SANS = 'Noto Sans KR';
export const DEFAULT_FONT_SERIF = 'Hahmlet Variable';
export const DEFAULT_FONT_MONO = 'Nanum Gothic Coding';

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
    [osom_font_sans]: theme.fontSans || DEFAULT_FONT_SANS,
    [osom_font_serif]: theme.fontSerif || DEFAULT_FONT_SERIF,
    [osom_font_mono]: theme.fontMono || DEFAULT_FONT_MONO,
    [osom_color_base_100]: theme.colorBase100,
    [osom_color_base_200]: theme.colorBase200,
    [osom_color_base_300]: theme.colorBase300,
    [osom_color_base_content]: theme.colorBaseContent,
    [osom_color_primary]: theme.colorPrimary,
    [osom_color_primary_content]: theme.colorPrimaryContent,
    [osom_color_secondary]: theme.colorSecondary,
    [osom_color_secondary_content]: theme.colorSecondaryContent,
    [osom_color_info]: theme.colorInfo,
    [osom_color_info_content]: theme.colorInfoContent,
    [osom_color_success]: theme.colorSuccess,
    [osom_color_success_content]: theme.colorSuccessContent,
    [osom_color_warning]: theme.colorWarning,
    [osom_color_warning_content]: theme.colorWarningContent,
    [osom_color_error]: theme.colorError,
    [osom_color_error_content]: theme.colorErrorContent,
    [osom_size_cell]: theme.sizeCell,
    [osom_rounded_box]: theme.roundedBox,
    [osom_rounded_btn]: theme.roundedBtn,
    [osom_rounded_badge]: theme.roundedBadge,
  };
}
