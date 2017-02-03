import { DeclaredValue } from './declared-value';
export interface Package {
    width: number;
    length: number;
    height: number;
    weight: number;
    declared_value: DeclaredValue;
    description: string;
    type?: string;
}
