import { StringValue } from 'ms';
export declare const config: {
    readonly port: string | 3000;
    readonly mongodb: {
        readonly uri: string;
    };
    readonly jwt: {
        readonly secret: string;
        readonly expiresIn: StringValue;
    };
    readonly bcrypt: {
        readonly saltRounds: 10;
    };
    readonly email: {
        readonly host: string | undefined;
        readonly port: number;
        readonly user: string | undefined;
        readonly pass: string | undefined;
    };
    readonly frontend: {
        readonly url: string | undefined;
    };
};
//# sourceMappingURL=config.d.ts.map