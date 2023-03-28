export interface IDiagnosticReporterOptions {
    stackSize?: number;
}
export declare type GenericDiagnostic<K extends DiagnosticKind, T = unknown> = {
    kind: K;
    details: {
        message: string;
        createdAt: Date;
    } & T;
};
export declare type DiagnosticKind = 'error' | 'warning' | 'info';
export declare type DiagnosticListener<T extends DiagnosticKind = DiagnosticKind> = (diagnostic: {
    kind: T;
} & Diagnostic extends infer U ? U : 'foo') => void | Promise<void>;
export declare type DiagnosticEvent = 'diagnostic' | `diagnostic.${DiagnosticKind}`;
export declare type GetEventListener<E extends DiagnosticEvent> = E extends 'diagnostic' ? DiagnosticListener : E extends `diagnostic.${infer K}` ? K extends DiagnosticKind ? DiagnosticListener<K> : never : never;
export declare type Diagnostic = ErrorDiagnostic | WarningDiagnostic | InfoDiagnostic;
export declare type ErrorDiagnosticSeverity = 'fatal' | 'error' | 'silly';
export declare type ErrorDiagnostic = GenericDiagnostic<'error', {
    name: string;
    severity: ErrorDiagnosticSeverity;
    error: Error;
}>;
export declare type WarningDiagnostic = GenericDiagnostic<'warning', {
    origin?: string;
}>;
export declare type InfoDiagnostic<T = unknown> = GenericDiagnostic<'info', {
    params?: T;
}>;
export interface IDiagnosticReporter {
    stack: {
        readonly size: number;
        readonly items: Diagnostic[];
    };
    report(diagnostic: Diagnostic): IDiagnosticReporter;
    onDiagnostic(listener: DiagnosticListener): IDiagnosticReporter;
    on<T extends DiagnosticKind>(kind: T, listener: DiagnosticListener<T>): IDiagnosticReporter;
}
declare const createDiagnosticReporter: (options?: IDiagnosticReporterOptions) => IDiagnosticReporter;
export { createDiagnosticReporter };
