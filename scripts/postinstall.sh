set -e
set -x

sed -i.bak 's/protected _flush/public _flush/' node_modules/odata-v4-server/build/lib/processor.d.ts
