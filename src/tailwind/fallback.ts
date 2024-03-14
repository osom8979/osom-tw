import {hexToRgb} from './colors';
import type {OsomTheme} from './themes/interface';

export class Fallback {
  public font_sans: string;
  public font_serif: string;
  public font_mono: string;
  public color_base_100: string;
  public color_base_200: string;
  public color_base_300: string;
  public color_base_content: string;
  public color_primary: string;
  public color_primary_content: string;
  public color_secondary: string;
  public color_secondary_content: string;
  public color_accent: string;
  public color_accent_content: string;
  public color_neutral: string;
  public color_neutral_content: string;
  public color_info: string;
  public color_info_content: string;
  public color_success: string;
  public color_success_content: string;
  public color_warning: string;
  public color_warning_content: string;
  public color_error: string;
  public color_error_content: string;
  public size_cell: string;
  public rounded_box: string;
  public rounded_btn: string;
  public rounded_badge: string;

  constructor(prefix = '') {
    this.font_sans = `--${prefix}font-sans`;
    this.font_serif = `--${prefix}font-serif`;
    this.font_mono = `--${prefix}font-mono`;
    this.color_base_100 = `--${prefix}color-base-100`;
    this.color_base_200 = `--${prefix}color-base-200`;
    this.color_base_300 = `--${prefix}color-base-300`;
    this.color_base_content = `--${prefix}color-base-content`;
    this.color_primary = `--${prefix}color-primary`;
    this.color_primary_content = `--${prefix}color-primary-content`;
    this.color_secondary = `--${prefix}color-secondary`;
    this.color_secondary_content = `--${prefix}color-secondary-content`;
    this.color_accent = `--${prefix}color-accent`;
    this.color_accent_content = `--${prefix}color-accent-content`;
    this.color_neutral = `--${prefix}color-neutral`;
    this.color_neutral_content = `--${prefix}color-neutral-content`;
    this.color_info = `--${prefix}color-info`;
    this.color_info_content = `--${prefix}color-info-content`;
    this.color_success = `--${prefix}color-success`;
    this.color_success_content = `--${prefix}color-success-content`;
    this.color_warning = `--${prefix}color-warning`;
    this.color_warning_content = `--${prefix}color-warning-content`;
    this.color_error = `--${prefix}color-error`;
    this.color_error_content = `--${prefix}color-error-content`;
    this.size_cell = `--${prefix}size-cell`;
    this.rounded_box = `--${prefix}rounded-box`;
    this.rounded_btn = `--${prefix}rounded-btn`;
    this.rounded_badge = `--${prefix}rounded-badge`;
  }

  public asVariables(theme: OsomTheme) {
    return {
      'color-scheme': theme.colorScheme,
      [this.font_sans]: theme.fontSans,
      [this.font_serif]: theme.fontSerif,
      [this.font_mono]: theme.fontMono,
      [this.color_base_100]: hexToRgb(theme.colorBase100),
      [this.color_base_200]: hexToRgb(theme.colorBase200),
      [this.color_base_300]: hexToRgb(theme.colorBase300),
      [this.color_base_content]: hexToRgb(theme.colorBaseContent),
      [this.color_primary]: hexToRgb(theme.colorPrimary),
      [this.color_primary_content]: hexToRgb(theme.colorPrimaryContent),
      [this.color_secondary]: hexToRgb(theme.colorSecondary),
      [this.color_secondary_content]: hexToRgb(theme.colorSecondaryContent),
      [this.color_accent]: hexToRgb(theme.colorAccent),
      [this.color_accent_content]: hexToRgb(theme.colorAccentContent),
      [this.color_neutral]: hexToRgb(theme.colorNeutral),
      [this.color_neutral_content]: hexToRgb(theme.colorNeutralContent),
      [this.color_info]: hexToRgb(theme.colorInfo),
      [this.color_info_content]: hexToRgb(theme.colorInfoContent),
      [this.color_success]: hexToRgb(theme.colorSuccess),
      [this.color_success_content]: hexToRgb(theme.colorSuccessContent),
      [this.color_warning]: hexToRgb(theme.colorWarning),
      [this.color_warning_content]: hexToRgb(theme.colorWarningContent),
      [this.color_error]: hexToRgb(theme.colorError),
      [this.color_error_content]: hexToRgb(theme.colorErrorContent),
      [this.size_cell]: theme.sizeCell,
      [this.rounded_box]: theme.roundedBox,
      [this.rounded_btn]: theme.roundedBtn,
      [this.rounded_badge]: theme.roundedBadge,
    } as Record<string, string>;
  }
}
