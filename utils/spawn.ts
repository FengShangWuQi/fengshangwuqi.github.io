import execa from "execa";

const useExeca = (script: string, args?: string[], opts?: execa.Options) =>
  execa(script, args, { stdio: `inherit`, ...opts });

export const spawn = (cmd: string, opts?: execa.Options) => {
  const [script, ...args] = cmd.split(/\s+/);
  return useExeca(script, args, opts);
};
