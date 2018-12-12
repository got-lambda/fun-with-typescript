.DEFAULT_GOAL := all

MAIN_FILES := $(wildcard ./src/*.ts)

.PHONY: $(MAIN_FILES)

$(MAIN_FILES):
	yarn ts-node $@

clj_repl:
	clj -J-Dclojure.server.myrepl="{:port 5555,:accept,clojure.core.server/repl}"

all: $(MAIN_FILES)
