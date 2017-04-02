SESSION=expert-potato-workspace

tmux new-session -d -s $SESSION
tmux select-window -t $SESSION:0
tmux split-window -h
tmux send-keys 'webpack --display-error-details --progress --colors --watch' C-m
tmux select-pane -t :.0

tmux attach -t $SESSION
