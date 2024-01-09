import 'styled-components';
import { dark } from '../styles/themes/dark';

type themeType = typeof dark

declare module 'styled-components' {
    export interface dark extends themeType {}
}