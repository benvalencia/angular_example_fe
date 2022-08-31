import { AuthenticationEffects } from './authentication.effects';
import { UserEffects } from './user.effects';
import {ContactEffects} from './contact.effects';
import {CompanyEffects} from './company/company.effects';

export const effects = [
  AuthenticationEffects,
  UserEffects,
  ContactEffects,
  CompanyEffects
];
