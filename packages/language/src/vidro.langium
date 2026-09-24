grammar Vidro

hidden terminal WS: /\s+/;
hidden terminal ML_COMMENT: /\/\*[\s\S]*?\*\//;
hidden terminal SL_COMMENT: /\/\/[^\n\r]*/;

entry VidroFile:
    'project' ':' project=STRING ';'
    declarations+=Declaration*;

Declaration:
    Target | Environment;

Target:
    name=ID '{'
        'PATH' ':' path=STRING ';'
    '}';

Environment:
    target=ID '.' environment=ID '{'
        entries+=Entry*
    '}';

Entry:
    name=ENV_KEY (
        ';'
        | ':' value=Value ';'
    );

Value:
    LiteralValue | ExternalValue;

LiteralValue:
    value=STRING;

ExternalValue:
    '$' name=ENV_KEY;

terminal ENV_KEY: /[A-Z_][A-Z0-9_]*/;
terminal ID: /[_a-zA-Z][\w-]*/;
terminal STRING: /"(\\.|[^"\\])*"|'(\\.|[^'\\])*'/;
