// interface ILang {
//   supported: boolean;
//   label: string;
// }

export class AppConfig {
  public static get DEFAULT_LANG(): string {
    return 'en';
  }
  // public static get SUPPORTED_LANGUAGES(): Map<ILang> {
  //   return {
  //     ca: { supported: true, label: 'Català' },
  //     de: { supported: true, label: 'Deutsch' },
  //     dk: { supported: true, label: 'Dansk' },
  //     en: { supported: true, label: 'English' },
  //     es: { supported: true, label: 'Español' },
  //     fr: { supported: true, label: 'Français' },
  //     it: { supported: true, label: 'Italiano' },
  //     pt: { supported: true, label: 'Portuges' }
  //   };
  // }
}
